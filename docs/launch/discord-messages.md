# Discord Messages

---

## MCP Discord — #showcase

Hey everyone — my co-founder and I just shipped MCP Find, an open-source directory for MCP servers.

[SCREENSHOT: Server detail page showing GitHub stats + config generator]

**Why we built it:** The official registry is great infrastructure but it's not a consumer product. And every directory that exists right now is closed source. We wanted something the community could own.

**What's different:**
- Config generator — pick your client (Claude Desktop, Cursor, Windsurf), get the exact JSON. No more README-hunting.
- GitHub metadata on every server page so you can see if something is actually maintained
- AI-optimized with llms.txt and JSON-LD structured data
- MIT licensed, full source on GitHub

It's a v1 built in a week so there's definitely rough edges. Would really appreciate feedback from people who use MCP servers regularly — especially if something's broken or a server you care about is missing/wrong.

Live: https://mcpfind.com
Repo: https://github.com/[your-handle]/mcp-find

---

## MCP Discord — #general (follow-up if discussion starts)

Happy to answer any questions about how we built it. The data pipeline pulls from the official registry API and enriches with GitHub metadata — nothing exotic, but I can walk through the architecture if anyone's curious.

Main thing on our v2 list right now is a CLI (`npx mcp-find install <name>`) — would that be useful for how you all work, or do you mostly configure via the JSON manually?

---

## AI Builders / Indie Hackers Discord — #show-your-work

Built something this week that might be useful here.

MCP Find — open-source directory for Model Context Protocol servers: https://mcpfind.com

[SCREENSHOT: Homepage]

The quick pitch: 2,000+ MCP servers exist, finding the right one is still a pain, all the current directories are closed source. We built the open-source version in a week.

The part I'm most happy with: the config generator. You pick a server and your AI client, and it outputs the exact JSON config. Sounds small but it saves real time when you're setting things up.

Repo if you want to poke at the code or contribute: https://github.com/[your-handle]/mcp-find

What would you want from an MCP directory that doesn't exist yet?

---

## Buildspace / AI Discord — #projects

Shipped MCP Find this week — open-source MCP server directory with a config generator.

https://mcpfind.com

Week-long build with my co-founder. The two things I'd highlight:

1. Config generator: finally a way to get the right JSON for Claude Desktop / Cursor / etc. without reading docs
2. Full open source MIT — we wanted the community to own this, not another closed-source directory

Would love feedback. What's the most annoying thing about working with MCP servers right now?
