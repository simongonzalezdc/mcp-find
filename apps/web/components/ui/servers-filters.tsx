"use client";

import { useCallback, useEffect, useState, useRef } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { SearchBar } from "./search-bar";
import { cn } from "@/lib/utils";
import { CATEGORIES, CATEGORY_LABELS } from "@mcpfind/shared";
import type { Category } from "@mcpfind/shared";
import { IconChevronDown, IconFilter, IconX } from "@tabler/icons-react";

type SortOption = "stars" | "updated" | "name" | "downloads";

interface ServersFiltersProps {
  initialQ: string;
  initialCategory: string;
  initialSort: SortOption;
  totalCount: number;
  children: React.ReactNode;
}

export function ServersFilters({
  initialQ,
  initialCategory,
  initialSort,
  totalCount,
  children,
}: ServersFiltersProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [search, setSearch] = useState(initialQ);
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [sortKey, setSortKey] = useState<SortOption>(initialSort);
  const [showFilters, setShowFilters] = useState(false);
  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const isFirstRender = useRef(true);

  const buildUrl = useCallback(
    (q: string, category: string, sort: SortOption) => {
      const params = new URLSearchParams();
      if (q) params.set("q", q);
      if (category) params.set("category", category);
      if (sort !== "stars") params.set("sort", sort);
      return `/servers${params.toString() ? `?${params.toString()}` : ""}`;
    },
    []
  );

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    if (debounceRef.current) clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(() => {
      router.push(buildUrl(search, selectedCategory, sortKey));
    }, 400);
    return () => {
      if (debounceRef.current) clearTimeout(debounceRef.current);
    };
  }, [search, selectedCategory, sortKey, buildUrl, router]);

  const clearFilters = () => {
    setSearch("");
    setSelectedCategory("");
    setSortKey("stars");
  };

  const activeFilterCount = [selectedCategory].filter(Boolean).length;

  return (
    <>
      {/* Search + Sort row */}
      <div className="flex flex-col sm:flex-row gap-3 mb-6">
        <div className="flex-1">
          <SearchBar
            value={search}
            onChange={setSearch}
            placeholder="Search servers, descriptions, or tags..."
          />
        </div>

        <div className="relative">
          <select
            value={sortKey}
            onChange={(e) => {
              setSortKey(e.target.value as SortOption);
            }}
            className="appearance-none bg-neutral-900 border border-neutral-800 text-white text-sm rounded-xl px-4 py-3 pr-10 outline-none hover:border-neutral-700 focus:border-blue-500/50 transition-colors duration-200 cursor-pointer"
          >
            <option value="stars">Sort: Most Stars</option>
            <option value="downloads">Sort: Most Downloads</option>
            <option value="updated">Sort: Recently Updated</option>
            <option value="name">Sort: Name A-Z</option>
          </select>
          <IconChevronDown
            size={16}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-500 pointer-events-none"
          />
        </div>

        <button
          onClick={() => setShowFilters(!showFilters)}
          className={cn(
            "flex items-center gap-2 px-4 py-3 rounded-xl border text-sm font-medium transition-colors duration-200 sm:hidden",
            showFilters
              ? "bg-blue-600 border-blue-500 text-white"
              : "bg-neutral-900 border-neutral-800 text-neutral-400 hover:border-neutral-700"
          )}
        >
          <IconFilter size={16} />
          Filters
          {activeFilterCount > 0 && (
            <span className="ml-1 bg-blue-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
              {activeFilterCount}
            </span>
          )}
        </button>
      </div>

      <div className="flex gap-8">
        {/* Sidebar */}
        <aside
          className={cn(
            "shrink-0 w-52 space-y-6",
            showFilters ? "block" : "hidden sm:block"
          )}
        >
          {activeFilterCount > 0 && (
            <div className="flex items-center justify-between">
              <span className="text-xs text-neutral-400 font-medium uppercase tracking-wider">
                {activeFilterCount} filter active
              </span>
              <button
                onClick={clearFilters}
                className="text-xs text-blue-400 hover:text-blue-300 flex items-center gap-1 transition-colors duration-200"
              >
                <IconX size={12} />
                Clear
              </button>
            </div>
          )}

          <div>
            <h3 className="text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-3">
              Category
            </h3>
            <div className="space-y-1">
              <button
                onClick={() => setSelectedCategory("")}
                className={cn(
                  "w-full text-left px-3 py-1.5 rounded-lg text-sm transition-colors duration-200 flex items-center justify-between",
                  !selectedCategory
                    ? "bg-blue-600/20 text-blue-300"
                    : "text-neutral-400 hover:text-white hover:bg-neutral-900"
                )}
              >
                All Categories
                <span className="text-neutral-600 text-xs">{totalCount}</span>
              </button>
              {CATEGORIES.map((cat: string) => (
                <button
                  key={cat}
                  onClick={() =>
                    setSelectedCategory(selectedCategory === cat ? "" : cat)
                  }
                  className={cn(
                    "w-full text-left px-3 py-1.5 rounded-lg text-sm transition-colors duration-200",
                    selectedCategory === cat
                      ? "bg-blue-600/20 text-blue-300"
                      : "text-neutral-400 hover:text-white hover:bg-neutral-900"
                  )}
                >
                  {CATEGORY_LABELS[cat as Category]}
                </button>
              ))}
            </div>
          </div>
        </aside>

        {/* Server grid — server-rendered */}
        <main className="flex-1 min-w-0">{children}</main>
      </div>
    </>
  );
}
