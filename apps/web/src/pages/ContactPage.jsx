import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Mail, Phone, Linkedin, Send } from 'lucide-react';
import { useToast } from '../components/ui/use-toast.jsx';

const ContactPage = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error when user types
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) {
      toast({
        title: 'Validation Error',
        description: 'Please check the form for errors.',
        variant: 'destructive',
      });
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    try {
  const response = await fetch(
    'https://formsubmit.co/ajax/contact@mfhub.in',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(formData),
    }
  );

  const data = await response.json();

  if (data.success === 'true') {
    toast({
      title: 'Message Sent',
      description: 'Thank you! We will get back to you shortly.',
    });

    setFormData({ name: '', email: '', phone: '', message: '' });
  } else {
    throw new Error();
  }
} catch (error) {
  toast({
    title: 'Error',
    description: 'Failed to send message. Try again.',
    variant: 'destructive',
  });
}

setIsSubmitting(false);

  };

  return (
    <>
      <Helmet>
        <title>Contact FAVQX - Get in Touch</title>
        <meta name="description" content="Contact FAVQX for premium business solutions. Phone: +61 423 152 469, Email: contact@favqx.com" />
      </Helmet>

      <div className="min-h-screen bg-[#F7F8FA] pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Page Header */}
          <div className="mb-12 text-center lg:text-left">
            <h1 className="text-4xl font-bold text-[#1E3A8A] mb-4">Get in Touch</h1>
            <p className="text-[#1A1A1A] text-lg max-w-2xl">
              Ready to transform your business? Reach out to us for a consultation.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
            {/* Left Column: Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white p-8 rounded-lg border border-gray-200" // Minimal container for form
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-[#1A1A1A] mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 bg-white border rounded-md outline-none transition-all duration-200
                      ${errors.name ? 'border-red-600 focus:border-red-600' : 'border-gray-200 focus:border-[#1E3A8A] focus:ring-1 focus:ring-[#1E3A8A]'}
                    `}
                    placeholder="Your full name"
                  />
                  {errors.name && <p className="text-red-600 text-sm mt-1">{errors.name}</p>}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-[#1A1A1A] mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 bg-white border rounded-md outline-none transition-all duration-200
                      ${errors.email ? 'border-red-600 focus:border-red-600' : 'border-gray-200 focus:border-[#1E3A8A] focus:ring-1 focus:ring-[#1E3A8A]'}
                    `}
                    placeholder="your@email.com"
                  />
                  {errors.email && <p className="text-red-600 text-sm mt-1">{errors.email}</p>}
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-[#1A1A1A] mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 bg-white border rounded-md outline-none transition-all duration-200
                      ${errors.phone ? 'border-red-600 focus:border-red-600' : 'border-gray-200 focus:border-[#1E3A8A] focus:ring-1 focus:ring-[#1E3A8A]'}
                    `}
                    placeholder="+61 423 152 469"
                  />
                  {errors.phone && <p className="text-red-600 text-sm mt-1">{errors.phone}</p>}
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-[#1A1A1A] mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    className={`w-full px-4 py-3 bg-white border rounded-md outline-none transition-all duration-200 resize-none
                      ${errors.message ? 'border-red-600 focus:border-red-600' : 'border-gray-200 focus:border-[#1E3A8A] focus:ring-1 focus:ring-[#1E3A8A]'}
                    `}
                    placeholder="How can we help you?"
                  />
                  {errors.message && <p className="text-red-600 text-sm mt-1">{errors.message}</p>}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#1E3A8A] text-white font-medium py-3 px-6 rounded-md hover:bg-[#172554] transition-colors duration-200 flex items-center justify-center space-x-2 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <span>Sending...</span>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send size={18} />
                    </>
                  )}
                </button>
              </form>
            </motion.div>

            {/* Right Column: Details */}
            <motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5, delay: 0.2 }}
  className="flex flex-col justify-start pt-4"
>
  <div className="space-y-8">
    <div>
      <h2 className="text-2xl font-bold text-[#1E3A8A] mb-6">Contact Information</h2>
      <p className="text-[#1A1A1A] mb-8 leading-relaxed">
        We are here to answer any questions you may have about our services.
        Reach out to us and we'll respond as soon as we can.
      </p>
    </div>

    {/* Legal Business Info */}
    <div className="bg-blue-50 p-5 rounded-lg text-[#1A1A1A] text-sm leading-relaxed">
      <p className="font-semibold text-[#1E3A8A]">FAVQX</p>
      <p>Proprietor: Muhammed Favas Malayil</p>
      <p>
        Address: Malayil, Thachampoyil, Kedavur,<br />
        Thamarassery, Kozhikode, Kerala – 673573, India
      </p>
    </div>

    <div className="space-y-6">

      {/* Phone */}
      <div className="flex items-center space-x-4">
        <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full bg-blue-50">
          <Phone className="w-5 h-5 text-[#1E3A8A]" />
        </div>
        <div>
          <p className="text-sm text-gray-500 font-medium">Phone</p>
          <a
            href="tel:+918129380457"
            className="text-[#1A1A1A] font-medium hover:text-[#1E3A8A] transition-colors"
          >
            +91 81293 80457
          </a>
        </div>
      </div>

      {/* Email */}
      <div className="flex items-center space-x-4">
        <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full bg-blue-50">
          <Mail className="w-5 h-5 text-[#1E3A8A]" />
        </div>
        <div>
          <p className="text-sm text-gray-500 font-medium">Email</p>
          <a
            href="mailto:contact@favqx.com"
            className="text-[#1A1A1A] font-medium hover:text-[#1E3A8A] transition-colors"
          >
            contact@favqx.com
          </a>
        </div>
      </div>

      {/* LinkedIn */}
      <div className="flex items-center space-x-4">
        <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full bg-blue-50">
          <Linkedin className="w-5 h-5 text-[#1E3A8A]" />
        </div>
        <div>
          <p className="text-sm text-gray-500 font-medium">LinkedIn</p>
          <a
            href="https://www.linkedin.com/in/mu-favaz"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#1A1A1A] font-medium hover:text-[#1E3A8A] transition-colors"
          >
            www.linkedin.com/in/mu-favaz
          </a>
        </div>
      </div>

    </div>
  </div>
</motion.div>

          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
