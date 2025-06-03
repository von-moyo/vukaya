import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { LogoIcon } from '../../assets/images';
import { Link } from 'react-router-dom';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    {
      name: 'Our Services',
      hasDropdown: true,
      sections: [
        {
          title: 'Advisory Services',
          items: [
            'Virtual CISO Services',
            'Security Risk Assessment Services',
            'Third-Party Risk Management',
            'Incident Response Services',
            'Advanced Penetration Testing & Red Team Services',
            'Managed Security Awareness Training Program',
            'Expertise on Demand'
          ]
        },
        {
          title: 'Threat Defense',
          items: [
            'Managed XDR',
            'Managed Endpoint Detection & Response',
            'Managed SIEM',
            'Emergency Response',
            'Managed Connected Medical Device Security',
            'Vulnerability Threat Management',
            'Attack Surface Monitoring',
            'Managed Phishing Services'
          ]
        }
      ]
    },
    {
      name: 'Who We Serve',
      hasDropdown: true,
      items: [
        'Healthcare Organizations',
        'Financial Services',
        'Manufacturing',
        'Technology Companies',
        'Government Agencies'
      ]
    },
    {
      name: 'Why Fortified',
      hasDropdown: true,
      items: [
        'Our Approach',
        'Success Stories',
        'Industry Expertise',
        'Compliance Support'
      ]
    },
    {
      name: 'Resources',
      hasDropdown: true,
      items: [
        'Blog',
        'White Papers',
        'Case Studies',
        'Webinars',
        'Industry Reports'
      ]
    },
    {
      name: 'Events',
      hasDropdown: true,
      items: [
        'Upcoming Events',
        'Past Events',
        'Webinar Series',
        'Conference Speaking'
      ]
    },
    {
      name: 'Who We Are',
      hasDropdown: true,
      items: [
        'About Us',
        'Leadership Team',
        'Careers',
        'Company Culture'
      ]
    },
    { name: 'Contact Us', hasDropdown: false }
  ];

  const handleMouseEnter = (index: any) => {
    setActiveDropdown(index);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  // Animation variants
  const dropdownVariants = {
    hidden: {
      opacity: 0,
      y: -10,
      scale: 0.95,
      transition: {
        duration: 0.2,
        ease: "easeOut"
      }
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  const mobileMenuVariants = {
    hidden: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.2,
        ease: "easeInOut"
      }
    },
    visible: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i: any) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.05,
        duration: 0.3,
        ease: "easeOut"
      }
    })
  };

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 h-[91px]`}
      style={{
        background: 'linear-gradient(to right, rgba(255, 255, 255, 0.98) 0%, rgba(255, 255, 255, 0.98) 13%, rgba(45, 163, 143, 0.98) 34%, rgba(14, 132, 116, 0.98) 100%)'
      }}
      animate={{
        boxShadow: isScrolled ? '0 10px 25px rgba(0, 0, 0, 0.1)' : '0 0px 0px rgba(0, 0, 0, 0)',
        backdropFilter: isScrolled ? 'blur(10px)' : 'blur(0px)'
      }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      <div className="mx-[35px]">
        <div className="flex items-center justify-between h-20">
          <Link to='/'>
            <motion.div
              className="flex items-center space-x-3 cursor-pointer"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <img src={LogoIcon} alt='logo icon' className='h-12 sm:h-20' />
            </motion.div>
          </Link>

          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
              >
                <motion.button
                  className="flex items-center space-x-1 text-white text-[17px] whitespace-nowrap line-clamp-1 transition-colors duration-200 py-2 cursor-pointer"
                  whileHover={{
                    fontWeight: 600,
                    scale: 1.05
                  }}
                  transition={{ duration: 0.2 }}
                >
                  <span>{item.name}</span>
                </motion.button>

                {/* Dropdown Menu */}
                <AnimatePresence>
                  {item.hasDropdown && activeDropdown === index && (
                    <div className='relative'>
                      {/* Arrow */}
                      <motion.div
                        variants={dropdownVariants}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        className="absolute top-[22px] left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white border-l border-t border-gray-100 rotate-45 z-[999999]"
                      ></motion.div>

                      {/* Dropdown Container */}
                      <motion.div
                        className={`absolute top-[20px] mt-2 bg-white rounded-lg shadow-xl border border-gray-100 overflow-hidden z-50 ${item.sections
                            ? 'left-1/2 transform -translate-x-1/2 w-max min-w-[32rem]'
                            : 'left-1/2 transform -translate-x-1/2 w-max min-w-80'
                          }`}
                        variants={dropdownVariants}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                      >
                        <div className="py-4 relative z-20 ">
                          {item.sections ? (
                            // Multi-section dropdown (like Our Services)
                            <div className="flex">
                              {item.sections.map((section, sectionIndex) => (
                                <motion.div
                                  key={section.title}
                                  className="px-6 py-2 min-w-64"
                                  initial={{ opacity: 0, x: -20 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{
                                    delay: sectionIndex * 0.1,
                                    duration: 0.3,
                                    ease: "easeOut"
                                  }}
                                >
                                  <h3 className="text-lg font-semibold text-gray-800 mb-4 pb-2 border-b border-gray-100">
                                    {section.title}
                                  </h3>
                                  <ul className="space-y-1">
                                    {section.items.map((subItem, subIndex) => (
                                      <motion.li
                                        key={subIndex}
                                        variants={itemVariants}
                                        initial="hidden"
                                        animate="visible"
                                        custom={subIndex}
                                      >
                                        <motion.a
                                          href="#"
                                          className="block text-gray-600 hover:text-teal-600 hover:bg-teal-50 px-3 py-1 rounded-md transition-all duration-200 text-sm"
                                          whileHover={{
                                            x: 5,
                                            backgroundColor: "#f0fdfa",
                                            color: "#0d9488"
                                          }}
                                          transition={{ duration: 0.2 }}
                                        >
                                          {subItem}
                                        </motion.a>
                                      </motion.li>
                                    ))}
                                  </ul>
                                </motion.div>
                              ))}
                            </div>
                          ) : (
                            // Single section dropdown
                            <div className="px-4 py-4">
                              <ul className="grid grid-cols-2">
                                {item.items?.map((subItem, subIndex) => (
                                  <motion.li
                                    key={subIndex}
                                    variants={itemVariants}
                                    initial="hidden"
                                    animate="visible"
                                    custom={subIndex}
                                  >
                                    <motion.a
                                      href="#"
                                      className="block text-gray-600 hover:text-teal-600 hover:bg-teal-50 px-4 py-1 rounded-md transition-all duration-200 text-sm"
                                      whileHover={{
                                        x: 5,
                                        backgroundColor: "#f0fdfa",
                                        color: "#0d9488"
                                      }}
                                      transition={{ duration: 0.2 }}
                                    >
                                      {subItem}
                                    </motion.a>
                                  </motion.li>
                                ))}
                              </ul>
                            </div>
                          )}
                        </div>
                      </motion.div>
                    </div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <motion.button
            className="lg:hidden p-2 rounded-md hover:bg-gray-100 transition-colors duration-200"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
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
                  <X className="w-6 h-6" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="w-6 h-6" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="lg:hidden bg-white border-t border-gray-200 shadow-lg overflow-hidden"
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            <div className="px-4 py-4 space-y-4">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    delay: index * 0.1,
                    duration: 0.3,
                    ease: "easeOut"
                  }}
                >
                  <motion.button
                    className="w-full text-left text-gray-700 hover:text-teal-600 py-2 font-medium transition-colors duration-200"
                    whileHover={{ x: 5, color: "#0d9488" }}
                    transition={{ duration: 0.2 }}
                  >
                    {item.name}
                  </motion.button>
                  {item.hasDropdown && (
                    <motion.div
                      className="ml-4 mt-2 space-y-2"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      transition={{ delay: 0.2, duration: 0.3 }}
                    >
                      {item.sections ? (
                        item.sections.map((section, sectionIndex) => (
                          <motion.div
                            key={section.title}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{
                              delay: 0.3 + sectionIndex * 0.1,
                              duration: 0.3
                            }}
                          >
                            <h4 className="font-medium text-gray-800 mb-2">{section.title}</h4>
                            {section.items.map((subItem, subIndex) => (
                              <motion.a
                                key={subIndex}
                                href="#"
                                className="block text-sm text-gray-600 hover:text-teal-600 py-1 ml-2 transition-colors duration-200"
                                whileHover={{ x: 3, color: "#0d9488" }}
                                transition={{ duration: 0.2 }}
                              >
                                {subItem}
                              </motion.a>
                            ))}
                          </motion.div>
                        ))
                      ) : (
                        item.items?.map((subItem, subIndex) => (
                          <motion.a
                            key={subIndex}
                            href="#"
                            className="block text-sm text-gray-600 hover:text-teal-600 py-1 ml-2 transition-colors duration-200"
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{
                              delay: 0.3 + subIndex * 0.05,
                              duration: 0.3
                            }}
                            whileHover={{ x: 3, color: "#0d9488" }}
                          >
                            {subItem}
                          </motion.a>
                        ))
                      )}
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};