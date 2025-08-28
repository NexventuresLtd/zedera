// pages/Services.tsx
import React, { useState, useRef, useEffect } from 'react';
import { 
  Code, Brain, TrendingUp, Palette, Users, MessageCircle, 
  Calendar, ArrowRight, ChevronDown, ChevronUp, X 
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Services: React.FC = () => {
  const [expandedService, setExpandedService] = useState<number | null>(null);
  const [isProcessVisible, setIsProcessVisible] = useState(false);
  const processRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsProcessVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (processRef.current) {
      observer.observe(processRef.current);
    }

    return () => {
      if (processRef.current) {
        observer.unobserve(processRef.current);
      }
    };
  }, []);

  const services = [
    {
      icon: <Code size={32} />,
      title: 'Web & App Development',
      description: 'Custom web and mobile applications built with cutting-edge technologies.',
      price: 'Starting from $2,000',
      features: ['Responsive Design', 'Cross-Platform Compatibility', 'API Integration', 'Maintenance & Support'],
      details: 'Our development process follows agile methodologies to ensure timely delivery and maximum flexibility. We use modern frameworks like React, Vue, Angular, and React Native to build scalable applications.'
    },
    {
      icon: <Brain size={32} />,
      title: 'AI & Automation Tools',
      description: 'Intelligent solutions that streamline processes and enhance decision-making.',
      price: 'Starting from $3,500',
      features: ['Machine Learning Models', 'Process Automation', 'Data Analytics', 'Custom AI Solutions'],
      details: 'Leverage the power of artificial intelligence to automate repetitive tasks, gain insights from your data, and create intelligent systems that learn and adapt over time.'
    },
    {
      icon: <TrendingUp size={32} />,
      title: 'Digital Marketing',
      description: 'Data-driven strategies to grow your online presence and reach your audience.',
      price: 'Starting from $1,000',
      features: ['SEO Optimization', 'Social Media Management', 'Content Strategy', 'Performance Analytics'],
      details: 'Our data-driven approach ensures that every marketing dollar is spent effectively. We focus on measurable results and continuous optimization to maximize your ROI.'
    },
    {
      icon: <Palette size={32} />,
      title: 'UI/UX Design',
      description: 'Beautiful, intuitive designs that provide exceptional user experiences.',
      price: 'Starting from $1,500',
      features: ['User Research', 'Wireframing & Prototyping', 'Visual Design', 'Usability Testing'],
      details: 'We create designs that not only look beautiful but also function flawlessly. Our user-centered approach ensures that your customers have an exceptional experience.'
    },
    {
      icon: <MessageCircle size={32} />,
      title: 'Consulting',
      description: 'Expert advice to help you make informed technology decisions.',
      price: 'Starting from $500',
      features: ['Technology Assessment', 'Digital Strategy', 'Implementation Planning', 'Training & Workshops'],
      details: 'Our consultants bring years of industry experience to help you navigate complex technology decisions and develop strategies that align with your business goals.'
    },
    {
      icon: <Users size={32} />,
      title: 'Dedicated Teams',
      description: 'Hire dedicated developers and designers to work exclusively on your projects.',
      price: 'Starting from $1,500/month',
      features: ['Flexible Engagement Models', 'Direct Communication', 'Agile Methodology', 'Regular Reporting'],
      details: 'Extend your team with our expert developers, designers, and project managers. We integrate seamlessly with your workflow and become an extension of your team.'
    }
  ];

  const processSteps = [
    {
      title: 'Discovery',
      description: 'We begin by understanding your business needs, goals, and challenges.'
    },
    {
      title: 'Design',
      description: 'We create wireframes and prototypes to visualize the solution.'
    },
    {
      title: 'Build',
      description: 'Our team develops your solution using agile methodologies.'
    },
    {
      title: 'Deliver',
      description: 'We deploy the finished product and ensure everything works perfectly.'
    },
    {
      title: 'Support',
      description: 'We provide ongoing maintenance and support to keep your solution running smoothly.'
    }
  ];

  const toggleService = (index: number) => {
    if (expandedService === index) {
      setExpandedService(null);
    } else {
      setExpandedService(index);
    }
  };

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-[#10478B] text-white">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="container mx-auto px-4 text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Comprehensive technology solutions tailored to your business needs.
          </p>
          <motion.div 
            className="mt-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.7 }}
          >
            <div className="w-24 h-1 bg-[#89B8CA] mx-auto"></div>
          </motion.div>
        </motion.div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-3xl font-bold text-center mb-12 text-[#1E566C]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Our Service Packages
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-[#1E566C]">{service.title}</h3>
                  <p className="text-gray-700 mb-4">{service.description}</p>
                  <p className="text-[#1F7DAD] font-bold mb-4">{service.price}</p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-[#367589] mb-2">What's Included:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <div className="text-[#1F7DAD] mr-2 mt-1">•</div>
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex flex-col space-y-3">
                    <button 
                      onClick={() => toggleService(index)}
                      className="flex items-center justify-between text-[#1F7DAD] hover:text-[#10478B] font-medium py-2"
                    >
                      {expandedService === index ? 'Show Less' : 'Learn More'}
                      {expandedService === index ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                    </button>
                    
                    <a 
                      href="/contact" 
                      className="bg-[#1F7DAD] hover:bg-[#10478B] text-white px-4 py-2 rounded-md transition-colors font-medium inline-flex items-center justify-center"
                    >
                      Request Quote
                      <ArrowRight size={16} className="ml-1" />
                    </a>
                  </div>
                </div>
                
                <AnimatePresence>
                  {expandedService === index && (
                    <motion.div 
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="bg-[#89B8CA] bg-opacity-10 p-6 border-t border-gray-200"
                    >
                      <p className="text-gray-700">{service.details}</p>
                      <button 
                        onClick={() => setExpandedService(null)}
                        className="mt-4 text-[#1F7DAD] hover:text-[#10478B] flex items-center"
                      >
                        <X size={16} className="mr-1" />
                        Close
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section ref={processRef} className="py-16 bg-[#F8FBFC]">
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-3xl font-bold text-center mb-12 text-[#1E566C]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Our Process
          </motion.h2>
          
          <div className="relative max-w-5xl mx-auto">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-[#89B8CA] bg-opacity-40 hidden md:block"></div>
            
            <div className="space-y-12 md:space-y-0">
              {processSteps.map((step, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: isProcessVisible ? index * 0.2 : 0 }}
                  className={`flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} items-center`}
                >
                  <div className="md:w-1/2 mb-4 md:mb-0 md:p-8">
                    <h3 className="text-2xl font-bold mb-2 text-[#1E566C] flex items-center">
                      {step.title}
                    </h3>
                    <p className="text-gray-700">{step.description}</p>
                  </div>
                  
                  <div className="md:w-1/2 flex justify-center">
                    <div className="w-16 h-16 rounded-full bg-[#1F7DAD] text-white flex items-center justify-center font-bold text-xl relative z-10 shadow-lg">
                      {index + 1}
                    </div>
                  </div>
                  
                  <div className="md:w-1/2"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#10478B] text-white">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="container mx-auto px-4 text-center"
        >
          <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let's discuss your project and how we can help you achieve your goals.
          </p>
          
          <motion.div 
            className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <a 
              href="/contact" 
              className="bg-white text-[#10478B] hover:bg-gray-100 px-6 py-3 rounded-md transition-colors font-medium inline-flex items-center justify-center shadow-md hover:shadow-lg"
            >
              <MessageCircle size={20} className="mr-2" />
              Book Consultation
            </a>
            <a 
              href="/contact" 
              className="bg-transparent border-2 border-white hover:bg-white hover:text-[#10478B] px-6 py-3 rounded-md transition-colors font-medium inline-flex items-center justify-center"
            >
              <Calendar size={20} className="mr-2" />
              Request a Quote
            </a>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
};

export default Services;