"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/shop", label: "Shop" },
  { href: "/contact", label: "Contact" },
];

const EASE = [0.22, 1, 0.36, 1];

const wordVariant = {
  hidden: { y: "110%" },
  show: { y: 0, transition: { duration: 0.7, ease: EASE } },
};

function AnimatedWord({ text }) {
  return (
    <span className="inline-block overflow-hidden pb-1 align-bottom">
      <motion.span className="inline-block" variants={wordVariant}>
        {text}
      </motion.span>
    </span>
  );
}

const NavBar = ({ onIntroComplete }) => {
  const pathname = usePathname();
  const [visible, setVisible] = useState(true); // show or hide the navbar
  const [scrolled, setScrolled] = useState(false); // add blur after leaving the top
  const [menuOpen, setMenuOpen] = useState(false); // mobile menu
  const lastY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;

      setScrolled(y > 20);

      if (y < 20) {
        setVisible(true); // always show at the very top
      } else if (y > lastY.current) {
        setVisible(false); // scrolling down -> hide
        setMenuOpen(false);
      } else {
        setVisible(true); // scrolling up -> show
      }

      lastY.current = y;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const linkClass = (href) =>
    `font-racing text-xl uppercase transition-colors ${
      pathname === href ? "text-[#A9DDF2]" : "text-white hover:text-[#A9DDF2]"
    }`;

  return (
    <motion.header
      animate={{ y: visible ? 0 : "-100%" }}
      transition={{ duration: 0.35, ease: EASE }}
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${
        scrolled || menuOpen
          ? "bg-black/40 backdrop-blur-lg border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <div className="flex items-center justify-between w-full px-4 sm:px-8 md:px-14 py-3 sm:py-4">
        {/* Logo */}
        <Link href="/" onClick={() => setMenuOpen(false)}>
          <Image
            width={300}
            height={200}
            alt="SoleMate Logo"
            src="/Logo.svg"
            className="w-28 sm:w-36 md:w-40"
          />
        </Link>

        {/* Desktop links */}
        <motion.nav
          initial="hidden"
          animate="show"
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.1, delayChildren: 0.3 } },
          }}
          onAnimationComplete={() => onIntroComplete?.()}
          className="hidden md:flex items-center space-x-10"
        >
          {NAV_LINKS.map(({ href, label }) => (
            <Link key={label} href={href} className={linkClass(href)}>
              <AnimatedWord text={label} />
            </Link>
          ))}
        </motion.nav>

        {/* Mobile hamburger button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          className="md:hidden flex flex-col justify-center gap-1.5 w-8 h-8"
        >
          <span
            className={`block h-0.5 w-full bg-white transition-all duration-300 ${
              menuOpen ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-full bg-white transition-all duration-300 ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-full bg-white transition-all duration-300 ${
              menuOpen ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: EASE }}
            className="md:hidden overflow-hidden"
          >
            <div className="flex flex-col items-center gap-6 py-8">
              {NAV_LINKS.map(({ href, label }) => (
                <Link
                  key={label}
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className={`${linkClass(href)} text-2xl`}
                >
                  {label}
                </Link>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default NavBar;