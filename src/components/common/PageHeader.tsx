import type { ReactNode } from "react";

export function PageHeader({
  title,
  description,
  actions,
  badge,
}: {
  title: string;
  description?: string | undefined;
  actions?: ReactNode | undefined;
  badge?: ReactNode | undefined;
}) {
  return (
    <header className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-4 sm:flex sm:flex-wrap sm:items-center sm:justify-between">
      <div className="min-w-0">
        <div className="flex flex-wrap items-center gap-3">
          <h1 className="truncate text-2xl font-bold text-foreground sm:text-[28px]">{title}</h1>
          {badge}
        </div>
        {description && (
          <p className="mt-1.5 max-w-2xl text-sm text-muted-foreground">{description}</p>
        )}
      </div>
      {actions && <div className="flex shrink-0 flex-wrap items-center gap-2">{actions}</div>}
    </header>
  );
}
