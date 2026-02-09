import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Button } from '../components/ui/button';
import { Mail, MapPin, Send } from 'lucide-react';
import { motion } from 'framer-motion';
import { useToast } from '../components/ui/use-toast';

function ContactPage() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSubmitting) return;
    setIsSubmitting(true);

    try {
      const formDataToSend = new FormData();
      formDataToSend.append('name', formData.name);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('company', formData.company);
      formDataToSend.append('message', formData.message);
      formDataToSend.append('_subject', 'New contact form submission');
      formDataToSend.append('_captcha', 'false');
      formDataToSend.append('_template', 'table');

      const response = await fetch('https://formsubmit.co/ajax/contact@favqx.com', {
        method: 'POST',
        headers: { 'Accept': 'application/json' },
        body: formDataToSend,
      });

      if (!response.ok) {
        throw new Error('Submit failed');
      }

      setFormData({ name: '', email: '', company: '', message: '' });
      toast({
        title: 'Message Sent',
        description: "We've received your message and will get back to you shortly.",
        className: 'bg-favqx-teal text-white border-none',
      });
    } catch (error) {
      toast({
        title: 'Submission failed',
        description: 'Please try again in a moment.',
        className: 'bg-red-600 text-white border-none',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Contact FAVQX - Get Started</title>
        <meta
          name="description"
          content="Contact FAVQX in Kozhikode, Kerala. Reach out for partnership inquiries or to get started with our digital platforms."
        />
      </Helmet>

      <section className="py-24 bg-favqx-off-white min-h-screen flex items-center">
        <div className="max-w-6xl mx-auto px-6 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            
            {/* Info Side */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold text-favqx-navy mb-6">Get in Touch</h1>
              <p className="text-xl text-gray-600 mb-12 leading-relaxed">
                Ready to build your digital presence? Reach out directly for partnership inquiries or verification purposes.
              </p>

              <div className="space-y-8">
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm text-favqx-teal shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-favqx-navy text-lg mb-1">Visit Us</h3>
                    <p className="text-gray-600">
                      FAVQX<br />
                      Kozhikode, Kerala, India
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm text-favqx-teal shrink-0">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-favqx-navy text-lg mb-1">Email Us</h3>
                    <a href="mailto:contact@favqx.com" className="text-favqx-teal hover:underline text-lg">
                      contact@favqx.com
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Form Side */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white p-8 md:p-10 rounded-3xl shadow-lg"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-favqx-navy">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-favqx-off-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-favqx-teal focus:border-transparent outline-none transition-all"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-favqx-navy">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-favqx-off-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-favqx-teal focus:border-transparent outline-none transition-all"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="company" className="text-sm font-medium text-favqx-navy">Company</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-favqx-off-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-favqx-teal focus:border-transparent outline-none transition-all"
                    placeholder="Your Company Ltd."
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-favqx-navy">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-favqx-off-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-favqx-teal focus:border-transparent outline-none transition-all resize-none"
                    placeholder="How can we help you?"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-favqx-navy hover:bg-favqx-navy/90 text-white py-6 text-lg rounded-xl transition-all hover:shadow-lg flex items-center justify-center gap-2"
                >
                  {isSubmitting ? 'Sending...' : <>Send Message <Send size={18} /></>}
                </Button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ContactPage;