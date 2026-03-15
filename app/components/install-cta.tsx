"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Check, Copy } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const INSTALL_COMMAND = "brew install kaizakin/tap/kin";
const FZF_COMMAND = "brew install fzf";
const ease = [0.22, 1, 0.36, 1] as const;
const tabs = [
  { id: "unix", label: "macOS + Linux" },
  { id: "windows", label: "Windows" },
] as const;

export default function InstallCTA() {
  const [copiedInstall, setCopiedInstall] = useState(false);
  const [copiedFzf, setCopiedFzf] = useState(false);
  const [activeTab, setActiveTab] = useState<(typeof tabs)[number]["id"]>("unix");

  const handleCopy = async (value: string, kind: "install" | "fzf") => {
    try {
      await navigator.clipboard.writeText(value);

      if (kind === "install") {
        setCopiedInstall(true);
        window.setTimeout(() => setCopiedInstall(false), 1800);
      } else {
        setCopiedFzf(true);
        window.setTimeout(() => setCopiedFzf(false), 1800);
      }
    } catch {
      if (kind === "install") {
        setCopiedInstall(false);
      } else {
        setCopiedFzf(false);
      }
    }
  };

  return (
    <section id="install" className="pt-8 sm:pt-12">
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
            Copy the install command, paste it into your terminal, and get kin running in a few
            seconds.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.97 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ delay: 0.24, duration: 0.7, ease }}
            className="mx-auto mt-10 max-w-3xl rounded-[1.8rem] border border-white/10 bg-black/25 p-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] backdrop-blur-sm"
          >
            <div className="rounded-[1.4rem] border border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))] p-3 sm:p-4">
              <div className="mb-3 flex rounded-[1rem] border border-white/8 bg-black/22 p-1">
                {tabs.map((tab) => {
                  const isActive = tab.id === activeTab;

                  return (
                    <button
                      key={tab.id}
                      type="button"
                      onClick={() => setActiveTab(tab.id)}
                      className={`relative flex-1 rounded-[0.8rem] px-4 py-2.5 text-sm font-medium transition-colors ${
                        isActive ? "text-white" : "text-stone-400 hover:text-stone-200"
                      }`}
                    >
                      {isActive ? (
                        <motion.span
                          layoutId="install-tab"
                          className="absolute inset-0 rounded-[0.8rem] bg-white/[0.08]"
                          transition={{ duration: 0.28, ease }}
                        />
                      ) : null}
                      <span className="relative z-10">{tab.label}</span>
                    </button>
                  );
                })}
              </div>

              <div className="flex flex-col gap-3 rounded-[1.1rem] border border-white/6 bg-[#11100e]/90 p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
                <AnimatePresence mode="wait">
                  {activeTab === "unix" ? (
                    <motion.div
                      key="unix"
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -12 }}
                      transition={{ duration: 0.25, ease }}
                      className="space-y-3"
                    >
                      <div className="text-left">
                        <div>
                          <p className="text-xs uppercase tracking-[0.24em] text-stone-500">
                            Install steps
                          </p>
                          <div className="mt-3 flex flex-wrap gap-2">
                            <span className="rounded-full border border-[#adeed9]/25 bg-[#adeed9]/10 px-3 py-1 text-xs font-medium text-[#d6f7ec]">
                              For macOS users
                            </span>
                            <span className="rounded-full border border-[#e7c4a8]/25 bg-[#e7c4a8]/10 px-3 py-1 text-xs font-medium text-[#f2dac8]">
                              For Linux users
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="overflow-x-auto rounded-[1rem] border border-white/6 bg-black/40 px-4 py-4 text-left shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
                        <div className="mb-3 flex items-center justify-between gap-3">
                          <div className="flex items-center gap-2">
                            <span className="h-2.5 w-2.5 rounded-full bg-[#ff6c5f]" />
                            <span className="h-2.5 w-2.5 rounded-full bg-[#f5c451]" />
                            <span className="h-2.5 w-2.5 rounded-full bg-[#63c655]" />
                          </div>
                          <div className="flex items-center gap-2">
                            <motion.span
                              initial={false}
                              animate={{
                                opacity: copiedFzf ? 1 : 0,
                                y: copiedFzf ? 0 : 6,
                              }}
                              transition={{ duration: 0.25, ease }}
                              className="text-xs font-medium text-[#adeed9]"
                            >
                              Copied
                            </motion.span>

                            <motion.button
                              type="button"
                              onClick={() => handleCopy(FZF_COMMAND, "fzf")}
                              aria-label={copiedFzf ? "fzf command copied" : "Copy fzf install command"}
                              whileTap={{ scale: 0.94 }}
                              animate={{
                                boxShadow: copiedFzf
                                  ? "0 0 0 8px rgba(173,238,217,0.10)"
                                  : "0 0 0 0 rgba(173,238,217,0)",
                              }}
                              transition={{ duration: 0.3, ease }}
                              className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-[#8c61ff] text-white transition-colors duration-300 hover:bg-[#7c54eb]"
                            >
                              <AnimatePresence mode="wait" initial={false}>
                                <motion.span
                                  key={copiedFzf ? "check-fzf" : "copy-fzf"}
                                  initial={{ opacity: 0, scale: 0.7, rotate: -12 }}
                                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                                  exit={{ opacity: 0, scale: 0.7, rotate: 12 }}
                                  transition={{ duration: 0.22, ease }}
                                  className="inline-flex"
                                >
                                  {copiedFzf ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                                </motion.span>
                              </AnimatePresence>
                            </motion.button>
                          </div>
                        </div>
                        <code className="block whitespace-nowrap font-mono text-sm text-stone-200 sm:text-[15px]">
                          {FZF_COMMAND}
                        </code>
                      </div>

                      <div className="overflow-x-auto rounded-[1rem] border border-white/6 bg-black/25 px-4 py-4 text-left shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]">
                        <div className="mb-3 flex items-center justify-between gap-3">
                          <p className="text-xs uppercase tracking-[0.24em] text-stone-500">
                            Then install kin
                          </p>
                          <div className="flex items-center gap-2">
                            <motion.span
                              initial={false}
                              animate={{
                                opacity: copiedInstall ? 1 : 0,
                                y: copiedInstall ? 0 : 6,
                              }}
                              transition={{ duration: 0.25, ease }}
                              className="text-xs font-medium text-[#adeed9]"
                            >
                              Copied
                            </motion.span>

                            <motion.button
                              type="button"
                              onClick={() => handleCopy(INSTALL_COMMAND, "install")}
                              aria-label={copiedInstall ? "kin install command copied" : "Copy kin install command"}
                              whileTap={{ scale: 0.94 }}
                              animate={{
                                boxShadow: copiedInstall
                                  ? "0 0 0 8px rgba(173,238,217,0.10)"
                                  : "0 0 0 0 rgba(173,238,217,0)",
                              }}
                              transition={{ duration: 0.3, ease }}
                              className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-[#8c61ff] text-white transition-colors duration-300 hover:bg-[#7c54eb]"
                            >
                              <AnimatePresence mode="wait" initial={false}>
                                <motion.span
                                  key={copiedInstall ? "check-install" : "copy-install"}
                                  initial={{ opacity: 0, scale: 0.7, rotate: -12 }}
                                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                                  exit={{ opacity: 0, scale: 0.7, rotate: 12 }}
                                  transition={{ duration: 0.22, ease }}
                                  className="inline-flex"
                                >
                                  {copiedInstall ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                                </motion.span>
                              </AnimatePresence>
                            </motion.button>
                          </div>
                        </div>
                        <code className="block whitespace-nowrap font-mono text-sm text-stone-300 sm:text-[15px]">
                          {INSTALL_COMMAND}
                        </code>
                      </div>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="windows"
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -12 }}
                      transition={{ duration: 0.25, ease }}
                      className="space-y-4 text-left"
                    >
                      <div>
                        <p className="text-xs uppercase tracking-[0.24em] text-stone-500">
                          Windows support
                        </p>
                        <div className="mt-3 flex flex-wrap gap-2">
                          <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs font-medium text-stone-300">
                            Work in progress
                          </span>
                          <span className="rounded-full border border-[#d8c6ff]/25 bg-[#d8c6ff]/10 px-3 py-1 text-xs font-medium text-[#e6dbff]">
                            Manual workaround available
                          </span>
                        </div>
                      </div>

                      <div className="rounded-[1rem] border border-white/6 bg-black/40 p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
                        <p className="text-sm leading-7 text-stone-300">
                          Native Windows install is still being worked on. Meanwhile, you can check
                          the{" "}
                          <Link
                            href="https://github.com/kaizakin/kinctx/releases/tag/v1.0.0"
                            target="_blank"
                            rel="noreferrer"
                            className="font-medium text-[#d8c6ff] underline decoration-white/20 underline-offset-4 transition-colors hover:text-white"
                          >
                            Releases section
                          </Link>
                          , download the binary, extract it, and place the executable somewhere on
                          your <code className="font-mono text-stone-100">PATH</code>.
                        </p>
                      </div>

                      <div className="rounded-[1rem] border border-white/6 bg-white/[0.03] p-4">
                        <p className="text-xs uppercase tracking-[0.24em] text-stone-500">
                          Temporary path
                        </p>
                        <ol className="mt-3 space-y-2 text-sm leading-7 text-stone-400">
                          <li>1. Open the latest release and download the Windows binary.</li>
                          <li>2. Extract it to a folder you control.</li>
                          <li>3. Add that folder to your system <code className="font-mono text-stone-200">PATH</code>.</li>
                          <li>4. Run <code className="font-mono text-stone-200">kin init</code> to create the database.</li>
                        </ol>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
