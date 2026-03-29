import { cn } from "@/lib/utils";
import React from "react";

interface StatBadgeProps {
  icon: React.ReactNode;
  value: string | number;
  label?: string;
  className?: string;
}

export function StatBadge({ icon, value, label, className }: StatBadgeProps) {
  return (
    <div
      className={cn(
        "flex items-center gap-1.5 text-neutral-400 text-sm",
        className
      )}
    >
      <span className="text-neutral-500">{icon}</span>
      <span className="font-medium text-neutral-300">{value}</span>
      {label && <span className="text-neutral-500">{label}</span>}
    </div>
  );
}

export function formatNumber(n: number): string {
  if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(1)}M`;
  if (n >= 1_000) return `${(n / 1_000).toFixed(1)}k`;
  return n.toString();
}
