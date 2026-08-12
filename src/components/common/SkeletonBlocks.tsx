import { Skeleton } from "@/components/ui/skeleton";

export function CardGridSkeleton({ count = 6 }: { count?: number | undefined }) {
  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
      {Array.from({ length: count }).map((_, i) => (
        <div key={i} className="rounded-2xl border border-border bg-card p-5">
          <Skeleton className="size-10 rounded-xl" />
          <Skeleton className="mt-4 h-4 w-2/3" />
          <Skeleton className="mt-2 h-3 w-full" />
          <Skeleton className="mt-6 h-9 w-28 rounded-lg" />
        </div>
      ))}
    </div>
  );
}

export function TableSkeleton({ rows = 6 }: { rows?: number | undefined }) {
  return (
    <div className="space-y-3 rounded-2xl border border-border bg-card p-5">
      {Array.from({ length: rows }).map((_, i) => (
        <Skeleton key={i} className="h-10 w-full rounded-lg" />
      ))}
    </div>
  );
}
