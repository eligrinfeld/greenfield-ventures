
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
            Greenfield Ventures LLC is a Colorado-based firm committed to identifying and accelerating high-impact opportunities in real estate and emerging technologies. We combine on-the-ground insight with data-driven strategies to build long-term value for our investors and partners.
          </p>
          <Button to="/about" variant="secondary">
            Learn More <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>

        {/* Timeline/Milestones */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
          <div className="bg-lightgray p-8 rounded-lg shadow-sm transition-lift animate-fade-in">
            <div className="text-greenfield font-bold text-xl mb-2">2018</div>
            <h3 className="text-xl font-semibold text-darkgray mb-3">Founded</h3>
            <p className="text-gray-600">
              Established in Colorado with a focus on identifying undervalued properties in emerging neighborhoods.
            </p>
          </div>
          
          <div className="bg-lightgray p-8 rounded-lg shadow-sm transition-lift animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="text-greenfield font-bold text-xl mb-2">2020</div>
            <h3 className="text-xl font-semibold text-darkgray mb-3">Tech Expansion</h3>
            <p className="text-gray-600">
              Launched our technology investment division, focused on supporting innovative startups.
            </p>
          </div>
          
          <div className="bg-lightgray p-8 rounded-lg shadow-sm transition-lift animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="text-greenfield font-bold text-xl mb-2">Present</div>
            <h3 className="text-xl font-semibold text-darkgray mb-3">Growing Impact</h3>
            <p className="text-gray-600">
              Building a diverse portfolio of properties and technology ventures with sustainable growth strategies.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
