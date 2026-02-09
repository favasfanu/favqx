import React from 'react';
import { Helmet } from 'react-helmet';
import { MousePointerClick, Settings, Rocket, LifeBuoy } from 'lucide-react';
import { motion } from 'framer-motion';

function HowItWorksPage() {
  const steps = [
    {
      icon: MousePointerClick,
      title: 'Choose',
      description: 'Select the digital platform that fits your business needs.',
    },
    {
      icon: Settings,
      title: 'Build',
      description: 'Our team handles the technical setup and configuration.',
    },
    {
      icon: Rocket,
      title: 'Launch',
      description: 'Go live instantly with your new digital infrastructure.',
    },
    {
      icon: LifeBuoy,
      title: 'Support',
      description: 'Ongoing optimization and technical assistance.',
    },
  ];

  return (
    <>
      <Helmet>
        <title>How It Works - FAVQX</title>
        <meta
          name="description"
          content="See how easy it is to get started with FAVQX. Choose your platform, we build it, you launch."
        />
      </Helmet>

      <section className="py-24 bg-white min-h-screen">
        <div className="max-w-3xl mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-20"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-favqx-navy mb-6">How It Works</h1>
            <p className="text-xl text-gray-600">
              A simple four-step process to digital transformation.
            </p>
          </motion.div>

          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-100 transform md:-translate-x-1/2"></div>

            <div className="space-y-16">
              {steps.map((step, index) => {
                const Icon = step.icon;
                const isEven = index % 2 === 0;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 }}
                    className={`relative flex items-center gap-8 ${
                      isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                    }`}
                  >
                    {/* Icon Marker */}
                    <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-16 h-16 bg-white border-4 border-favqx-teal rounded-full flex items-center justify-center z-10 shadow-lg">
                      <Icon className="text-favqx-navy" size={24} />
                    </div>

                    {/* Content Spacer for Desktop */}
                    <div className="hidden md:block flex-1"></div>

                    {/* Content Card */}
                    <div className={`flex-1 pl-24 md:pl-0 ${isEven ? 'md:text-right md:pr-16' : 'md:text-left md:pl-16'}`}>
                      <h2 className="text-2xl font-bold text-favqx-navy mb-2">
                        {step.title}
                      </h2>
                      <p className="text-gray-600 text-lg">
                        {step.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default HowItWorksPage;