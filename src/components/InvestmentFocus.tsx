
import { Building2, Cpu } from "lucide-react";

const InvestmentFocus = () => {
  return (
    <section className="py-20 bg-lightgray">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-darkgray mb-4">Investment Focus</h2>
          <div className="w-20 h-1 bg-greenfield mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Real Estate Ventures */}
          <div className="bg-white rounded-lg shadow-md p-8 transition-lift animate-fade-in">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-greenfield/10 rounded-full">
                <Building2 className="h-10 w-10 text-greenfield" />
              </div>
            </div>
            <h3 className="text-2xl font-semibold text-darkgray mb-4 text-center">Real Estate Ventures</h3>
            <p className="text-gray-600 leading-relaxed">
              From residential redevelopment to mixed-use commercial properties, we invest in projects that align with economic growth and community needs.
            </p>
            <ul className="mt-6 space-y-2 text-gray-600">
              <li className="flex items-start">
                <div className="mr-2 text-greenfield">•</div>
                <span>Residential redevelopment</span>
              </li>
              <li className="flex items-start">
                <div className="mr-2 text-greenfield">•</div>
                <span>Mixed-use commercial properties</span>
              </li>
              <li className="flex items-start">
                <div className="mr-2 text-greenfield">•</div>
                <span>Community-focused developments</span>
              </li>
            </ul>
          </div>
          
          {/* Technology Ventures */}
          <div className="bg-white rounded-lg shadow-md p-8 transition-lift animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-greenfield/10 rounded-full">
                <Cpu className="h-10 w-10 text-greenfield" />
              </div>
            </div>
            <h3 className="text-2xl font-semibold text-darkgray mb-4 text-center">Technology Ventures</h3>
            <p className="text-gray-600 leading-relaxed">
              We support innovative startups and scalable platforms, with a focus on AI, automation, and SaaS products transforming traditional industries.
            </p>
            <ul className="mt-6 space-y-2 text-gray-600">
              <li className="flex items-start">
                <div className="mr-2 text-greenfield">•</div>
                <span>Artificial Intelligence & Machine Learning</span>
              </li>
              <li className="flex items-start">
                <div className="mr-2 text-greenfield">•</div>
                <span>Automation & Process Optimization</span>
              </li>
              <li className="flex items-start">
                <div className="mr-2 text-greenfield">•</div>
                <span>SaaS for Traditional Industries</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InvestmentFocus;
