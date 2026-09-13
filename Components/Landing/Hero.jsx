"use client";

import Image from "next/image";
import Navbar from "./NavBar";
import { motion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1];

// Navbar: staggerChildren 0.15s between "Sole" and "Mates",
// each word takes 0.7s to reveal -> last word finishes at ~0.15 + 0.7 = 0.85s
const NAVBAR_FINISH_TIME = 0.85;

export default function Hero() {
  return (
    <section className="relative w-full h-screen overflow-hidden bg-white">
      <Navbar />

      <div className="absolute top-2 bottom-0 -left-5 -right-5 sm:-left-10 sm:-right-10 md:-left-16 md:-right-16 lg:-bottom-5 lg:-left-20 lg:-right-20 z-0">
        <Image
          src="/heroi.avif"
          alt="Hero Background"
          fill
          priority
          className="object-contain object-center"
        />
      </div>

      <motion.div
        initial={{ y: "100%", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: EASE, delay: NAVBAR_FINISH_TIME }}
        className="absolute -left-8 bottom-4 sm:-left-10 sm:bottom-6 md:-left-12 md:bottom-8 lg:-left-15 lg:bottom-12 z-20 w-40 h-40 sm:w-64 sm:h-64 md:w-96 md:h-96 lg:w-[35rem] lg:h-[35rem]"
      >
        <Image
          src="/left_to_hero.avif"
          alt="Shoe Material Diagram"
          sizes="60vw"
          fill
          priority
          className="object-contain object-center"
        />
      </motion.div>

      <motion.div
        initial={{ y: "100%", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: EASE, delay: NAVBAR_FINISH_TIME + 0.2 }}
        className="absolute -right-8 -bottom-16 sm:-right-10 sm:-bottom-20 md:-right-12 md:-bottom-28 lg:-right-15 lg:-bottom-45 z-20 w-40 h-40 sm:w-64 sm:h-64 md:w-96 md:h-96 lg:w-[35rem] lg:h-[35rem]"
      >
        <Image
          src="/right_to_hero.avif"
          alt="Knit Texture Detail"
          fill
          sizes="60vw"
          priority
          className="object-contain object-center"
        />
      </motion.div>
    </section>
  );
}