// components/ServiceCard.tsx
import React from 'react';
import type { ReactNode } from 'react';
import { motion, type Variants } from 'framer-motion';

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description }) => {
  // Animation variants
  const cardVariants:Variants = {
    offscreen: {
      y: 50,
      opacity: 0
    },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8
      }
    }
  };

  const iconVariants = {
    hover: {
      scale: 1.1,
      rotate: 5,
      transition: {
        duration: 0.3
      }
    }
  };

  return (
    <motion.div
      className="service-card"
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.3 }}
      whileHover={{ y: -5 }}
      variants={cardVariants}
      style={{
        background: 'linear-gradient(145deg, #ffffff, #f5f5f5)',
        borderRadius: '16px',
        padding: '2rem',
        boxShadow: '0 10px 30px rgba(30, 86, 108, 0.1)',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        border: '1px solid rgba(135, 184, 202, 0.3)',
        transition: 'all 0.3s ease'
      }}
    >
      <motion.div
        variants={iconVariants}
        whileHover="hover"
        style={{
          backgroundColor: '#89B8CA',
          width: '80px',
          height: '80px',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: '1.5rem',
          color: 'white',
          fontSize: '2rem'
        }}
      >
        {icon}
      </motion.div>
      
      <h3
        style={{
          color: '#10478B',
          fontSize: '1.5rem',
          fontWeight: '600',
          marginBottom: '1rem'
        }}
      >
        {title}
      </h3>
      
      <p
        style={{
          color: '#1E566C',
          lineHeight: '1.6'
        }}
      >
        {description}
      </p>
      
      <motion.div
        whileHover={{ width: '100%' }}
        style={{
          height: '3px',
          width: '40%',
          backgroundColor: '#1F7DAD',
          marginTop: '1.5rem',
          borderRadius: '2px'
        }}
      />
    </motion.div>
  );
};

export default ServiceCard;