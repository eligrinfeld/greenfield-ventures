
import Button from "./Button";
import { ArrowRight } from "lucide-react";

const AboutSection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-darkgray mb-4">About Us</h2>
          <div className="w-20 h-1 bg-greenfield mx-auto mb-8"></div>
          <p className="text-gray-600 leading-relaxed mb-8 animate-fade-in">
            Greenfield Ventures LLC is a Colorado-based real estate investment firm founded in 2017. We specialize in identifying and developing residential properties in emerging neighborhoods, driving value through strategic investments.
          </p>
          <Button to="/about" variant="secondary">
            Learn More <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>

        {/* Timeline/Milestones */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
          <div className="bg-lightgray p-8 rounded-lg shadow-sm transition-lift animate-fade-in">
            <div className="text-greenfield font-bold text-xl mb-2">2017</div>
            <h3 className="text-xl font-semibold text-darkgray mb-3">Founded</h3>
            <p className="text-gray-600">
              Established in Colorado, focusing on identifying promising real estate investment opportunities in emerging residential neighborhoods.
            </p>
          </div>
          
          <div className="bg-lightgray p-8 rounded-lg shadow-sm transition-lift animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="text-greenfield font-bold text-xl mb-2">2020</div>
            <h3 className="text-xl font-semibold text-darkgray mb-3">Strategic Growth</h3>
            <p className="text-gray-600">
              Expanded our real estate investment portfolio, focusing on strategic property acquisitions in up-and-coming areas.
            </p>
          </div>
          
          <div className="bg-lightgray p-8 rounded-lg shadow-sm transition-lift animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="text-greenfield font-bold text-xl mb-2">Present</div>
            <h3 className="text-xl font-semibold text-darkgray mb-3">Continued Expansion</h3>
            <p className="text-gray-600">
              Continuing to drive value through strategic investments in residential emerging neighborhoods across Colorado.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
