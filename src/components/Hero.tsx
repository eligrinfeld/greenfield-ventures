
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div 
          className="w-full h-full bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: 'url("https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?ixlib=rb-4.0.3&auto=format&fit=crop")', 
            filter: 'brightness(0.7)'
          }}
        />
        <div className="absolute inset-0 bg-darkgray/50" />
      </div>

      {/* Content */}
      <div className="container relative z-10 px-4 md:px-6 mx-auto text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 animate-fade-in">
          Greenfield Ventures LLC
        </h1>
        <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: '0.2s' }}>
          Investing in the Future of Real Estate and Technology.
        </p>
        <p className="text-white/80 mb-8 max-w-xl mx-auto animate-slide-up" style={{ animationDelay: '0.4s' }}>
          We combine on-the-ground insight with data-driven strategies to build long-term value for our investors and partners.
        </p>
        <Link 
          to="/about" 
          className="inline-flex items-center bg-greenfield hover:bg-greenfield-dark text-white py-3 px-6 rounded-md transition-all duration-300 shadow-md hover:shadow-lg animate-slide-up"
          style={{ animationDelay: '0.6s' }}
        >
          Learn More <ArrowRight className="ml-2 h-5 w-5" />
        </Link>
      </div>
    </section>
  );
};

export default Hero;
