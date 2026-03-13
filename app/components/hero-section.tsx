"use client";

import Link from "next/link";
import { motion, type Variants } from "framer-motion";

const container: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.14,
    },
  },
};

const item: Variants = {
  hidden: {
    opacity: 0,
    y: 28,
    filter: "blur(10px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

export default function HeroSection() {
  return (
    <section className="flex min-h-[calc(100vh-9rem)] flex-col items-center justify-center text-center">
      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="max-w-4xl space-y-8"
      >
        <motion.div
          variants={item}
          className="inline-flex items-center rounded-full border border-neutral-200/80 bg-white/70 px-3 py-1 text-xs font-medium text-neutral-600 shadow-sm backdrop-blur-sm"
        >
          <span className="mr-2 flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
          Built for speed, recall, and calm workflows
        </motion.div>

        <motion.div variants={item} className="space-y-5">
          <motion.h1
            variants={item}
            className="text-4xl font-semibold leading-[1.02] tracking-tight text-neutral-900 sm:text-6xl lg:text-7xl"
          >
            Keep your command-line knowledge close,
            <span className="block text-neutral-500">without cluttering your flow.</span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mx-auto max-w-3xl text-lg leading-8 text-neutral-600 sm:text-xl"
          >
            kinctx turns useful shell snippets into a searchable working memory, so you can
            capture once, recall instantly, and keep moving.
          </motion.p>
        </motion.div>

        <motion.div
          variants={item}
          className="flex flex-col items-center justify-center gap-4 pt-4 sm:flex-row"
        >
          <Link
            href="#features"
            className="inline-flex h-12 items-center justify-center rounded-2xl bg-[#1e1b17] px-8 text-sm font-medium text-white shadow-[0_18px_40px_rgba(30,27,23,0.12)] transition-all hover:-translate-y-0.5 hover:bg-[#151310]"
          >
            Explore Features
          </Link>
          <Link
            href="#workflow"
            className="inline-flex h-12 items-center justify-center rounded-2xl border border-neutral-300/80 bg-white/70 px-8 text-sm font-medium text-neutral-800 backdrop-blur-sm transition-all hover:bg-white"
          >
            See the Workflow
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
