"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1];

const wordContainer = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.04, delayChildren: 0 },
  },
};

const wordVariant = {
  hidden: { y: "110%" },
  show: {
    y: 0,
    transition: { duration: 0.7, ease: EASE },
  },
};

// Parent drives visibility; each word just listens via variants (no own whileInView)
function AnimatedWords({ text, className = "", staggerDelay = 0.04 }) {
  const words = text.split(" ");

  return (
    <motion.span
      className={className}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: staggerDelay } },
      }}
    >
      {words.map((word, i) => (
        <span key={i} className="inline-block font-racing overflow-hidden pb-1 align-bottom">
          <motion.span className="inline-block" variants={wordVariant}>
            {word}
            {i !== words.length - 1 ? "\u00A0" : ""}
          </motion.span>
        </span>
      ))}
    </motion.span>
  );
}

export default function WhyUs() {
  return (
    <section className="bg-black text-white font-poppins px-8 sm:px-12 md:px-16 lg:px-24 py-24 md:py-32 relative overflow-hidden">
      <div className="max-w-400 mx-auto flex flex-col justify-between min-h-[80vh]">

        {/* Main Typography Statement */}
        <motion.div
          className="max-w-5xl"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-[5rem] font-normal tracking-tight leading-[1.1]">
            <AnimatedWords
              text="SoleMates is an Ethiopian brand crafting bold, high performance footwear for"
              className="text-[#A9DDF2] font-medium"
            />{" "}
            <AnimatedWords
              text="ambitious everyday movers with authentic quality and refined execution."
              className="text-white/30"
            />
          </h2>
        </motion.div>

        {/* Bottom Section - Subtext & Right-Aligned Images */}
        <div className="mt-20 pt-8 grid grid-cols-1 md:grid-cols-12 gap-8 items-end">

          {/* Bottom Left Subtext */}
          <motion.div
            className="md:col-span-5 lg:col-span-6"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
          >
            <p className="text-2xl max-w-lg leading-relaxed">
              <AnimatedWords
                text="Crafting world class footwear experiences that combine traditional Ethiopian leather artistry with modern ergonomic design."
                staggerDelay={0.02}
              />
            </p>
          </motion.div>

          {/* Bottom Right Image Cards */}
          <div className="md:col-span-7 lg:col-span-6 flex justify-start md:justify-end gap-4">

            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.8, delay: 0.2, ease: EASE }}
              className="w-32 h-32 sm:w-44 sm:h-44 md:w-48 md:h-48 bg-neutral-900 overflow-hidden relative shrink-0"
            >
              <Image
                src="/whyus_image_three.avif"
                alt="SoleMates shoe detail craftsmanship"
                fill
                sizes="(max-width: 640px) 128px, (max-width: 768px) 176px, 192px"
                className="object-cover"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.8, delay: 0.35, ease: EASE }}
              className="w-40 h-40 sm:w-56 sm:h-56 md:w-70 md:h-80 bg-neutral-900 overflow-hidden relative shrink-0"
            >
              <Image
                src="/whyus_image_one.avif"
                alt="SoleMates footwear close up"
                fill
                sizes="(max-width: 640px) 160px, (max-width: 768px) 224px, 240px"
                className="object-cover"
              />
            </motion.div>

          </div>

        </div>

      </div>
    </section>
  );
}