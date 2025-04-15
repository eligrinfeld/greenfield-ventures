
import Layout from "@/components/Layout";

const Terms = () => {
  return (
    <Layout>
      <div className="py-28 md:py-36 bg-darkgray text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Terms of Service</h1>
          <div className="w-20 h-1 bg-greenfield mx-auto"></div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 py-16">
        <div className="max-w-3xl mx-auto">
          <div className="prose prose-lg">
            <h2>Terms of Service</h2>
            <p>Last updated: April 2025</p>
            
            <h3>1. Introduction</h3>
            <p>
              These Terms of Service ("Terms") govern your access to and use of the Greenfield Ventures LLC website.
              By accessing or using our website, you agree to be bound by these Terms.
            </p>
            
            <h3>2. Use of the Website</h3>
            <p>
              You may use our website only for lawful purposes and in accordance with these Terms.
              You agree not to use our website:
            </p>
            <ul>
              <li>In any way that violates any applicable federal, state, local or international law or regulation</li>
              <li>To transmit, or procure the sending of, any advertising or promotional material, including any "junk mail", "chain letter" or "spam"</li>
              <li>To impersonate or attempt to impersonate Greenfield Ventures LLC, a Greenfield Ventures LLC employee, another user, or any other person or entity</li>
            </ul>
            
            <h3>3. Intellectual Property Rights</h3>
            <p>
              The website and its entire contents, features, and functionality (including but not limited to all information, software, text, displays, images, video, and audio) are owned by Greenfield Ventures LLC, its licensors, or other providers of such material and are protected by United States and international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.
            </p>
            
            <h3>4. Disclaimer of Warranties</h3>
            <p>
              Your use of our website is at your sole risk. The website is provided on an "AS IS" and "AS AVAILABLE" basis. Greenfield Ventures LLC expressly disclaims all warranties of any kind, whether express or implied.
            </p>
            
            <h3>5. Limitation of Liability</h3>
            <p>
              Greenfield Ventures LLC will not be liable for damages of any kind arising from the use of the website, including, but not limited to direct, indirect, incidental, punitive, and consequential damages.
            </p>
            
            <h3>6. Changes to Terms</h3>
            <p>
              We may revise and update these Terms from time to time in our sole discretion. All changes are effective immediately when we post them.
            </p>
            
            <h3>7. Contact Us</h3>
            <p>
              If you have any questions about these Terms, please contact us at: contact@greenfieldventures.com
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Terms;
