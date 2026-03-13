"use client";

import { motion } from "framer-motion";
import { Check, Copy } from "lucide-react";
import { useState } from "react";

const INSTALL_COMMAND = "curl -fsSL https://example.com/install-kin.sh | sh";
const ease = [0.22, 1, 0.36, 1] as const;

export default function InstallCTA() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(INSTALL_COMMAND);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  };

  return (
    <section className="pt-8 sm:pt-12">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.75, ease }}
        className="relative overflow-hidden rounded-[2.5rem] border border-black/10 bg-[#171613] px-6 py-14 text-center shadow-[0_40px_120px_rgba(0,0,0,0.18)] sm:px-10 sm:py-18"
      >
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_22%),radial-gradient(circle_at_center,rgba(255,255,255,0.05)_0,transparent_38%),linear-gradient(180deg,rgba(255,255,255,0.03),transparent_36%)]" />
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-60">
          <div className="h-[540px] w-[540px] rounded-full border border-white/7" />
          <div className="absolute h-[420px] w-[420px] rounded-full border border-white/7" />
          <div className="absolute h-[300px] w-[300px] rounded-full border border-white/7" />
          <div className="absolute h-[190px] w-[190px] rounded-full border border-white/8" />
        </div>

        <div className="relative mx-auto max-w-3xl">
          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ delay: 0.08, duration: 0.65, ease }}
            className="text-4xl font-semibold tracking-tight text-[#a987ff] sm:text-5xl"
          >
            Ready to install kin?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ delay: 0.16, duration: 0.65, ease }}
            className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-stone-400 sm:text-[1.35rem]"
          >
            Copy the install command, paste it into your terminal, and start building a searchable
            command memory in minutes.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.97 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ delay: 0.24, duration: 0.7, ease }}
            className="mx-auto mt-10 max-w-3xl rounded-[1.8rem] border border-white/10 bg-black/25 p-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] backdrop-blur-sm"
          >
            <div className="flex flex-col gap-3 rounded-[1.4rem] border border-white/8 bg-white/[0.03] p-3 sm:flex-row sm:items-center sm:justify-between sm:p-4">
              <div className="overflow-x-auto rounded-2xl bg-black/30 px-4 py-3 text-left">
                <code className="block whitespace-nowrap font-mono text-sm text-stone-200 sm:text-[15px]">
                  {INSTALL_COMMAND}
                </code>
              </div>

              <button
                type="button"
                onClick={handleCopy}
                className="inline-flex h-12 items-center justify-center gap-2 rounded-2xl bg-[#8c61ff] px-5 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#7c54eb] hover:shadow-[0_12px_30px_rgba(140,97,255,0.28)]"
              >
                {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                {copied ? "Copied" : "Click to Copy"}
              </button>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
