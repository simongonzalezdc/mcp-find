"use client";

import Link from "next/link";
import { IconArrowLeft } from "@tabler/icons-react";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-4">
      <div className="text-center max-w-lg">
        <h1 className="text-4xl font-extrabold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-white to-neutral-400">
          Something went wrong
        </h1>
        <p className="text-neutral-400 text-lg mb-8">
          An unexpected error occurred. Please try again.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => reset()}
            className="bg-blue-600 hover:bg-blue-500 text-white font-semibold px-6 py-3 rounded-xl transition-colors duration-200"
          >
            Try again
          </button>
          <Link
            href="/"
            className="flex items-center justify-center gap-2 bg-neutral-900 hover:bg-neutral-800 border border-neutral-700 text-white font-semibold px-6 py-3 rounded-xl transition-colors duration-200"
          >
            <IconArrowLeft size={18} />
            Go Home
          </Link>
        </div>
      </div>
    </div>
  );
}
