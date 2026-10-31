import Image from "next/image";
import Link from "next/link";

export default function CTA() {
  return (
    <section className="relative w-full bg-white font-poppins h-screen overflow-hidden">
      <Image
        src="/beforefooter.avif"
        alt="Orange Running Shoes"
        fill
        priority
        className="object-contain p-4 md:p-8"
      />

      <div className="absolute inset-0 flex flex-col items-center justify-end text-center px-6 pb-16 md:pb-24 pointer-events-none">
        <span className="text-xs md:text-sm  tracking-[0.3em] uppercase text-black mb-3">
          New Arrival
        </span>
        <h2 className="text-3xl md:text-7xl font-racing text-[#A9DDF2] font-bold mb-3 max-w-2xl">
          <span className="text-black">Mo</span>ve F<span className="text-black">as</span>ter. Fe<span className="text-black">el</span> Lig<span className="text-black">h</span>ter.
        </h2>
        <p className="text-sm md:text-base  max-w-md mb-6">
          Engineered for comfort, built for speed meet your new everyday runner.
        </p>
        <Link
          href="/shoes"
          className="pointer-events-auto inline-block min-w-60 rounded-sm hover:translate-x-6 transition-all duration-500 text-black bg-[#A9DDF2] text-sm md:text-base font-medium px-15 py-3"
        >
          Shop Now
        </Link>
      </div>
    </section>
  );
}
