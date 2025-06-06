import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface MenuItem {
  id: string;
  text: string;
  href: string;
  icon: string;
  bgGradient: string;
}

export const StickyMenu: React.FC = () => {
  const [expandedItem, setExpandedItem] = useState<string | null>(null);

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

  return (

    <div className="sticky-menu fixed right-0 top-1/2 transform -translate-y-1/2 z-50 lg:flex hidden">
      <ul className="space-y-2">
        {menuItems.map((item) => {
          const isExpanded = expandedItem === item.id;

          return (
            <li key={item.id} className="menu-item relative h-14 w-64 flex justify-end">
              <motion.a
                href={item.href}
                className="relative flex items-center h-14 text-white text-sm font-bold uppercase tracking-wider"
                style={{ fontFamily: 'Avenir, sans-serif' }}
                onMouseEnter={() => setExpandedItem(item.id)}
                onMouseLeave={() => setExpandedItem(null)}
                initial={{ width: 85 }}
                animate={{ width: isExpanded ? 256 : 85 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                <div
                  className="absolute inset-0 bg-gradient-to-r z-10"
                  style={{
                    background: item.bgGradient,
                    clipPath: 'polygon(32px 0%, 100% 0, 100% 100%, 32px 100%, 0% 50%)'
                  }}
                />
                <div
                  className="absolute left-0 top-1/2 w-16 h-14 flex items-center justify-center text-white text-3xl font-normal z-20 transform -translate-y-1/2"
                  style={{
                    clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)',
                    background: item.id === 'qorwyn-command' ? '#054479' : '#B91C1C'
                  }}
                >
                  {item.icon}
                </div>
                <span
                  className={`relative z-30 text-center ${item.id === 'security-incident' ? 'line-clamp-1' : 'line-clamp-2'} ${isExpanded
                      ? 'opacity-100 ml-12 mr-6'
                      : 'opacity-0 ml-12 mr-6 pointer-events-none'
                    }`}
                >
                  {item.text}
                </span>
              </motion.a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};