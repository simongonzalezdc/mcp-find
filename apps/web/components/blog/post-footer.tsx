import type { BlogPost } from "@/types/blog";
import { PostCard } from "./post-card";

interface PostFooterProps {
  relatedPosts: BlogPost[];
}

export function PostFooter({ relatedPosts }: PostFooterProps) {
  if (relatedPosts.length === 0) return null;

  return (
    <section className="border-t border-neutral-800 pt-12 mt-12">
      <h2 className="text-xl font-bold text-white mb-6">Related Articles</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {relatedPosts.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </div>
    </section>
  );
}
