"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { shoesData } from "@/lib/Featured";
import Link from "next/link";

export default function FeaturedShoes() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const currentIndex = useTransform(scrollYProgress, [0, 0.33, 0.66, 1], [0, 0, 1, 2]);

  return (
    <section ref={containerRef} className="relative font-poppins h-[300vh] bg-[#f2f2f4]">
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-between p-8 sm:p-12 lg:p-16">
        {shoesData.map((shoe, idx) => (
          <SlideContent key={shoe.id} shoe={shoe} index={idx} progressIndex={currentIndex} />
        ))}

        <div className="absolute bottom-10 right-10 z-30">
          <Link href={"/shoes"} className="bg-white text-black font-semibold tracking-wider text-xs sm:text-sm uppercase px-8 py-4 rounded-md shadow-lg hover:bg-black hover:text-white transition-colors duration-300">
            More Collections
          </Link>
        </div>
      </div>
    </section>
  );
}

function SlideContent({ shoe, index, progressIndex }) {
  const [active, setActive] = React.useState(false);

  React.useEffect(() => {
    const unsubscribe = progressIndex.on("change", (latest) => {
      setActive(Math.round(latest) === index);
    });
    setActive(Math.round(progressIndex.get()) === index);
    return () => unsubscribe();
  }, [progressIndex, index]);

  return (
    <AnimatePresence>
      {active && (
        <motion.div
          key={shoe.id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="absolute inset-0 w-full h-full p-8 sm:p-12 lg:p-16 grid grid-cols-1 lg:grid-cols-12 items-center pointer-events-none"
        >
          <div className="lg:col-span-7 z-20 flex flex-col justify-between h-full py-6 pointer-events-auto">
            <div>
              <motion.p
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-xs sm:text-sm font-semibold tracking-widest text-gray-500 uppercase mb-4"
              >
                {shoe.tagline}
              </motion.p>

              <motion.h2
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-5xl sm:text-7xl lg:text-8xl font-black text-black tracking-tight leading-none whitespace-pre-line uppercase mb-6"
              >
                {shoe.title}
              </motion.h2>

              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-gray-600 text-base sm:text-lg max-w-md leading-relaxed mb-8"
              >
                {shoe.description}
              </motion.p>

              <motion.ul
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="space-y-3"
              >
                {shoe.features.map((item, i) => (
                  <li key={i} className="flex items-center gap-3 font-semibold text-gray-800 text-sm sm:text-base">
                    <span className={i === 0 ? "text-blue-600" : i === 1 ? "text-red-500" : "text-black"}>
                      ✖
                    </span>
                    {item}
                  </li>
                ))}
              </motion.ul>
            </div>

            <motion.div
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="bg-white/80 backdrop-blur-md p-4 sm:p-6 rounded-lg max-w-xl shadow-sm flex gap-4 sm:gap-6 items-center mt-8 border border-white"
            >
              <div className="relative w-24 h-24 sm:w-32 sm:h-32 bg-gray-100 rounded-md overflow-hidden shrink-0">
                <Image
                  src={shoe.cardImage}
                  alt={shoe.cardTitle}
                  fill
                  sizes="70vw"
                  priority
                  className="object-cover"
                />
              </div>
              <div>
                <h4 className="font-bold text-black text-base sm:text-lg uppercase tracking-wider mb-2">
                  {shoe.cardTitle}
                </h4>
                <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">
                  {shoe.cardDesc}
                </p>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ x: "100vw", opacity: 0, scale: 0.9 }}
            animate={{ x: 0, opacity: 1, scale: 1 }}
            exit={{ x: "100vw", opacity: 0, scale: 0.9 }}
            transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative w-full h-[50vh] lg:h-full flex items-center justify-center pointer-events-auto"
          >
            <div className="relative w-full h-[95%] flex items-center justify-center">
              <Image
                src={shoe.heroImage}
                alt={shoe.title.replace("\n", " ")}
                fill
                sizes="90vw"
                priority={index === 0}
                className="object-contain"
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}