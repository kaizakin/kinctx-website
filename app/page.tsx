import BinaryCallout from "./components/binary-callout";
import FAQSection from "./components/faq-section";
import HeroSection from "./components/hero-section";
import InstallCTA from "./components/install-cta";
import Navbar from "./components/navbar";
import StatementPanel from "./components/statement-panel";
import VideoShowcase from "./components/video-showcase";
import WorkflowArt from "./components/workflow-art";

const FEATURED_REPO = {
  owner: "kaizakin",
  repo: "kinctx",
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

          <main className="flex-1 w-full max-w-[1200px] mx-auto px-6 pb-16 pt-28 sm:px-10 sm:pt-32 md:px-16 md:pt-36">
            <HeroSection />
            <VideoShowcase />

            <section id="features" className="grid gap-6 py-10 md:grid-cols-3 md:py-16">
              {[
                {
                  title: "Capture in seconds",
                  text: "Turn history into templates. Save complex commands using ${VAR:=default}, inspired by shell parameter expansion so you don’t have to learn a new syntax.",
                },
                {
                  title: "Recall by intent",
                  text: "Search fuzzily with the words you remember, not just the exact flags you typed months ago.",
                },
                {
                  title: "Execute with confidence",
                  text: "Seamless Execution. Populate placeholders at runtime and let Kin bridge the gap between thought and terminal.",
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

            <BinaryCallout />

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

              <div className="md:col-span-2">
                <WorkflowArt />
              </div>
            </section>

            <FAQSection />
            <InstallCTA />
          </main>
        </div>
      </div>
          <StatementPanel />
    </div>
  );
}
