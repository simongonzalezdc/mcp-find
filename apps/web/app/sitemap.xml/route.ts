import { getTopServers } from '@/lib/queries';
import { SITE_URL, CATEGORIES } from '@mcpfind/shared';

export const dynamic = 'force-dynamic';

export async function GET() {
  const servers = await getTopServers(5000); // Get all servers

  const today = new Date().toISOString().split('T')[0];
  const staticPages = [
    { url: SITE_URL, changefreq: 'daily', priority: '1.0', lastmod: today },
    { url: `${SITE_URL}/servers`, changefreq: 'daily', priority: '0.9', lastmod: today },
  ];

  const categoryPages = CATEGORIES.map(cat => ({
    url: `${SITE_URL}/categories/${cat}`,
    changefreq: 'daily' as const,
    priority: '0.8',
  }));

  const serverPages = servers.map(s => ({
    url: `${SITE_URL}/servers/${s.slug}`,
    changefreq: 'daily' as const,
    priority: '0.7',
    lastmod: s.updated_at,
  }));

  const allPages = [...staticPages, ...categoryPages, ...serverPages];

  const renderUrl = (p: { url: string; changefreq: string; priority: string; lastmod?: string }) => {
    const lastmodStr = p.lastmod ? `\n    <lastmod>${new Date(p.lastmod).toISOString().split('T')[0]}</lastmod>` : '';
    return `  <url>
    <loc>${p.url}</loc>
    <changefreq>${p.changefreq}</changefreq>
    <priority>${p.priority}</priority>${lastmodStr}
  </url>`;
  };

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allPages.map(renderUrl).join('\n')}
</urlset>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=86400',
    },
  });
}
