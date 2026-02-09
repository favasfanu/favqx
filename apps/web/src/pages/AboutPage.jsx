import React from 'react';
import { Helmet } from 'react-helmet';
import { Cpu, Smile, ShieldCheck, Users, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

function AboutPage() {
  const values = [
    {
      icon: Cpu,
      title: 'Technology-First',
      description: 'Robust digital products, engineered for scale.',
    },
    {
      icon: Smile,
      title: 'Simplicity',
      description: 'User-friendly platforms anyone can use.',
    },
    {
      icon: ShieldCheck,
      title: 'Reliability',
      description: 'Secure, stable, and always available systems.',
    },
    {
      icon: Users,
      title: 'Accessibility',
      description: 'Professional tools for every business size.',
    },
  ];

  return (
    <>
      <Helmet>
        <title>About FAVQX - Our Mission & Team</title>
        <meta
          name="description"
          content="Learn about FAVQX, founded by Muhammed Favas Malayil. Our mission is to make professional digital platforms accessible to every business."
        />
      </Helmet>

      {/* Mission Section */}
      <section className="py-32 bg-gradient-to-br from-favqx-navy to-favqx-navy/90 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-sm font-bold tracking-widest uppercase text-favqx-teal mb-4">Our Mission</h1>
            <p className="text-3xl md:text-5xl font-bold leading-tight">
              Make professional digital platforms accessible to every startup and small business.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-24 bg-favqx-off-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-white p-12 rounded-3xl shadow-sm border border-gray-100"
          >
            <h2 className="text-sm font-bold tracking-widest uppercase text-favqx-gold mb-6">Our Vision</h2>
            <p className="text-2xl md:text-3xl text-favqx-navy font-medium italic">
              "Every business, regardless of size, has professional digital infrastructure."
            </p>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -10, boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' }}
                  className="bg-favqx-off-white rounded-2xl p-8 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-6 shadow-sm text-favqx-teal">
                    <Icon size={24} />
                  </div>
                  <h3 className="text-lg font-bold text-favqx-navy mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-24 bg-favqx-off-white">
        <div className="max-w-7xl mx-auto px-6 flex justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white p-10 rounded-3xl shadow-lg max-w-md w-full text-center border-t-4 border-favqx-teal"
          >
            <div className="w-24 h-24 bg-favqx-navy rounded-full mx-auto mb-6 flex items-center justify-center text-white text-2xl font-bold shadow-md">
              MF
            </div>
            <h3 className="text-2xl font-bold text-favqx-navy mb-1">
              Muhammed Favas Malayil
            </h3>
            <p className="text-favqx-teal font-medium mb-6">Founder & CEO</p>
            <div className="flex items-center justify-center text-gray-500 text-sm bg-favqx-off-white py-2 px-4 rounded-full inline-flex">
              <MapPin size={14} className="mr-2" />
              <span>Kozhikode, Kerala, India</span>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}

export default AboutPage;