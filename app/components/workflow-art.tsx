"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const ease = [0.22, 1, 0.36, 1] as const;

const steps = [
  {
    id: "init",
    index: "1.",
    title: "Initialize once",
    body: "Run kin init first to create the local SQLite database. Everything else depends on that store existing.",
    accent: "#e7c4a8",
    pill: "Required first step",
  },
  {
    id: "add",
    index: "2.",
    title: "Add commands your way",
    body: "Pipe in a one-liner or open $EDITOR for longer snippets, multi-line commands, and placeholders.",
    accent: "#adeed9",
    pill: "Pipe or editor",
  },
  {
    id: "search",
    index: "3.",
    title: "Search and run",
    body: "kin search opens fzf. Pick a snippet, fill placeholders if they exist, or run immediately if the command is static.",
    accent: "#d8c6ff",
    pill: "fzf workflow",
  },
  {
    id: "manage",
    index: "4.",
    title: "List and remove",
    body: "Use kin list to inspect saved commands and kin rm for multi-select cleanup through an fzf screen.",
    accent: "#f1d69c",
    pill: "Maintenance",
  },
] as const;

const commandViews = {
  init: {
    title: "Create the database",
    command: "kin init",
    lines: [
      "creating SQLite database...",
      "store initialized successfully",
      "you can now add, list, search, and remove commands",
    ],
    footer: "Run this once before using the rest of kin.",
  },
  add: {
    title: "Save commands",
    command: "echo 'docker logs -f ${CONTAINER:=api}' | kin add",
    lines: [
      "or run: kin add",
      "opens $EDITOR, falls back to nano",
      "best for multi-line snippets and placeholders",
    ],
    footer: "kin stores the text exactly so you can reuse it later.",
  },
  search: {
    title: "Find with fzf",
    command: "kin search",
    lines: [
      "> git checkout ${BRANCH:=main}",
      "  ss -tuln",
      "  kubectl rollout restart deployment/${DEPLOYMENT:=api-server}",
    ],
    footer: "Press Enter on the command you want to execute.",
  },
  manage: {
    title: "Inspect and clean up",
    command: "kin list",
    lines: [
      "registry login      used 14x    created 2026-03-04",
      "git checkout main   used 31x    created 2026-03-06",
      "ss -tuln            used 4x     created 2026-03-07",
    ],
    footer: "Use kin rm to open multi-select fzf deletion.",
  },
} as const;

export default function WorkflowArt() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % steps.length);
    }, 4000);

    return () => window.clearInterval(timer);
  }, []);

  const activeStep = steps[activeIndex];
  const activeCommandView = commandViews[activeStep.id];

  return (
    <section className="relative overflow-hidden rounded-[2rem] border border-white/6 bg-[#151513] text-stone-100 shadow-[0_30px_80px_rgba(0,0,0,0.18)]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.05),transparent_26%),linear-gradient(180deg,rgba(255,255,255,0.02),transparent_24%)]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-20 opacity-30 bg-[radial-gradient(circle,rgba(110,89,140,0.35)_1px,transparent_1.5px)] bg-[size:12px_12px]" />

      <div className="relative border-b border-white/6 px-5 py-6 text-center sm:px-6">
        <h3 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          How kin works
        </h3>
      </div>

      <div className="relative grid xl:grid-cols-[0.92fr_1.08fr]">
        <div className="border-b border-white/6 xl:border-b-0 xl:border-r xl:border-r-white/6">
          {steps.map((step, index) => {
            const isActive = index === activeIndex;

            return (
              <motion.div
                key={step.id}
                animate={{
                  backgroundColor: isActive ? "rgba(255,255,255,0.03)" : "rgba(255,255,255,0)",
                  opacity: isActive ? 1 : 0.62,
                }}
                transition={{ duration: 0.4, ease }}
                className="relative border-b border-white/6 px-5 py-5 last:border-b-0 sm:px-6"
              >
                <motion.div
                  animate={{
                    opacity: isActive ? 1 : 0.22,
                    scaleY: isActive ? 1 : 0.45,
                  }}
                  transition={{ duration: 0.35, ease }}
                  className="absolute left-0 top-0 h-full w-px origin-center"
                  style={{ backgroundColor: step.accent }}
                />

                <p className="text-2xl font-semibold tracking-tight text-white sm:text-[1.7rem]">
                  {step.index} {step.title}
                </p>
                <p className="mt-2 max-w-xl text-base leading-7 text-stone-400">{step.body}</p>
              </motion.div>
            );
          })}
        </div>

        <div className="relative min-h-[360px] overflow-hidden p-4 sm:p-5">
          <div className="pointer-events-none absolute inset-0 opacity-20 bg-[linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:44px_44px]" />
          <motion.div
            key={activeStep.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.45, ease }}
            className="pointer-events-none absolute inset-0"
            style={{
              background: `radial-gradient(circle at 62% 48%, ${activeStep.accent}18, transparent 24%)`,
            }}
          />

          <div className="relative flex h-full items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep.id}
                initial={{ opacity: 0, scale: 0.96, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.98, y: -16 }}
                transition={{ duration: 0.45, ease }}
                className="w-full max-w-[460px] rounded-[1.5rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))] p-3 shadow-[0_20px_60px_rgba(0,0,0,0.22)]"
              >
                <div className="rounded-[1.25rem] border border-white/8 bg-[#12110f] p-3.5 sm:p-4">
                  <div className="mb-3 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="h-2.5 w-2.5 rounded-full bg-[#ff6c5f]" />
                      <span className="h-2.5 w-2.5 rounded-full bg-[#f5c451]" />
                      <span className="h-2.5 w-2.5 rounded-full bg-[#63c655]" />
                    </div>
                    <motion.span
                      initial={{ opacity: 0, scale: 0.94 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.35, ease }}
                      className="rounded-full border px-3 py-1 text-xs font-medium"
                      style={{
                        borderColor: `${activeStep.accent}55`,
                        color: activeStep.accent,
                        backgroundColor: `${activeStep.accent}12`,
                      }}
                    >
                      {activeStep.pill}
                    </motion.span>
                  </div>

                  <div className="space-y-3 font-mono text-[12px] leading-6 text-stone-200 sm:text-[13px]">
                    <div className="rounded-[0.9rem] border border-white/6 bg-white/[0.03] px-3 py-2.5">
                      <p className="mb-2 font-sans text-xs uppercase tracking-[0.2em] text-stone-500">
                        {activeCommandView.title}
                      </p>
                      <div className="flex items-start gap-3">
                        <span className="text-stone-500">$</span>
                        <span className="break-all">{activeCommandView.command}</span>
                      </div>
                    </div>

                    {activeStep.id !== "search" && activeStep.id !== "manage" ? (
                      <div className="rounded-[0.9rem] border border-white/6 bg-black/22 p-3">
                        {activeCommandView.lines.map((line, index) => (
                          <motion.div
                            key={`${activeStep.id}-${line}`}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.1 * index, duration: 0.3, ease }}
                            className="flex items-center gap-3"
                          >
                            <span className="text-stone-600">{String(index + 1).padStart(2, "0")}</span>
                            <span className="text-stone-300">{line}</span>
                          </motion.div>
                        ))}
                      </div>
                    ) : null}

                    {activeStep.id === "search" ? (
                      <div className="space-y-3">
                        <div className="rounded-[0.9rem] border border-white/6 bg-black/22 p-3">
                          {activeCommandView.lines.map((line, index) => (
                            <motion.div
                              key={`${activeStep.id}-${line}`}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.1 * index, duration: 0.3, ease }}
                              className={`flex items-center gap-3 rounded-md px-2 py-1 ${
                                index === 0 ? "bg-white/[0.06]" : ""
                              }`}
                            >
                              <span className="text-stone-600">{String(index + 1).padStart(2, "0")}</span>
                              <span className={index === 0 ? "text-white" : "text-stone-300"}>{line}</span>
                            </motion.div>
                          ))}
                        </div>

                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3, ease }}
                          className="rounded-[0.9rem] border border-white/6 bg-white/[0.03] p-3"
                        >
                          <div className="mb-2 flex items-center justify-between text-stone-300">
                            <span>BRANCH</span>
                            <span className="text-white">main</span>
                          </div>
                          <div className="rounded-md border border-[#d8c6ff]/40 bg-[#d8c6ff]/10 px-3 py-2 text-xs text-[#eadfff]">
                            Placeholder detected. Press Enter to use default, or type a new value.
                          </div>
                        </motion.div>
                      </div>
                    ) : null}

                    {activeStep.id === "manage" ? (
                      <div className="space-y-3">
                        <div className="rounded-[0.9rem] border border-white/6 bg-black/22 p-3">
                          {activeCommandView.lines.map((line, index) => (
                            <motion.div
                              key={`${activeStep.id}-${line}`}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.1 * index, duration: 0.3, ease }}
                              className="flex items-center gap-3"
                            >
                              <span className="text-stone-600">{String(index + 1).padStart(2, "0")}</span>
                              <span className="text-stone-300">{line}</span>
                            </motion.div>
                          ))}
                        </div>

                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3, ease }}
                          className="rounded-[0.9rem] border border-white/6 bg-white/[0.03] p-3"
                        >
                          <p className="mb-2 font-sans text-xs uppercase tracking-[0.2em] text-stone-500">
                            kin rm
                          </p>
                          <div className="space-y-1 text-stone-300">
                            <p>[x] registry login</p>
                            <p>[x] deploy api image</p>
                            <p className="text-stone-500">Use Tab to multi-select, then Enter to delete.</p>
                          </div>
                        </motion.div>
                      </div>
                    ) : null}

                    <p className="text-xs leading-6 text-stone-400 sm:text-sm">
                      {activeCommandView.footer}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
