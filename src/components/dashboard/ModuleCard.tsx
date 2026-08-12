import { Link } from "@tanstack/react-router";
import type { LucideIcon } from "lucide-react";
import { ArrowRight } from "lucide-react";

import { StatusBadge } from "@/components/common/StatusBadge";
import { Button } from "@/components/ui/button";
import type { StatusTone } from "@/types";

export interface ModuleCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  statusTone: StatusTone;
  statusLabel: string;
  actionLabel: string;
  to: string;
  disabled?: boolean | undefined;
}

export function ModuleCard({
  icon: Icon,
  title,
  description,
  statusTone,
  statusLabel,
  actionLabel,
  to,
  disabled = false,
}: ModuleCardProps) {
  return (
    <article className="group flex flex-col rounded-2xl border border-border bg-card p-5 shadow-card transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/25 hover:shadow-elevated">
      <div className="grid grid-cols-[auto_minmax(0,1fr)] items-start gap-3">
        <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-secondary text-primary">
          <Icon aria-hidden="true" className="size-5" />
        </span>
        <div className="min-w-0">
          <h3 className="text-[11px] font-bold uppercase tracking-[0.14em] text-muted-foreground">{title}</h3>
          <p className="mt-1 text-sm text-foreground">{description}</p>
        </div>
      </div>
      <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
        <StatusBadge tone={statusTone} label={statusLabel} />
        {disabled ? (
          <Button variant="outline" size="sm" disabled>
            {actionLabel}
          </Button>
        ) : (
          <Button asChild variant="outline" size="sm" className="group/btn">
            <Link to={to}>
              {actionLabel}
              <ArrowRight className="size-4 transition-transform group-hover/btn:translate-x-0.5" />
            </Link>
          </Button>
        )}
      </div>
    </article>
  );
}
