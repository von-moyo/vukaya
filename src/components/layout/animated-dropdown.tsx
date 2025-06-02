import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDownIcon, LogOut } from 'lucide-react';
import { useClickOutside } from '../../hooks';

const AnimatedDropdown = () => {
  const [dropdown, setDropdown] = useState(false);
  const dropdownButtonRef = useRef(null);
  const dropdownPopupRef = useRef(null);

  useClickOutside(dropdownPopupRef, dropdownButtonRef, () =>
    setDropdown(false)
  );

  return (
    <div className="relative lg:block hidden">
      <motion.div
        onClick={() => setDropdown(!dropdown)}
        className="flex items-center gap-4 cursor-pointer"
        ref={dropdownButtonRef}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        transition={{ duration: 0.2, ease: "easeInOut" }}
      >
        <p className='capitalize'>Von</p>
        <motion.div
          animate={{ rotate: dropdown ? 180 : 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >

          <ChevronDownIcon color="#898989" />
        </motion.div>
      </motion.div>

      <AnimatePresence>
        {dropdown && (
          <motion.div
            ref={dropdownPopupRef}
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute right-0 top-[40px] z-[99] mt-[15px] flex w-[260px] flex-col rounded-[20px] bg-[#FFFFFF] py-4 pt-0 shadow-lg border"
          >

            <motion.div
              className="items-between py-3 flex h-fit cursor-pointer gap-2 rounded-[.3125rem] px-6"
              initial={{ backgroundColor: "transparent" }}
              whileHover={{ backgroundColor: '#fff1f1' }}
              transition={{
                duration: 0.2,
                ease: "easeInOut",
                backgroundColor: { duration: 0.15 }
              }}
            >
              <LogOut size={20} color="#D74B42" />
              <p className="text-sm font-light text-[#D74B42]">Logout</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AnimatedDropdown;