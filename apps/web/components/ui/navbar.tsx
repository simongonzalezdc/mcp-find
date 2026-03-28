"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IconPlug } from "@tabler/icons-react";

interface NavbarProps {
  variant?: "fixed" | "sticky";
}

export function Navbar({ variant = "fixed" }: NavbarProps) {
  const pathname = usePathname();
  return (
    <nav
      className={`${
        variant === "fixed" ? "fixed top-0 left-0 right-0" : "sticky top-0"
      } z-50 border-b border-white/5 bg-black/80 backdrop-blur-md`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
              <IconPlug size={15} className="text-white" />
            </div>
            <span className="font-bold text-white text-lg tracking-tight">
              MCP Find
            </span>
          </Link>
          <div className="hidden md:flex items-center gap-6">
            <Link
              href="/servers"
              className={`text-sm transition-colors duration-200 ${
                pathname === "/servers"
                  ? "text-white"
                  : "text-neutral-400 hover:text-white"
              }`}
            >
              Browse Servers
            </Link>
            <a
              href="https://modelcontextprotocol.io"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-400 hover:text-white text-sm transition-colors duration-200"
            >
              Docs
            </a>
          </div>
          <div className="flex items-center gap-3">
            <Link
              href="/submit"
              className="bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors duration-200"
            >
              Submit Server
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
