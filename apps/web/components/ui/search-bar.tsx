"use client";
import { cn } from "@/lib/utils";
import { IconSearch, IconX } from "@tabler/icons-react";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
}

export function SearchBar({
  value,
  onChange,
  placeholder = "Search...",
  className,
}: SearchBarProps) {
  return (
    <div className={cn("relative flex items-center group", className)}>
      <IconSearch
        size={18}
        className="absolute left-4 text-neutral-500 group-focus-within:text-blue-400 transition-colors duration-200"
      />
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full bg-neutral-900 border border-neutral-800 focus:border-blue-500/50 text-white placeholder-neutral-500 rounded-xl pl-11 pr-10 py-3 text-sm outline-none transition-colors duration-200 focus:bg-neutral-900/80"
      />
      {value && (
        <button
          onClick={() => onChange("")}
          className="absolute right-4 text-neutral-500 hover:text-neutral-300 transition-colors duration-200"
        >
          <IconX size={16} />
        </button>
      )}
    </div>
  );
}
