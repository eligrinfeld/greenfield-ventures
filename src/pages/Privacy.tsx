
import Layout from "@/components/Layout";

const Privacy = () => {
  return (
    <Layout>
      <div className="py-28 md:py-36 bg-darkgray text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Privacy Policy</h1>
          <div className="w-20 h-1 bg-greenfield mx-auto"></div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 py-16">
        <div className="max-w-3xl mx-auto">
          <div className="prose prose-lg">
            <h2>Privacy Policy</h2>
            <p>Last updated: April 2025</p>
            
            <h3>1. Introduction</h3>
            <p>
              Greenfield Ventures LLC ("we" or "us") respects your privacy and is committed to protecting your personal data.
              This privacy policy will inform you how we look after your personal data when you visit our website and tell you about your privacy rights.
            </p>
            
            <h3>2. Information We Collect</h3>
            <p>
              We may collect, use, store and transfer different kinds of personal data about you including:
            </p>
            <ul>
              <li>Identity Data: including your name and title</li>
              <li>Contact Data: including your email address, postal address, and telephone numbers</li>
              <li>Technical Data: including IP address, browser type and version, time zone setting</li>
              <li>Usage Data: including information about how you use our website and services</li>
            </ul>
            
            <h3>3. How We Use Your Information</h3>
            <p>
              We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
            </p>
            <ul>
              <li>To respond to your inquiries</li>
              <li>To provide you with information about our services</li>
              <li>To improve our website and services</li>
            </ul>
            
            <h3>4. Data Security</h3>
            <p>
              We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorized way.
            </p>
            
            <h3>5. Your Legal Rights</h3>
            <p>
              Under certain circumstances, you have rights under data protection laws in relation to your personal data, including the right to access, correct, erase, restrict, transfer, or object to processing of your personal data.
            </p>
            
            <h3>6. Contact Us</h3>
            <p>
              If you have any questions about this privacy policy or our privacy practices, please contact us at: contact@greenfieldventures.com
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Privacy;
