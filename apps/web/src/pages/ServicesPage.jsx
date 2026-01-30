import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Building2, Lightbulb, Code, Globe, ArrowRight } from 'lucide-react';

const ServicesPage = () => {
  const services = [
    {
      icon: Building2,
      title: 'Business Setup & Structuring',
      description: 'Transform your business vision into a solid foundation with our comprehensive setup and structuring services.',
      details: [
        'Company formation and registration',
        'Organizational structure design',
        'Legal and compliance framework',
        'Operational systems implementation',
        'Governance and policy development',
      ],
      cta: "Let's Structure Your Business",
    },
    {
      icon: Lightbulb,
      title: 'Advisory & Strategy',
      description: 'Navigate complex business challenges with expert guidance and strategic planning tailored to your goals.',
      details: [
        'Strategic planning and roadmapping',
        'Market analysis and positioning',
        'Growth strategy development',
        'Risk assessment and mitigation',
        'Performance optimization',
      ],
      cta: 'Explore Strategic Solutions',
    },
    {
      icon: Code,
      title: 'Digital & Technology Solutions',
      description: 'Leverage cutting-edge technology to drive innovation, efficiency, and competitive advantage.',
      details: [
        'Digital transformation consulting',
        'Technology stack optimization',
        'Process automation solutions',
        'Data analytics and insights',
        'Cybersecurity and compliance',
      ],
      cta: 'Discover Tech Solutions',
    },
    {
      icon: Globe,
      title: 'Global Support',
      description: 'Expand your reach with comprehensive international business support and market entry strategies.',
      details: [
        'International market research',
        'Cross-border expansion planning',
        'Global partnership development',
        'Cultural and regulatory guidance',
        'International operations management',
      ],
      cta: 'Go Global With Us',
    },
  ];

  return (
    <>
      <Helmet>
        <title>Services - FAVQX Business Solutions</title>
        <meta
          name="description"
          content="Explore FAVQX's comprehensive business solutions including setup & structuring, advisory & strategy, digital solutions, and global support."
        />
      </Helmet>

      {/* Hero Section */}
      <section className="section-padding bg-secondary pt-32">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-navy mb-6">
              Our <span className="text-gradient">Services</span>
            </h1>
            <p className="text-charcoal text-xl leading-relaxed">
              Comprehensive solutions designed to drive your business forward with 
              confidence and clarity.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="space-y-12">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card"
              >
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  {/* Icon and Title */}
                  <div className="lg:col-span-1">
                    <service.icon className="w-16 h-16 text-navy mb-4" />
                    <h2 className="text-3xl font-bold text-navy mb-4">
                      {service.title}
                    </h2>
                    <p className="text-charcoal-light text-lg">
                      {service.description}
                    </p>
                  </div>

                  {/* Details */}
                  <div className="lg:col-span-2">
                    <h3 className="text-xl font-semibold text-navy mb-4">
                      What We Offer:
                    </h3>
                    <ul className="space-y-3 mb-6">
                      {service.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start space-x-3">
                          <ArrowRight className="w-5 h-5 text-navy-light mt-1 flex-shrink-0" />
                          <span className="text-charcoal-light">{detail}</span>
                        </li>
                      ))}
                    </ul>

                    <Link to="/contact">
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="btn-primary"
                      >
                        {service.cta}
                      </motion.button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-navy">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-gray-200 text-lg md:text-xl max-w-2xl mx-auto mb-8">
              Let's discuss how FAVQX can help you achieve your business goals with 
              our comprehensive solutions and expert guidance.
            </p>
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-navy px-8 py-4 rounded-lg font-semibold shadow-lg hover:bg-gray-100 transition-all duration-300"
              >
                Get in Touch
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default ServicesPage;