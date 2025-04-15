
import Layout from "@/components/Layout";
import ContactForm from "@/components/ContactForm";
import { Mail, MapPin, Phone } from "lucide-react";

const Contact = () => {
  return (
    <Layout>
      {/* Page Header */}
      <div className="bg-darkgray text-white py-28 md:py-36">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">Contact Us</h1>
          <div className="w-20 h-1 bg-greenfield mx-auto"></div>
        </div>
      </div>
      
      {/* Contact Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="animate-slide-in-right">
              <h2 className="text-3xl font-bold text-darkgray mb-8">Get in Touch</h2>
              <p className="text-gray-600 mb-12 max-w-md">
                Interested in our investment opportunities or have questions about our approach? We'd love to hear from you.
              </p>
              
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="p-3 bg-greenfield/10 rounded-full mr-4">
                    <MapPin className="h-6 w-6 text-greenfield" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-darkgray mb-1">Location</h3>
                    <p className="text-gray-600">Colorado-based</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="p-3 bg-greenfield/10 rounded-full mr-4">
                    <Mail className="h-6 w-6 text-greenfield" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-darkgray mb-1">Email</h3>
                    <a 
                      href="mailto:contact@greenfieldventures.com" 
                      className="text-gray-600 hover:text-greenfield transition-colors"
                    >
                      contact@greenfieldventures.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="p-3 bg-greenfield/10 rounded-full mr-4">
                    <Phone className="h-6 w-6 text-greenfield" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-darkgray mb-1">Phone</h3>
                    <p className="text-gray-600">(720) 555-0123</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="animate-slide-in-left">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
      
      {/* Map Section - Could be replaced with an actual map */}
      <section className="h-96 bg-lightgray relative">
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="text-gray-500">Map Placeholder - Colorado Region</p>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
