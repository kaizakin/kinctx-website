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
        <div className="w-full space-y-6 md:space-y-3">
          <div className="space-y-3">
            <p className="text-sm font-medium uppercase tracking-[0.26em] text-white/52">
              Memory for your shell
            </p>
            <h2 className="max-w-6xl pr-0 text-[3.7rem] font-semibold leading-[0.84] tracking-[-0.075em] text-white sm:text-[6rem] md:pr-44 md:text-[8.1rem] lg:pr-52 lg:text-[10.4rem]">
              Built for those
              <br />
              who <span className="text-[#e7c4a8]">forget</span>
            </h2>
          </div>

          <div className="flex flex-col items-start gap-3 text-lg font-medium text-white/60 md:absolute md:right-10 md:top-10 md:items-end md:text-xl">
            <a
              href="https://github.com/kaizakin"
              target="blank"
              rel="noreferrer"
              className="transition-colors hover:text-white"
            >
              GitHub
            </a>
            <a
              href="https://x.com/kartikktwt"
              target="blank"
              rel="noreferrer"
              className="transition-colors hover:text-white"
            >
              X
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
