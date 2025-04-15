
import Layout from "@/components/Layout";
import Button from "@/components/Button";
import { ArrowRight } from "lucide-react";

const About = () => {
  return (
    <Layout>
      {/* Page Header */}
      <div className="bg-darkgray text-white py-28 md:py-36">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">About Us</h1>
          <div className="w-20 h-1 bg-greenfield mx-auto"></div>
        </div>
      </div>
      
      {/* Main Content */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-right">
              <h2 className="text-3xl font-bold text-darkgray mb-6">Our Mission</h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Founded in 2017, Greenfield Ventures LLC is a Colorado-based technology firm dedicated to developing and delivering innovative software solutions. In 2020, we launched our technology division, focusing on creating digital platforms that transform traditional industries.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Our approach is rooted in technical excellence, market understanding, and a commitment to driving digital transformation through cutting-edge technology solutions.
              </p>
              <Button to="/contact">
                Contact Us <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            
            <div className="animate-slide-in-left">
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=80" 
                  alt="Greenfield Ventures Team"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Timeline/Milestones */}
      <section className="py-16 bg-lightgray">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-darkgray mb-4">Our Journey</h2>
            <div className="w-20 h-1 bg-greenfield mx-auto"></div>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="space-y-12">
              <div className="flex flex-col md:flex-row animate-fade-in">
                <div className="md:w-1/3">
                  <div className="font-bold text-2xl text-greenfield mb-2">2017</div>
                  <h3 className="text-xl font-semibold text-darkgray">Foundation</h3>
                </div>
                <div className="md:w-2/3 md:pl-8 mt-4 md:mt-0">
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <p className="text-gray-600">
                      Established in Colorado with a vision to drive technological innovation and digital transformation across industries.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row animate-fade-in">
                <div className="md:w-1/3">
                  <div className="font-bold text-2xl text-greenfield mb-2">2020</div>
                  <h3 className="text-xl font-semibold text-darkgray">Technology Division</h3>
                </div>
                <div className="md:w-2/3 md:pl-8 mt-4 md:mt-0">
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <p className="text-gray-600">
                      Launched our dedicated technology division, focusing on developing innovative software solutions and digital platforms for transforming traditional industries.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row animate-fade-in">
                <div className="md:w-1/3">
                  <div className="font-bold text-2xl text-greenfield mb-2">2022</div>
                  <h3 className="text-xl font-semibold text-darkgray">Expanding Solutions</h3>
                </div>
                <div className="md:w-2/3 md:pl-8 mt-4 md:mt-0">
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <p className="text-gray-600">
                      Continued to expand our technology solutions, focusing on creating innovative software that drives digital transformation across various sectors.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row animate-fade-in">
                <div className="md:w-1/3">
                  <div className="font-bold text-2xl text-greenfield mb-2">Present</div>
                  <h3 className="text-xl font-semibold text-darkgray">Growing Impact</h3>
                </div>
                <div className="md:w-2/3 md:pl-8 mt-4 md:mt-0">
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <p className="text-gray-600">
                      Committed to delivering cutting-edge technology solutions that help businesses adapt, innovate, and thrive in the digital era.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-greenfield text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Our Technology Journey</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Discover how our innovative technology solutions can transform your business.
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

export default About;
