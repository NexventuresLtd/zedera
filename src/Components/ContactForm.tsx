// components/ContactForm.tsx
import React, { useState } from 'react';
import { Send } from 'lucide-react';
import { motion } from 'framer-motion';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    console.log('Form submitted:', formData);
    alert('Thank you for your message. We will get back to you soon!');
    setFormData({
      name: '',
      email: '',
      company: '',
      service: '',
      message: ''
    });
    
    setIsSubmitting(false);
  };

  const inputAnimation = {
    focus: {
      scale: 1.02,
      boxShadow: "0 0 0 3px rgba(31, 125, 173, 0.2)",
      transition: { duration: 0.2 }
    }
  };

  const buttonAnimation = {
    initial: { scale: 1 },
    hover: { 
      scale: 1.02,
      backgroundColor: '#10478B',
      transition: { duration: 0.2 }
    },
    tap: { scale: 0.98 }
  };

  return (
    <motion.form 
      onSubmit={handleSubmit} 
      className="space-y-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-1" style={{ color: '#1E566C' }}>
            Full Name *
          </label>
          <motion.input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            variants={inputAnimation}
            whileFocus="focus"
            className="w-full px-4 py-2 border rounded-md"
            style={{
              borderColor: '#89B8CA',
              backgroundColor: '#f8fafc',
              color: '#1E566C'
            }}
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-1" style={{ color: '#1E566C' }}>
            Email Address *
          </label>
          <motion.input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            variants={inputAnimation}
            whileFocus="focus"
            className="w-full px-4 py-2 border rounded-md"
            style={{
              borderColor: '#89B8CA',
              backgroundColor: '#f8fafc',
              color: '#1E566C'
            }}
          />
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="company" className="block text-sm font-medium mb-1" style={{ color: '#1E566C' }}>
            Company
          </label>
          <motion.input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            variants={inputAnimation}
            whileFocus="focus"
            className="w-full px-4 py-2 border rounded-md"
            style={{
              borderColor: '#89B8CA',
              backgroundColor: '#f8fafc',
              color: '#1E566C'
            }}
          />
        </div>
        <div>
          <label htmlFor="service" className="block text-sm font-medium mb-1" style={{ color: '#1E566C' }}>
            Service of Interest
          </label>
          <motion.select
            id="service"
            name="service"
            value={formData.service}
            onChange={handleChange}
            variants={inputAnimation}
            whileFocus="focus"
            className="w-full px-4 py-2 border rounded-md"
            style={{
              borderColor: '#89B8CA',
              backgroundColor: '#f8fafc',
              color: '#1E566C'
            }}
          >
            <option value="">Select a service</option>
            <option value="web-development">Web & App Development</option>
            <option value="ai-automation">AI & Automation Tools</option>
            <option value="digital-marketing">Digital Marketing</option>
            <option value="ui-ux-design">UI/UX Design</option>
            <option value="consulting">Consulting</option>
            <option value="dedicated-teams">Dedicated Teams</option>
          </motion.select>
        </div>
      </div>
      
      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-1" style={{ color: '#1E566C' }}>
          Message *
        </label>
        <motion.textarea
          id="message"
          name="message"
          rows={5}
          value={formData.message}
          onChange={handleChange}
          required
          variants={inputAnimation}
          whileFocus="focus"
          className="w-full px-4 py-2 border rounded-md"
          style={{
            borderColor: '#89B8CA',
            backgroundColor: '#f8fafc',
            color: '#1E566C'
          }}
        ></motion.textarea>
      </div>
      
      <motion.button
        type="submit"
        variants={buttonAnimation}
        initial="initial"
        whileHover="hover"
        whileTap="tap"
        disabled={isSubmitting}
        className="w-full text-white px-6 py-3 rounded-md font-medium inline-flex items-center justify-center transition-colors"
        style={{ backgroundColor: isSubmitting ? '#89B8CA' : '#1F7DAD' }}
      >
        {isSubmitting ? (
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            className="h-5 w-5 border-2 border-white border-t-transparent rounded-full mr-2"
          />
        ) : (
          <>
            Send Message
            <Send size={20} className="ml-2" />
          </>
        )}
      </motion.button>
    </motion.form>
  );
};

export default ContactForm;