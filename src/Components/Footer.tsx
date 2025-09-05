// components/Footer.tsx
import React, { useState, useEffect, useRef } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  ArrowUp,
  Globe,
  Award,
  Users,
  Zap,
  Shield,
  Target,
  ChevronRight,
  Send,
  Star,
} from "lucide-react";
import { motion, useInView, useAnimation, type Variants } from "framer-motion";

const Footer: React.FC = () => {
  const [email, setEmail] = useState("");
  const [showScrollTop, setShowScrollTop] = useState(false);

  const footerRef = useRef<HTMLElement | null>(null);
  const isInView = useInView(footerRef, { once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNewsletterSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Newsletter signup:", email);
    setEmail("");
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.15,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const waveVariants: Variants = {
    animate: {
      d: [
        "M0,64L48,80C96,96,192,128,288,133.3C384,139,480,117,576,122.7C672,128,768,160,864,165.3C960,171,1056,149,1152,133.3C1248,117,1344,107,1392,101.3L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z",
        "M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,117.3C672,107,768,117,864,128C960,139,1056,149,1152,133.3C1248,117,1344,75,1392,53.3L1440,32L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z",
        "M0,64L48,80C96,96,192,128,288,133.3C384,139,480,117,576,122.7C672,128,768,160,864,165.3C960,171,1056,149,1152,133.3C1248,117,1344,107,1392,101.3L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z",
      ],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const stats = [
    { icon: Users, number: "100+", label: "Happy Clients" },
    { icon: Target, number: "250+", label: "Projects Completed" },
    { icon: Award, number: "5+", label: "Years Experience" },
    { icon: Globe, number: "15+", label: "Countries Served" },
  ];

  return (
    <>
      {/* Scroll to top button */}
      <motion.button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 z-50 bg-gradient-to-r from-[#0D3A6E] to-[#0A4B5C] text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 ${
          showScrollTop ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        whileHover={{ scale: 1.05, y: -2 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: showScrollTop ? 1 : 0 }}
      >
        <ArrowUp size={18} />
      </motion.button>

      <footer ref={footerRef} className="relative overflow-hidden">
        {/* Animated Wave Background */}
        <div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
          <svg
            className="relative block w-full h-14"
            viewBox="0 0 1440 96"
            preserveAspectRatio="none"
          >
            <motion.path
              variants={waveVariants}
              animate="animate"
              fill="url(#gradient)"
              fillOpacity="0.9"
              d="M0,64L48,80C96,96,192,128,288,133.3C384,139,480,117,576,122.7C672,128,768,160,864,165.3C960,171,1056,149,1152,133.3C1248,117,1344,107,1392,101.3L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
            />
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#0A4B5C" />
                <stop offset="100%" stopColor="#0D3A6E" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Main Footer Content */}
        <div className="bg-gradient-to-br from-[#0A2C5C] via-[#0D3A6E] to-[#0A4B5C] text-white pt-16 pb-8 relative">
          {/* Floating Elements - Reduced for better performance */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(4)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1.5 h-1.5 bg-white/20 rounded-full"
                animate={{
                  y: [0, -15, 0],
                  opacity: [0.2, 0.6, 0.2],
                  scale: [0.6, 0.9, 0.6],
                }}
                transition={{
                  duration: 2.5 + i,
                  repeat: Infinity,
                  delay: i * 0.3,
                }}
                style={{
                  left: `${10 + i * 20}%`,
                  top: `${20 + i * 12}%`,
                }}
              />
            ))}
          </div>

          <div className="container mx-auto px-4 relative z-10">
            {/* Stats Section */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={controls}
              className="grid grid-cols-2 lg:grid-cols-4 gap-5 mb-12"
            >
              {stats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <motion.div
                    key={stat.label}
                    variants={itemVariants}
                    className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-5 hover:bg-white/15 transition-all duration-300 border border-white/20"
                    whileHover={{ scale: 1.03, y: -3 }}
                  >
                    <div className="flex justify-center mb-3">
                      <div className="bg-gradient-to-r from-[#0A4B5C] to-[#0D6982] p-2 rounded-full">
                        <IconComponent size={20} className="text-white" />
                      </div>
                    </div>
                    <motion.div
                      className="text-2xl font-bold mb-2 text-white"
                      animate={{ scale: [1, 1.03, 1] }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        delay: index * 0.15,
                      }}
                    >
                      {stat.number}
                    </motion.div>
                    <div className="text-sm text-white/90">{stat.label}</div>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* Main grid container - FIXED: Added motion.div wrapper */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={controls}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-10"
            >
              {/* Company Info */}
              <motion.div variants={itemVariants} className="lg:col-span-2">
                <div className="flex items-center mb-5">
                  <div className="relative">
                    <img
                      src="./landscape.png"
                      alt="Zedera Logo"
                      className="object-cover ml-16 w-16 relative z-10 scale-200"
                    />
                  </div>
                </div>
                <p className="mb-4 text-white/90 leading-relaxed">
                  World-Class Technology, Homegrown Talent. Transforming ideas
                  into digital reality with innovative solutions.
                </p>
                <p className="text-sm text-white/80 mb-5">
                  Registered as Zedera PLC in Ethiopia.
                </p>

                {/* Newsletter Signup */}
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                  <h4 className="text-lg font-semibold mb-3 flex items-center text-white">
                    <Send size={16} className="mr-2" />
                    Stay Updated
                  </h4>
                  <form
                    onSubmit={handleNewsletterSubmit}
                    className="flex gap-2"
                  >
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      className="flex-1 px-3 py-2 bg-white/15 border border-white/30 rounded-lg text-white placeholder-white/70 focus:outline-none focus:border-[#0D6982] transition-colors"
                    />
                    <motion.button
                      type="submit"
                      className="bg-gradient-to-r from-[#0D3A6E] to-[#0A4B5C] px-3 py-2 rounded-lg transition-all duration-300"
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Send size={14} />
                    </motion.button>
                  </form>
                </div>
              </motion.div>

              {/* Quick Links */}
              <motion.div variants={itemVariants}>
                <h3 className="text-lg font-bold mb-5 flex items-center text-white">
                  <ChevronRight size={16} className="mr-2" />
                  Quick Links
                </h3>
                <ul className="space-y-2">
                  {["Home", "About Us", "Services", "Portfolio", "Contact"].map(
                    (link, index) => (
                      <motion.li
                        key={link}
                        initial={{ x: -8, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: index * 0.08 }}
                      >
                        <a
                          href={`/${link.toLowerCase().replace(" ", "")}`}
                          className="flex items-center text-white/90 hover:text-white transition-all duration-300 group"
                        >
                          <Star
                            size={10}
                            className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity"
                          />
                          <span className="group-hover:translate-x-1 transition-transform duration-300 text-sm">
                            {link}
                          </span>
                        </a>
                      </motion.li>
                    )
                  )}
                </ul>
              </motion.div>

              {/* Services */}
              <motion.div variants={itemVariants}>
                <h3 className="text-lg font-bold mb-5 flex items-center text-white">
                  <Zap size={16} className="mr-2" />
                  Services
                </h3>
                <ul className="space-y-2">
                  {[
                    "Web & App Development",
                    "AI & Automation Tools",
                    "Digital Marketing",
                    "UI/UX Design",
                    "Consulting",
                  ].map((service, index) => (
                    <motion.li
                      key={service}
                      initial={{ x: -8, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: index * 0.08 }}
                    >
                      <a
                        href="/services"
                        className="flex items-center text-white/90 hover:text-white transition-all duration-300 group"
                      >
                        <Shield
                          size={10}
                          className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity"
                        />
                        <span className="group-hover:translate-x-1 transition-transform duration-300 text-xs">
                          {service}
                        </span>
                      </a>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              {/* Contact Info - FIXED: Corrected structure */}
              <motion.div variants={itemVariants}>
                <h3 className="text-lg font-bold mb-5 flex items-center text-white">
                  <Phone size={16} className="mr-2" />
                  Contact Us
                </h3>
                <div className="space-y-3">
                  <motion.div
                    className="flex items-start group cursor-pointer"
                    whileHover={{ x: 3 }}
                  >
                    <div className="bg-gradient-to-r from-[#0A4B5C] to-[#0D6982] p-1.5 rounded-lg mr-3 group-hover:scale-105 transition-transform duration-300">
                      <MapPin size={14} className="text-white" />
                    </div>
                    <span className="text-white/90 group-hover:text-white transition-colors text-sm">
                      Addis Ababa, Ethiopia
                    </span>
                  </motion.div>

                  <motion.div
                    className="flex items-center group cursor-pointer"
                    whileHover={{ x: 3 }}
                  >
                    <div className="bg-gradient-to-r from-[#0A4B5C] to-[#0D6982] p-1.5 rounded-lg mr-3 group-hover:scale-105 transition-transform duration-300">
                      <Phone size={14} className="text-white" />
                    </div>
                    <span className="text-white/90 group-hover:text-white transition-colors text-sm">
                      +251 98 495 1144
                    </span>
                  </motion.div>

                  <motion.div
                    className="flex items-center group cursor-pointer"
                    whileHover={{ x: 3 }}
                  >
                    <div className="bg-gradient-to-r from-[#0A4B5C] to-[#0D6982] p-1.5 rounded-lg mr-3 group-hover:scale-105 transition-transform duration-300">
                      <Mail size={14} className="text-white" />
                    </div>
                    <span className="text-white/90 group-hover:text-white transition-colors text-sm">
                      info@zederaet.com
                    </span>
                  </motion.div>
                </div>

                {/* Social Links */}
                <div className="mt-6">
                  <h4 className="text-base font-semibold mb-3 text-white">Follow Us</h4>
                  <div className="flex space-x-2">
                    {[
                      { Icon: Facebook, color: "#1877F2", name: "Facebook" },
                      { Icon: Twitter, color: "#1DA1F2", name: "Twitter" },
                      { Icon: Linkedin, color: "#0A66C2", name: "LinkedIn" },
                      { Icon: Instagram, color: "#E4405F", name: "Instagram" },
                    ].map(({ Icon, color, name }) => (
                      <motion.a
                        key={name}
                        href="#"
                        className="bg-white/15 p-2 rounded-lg hover:bg-white/25 transition-all duration-300 group border border-white/20"
                        whileHover={{ scale: 1.05, y: -1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Icon
                          size={16}
                          className="text-white/90 group-hover:text-white transition-colors"
                          style={{
                            filter: `drop-shadow(0 0 4px ${color}40)`,
                          }}
                        />
                      </motion.a>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Bottom Section */}
            <motion.div
              variants={itemVariants}
              className="border-t border-white/20 pt-6 text-center"
            >
              <div className="flex flex-col md:flex-row justify-between items-center">
                <motion.p
                  className="text-sm text-white/90 mb-4 md:mb-0"
                  animate={{ opacity: [0.8, 1, 0.8] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  &copy; {new Date().getFullYear()} Zedera. All rights reserved.
                </motion.p>
              </div>
            </motion.div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;