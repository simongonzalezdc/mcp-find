import { getAllPosts } from "@/lib/blog";
import { generateBlogIndexJsonLd } from "@/lib/blog-jsonld";
import { safeJsonLd } from "@/lib/json-ld";
import { Navbar } from "@/components/ui/navbar";
import { PostCard } from "@/components/blog/post-card";
import { IconArrowLeft } from "@tabler/icons-react";
import Link from "next/link";
import type { Metadata } from "next";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Blog | MCP Find",
  description:
    "Guides, tutorials, and analysis on MCP servers and the Model Context Protocol. Learn how to connect AI assistants to your tools and data.",
  alternates: {
    canonical: "/blog",
    types: {
      "application/rss+xml": "/blog/feed.xml",
    },
  },
  openGraph: {
    title: "Blog | MCP Find",
    description:
      "Guides, tutorials, and analysis on MCP servers and the Model Context Protocol.",
    type: "website",
    url: "/blog",
  },
};

export default function BlogIndexPage() {
  const posts = getAllPosts();

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: safeJsonLd(generateBlogIndexJsonLd()),
        }}
      />

      <Navbar variant="sticky" />

      {/* Hero */}
      <div className="border-b border-neutral-900 bg-neutral-950/50 pt-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-neutral-500 mb-8">
            <Link
              href="/"
              className="hover:text-white flex items-center gap-1.5 transition-colors duration-200"
            >
              <IconArrowLeft size={14} />
              Home
            </Link>
            <span>/</span>
            <span className="text-neutral-300">Blog</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-4">
            <span className="bg-gradient-to-r from-white via-blue-100 to-blue-400 bg-clip-text text-transparent">
              Blog
            </span>
          </h1>
          <p className="text-neutral-400 text-lg max-w-2xl leading-relaxed">
            Guides, tutorials, and analysis on MCP servers and the Model Context
            Protocol. Learn how to connect AI assistants to your tools and data.
          </p>
          {posts.length > 0 && (
            <p className="text-neutral-500 text-sm mt-4">
              {posts.length} {posts.length === 1 ? "article" : "articles"}
            </p>
          )}
        </div>
      </div>

      {/* Posts grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {posts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {posts.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-neutral-500 text-lg">
              No articles published yet. Check back soon!
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
