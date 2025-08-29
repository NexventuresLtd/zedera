// components/TestimonialCard.tsx
import React from 'react';
import { motion, type Variants } from 'framer-motion';
import { Quote } from 'lucide-react';

interface TestimonialCardProps {
  quote: string;
  author: string;
  company: string;
  image: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ quote, author, company, image }) => {
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

  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.3 }}
      variants={cardVariants}
      whileHover={{ y: -5 }}
      className="p-6 rounded-lg relative overflow-hidden"
      style={{
        backgroundColor: 'white',
        boxShadow: '0 10px 30px rgba(30, 86, 108, 0.1)',
        border: '1px solid rgba(135, 184, 202, 0.3)'
      }}
    >
      <Quote 
        size={40} 
        className="absolute -top-2 -left-2 opacity-10"
        style={{ color: '#1F7DAD' }} 
      />
      
      <div className="flex items-center mb-4">
        <motion.div 
          className="w-12 h-12 rounded-full overflow-hidden mr-4 border-2"
          style={{ borderColor: '#89B8CA' }}
          whileHover={{ rotate: 5, scale: 1.1 }}
          transition={{ duration: 0.2 }}
        >
          <img src={image} alt={author} className="w-full h-full object-cover" />
        </motion.div>
        <div>
          <h4 className="font-bold" style={{ color: '#10478B' }}>{author}</h4>
          <p className="text-sm" style={{ color: '#367589' }}>{company}</p>
        </div>
      </div>
      
      <motion.p 
        className="relative z-10"
        style={{ color: '#1E566C' }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        "{quote}"
      </motion.p>
      
      <div 
        className="absolute bottom-0 left-0 w-full h-1"
        style={{ backgroundColor: '#1F7DAD' }}
      />
    </motion.div>
  );
};

export default TestimonialCard;