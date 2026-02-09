import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, FileText, ShieldAlert, Copyright, UserCog, CreditCard, AlertTriangle, Scale, RefreshCw, Mail } from 'lucide-react';

function TermsOfServicePage() {
  const effectiveDate = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const sections = [
    {
      icon: FileText,
      title: '1. Nature of Offering',
      content: (
        <p className="text-gray-600 leading-relaxed">
          FAVQX provides technology platforms and digital infrastructure solutions only. We do not provide professional, legal, financial, or accounting services. Any tools or content provided should not be considered as professional advice in these domains.
        </p>
      )
    },
    {
      icon: ShieldAlert,
      title: '2. Website Usage',
      content: (
        <p className="text-gray-600 leading-relaxed">
          You agree to use our platforms for lawful purposes only. Unauthorized access, hacking, fraud, disruption of services, intellectual property violations, and harassment are strictly prohibited and may result in immediate termination of services and legal action.
        </p>
      )
    },
    {
      icon: Copyright,
      title: '3. Intellectual Property',
      content: (
        <p className="text-gray-600 leading-relaxed">
          All content, designs, code, systems, and platforms provided by FAVQX are the exclusive property of FAVQX. You may not copy, modify, distribute, reverse-engineer, or create derivative works from our intellectual property without explicit written permission.
        </p>
      )
    },
    {
      icon: UserCog,
      title: '4. User Responsibilities',
      content: (
        <ul className="list-disc pl-5 space-y-2 text-gray-600">
          <li>Provide accurate and current information during registration.</li>
          <li>Maintain the confidentiality of your account credentials.</li>
          <li>Use the platforms in compliance with all applicable laws and regulations.</li>
          <li>Notify us immediately of any unauthorized access to your account.</li>
        </ul>
      )
    },
    {
      icon: CreditCard,
      title: '5. Refund & Cancellation Policy',
      content: (
        <div className="text-gray-600 leading-relaxed space-y-2">
          <p>Refund eligibility is determined by the specific terms of the product purchased.</p>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>Digital Delivery:</strong> Generally, no refunds are issued after digital products or credentials have been delivered.</li>
            <li><strong>Cancellation:</strong> Requests must be sent to <a href="mailto:contact@favqx.com" className="text-favqx-teal hover:underline">contact@favqx.com</a>.</li>
            <li><strong>Processing:</strong> Refund requests are reviewed within 7 business days. Approved refunds are processed within 14 business days.</li>
          </ul>
        </div>
      )
    },
    {
      icon: AlertTriangle,
      title: '6. Limitation of Liability',
      content: (
        <p className="text-gray-600 leading-relaxed">
          FAVQX shall not be liable for any indirect, incidental, special, or consequential damages, including but not limited to loss of data, revenue, or profits, or failures caused by third-party services or force majeure events. Our total liability is limited to the amount paid by you for the specific service in question.
        </p>
      )
    },
    {
      icon: Scale,
      title: '7. Governing Law',
      content: (
        <p className="text-gray-600 leading-relaxed">
          These Terms of Service shall be governed by and construed in accordance with the laws of India and the State of Kerala. Any disputes arising under these terms shall be subject to the exclusive jurisdiction of the courts located in Kerala, India.
        </p>
      )
    },
    {
      icon: RefreshCw,
      title: '8. Changes to Terms',
      content: (
        <p className="text-gray-600 leading-relaxed">
          FAVQX reserves the right to modify these terms at any time. Changes become effective immediately upon posting to this website. Your continued use of our platforms constitutes your acceptance of the modified terms.
        </p>
      )
    },
    {
      icon: Mail,
      title: '9. Contact Us',
      content: (
        <div className="text-gray-600 leading-relaxed">
          <p className="mb-2">For any questions regarding these Terms of Service, please contact us:</p>
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
        <title>Terms of Service - FAVQX</title>
        <meta name="description" content="Terms of Service for FAVQX. Read our usage guidelines, policies, and legal terms." />
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
            <h1 className="text-4xl font-bold text-favqx-navy mb-4">Terms of Service</h1>
            <p className="text-gray-500 mb-6">Effective Date: {effectiveDate}</p>
            <div className="h-1 w-20 bg-favqx-teal rounded-full mb-8"></div>
            <p className="text-lg text-gray-600 leading-relaxed">
              By accessing or using the FAVQX website and digital platforms, you agree to be bound by these Terms of Service. Please read them carefully before using our services.
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

export default TermsOfServicePage;