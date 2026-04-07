import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import type { BlogPost } from "@/types/blog";
import { IconCalendar, IconClock, IconUser } from "@tabler/icons-react";
import { getAuthorAvatar } from "@/lib/authors";

interface PostCardProps {
  post: BlogPost;
  className?: string;
}

export function PostCard({ post, className }: PostCardProps) {
  const { frontmatter, slug, readingTime } = post;

  return (
    <Link
      href={`/blog/${slug}`}
      className={cn(
        "group relative block bg-neutral-900 border border-neutral-800 hover:border-neutral-700 rounded-xl p-5 transition-all duration-200 hover:bg-neutral-900/80 hover:shadow-lg hover:shadow-black/20 cursor-pointer",
        className
      )}
    >
      {/* Category */}
      {frontmatter.category && (
        <span className="text-xs px-2.5 py-0.5 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20 font-medium mb-3 inline-block">
          {frontmatter.category}
        </span>
      )}

      {/* Title */}
      <h3 className="text-white font-semibold text-lg leading-snug mb-2 group-hover:text-blue-300 transition-colors duration-200 line-clamp-2">
        {frontmatter.title}
      </h3>

      {/* Excerpt */}
      <p className="text-neutral-400 text-sm leading-relaxed mb-4 line-clamp-3">
        {frontmatter.excerpt || frontmatter.description}
      </p>

      {/* Tags */}
      {frontmatter.tags.length > 0 && (
        <div className="flex flex-wrap gap-1.5 mb-4">
          {frontmatter.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="text-xs px-2 py-0.5 rounded-md bg-neutral-800 text-neutral-400 border border-neutral-700"
            >
              #{tag}
            </span>
          ))}
          {frontmatter.tags.length > 3 && (
            <span className="text-xs px-2 py-0.5 rounded-md bg-neutral-800 text-neutral-500">
              +{frontmatter.tags.length - 3}
            </span>
          )}
        </div>
      )}

      {/* Meta row */}
      <div className="flex items-center gap-4 text-xs text-neutral-500 pt-4 border-t border-neutral-800">
        <span className="flex items-center gap-1.5">
          {getAuthorAvatar(frontmatter.author) ? (
            <Image
              src={getAuthorAvatar(frontmatter.author)!}
              alt={frontmatter.author}
              width={18}
              height={18}
              className="rounded-full object-cover"
            />
          ) : (
            <IconUser size={13} className="text-neutral-500" />
          )}
          {frontmatter.author}
        </span>
        <span className="flex items-center gap-1.5">
          <IconCalendar size={13} className="text-neutral-500" />
          {new Date(frontmatter.date).toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
            year: "numeric",
          })}
        </span>
        <span className="flex items-center gap-1.5">
          <IconClock size={13} className="text-neutral-500" />
          {readingTime} min read
        </span>
      </div>
    </Link>
  );
}
