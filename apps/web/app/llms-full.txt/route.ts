import { NextResponse } from 'next/server';
import { getServerCount, getServersByCategory } from '@/lib/queries';
import { SITE_NAME, SITE_URL, CATEGORIES, CATEGORY_LABELS } from '@mcpfind/shared';

export const dynamic = 'force-dynamic';

export async function GET() {
  const count = await getServerCount();
  let content = `# ${SITE_NAME} — Full Server Index\n\n`;
  content += `> Complete index of ${count}+ MCP servers. Updated daily.\n\n`;

  for (const category of CATEGORIES) {
    if (category === 'other') continue;
    const label = CATEGORY_LABELS[category];
    const servers = await getServersByCategory(category);
    if (servers.length === 0) continue;

    content += `## ${label}\n\n`;
    for (const s of servers) {
      content += `### [${s.name}](${SITE_URL}/servers/${s.slug})\n`;
      content += `${s.description || 'No description.'}\n`;
      content += `- Stars: ${s.github_stars}\n- License: ${s.github_license || 'Unknown'}\n- Package: ${s.package_type || 'Unknown'}\n\n`;
    }
  }

  // Also include "other" category
  const otherServers = await getServersByCategory('other');
  if (otherServers.length > 0) {
    content += `## Other\n\n`;
    for (const s of otherServers) {
      content += `### [${s.name}](${SITE_URL}/servers/${s.slug})\n`;
      content += `${s.description || 'No description.'}\n\n`;
    }
  }

  return new NextResponse(content, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=86400',
    },
  });
}
