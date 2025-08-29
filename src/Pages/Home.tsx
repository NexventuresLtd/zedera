// pages/Home.tsx
import React from 'react';
import { ArrowRight, Code, Brain, TrendingUp, Palette, Users, DollarSign, Sparkles, Zap, Globe, Award } from 'lucide-react';
import { motion, type Variants } from 'framer-motion';
import HeroSection from '../Components/HeroSection';
import ClientLogos from '../Components/ClientLogos';

const Home: React.FC = () => {
  const services = [
    {
      icon: <Code size={32} />,
      title: 'Web & App Development',
      description: 'Custom web and mobile applications built with cutting-edge technologies.',
      gradient: 'from-[#1E566C] to-[#367589]'
    },
    {
      icon: <Brain size={32} />,
      title: 'AI & Automation',
      description: 'Intelligent solutions that streamline processes and enhance decision-making.',
      gradient: 'from-[#367589] to-[#5795A7]'
    },
    {
      icon: <TrendingUp size={32} />,
      title: 'Digital Marketing',
      description: 'Data-driven strategies to grow your online presence and reach your audience.',
      gradient: 'from-[#5795A7] to-[#89B8CA]'
    },
    {
      icon: <Palette size={32} />,
      title: 'UI/UX Design',
      description: 'Beautiful, intuitive designs that provide exceptional user experiences.',
      gradient: 'from-[#1F7DAD] to-[#1C478B]'
    }
  ];

  const advantages = [
    { icon: <Users size={24} />, text: 'Young, talented workforce', color: '#1E566C' },
    { icon: <Code size={24} />, text: 'Growing tech ecosystem', color: '#367589' },
    { icon: <DollarSign size={24} />, text: 'Cost-effective solutions', color: '#1F7DAD' },
    { icon: <Brain size={24} />, text: 'Cultural understanding of local and global markets', color: '#1C478B' }
  ];

  const stats = [
    { icon: <Sparkles size={32} />, number: '100+', label: 'Projects Delivered' },
    { icon: <Users size={32} />, number: '50+', label: 'Happy Clients' },
    { icon: <Globe size={32} />, number: '15+', label: 'Countries Served' },
    { icon: <Award size={32} />, number: '5+', label: 'Years Experience' }
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

  const itemVariants: Variants = {
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


const floatingAnimation: Variants = {
  animate: {
    y: [0, -10, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

  return (
    <div className="overflow-hidden">
      <HeroSection />
      
      {/* Intro Section with Floating Elements */}
      <section className="py-20 bg-gradient-to-br from-white via-gray-50 to-[#89B8CA]/10 relative">
        {/* Floating Background Elements */}
        <motion.div 
          className="absolute top-20 left-10 w-20 h-20 bg-[#1E566C]/10 rounded-full blur-xl"
          variants={floatingAnimation}
        />
        <motion.div 
          className="absolute bottom-20 right-10 w-32 h-32 bg-[#1F7DAD]/10 rounded-full blur-xl"
          animate={{ ...floatingAnimation, transition: { ...floatingAnimation.transition, delay: 1 } }}
        />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.div variants={itemVariants} className="mb-6">
              <motion.div 
                className="inline-flex items-center gap-2 bg-gradient-to-r from-[#1E566C] to-[#1E566C] text-white px-4 py-2 rounded-full text-sm font-medium mb-4"
                whileHover={{ scale: 1.05 }}
              >
                <Zap size={16} />
                Empowering Ethiopian Innovation
              </motion.div>
            </motion.div>
            
            <motion.h2 
              className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-[#1E566C] via-[#1F7DAD] to-[#1C478B] bg-clip-text text-transparent"
              variants={itemVariants}
            >
              Empowering Businesses Through Technology
            </motion.h2>
            
            <motion.p 
              className="text-xl text-gray-600 leading-relaxed"
              variants={itemVariants}
            >
              Zedera is an Ethiopian technology company delivering world-class digital solutions 
              while nurturing local talent. We bridge the gap between global standards and 
              homegrown expertise, creating innovative solutions that drive business growth.
            </motion.p>
            
            <motion.div 
              className="mt-10 flex justify-center"
              variants={itemVariants}
            >
              <motion.button
                className="bg-gradient-to-r from-[#1E566C] to-[#1F7DAD] text-white px-8 py-4 rounded-full font-medium shadow-lg hover:shadow-xl transition-shadow"
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(30, 86, 108, 0.3)" }}
                whileTap={{ scale: 0.95 }}
              >
                Discover Our Journey
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <motion.section 
        className="py-16 bg-gradient-to-r from-[#1E566C] to-[#1C478B] text-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4">
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
            variants={containerVariants}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                variants={itemVariants}
              >
                <motion.div 
                  className="text-[#89B8CA] mb-4 flex justify-center"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  {stat.icon}
                </motion.div>
                <motion.div 
                  className="text-3xl font-bold mb-2"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                >
                  {stat.number}
                </motion.div>
                <p className="text-[#89B8CA]">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Enhanced Services Preview */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-[#5795A7]/5 relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.h2 
              className="text-4xl font-bold text-center mb-4 bg-gradient-to-r from-[#1E566C] to-[#1C478B] bg-clip-text text-transparent"
              variants={itemVariants}
            >
              Our Core Services
            </motion.h2>
            
            <motion.p 
              className="text-center text-gray-600 mb-16 max-w-2xl mx-auto"
              variants={itemVariants}
            >
              Comprehensive technology solutions designed to accelerate your business growth
            </motion.p>
            
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
              variants={containerVariants}
            >
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  className={`bg-gradient-to-br ${service.gradient} rounded-2xl p-6 text-white relative overflow-hidden group cursor-pointer`}
                  variants={itemVariants}
                  whileHover={{
                    scale: 1.05,
                    rotateY: 5,
                    transition: { duration: 0.3 }
                  }}
                >
                  {/* Background Pattern */}
                  <div className="absolute inset-0 bg-white/5 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.3)_1px,transparent_0)] [background-size:20px_20px] group-hover:animate-pulse" />
                  
                  <motion.div 
                    className="relative z-10"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <motion.div 
                      className="mb-4 inline-block"
                      whileHover={{ rotate: 15, scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                    >
                      {service.icon}
                    </motion.div>
                    <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                    <p className="text-white/90 text-sm leading-relaxed">{service.description}</p>
                    
                    <motion.div 
                      className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity"
                      whileHover={{ x: 5 }}
                    >
                      <ArrowRight size={20} />
                    </motion.div>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
            
            <motion.div 
              className="text-center mt-16"
              variants={itemVariants}
            >
              <motion.a 
                href="/services" 
                className="inline-flex items-center bg-gradient-to-r from-[#1E566C] to-[#1F7DAD] hover:from-[#367589] hover:to-[#1C478B] text-white px-8 py-4 rounded-full transition-all font-medium shadow-lg hover:shadow-xl group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Explore All Services
                <motion.div
                  className="ml-2"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ArrowRight size={20} />
                </motion.div>
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Enhanced Why Ethiopia Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        {/* Background Elements */}
        <motion.div 
          className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#89B8CA]/20 to-[#5795A7]/20 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
          transition={{ duration: 20, repeat: Infinity }}
        />
        
        <div className="container mx-auto px-4 relative">
          <motion.div 
            className="flex flex-col lg:flex-row items-center gap-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.div 
              className="lg:w-1/2"
              variants={itemVariants}
            >
              <motion.div 
                className="inline-flex items-center gap-2 bg-[#89B8CA]/20 text-[#1E566C] px-4 py-2 rounded-full text-sm font-medium mb-6"
                whileHover={{ scale: 1.05 }}
              >
                <Globe size={16} />
                Global Vision, Local Excellence
              </motion.div>
              
              <motion.h2 
                className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-[#1E566C] to-[#1C478B] bg-clip-text text-transparent"
                variants={itemVariants}
              >
                Why Ethiopia?
              </motion.h2>
              
              <motion.p 
                className="text-gray-600 mb-8 text-lg leading-relaxed"
                variants={itemVariants}
              >
                Ethiopia offers unique advantages for technology development, combining 
                emerging talent with cost efficiencies that deliver exceptional value. 
                We're at the heart of Africa's digital transformation.
              </motion.p>
              
              <motion.div 
                className="space-y-6"
                variants={containerVariants}
              >
                {advantages.map((advantage, index) => (
                  <motion.div 
                    key={index} 
                    className="flex items-start group cursor-pointer p-4 rounded-xl hover:bg-gray-50 transition-colors"
                    variants={itemVariants}
                    whileHover={{ x: 10, backgroundColor: "rgba(137, 184, 202, 0.1)" }}
                  >
                    <motion.div 
                      className="mr-4 mt-1 p-2 rounded-lg"
                      style={{ backgroundColor: `${advantage.color}20`, color: advantage.color }}
                      whileHover={{ rotate: 10, scale: 1.1 }}
                    >
                      {advantage.icon}
                    </motion.div>
                    <p className="text-lg font-medium text-gray-800 group-hover:text-[#1E566C] transition-colors">
                      {advantage.text}
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
            
            <motion.div 
              className="lg:w-1/2 relative"
              variants={itemVariants}
            >
              <motion.div 
                className="relative rounded-2xl overflow-hidden shadow-2xl"
                whileHover={{ scale: 1.02, rotateY: 5 }}
                transition={{ duration: 0.5 }}
              >
                <motion.img 
                  src="https://shega.co/_next/image?url=https%3A%2F%2Fshegastrpool.blob.core.windows.net%2Fmedia-prod%2Fmedia-prod%2Fphoto_2024_11_29_18_03_50_0313261f1f.jpg&w=1920&q=75" 
                  className="w-full h-auto"
                  alt="Ethiopia Technology"
                  initial={{ scale: 1.1 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.8 }}
                />
                
                {/* Overlay with gradient */}
                <div className="absolute inset-0 bg-gradient-to-tr from-[#1E566C]/20 via-transparent to-[#1F7DAD]/20" />
                
                {/* Floating Badge */}
                <motion.div 
                  className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <span className="text-[#1E566C] font-semibold text-sm">🇪🇹 Made in Ethiopia</span>
                </motion.div>
              </motion.div>
              
              {/* Decorative Elements */}
              <motion.div 
                className="absolute -top-4 -left-4 w-24 h-24 bg-gradient-to-br from-[#1F7DAD] to-[#1C478B] rounded-full opacity-20"
                variants={floatingAnimation}
              />
              <motion.div 
                className="absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-to-br from-[#367589] to-[#5795A7] rounded-full opacity-20"
                animate={{ ...floatingAnimation, transition: { ...floatingAnimation.transition, delay: 1.5 } }}
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Enhanced Featured Clients */}
      <motion.section 
        className="py-20 bg-gradient-to-br from-[#89B8CA]/10 to-gray-50"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-4xl font-bold text-center mb-4 bg-gradient-to-r from-[#1E566C] to-[#1C478B] bg-clip-text text-transparent"
            variants={itemVariants}
          >
            Trusted By Industry Leaders
          </motion.h2>
          <motion.p 
            className="text-center text-gray-600 mb-16"
            variants={itemVariants}
          >
            Join the companies that trust us with their digital transformation
          </motion.p>
          <motion.div variants={itemVariants}>
            <ClientLogos />
          </motion.div>
        </div>
      </motion.section>

      {/* Enhanced CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#1E566C] via-[#1F7DAD] to-[#1C478B] text-white relative overflow-hidden">
        {/* Animated Background */}
        <motion.div 
          className="absolute inset-0 opacity-10"
          animate={{ 
            backgroundPosition: ["0% 0%", "100% 100%"],
          }}
          transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
          style={{
            backgroundImage: "radial-gradient(circle at 20px 20px, rgba(255,255,255,0.3) 1px, transparent 0)",
            backgroundSize: "40px 40px"

          }}
        />
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.div 
              className="inline-flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full text-sm font-medium mb-6"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
            >
              <Sparkles size={16} />
              Ready to Get Started?
            </motion.div>
            
            <motion.h2 
              className="text-4xl lg:text-5xl font-bold mb-6"
              variants={itemVariants}
            >
              Ready to Transform Your Business?
            </motion.h2>
            
            <motion.p 
              className="text-xl mb-12 max-w-3xl mx-auto leading-relaxed"
              variants={itemVariants}
            >
              Let's discuss how our innovative technology solutions can help you achieve your goals 
              and stay ahead in today's digital landscape.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row justify-center gap-6"
              variants={itemVariants}
            >
              <motion.a 
                href="/contact" 
                className="bg-white text-[#1E566C] hover:bg-gray-100 px-8 py-4 rounded-full transition-all font-medium shadow-lg hover:shadow-xl inline-flex items-center justify-center group"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Users size={20} className="mr-2" />
                Work With Us
                <motion.div
                  className="ml-2"
                  animate={{ x: [0, 3, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ArrowRight size={16} />
                </motion.div>
              </motion.a>
              
              <motion.a 
                href="/contact" 
                className="bg-transparent border-2 border-white hover:bg-white hover:text-[#1E566C] px-8 py-4 rounded-full transition-all font-medium inline-flex items-center justify-center group"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <DollarSign size={20} className="mr-2" />
                Get a Quote
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
        
        {/* Floating Elements */}
        <motion.div 
          className="absolute top-20 left-20 w-2 h-2 bg-white rounded-full"
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 2, repeat: Infinity, delay: 0 }}
        />
        <motion.div 
          className="absolute top-40 right-32 w-1 h-1 bg-white rounded-full"
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 2, repeat: Infinity, delay: 0.7 }}
        />
        <motion.div 
          className="absolute bottom-32 left-40 w-1 h-1 bg-white rounded-full"
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 2, repeat: Infinity, delay: 1.4 }}
        />
      </section>
    </div>
  );
};

export default Home;