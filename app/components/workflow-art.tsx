"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const steps = [
  {
    id: "save",
    label: "Save commands",
    accent: "#adeed9",
    command: 'kin add "kubectl logs deployment/api -f" --tag ops',
    subtext: "Stored with tags, notes, and the original shell snippet.",
    detail: "New command captured",
    preview: [
      "title: api logs tail",
      "tags: ops, debugging",
      "shell: kubectl logs deployment/api -f",
    ],
  },
  {
    id: "find",
    label: "Find instantly",
    accent: "#9f86ff",
    command: "kin find api logs",
    subtext: "Fuzzy search pulls the right snippet back from memory in milliseconds.",
    detail: "Best match: api logs tail",
    preview: [
      "1. api logs tail",
      "2. pod logs since 10m",
      "3. restart deployment watcher",
    ],
  },
  {
    id: "defaults",
    label: "Tune defaults",
    accent: "#f4d28d",
    command: "kin defaults set editor nvim",
    subtext: "Personal defaults keep editing and execution friction low every day.",
    detail: "Default editor updated",
    preview: [
      "editor: nvim",
      "shell: zsh",
      "preview: expanded",
    ],
  },
  {
    id: "edit",
    label: "Refine entries",
    accent: "#8ed1ff",
    command: 'kin edit api-logs-tail --note "use during rolling deploys"',
    subtext: "Commands stay useful because context and metadata evolve with your workflow.",
    detail: "Note updated successfully",
    preview: [
      "note: use during rolling deploys",
      "tag: production",
      "updated: just now",
    ],
  },
] as const;

const ease = [0.22, 1, 0.36, 1] as const;

export default function WorkflowArt() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % steps.length);
    }, 2600);

    return () => window.clearInterval(timer);
  }, []);

  const activeStep = steps[activeIndex];
  const pulseY = `${14 + activeIndex * 24}%`;

  return (
    <div className="relative overflow-hidden rounded-[2rem] border border-black/8 bg-[#1b1916] p-5 text-stone-100 shadow-[0_30px_80px_rgba(0,0,0,0.18)]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(173,238,217,0.12),transparent_34%),radial-gradient(circle_at_82%_22%,rgba(159,134,255,0.18),transparent_24%),linear-gradient(180deg,rgba(255,255,255,0.05),transparent_24%)]" />
      <div className="pointer-events-none absolute inset-0 opacity-25 [mask-image:radial-gradient(circle_at_center,#000_40%,transparent_88%)] bg-[linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:24px_24px]" />

      <div className="relative mb-5 flex items-center gap-2">
        <span className="h-2.5 w-2.5 rounded-full bg-[#ff6c5f]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#f5c451]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#63c655]" />
        <span className="ml-3 text-xs uppercase tracking-[0.28em] text-stone-500">
          kin workflow
        </span>
      </div>

      <div className="grid gap-5 lg:grid-cols-[0.34fr_1fr]">
        <div className="relative rounded-[1.6rem] border border-white/8 bg-black/20 p-4">
          <div className="absolute left-[23px] top-7 bottom-7 w-px bg-white/8" />
          <motion.div
            animate={{ top: pulseY, boxShadow: `0 0 0 8px ${activeStep.accent}10, 0 0 30px ${activeStep.accent}55` }}
            transition={{ duration: 0.55, ease }}
            className="absolute left-[15px] h-4 w-4 rounded-full border border-white/30"
            style={{ backgroundColor: activeStep.accent }}
          />

          <div className="space-y-3">
            {steps.map((step, index) => {
              const active = index === activeIndex;

              return (
                <motion.div
                  key={step.id}
                  animate={{
                    opacity: active ? 1 : 0.46,
                    x: active ? 8 : 0,
                    borderColor: active ? `${step.accent}55` : "rgba(255,255,255,0.06)",
                    backgroundColor: active ? "rgba(255,255,255,0.06)" : "rgba(255,255,255,0.02)",
                  }}
                  transition={{ duration: 0.45, ease }}
                  className="ml-6 rounded-2xl border px-4 py-3"
                >
                  <p className="text-sm font-medium text-white">{step.label}</p>
                  <p className="mt-1 text-xs leading-5 text-stone-400">{step.detail}</p>
                </motion.div>
              );
            })}
          </div>
        </div>

        <div className="relative overflow-hidden rounded-[1.75rem] border border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.01))]">
          <motion.div
            key={activeStep.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.45, ease }}
            className="pointer-events-none absolute inset-0"
            style={{
              background: `radial-gradient(circle at 76% 18%, ${activeStep.accent}22, transparent 22%), radial-gradient(circle at 30% 84%, ${activeStep.accent}18, transparent 28%)`,
            }}
          />

          <div className="relative border-b border-white/8 px-5 py-4 sm:px-6">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <p className="text-xs uppercase tracking-[0.24em] text-stone-500">Sequence</p>
                <p className="mt-2 text-lg font-medium text-white">{activeStep.label}</p>
              </div>
              <motion.div
                key={activeStep.id}
                initial={{ opacity: 0, scale: 0.94 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, ease }}
                className="rounded-full border px-3 py-1 text-xs font-medium"
                style={{
                  borderColor: `${activeStep.accent}55`,
                  color: activeStep.accent,
                  backgroundColor: `${activeStep.accent}12`,
                }}
              >
                {activeStep.detail}
              </motion.div>
            </div>
          </div>

          <div className="relative grid gap-4 p-4 sm:p-6 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="rounded-[1.5rem] border border-white/8 bg-black/26 p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]">
              <div className="mb-4 flex items-center justify-between">
                <p className="text-xs uppercase tracking-[0.24em] text-stone-500">Terminal</p>
                <motion.div
                  animate={{
                    opacity: [0.45, 1, 0.45],
                    scale: [0.96, 1.08, 0.96],
                  }}
                  transition={{ duration: 1.7, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                  className="h-2.5 w-2.5 rounded-full"
                  style={{ backgroundColor: activeStep.accent }}
                />
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStep.id}
                  initial={{ opacity: 0, y: 18, filter: "blur(8px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, y: -18, filter: "blur(6px)" }}
                  transition={{ duration: 0.45, ease }}
                  className="space-y-3 font-mono text-[13px] leading-6 text-stone-200"
                >
                  <div className="flex items-start gap-3">
                    <span className="text-stone-500">$</span>
                    <span>{activeStep.command}</span>
                  </div>
                  <motion.div
                    initial={{ scaleX: 0.2, opacity: 0.3 }}
                    animate={{ scaleX: 1, opacity: 1 }}
                    transition={{ duration: 0.55, ease }}
                    className="h-px origin-left bg-white/10"
                  />
                  <p className="text-stone-400">{activeStep.subtext}</p>
                  <div className="rounded-2xl border border-white/6 bg-white/[0.03] p-3">
                    {activeStep.preview.map((line, index) => (
                      <motion.div
                        key={`${activeStep.id}-${line}`}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.08 * index, duration: 0.35, ease }}
                        className="flex items-center gap-3"
                      >
                        <span className="text-stone-600">{String(index + 1).padStart(2, "0")}</span>
                        <span className="text-stone-300">{line}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="grid gap-4">
              <div className="rounded-[1.5rem] border border-white/8 bg-white/[0.03] p-4">
                <p className="text-xs uppercase tracking-[0.24em] text-stone-500">Memory pulse</p>
                <div className="relative mt-5 flex h-24 items-center justify-center overflow-hidden rounded-[1.25rem] border border-white/6 bg-black/20">
                  <motion.div
                    animate={{
                      scale: [0.7, 1.8, 2.4],
                      opacity: [0.55, 0.18, 0],
                    }}
                    transition={{ duration: 1.8, repeat: Number.POSITIVE_INFINITY, ease: "easeOut" }}
                    className="absolute h-16 w-16 rounded-full border"
                    style={{ borderColor: `${activeStep.accent}88` }}
                  />
                  <motion.div
                    animate={{
                      scale: [0.85, 1.15, 0.85],
                      boxShadow: [
                        `0 0 0 0 ${activeStep.accent}00`,
                        `0 0 0 16px ${activeStep.accent}14`,
                        `0 0 0 0 ${activeStep.accent}00`,
                      ],
                    }}
                    transition={{ duration: 1.8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                    className="relative h-10 w-10 rounded-full"
                    style={{ backgroundColor: activeStep.accent }}
                  />
                </div>
              </div>

              <div className="rounded-[1.5rem] border border-white/8 bg-white/[0.03] p-4">
                <p className="text-xs uppercase tracking-[0.24em] text-stone-500">Flow summary</p>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeStep.id}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -16 }}
                    transition={{ duration: 0.4, ease }}
                    className="mt-4 space-y-3"
                  >
                    <p className="text-lg font-medium text-white">{activeStep.label}</p>
                    <p className="text-sm leading-7 text-stone-400">{activeStep.subtext}</p>
                    <div className="flex flex-wrap gap-2 pt-1">
                      {["fast", "searchable", "reusable"].map((tag) => (
                        <span
                          key={`${activeStep.id}-${tag}`}
                          className="rounded-full border border-white/8 bg-black/20 px-3 py-1 text-xs text-stone-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
