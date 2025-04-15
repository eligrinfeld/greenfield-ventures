
import { Link } from "react-router-dom";
import { Linkedin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-darkgray text-white py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-white">Greenfield Ventures LLC</h3>
            <p className="text-gray-300 mb-2">Colorado-based</p>
            <p className="text-gray-300">
              <a href="mailto:contact@greenfieldventures.com" className="hover:text-greenfield-light transition-colors">
                contact@greenfieldventures.com
              </a>
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link to="/" className="hover:text-greenfield-light transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-greenfield-light transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-greenfield-light transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-white">Connect</h3>
            <div className="flex space-x-4 mb-4">
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-greenfield-light transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
            </div>
            <div className="text-sm text-gray-400 space-y-2">
              <Link to="/privacy" className="hover:text-gray-300 transition-colors block">
                Privacy Policy
              </Link>
              <Link to="/terms" className="hover:text-gray-300 transition-colors block">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>© {currentYear} Greenfield Ventures LLC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
