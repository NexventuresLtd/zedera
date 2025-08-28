// pages/Portfolio.tsx
import React from 'react';
import { ExternalLink, ArrowRight } from 'lucide-react';
import TestimonialCard from '../Components/TestimonialCard';
import ClientLogos from '../Components/ClientLogos';
import { motion } from 'framer-motion';

const Portfolio: React.FC = () => {
  const caseStudies = [
    {
      title: 'E-Commerce Platform for Local Retailer',
      description: 'A comprehensive online shopping solution that increased sales by 40% in the first quarter.',
      image: 'https://shega.co/_next/image?url=https%3A%2F%2Fshegastrpool.blob.core.windows.net%2Fmedia-prod%2Fmedia-prod%2Fphoto_2024_11_29_18_03_50_0313261f1f.jpg&w=1920&q=75',
      tags: ['Web Development', 'E-Commerce', 'UI/UX Design'],
      link: '#'
    },
    {
      title: 'Mobile App for Health Service',
      description: 'A telehealth application connecting patients with healthcare providers across Ethiopia.',
      image: 'https://shega.co/_next/image?url=https%3A%2F%2Fshegastrpool.blob.core.windows.net%2Fmedia-prod%2Fmedia-prod%2Fphoto_2024_11_29_18_03_50_0313261f1f.jpg&w=1920&q=75',
      tags: ['Mobile App', 'Healthcare', 'React Native'],
      link: '#'
    },
    {
      title: 'NGO Management System',
      description: 'A custom CRM system for an international NGO operating in East Africa.',
      image: 'https://shega.co/_next/image?url=https%3A%2F%2Fshegastrpool.blob.core.windows.net%2Fmedia-prod%2Fmedia-prod%2Fphoto_2024_11_29_18_03_50_0313261f1f.jpg&w=1920&q=75',
      tags: ['Web App', 'CRM', 'Database Design'],
      link: '#'
    }
  ];

  const testimonials = [
    {
      quote: "Zedera transformed our business with their innovative e-commerce solution. Their team was professional and delivered beyond our expectations.",
      author: "Samuel Tekle",
      company: "EthioRetail",
      image: "https://shega.co/_next/image?url=https%3A%2F%2Fshegastrpool.blob.core.windows.net%2Fmedia-prod%2Fmedia-prod%2Fphoto_2024_11_29_18_03_50_0313261f1f.jpg&w=1920&q=75"
    },
    {
      quote: "Working with Zedera has been a game-changer for our organization. Their understanding of both local context and global standards is impressive.",
      author: "Dr. Maya Berhane",
      company: "Health Initiative Africa",
      image: "https://shega.co/_next/image?url=https%3A%2F%2Fshegastrpool.blob.core.windows.net%2Fmedia-prod%2Fmedia-prod%2Fphoto_2024_11_29_18_03_50_0313261f1f.jpg&w=1920&q=75"
    },
    {
      quote: "The dedicated team from Zedera integrated seamlessly with our workflow. The quality of work and communication exceeded our expectations.",
      author: "James Peterson",
      company: "Global NGO Partners",
      image: "https://shega.co/_next/image?url=https%3A%2F%2Fshegastrpool.blob.core.windows.net%2Fmedia-prod%2Fmedia-prod%2Fphoto_2024_11_29_18_03_50_0313261f1f.jpg&w=1920&q=75"
    }
  ];

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
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Portfolio</h1>
          <p className="text-xl max-w-3xl mx-auto opacity-90">
            Explore our work and see how we've helped businesses achieve their goals.
          </p>
        </motion.div>
      </section>

      {/* Case Studies */}
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
            Case Studies
          </motion.h2>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {caseStudies.map((project, index) => (
              <motion.div 
                key={index}
                className="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
                variants={itemVariants}
                whileHover={{ y: -5 }}
                style={{
                  backgroundColor: 'white',
                  border: '1px solid rgba(135, 184, 202, 0.3)'
                }}
              >
                <div className="h-48 overflow-hidden">
                  <motion.img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2" style={{ color: '#10478B' }}>{project.title}</h3>
                  <p className="mb-4" style={{ color: '#1E566C' }}>{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, idx) => (
                      <span 
                        key={idx} 
                        className="text-xs px-3 py-1 rounded-full"
                        style={{ backgroundColor: '#E8F4F8', color: '#1F7DAD' }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <motion.a 
                    href={project.link} 
                    className="inline-flex items-center font-medium"
                    style={{ color: '#1F7DAD' }}
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    View Project
                    <ExternalLink size={16} className="ml-1" />
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Client Testimonials */}
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
            What Our Clients Say
          </motion.h2>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                quote={testimonial.quote}
                author={testimonial.author}
                company={testimonial.company}
                image={testimonial.image}
              />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Client Logos */}
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
            Our Clients & Partners
          </motion.h2>
          <ClientLogos />
          <motion.div 
            className="text-center mt-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <p style={{ color: '#367589' }}>
              Supporting NGOs, Startups, and SMEs in Ethiopia and beyond
            </p>
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
            Have a Project in Mind?
          </motion.h2>
          <motion.p 
            className="text-xl mb-8 max-w-2xl mx-auto opacity-90"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Let's discuss how we can bring your ideas to life with our technology expertise.
          </motion.p>
          <motion.a 
            href="/contact" 
            className="inline-flex items-center bg-white px-6 py-3 rounded-md transition-colors font-medium"
            style={{ color: '#1F7DAD' }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Start a Project
            <ArrowRight size={20} className="ml-2" />
          </motion.a>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;