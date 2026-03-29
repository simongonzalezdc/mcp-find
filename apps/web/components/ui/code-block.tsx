"use client";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { IconCopy, IconCheck } from "@tabler/icons-react";

interface CodeBlockProps {
  code: string;
  language?: string;
  className?: string;
  showLineNumbers?: boolean;
}

export function CodeBlock({
  code,
  language = "bash",
  className,
  showLineNumbers = false,
}: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const lines = code.split("\n");

  return (
    <div
      className={cn(
        "relative rounded-xl bg-neutral-950 border border-neutral-800 overflow-hidden",
        className
      )}
    >
      <div className="flex items-center justify-between px-4 py-2.5 bg-neutral-900/80 border-b border-neutral-800">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500/60" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
            <div className="w-3 h-3 rounded-full bg-green-500/60" />
          </div>
          <span className="text-neutral-500 text-xs ml-2 font-mono">
            {language}
          </span>
        </div>
        <button
          onClick={handleCopy}
          className="flex items-center gap-1.5 text-neutral-500 hover:text-neutral-300 transition-colors duration-200 text-xs"
        >
          {copied ? (
            <>
              <IconCheck size={14} className="text-green-400" />
              <span className="text-green-400">Copied!</span>
            </>
          ) : (
            <>
              <IconCopy size={14} />
              <span>Copy</span>
            </>
          )}
        </button>
      </div>

      <div className="overflow-x-auto">
        <pre className="p-4 text-sm font-mono leading-relaxed">
          {showLineNumbers ? (
            <code>
              {lines.map((line, i) => (
                <span key={i} className="flex">
                  <span className="select-none text-neutral-600 mr-4 w-6 text-right shrink-0">
                    {i + 1}
                  </span>
                  <span className="text-neutral-200">{line}</span>
                </span>
              ))}
            </code>
          ) : (
            <code className="text-neutral-200">{code}</code>
          )}
        </pre>
      </div>
    </div>
  );
}
