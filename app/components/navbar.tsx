"use client";

import Image from "next/image";
import Link from "next/link";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useState } from "react";
import GithubRepoBadge from "./github-repo-badge";

type NavbarProps = {
  owner: string;
  repo: string;
};

export default function Navbar({ owner, repo }: NavbarProps) {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const smoothScrollY = useSpring(scrollY, {
    stiffness: 170,
    damping: 26,
    mass: 0.32,
  });

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 20);
  });

  const navWidth = useTransform(
    smoothScrollY,
    [0, 180],
    ["min(1080px, calc(100vw - 1.25rem))", "min(860px, calc(100vw - 2rem))"],
  );
  const navPadding = useTransform(smoothScrollY, [0, 180], [14, 8]);
  const navRadius = useTransform(smoothScrollY, [0, 180], [26, 18]);
  const navY = useTransform(smoothScrollY, [0, 180], [16, 8]);
  const navBorder = useTransform(
    smoothScrollY,
    [0, 180],
    ["rgba(17, 17, 17, 0.1)", "rgba(17, 17, 17, 0.16)"],
  );
  const navShadow = useTransform(
    smoothScrollY,
    [0, 180],
    [
      "0 20px 60px rgba(32, 29, 25, 0.12)",
      "0 12px 34px rgba(32, 29, 25, 0.16)",
    ],
  );

  return (
    <div className="fixed inset-x-0 top-0 z-50 flex justify-center px-3 sm:px-4">
      <motion.nav
        style={{
          width: navWidth,
          paddingTop: navPadding,
          paddingBottom: navPadding,
          y: navY,
          borderRadius: navRadius,
          borderColor: navBorder,
          boxShadow: navShadow,
        }}
        className="relative overflow-hidden border bg-[#201d19]/88 px-3.5 backdrop-blur-xl sm:px-4.5"
      >
        <motion.div
          animate={{
            opacity: isScrolled ? 0.88 : 1,
            scale: isScrolled ? 0.99 : 1,
          }}
          transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.14),transparent_48%)]"
        />

        <div className="relative flex items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-3">
            <motion.div
              animate={{
                width: isScrolled ? 38 : 44,
                height: isScrolled ? 38 : 44,
                borderRadius: isScrolled ? 14 : 18,
              }}
              transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
              className="flex items-center justify-center border border-white/12 bg-white/[0.08] p-2 shadow-inner shadow-white/5"
            >
              <Image
                src="/kinctx.png"
                alt="kinctx logo"
                width={40}
                height={40}
                className="h-full w-full object-contain"
                priority
              />
            </motion.div>
            <div className="hidden sm:block">
              <motion.p
                animate={{
                  fontSize: isScrolled ? "1rem" : "1.08rem",
                }}
                transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                className="font-semibold tracking-tight text-white"
              >
                kinctx
              </motion.p>
              <motion.p
                animate={{
                  opacity: isScrolled ? 0.5 : 0.58,
                  y: isScrolled ? -1 : 0,
                }}
                transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                className="text-xs text-white/58"
              >
                Second brain for the terminal
              </motion.p>
            </div>
          </Link>

          <div className="flex items-center gap-2 sm:gap-3">
            <GithubRepoBadge owner={owner} repo={repo} />
            <Link
              href="#features"
              className="inline-flex h-9 items-center gap-1.5 rounded-xl bg-[#8c61ff] px-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#7c54eb] hover:shadow-[0_10px_24px_rgba(140,97,255,0.28)]"
            >
              <span className="hidden sm:inline">Get Started</span>
              <span className="sm:hidden">Start</span>
              <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </motion.nav>
    </div>
  );
}
