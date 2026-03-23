# FAQ — MCP Find

Common questions and honest answers.

---

## How is this different from Glama?

Glama is a solid product with a polished UI and a broad scope — it covers MCP servers but also other AI tooling. It's closed source.

MCP Find is focused exclusively on MCP servers and is fully open source (MIT). If we stop maintaining it, you can fork it and keep it running. Glama can't offer that.

We also have a different approach to AI discoverability: llms.txt and JSON-LD structured data on every page so that AI assistants can accurately surface servers when users ask for recommendations.

No shade on Glama — it's a good product. We just wanted the community to have an option it owns.

---

## How is this different from PulseMCP?

PulseMCP tracks server popularity and pulse metrics — it has good data on which servers are trending and active. Also closed source.

MCP Find doesn't try to rank servers by popularity (yet). We focus on giving you the information you need to evaluate a server yourself: GitHub stars, last commit date, open issues, license. Then the config generator gets you from "I want this server" to "it's running in my client" as fast as possible.

Different tools with some overlap. PulseMCP's pulse data is genuinely useful; our config generator and open-source stance are things PulseMCP doesn't have.

---

## How is this different from mcp.so?

mcp.so is a directory with a clean UI. Closed source.

Functionally similar to MCP Find in scope, but again — closed source is the core difference. Beyond that, we've invested more in the AI discoverability layer (structured data, llms.txt) and the config generator, which mcp.so doesn't have.

---

## How is this different from Smithery?

Smithery is more of an installation and deployment platform — it lets you run MCP servers remotely via their infrastructure. It's a different product category from a directory.

MCP Find is purely a discovery and configuration tool. We help you find a server and get the right config for your local setup. We don't host or run servers.

If you want managed remote MCP servers, Smithery is worth looking at. If you want to find what's available and configure it locally, that's what we do.

---

## Why not just use the official registry?

The official registry (github.com/modelcontextprotocol/servers) is a YAML file — it's infrastructure, not a consumer product. Searching it means reading raw YAML or using GitHub's search. There's no config generator, no GitHub stats UI, no filtering by category.

Their own documentation describes "subregistries" as a first-class concept — the expectation is that the community builds consumer experiences on top of the registry data. That's exactly what MCP Find is.

We pull data from the official registry and enrich it. We're a layer on top, not a replacement.

---

## What's your business model?

There isn't one. This is an open-source portfolio project.

We built it because we wanted it to exist and wanted the community to have an OSS option. If it grows to a point where hosting costs become real, we might add optional sponsorship or a hosted tier for teams — but that's speculative. Right now it's free, open source, and funded by our own time.

---

## What can't it do yet?

Honest list of things we know are missing:

- **User reviews or ratings** — no community feedback on servers yet
- **Install count tracking** — we don't know how often servers are actually used
- **Collections or curated lists** — no "best servers for X" editorial content
- **CLI tool** — `npx mcp-find install <name>` is on the roadmap but not built
- **Server submission UI** — right now new servers get in via the official registry; no direct submission
- **Offline / self-hosted documentation** — the config generator requires the web app
- **Version pinning** — config generator doesn't let you pin to a specific server version
- **Verified maintainer accounts** — server authors can't claim their listings yet
- **Search by capability** — you can search by name/description but not by what the server actually does (e.g., "servers that can read files")

We shipped v1 in a week. This list is what v2 is for.

---

## Can I contribute?

Yes. The repo is at https://github.com/[your-handle]/mcp-find and CONTRIBUTING.md has setup instructions.

Most useful contributions right now:
1. Data corrections — wrong categories, missing or inaccurate descriptions
2. New client templates for the config generator (if your client isn't listed)
3. Bug reports, especially on non-Chrome browsers
4. Feature requests backed by a real use case

The local setup is `pnpm install && pnpm dev`. Nothing exotic.

---

## Is the data accurate?

We pull from the official MCP registry and enrich with GitHub API data. The registry data is as accurate as what maintainers submitted. GitHub metadata (stars, last commit, issues) is live via the API.

If you find a server with wrong data — wrong category, outdated description, broken links — please open an issue or PR. Community corrections are the best way to keep this accurate at scale.
