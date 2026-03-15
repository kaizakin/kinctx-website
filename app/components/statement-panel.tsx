"use client";

import { useScroll } from "framer-motion";
import { useRef } from "react";

export default function StatementPanel() {
  const sectionRef = useRef<HTMLElement | null>(null);
  useScroll({
    target: sectionRef,
    offset: ["start 92%", "end 45%"],
  });

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[40vh] overflow-hidden border-t border-white/6 bg-[#12100f]"
    >
      <div className="relative flex h-full items-center px-5 py-10 sm:px-8 md:px-10">
        <div className="w-full space-y-3">
          <p className="text-sm font-medium uppercase tracking-[0.26em] text-white/52">
            Memory for your shell
          </p>
          <h2 className="max-w-6xl text-[3.7rem] font-semibold leading-[0.84] tracking-[-0.075em] text-white sm:text-[6rem] md:text-[8.1rem] lg:text-[10.4rem]">
            Built for those
            <br />
            who <span className="text-[#e7c4a8]">forget</span>
          </h2>
        </div>
      </div>
    </section>
  );
}
