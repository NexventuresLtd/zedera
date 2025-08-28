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
import { motion, useInView, useAnimation } from "framer-motion";

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
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: ["easeOut"] },
    },
  };

  const waveVariants = {
    animate: {
      d: [
        "M0,64L48,80C96,96,192,128,288,133.3C384,139,480,117,576,122.7C672,128,768,160,864,165.3C960,171,1056,149,1152,133.3C1248,117,1344,107,1392,101.3L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z",
        "M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,117.3C672,107,768,117,864,128C960,139,1056,149,1152,133.3C1248,117,1344,75,1392,53.3L1440,32L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z",
        "M0,64L48,80C96,96,192,128,288,133.3C384,139,480,117,576,122.7C672,128,768,160,864,165.3C960,171,1056,149,1152,133.3C1248,117,1344,107,1392,101.3L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z",
      ],
      transition: {
        duration: 8,
        repeat: Infinity,
        ease: ["easeInOut"],
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
        className={`fixed bottom-8 right-8 z-50 bg-gradient-to-r from-[#1F7DAD] to-[#1F7DAD] text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 ${
          showScrollTop ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        whileHover={{ scale: 1.1, y: -2 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: showScrollTop ? 1 : 0 }}
      >
        <ArrowUp size={20} />
      </motion.button>

      <footer ref={footerRef} className="relative overflow-hidden">
        {/* Animated Wave Background */}
        <div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
          <svg
            className="relative block w-full h-16"
            viewBox="0 0 1440 96"
            preserveAspectRatio="none"
          >
            <motion.path
              variants={waveVariants}
              animate="animate"
              fill="url(#gradient)"
              fillOpacity="0.8"
              d="M0,64L48,80C96,96,192,128,288,133.3C384,139,480,117,576,122.7C672,128,768,160,864,165.3C960,171,1056,149,1152,133.3C1248,117,1344,107,1392,101.3L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
            />
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#89B8CA" />
                <stop offset="100%" stopColor="#89B8CA" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Main Footer Content */}
        <div className="bg-gradient-to-br from-[#1E5556] via-[#367589] to-[#1C478B] text-white pt-20 pb-8 relative">
          {/* Floating Elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-white/10 rounded-full"
                animate={{
                  y: [0, -20, 0],
                  opacity: [0.1, 0.5, 0.1],
                  scale: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 3 + i,
                  repeat: Infinity,
                  delay: i * 0.5,
                }}
                style={{
                  left: `${10 + i * 15}%`,
                  top: `${20 + i * 10}%`,
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
              className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
            >
              {stats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <motion.div
                    key={stat.label}
                    variants={itemVariants}
                    className="text-center bg-white/5 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 border border-white/10"
                    whileHover={{ scale: 1.05, y: -5 }}
                  >
                    <div className="flex justify-center mb-3">
                      <div className="bg-gradient-to-r from-[#89B8CA] to-[#5795A7] p-3 rounded-full">
                        <IconComponent size={24} className="text-white" />
                      </div>
                    </div>
                    <motion.div
                      className="text-3xl font-bold mb-2 bg-gradient-to-r from-white to-[#89B8CA] bg-clip-text text-transparent"
                      animate={{ scale: [1, 1.05, 1] }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: index * 0.2,
                      }}
                    >
                      {stat.number}
                    </motion.div>
                    <div className="text-sm text-[#89B8CA]">{stat.label}</div>
                  </motion.div>
                );
              })}
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={controls}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12"
            >
              {/* Company Info */}
              <motion.div variants={itemVariants} className="lg:col-span-2">
                <div className="flex items-center mb-6">
                  <div className="relative">
                    <img
                      src="./landscape.png"
                      alt="Zedera Logo"
                      className="object-cover ml-16 w-20 relative z-10"
                    />
                  </div>
                </div>
                <p className="mb-4 text-[#89B8CA] leading-relaxed">
                  World-Class Technology, Homegrown Talent. Transforming ideas
                  into digital reality with innovative solutions.
                </p>
                <p className="text-sm text-[#5795A7] mb-6">
                  Registered as Zedera PLC in Ethiopia.
                </p>

                {/* Newsletter Signup */}
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                  <h4 className="text-lg font-semibold mb-3 flex items-center">
                    <Send size={18} className="mr-2" />
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
                      className="flex-1 px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-[#89B8CA] focus:outline-none focus:border-[#5795A7] transition-colors"
                    />
                    <motion.button
                      type="submit"
                      className="bg-gradient-to-r from-[#1F7DAD] to-[#1C478B] px-4 py-2 rounded-lg hover:from-[#5795A7] hover:to-[#89B8CA] transition-all duration-300"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Send size={16} />
                    </motion.button>
                  </form>
                </div>
              </motion.div>

              {/* Quick Links */}
              <motion.div variants={itemVariants}>
                <h3 className="text-xl font-bold mb-6 flex items-center">
                  <ChevronRight size={20} className="mr-2" />
                  Quick Links
                </h3>
                <ul className="space-y-3">
                  {["Home", "About Us", "Services", "Portfolio", "Contact"].map(
                    (link, index) => (
                      <motion.li
                        key={link}
                        initial={{ x: -10, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <a
                          href={`/${link.toLowerCase().replace(" ", "")}`}
                          className="flex items-center text-[#89B8CA] hover:text-white transition-all duration-300 group"
                        >
                          <Star
                            size={12}
                            className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity"
                          />
                          <span className="group-hover:translate-x-2 transition-transform duration-300">
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
                <h3 className="text-xl font-bold mb-6 flex items-center">
                  <Zap size={20} className="mr-2" />
                  Services
                </h3>
                <ul className="space-y-3">
                  {[
                    "Web & App Development",
                    "AI & Automation Tools",
                    "Digital Marketing",
                    "UI/UX Design",
                    "Consulting",
                  ].map((service, index) => (
                    <motion.li
                      key={service}
                      initial={{ x: -10, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <a
                        href="/services"
                        className="flex items-center text-[#89B8CA] hover:text-white transition-all duration-300 group"
                      >
                        <Shield
                          size={12}
                          className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity"
                        />
                        <span className="group-hover:translate-x-2 transition-transform duration-300 text-sm">
                          {service}
                        </span>
                      </a>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              {/* Contact Info */}
              <motion.div variants={itemVariants}>
                <h3 className="text-xl font-bold mb-6 flex items-center">
                  <Phone size={20} className="mr-2" />
                  Contact Us
                </h3>
                <div className="space-y-4">
                  <motion.div
                    className="flex items-start group cursor-pointer"
                    whileHover={{ x: 5 }}
                  >
                    <div className="bg-gradient-to-r from-[#89B8CA] to-[#5795A7] p-2 rounded-lg mr-3 group-hover:scale-110 transition-transform duration-300">
                      <MapPin size={16} className="text-white" />
                    </div>
                    <span className="text-[#89B8CA] group-hover:text-white transition-colors">
                      Addis Ababa, Ethiopia
                    </span>
                  </motion.div>

                  <motion.div
                    className="flex items-center group cursor-pointer"
                    whileHover={{ x: 5 }}
                  >
                    <div className="bg-gradient-to-r from-[#89B8CA] to-[#5795A7] p-2 rounded-lg mr-3 group-hover:scale-110 transition-transform duration-300">
                      <Phone size={16} className="text-white" />
                    </div>
                    <span className="text-[#89B8CA] group-hover:text-white transition-colors">
                      +251 XXX XXX XXX
                    </span>
                  </motion.div>

                  <motion.div
                    className="flex items-center group cursor-pointer"
                    whileHover={{ x: 5 }}
                  >
                    <div className="bg-gradient-to-r from-[#89B8CA] to-[#5795A7] p-2 rounded-lg mr-3 group-hover:scale-110 transition-transform duration-300">
                      <Mail size={16} className="text-white" />
                    </div>
                    <span className="text-[#89B8CA] group-hover:text-white transition-colors">
                      info@zedera.com
                    </span>
                  </motion.div>
                </div>

                {/* Social Links */}
                <div className="mt-8">
                  <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
                  <div className="flex space-x-3">
                    {[
                      { Icon: Facebook, color: "#1877F2", name: "Facebook" },
                      { Icon: Twitter, color: "#1DA1F2", name: "Twitter" },
                      { Icon: Linkedin, color: "#0A66C2", name: "LinkedIn" },
                      { Icon: Instagram, color: "#E4405F", name: "Instagram" },
                    ].map(({ Icon, color, name }) => (
                      <motion.a
                        key={name}
                        href="#"
                        className="bg-white/10 p-3 rounded-xl hover:bg-white/20 transition-all duration-300 group border border-white/10"
                        whileHover={{ scale: 1.1, y: -2 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Icon
                          size={20}
                          className="text-[#89B8CA] group-hover:text-white transition-colors"
                          style={{
                            filter: `drop-shadow(0 0 6px ${color}40)`,
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
              className="border-t border-white/10 pt-8 text-center"
            >
              <div className="flex flex-col md:flex-row justify-between items-center">
                <motion.p
                  className="text-sm text-[#89B8CA] mb-4 md:mb-0"
                  animate={{ opacity: [0.7, 1, 0.7] }}
                  transition={{ duration: 2, repeat: Infinity }}
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
