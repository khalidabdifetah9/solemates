"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="w-full h-[100svh] overflow-hidden bg-white">
      <div className="relative w-full z-0 h-full">
        <Image
          src="/solemates_hero_bg.png"
          alt="Hero Background"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>
      <main className="flex absolute top-55 left-25 flex-col space-y-20">
        <div className="flex flex-col space-y-5">
          <p className="text-white/90 max-w-110 text-2xl font-poppins">
            {
              "Premium sneakers for everyday adventures. Designed for comfort,built for what's next "
            }
          </p>
          <Link
           href={"/shop"}
           className="px-13 py-4 bg-[#A9DDF2] max-w-50 rounded-lg font-semibold text-black/80 font-poppins text-lg"
          >Shop Now</Link>
        </div>
        <div className="text-[#A9DDF2] tracking-tighter font-poppins uppercase text-[12vw] font-extrabold mt-20">
          sole mates
        </div>
      </main>
    </section>
  );
}
