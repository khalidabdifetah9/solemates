"use client";

import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative w-full h-[100svh] overflow-hidden bg-white">
      <div className="relative w-full z-0 h-full">
        <Image
          src="/solemates_hero_bg.png"
          alt="Hero Background"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[65%_center] md:object-center"
        />
      </div>

      {/* Dark overlay for text readability, mobile only */}
      <div className="absolute inset-0 bg-linear-to-b from-black/50 via-black/50 to-black/80 md:hidden" />

      <main className="flex absolute top-68 left-5 right-5 md:top-55 md:left-25 md:right-auto flex-col space-y-10 md:space-y-20">
        <div className="flex flex-col space-y-5">
          <p className="text-white/90 max-w-xs sm:max-w-md md:max-w-110 text-lg sm:text-xl md:text-2xl font-poppins">
            {
              "Premium sneakers for everyday adventures. Designed for comfort,built for what's next "
            }
          </p>
          <Link
            href={"/shop"}
            className="px-8 md:px-13 py-3 md:py-4 bg-[#A9DDF2] max-w-50 rounded-lg font-semibold text-black/80 font-poppins text-base md:text-lg"
          >
            Shop Now
          </Link>
        </div>

        <div className="text-[#A9DDF2] tracking-tight font-racing uppercase text-[16vw] md:text-[12vw] font-extrabold md:mt-20">
          sole mates
        </div>
      </main>
    </section>
  );
}