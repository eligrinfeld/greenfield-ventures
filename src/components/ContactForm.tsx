
import { useState } from "react";
import { useForm } from "react-hook-form";
import Button from "./Button";
import { Check, Loader2 } from "lucide-react";

type FormData = {
  fullName: string;
  email: string;
  company?: string;
  message: string;
  isAccredited: boolean;
};

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    
    // Simulate form submission (replace with actual API call)
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    console.log("Form submitted:", data);
    setIsSubmitting(false);
    setIsSubmitted(true);
    reset();
    
    // Reset success message after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false);
    }, 5000);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-8">
      {isSubmitted ? (
        <div className="text-center py-8 animate-fade-in">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-6">
            <Check className="h-8 w-8 text-green-600" />
          </div>
          <h3 className="text-2xl font-bold text-darkgray mb-2">Thank You!</h3>
          <p className="text-gray-600 mb-6">
            Your message has been received. We'll be in touch soon.
          </p>
          <Button 
            onClick={() => setIsSubmitted(false)}
            variant="secondary"
          >
            Send Another Message
          </Button>
        </div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div>
            <label htmlFor="fullName" className="block text-sm font-medium text-darkgray mb-1">
              Full Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="fullName"
              className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-greenfield/40 transition-colors ${
                errors.fullName ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="John Doe"
              {...register("fullName", { required: "Full name is required" })}
            />
            {errors.fullName && (
              <p className="mt-1 text-sm text-red-500">{errors.fullName.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-darkgray mb-1">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-greenfield/40 transition-colors ${
                errors.email ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="john@example.com"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address",
                },
              })}
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="company" className="block text-sm font-medium text-darkgray mb-1">
              Company (Optional)
            </label>
            <input
              type="text"
              id="company"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-greenfield/40 transition-colors"
              placeholder="Your Company"
              {...register("company")}
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-darkgray mb-1">
              Message <span className="text-red-500">*</span>
            </label>
            <textarea
              id="message"
              rows={4}
              className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-greenfield/40 transition-colors ${
                errors.message ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="How can we help you?"
              {...register("message", { required: "Message is required" })}
            />
            {errors.message && (
              <p className="mt-1 text-sm text-red-500">{errors.message.message}</p>
            )}
          </div>

          <div className="flex items-start">
            <div className="flex items-center h-5">
              <input
                id="isAccredited"
                type="checkbox"
                className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-greenfield/30"
                {...register("isAccredited")}
              />
            </div>
            <label htmlFor="isAccredited" className="ml-2 text-sm text-gray-600">
              I am an accredited investor
            </label>
          </div>

          <div>
            <Button
              type="submit"
              className="w-full"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Submitting...
                </>
              ) : (
                "Submit"
              )}
            </Button>
          </div>
          
          <p className="text-xs text-gray-500 mt-4">
            By submitting this form, you agree to our Privacy Policy and Terms of Service.
          </p>
        </form>
      )}
    </div>
  );
};

export default ContactForm;
