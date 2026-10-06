import { cn } from "@/lib/cn";

export function Tag({ children, className }: { children: string; className?: string }) {
  return (
    <span
      className={cn(
        "inline-block rounded-md border border-white/10 bg-white/[0.04] px-2.5 py-1 text-xs font-medium text-muted",
        className,
      )}
    >
      {children}
    </span>
  );
}
