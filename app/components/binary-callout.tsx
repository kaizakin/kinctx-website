"use client";

import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

export default function BinaryCallout() {
  return (
    <section className="py-8 sm:py-12">
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease }}
        className="relative overflow-hidden rounded-[2.2rem] border border-black/8 bg-[#f2ece4]/85 p-6 shadow-[0_26px_70px_rgba(0,0,0,0.06)] md:p-8"
      >
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(140,97,255,0.08),transparent_24%),radial-gradient(circle_at_left,rgba(173,238,217,0.16),transparent_24%)]" />

        <div className="relative grid gap-6 md:grid-cols-[1.1fr_0.9fr] md:items-center">
          <div className="space-y-4">
            <p className="text-sm font-medium uppercase tracking-[0.24em] text-neutral-500">
              Lightweight By Design
            </p>
            <h2 className="max-w-2xl text-3xl font-semibold tracking-tight text-neutral-900 sm:text-4xl">
              A CGO-free single binary that keeps its database where users expect it.
            </h2>
            <p className="max-w-2xl text-lg leading-8 text-neutral-600">
              kin stays small on purpose. You install one lightweight binary, run
              <code className="mx-1 rounded bg-black/5 px-1.5 py-0.5 font-mono text-[0.9em]">
                kin init
              </code>
              once, and the SQLite store lives in the user&apos;s default config directory.
            </p>
          </div>

          <div className="rounded-[1.7rem] border border-black/8 bg-[#151513] p-4 text-stone-100 shadow-[0_20px_60px_rgba(0,0,0,0.16)]">
            <div className="mb-4 flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-[#ff6c5f]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#f5c451]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#63c655]" />
              <span className="ml-2 text-xs uppercase tracking-[0.24em] text-stone-500">
                runtime notes
              </span>
            </div>

            <div className="space-y-3 rounded-[1.25rem] border border-white/8 bg-white/[0.03] p-4">
              <div className="rounded-xl border border-[#e7c4a8]/25 bg-[#e7c4a8]/10 px-3 py-2">
                <p className="text-xs uppercase tracking-[0.2em] text-[#f2dac8]">Binary</p>
                <p className="mt-1 text-sm text-stone-200">CGO-free, lightweight, single binary</p>
              </div>

              <div className="rounded-xl border border-white/8 bg-black/18 px-3 py-3">
                <p className="text-xs uppercase tracking-[0.2em] text-stone-500">Linux</p>
                <p className="mt-1 font-mono text-sm text-stone-200">~/.config/kinctx</p>
              </div>

              <div className="rounded-xl border border-white/8 bg-black/18 px-3 py-3">
                <p className="text-xs uppercase tracking-[0.2em] text-stone-500">macOS</p>
                <p className="mt-1 font-mono text-sm text-stone-200">
                  $HOME/Library/Application Support
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
