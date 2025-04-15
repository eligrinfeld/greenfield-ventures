import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import Button from "@/components/Button";
import { Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <Layout>
      <div className="min-h-[70vh] flex items-center justify-center py-20">
        <div className="text-center">
          <h1 className="text-7xl font-bold text-greenfield mb-4">404</h1>
          <h2 className="text-3xl font-semibold text-darkgray mb-4">Page Not Found</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-md mx-auto">
            We couldn't find the page you're looking for. It might have been moved or doesn't exist.
          </p>
          <Button to="/" variant="primary">
            <Home className="mr-2 h-5 w-5" /> Return to Home
          </Button>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
