"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { IconSearch } from "@tabler/icons-react";

export function HeroSearch() {
  const [query, setQuery] = useState("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/servers?q=${encodeURIComponent(query.trim())}`);
    } else {
      router.push("/servers");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="relative max-w-xl mx-auto mb-10">
      <IconSearch
        size={20}
        className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-500 pointer-events-none"
      />
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search MCP servers..."
        className="w-full bg-neutral-900/80 border border-neutral-700 hover:border-neutral-600 focus:border-blue-500/50 text-white placeholder-neutral-500 rounded-2xl pl-12 pr-4 py-4 text-base outline-none transition-colors duration-200"
      />
    </form>
  );
}
