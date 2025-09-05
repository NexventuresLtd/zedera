// components/Header.tsx
import React, { useState, useEffect } from 'react';
import { Menu, X, Globe, ChevronDown, ArrowRight} from 'lucide-react';
import { motion, AnimatePresence, type Variants } from 'framer-motion';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [language, setLanguage] = useState('EN');
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLanguage = () => {
    setLanguage(language === 'EN' ? 'AM' : 'EN');
  };

  const navItems = [
    { 
      name: 'Home', 
      path: '/', 
      hasDropdown: false 
    },
    { 
      name: 'About Us', 
      path: '/about', 
    hasDropdown: false 
    },
    { 
      name: 'Services', 
      path: '/services', 
    hasDropdown: false 
    },
    { 
      name: 'Portfolio', 
      path: '/portfolio', 
      hasDropdown: false 
    },
    { 
      name: 'Contact', 
      path: '/contact', 
      hasDropdown: false 
    },
  ];

  const headerVariants = {
    initial: { y: -100 },
    animate: { 
      y: 0,
      transition: { 
        type: "spring" as const, 
        stiffness: 100, 
        damping: 20 
      }
    }
  };

  const logoVariants = {
    initial: { opacity: 0, scale: 0.8 },
    animate: { 
      opacity: 1, 
      scale: 1,
      transition: { delay: 0.2, duration: 0.5 }
    },
    hover: { 
      scale: 1.05,
      transition: { duration: 0.2 }
    }
  };

  const navItemVariants = {
    initial: { opacity: 0, y: -20 },
    animate: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: 0.3 + (i * 0.1), duration: 0.4 }
    }),
    hover: { 
      scale: 1.05,
      transition: { duration: 0.2 }
    }
  };

  const mobileMenuVariants: Variants = {
    closed: {
      opacity: 0,
      height: 0,
      transition: { duration: 0.3, ease: "easeInOut" }
    },
    open: {
      opacity: 1,
      height: "auto",
      transition: { duration: 0.3, ease: "easeInOut" }
    }
  };

  const mobileItemVariants = {
    closed: { x: -20, opacity: 0 },
    open: (i: number) => ({
      x: 0,
      opacity: 1,
      transition: { delay: i * 0.1, duration: 0.3 }
    })
  };

  const dropdownVariants = {
    hidden: { 
      opacity: 0, 
      y: -10, 
      scale: 0.95,
      transition: { duration: 0.2 }
    },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { duration: 0.2 }
    }
  };

  const backgroundGradient = scrolled 
    ? "bg-gradient-to-r from-[#367589]/90 via-slate-10 to-[#367589]/40 backdrop-blur-md"
    : "bg-gradient-to-r from-[#367589] via-slate-10 to-[#367589]/40 backdrop-blur-xl ";

  return (
    <motion.header
      variants={headerVariants}
      initial="initial"
      animate="animate"
      className={`${backgroundGradient} shadow-lg fixed w-full z-50 transition-all duration-500 ${
        scrolled ? 'backdrop-blur-md bg-opacity-95' : ''
      }`}
      style={{
        boxShadow: scrolled 
          ? '0 8px 32px rgba(30, 81, 87, 0.1)' 
          : '0 4px 20px rgba(30, 81, 87, 0.08)'
      }}
    >
      {/* Animated top border */}
      <motion.div 
        className="h-1 bg-gradient-to-r from-[#1E5556]to-[#1C478B]"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      />
      
      <div className="container mx-auto ">
        <div className="flex justify-between items-center">
          <motion.div 
            variants={logoVariants}
            initial="initial"
            animate="animate"
            whileHover="hover"
            className="flex items-center cursor-pointer"
          >
            <div className="relative">
              <img src="./landscape.png" alt="Zedera Logo" className="scale-150 object-cover ml-4 w-18 relative z-10 text-blue" />
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-8">
            {navItems.map((item, index) => {
              return (
                <div key={item.name} className="relative">
                  <motion.div
                    variants={navItemVariants}
                    initial="initial"
                    animate="animate"
                    whileHover="hover"
                    custom={index}
                    onHoverStart={() => item.hasDropdown && setActiveDropdown(item.name)}
                    onHoverEnd={() => setActiveDropdown(null)}
                    className="relative"
                  >
                    <a
                      href={item.path}
                      className={`flex items-center text-[#fdfeff] hover:text-[#b1b3b8] transition-all duration-300 font-medium group px-3 py-2 rounded-lg hover:bg-gradient-to-r hover:from-[#89B8CA]/10 hover:to-[#1F7DAD]/10`}
                    >
                      <span>{item.name}</span>
                      {item.hasDropdown && (
                        <ChevronDown 
                          size={14} 
                          className={`ml-1 transition-transform duration-300 ${
                            activeDropdown === item.name ? 'rotate-180' : ''
                          }`}
                        />
                      )}
                    </a>

                    {/* Dropdown Menu */}
                    <AnimatePresence>
                      {item.hasDropdown && activeDropdown === item.name && (
                        <motion.div
                          variants={dropdownVariants}
                          initial="hidden"
                          animate="visible"
                          exit="hidden"
                          className="absolute top-full left-0 mt-2 w-48 bg-white rounded-xl shadow-xl border border-[#89B8CA]/20 overflow-hidden"
                        >
                          <a
                            href="/services"
                            className="block px-4 py-2 text-[#bcccd3] hover:bg-[#E8F4F8] hover:text-[#bccde2] transition-colors duration-200"
                          >
                            Our Services
                          </a>
                          <a
                            href="/portfolio"
                            className="block px-4 py-2 text-[#b6d9e7] hover:bg-[#E8F4F8] hover:text-[#d5e2f1] transition-colors duration-200"
                          >
                            Portfolio
                          </a>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                </div>
              );
            })}
          </nav>

          <div className="flex items-center space-x-4">
            {/* Language Toggle */}
            <motion.button
              onClick={toggleLanguage}
              className="hidden md:flex items-center text-[#dde6e9] hover:text-[#cdd6e4] transition-all duration-300 px-3 py-2 rounded-lg hover:bg-gradient-to-r hover:from-[#89B8CA]/10 hover:to-[#1F7DAD]/10"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Globe size={18} className="mr-2" />
              <span className="font-medium">{language}</span>
            </motion.button>

            {/* CTA Button */}
            <motion.a
              href="/contact"
              className="hidden md:inline-block relative overflow-hidden bg-gradient-to-r from-[#1F7DAD] to-[#1C478B] hover:from-[#1E5556] hover:to-[#367589] text-white px-6 py-2.5 rounded-xl transition-all duration-300 font-medium"
              whileHover={{ 
                scale: 1,
                boxShadow: "0 10px 30px rgba(28, 71, 139, 0.3)"
              }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="relative z-10 flex items-center">
                Get a Quote
                <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-[#5795A7] to-[#89B8CA] opacity-0"
                whileHover={{ opacity: 0.2 }}
                transition={{ duration: 0.3 }}
              />
            </motion.a>

            {/* Mobile Menu Button */}
            <motion.button
              className="lg:hidden p-2 rounded-lg text-[#dce6e9] hover:text-[#d0d6df] hover:bg-gradient-to-r hover:from-[#89B8CA]/10 hover:to-[#1F7DAD]/10 transition-all duration-300"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <AnimatePresence mode="wait">
                {isMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X size={24} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu size={24} />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              variants={mobileMenuVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="lg:hidden mt-4 pb-4 overflow-hidden"
            >
              <div className="bg-gradient-to-br from-[#89B8CA]/5 to-[#1F7DAD]/5 rounded-xl p-2 backdrop-blur-sm">
                <div className="flex flex-col space-y-1">
                  {navItems.map((item, index) => {
                    return (
                      <motion.a
                        key={item.name}
                        href={item.path}
                        variants={mobileItemVariants}
                        initial="closed"
                        animate="open"
                        custom={index}
                        className="flex items-center text-[#eef7fa] hover:text-[#d9e3f5] transition-all duration-300 py-3 px-4 rounded-lg hover:bg-gradient-to-r hover:from-[#89B8CA]/20 hover:to-[#1F7DAD]/20"
                        onClick={() => setIsMenuOpen(false)}
                        whileHover={{ x: 10 }}
                      >
                        <span className="font-medium">{item.name}</span>
                      </motion.a>
                    );
                  })}
                  
                  <motion.div 
                    className="pt-4 mt-4 border-t border-[#89B8CA]/20 flex justify-between items-center"
                    variants={mobileItemVariants}
                    initial="closed"
                    animate="open"
                    custom={navItems.length}
                  >
                    <motion.button
                      onClick={toggleLanguage}
                      className="flex items-center text-[#f7fdff] hover:text-[#ecf4ff] transition-all duration-300 px-3 py-2 rounded-lg hover:bg-gradient-to-r hover:from-[#89B8CA]/10 hover:to-[#1F7DAD]/10"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Globe size={18} className="mr-2" />
                      <span className="font-medium">{language}</span>
                    </motion.button>
                    
                    <motion.a
                      href="/contact"
                      className="bg-gradient-to-r from-[#1F7DAD] to-[#1C478B] hover:from-[#1E5556] hover:to-[#367589] text-white px-6 py-2.5 rounded-xl transition-all duration-300 font-medium shadow-lg"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Get a Quote
                    </motion.a>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Header;