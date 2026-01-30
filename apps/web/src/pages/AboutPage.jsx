import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Shield, Target, Lightbulb, Award, TrendingUp } from 'lucide-react';

const AboutPage = () => {
  const coreValues = [
    {
      icon: Shield,
      title: 'Transparency',
      description: 'We believe in open, honest communication and clear expectations in every client relationship.',
    },
    {
      icon: Target,
      title: 'Structure',
      description: 'Systematic, methodical approaches ensure consistent delivery and measurable outcomes.',
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'Embracing cutting-edge solutions and creative thinking to solve complex challenges.',
    },
    {
      icon: Award,
      title: 'Integrity',
      description: 'Unwavering commitment to ethical practices and doing what\'s right for our clients.',
    },
    {
      icon: TrendingUp,
      title: 'Long-term Value',
      description: 'Focus on sustainable growth and lasting impact rather than short-term gains.',
    },
  ];

  return (
    <>
      <Helmet>
        <title>About FAVQX - Our Story & Values</title>
        <meta
          name="description"
          content="Learn about FAVQX, our founder Muhammed Favas, our mission, vision, and core values that drive our commitment to excellence."
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
              About <span className="text-gradient">FAVQX</span>
            </h1>
            <p className="text-charcoal text-xl leading-relaxed">
              A premium business solutions and advisory brand committed to transparency, 
              structure, and long-term value creation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Brand Story */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-navy mb-8 text-center">
              Our Story
            </h2>
            <div className="space-y-6 text-charcoal-light text-lg leading-relaxed">
              <p>
                FAVQX was born from a vision to redefine business advisory services. In a world 
                where quick fixes and short-term thinking dominate, we saw the need for a different 
                approach—one rooted in transparency, systematic structure, and genuine commitment 
                to long-term success.
              </p>
              <p>
                Our journey began with a simple belief: businesses deserve partners who understand 
                their challenges, share their ambitions, and have the expertise to turn vision into 
                reality. We built FAVQX on the foundation of these principles, creating a brand 
                that stands for excellence, integrity, and measurable results.
              </p>
              <p>
                Today, FAVQX serves clients across industries and geographies, bringing global 
                insights and local expertise to every engagement. Our commitment remains unchanged: 
                to be the trusted partner that helps businesses think globally and move forward 
                with confidence.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-2 lg:order-1"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-navy mb-6">
                Founder & Visionary
              </h2>
              <h3 className="text-3xl text-navy-light mb-6 font-semibold">
                Muhammed Favas Malayil
              </h3>
              <div className="space-y-4 text-charcoal text-lg leading-relaxed">
                <p>
                  Muhammed Favas Malayil is the founder and driving force behind FAVQX. With a deep 
                  understanding of global business dynamics and a passion for helping organizations 
                  achieve sustainable growth, he established FAVQX to bridge the gap between 
                  strategic vision and practical execution.
                </p>
                <p>
                  His philosophy is simple yet powerful: success comes from transparency, structure, 
                  and an unwavering commitment to creating long-term value. This approach has shaped 
                  FAVQX into a trusted partner for businesses seeking more than just advice—they 
                  seek transformation.
                </p>
                <p>
                  Under his leadership, FAVQX has built a reputation for delivering results that 
                  matter, fostering relationships that last, and maintaining the highest standards 
                  of professional excellence.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-1 lg:order-2"
            >
              <img
                src="https://images.unsplash.com/photo-1690192079529-9fd57e5b24d0"
                alt=""
                className="rounded-xl shadow-2xl w-full h-auto"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="card bg-secondary border-none"
            >
              <h2 className="text-3xl font-bold text-navy mb-6">Our Mission</h2>
              <p className="text-charcoal-light text-lg leading-relaxed">
                To empower businesses with strategic insights, innovative solutions, and 
                unwavering support that drives sustainable growth and lasting success. We are 
                committed to being the trusted partner that helps organizations navigate 
                complexity, seize opportunities, and achieve their full potential.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="card bg-secondary border-none"
            >
              <h2 className="text-3xl font-bold text-navy mb-6">Our Vision</h2>
              <p className="text-charcoal-light text-lg leading-relaxed">
                To be recognized globally as the premier business solutions and advisory brand 
                that sets the standard for transparency, structure, and value creation. We 
                envision a future where every business has access to world-class advisory 
                services that transform challenges into opportunities.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
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
              Our Core Values
            </h2>
            <p className="text-charcoal-light text-lg max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreValues.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card"
              >
                <value.icon className="w-12 h-12 text-navy mb-4" />
                <h3 className="text-xl font-semibold text-navy mb-3">
                  {value.title}
                </h3>
                <p className="text-charcoal-light">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;
