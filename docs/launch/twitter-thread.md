# Twitter / X Thread

---

## Tweet 1 (with screenshot)

The MCP ecosystem has 2,000+ servers and no good way to find them.

We fixed that.

[SCREENSHOT: MCP Find homepage — search bar, server cards with GitHub stats]

🧵

---

## Tweet 2

The official registry is a YAML file.

The other directories are closed source.

My co-founder @TBD_ADAM and I gave ourselves one week to build something the community could actually own.

---

## Tweet 3

What we built:

→ Searchable directory with real server health data (stars, last commit, issues)
→ Config generator — pick Claude Desktop / Cursor / Windsurf, get the exact JSON
→ AI-optimized: llms.txt + JSON-LD so Claude and Perplexity can recommend servers
→ MIT licensed, full stack open source

---

## Tweet 4

The config generator was the piece we most wanted to exist.

Every time you find a server, you still have to read the README, figure out the right args format, and debug why your client won't connect.

Now: select server → select client → copy JSON → done.

---

## Tweet 5

The AI discoverability angle is underrated.

If someone asks Claude "what MCP server should I use for X?" — we want the answer to be accurate and point somewhere trustworthy.

llms.txt tells AI crawlers what we are. JSON-LD gives them structured data to reason about.

---

## Tweet 6

Stack if you're curious:
- Next.js App Router
- Supabase
- Vercel
- Turbo monorepo

Data from the official MCP registry, enriched with GitHub API metadata.

Repo: https://github.com/gusmar2017/mcp-find

---

## Tweet 7

Live at https://mcpfind.org

It's a week-old v1. There's a lot we didn't build yet (reviews, CLI, collections).

If you use MCP servers and something's missing or broken, tell us. That's more useful than any roadmap we could write ourselves.
