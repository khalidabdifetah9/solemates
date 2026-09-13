"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import {SHOES} from "@/lib/shoesList"


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

function AnimatedHeading({ text, className = "" }) {
  const words = text.split(" ");
  return (
    <motion.h1
      initial="hidden"
      animate="show"
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: 0.08 } },
      }}
      className={className}
    >
      {words.map((word, i) => (
        <AnimatedWord key={i} text={word + (i !== words.length - 1 ? "\u00A0" : "")} />
      ))}
    </motion.h1>
  );
}

const gridContainer = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
};

const cardVariant = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: EASE },
  },
};

export default function ShoesPage() {
  return (
    <section className="w-full bg-white font-poppins px-6 sm:px-10 md:px-16 py-16 md:py-24">
      <div className="max-w-7xl mx-auto">
        <AnimatedHeading
          text="Our Collection"
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-black tracking-tight mb-4"
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: EASE, delay: 0.4 }}
          className="text-neutral-600 text-base sm:text-lg max-w-xl mb-12"
        >
          Handcrafted footwear built from premium materials, designed for everyday comfort and lasting durability.
        </motion.p>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          variants={gridContainer}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 border-t border-l border-neutral-300"
        >
          {SHOES.map((shoe) => (
            <motion.div
              key={shoe.id}
              variants={cardVariant}
              className="border-r border-b border-neutral-300 p-6 flex flex-col"
            >
              <div className="relative w-full aspect-square bg-neutral-100 mb-6 overflow-hidden">
                <Image
                  src={shoe.image}
                  alt={shoe.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-contain"
                />
              </div>

              <h2 className="text-lg font-semibold text-black tracking-tight mb-1">
                {shoe.name}
              </h2>

              <p className="text-sm font-medium text-neutral-800 mb-3">
                {shoe.price}
              </p>

              <p className="text-sm text-neutral-500 leading-relaxed">
                {shoe.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}