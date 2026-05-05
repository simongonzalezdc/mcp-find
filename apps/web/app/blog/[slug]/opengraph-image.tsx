import { ImageResponse } from 'next/og';
import { getPostBySlug } from '@/lib/blog';

export const alt = 'MCP Find Blog';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

// Outer async wrapper so any unhandled error (including "failed to pipe res"
// thrown by Next.js when Resvg/wasm can't initialize) returns a plain 302
// redirect to the static fallback OG image rather than a 500.
export default async function Image({ params }: { params: { slug: string } }) {
  try {
    const post = getPostBySlug(params.slug);
    const title = post
      ? post.frontmatter.title.slice(0, 100)
      : 'MCP Find Blog';
    const author = post?.frontmatter.author || '';

    try {
      return new ImageResponse(
        (
          <div
            style={{
              width: '100%',
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              padding: '80px',
              background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #0a0a0a 100%)',
              color: 'white',
              fontFamily: 'sans-serif',
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                marginBottom: '40px',
              }}
            >
              {/* No emoji here — @vercel/og fetches emoji from Twemoji CDN
                  which can time out or fail in serverless, causing 500s. */}
              <div
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '8px',
                  background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '20px',
                  fontWeight: 'bold',
                  color: 'white',
                }}
              >
                M
              </div>
              <span style={{ fontSize: '24px', color: '#a3a3a3' }}>MCP Find Blog</span>
            </div>
            <div
              style={{
                fontSize: title.length > 60 ? '42px' : '52px',
                fontWeight: 'bold',
                lineHeight: 1.2,
                marginBottom: '24px',
                maxWidth: '900px',
              }}
            >
              {title}
            </div>
            {author && (
              <div style={{ fontSize: '22px', color: '#a3a3a3' }}>
                By {author}
              </div>
            )}
          </div>
        ),
        { ...size }
      );
    } catch {
      // Inner fallback: ImageResponse render failed (e.g. font layout error).
      // Return a minimal text-only branded image.
      return new ImageResponse(
        (
          <div
            style={{
              width: '100%',
              height: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: '#0a0a0a',
              color: 'white',
              fontFamily: 'sans-serif',
              fontSize: '48px',
              fontWeight: 'bold',
            }}
          >
            MCP Find Blog
          </div>
        ),
        { ...size }
      );
    }
  } catch {
    // Outer fallback: wasm/Resvg failed entirely — redirect to the static
    // OG image so the page still has a valid og:image rather than a 500.
    return new Response(null, {
      status: 302,
      headers: { Location: '/og-image-mcp.png' },
    });
  }
}
