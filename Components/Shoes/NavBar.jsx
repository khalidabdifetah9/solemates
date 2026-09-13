"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const NAV_LINKS = [
  { href: "/", label: "HOME" },
  { href: "/shoes", label: "SHOES" },
];

const EASE = [0.22, 1, 0.36, 1];

const wordVariant = {
  hidden: { y: "110%" },
  show: {
    y: 0,
    transition: { duration: 0.7, ease: EASE },
  },
};

function AnimatedWord({ text, className = "" }) {
  return (
    <span className={`inline-block overflow-hidden pb-1 align-bottom ${className}`}>
      <motion.span className="inline-block" variants={wordVariant}>
        {text}
      </motion.span>
    </span>
  );
}

const NavBar = ({ onIntroComplete }) => {
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-transparent">
      <div className="flex items-center justify-between w-full px-4 sm:px-8 md:px-14 lg:px-18 py-4 sm:py-5">
        <Link href="/" className="text-black font-black tracking-wider uppercase text-lg sm:text-xl">
          <Image 
           width={200}
           height={100}
           alt="SoleMate Logo"
           src={"/solemates_logo.svg"}
          />
        </Link>

        <motion.nav
          initial="hidden"
          animate="show"
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.1, delayChildren: 0.3 } },
          }}
          onAnimationComplete={() => onIntroComplete?.()}
          className="relative z-30 flex flex-wrap items-center font-poppins justify-end space-x-4 sm:space-x-6 md:space-x-10 text-[11px] sm:text-xs md:text-sm tracking-wider uppercase font-medium"
        >
          {NAV_LINKS.map(({ href, label }) => {
            const isActive = pathname === href;

            return (
              <Link
                key={label}
                href={href}
                className={
                  isActive
                    ? "text-[#D83B01] font-semibold transition-colors"
                    : "text-gray-900 transition-colors"
                }
              >
                <AnimatedWord text={label} />
              </Link>
            );
          })}
        </motion.nav>
      </div>
    </header>
  );
};

export default NavBar;