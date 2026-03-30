export const CATEGORIES = [
  'databases',
  'cloud',
  'devtools',
  'communication',
  'filesystems',
  'search',
  'ai-ml',
  'finance',
  'crm',
  'productivity',
  'other',
] as const;

export type Category = typeof CATEGORIES[number];

export const CATEGORY_LABELS: Record<Category, string> = {
  databases: 'Databases',
  cloud: 'Cloud Providers',
  devtools: 'Developer Tools',
  communication: 'Communication',
  filesystems: 'File Systems',
  search: 'Search & Knowledge',
  'ai-ml': 'AI & ML',
  finance: 'Finance',
  crm: 'CRM',
  productivity: 'Productivity',
  other: 'Other',
};

export const CATEGORY_KEYWORDS: Record<Category, string[]> = {
  databases: ['postgres', 'postgresql', 'mysql', 'sqlite', 'mongodb', 'redis', 'supabase', 'database', 'db', 'sql'],
  cloud: ['aws', 'gcp', 'azure', 'cloudflare', 'cloud', 'lambda', 's3'],
  devtools: ['github', 'gitlab', 'jira', 'linear', 'sentry', 'git', 'ci', 'cd'],
  communication: ['slack', 'discord', 'email', 'teams', 'chat', 'message'],
  filesystems: ['filesystem', 'file', 'google drive', 'dropbox', 'storage'],
  search: ['brave', 'search', 'google', 'web', 'scraping', 'wikipedia', 'crawl'],
  'ai-ml': ['openai', 'model', 'vector', 'embedding', 'llm', 'ai', 'ml', 'huggingface'],
  finance: ['stripe', 'payment', 'banking', 'finance', 'invoice'],
  crm: ['salesforce', 'hubspot', 'crm', 'customer'],
  productivity: ['notion', 'calendar', 'todoist', 'trello', 'asana', 'productivity'],
  other: [],
};

export const CATEGORY_FAQS: Record<Category, Array<{ question: string; answer: string }>> = {
  databases: [
    {
      question: 'What database MCP servers are available?',
      answer: 'MCP Find indexes PostgreSQL, MySQL, SQLite, MongoDB, Redis, Supabase, and other database integrations. Most support both read-only and read-write modes.',
    },
    {
      question: 'How do I connect an AI agent to my database?',
      answer: 'Install the MCP server for your database (e.g., postgres-mcp), add the config to your AI client (Claude Desktop, Cursor, VS Code), and the agent can query your database directly.',
    },
    {
      question: 'Can MCP servers handle database migrations?',
      answer: 'Some database MCP servers support schema introspection and migration generation. Check individual server docs for write capabilities — many default to read-only for safety.',
    },
  ],
  cloud: [
    {
      question: 'Which cloud providers have MCP servers?',
      answer: 'AWS, GCP, Azure, Cloudflare, Vercel, and Fly.io all have MCP server integrations for provisioning resources, querying logs, and managing deployments.',
    },
    {
      question: 'Can I manage infrastructure with an AI agent through MCP?',
      answer: 'Yes. Cloud MCP servers let agents list resources, read logs, trigger deploys, and in some cases provision new infrastructure — all through natural language in your AI client.',
    },
  ],
  devtools: [
    {
      question: 'What developer tool integrations does MCP offer?',
      answer: 'There are MCP servers for GitHub, GitLab, Jira, Linear, Sentry, and many more. They let AI agents create issues, review PRs, query error logs, and interact with your dev workflow.',
    },
    {
      question: 'How do MCP servers fit into a CI/CD pipeline?',
      answer: 'MCP servers connect your AI client to tools like GitHub Actions, CircleCI, and Jenkins. Agents can check build status, read logs, and help debug failed pipelines without leaving the chat.',
    },
  ],
  communication: [
    {
      question: 'Can AI agents send messages through MCP servers?',
      answer: 'Communication MCP servers support Slack, Discord, email, and Microsoft Teams. Depending on the server, agents can read channels, send messages, or summarize conversations.',
    },
    {
      question: 'Are communication MCP servers safe to use?',
      answer: 'Most communication servers require explicit OAuth or API key setup and support scoped permissions. You control exactly which channels or mailboxes the agent can access.',
    },
  ],
  filesystems: [
    {
      question: 'How do file system MCP servers work?',
      answer: 'File system MCP servers give AI agents controlled access to local directories, Google Drive, Dropbox, or S3 buckets. You configure which paths are accessible and whether writes are allowed.',
    },
    {
      question: 'Is it safe to let an AI agent access my files?',
      answer: 'File system servers let you allowlist specific directories and set read-only mode. The agent only sees files you explicitly permit — nothing outside the configured scope.',
    },
    {
      question: 'Can I use MCP to search across documents?',
      answer: 'Several file system servers support full-text search and content extraction from PDFs, Word docs, and other formats, making it easy for agents to find information across your files.',
    },
  ],
  search: [
    {
      question: 'What search and knowledge MCP servers exist?',
      answer: 'MCP Find lists servers for Brave Search, Google, Wikipedia, web scraping, and specialized knowledge bases. They let agents fetch live information beyond their training data.',
    },
    {
      question: 'How does web search through MCP differ from a normal search?',
      answer: 'Instead of returning a list of links, search MCP servers feed structured results directly to the AI agent, which can synthesize answers, compare sources, and cite references in its response.',
    },
  ],
  'ai-ml': [
    {
      question: 'What AI and ML MCP servers are available?',
      answer: 'There are MCP servers for OpenAI, Hugging Face, vector databases like Pinecone and Weaviate, and various embedding services. They let agents orchestrate multi-model workflows.',
    },
    {
      question: 'Can I chain multiple AI models together using MCP?',
      answer: 'Yes — AI/ML MCP servers enable agents to call external models, store and query embeddings, and pipe outputs between services, all from a single conversation.',
    },
    {
      question: 'Do AI/ML MCP servers support local models?',
      answer: 'Several servers integrate with Ollama, llama.cpp, and other local inference tools, so your agent can leverage on-device models without sending data to external APIs.',
    },
  ],
  finance: [
    {
      question: 'What finance-related MCP servers are available?',
      answer: 'MCP Find lists servers for Stripe, payment processing, banking APIs, invoicing tools, and financial data providers. They bring financial operations into your AI workflow.',
    },
    {
      question: 'Can an AI agent process payments through MCP?',
      answer: 'Finance MCP servers like Stripe integrations can create invoices, check payment status, and manage subscriptions. Sensitive operations typically require explicit confirmation steps.',
    },
  ],
  crm: [
    {
      question: 'Which CRM platforms have MCP servers?',
      answer: 'Salesforce, HubSpot, and other CRM platforms have MCP server integrations. Agents can look up contacts, update deal stages, and pull reports directly from your CRM.',
    },
    {
      question: 'How do CRM MCP servers handle sensitive customer data?',
      answer: 'CRM servers authenticate via OAuth or API keys with scoped permissions. You control which objects and fields the agent can read or modify, just like any other API integration.',
    },
  ],
  productivity: [
    {
      question: 'What productivity tools have MCP servers?',
      answer: 'Notion, Google Calendar, Todoist, Trello, Asana, and other productivity apps have MCP integrations. Agents can create tasks, schedule events, and organize notes on your behalf.',
    },
    {
      question: 'Can an AI agent manage my calendar through MCP?',
      answer: 'Calendar MCP servers let agents check availability, create events, and send invites. Most require OAuth consent so you stay in control of what gets scheduled.',
    },
    {
      question: 'Do productivity MCP servers work across multiple apps?',
      answer: 'You can install multiple productivity MCP servers at once. An agent could check your Notion docs, create a Trello card, and add a calendar reminder — all in one conversation.',
    },
  ],
  other: [
    {
      question: 'What kinds of MCP servers are in the Other category?',
      answer: 'The Other category includes servers that don\'t fit neatly into a single domain — things like browser automation, IoT integrations, custom API wrappers, and experimental tools.',
    },
    {
      question: 'How do I find the right MCP server for my use case?',
      answer: 'Use the search and filter tools on MCP Find to narrow by capability, language, or keyword. Every server listing includes install instructions and a link to its source repository.',
    },
  ],
};
