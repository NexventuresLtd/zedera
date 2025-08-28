// pages/About.tsx
import React from 'react';
import { Target, Eye, Shield, Heart, Users, TrendingUp, DollarSign } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const About: React.FC = () => {
  const values = [
    {
      icon: <Target size={32} />,
      title: 'Innovation',
      description: 'We embrace cutting-edge technologies and creative thinking to deliver exceptional solutions.'
    },
    {
      icon: <Shield size={32} />,
      title: 'Integrity',
      description: 'We maintain honesty and transparency in all our dealings with clients and partners.'
    },
    {
      icon: <Users size={32} />,
      title: 'Partnership',
      description: 'We view our clients as partners and work collaboratively to achieve their goals.'
    }
  ];

  const impactAreas = [
    {
      icon: <Users size={24} />,
      title: 'Youth Development',
      description: 'Training and mentoring the next generation of Ethiopian tech talent.'
    },
    {
      icon: <TrendingUp size={24} />,
      title: 'Digital Growth',
      description: 'Contributing to Ethiopia\'s digital transformation through innovative solutions.'
    },
    {
      icon: <Heart size={24} />,
      title: 'Women in Tech',
      description: 'Supporting and promoting women\'s participation in the technology sector.'
    }
  ];

  // Animation variants
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
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8
      }
    }
  };

  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

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
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Story</h1>
          <p className="text-xl max-w-3xl mx-auto opacity-90">
            From humble beginnings to becoming a leading technology solutions provider in Ethiopia.
          </p>
        </motion.div>
      </section>

      {/* Our Story */}
      <section 
        className="py-16 bg-white"
        ref={sectionRef}
      >
        <div className="container mx-auto px-4">
          <motion.div 
            className="flex flex-col md:flex-row items-center"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <motion.div 
              className="md:w-1/2 mb-8 md:mb-0"
              variants={itemVariants}
            >
              <h2 className="text-3xl font-bold mb-6" style={{ color: '#10478B' }}>How Zedera Started</h2>
              <p className="mb-4" style={{ color: '#1E566C' }}>
                Founded in 2020, Zedera began with a simple vision: to prove that world-class 
                technology solutions could be developed in Ethiopia by local talent. Our founders, 
                experienced in both local and international tech landscapes, recognized the 
                immense potential of Ethiopia's growing tech ecosystem.
              </p>
              <p className="mb-4" style={{ color: '#1E566C' }}>
                What started as a small team of passionate developers has grown into a 
                multidisciplinary technology company serving clients across various industries 
                both locally and internationally.
              </p>
            </motion.div>
            <motion.div 
              className="md:w-1/2 md:pl-12"
              variants={itemVariants}
            >
              <motion.img 
                src="https://shega.co/_next/image?url=https%3A%2F%2Fshegastrpool.blob.core.windows.net%2Fmedia-prod%2Fmedia-prod%2Fphoto_2024_11_29_18_03_50_0313261f1f.jpg&w=1920&q=75" 
                alt="Zedera team working together" 
                className="rounded-lg shadow-lg w-full h-auto"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                style={{ border: '1px solid #89B8CA' }}
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section 
        className="py-16"
        style={{ backgroundColor: '#f8fafc' }}
      >
        <div className="container mx-auto px-4">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-12"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.div 
              className="text-center p-8 rounded-lg bg-white shadow-sm"
              variants={itemVariants}
              whileHover={{ y: -5 }}
              style={{ border: '1px solid rgba(135, 184, 202, 0.3)' }}
            >
              <div className="bg-blue-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target size={48} style={{ color: '#1F7DAD' }} />
              </div>
              <h3 className="text-2xl font-bold mb-4" style={{ color: '#10478B' }}>Our Mission</h3>
              <p style={{ color: '#1E566C' }}>
                To deliver innovative, high-quality technology solutions that empower businesses 
                and contribute to Ethiopia's digital transformation, while developing local talent 
                to global standards.
              </p>
            </motion.div>
            <motion.div 
              className="text-center p-8 rounded-lg bg-white shadow-sm"
              variants={itemVariants}
              whileHover={{ y: -5 }}
              style={{ border: '1px solid rgba(135, 184, 202, 0.3)' }}
            >
              <div className="bg-blue-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Eye size={48} style={{ color: '#1F7DAD' }} />
              </div>
              <h3 className="text-2xl font-bold mb-4" style={{ color: '#10478B' }}>Our Vision</h3>
              <p style={{ color: '#1E566C' }}>
                To be the leading technology partner for businesses seeking world-class solutions 
                with the advantage of Ethiopian innovation, talent, and cost-effectiveness.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Why Zedera */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-3xl font-bold text-center mb-12"
            style={{ color: '#10478B' }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Why Choose Zedera?
          </motion.h2>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {[
              {
                icon: <DollarSign size={32} />,
                title: 'Cost-Effective Excellence',
                description: 'Get world-class quality solutions at competitive prices, thanks to our strategic location and efficient operations.'
              },
              {
                icon: <Shield size={32} />,
                title: 'Global Standards',
                description: 'We adhere to international best practices in software development, project management, and quality assurance.'
              },
              {
                icon: <Users size={32} />,
                title: 'Local Expertise',
                description: 'Deep understanding of both Ethiopian and African market dynamics, combined with global technological perspectives.'
              }
            ].map((item, index) => (
              <motion.div 
                key={index}
                className="p-8 rounded-lg text-center"
                variants={itemVariants}
                whileHover={{ 
                  y: -8,
                  boxShadow: '0 15px 30px rgba(30, 86, 108, 0.15)'
                }}
                style={{
                  backgroundColor: '#f8fafc',
                  border: '1px solid rgba(135, 184, 202, 0.3)'
                }}
              >
                <motion.div 
                  className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                  style={{ backgroundColor: '#89B8CA' }}
                  whileHover={{ rotate: 5, scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                >
                  <div style={{ color: 'white' }}>{item.icon}</div>
                </motion.div>
                <h3 className="text-xl font-bold mb-4" style={{ color: '#10478B' }}>{item.title}</h3>
                <p style={{ color: '#1E566C' }}>{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section 
        className="py-16"
        style={{ backgroundColor: '#f8fafc' }}
      >
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-3xl font-bold text-center mb-12"
            style={{ color: '#10478B' }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Our Values
          </motion.h2>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {values.map((value, index) => (
              <motion.div 
                key={index}
                className="p-8 rounded-lg text-center"
                variants={itemVariants}
                whileHover={{ 
                  y: -5,
                  boxShadow: '0 10px 25px rgba(30, 86, 108, 0.1)'
                }}
                style={{
                  backgroundColor: 'white',
                  border: '1px solid rgba(135, 184, 202, 0.3)'
                }}
              >
                <motion.div 
                  className="mx-auto mb-4"
                  style={{ color: '#1F7DAD' }}
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                >
                  {value.icon}
                </motion.div>
                <h3 className="text-xl font-bold mb-4" style={{ color: '#10478B' }}>{value.title}</h3>
                <p style={{ color: '#1E566C' }}>{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CSR/Impact */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-3xl font-bold text-center mb-12"
            style={{ color: '#10478B' }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Our Impact
          </motion.h2>
          <motion.p 
            className="text-center max-w-3xl mx-auto mb-12"
            style={{ color: '#1E566C' }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            At Zedera, we believe in using technology as a force for good. We're committed to 
            making a positive impact in our community and contributing to Ethiopia's growth.
          </motion.p>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {impactAreas.map((area, index) => (
              <motion.div 
                key={index}
                className="p-8 rounded-lg"
                variants={itemVariants}
                whileHover={{ 
                  y: -5,
                  boxShadow: '0 10px 25px rgba(30, 86, 108, 0.1)'
                }}
                style={{
                  backgroundColor: '#E8F4F8',
                  border: '1px solid #89B8CA'
                }}
              >
                <motion.div 
                  className="mb-4"
                  style={{ color: '#1F7DAD' }}
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                >
                  {area.icon}
                </motion.div>
                <h3 className="text-xl font-bold mb-4" style={{ color: '#10478B' }}>{area.title}</h3>
                <p style={{ color: '#1E566C' }}>{area.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;