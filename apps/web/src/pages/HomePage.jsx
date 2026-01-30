import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Building2, Lightbulb, Code, Globe, CheckCircle, Award, Users, TrendingUp } from 'lucide-react';

const HomePage = () => {
  const services = [
    {
      icon: Building2,
      title: 'Business Setup & Structuring',
      description: 'Strategic business formation and organizational structuring for sustainable growth.',
    },
    {
      icon: Lightbulb,
      title: 'Advisory & Strategy',
      description: 'Expert guidance and strategic planning to navigate complex business challenges.',
    },
    {
      icon: Code,
      title: 'Digital & Technology Solutions',
      description: 'Cutting-edge technology implementation and digital transformation services.',
    },
    {
      icon: Globe,
      title: 'Global Support',
      description: 'Comprehensive international business support and market expansion strategies.',
    },
  ];

  const differentiators = [
    {
      icon: CheckCircle,
      title: 'Transparency',
      description: 'Clear communication and honest practices in every engagement.',
    },
    {
      icon: Award,
      title: 'Structure',
      description: 'Systematic approaches that deliver consistent, measurable results.',
    },
    {
      icon: Users,
      title: 'Partnership',
      description: 'Collaborative relationships built on trust and mutual success.',
    },
    {
      icon: TrendingUp,
      title: 'Long-term Value',
      description: 'Sustainable solutions focused on lasting business growth.',
    },
  ];

  return (
    <>
      <Helmet>
        <title>FAVQX - Premium Business Solutions & Advisory</title>
        <meta
          name="description"
          content="FAVQX is a premium business solutions and advisory brand founded by Muhammed Favas. Think Global. Move Forward."
        />
      </Helmet>

      {/* Hero Section */}
      <section
        className="relative h-screen flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1684400661290-50c3f2600cf0)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Light overlay for dark text readability */}
        <div className="absolute inset-0 bg-white/80 backdrop-blur-[2px]" />
        
        <div className="relative z-10 container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-navy mb-6">
              <span className="text-gradient">FAVQX</span>
            </h1>
            <p className="text-2xl md:text-3xl text-charcoal mb-8 font-light">
              Think Global. Move Forward.
            </p>
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary text-lg px-8 py-4"
              >
                Start Your Journey
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-navy mb-6">
              Welcome to FAVQX
            </h2>
            <p className="text-charcoal-light text-lg md:text-xl leading-relaxed">
              FAVQX is a premium business solutions and advisory brand dedicated to helping 
              organizations achieve sustainable growth through strategic planning, innovative 
              solutions, and unwavering commitment to excellence. Founded by Muhammed Favas, 
              we bring a global perspective to every challenge.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-navy mb-4">
              Our Services
            </h2>
            <p className="text-charcoal-light text-lg max-w-2xl mx-auto">
              Comprehensive solutions tailored to your business needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card"
              >
                <service.icon className="w-12 h-12 text-navy mb-4" />
                <h3 className="text-xl font-semibold text-navy mb-3">
                  {service.title}
                </h3>
                <p className="text-charcoal-light">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/services">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-secondary"
              >
                Explore All Services
              </motion.button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-navy mb-4">
              Why Choose FAVQX
            </h2>
            <p className="text-charcoal-light text-lg max-w-2xl mx-auto">
              Our commitment to excellence sets us apart
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {differentiators.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card text-center bg-secondary border-none"
              >
                <item.icon className="w-12 h-12 text-navy mb-4 mx-auto" />
                <h3 className="text-xl font-semibold text-navy mb-3">
                  {item.title}
                </h3>
                <p className="text-charcoal-light">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder Highlight */}
      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img
                src="https://images.unsplash.com/photo-1552581234-26160f608093"
                alt="Muhammed Favas - Founder of FAVQX"
                className="rounded-xl shadow-2xl w-full h-auto"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-navy mb-6">
                Meet Our Founder
              </h2>
              <h3 className="text-2xl text-navy-light mb-4 font-semibold">
                Muhammed Favas
              </h3>
              <p className="text-charcoal text-lg leading-relaxed mb-6">
                With a vision to transform how businesses approach growth and strategy, 
                Muhammed Favas founded FAVQX to provide premium advisory services that 
                combine global insights with practical execution. His commitment to 
                transparency, structure, and long-term value creation has helped numerous 
                organizations achieve sustainable success.
              </p>
              <p className="text-charcoal-light text-lg leading-relaxed mb-8">
                Under his leadership, FAVQX has become synonymous with excellence in 
                business solutions, delivering results that matter and partnerships that last.
              </p>
              <Link to="/about">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-primary"
                >
                  Learn More About Us
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding bg-navy">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Build With Confidence
            </h2>
            <p className="text-gray-200 text-lg md:text-xl max-w-2xl mx-auto mb-8">
              Partner with FAVQX to transform your business vision into reality. 
              Let's create something extraordinary together.
            </p>
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-navy px-8 py-4 rounded-lg font-semibold shadow-lg hover:bg-gray-100 transition-all duration-300"
              >
                Get Started Today
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default HomePage;