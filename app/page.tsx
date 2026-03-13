import HeroSection from "./components/hero-section";
import Navbar from "./components/navbar";
import VideoShowcase from "./components/video-showcase";

const FEATURED_REPO = {
  owner: "vercel",
  repo: "next.js",
};

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#faf7f3] text-neutral-900 overflow-x-hidden selection:bg-[#ADEED9]">
      <div className="mx-auto max-w-[1400px] relative min-h-screen bg-[#faf7f3] shadow-sm ring-1 ring-black/5">

        <div
          className="absolute top-0 bottom-0 left-0 w-3 md:w-4 z-20
            border-r border-neutral-200/60
            bg-[image:repeating-linear-gradient(45deg,transparent,transparent_5px,rgba(0,0,0,0.16)_5px,rgba(0,0,0,0.16)_6px)]
          "
        />

        <div
          className="absolute top-0 bottom-0 right-0 w-3 md:w-4 z-20
            border-l border-neutral-200/60
            bg-[image:repeating-linear-gradient(-45deg,transparent,transparent_5px,rgba(0,0,0,0.16)_5px,rgba(0,0,0,0.16)_6px)]
          "
        />

        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

        <div className="relative z-10 flex flex-col min-h-screen">
          <Navbar owner={FEATURED_REPO.owner} repo={FEATURED_REPO.repo} />

          <main className="flex-1 w-full max-w-[1200px] mx-auto px-6 pb-16 pt-36 sm:px-10 sm:pt-40 md:px-16 md:pt-44">
            <HeroSection />
            <VideoShowcase />

            <section id="features" className="grid gap-6 py-10 md:grid-cols-3 md:py-16">
              {[
                {
                  title: "Capture in seconds",
                  text: "Save commands the moment they prove useful, with room for context and plain-language notes.",
                },
                {
                  title: "Recall by intent",
                  text: "Search fuzzily with the words you remember, not just the exact flags you typed months ago.",
                },
                {
                  title: "Execute with confidence",
                  text: "Bring snippets back into the terminal already explained, organized, and ready to run.",
                },
              ].map((item) => (
                <article
                  key={item.title}
                  className="rounded-[2rem] border border-black/8 bg-white/70 p-7 shadow-[0_24px_60px_rgba(0,0,0,0.05)] backdrop-blur-sm"
                >
                  <div className="mb-5 h-10 w-10 rounded-2xl bg-[#adeed9]/70" />
                  <h2 className="text-2xl font-semibold tracking-tight text-neutral-900">
                    {item.title}
                  </h2>
                  <p className="mt-3 text-base leading-7 text-neutral-600">{item.text}</p>
                </article>
              ))}
            </section>

            <section
              id="workflow"
              className="mt-4 grid gap-8 rounded-[2.25rem] border border-black/8 bg-[#f4efe8]/80 p-6 shadow-[0_30px_80px_rgba(0,0,0,0.06)] md:grid-cols-[1.1fr_0.9fr] md:p-10"
            >
              <div className="space-y-5">
                <p className="text-sm font-medium uppercase tracking-[0.24em] text-neutral-500">
                  Daily Workflow
                </p>
                <h2 className="text-3xl font-semibold tracking-tight text-neutral-900 sm:text-4xl">
                  A lightweight system that feels native to terminal work.
                </h2>
                <p className="max-w-2xl text-lg leading-8 text-neutral-600">
                  The interface stays quiet while the information architecture does the heavy
                  lifting. You keep your focus, and the knowledge stays reusable.
                </p>
              </div>

              <div className="rounded-[2rem] border border-black/8 bg-[#1f1c18] p-5 text-sm text-stone-200 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]">
                <div className="mb-4 flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#ff6c5f]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#f5c451]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#63c655]" />
                </div>
                <div className="space-y-3 font-mono text-[13px] leading-6 text-stone-300">
                  <p>$ kin add &quot;kubectl logs deployment/api -f&quot; --tag debugging</p>
                  <p className="text-stone-500">Saved with note: stream API pod logs in real time</p>
                  <p>$ kin find api logs</p>
                  <p className="text-[#adeed9]">1. kubectl logs deployment/api -f</p>
                  <p>$ kin run 1</p>
                </div>
              </div>
            </section>
          </main>

          <footer className="py-8 text-center text-sm text-neutral-400 relative z-20">
            <p>© {new Date().getFullYear()} kinctx. All rights reserved.</p>
          </footer>
        </div>
      </div>
    </div>
  );
}
