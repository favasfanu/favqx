import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { motion } from 'framer-motion';
import { Monitor, Zap, Layers, Mail, Globe, Layout, TrendingUp, ArrowRight } from 'lucide-react';

function HomePage() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const valueProps = [
    {
      icon: Monitor,
      title: 'Technology-First',
      description: 'Built as digital products, not manual services.',
    },
    {
      icon: Zap,
      title: 'Beginner-Friendly',
      description: 'No technical knowledge required to start.',
    },
    {
      icon: Layers,
      title: 'Complete Systems',
      description: 'Everything integrated and ready to use.',
    },
  ];

  const platforms = [
    {
      icon: Mail,
      title: 'Email Platform',
      description: 'Professional workspace email system.',
    },
    {
      icon: Layout,
      title: 'Website Platform',
      description: 'Build and launch your online presence.',
    },
    {
      icon: Globe,
      title: 'Online Presence',
      description: 'Complete digital setup for business.',
    },
    {
      icon: TrendingUp,
      title: 'Growth Tools',
      description: 'Essential tools to measure and grow.',
    },
  ];

  return (
    <>
      <Helmet>
        <title>FAVQX - Digital Platforms for Growing Businesses</title>
        <meta
          name="description"
          content="Build your online presence with professional technology. FAVQX delivers digital platforms for startups and small businesses."
        />
      </Helmet>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-favqx-navy">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1699060463533-94ceb428c67f"
            alt="Abstract digital background"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-favqx-teal/90 via-favqx-navy/95 to-favqx-navy"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 text-center">
          <motion.div
            initial="initial"
            animate="animate"
            variants={staggerContainer}
            className="max-w-4xl mx-auto"
          >
            <motion.h1 
              variants={fadeInUp}
              className="text-5xl md:text-7xl font-bold mb-8 leading-tight text-white tracking-tight"
            >
              Digital Platforms for <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-favqx-teal to-favqx-gold">
                Growing Businesses
              </span>
            </motion.h1>
            
            <motion.p 
              variants={fadeInUp}
              className="text-xl md:text-2xl mb-12 text-gray-300 leading-relaxed max-w-2xl mx-auto"
            >
              Build your online presence with professional technology. Simple, scalable, and secure.
            </motion.p>
            
            <motion.div 
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button
                asChild
                size="lg"
                className="bg-favqx-teal hover:bg-favqx-teal/90 text-white text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-favqx-teal/20 transition-all"
              >
                <Link to="/products">Explore Platforms</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-2 border-white/20 bg-white/5 backdrop-blur-sm text-white hover:bg-white hover:text-favqx-navy text-lg px-8 py-6 rounded-full"
              >
                <Link to="/contact">Get Started</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Value Props Section */}
      <section className="py-24 bg-favqx-off-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {valueProps.map((prop, index) => {
              const Icon = prop.icon;
              return (
                <motion.div
                  key={index}
                  whileHover={{ y: -10 }}
                  className="bg-white rounded-2xl p-10 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group"
                >
                  <div className="w-14 h-14 bg-favqx-navy/5 rounded-xl flex items-center justify-center mb-6 group-hover:bg-favqx-teal group-hover:text-white transition-colors duration-300">
                    <Icon className="text-favqx-navy group-hover:text-white transition-colors duration-300" size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-favqx-navy mb-3">
                    {prop.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {prop.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Platforms Preview Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-end mb-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-favqx-navy mb-4">Our Platforms</h2>
              <p className="text-gray-600 max-w-xl">Everything you need to establish your digital infrastructure.</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="hidden md:block"
            >
              <Link to="/products" className="flex items-center text-favqx-teal font-semibold hover:text-favqx-navy transition-colors">
                View All Platforms <ArrowRight size={20} className="ml-2" />
              </Link>
            </motion.div>
          </div>

          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {platforms.map((platform, index) => {
              const Icon = platform.icon;
              return (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  whileHover={{ scale: 1.03 }}
                  className="bg-favqx-off-white rounded-xl p-8 hover:bg-white hover:shadow-lg border border-transparent hover:border-favqx-teal/20 transition-all duration-300"
                >
                  <Icon className="text-favqx-teal mb-4" size={32} />
                  <h3 className="text-lg font-bold text-favqx-navy mb-2">{platform.title}</h3>
                  <p className="text-sm text-gray-600">{platform.description}</p>
                </motion.div>
              );
            })}
          </motion.div>
          
          <div className="mt-8 text-center md:hidden">
            <Button asChild variant="outline" className="w-full">
              <Link to="/products">View All Platforms</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-favqx-navy relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-favqx-teal/20 rounded-full filter blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-favqx-gold/10 rounded-full filter blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-8 text-white"
          >
            Ready to go digital?
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-favqx-teal to-favqx-teal/80 hover:from-favqx-teal/90 hover:to-favqx-teal text-white font-bold text-lg px-12 py-8 rounded-full shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-1"
            >
              <Link to="/contact">Get Started</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  );
}

export default HomePage;