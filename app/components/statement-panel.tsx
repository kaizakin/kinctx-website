"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function StatementPanel() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 92%", "end 45%"],
  });

  const clipPath = useTransform(
    scrollYProgress,
    [0, 1],
    [
      "inset(42% 0% 0% 0%)",
      "inset(0% 0% 0% 0%)",
    ],
  );
  const opacity = useTransform(scrollYProgress, [0, 0.45, 1], [0.28, 0.82, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [140, 0]);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[64vh] overflow-hidden border-t border-black/10 bg-[#090907]"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_18%,rgba(255,255,255,0.04),transparent_24%)]" />

      <motion.div
        style={{ clipPath, opacity, y }}
        className="absolute inset-x-0 bottom-0 top-[24%] bg-[radial-gradient(circle_at_50%_22%,rgba(246,154,89,0.18),transparent_24%),linear-gradient(180deg,#eda16a_0%,#df8b57_100%)]"
      >
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_18%)]" />
        <div className="pointer-events-none absolute inset-0 opacity-30 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),transparent_24%)]" />

        <div className="relative flex h-full flex-col justify-between px-5 py-8 sm:px-8 md:px-10">
          <div className="flex justify-end">
            <div className="space-y-2 text-right text-base text-black/85 sm:text-lg">
              <p>GitHub</p>
              <p>Docs</p>
              <p>Install</p>
            </div>
          </div>

          <div className="space-y-4">
            <p className="text-sm font-medium uppercase tracking-[0.26em] text-black/55">
              Memory for your shell
            </p>
            <h2 className="max-w-6xl text-[3.8rem] font-semibold leading-[0.87] tracking-[-0.07em] text-[#111111] sm:text-[6rem] md:text-[8rem] lg:text-[10rem]">
              Built for those who <span className="text-[#6e44ff]">forget</span>
            </h2>
          </div>
        </div>
      </motion.div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#090907] to-transparent" />
    </section>
  );
}
