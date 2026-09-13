"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const NAV_LINKS = [
  { href: "/", label: "HOME", active: true },
  { href: "shoes", label: "SHOES", active: false },
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

export default function Navbar({ onIntroComplete }) {
  return (
    <header className="w-full pt-4 sm:pt-5 md:pt-6 text-black/40">
      <motion.h1
        initial="hidden"
        animate="show"
        variants={{
          hidden: {},
          show: { transition: { staggerChildren: 0.15 } },
        }}
        className="w-full font-black tracking-wider leading-none uppercase text-[16vw] sm:text-[14vw] md:text-[13vw] lg:text-[12vw] select-none text-center sm:text-left px-4 sm:px-6 md:px-10"
      >
        <AnimatedWord text="Sole" className="block sm:inline" />
        <AnimatedWord text="Mates" className="block sm:inline" />
      </motion.h1>

      <motion.nav
        initial="hidden"
        animate="show"
        variants={{
          hidden: {},
          show: { transition: { staggerChildren: 0.1, delayChildren: 0.3 } },
        }}
        onAnimationComplete={() => onIntroComplete?.()}
        className="relative z-30 flex flex-wrap items-center font-poppins justify-center sm:justify-end w-full mt-3 sm:mt-2 px-4 sm:pr-10 md:pr-14 lg:pr-18 space-x-4 sm:space-x-6 md:space-x-10 text-[11px] sm:text-xs md:text-sm tracking-wider uppercase font-medium"
      >
        {NAV_LINKS.map(({ href, label, active }) => (
          <Link
            key={label}
            href={href}
            className={
              active
                ? "text-[#D83B01] font-semibold transition-colors"
                : "text-gray-900"
            }
          >
            <AnimatedWord text={label} />
          </Link>
        ))}
      </motion.nav>
    </header>
  );
}