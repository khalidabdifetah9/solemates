import React from "react";
import Link from "next/link";

export default function BrandStory() {
  return (
    <section className="bg-white text-[#1a1a1a] mt-20 font-poppins px-8 py-20 md:py-32">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 items-start">
        <div className="md:col-span-5 lg:col-span-5">
          <p className="text-xl sm:text-2xl font-medium tracking-tight leading-snug max-w-xs text-black">
            SoleMates handcrafted
            <br />
            comfort from Addis Ababa.
          </p>
        </div>

        <div className="md:col-span-7 lg:col-span-7 space-y-8">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-normal tracking-tight leading-[1.1] text-black">
            Where Ethiopian heritage
            <br />
            walks with modern style.
          </h2>

          <div className="space-y-6 text-base sm:text-lg text-[#555555] font-normal leading-relaxed max-w-2xl">
            <p>
              Born in the vibrant heart of Addis Ababa, SoleMates was created to
              honor Ethiopia’s rich history of leather craftsmanship while
              delivering contemporary footwear built for everyday life. Every
              pair tells a story of dedication, bringing together local artisans
              and premium materials to create shoes that feel as good as they
              look.
            </p>

            <p>
              We believe a great journey starts from the ground up. Whether
              navigating the bustling streets of Merkato or stepping into your
              daily routine, our designs blend timeless durability, ergonomic
              comfort, and effortless elegance. Each stitch is made with purpose
              to ensure you walk with confidence and pride.
            </p>
          </div>
          <div className="pt-2">
            <Link 
              href="/shoes" 
              className="inline-block text-black text-lg font-medium underline underline-offset-8 decoration-1 hover:translate-x-6 transition-all duration-500"
            >
              Explore our collection
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
