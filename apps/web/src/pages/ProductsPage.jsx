import React from 'react';
import { Helmet } from 'react-helmet';
import { Mail, Globe, Layout, TrendingUp, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function ProductsPage() {
  const products = [
    {
      icon: Mail,
      name: 'Email Platform',
      description: 'Complete workspace email system. Professional email setup, management, and integration tools for your business.',
    },
    {
      icon: Layout,
      name: 'Website Platform',
      description: 'Build and launch your online presence. Designed, developed, and delivered as a complete digital product.',
    },
    {
      icon: Globe,
      name: 'Online Presence',
      description: 'Complete digital setup for your business. Domains, hosting, email, website, and foundational digital infrastructure.',
    },
    {
      icon: TrendingUp,
      name: 'Growth Tools',
      description: 'Essential tools to measure and grow. Analytics, integrations, and automation for early-stage businesses.',
    },
  ];

  return (
    <>
      <Helmet>
        <title>Products - FAVQX Platforms</title>
        <meta
          name="description"
          content="Explore FAVQX's digital platforms: Professional Email, Website Platforms, Online Presence Systems, and Growth Tools."
        />
      </Helmet>

      <section className="py-24 bg-favqx-off-white min-h-screen">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-20"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-favqx-navy mb-6">Our Platforms</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Minimalist, powerful tools designed to help your business grow.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {products.map((product, index) => {
              const Icon = product.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -8, borderColor: '#1BA098' }}
                  className="bg-white rounded-2xl p-10 shadow-sm hover:shadow-xl border-2 border-transparent transition-all duration-300 group"
                >
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-16 h-16 bg-favqx-off-white rounded-2xl flex items-center justify-center group-hover:bg-favqx-teal/10 transition-colors">
                      <Icon className="text-favqx-navy group-hover:text-favqx-teal transition-colors" size={32} />
                    </div>
                  </div>
                  
                  <h2 className="text-2xl font-bold text-favqx-navy mb-4 group-hover:text-favqx-teal transition-colors">
                    {product.name}
                  </h2>
                  
                  <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                    {product.description}
                  </p>
                  
                  <Link 
                    to="/contact" 
                    className="inline-flex items-center font-semibold text-favqx-navy group-hover:text-favqx-teal transition-colors"
                  >
                    Learn More <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

export default ProductsPage;