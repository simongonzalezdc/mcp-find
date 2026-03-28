import Link from "next/link";
import { cn } from "@/lib/utils";
import type { ServerListItem } from "@mcpfind/shared";
import { CategoryBadge } from "./category-badge";
import { formatNumber } from "./stat-badge";
import {
  IconStar,
  IconDownload,
  IconBrandGithub,
  IconShieldCheck,
  IconSparkles,
} from "@tabler/icons-react";

const languageColors: Record<string, string> = {
  TypeScript: "text-blue-400 bg-blue-400/10 border-blue-400/20",
  Python: "text-yellow-400 bg-yellow-400/10 border-yellow-400/20",
  Go: "text-cyan-400 bg-cyan-400/10 border-cyan-400/20",
  Rust: "text-orange-400 bg-orange-400/10 border-orange-400/20",
  JavaScript: "text-yellow-300 bg-yellow-300/10 border-yellow-300/20",
};

// package_type maps to the "transport" concept in the original design
const transportColors: Record<string, string> = {
  npm: "text-green-400 bg-green-400/10 border-green-400/20",
  pypi: "text-purple-400 bg-purple-400/10 border-purple-400/20",
  docker: "text-blue-400 bg-blue-400/10 border-blue-400/20",
};

interface ServerCardProps {
  server: ServerListItem;
  className?: string;
}

export function ServerCard({ server, className }: ServerCardProps) {
  const tags = server.registry_tags ?? [];
  const language = server.github_language;
  const transport = server.package_type;
  // Derive author display from github_url, e.g. "org/repo"
  const author = server.github_url
    ? server.github_url.replace("https://github.com/", "")
    : server.package_name ?? null;

  return (
    <div
      className={cn(
        "group relative bg-neutral-900 border border-neutral-800 hover:border-neutral-700 rounded-xl p-5 transition-all duration-200 hover:bg-neutral-900/80 hover:shadow-lg hover:shadow-black/20",
        className
      )}
    >
      {/* Status badges — absolute top-right */}
      <div className="absolute top-4 right-4 flex gap-1.5">
        {server.is_official && (
          <span className="flex items-center gap-1 text-xs px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20 font-medium">
            <IconShieldCheck size={11} />
            Official
          </span>
        )}
        {server.featured && (
          <span className="flex items-center gap-1 text-xs px-2 py-0.5 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20 font-medium">
            <IconSparkles size={11} />
            Featured
          </span>
        )}
      </div>

      {/* Header */}
      <div className="pr-24 mb-3">
        <div className="flex items-center gap-2 mb-1">
          <h3 className="text-white font-semibold text-base group-hover:text-blue-300 transition-colors duration-200">
            {server.name}
          </h3>
        </div>
        {author && (
          <p className="text-neutral-500 text-xs flex items-center gap-1">
            <IconBrandGithub size={12} />
            {author}
          </p>
        )}
      </div>

      {/* Description */}
      <p className="text-neutral-400 text-sm leading-relaxed mb-4 line-clamp-2">
        {server.description}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-1.5 mb-4">
        {tags.slice(0, 3).map((tag: string) => (
          <span
            key={tag}
            className="text-xs px-2 py-0.5 rounded-md bg-neutral-800 text-neutral-400 border border-neutral-700"
          >
            #{tag}
          </span>
        ))}
        {tags.length > 3 && (
          <span className="text-xs px-2 py-0.5 rounded-md bg-neutral-800 text-neutral-500">
            +{tags.length - 3}
          </span>
        )}
      </div>

      {/* Meta row */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          {language && (
            <span
              className={cn(
                "text-xs px-2 py-0.5 rounded-md border font-mono",
                languageColors[language] ||
                  "text-neutral-400 bg-neutral-800 border-neutral-700"
              )}
            >
              {language}
            </span>
          )}
          {transport && (
            <span
              className={cn(
                "text-xs px-2 py-0.5 rounded-md border",
                transportColors[transport] ||
                  "text-neutral-400 bg-neutral-800 border-neutral-700"
              )}
            >
              {transport}
            </span>
          )}
          <CategoryBadge category={server.category} />
        </div>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between mt-4 pt-4 border-t border-neutral-800">
        <div className="flex items-center gap-4 text-xs text-neutral-500">
          <span className="flex items-center gap-1.5">
            <IconStar size={13} className="text-amber-400" />
            <span className="font-medium text-neutral-300">
              {formatNumber(server.github_stars)}
            </span>
          </span>
          {server.npm_weekly_downloads > 0 && (
            <span className="flex items-center gap-1.5">
              <IconDownload size={13} className="text-green-400" />
              <span className="font-medium text-neutral-300">
                {formatNumber(server.npm_weekly_downloads)}
              </span>
              <span>/wk</span>
            </span>
          )}
        </div>
        <Link
          href={`/servers/${server.slug}`}
          className="text-xs text-blue-400 hover:text-blue-300 font-medium transition-colors duration-200 group-hover:underline"
        >
          View Details →
        </Link>
      </div>
    </div>
  );
}
