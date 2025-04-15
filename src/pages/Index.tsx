
import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import InvestmentFocus from "@/components/InvestmentFocus";
import { ArrowRight } from "lucide-react";
import Button from "@/components/Button";

const Index = () => {
  return (
    <Layout>
      <Hero />
      
      <AboutSection />
      
      <InvestmentFocus />
      
      {/* CTA Section */}
      <section className="py-20 bg-greenfield text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Explore Investment Opportunities?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Contact our team to discuss how we can collaborate on your next venture.
          </p>
          <Button 
            to="/contact" 
            variant="secondary"
            className="text-greenfield bg-white hover:bg-gray-100"
          >
            Get in Touch <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
