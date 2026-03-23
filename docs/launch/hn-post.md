# Hacker News Launch Post

---

## Title

Show HN: MCP Find – Open-source, AI-optimized MCP server directory

---

## Body

We're two devs (Gus and Adam) who gave ourselves one week to build something useful for the MCP ecosystem.

MCP Find is an open-source directory of Model Context Protocol servers. There are 2,000+ servers in the official registry but finding the right one and actually installing it is still painful. The existing directories (Glama, PulseMCP, mcp.so, Smithery — a deployment platform, not a directory) are all closed source.

What we built differently:

1. **Open source MIT** — as far as we know, the first MCP directory with a real UI that's fully open source. Fork it, self-host it, contribute.

2. **AI-agent optimized** — llms.txt, JSON-LD structured data, semantic SSR so Claude, ChatGPT, and Perplexity can actually find and reason about MCP servers when users ask "what MCP server should I use for X?"

3. **Config generator** — pick your MCP client (Claude Desktop, Cursor, etc.), select a server, get the exact JSON block to paste. No reading docs to figure out the config format.

4. **Trust signals up front** — GitHub stars, forks, last commit date, open issues visible before you decide to install anything.

Stack: Next.js App Router, Supabase, Vercel. Data from the official MCP registry API, enriched with GitHub metadata via their API.

Repo: https://github.com/gusmar2017/mcp-find
Live: https://mcpfind.org

Would appreciate any feedback — especially from people who have tried other MCP directories and have opinions on what's missing.

---

## OP First Comment (post immediately after submission)

A bit more context on why we built this:

The official MCP registry (github.com/modelcontextprotocol/servers) is infrastructure, not a consumer product. It's a YAML file. Their own docs explicitly describe the concept of "subregistries" — the expectation is that the community builds on top of it. We're doing exactly that.

The closed-source directories have done good work, but we wanted something the community could own. If we abandon this project tomorrow, the code is there and anyone can run it.

The AI discoverability piece is something we haven't seen prioritized elsewhere. As AI assistants get better at recommending tools, having structured data that those assistants can parse feels important. We added llms.txt (per the proposed spec at llmstxt.org) and JSON-LD schema markup on every server page.

What we scoped to v2 (didn't make the cut for launch):
- User reviews / ratings
- Install count tracking
- Collections / curated lists
- CLI tool: `npx mcp-find install <name>`

Genuine question for the thread: what's the biggest pain point you've had finding or configuring MCP servers? We want to make sure v2 solves real problems rather than imagined ones.
