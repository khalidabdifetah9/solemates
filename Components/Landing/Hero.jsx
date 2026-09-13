"use client";

import Image from "next/image";
import Navbar from "./NavBar";
import { motion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1];

const NAVBAR_FINISH_TIME = 0.85;

export default function Hero() {
  return (
    <section className="relative w-full h-[100svh] overflow-hidden bg-white">
      <Navbar />

      {/* Hero background: no horizontal bleed on mobile so nothing gets clipped off-screen */}
      <div className="absolute top-2 bottom-0 left-0 right-0 sm:-left-10 sm:-right-10 md:-left-16 md:-right-16 lg:-bottom-5 lg:-left-20 lg:-right-20 z-0">
        <Image
          src="/heroi.avif"
          alt="Hero Background"
          fill
          priority
          sizes="(max-width: 640px) 100vw, 120vw"
          className="object-contain object-center"
        />
      </div>

      <motion.div
        initial={{ y: "100%", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: EASE, delay: NAVBAR_FINISH_TIME }}
        className="absolute -left-4 bottom-2 sm:-left-10 sm:bottom-6 md:-left-12 md:bottom-8 lg:-left-15 lg:bottom-12 z-20 w-28 h-28 sm:w-64 sm:h-64 md:w-96 md:h-96 lg:w-[35rem] lg:h-[35rem]"
      >
        <Image
          src="/left_to_hero.avif"
          alt="Shoe Material Diagram"
          sizes="(max-width: 640px) 40vw, 60vw"
          fill
          priority
          className="object-contain object-center"
        />
      </motion.div>

      <motion.div
        initial={{ y: "100%", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: EASE, delay: NAVBAR_FINISH_TIME + 0.2 }}
        className="absolute -right-4 -bottom-8 sm:-right-10 sm:-bottom-20 md:-right-12 md:-bottom-28 lg:-right-15 lg:-bottom-45 z-20 w-28 h-28 sm:w-64 sm:h-64 md:w-96 md:h-96 lg:w-[35rem] lg:h-[35rem]"
      >
        <Image
          src="/right_to_hero.avif"
          alt="Knit Texture Detail"
          fill
          sizes="(max-width: 640px) 40vw, 60vw"
          priority
          className="object-contain object-center"
        />
      </motion.div>
    </section>
  );
}