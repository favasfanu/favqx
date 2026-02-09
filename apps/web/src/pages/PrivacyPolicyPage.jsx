import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Shield, Lock, Eye, Database, Share2, UserCheck, Mail } from 'lucide-react';

function PrivacyPolicyPage() {
  const effectiveDate = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const sections = [
    {
      icon: Database,
      title: '1. Information We Collect',
      content: (
        <ul className="list-disc pl-5 space-y-2 text-gray-600">
          <li><strong>Personal Information:</strong> Name, email address, company name, and other contact details you provide when using our forms or services.</li>
          <li><strong>Technical Data:</strong> IP address, browser type, device information, and operating system data collected automatically.</li>
          <li><strong>Cookies & Usage Data:</strong> Information about how you interact with our website and platforms to improve user experience.</li>
        </ul>
      )
    },
    {
      icon: Eye,
      title: '2. How We Use Information',
      content: (
        <ul className="list-disc pl-5 space-y-2 text-gray-600">
          <li>To respond to your inquiries and provide requested services.</li>
          <li>To improve, secure, and optimize our digital platforms.</li>
          <li>To send important updates regarding our terms, services, or security alerts.</li>
          <li>To analyze usage patterns and enhance platform performance.</li>
        </ul>
      )
    },
    {
      icon: Lock,
      title: '3. Cookies & Analytics',
      content: (
        <p className="text-gray-600 leading-relaxed">
          We use cookies to remember your preferences, track traffic patterns, and improve your user experience. You can control cookie settings through your browser, though some features of our platforms may function differently without them.
        </p>
      )
    },
    {
      icon: Shield,
      title: '4. Data Protection',
      content: (
        <p className="text-gray-600 leading-relaxed">
          We implement robust security measures including encryption, secure storage, and strict access controls. We conduct regular security assessments to ensure your data remains protected against unauthorized access, alteration, or destruction.
        </p>
      )
    },
    {
      icon: Share2,
      title: '5. Data Sharing',
      content: (
        <p className="text-gray-600 leading-relaxed">
          We do not sell or rent your personal data. We may share information only with trusted service providers under strict confidentiality agreements, or when required by law to protect our rights or comply with legal proceedings.
        </p>
      )
    },
    {
      icon: UserCheck,
      title: '6. User Rights',
      content: (
        <p className="text-gray-600 leading-relaxed">
          You have the right to access, correct, or request deletion of your personal data. You may also withdraw consent for data processing at any time. To exercise these rights, please contact us at <a href="mailto:contact@favqx.com" className="text-favqx-teal hover:underline">contact@favqx.com</a>.
        </p>
      )
    },
    {
      icon: Mail,
      title: '7. Contact Us',
      content: (
        <div className="text-gray-600 leading-relaxed">
          <p className="mb-2">If you have any questions about this Privacy Policy, please contact us:</p>
          <p><strong>Email:</strong> <a href="mailto:contact@favqx.com" className="text-favqx-teal hover:underline">contact@favqx.com</a></p>
          <p><strong>Company:</strong> FAVQX</p>
          <p><strong>Location:</strong> Kozhikode, Kerala, India</p>
        </div>
      )
    }
  ];

  return (
    <>
      <Helmet>
        <title>Privacy Policy - FAVQX</title>
        <meta name="description" content="Privacy Policy for FAVQX. Learn how we collect, use, and protect your data." />
      </Helmet>

      <div className="bg-favqx-off-white min-h-screen py-16">
        <div className="max-w-4xl mx-auto px-6">
          {/* Breadcrumb */}
          <div className="mb-8">
            <Link to="/" className="inline-flex items-center text-favqx-teal hover:text-favqx-navy transition-colors font-medium">
              <ArrowLeft size={16} className="mr-2" />
              Back to Home
            </Link>
          </div>

          {/* Header */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl p-10 shadow-sm border border-gray-100 mb-10"
          >
            <h1 className="text-4xl font-bold text-favqx-navy mb-4">Privacy Policy</h1>
            <p className="text-gray-500 mb-6">Effective Date: {effectiveDate}</p>
            <div className="h-1 w-20 bg-favqx-teal rounded-full mb-8"></div>
            <p className="text-lg text-gray-600 leading-relaxed">
              At FAVQX, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy outlines how we collect, use, and safeguard your data when you use our website and digital platforms.
            </p>
          </motion.div>

          {/* Sections */}
          <div className="space-y-8">
            {sections.map((section, index) => {
              const Icon = section.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-favqx-off-white rounded-lg text-favqx-teal shrink-0">
                      <Icon size={24} />
                    </div>
                    <div>
                      <h2 className="text-xl font-bold text-favqx-navy mb-4">{section.title}</h2>
                      <div className="text-gray-600 leading-relaxed">
                        {section.content}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default PrivacyPolicyPage;