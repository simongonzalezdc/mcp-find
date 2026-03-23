# Reddit Launch Posts

---

## r/mcp

**Title**: We built an open-source MCP server directory with a config generator — MCP Find

Hey r/mcp,

My co-founder Adam and I spent a week building MCP Find, an open-source directory for MCP servers.

The problem we kept running into: the official registry is a YAML file with 2,000+ entries. Finding the right server for a task, understanding if it's maintained, and getting the config right for your specific client are all more annoying than they should be.

**What MCP Find does:**

- Browsable, searchable directory of servers from the official registry
- Each server page shows GitHub stats (stars, last commit, open issues) so you can judge health at a glance
- Config generator — select your client (Claude Desktop, Cursor, Windsurf, etc.) and it outputs the exact JSON block you need
- AI-optimized: llms.txt and JSON-LD structured data so AI assistants can recommend servers contextually

**Tech side:** Next.js App Router, Supabase for the DB, Vercel deployment. We pull from the official registry API and enrich with GitHub metadata.

**Open source MIT:** https://github.com/gusmar2017/mcp-find

Live at: https://mcpfind.org

Would love feedback from people who use MCP servers daily. What's missing from every directory you've tried?

---

## r/ClaudeAI

**Title**: Built a Claude Desktop config generator for MCP servers — open source

If you use Claude Desktop with MCP servers, this might save you some time.

MCP Find is a directory we built that includes a config generator: you pick a server, pick Claude Desktop as your client, and it gives you the exact JSON to paste into your `claude_desktop_config.json`. No more hunting through READMEs to figure out the right format.

We also surface GitHub metadata — stars, last commit, open issues — so you can tell if a server is actually maintained before you add it to your config.

It's open source (MIT): https://github.com/gusmar2017/mcp-find

Live: https://mcpfind.org

Happy to answer questions about how we built it or take feature requests.

---

## r/SideProject

**Title**: Built in a week: an open-source MCP server directory

**The constraint:** one week, two devs (Gus + Adam), ship something real.

**The problem:** Model Context Protocol has 2,000+ servers in the official registry but no good way to browse and install them. Every directory that exists is closed source.

**What we shipped:**

- Searchable directory with server health indicators
- Config generator (pick your AI client, get the JSON)
- AI-optimized with llms.txt and structured data
- Full open source MIT stack: Next.js, Supabase, Vercel

**What we didn't ship** (honest list):
- User reviews
- Install tracking
- Collections/lists
- A CLI

The week constraint forced us to cut ruthlessly. It's a clean v1 that does a few things well rather than many things mediocrely.

Repo: https://github.com/gusmar2017/mcp-find
Live: https://mcpfind.org

Always curious what other people do with hard time constraints — did you find they help or hurt quality?

---

## r/opensource

**Title**: MCP Find — MIT-licensed MCP server directory, full stack open source

Hey r/opensource,

We launched MCP Find this week: an open-source directory for Model Context Protocol servers.

**Why OSS matters here:**

Every existing MCP directory (Glama, PulseMCP, mcp.so, Smithery) is closed source. The MCP ecosystem is infrastructure for AI tooling — it feels wrong for the directories to be black boxes. If the maintainers lose interest, the community should be able to fork and continue.

**Stack (all OSS):**
- Next.js App Router (frontend + API routes)
- Supabase (Postgres + auth)
- Vercel (deployment)
- Turbo monorepo

**Contributing:**

The most valuable contributions right now:
1. Server data corrections (wrong categories, missing descriptions)
2. Additional client templates for the config generator
3. Bug reports from non-Chrome browsers

CONTRIBUTING.md is in the repo with setup instructions. The local dev setup is `pnpm install && pnpm dev` — nothing exotic.

Repo: https://github.com/gusmar2017/mcp-find
Live: https://mcpfind.org

License: MIT. Fork freely.
