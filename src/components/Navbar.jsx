/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import Logo from "../assets/Logo";
import { MenuIcon } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  }, [menuOpen]);

  const menuItems = [
    { label: "Home", href: "/" },
    { label: "About us", href: "/about" },
    { label: "New & Media", href: "/media" },
    { label: "Careers", href: "/careers" },
    { label: "Contact us", href: "/contact" },
    { label: "Become a Agent", href: "/agent" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 backdrop-blur-sm ${
          isScrolled ? " shadow-sm" : "bg-transparent"
        }`}
      >
        <div className="max-w-350 mx-auto px-6 md:px-9 py-4">
          <div className="flex items-center justify-between">
            {/* Left: Burger Menu */}
            {!menuOpen && (
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Menu"
                className="flex flex-col gap-1.25 w-8 h-6 justify-center z-50"
              >
                <MenuIcon color="#fff" />
              </button>
            )}

            {/* Center: Brand Mark */}
            {!menuOpen && (
              <Link
                to="/"
                className={`absolute left-1/2 -translate-x-1/2 text-2xl font-medium tracking-widest transition-colors duration-300 ${
                  isScrolled ? "text-teal-primary" : "text-white"
                }`}
              >
                <Logo width={88} />
              </Link>
            )}

            {/* Right: Placeholder for balance */}
            <div className="w-8" />
          </div>
        </div>
      </nav>

      {/* Fullscreen Menu Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="fixed inset-0 z-30 overflow-hidden"
            onClick={() => setMenuOpen(false)}
          >
            {/* Grid Layout: 1.5fr (Menu) | 3fr (Image) */}
            <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_3fr] h-full">
              {/* Left Side: Menu */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-linear-to-br from-teal-dark to-teal-primary flex flex-col py-12! !md:py-16 !lg:py-20"
                onClick={(e) => e.stopPropagation()}
              >
                <h2 className="text-4xl md:text-5xl border-b border-white font-serif text-white pl-8! pb-2! lg:mb-6">
                  MENU
                </h2>

                <nav className="flex flex-col gap-6 lg:gap-8 px-8!">
                  {menuItems.map((item, i) => (
                    <motion.div key={item.label}>
                      <Link
                        to={item.href}
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 + i * 0.08 }}
                        onClick={(e) => {
                          e.stopPropagation();
                          setMenuOpen(false);
                        }}
                        className="text-white py-1! text-lg md:text-xl lg:text-[22px] font-light hover:text-bronze transition-colors duration-300 block"
                      >
                        {item.label}
                      </Link>
                    </motion.div>
                  ))}
                </nav>
              </motion.div>

              {/* Right Side: Background Image with Logo */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ delay: 0.3 }}
                className="hidden lg:flex relative items-center justify-center overflow-hidden"
              >
                <img
                  src="/nav-bg.png"
                  alt="Architectural Background"
                  className="absolute inset-0 w-full h-full object-cover object-right"
                />
                <div className="absolute inset-0 bg-linear-to-br from-teal-dark/40 to-transparent" />
                <div className="relative z-10 text-white ml-20!">
                  <Logo />
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}