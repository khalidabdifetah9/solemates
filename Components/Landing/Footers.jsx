'use client';

import { Star } from 'lucide-react';
import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useTransform,
  wrap,
} from 'framer-motion';

function ParqueeText({ children, baseVelocity = -0.8 }) {
  const baseX = useMotionValue(0);
  
  // Wraps movement seamlessly between -50% and 0%
  const x = useTransform(baseX, (v) => `${wrap(-50, 0, v)}%`);

  useAnimationFrame((_, delta) => {
    // Delta normalizes frame rate; baseVelocity determines the exact speed
    let moveBy = baseVelocity * (delta / 1000) * 10;
    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div className="flex flex-nowrap overflow-hidden whitespace-nowrap">
      <motion.div className="flex flex-nowrap whitespace-nowrap" style={{ x }}>
        {children}
      </motion.div>
    </div>
  );
}

export default function Footer() {
  const items = Array.from({ length: 4 });

  return (
    <footer className="relative w-full bg-white font-racing overflow-hidden h-[30vh] sm:h-[40vh] md:h-[50vh] flex items-center border-t border-neutral-200">
      <ParqueeText baseVelocity={-0.4}>
        <div className="flex items-center whitespace-nowrap leading-none shrink-0">
          {items.map((_, i) => (
            <span
              key={i}
              className="flex items-center gap-4  sm:gap-8 md:gap-14 mx-4 sm:mx-8 md:mx-14 text-[18vh] sm:text-[28vh] md:text-[40vh] font-bold text-neutral-900 tracking-tight select-none leading-none whitespace-nowrap"
            >
              SOLE
              <Star
                className="w-[12vh] h-[12vh] sm:w-[20vh] sm:h-[20vh] md:w-[28vh] md:h-[28vh] text-[#A9DDF2] fill-neutral-900 shrink-0"
                strokeWidth={1.5}
              />
              MATES
            </span>
          ))}
        </div>
        <div className="flex items-center whitespace-nowrap leading-none shrink-0">
          {items.map((_, i) => (
            <span
              key={`dup-${i}`}
              className="flex items-center gap-4 sm:gap-8 md:gap-14 mx-4 sm:mx-8 md:mx-14 text-[18vh] sm:text-[28vh] md:text-[40vh] font-bold text-neutral-900 tracking-tight select-none leading-none whitespace-nowrap"
            >
              SOLE
              <Star
                className="w-[12vh] h-[12vh] sm:w-[20vh] sm:h-[20vh] md:w-[28vh] md:h-[28vh] text-neutral-900 fill-neutral-900 shrink-0"
                strokeWidth={1.5}
              />
              MATES
            </span>
          ))}
        </div>
      </ParqueeText>
    </footer>
  );
}