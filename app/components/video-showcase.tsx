"use client";

import { motion } from "framer-motion";

const SAMPLE_VIDEO_URL =
  "https://res.cloudinary.com/dzflkog8z/video/upload/f_auto,q_auto,vc_auto/v1773579348/kinctx_lmptvp.mp4";
const SAMPLE_POSTER_URL =
  "https://res.cloudinary.com/dzflkog8z/video/upload/so_0,f_auto,q_auto/v1773579348/kinctx_lmptvp.jpg";

export default function VideoShowcase() {
  return (
    <section className="py-8 sm:py-12">
      <motion.div
        initial={{ opacity: 0, y: 48 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="relative overflow-hidden rounded-[2.4rem] border border-black/10 bg-[#161512] px-5 py-10 text-center shadow-[0_40px_120px_rgba(22,21,18,0.2)] sm:px-8 sm:py-14 md:px-12"
      >
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(140,97,255,0.22),transparent_28%),radial-gradient(circle_at_80%_82%,rgba(173,238,217,0.2),transparent_26%),linear-gradient(180deg,rgba(255,255,255,0.04),transparent_38%)]" />
        <div className="pointer-events-none absolute inset-0 opacity-40 [mask-image:radial-gradient(circle_at_center,#000_45%,transparent_85%)] bg-[linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:32px_32px]" />

        <div className="relative mx-auto max-w-3xl">
          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ delay: 0.08, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="text-4xl font-semibold tracking-tight text-[#a987ff] sm:text-5xl"
          >
            See kinctx in action
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ delay: 0.16, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-stone-400"
          >
            A quick look at how kinctx helps you save, search, and replay the shell knowledge
            you actually use.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 24 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ delay: 0.22, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto mt-10 max-w-6xl"
        >
          <div className="relative overflow-hidden rounded-[2rem] bg-[#141310]/60 p-2 sm:p-3">
            <div className="relative overflow-hidden rounded-[1.55rem] bg-black/45 shadow-[0_24px_80px_rgba(0,0,0,0.28)]">
              <video
                className="aspect-video w-full object-cover"
                src={SAMPLE_VIDEO_URL}
                poster={SAMPLE_POSTER_URL}
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
              />
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
