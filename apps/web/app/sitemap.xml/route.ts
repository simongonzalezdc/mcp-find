import { SITE_URL } from '@mcpfind/shared';

export const dynamic = 'force-dynamic';

const TOTAL_SERVER_BATCHES = 2; // batch 0 (0-4999) and batch 1 (5000-9999) covers 7,299+ servers

export async function GET() {
  const today = new Date().toISOString().split('T')[0];

  const sitemaps = [
    { loc: `${SITE_URL}/sitemap-static.xml`, lastmod: today },
    ...Array.from({ length: TOTAL_SERVER_BATCHES }, (_, i) => ({
      loc: `${SITE_URL}/sitemap-servers-${i}.xml`,
      lastmod: today,
    })),
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemaps.map(s => `  <sitemap>\n    <loc>${s.loc}</loc>\n    <lastmod>${s.lastmod}</lastmod>\n  </sitemap>`).join('\n')}
</sitemapindex>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=86400',
    },
  });
}
