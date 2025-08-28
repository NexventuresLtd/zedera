// pages/Contact.tsx
import React from 'react';
import { Phone, Mail, MapPin, Send, Clock } from 'lucide-react';
import ContactForm from '../Components/ContactForm';
import { motion } from 'framer-motion';

const Contact: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section 
        className="py-20 text-white"
        style={{ backgroundColor: '#1F7DAD' }}
      >
        <motion.div 
          className="container mx-auto px-4 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl max-w-3xl mx-auto opacity-90">
            Let's start a conversation about how we can help your business grow.
          </p>
        </motion.div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="flex flex-col lg:flex-row gap-12"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {/* Contact Information */}
            <motion.div 
              className="lg:w-2/5"
              variants={itemVariants}
            >
              <h2 className="text-3xl font-bold mb-8" style={{ color: '#10478B' }}>Get in Touch</h2>
              
              <div className="space-y-6 mb-8">
                <motion.div 
                  className="flex items-start p-4 rounded-lg"
                  style={{ backgroundColor: '#f8fafc', border: '1px solid #89B8CA' }}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <MapPin size={24} className="mr-4 mt-1 flex-shrink-0" style={{ color: '#1F7DAD' }} />
                  <div>
                    <h3 className="text-lg font-semibold mb-1" style={{ color: '#10478B' }}>Address</h3>
                    <p style={{ color: '#1E566C' }}>Addis Ababa, Ethiopia</p>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="flex items-start p-4 rounded-lg"
                  style={{ backgroundColor: '#f8fafc', border: '1px solid #89B8CA' }}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <Phone size={24} className="mr-4 mt-1 flex-shrink-0" style={{ color: '#1F7DAD' }} />
                  <div>
                    <h3 className="text-lg font-semibold mb-1" style={{ color: '#10478B' }}>Phone & WhatsApp</h3>
                    <p style={{ color: '#1E566C' }}>+251 XXX XXX XXX</p>
                    <a 
                      href="https://wa.me/251XXXXXXXXX" 
                      className="hover:underline"
                      style={{ color: '#1F7DAD' }}
                    >
                      Message us on WhatsApp
                    </a>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="flex items-start p-4 rounded-lg"
                  style={{ backgroundColor: '#f8fafc', border: '1px solid #89B8CA' }}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <Mail size={24} className="mr-4 mt-1 flex-shrink-0" style={{ color: '#1F7DAD' }} />
                  <div>
                    <h3 className="text-lg font-semibold mb-1" style={{ color: '#10478B' }}>Email</h3>
                    <p style={{ color: '#1E566C' }}>info@zedera.com</p>
                    <a 
                      href="mailto:info@zedera.com" 
                      className="hover:underline"
                      style={{ color: '#1F7DAD' }}
                    >
                      Send us an email
                    </a>
                  </div>
                </motion.div>
              </div>

              <motion.div 
                className="p-6 rounded-lg"
                style={{ backgroundColor: '#E8F4F8', border: '1px solid #89B8CA' }}
                variants={itemVariants}
              >
                <h3 className="text-lg font-semibold mb-4 flex items-center" style={{ color: '#10478B' }}>
                  <Clock size={20} className="mr-2" style={{ color: '#1F7DAD' }} />
                  Business Hours
                </h3>
                <ul className="space-y-2">
                  {[
                    { days: 'Monday - Friday', hours: '8:30 AM - 5:30 PM' },
                    { days: 'Saturday', hours: '9:00 AM - 1:00 PM' },
                    { days: 'Sunday', hours: 'Closed' }
                  ].map((item, index) => (
                    <li key={index} className="flex justify-between">
                      <span style={{ color: '#1E566C' }}>{item.days}</span>
                      <span className="font-medium" style={{ color: '#10478B' }}>{item.hours}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div 
              className="lg:w-3/5"
              variants={itemVariants}
            >
              <div 
                className="p-8 rounded-lg shadow-sm"
                style={{ backgroundColor: '#f8fafc', border: '1px solid #89B8CA' }}
              >
                <h2 className="text-2xl font-bold mb-6" style={{ color: '#10478B' }}>Send us a Message</h2>
                <ContactForm />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16" style={{ backgroundColor: '#f8fafc' }}>
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-3xl font-bold text-center mb-12"
            style={{ color: '#10478B' }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Find Us
          </motion.h2>
          <motion.div 
            className="p-4 rounded-lg shadow-sm"
            style={{ backgroundColor: 'white', border: '1px solid #89B8CA' }}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="h-96 w-full rounded-lg flex items-center justify-center">
              <div className="text-center">
                <MapPin size={48} className="mx-auto mb-4" style={{ color: '#1F7DAD' }} />
                <p style={{ color: '#1E566C' }}>Google Map integration would go here</p>
                <p className="text-sm mt-2" style={{ color: '#367589' }}>Addis Ababa, Ethiopia</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section 
        className="py-16 text-white"
        style={{ backgroundColor: '#1F7DAD' }}
      >
        <div className="container mx-auto px-4 text-center">
          <motion.h2 
            className="text-3xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Let's Build Together
          </motion.h2>
          <motion.p 
            className="text-xl mb-8 max-w-2xl mx-auto opacity-90"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Ready to start your project? Contact us today and let's discuss how we can help.
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <motion.a 
              href="tel:+251XXXXXXXXX" 
              className="bg-white px-6 py-3 rounded-md transition-colors font-medium inline-flex items-center justify-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{ color: '#1F7DAD' }}
            >
              <Phone size={20} className="mr-2" />
              Call Us Now
            </motion.a>
            <motion.a 
              href="mailto:info@zedera.com" 
              className="bg-transparent border-2 border-white hover:bg-white px-6 py-3 rounded-md transition-colors font-medium inline-flex items-center justify-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Send size={20} className="mr-2" />
              Send an Email
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;