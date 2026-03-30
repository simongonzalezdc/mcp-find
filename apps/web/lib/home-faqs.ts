export const HOME_FAQS = [
  {
    question: "What is MCP Find?",
    answer:
      "MCP Find is an open-source directory of Model Context Protocol servers. It helps developers discover, evaluate, and install MCP servers into AI clients like Claude Desktop, Cursor, VS Code, and Windsurf.",
  },
  {
    question: "What is the Model Context Protocol (MCP)?",
    answer:
      "MCP is an open standard created by Anthropic that lets AI assistants connect to external tools and data sources. Think of it like a USB port for AI — any MCP-compatible client can use any MCP server, regardless of who built it.",
  },
  {
    question: "How do I install an MCP server?",
    answer:
      "Find a server on MCP Find, copy the JSON config snippet from its listing page, and paste it into your AI client's configuration file. Most servers work with a single command or config block — no complex setup required.",
  },
  {
    question: "Are MCP servers free to use?",
    answer:
      "The vast majority of MCP servers listed here are open source and free. Some connect to paid third-party services (like cloud providers or SaaS APIs), but the MCP server itself is typically free.",
  },
  {
    question: "Which AI clients support MCP?",
    answer:
      "Claude Desktop, Claude Code, Cursor, VS Code (via Copilot), Windsurf, and a growing number of AI tools support MCP. Any client that implements the protocol can connect to the servers listed here.",
  },
  {
    question: "How do I submit my MCP server to the directory?",
    answer:
      'Click "Submit a Server" in the navigation bar and fill out the form with your server\'s package name and GitHub URL. Submissions are reviewed and typically appear in the directory within a few days.',
  },
] as const;
