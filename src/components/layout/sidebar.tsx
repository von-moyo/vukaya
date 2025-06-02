import React, { useRef } from "react";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { adminNavLinks, guestNavLinks } from "../../constants/nav-items";
import { useClickOutside } from "../../hooks";

interface SideBarProps {
  className?: string;
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: (isMobileMenuOpen: boolean) => void;
}

export const SideBar: React.FC<SideBarProps> = ({ className = "", isMobileMenuOpen, setIsMobileMenuOpen }) => {
  const userNavLinks = adminNavLinks;
  const sideBarRef = useRef(null);
  useClickOutside(sideBarRef, sideBarRef, () =>
    setIsMobileMenuOpen(false)
  );

  return (
    <>
      <div ref={sideBarRef} className={`hidden lg:flex flex-col justify-between bg-white px-4 py-4 md:px-7 md:py-6 fixed sm:top-[90px] top-[69px] z-50 sm:h-[calc(100vh-88px)] h-[calc(100vh-85px)] lg:px-7 ${className}`}>
        <ul className="flex-1 space-y-0 overflow-y-auto">
          {userNavLinks.map((n) => (
            <li key={n.name}>
              <NavLink
                to={n.href}
                className={({ isActive }) =>
                  `inline-flex w-full items-center justify-between rounded-lg pl-4 pr-14 py-4.5 transition-colors ${isActive
                    ? "bg-blue-50 [&_svg]:text-blue-600 [&_span]:text-blue-600"
                    : "text-[#2E2E2E] hover:bg-blue-50 hover:[&_svg]:text-blue-600 hover:[&_span]:text-blue-600"
                  }`
                }
                end={n.href === "/"}
                preventScrollReset={n.name === "Explore"}
              >
                <span className="inline-flex items-center gap-3">
                  <n.icon className="h-5 w-5 transition-colors" />
                  <span className="whitespace-nowrap transition-colors">{n.name}</span>
                </span>
              </NavLink>
            </li>
          ))}
        </ul>
      </div>

      {/* Sidebar with animation for mobile */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "100%", opacity: 0, transition: { duration: 0.3, ease: "easeInOut" } }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className={`fixed right-0 left-auto z-50 lg:hidden flex flex-col justify-between bg-white px-4 py-4 md:px-7 md:py-6 sm:top-[90px] top-[66px] sm:h-[calc(100vh-90px)] h-[calc(100vh-66px)] lg:px-7 shadow-[-5px_0_5px_-5px_rgba(0,0,0,0.1)] ${className}`}
          >
            <ul className="flex-1 overflow-y-auto">
              {userNavLinks.map((n) => (
                <li key={n.name} onClick={() => setIsMobileMenuOpen(false)}>
                  <NavLink
                    to={n.href}
                    className={({ isActive }) =>
                      `inline-flex w-full items-center justify-between rounded-lg pl-4 pr-14 py-4.5 transition-colors ${isActive
                        ? "bg-blue-50 [&_svg]:text-blue-600 [&_span]:text-blue-600"
                        : "text-[#2E2E2E] hover:bg-blue-50 hover:[&_svg]:text-blue-600 hover:[&_span]:text-blue-600"
                      }`
                    }
                    end={n.href === "/"}
                    preventScrollReset={n.name === "Explore"}
                  >
                    <span className="inline-flex items-center gap-3">
                      <n.icon className="h-5 w-5 transition-colors" />
                      <span className="whitespace-nowrap transition-colors">{n.name}</span>
                    </span>
                  </NavLink>
                </li>
              ))}

            </ul>

          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
