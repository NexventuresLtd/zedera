// components/HeroSection.tsx
import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  Play, 
  Zap, 
  Globe, 
  TrendingUp, 
  Award, 
  Code, 
  Sparkles,
  ChevronDown,
  Star,
  Users,
  Rocket
} from 'lucide-react';
import { motion, useAnimation, useInView, type Variants } from 'framer-motion';

const HeroSection: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = React.useRef(null);
  const isInView = useInView(heroRef, { once: true });
  const controls = useAnimation();

  const slides = [
    {
      title: "World-Class Technology",
      subtitle: "Homegrown Talent",
      description: "Ethiopian technology solutions that compete on a global scale while empowering local communities.",
      image: "https://cdn.prod.website-files.com/5f687fd1bdf2ee74ad010eb9/6448895c0b476d3cf28895a7_Getting%20to%20a%20World-class%20Supply%20Chain.webp",
      accent: "from-[#ffff] to-[#ffff]" // Deeper blues for better contrast
    },
    {
      title: "Innovation Meets",
      subtitle: "Excellence",
      description: "Transforming ideas into powerful digital solutions with cutting-edge technology and creative expertise.",
      image: "https://legallyinnovative.com/assets/hero-tech-bg-DaJ7RQ8-.jpg",
      accent: "from-[#ffff] to-[#ffff]" // Deeper blues for better contrast
    },
    {
      title: "Building Tomorrow's",
      subtitle: "Digital Future",
      description: "Pioneering next-generation applications and platforms that drive business growth and user engagement.",
      image: "https://axabiztech.com/assets/img/axa-bg/tech-landscape-1.jpg",
      accent: "from-[#ffff] to-[#ffff]" // Deeper blues for better contrast
    }
  ];

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [isInView, controls]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants:Variants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" } // Simplified easing for better performance
    }
  };

  const floatingVariants:Variants = {
    animate: {
      y: [-5, 5, -5],
      transition: {
        duration: 3, // Faster duration
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const pulseVariants:Variants = {
    animate: {
      scale: [1, 1.05, 1],
      opacity: [0.4, 0.7, 0.4],
      transition: {
        duration: 2.5, // Reduced duration
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const features = [
    { icon: Code, text: "Custom Development", color: "#ffff" },
    { icon: Zap, text: "Lightning Fast", color: "#ffff" },
    { icon: Globe, text: "Global Reach", color: "#ffff" },
    { icon: Award, text: "Award Winning", color: "#ffff" }
  ];

  const stats = [
    { icon: Users, number: "100+", label: "Clients" },
    { icon: Rocket, number: "250+", label: "Projects" },
    { icon: Star, number: "5+", label: "Years" },
    { icon: TrendingUp, number: "98%", label: "Success" }
  ];

  return (
    <section ref={heroRef} className="relative min-h-screen overflow-hidden">
      {/* Fixed Dynamic Background */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <motion.div
            key={index}
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${slide.image})`,
              opacity: index === currentSlide ? 1 : 0,
              zIndex: 0
            }}
            transition={{ duration: 1.2 }} // Slightly faster transition
          />
        ))}
        
        {/* Color overlay with deeper blues for better contrast */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-br from-[#0A2C5C]/80 via-[#0D3A6E]/70 to-[#0A4B5C]/80"
          animate={{
            background: [
              "linear-gradient(135deg, #0A2C5C 0%, #0D3A6E 50%, #0A4B5C 90%)",
              "linear-gradient(135deg, #0D3A6E 0%, #0D6982 50%, #125C8A 90%)",
              "linear-gradient(135deg, #0A4B5C 0%, #0A2C5C 50%, #0D3A6E 90%)",
              "linear-gradient(135deg, #0A2C5C 0%, #0D3A6E 50%, #0A4B5C 90%)"
            ]
          }}
          transition={{ duration: 8, repeat: Infinity }} // Reduced duration
        />
        
        {/* Reduced number of particles for better performance */}
        <div className="absolute inset-0">
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1.5 h-1.5 bg-white/30 rounded-full" // Increased opacity for better visibility
              animate={{
                x: [0, 80, 0],
                y: [0, -80, 0],
                opacity: [0, 0.8, 0],
                scale: [0, 1, 0]
              }}
              transition={{
                duration: 5 + i * 0.3, // Reduced duration
                repeat: Infinity,
                delay: i * 0.2
              }}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`
              }}
            />
          ))}
        </div>

        {/* Interactive Cursor Effect - Simplified */}
        <motion.div
          className="absolute w-48 h-48 bg-gradient-radial from-white/10 to-transparent rounded-full pointer-events-none"
          animate={{
            x: mousePosition.x - 96,
            y: mousePosition.y - 96,
          }}
          transition={{ type: "tween", ease: "easeOut", duration: 0.5 }} // Simplified transition
        />
      </div>

      <div className="relative z-10 pt-32 pb-20">
        <div className="container mx-auto px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={controls}
            className="flex flex-col lg:flex-row items-center min-h-[80vh]"
          >
            {/* Left Content */}
            <div className="lg:w-1/2 mb-16 lg:mb-0 text-white">
              {/* Sliding Content */}
              <div className="relative overflow-hidden">
                <motion.div
                  key={currentSlide}
                  initial={{ x: 80, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.6 }} // Faster transition
                >
                  <motion.h1 
                    initial={{y:-6}}
                    animate={{y:0}}
                    className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
                  >
                    {slides[currentSlide].title}{" "}
                    <motion.span 
                      className={`bg-gradient-to-r ${slides[currentSlide].accent} bg-clip-text text-transparent relative inline-block`}
                      animate={{ 
                        scale: [1, 1.03, 1],
                        filter: ["brightness(1)", "brightness(1.1)", "brightness(1)"]
                      }}
                      transition={{ duration: 2.5, repeat: Infinity }} // Reduced duration
                    >
                      {slides[currentSlide].subtitle}
                      <motion.div
                        className="absolute -top-2 -right-2"
                        variants={floatingVariants}
                        animate="animate"
                      >
                        <Sparkles size={20} className="text-[#0D6982]" /> {/* Smaller icon */}
                      </motion.div>
                    </motion.span>
                  </motion.h1>
                </motion.div>
              </div>

              <motion.p 
                variants={itemVariants}
                className="text-xl md:text-2xl mb-8 text-white leading-relaxed max-w-2xl" // Changed to white for better contrast
              >
                {slides[currentSlide].description}
              </motion.p>

              {/* Feature Pills */}
              <motion.div 
                variants={itemVariants}
                className="flex flex-wrap gap-3 mb-10"
              >
                {features.map((feature, index) => {
                  const IconComponent = feature.icon;
                  return (
                    <motion.div
                      key={feature.text}
                      className="flex items-center bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full border border-white/30" // Increased contrast
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 0.8 + index * 0.1 }} // Reduced delay
                      whileHover={{ scale: 1.03, y: -2 }} // Reduced hover effect
                    >
                      <IconComponent size={16} className="mr-2" style={{ color: feature.color }} />
                      <span className="text-sm font-medium">{feature.text}</span>
                    </motion.div>
                  );
                })}
              </motion.div>

              {/* CTA Buttons */}
              <motion.div 
                variants={itemVariants}
                className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 mb-12"
              >
                <motion.a
                  href="/services"
                  className="group relative overflow-hidden bg-gradient-to-r from-white to-[#89B8CA] text-[#0A2C5C] hover:from-[#89B8CA] hover:to-white px-8 py-4 rounded-2xl transition-all duration-300 font-semibold text-lg inline-flex items-center justify-center shadow-2xl" // Darker text color
                  whileHover={{ scale: 1.03, y: -2 }} // Reduced hover effect
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="relative z-10 flex items-center">
                    Work With Us
                    <ArrowRight size={20} className="ml-3 group-hover:translate-x-1 transition-transform duration-300" /> {/* Reduced movement */}
                  </span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-[#0D6982] to-[#125C8A] opacity-0" // Darker overlay
                    whileHover={{ opacity: 0.1 }}
                  />
                </motion.a>

                <motion.button
                  className="group relative bg-transparent border-2 border-white/40 hover:border-white hover:bg-white/10 text-white px-8 py-4 rounded-2xl transition-all duration-300 font-semibold text-lg inline-flex items-center justify-center backdrop-blur-sm" // Increased border opacity
                  whileHover={{ scale: 1.03, y: -2 }} // Reduced hover effect
                  whileTap={{ scale: 0.98 }}
                >
                  <Play size={18} className="mr-3 group-hover:scale-105 transition-transform duration-300" /> {/* Reduced scaling */}
                  Watch Demo
                </motion.button>
              </motion.div>

              {/* Stats */}
              <motion.div 
                variants={itemVariants}
                className="grid grid-cols-2 sm:grid-cols-4 gap-6"
              >
                {stats.map((stat, index) => {
                  const IconComponent = stat.icon;
                  return (
                    <motion.div
                      key={stat.label}
                      className="text-center"
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 1.2 + index * 0.1 }} // Reduced delay
                    >
                      <div className="flex justify-center mb-2">
                        <div className="bg-white/20 p-2 rounded-lg"> {/* Increased contrast */}
                          <IconComponent size={18} className="text-[#e8eff1]" /> {/* Smaller icon */}
                        </div>
                      </div>
                      <motion.div 
                        className="text-2xl md:text-3xl font-bold mb-1 text-white" // White text for better contrast
                        animate={{ scale: [1, 1.05, 1] }}
                        transition={{ duration: 1.5, repeat: Infinity, delay: index * 0.2 }} // Reduced duration and delay
                      >
                        {stat.number}
                      </motion.div>
                      <div className="text-sm text-white/90">{stat.label}</div> {/* Increased contrast */}
                    </motion.div>
                  );
                })}
              </motion.div>
            </div>

            {/* Right Content - Image Carousel */}
            <div className="lg:w-1/2 lg:pl-16 relative">
              <motion.div 
                variants={itemVariants}
                className="relative"
              >
                {/* Floating Elements */}
                <motion.div
                  className="absolute -top-6 -right-6 w-12 h-12 bg-gradient-to-r from-[#0A4B5C] to-[#0D6982] rounded-full opacity-20 z-0" // Smaller size
                  variants={pulseVariants}
                  animate="animate"
                />
                <motion.div
                  className="absolute -bottom-6 -left-6 w-16 h-16 bg-gradient-to-r from-[#0D3A6E] to-[#125C8A] rounded-full opacity-30 z-0" // Smaller size
                  variants={pulseVariants}
                  animate="animate"
                  style={{ animationDelay: '0.5s' }} // Reduced delay
                />

                {/* Main Image Container */}
                <motion.div 
                  className="relative bg-white/15 backdrop-blur-lg p-6 rounded-3xl border border-white/25 shadow-2xl overflow-hidden" // Increased contrast
                  variants={floatingVariants}
                  animate="animate"
                  whileHover={{ scale: 1.01, rotateY: 2 }} // Reduced effect
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  {/* Sliding Images */}
                  <div className="relative h-72 md:h-88 overflow-hidden rounded-2xl"> {/* Slightly smaller container */}
                    {slides.map((slide, index) => (
                      <motion.img
                        key={index}
                        src={slide.image}
                        alt={`${slide.title} ${slide.subtitle}`}
                        className={`absolute inset-0 w-full h-full object-cover rounded-2xl transition-opacity duration-700 ${
                          index === currentSlide ? 'opacity-100' : 'opacity-0'
                        }`}
                        initial={{ scale: 1.05 }}
                        animate={{ 
                          scale: index === currentSlide ? 1 : 1.05,
                          filter: index === currentSlide ? "brightness(1)" : "brightness(0.8)"
                        }}
                        transition={{ duration: 0.8 }} // Faster transition
                      />
                    ))}
                    
                    {/* Image Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A2C5C]/40 to-transparent rounded-2xl" /> {/* Darker overlay for better contrast */}
                  </div>

                  {/* Slide Indicators */}
                  <div className="flex justify-center mt-4 space-x-2">
                    {slides.map((_, index) => (
                      <motion.button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                          index === currentSlide 
                            ? 'bg-white scale-110' // Reduced scaling
                            : 'bg-white/40 hover:bg-white/60' // Increased contrast
                        }`}
                        whileHover={{ scale: 1.1 }} // Reduced scaling
                        whileTap={{ scale: 0.95 }}
                      />
                    ))}
                  </div>
                </motion.div>

                {/* Decorative Elements - Removed for better performance */}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 8, 0] }} // Reduced movement
        transition={{ duration: 1.5, repeat: Infinity }} // Faster animation
      >
        <div className="flex flex-col items-center text-white/80"> {/* Increased contrast */}
          <span className="text-sm mb-2">Scroll to explore</span>
          <ChevronDown size={20} /> {/* Smaller icon */}
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;