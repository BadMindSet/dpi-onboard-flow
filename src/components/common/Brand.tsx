import { cn } from "@/lib/utils";

interface BrandProps {
  className?: string | undefined;
  /** Use on dark hero backgrounds */
  inverted?: boolean;
  showWordmark?: boolean;
}

export function BrandMark({ className }: { className?: string | undefined }) {
  return (
    <span
      aria-hidden="true"
      className={cn(
        "grid size-9 shrink-0 place-items-center rounded-xl bg-primary text-primary-foreground shadow-card",
        className,
      )}
    >
      <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth={1.8}>
        <path d="M12 2.75 4.75 5.5v6.1c0 4.35 2.94 7.9 7.25 9.65 4.31-1.75 7.25-5.3 7.25-9.65V5.5L12 2.75Z" />
        <path d="M9.25 9.5h2.6a2.5 2.5 0 0 1 0 5h-2.6v-5Zm0 5v2.25" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  );
}

export function Brand({ className, inverted = false, showWordmark = true }: BrandProps) {
  return (
    <span className={cn("flex min-w-0 items-center gap-3", className)}>
      <BrandMark className={inverted ? "bg-primary-foreground text-primary" : undefined} />
      {showWordmark && (
        <span className="flex min-w-0 flex-col leading-none">
          <span
            className={cn(
              "text-lg font-extrabold tracking-tight",
              inverted ? "text-primary-foreground" : "text-primary",
            )}
          >
            DPI
          </span>
          <span
            className={cn(
              "mt-1 truncate text-[10px] font-semibold uppercase tracking-[0.14em]",
              inverted ? "text-primary-foreground/70" : "text-muted-foreground",
            )}
          >
            Digital Investor
            <br />
            Onboarding System
          </span>
        </span>
      )}
    </span>
  );
}
