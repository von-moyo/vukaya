import { useState, useRef } from 'react';
import { ChevronDownIcon, Heart, Menu, ShoppingBag, User, X, Home, Search as SearchIcon, Grid2X2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useMobile } from '../../hooks/useMobile';
import { Search } from '../search';
import { SearchModal } from '../search-modal';
import { useClickOutside } from '../../hooks';

interface MenuItem {
  id: string;
  text: string;
  href: string;
  icon: string;
  bgGradient: string;
}

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [openDropdowns, setOpenDropdowns] = useState<any>({});
  const { isMobile } = useMobile({ size: 640 });
  const modalRef = useRef(null);
  const buttonRef = useRef(null);
  useClickOutside(modalRef, buttonRef, () => setIsMenuOpen(false));

  const toggleDropdown = (index: any) => {
    setOpenDropdowns((prev: any) => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const navItems = [
    {
      name: 'HOME',
      href: '/',
    },
    {
      name: 'CATALOG',
      href: 'https://vukaya.com/collections/all',
    },
    {
      name: 'BLOG',
      href: 'https://vukaya.com/blogs/news',
    },
    {
      name: 'ABOUT US',
      href: 'https://vukaya.com/pages/about-us',
      hasDropdown: true,
      items: [
        { label: 'Our Team', link: 'https://vukaya.com/pages/our-team' }
      ]
    },
    {
      name: 'FAQS',
      href: 'https://vukaya.com/pages/faqs',
    },
    {
      name: 'CONTACT',
      href: 'https://vukaya.com/pages/contact',
    },
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
    hidden: { x: '-300px', opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.3 } },
    exit: { x: '-300px', opacity: 0, transition: { duration: 0.3 } },
  };

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.3 } },
    exit: { opacity: 0, transition: { duration: 0.3 } },
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
    <>
      {/* Desktop Header - Top */}
      <motion.header
        className={`sm:sticky top-0 z-[99999] lg:h-[86px] h-[72px] bg-white sm:px-[2.38%] px-[5%] ${isMobile && isMenuOpen ? 'bg-[#2EA38F]' : ''}`}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        <div className="flex items-center h-full w-full sm:justify-normal justify-between">
          <Menu className="w-5 h-5 text-[#808080] cursor-pointer sm:hidden flex" onClick={() => setIsMenuOpen(!isMenuOpen)} />
          {!isMenuOpen && <Link to='/'>
            <motion.div
              className="flex items-center cursor-pointer"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <img src='/logo.avif' alt='logo icon' className='w-[128px]' />
            </motion.div>
          </Link>}
          <div className='sm:hidden flex relative cursor-pointer'>
            <span className='text-[11px] font-bold text-white bg-red-500 w-4 h-4 grid place-content-center absolute rounded-full -right-1 -top-1'>0</span>
            <ShoppingBag className='w-5 h-5 text-[#808080]' />
          </div>
          <div className={`sm:flex hidden items-center gap-8 ml-[8.3%] ${isMenuOpen ? 'w-full' : 'w-[85%]'} lg:justify-between justify-end`}>
            <nav className="flex items-center gap-[2.78%] w-full lg:justify-normal justify-end">
              {navItems.map((item, index) => (
                <div
                  key={item.name}
                  className="relative lg:block hidden"
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={handleMouseLeave}
                >
                  <Link to={item.href}>
                    <motion.button
                      className={`flex items-center text-[#333333] lg:text-base font-bold transition-colors duration-200 py-2 cursor-pointer uppercase ${item.hasDropdown && 'pb-8 mt-5.5'}`}
                      whileHover={{
                        fontWeight: 600,
                        color: 'red',
                        scale: 1.05
                      }}
                      transition={{ duration: 0.2 }}
                    >
                      <span className='whitespace-nowrap'>{item.name}</span> {item.hasDropdown && <ChevronDownIcon className='w-4 ml-1' />}
                    </motion.button>
                  </Link>

                  {/* Dropdown Menu */}
                  <AnimatePresence>
                    {item.hasDropdown && activeDropdown === index && (
                      <div className='relative'>
                        <motion.div
                          className={`absolute top-0 bg-white border border-[#e2e2e2] overflow-hidden z-50 -left-4 w-44`}
                          variants={dropdownVariants}
                          initial="hidden"
                          animate="visible"
                          exit="hidden"
                        >
                          <div className="p-4">
                            <ul className="grid grid-cols-2">
                              {item.items?.map((subItem, subIndex) => (
                                <motion.li
                                  key={subIndex}
                                  variants={itemVariants}
                                  initial="hidden"
                                  animate="visible"
                                  custom={subIndex}
                                >
                                  <Link to={`${subItem.link}`}>
                                    <motion.div
                                      className="block text-[#414141] transition-all duration-200 text-sm font-medium cursor-pointer whitespace-nowrap"
                                      whileHover={{
                                        x: 5,
                                        color: "red"
                                      }}
                                      transition={{ duration: 0.2 }}
                                    >
                                      {subItem.label}
                                    </motion.div>
                                  </Link>
                                </motion.li>
                              ))}
                            </ul>
                          </div>
                        </motion.div>
                      </div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
              <Menu className="w-5 h-5 text-[#808080] cursor-pointer lg:hidden flex" onClick={() => setIsMenuOpen(!isMenuOpen)} />
              <Search placeholder='Find our product' className='ml-[1%] w-[37%] xl:flex hidden' />
              <SearchModal placeholder='Find our product' className='xl:hidden flex justify-items-end lg:w-[20%]' />
              <User className='text-[#808080] w-5 h-5 hover:text-red-500 cursor-pointer shrink-0' />
              <span className='flex gap-1 items-center text-[#808080] hover:text-red-500 cursor-pointer shrink-0'>
                <Heart className='w-5 h-5' />
                <span className='font-bold '>(0)</span>
              </span>
              <span className='flex gap-1 items-center text-[#808080] hover:text-red-500 cursor-pointer shrink-0'>
                <ShoppingBag className='w-5 h-5' />
                <span className='font-bold '>(0)</span>
              </span>
            </nav>
          </div>
        </div>
      </motion.header>

      {/* Mobile Bottom Navigation */}
      <motion.div
        className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-[99999] sm:hidden block"
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        <nav className="flex items-center justify-around py-1.5 px-4">
          {/* Home */}
          <Link to="/" className="flex flex-col items-center justify-center p-2 min-w-0">
            <Home className="w-5 h-5 text-[#808080] mb-1" />
            <span className="text-xs text-[#808080] font-medium">HOME</span>
          </Link>

          {/* Search */}
          <div className="flex flex-col items-center justify-center p-2 min-w-0 cursor-pointer">
            <SearchIcon className="w-5 h-5 text-[#808080] mb-1" />
            <span className="text-xs text-[#808080] font-medium">SEARCH</span>
          </div>

          {/* Shop */}
          <Link to="/collections/all" className="flex flex-col items-center justify-center p-2 min-w-0">
            <Grid2X2 className="w-5 h-5 text-[#808080] mb-1" />
            <span className="text-xs text-[#808080] font-medium">SHOP</span>
          </Link>

          {/* Wishlist */}
          <div className="flex flex-col items-center justify-center p-2 min-w-0 cursor-pointer relative">
            <div className="relative">
              <Heart className="w-5 h-5 text-[#808080] mb-1" />
              <span className="absolute -top-1.5 -right-2 bg-red-500 text-white text-xs font-light rounded-full w-4 h-4 flex items-center justify-center">
                0
              </span>
            </div>
            <span className="text-xs text-[#808080] font-medium">WISHLIST</span>
          </div>

          {/* Login */}
          <div className="flex flex-col items-center justify-center p-2 min-w-0 cursor-pointer">
            <User className="w-5 h-5 text-[#808080] mb-1" />
            <span className="text-xs text-[#808080] font-medium">LOGIN</span>
          </div>
        </nav>
      </motion.div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Overlay */}
            <motion.div
              className="fixed inset-0 bg-black/60 z-40 lg:hidden"
              variants={overlayVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              onClick={() => setIsMenuOpen(false)}
            />

            {/* Sidebar */}
            <motion.div
              ref={modalRef}
              className="fixed top-0 left-0 w-[300px] h-[100dvh] bg-white text-[#333333] shadow-lg overflow-hidden z-50 lg:hidden font-manrope"
              variants={mobileMenuVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
            >
              <div className="h-[calc(100dvh-80px)] flex flex-col overflow-y-auto">
                <div className='flex justify-items-end gap-1 py-[9.3px] px-4 border-b border-[#e2e2e2]'>
                  <X stroke-width={1} size={24} className="text-[#333333] cursor-pointer ml-auto" onClick={() => { setIsMenuOpen(false); }} />
                </div>
                <div className='flex items-center gap-2 py-[9.3px] px-4 border-b border-[#e2e2e2] font-medium text-[15px]'>
                  <Menu className="w-6 h-auto text-[#333333] cursor-pointer" />  Menu
                </div>
                {navItems.map((item, index) => {
                  const isDropdownOpen = openDropdowns[index] || false;

                  return (
                    <div key={item.name}>
                      <div className="w-full flex justify-between items-center text-left text-[#333333] py-[9.3px] px-4 border-b border-[#e2e2e2] font-semibold transition-colors duration-200 cursor-pointer">
                        {item.hasDropdown ? (
                          <motion.button
                            className="w-full flex justify-between items-center text-left cursor-pointer"
                            onClick={() => toggleDropdown(index)}
                            whileHover={{ x: 5 }}
                            transition={{ duration: 0.2 }}
                          >
                            <Link to={item.href}>{item.name}</Link>
                            <motion.svg
                              className="w-4 h-auto"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                              animate={{ rotate: isDropdownOpen ? 180 : 0 }}
                              transition={{ duration: 0.3 }}
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M19 9l-7 7-7-7"
                              />
                            </motion.svg>
                          </motion.button>
                        ) : (
                          <Link to={item.href} className="w-full flex justify-between items-center text-left">
                            <span>{item.name}</span>
                          </Link>
                        )}
                      </div>

                      {/* Dropdown content */}
                      {item.hasDropdown && (
                        <AnimatePresence>
                          {isDropdownOpen && (
                            <motion.div
                              className=""
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.3 }}
                            >
                              {item.items?.map((subItem, subIndex) => (
                                <Link key={subIndex} to={subItem.link}>
                                  <motion.div
                                    className="block text-[#333333] py-[9.3px] pl-6 pr-4 border-b border-[#e2e2e2] transition-colors duration-200 cursor-pointer"
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{
                                      delay: subIndex * 0.05,
                                      duration: 0.3,
                                    }}
                                    whileHover={{ x: 3 }}
                                  >
                                    {subItem.label}
                                  </motion.div>
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      )}
                    </div>
                  );
                })}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};