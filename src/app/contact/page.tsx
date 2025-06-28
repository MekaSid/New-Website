'use client';

import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import { useState } from "react";
import emailjs from '@emailjs/browser';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // You'll need to replace these with your actual EmailJS credentials
      const result = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!, // Replace with your EmailJS service ID
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!, // Replace with your EmailJS template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_name: 'Sid',
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY! // Replace with your EmailJS public key
      );

      if (result.status === 200) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Email send error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />
      
      {/* Contact Section */}
      <motion.section 
        className="flex-1 flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-center text-black mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Get In Touch
          </motion.h2>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-12"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            {/* Contact Info */}
            <motion.div variants={fadeInUp}>
              <h3 className="text-2xl font-bold text-black mb-6">Let&apos;s Connect</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center">
                    <span className="text-white">📧</span>
                  </div>
                  <div>
                    <p className="font-medium text-black">Email</p>
                    <p className="text-gray-600">sidmekarao@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center">
                    <span className="text-white">📱</span>
                  </div>
                  <div>
                    <p className="font-medium text-black">Phone</p>
                    <p className="text-gray-600">+1 (650) 924-6974</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center">
                    <span className="text-white">📍</span>
                  </div>
                  <div>
                    <p className="font-medium text-black">Location</p>
                    <p className="text-gray-600">San Luis Obispo, CA</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div variants={fadeInUp}>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                    placeholder="Your message..."
                  ></textarea>
                </div>
                
                {/* Status Messages */}
                {submitStatus === 'success' && (
                  <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded">
                    Message sent successfully! I&apos;ll get back to you soon.
                  </div>
                )}
                {submitStatus === 'error' && (
                  <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
                    Failed to send message. Please try again or email me directly.
                  </div>
                )}
                
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-black hover:bg-gray-800 disabled:bg-gray-400 text-white py-3 px-6 rounded-lg font-medium transition-colors duration-200"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </motion.button>
              </form>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
} 