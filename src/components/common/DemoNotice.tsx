import { Info, ShieldAlert } from "lucide-react";
import { cn } from "@/lib/utils";

export function DemoBadge({ label = "Demo Local Validation", className }: { label?: string | undefined; className?: string | undefined }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border border-accent/40 bg-accent/12 px-2.5 py-1 text-[11px] font-bold uppercase tracking-[0.12em] text-primary",
        className,
      )}
    >
      <ShieldAlert aria-hidden="true" className="size-3.5" />
      {label}
    </span>
  );
}

export function DemoNotice({ children, className }: { children: React.ReactNode; className?: string | undefined }) {
  return (
    <div
      className={cn(
        "flex gap-3 rounded-xl border border-border bg-secondary/70 p-4 text-sm text-muted-foreground",
        className,
      )}
      role="note"
    >
      <Info aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-primary" />
      <p className="min-w-0">{children}</p>
    </div>
  );
}
