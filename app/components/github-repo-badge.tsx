"use client";

import Link from "next/link";
import { Star } from "lucide-react";
import { useEffect, useState } from "react";
import GithubIcon from "../icons/github-icon";

type GithubRepoBadgeProps = {
  owner: string;
  repo: string;
};

const formatStars = (value: number | null) => {
  if (value === null) {
    return "--";
  }

  return new Intl.NumberFormat("en", {
    notation: "compact",
    maximumFractionDigits: 1,
  }).format(value);
};

export default function GithubRepoBadge({
  owner,
  repo,
}: GithubRepoBadgeProps) {
  const [stars, setStars] = useState<number | null>(null);

  useEffect(() => {
    const controller = new AbortController();

    const loadStars = async () => {
      try {
        const response = await fetch(`https://api.github.com/repos/${owner}/${repo}`, {
          signal: controller.signal,
          next: { revalidate: 3600 } // Revalidate at most once per hour
        });

        if (!response.ok) {
          return;
        }

        const data = (await response.json()) as { stargazers_count?: number };

        if (typeof data.stargazers_count === "number") {
          setStars(data.stargazers_count);
        }
      } catch {
        // Keep the badge usable even if GitHub rate-limits or the request fails.
      }
    };

    loadStars();

    return () => controller.abort();
  }, [owner, repo]);

  return (
    <Link
      href={`https://github.com/${owner}/${repo}`}
      target="_blank"
      rel="noreferrer"
      className="inline-flex h-9 items-center gap-2 rounded-xl border border-white/12 bg-white/[0.06] px-3 text-sm font-medium text-white/92 transition-all duration-300 hover:border-white/20 hover:bg-white/[0.1]"
      aria-label={`Open ${owner}/${repo} on GitHub`}
    >
      <span className="inline-flex h-6 w-6 items-center justify-center rounded-full border border-white/12 bg-black/20">
        <GithubIcon size={14} strokeWidth={2.1} className="text-white" />
      </span>
      <span className="text-white/55">|</span>
      <span className="inline-flex items-center gap-1.5 text-white/85">
        <span>{formatStars(stars)}</span>
        <Star className="h-3 w-3" />
      </span>
    </Link>
  );
}
