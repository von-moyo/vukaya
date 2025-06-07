import React, { useState, useEffect } from 'react';
import { Menu, Search, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { LogoIcon } from '../../assets/images';
import { Link } from 'react-router-dom';
import { useMobile } from '../../hooks/useMobile';

interface MenuItem {
  id: string;
  text: string;
  href: string;
  icon: string;
  bgGradient: string;
}

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [openDropdowns, setOpenDropdowns] = useState<any>({});
  const { isMobile } = useMobile({ size: 640 });
  const [expandedItem, setExpandedItem] = useState<string | null>(null);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDropdown = (index: any) => {
    setOpenDropdowns((prev: any) => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const toSlug = (text: string) => {
    return text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
  };

  const navItems = [
    {
      name: 'Our Services',
      href: '/our-services',
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
      href: '/who-we-serve',
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
      name: 'Why Qorwyn',
      href: '/why-qorwyn',
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
      href: '/resources',
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
      href: '/events',
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
      href: '/who-we-are',
      hasDropdown: true,
      items: [
        'About Us',
        'Leadership Team',
        'Careers',
        'Company Culture'
      ]
    },
    { name: 'Contact Us', href: '/contact-us', hasDropdown: false }
  ];

  const menuItems: MenuItem[] = [
    {
      id: 'qorwyn-command',
      text: 'Qorwyn Central Command',
      href: 'https://platform.fortified.io/login',
      icon: '→',
      bgGradient: 'linear-gradient(to right, #03223d 0%, #054479 100%)'
    },
    {
      id: 'security-incident',
      text: 'Security Incident',
      href: 'https://fortifiedhealthsecurity.com/security-incident/',
      icon: '⚠',
      bgGradient: 'linear-gradient(to right, #923216 0%, #be4623 100%)'
    }
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
      className={`fixed top-0 left-0 right-0 z-50 h-[91px] ${isMobile && isMenuOpen ? 'bg-[#2EA38F]' : ''}`}
      style={{
        background: isMenuOpen
          ? undefined
          : isMobile ? 'linear-gradient(to right, rgba(255, 255, 255, 0.98) 0%, rgba(255, 255, 255, 0.98) 34%, rgba(45, 163, 143, 0.98) 64%, rgba(14, 132, 116, 0.98) 100%)' :
            'linear-gradient(to right, rgba(255, 255, 255, 0.98) 0%, rgba(255, 255, 255, 0.98) 13%, rgba(45, 163, 143, 0.98) 34%, rgba(14, 132, 116, 0.98) 100%)'
      }}
      animate={{
        boxShadow: isScrolled ? '0 10px 25px rgba(0, 0, 0, 0.1)' : '0 0px 0px rgba(0, 0, 0, 0)',
        backdropFilter: isScrolled ? 'blur(10px)' : 'blur(0px)'
      }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      <div className="flex items-center justify-between h-20">
        {!isMenuOpen && <Link to='/'>
          <motion.div
            className="flex items-center space-x-3 cursor-pointer"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <img src={LogoIcon} alt='logo icon' className='h-12 sm:h-20 ml-5' />
          </motion.div>
        </Link>}

        <div className={`flex items-center gap-8 ${isMenuOpen ? 'w-full' : 'w-[80%]'} lg:justify-between justify-end`}>
          <nav className="hidden lg:flex items-center justify-between w-full mr-[4%]">
            {navItems.map((item, index) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
              >
                <Link to={item.href}>
                  <motion.button
                    className="flex items-center text-white xl:text-[19px] lg:text-base transition-colors duration-200 py-2 cursor-pointer"
                    whileHover={{
                      fontWeight: 600,
                      scale: 1.05
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    <span>{item.name}</span>
                  </motion.button>
                </Link>

                {/* Dropdown Menu */}
                <AnimatePresence>
                  {item.hasDropdown && activeDropdown === index && (
                    <div className='relative'>
                      <motion.div
                        variants={dropdownVariants}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        className="absolute top-[22px] left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white border-l border-t border-gray-100 rotate-45 z-[999999]"
                      ></motion.div>

                      <motion.div
                        className={`absolute top-[20px] mt-2 bg-white rounded-lg shadow-xl border border-gray-100 overflow-hidden z-50 ${item.sections
                          ? 'left-1/2 transform -translate-x-1/2 w-max min-w-[22rem] max-w-[600px]'
                          : 'left-1/2 transform -translate-x-1/2 w-max min-w-80'
                          }`}
                        variants={dropdownVariants}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                      >
                        <div className="py-4 relative z-20 ">
                          {item.sections ? (
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
                                  <a href={`/our-services/?tab=${toSlug(section.title)}`} className="text-lg font-bold text-gray-800 mb-2 pb-2 border-b border-gray-100">
                                    {section.title}
                                  </a>
                                  <ul className="space-y-1">
                                    {section.items.map((subItem, subIndex) => (
                                      <motion.li
                                        key={subIndex}
                                        variants={itemVariants}
                                        initial="hidden"
                                        animate="visible"
                                        custom={subIndex}
                                      >
                                        <Link to={`/${toSlug(section.title)}/${toSlug(subItem)}`}>
                                          <motion.div
                                            className="block text-[#414141] px-3 py-[3px] rounded-md transition-all duration-200 text-sm font-medium cursor-pointer"
                                            whileHover={{
                                              x: 5,
                                              backgroundColor: "#f0fdfa",
                                              color: "#0d9488"
                                            }}
                                            transition={{ duration: 0.2 }}
                                          >
                                            {subItem}
                                          </motion.div>
                                        </Link>
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
                                    <Link to={`/${toSlug(item.name)}/${toSlug(subItem)}`}>
                                      <motion.div
                                        className="block text-[#414141] px-4 py-[3px] rounded-md transition-all duration-200 text-sm font-medium cursor-pointer"
                                        whileHover={{
                                          x: 5,
                                          backgroundColor: "#f0fdfa",
                                          color: "#0d9488"
                                        }}
                                        transition={{ duration: 0.2 }}
                                      >
                                        {subItem}
                                      </motion.div>
                                    </Link>
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
            <Search className='text-white cursor-pointer' />
          </nav>

          <motion.button
            className="lg:hidden p-2 rounded-md transition-colors duration-200"
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
                  <X className="w-10 h-10 cursor-pointer text-white" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="w-10 h-10 text-white cursor-pointer" />
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
            className="lg:hidden bg-[#2EA38F] text-white shadow-lg overflow-hidden"
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            <div className="space-y-4 h-[calc(100dvh-80px)] flex flex-col justify-between overflow-y-auto">
              <div className='px-10'>
                {navItems.map((item, index) => {
                  const isDropdownOpen = openDropdowns[index] || false;

                  return (
                    <div key={item.name}>
                      {/* Parent item with toggle */}
                      <Link to={item.href}>
                        <motion.button
                          className="w-full flex justify-between items-center text-left text-white py-2 font-semibold transition-colors duration-200 cursor-pointer"
                          onClick={() => item.hasDropdown && toggleDropdown(index)}
                          whileHover={item.hasDropdown ? { x: 5 } : {}}
                          transition={{ duration: 0.2 }}
                        >
                          <span>{item.name}</span>
                          {item.hasDropdown && (
                            <motion.svg
                              className="w-6 h-6"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                              animate={{ rotate: isDropdownOpen ? 180 : 0 }}
                              transition={{ duration: 0.3 }}
                              onClick={(e) => {
                                e.preventDefault();
                                toggleDropdown(index);
                              }}
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M19 9l-7 7-7-7"
                              />
                            </motion.svg>
                          )}
                        </motion.button>
                      </Link>

                      {/* Dropdown content */}
                      {item.hasDropdown && (
                        <AnimatePresence>
                          {isDropdownOpen && (
                            <motion.div
                              className="ml-4 mt-2"
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.3 }}
                            >
                              {item.sections ? (
                                item.sections.map((section, sectionIndex) => (
                                  <motion.div
                                    key={section.title}
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{
                                      delay: sectionIndex * 0.1,
                                      duration: 0.3
                                    }}
                                  >
                                    <h4 className="font-medium text-white mb-2">{section.title}</h4>
                                    {section.items.map((subItem, subIndex) => (
                                      <Link key={subIndex} to={`/${toSlug(section.title)}/${toSlug(subItem)}`}>
                                        <motion.div
                                          className="block text-sm text-white py-1 ml-2 transition-colors duration-200 cursor-pointer"
                                          initial={{ opacity: 0, x: -10 }}
                                          animate={{ opacity: 1, x: 0 }}
                                          transition={{
                                            delay: subIndex * 0.05,
                                            duration: 0.3
                                          }}
                                          whileHover={{ x: 3 }}
                                        >
                                          {subItem}
                                        </motion.div>
                                      </Link>
                                    ))}
                                  </motion.div>
                                ))
                              ) : (
                                item.items?.map((subItem, subIndex) => (
                                  <Link key={subIndex} to={`/${toSlug(subItem)}`}>
                                    <motion.div
                                      className="block text-sm text-white py-1 ml-2 transition-colors duration-200 cursor-pointer"
                                      initial={{ opacity: 0, x: -10 }}
                                      animate={{ opacity: 1, x: 0 }}
                                      transition={{
                                        delay: subIndex * 0.05,
                                        duration: 0.3
                                      }}
                                      whileHover={{ x: 3 }}
                                    >
                                      {subItem}
                                    </motion.div>
                                  </Link>
                                ))
                              )}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      )}
                    </div>
                  );
                })}
              </div>

              <div className='px-10 flex gap-8'>
                <Search className='text-white cursor-pointer' />
                <input
                  placeholder="Search"
                  className="w-full border-b border-white placeholder:font-[900] focus:outline-none"
                />
              </div>

              <ul className="flex md:flex-row flex-col">
                {menuItems.map((item) => {
                  return (
                    <li key={item.id} className="menu-item relative h-14 w-full flex justify-end">
                      <motion.a
                        href={item.href}
                        className="relative flex items-center h-14 text-white text-sm font-bold uppercase w-full"
                        style={{ fontFamily: 'Avenir, sans-serif' }}
                        onMouseEnter={() => setExpandedItem(item.id)}
                        onMouseLeave={() => setExpandedItem(null)}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      >
                        <div
                          className="absolute inset-0 bg-gradient-to-r z-10"
                          style={{
                            background: item.bgGradient,
                          }}
                        />
                        <div
                          className=" w-16 h-14 flex items-center justify-center text-white text-3xl font-normal z-20"
                        >
                          {item.icon}
                        </div>
                        <span
                          className={`relative z-30 text-center ${item.id === 'security-incident' ? 'line-clamp-1' : 'line-clamp-2'} opacity-100`}
                        >
                          {item.text}
                        </span>
                      </motion.a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};