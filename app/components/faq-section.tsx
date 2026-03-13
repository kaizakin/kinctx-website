"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import { useState } from "react";

const faqItems = [
  {
    question: "Where are my snippets stored?",
    answer:
      "kin keeps your snippets in a local SQLite database on your machine. A typical path is ~/.local/share/kin/snippets.db, which gives you fast lookups without pushing your command history to a hosted service.",
    accent: "#adeed9",
  },
  {
    question: "Does it require fzf?",
    answer:
      "Yes. kin leans on fzf for the interactive search experience, so you get the fast fuzzy finder flow terminal users already love instead of a custom picker that feels foreign.",
    accent: "#a987ff",
  },
  {
    question: "How do I handle environment variables?",
    answer:
      "Use placeholders inside saved snippets and let kin resolve them when you run the command. That keeps secrets out of the stored text while still letting templates like {{API_KEY}} or {{DATABASE_URL}} drop into place at execution time.",
    accent: "#f4d28d",
  },
] as const;

const ease = [0.22, 1, 0.36, 1] as const;

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="py-12 sm:py-16">
      <div className="grid gap-8 rounded-[2.25rem] border border-black/8 bg-[#f4efe8]/80 p-6 shadow-[0_30px_80px_rgba(0,0,0,0.06)] md:grid-cols-[0.9fr_1.1fr] md:p-10">
        <div className="space-y-5">
          <p className="text-sm font-medium uppercase tracking-[0.24em] text-neutral-500">FAQ</p>
          <h2 className="text-3xl font-semibold tracking-tight text-neutral-900 sm:text-4xl">
            A few things people ask before making kin part of their workflow.
          </h2>
          <p className="max-w-xl text-lg leading-8 text-neutral-600">
            The section stays minimal, but the motion keeps it feeling alive. Open any question
            to see the answer expand into place.
          </p>
        </div>

        <div className="relative overflow-hidden rounded-[2rem] border border-black/8 bg-[#191714] p-3 shadow-[0_24px_80px_rgba(0,0,0,0.16)] sm:p-4">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(169,135,255,0.12),transparent_28%),radial-gradient(circle_at_80%_82%,rgba(173,238,217,0.16),transparent_26%),linear-gradient(180deg,rgba(255,255,255,0.04),transparent_34%)]" />

          <div className="relative space-y-3">
            {faqItems.map((item, index) => {
              const isActive = index === activeIndex;

              return (
                <motion.div
                  key={item.question}
                  layout
                  transition={{ duration: 0.45, ease }}
                  className="overflow-hidden rounded-[1.5rem] border border-white/8 bg-white/[0.03]"
                >
                  <button
                    type="button"
                    onClick={() => setActiveIndex(index)}
                    className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left"
                  >
                    <div>
                      <motion.p
                        animate={{
                          color: isActive ? "#ffffff" : "rgba(255,255,255,0.72)",
                        }}
                        transition={{ duration: 0.3, ease }}
                        className="text-lg font-medium tracking-tight"
                      >
                        {item.question}
                      </motion.p>
                    </div>

                    <motion.span
                      animate={{
                        rotate: isActive ? 45 : 0,
                        backgroundColor: isActive ? `${item.accent}22` : "rgba(255,255,255,0.04)",
                        borderColor: isActive ? `${item.accent}55` : "rgba(255,255,255,0.08)",
                        color: isActive ? item.accent : "rgba(255,255,255,0.75)",
                      }}
                      transition={{ duration: 0.35, ease }}
                      className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border"
                    >
                      <Plus className="h-4 w-4" />
                    </motion.span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isActive ? (
                      <motion.div
                        key="answer"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.42, ease }}
                        className="overflow-hidden"
                      >
                        <motion.div
                          initial={{ y: -8, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          exit={{ y: -8, opacity: 0 }}
                          transition={{ duration: 0.32, ease }}
                          className="relative px-5 pb-5"
                        >
                          <div
                            className="absolute inset-x-5 top-0 h-px"
                            style={{
                              background: `linear-gradient(90deg, transparent, ${item.accent}66, transparent)`,
                            }}
                          />
                          <p className="pt-5 text-sm leading-7 text-stone-400">{item.answer}</p>
                        </motion.div>
                      </motion.div>
                    ) : null}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
