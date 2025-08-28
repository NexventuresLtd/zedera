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
import { motion, useAnimation, useInView } from 'framer-motion';

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
      accent: "from-[#89B8CA] to-[#5795A7]"
    },
    {
      title: "Innovation Meets",
      subtitle: "Excellence",
      description: "Transforming ideas into powerful digital solutions with cutting-edge technology and creative expertise.",
      image: "https://legallyinnovative.com/assets/hero-tech-bg-DaJ7RQ8-.jpg",
      accent: "from-[#1F7DAD] to-[#367589]"
    },
    {
      title: "Building Tomorrow's",
      subtitle: "Digital Future",
      description: "Pioneering next-generation applications and platforms that drive business growth and user engagement.",
      image: "https://axabiztech.com/assets/img/axa-bg/tech-landscape-1.jpg",
      accent: "from-[#1C478B] to-[#1E5556]"
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

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      rotate: [0, 5, -5, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const pulseVariants = {
    animate: {
      scale: [1, 1.1, 1],
      opacity: [0.3, 0.6, 0.3],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const features = [
    { icon: Code, text: "Custom Development", color: "#89B8CA" },
    { icon: Zap, text: "Lightning Fast", color: "#5795A7" },
    { icon: Globe, text: "Global Reach", color: "#1F7DAD" },
    { icon: Award, text: "Award Winning", color: "#367589" }
  ];

  const stats = [
    { icon: Users, number: "100+", label: "Clients" },
    { icon: Rocket, number: "250+", label: "Projects" },
    { icon: Star, number: "5+", label: "Years" },
    { icon: TrendingUp, number: "98%", label: "Success" }
  ];

  return (
    <section ref={heroRef} className="relative min-h-screen overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0">
        <motion.div 
          className="absolute inset-0 bg-https://axabiztech.com/assets/img/axa-bg/tech-landscape-1.jpg bg-cover bg-center"
          animate={{
            background: [
              "linear-gradient(135deg, #1E5556 0%, #367589 50%, #1C478B 100%)",
              "linear-gradient(135deg, #367589 0%, #5795A7 50%, #1F7DAD 100%)",
              "linear-gradient(135deg, #1C478B 0%, #1E5556 50%, #367589 100%)",
              "linear-gradient(135deg, #1E5556 0%, #367589 50%, #1C478B 100%)"
            ]
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />
        
        {/* Animated Particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-white/20 rounded-full"
              animate={{
                x: [0, 100, 0],
                y: [0, -100, 0],
                opacity: [0, 1, 0],
                scale: [0, 1, 0]
              }}
              transition={{
                duration: 6 + i * 0.5,
                repeat: Infinity,
                delay: i * 0.3
              }}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`
              }}
            />
          ))}
        </div>

        {/* Interactive Cursor Effect */}
        <motion.div
          className="absolute w-64 h-64 bg-gradient-radial from-white/5 to-transparent rounded-full pointer-events-none"
          animate={{
            x: mousePosition.x - 128,
            y: mousePosition.y - 128,
          }}
          transition={{ type: "spring", damping: 30, stiffness: 200 }}
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
                  initial={{ x: 100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: -100, opacity: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  <motion.h1 
                    variants={itemVariants}
                    className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 leading-tight"
                  >
                    {slides[currentSlide].title}{" "}
                    <motion.span 
                      className={`bg-gradient-to-r ${slides[currentSlide].accent} bg-clip-text text-transparent relative inline-block`}
                      animate={{ 
                        scale: [1, 1.05, 1],
                        filter: ["brightness(1)", "brightness(1.2)", "brightness(1)"]
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      {slides[currentSlide].subtitle}
                      <motion.div
                        className="absolute -top-2 -right-2"
                        variants={floatingVariants}
                        animate="animate"
                      >
                        <Sparkles size={24} className="text-[#89B8CA]" />
                      </motion.div>
                    </motion.span>
                  </motion.h1>
                </motion.div>
              </div>

              <motion.p 
                variants={itemVariants}
                className="text-xl md:text-2xl mb-8 text-[#89B8CA] leading-relaxed max-w-2xl"
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
                      className="flex items-center bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20"
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 1 + index * 0.1 }}
                      whileHover={{ scale: 1.05, y: -2 }}
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
                  className="group relative overflow-hidden bg-gradient-to-r from-white to-[#89B8CA] text-[#1E5556] hover:from-[#89B8CA] hover:to-white px-8 py-4 rounded-2xl transition-all duration-300 font-semibold text-lg inline-flex items-center justify-center shadow-2xl"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="relative z-10 flex items-center">
                    Work With Us
                    <ArrowRight size={22} className="ml-3 group-hover:translate-x-2 transition-transform duration-300" />
                  </span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-[#5795A7] to-[#1F7DAD] opacity-0"
                    whileHover={{ opacity: 0.1 }}
                  />
                </motion.a>

                <motion.button
                  className="group relative bg-transparent border-2 border-white/30 hover:border-white hover:bg-white/5 text-white px-8 py-4 rounded-2xl transition-all duration-300 font-semibold text-lg inline-flex items-center justify-center backdrop-blur-sm"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Play size={20} className="mr-3 group-hover:scale-110 transition-transform duration-300" />
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
                      initial={{ y: 30, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 1.5 + index * 0.1 }}
                    >
                      <div className="flex justify-center mb-2">
                        <div className="bg-white/10 p-2 rounded-lg">
                          <IconComponent size={20} className="text-[#89B8CA]" />
                        </div>
                      </div>
                      <motion.div 
                        className="text-2xl md:text-3xl font-bold mb-1"
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                      >
                        {stat.number}
                      </motion.div>
                      <div className="text-sm text-[#89B8CA]">{stat.label}</div>
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
                  className="absolute -top-8 -right-8 w-16 h-16 bg-gradient-to-r from-[#89B8CA] to-[#5795A7] rounded-full opacity-20 z-0"
                  variants={pulseVariants}
                  animate="animate"
                />
                <motion.div
                  className="absolute -bottom-8 -left-8 w-20 h-20 bg-gradient-to-r from-[#1F7DAD] to-[#367589] rounded-full opacity-30 z-0"
                  variants={pulseVariants}
                  animate="animate"
                  style={{ animationDelay: '1s' }}
                />

                {/* Main Image Container */}
                <motion.div 
                  className="relative bg-white/10 backdrop-blur-lg p-8 rounded-3xl border border-white/20 shadow-2xl overflow-hidden"
                  variants={floatingVariants}
                  animate="animate"
                  whileHover={{ scale: 1.02, rotateY: 5 }}
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  {/* Sliding Images */}
                  <div className="relative h-80 md:h-96 overflow-hidden rounded-2xl">
                    {slides.map((slide, index) => (
                      <motion.img
                        key={index}
                        src={slide.image}
                        alt={`${slide.title} ${slide.subtitle}`}
                        className={`absolute inset-0 w-full h-full object-cover rounded-2xl transition-opacity duration-1000 ${
                          index === currentSlide ? 'opacity-100' : 'opacity-0'
                        }`}
                        initial={{ scale: 1.1 }}
                        animate={{ 
                          scale: index === currentSlide ? 1 : 1.1,
                          filter: index === currentSlide ? "brightness(1)" : "brightness(0.8)"
                        }}
                        transition={{ duration: 1 }}
                      />
                    ))}
                    
                    {/* Image Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1E5556]/30 to-transparent rounded-2xl" />
                  </div>

                  {/* Slide Indicators */}
                  <div className="flex justify-center mt-6 space-x-2">
                    {slides.map((_, index) => (
                      <motion.button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${
                          index === currentSlide 
                            ? 'bg-white scale-125' 
                            : 'bg-white/30 hover:bg-white/50'
                        }`}
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                      />
                    ))}
                  </div>
                </motion.div>

                {/* Decorative Elements */}
                <motion.div
                  className="absolute top-1/2 -right-4 w-8 h-8 bg-gradient-to-r from-[#5795A7] to-[#89B8CA] rounded-lg opacity-60"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                />
                <motion.div
                  className="absolute top-1/4 -left-4 w-6 h-6 bg-gradient-to-r from-[#1F7DAD] to-[#1C478B] rounded-lg opacity-40"
                  animate={{ rotate: -360 }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="flex flex-col items-center text-white/60">
          <span className="text-sm mb-2">Scroll to explore</span>
          <ChevronDown size={24} />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;