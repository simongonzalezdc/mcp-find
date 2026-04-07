import Link from "next/link";
import type { BlogPost } from "@/types/blog";
import { IconArrowLeft, IconCalendar, IconClock, IconUser } from "@tabler/icons-react";

interface PostHeaderProps {
  post: BlogPost;
}

export function PostHeader({ post }: PostHeaderProps) {
  const { frontmatter, readingTime } = post;

  return (
    <div className="border-b border-neutral-900 bg-neutral-950/50 pt-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-neutral-500 mb-8">
          <Link
            href="/blog"
            className="hover:text-white flex items-center gap-1.5 transition-colors duration-200"
          >
            <IconArrowLeft size={14} />
            Back to Blog
          </Link>
          {frontmatter.category && (
            <>
              <span>/</span>
              <span className="text-xs px-2.5 py-0.5 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20 font-medium">
                {frontmatter.category}
              </span>
            </>
          )}
        </div>

        {/* Title */}
        <h1 className="text-4xl font-extrabold tracking-tight text-white mb-4">
          {frontmatter.title}
        </h1>

        {/* Description */}
        <p className="text-neutral-400 text-lg max-w-2xl leading-relaxed mb-6">
          {frontmatter.description}
        </p>

        {/* Meta row */}
        <div className="flex items-center gap-4 flex-wrap text-sm text-neutral-500">
          <span className="flex items-center gap-1.5">
            <IconUser size={15} className="text-neutral-500" />
            {frontmatter.authorUrl ? (
              <a
                href={frontmatter.authorUrl}
                className="text-neutral-300 hover:text-white transition-colors duration-200"
              >
                {frontmatter.author}
              </a>
            ) : (
              <span className="text-neutral-300">{frontmatter.author}</span>
            )}
          </span>
          <span className="flex items-center gap-1.5">
            <IconCalendar size={15} className="text-neutral-500" />
            {new Date(frontmatter.date).toLocaleDateString("en-US", {
              month: "long",
              day: "numeric",
              year: "numeric",
            })}
          </span>
          <span className="flex items-center gap-1.5">
            <IconClock size={15} className="text-neutral-500" />
            {readingTime} min read
          </span>
        </div>

        {/* Tags */}
        {frontmatter.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-4">
            {frontmatter.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs px-2.5 py-1 rounded-md bg-neutral-800 text-neutral-400 border border-neutral-700"
              >
                #{tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
