import { NextResponse } from 'next/server';
import { getServerCount, getTopServers } from '@/lib/queries';
import { SITE_NAME, SITE_URL, CATEGORY_LABELS } from '@mcpfind/shared';

export const dynamic = 'force-dynamic';
export const revalidate = 86400; // 24 hours

export async function GET() {
  const [count, topServers] = await Promise.all([
    getServerCount(),
    getTopServers(20),
  ]);

  const categoryLines = Object.entries(CATEGORY_LABELS)
    .filter(([key]) => key !== 'other')
    .map(([key, label]) => `- [${label} Servers](${SITE_URL}/categories/${key}): ${label} MCP servers`)
    .join('\n');

  const topServerLines = topServers
    .map(s => `- [${s.name}](${SITE_URL}/servers/${s.slug}): ${(s.description || '').slice(0, 100)}`)
    .join('\n');

  const content = `# ${SITE_NAME}

> Open-source directory of ${count}+ MCP (Model Context Protocol) servers from the official
> registry. Search, filter, and get copy-paste install configs for Claude Desktop,
> Cursor, VS Code, Windsurf, and Claude Code. The first AI-agent-optimized MCP directory.

## Popular Categories
${categoryLines}

## API
- [Server List API](${SITE_URL}/api/servers): JSON API for searching and filtering all MCP servers with full-text search
- [Server Detail API](${SITE_URL}/api/servers/{slug}): Full metadata, tools, schemas, and install configs per server
- [Config Generator API](${SITE_URL}/api/servers/{slug}/config/{client}): Generate install config for any MCP client

## Top Servers
${topServerLines}
`;

  return new NextResponse(content, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=86400',
    },
  });
}
