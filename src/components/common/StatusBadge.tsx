import {
  AlertTriangle,
  CheckCircle2,
  Clock,
  FileSignature,
  Loader2,
  Lock,
  ShieldCheck,
  XCircle,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import type { StatusTone } from "@/types";

const TONES: Record<StatusTone, { icon: LucideIcon; className: string; label: string }> = {
  completed: { icon: CheckCircle2, className: "bg-success/10 text-success border-success/25", label: "Completed" },
  verified: { icon: ShieldCheck, className: "bg-success/10 text-success border-success/25", label: "Verified" },
  signed: { icon: FileSignature, className: "bg-success/10 text-success border-success/25", label: "Signed" },
  ready: { icon: CheckCircle2, className: "bg-info/10 text-info border-info/25", label: "Ready" },
  pending: { icon: Clock, className: "bg-warning/12 text-warning-foreground border-warning/35", label: "Pending" },
  in_progress: { icon: Loader2, className: "bg-info/10 text-info border-info/25", label: "In Progress" },
  required: { icon: AlertTriangle, className: "bg-warning/12 text-warning-foreground border-warning/35", label: "Required" },
  review: { icon: AlertTriangle, className: "bg-warning/12 text-warning-foreground border-warning/35", label: "Review Required" },
  rejected: { icon: XCircle, className: "bg-destructive/10 text-destructive border-destructive/25", label: "Rejected" },
  failed: { icon: XCircle, className: "bg-destructive/10 text-destructive border-destructive/25", label: "Failed" },
  locked: { icon: Lock, className: "bg-muted text-muted-foreground border-border", label: "Locked" },
};

export function StatusBadge({
  tone,
  label,
  className,
}: {
  tone: StatusTone;
  label?: string | undefined;
  className?: string | undefined;
}) {
  const config = TONES[tone];
  const Icon = config.icon;
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs font-semibold",
        config.className,
        className,
      )}
    >
      <Icon aria-hidden="true" className="size-3.5 shrink-0" />
      {label ?? config.label}
    </span>
  );
}

export function statusToneFromLabel(value: string): StatusTone {
  const key = value.toLowerCase();
  if (key.includes("verified")) return "verified";
  if (key.includes("signed")) return "signed";
  if (key.includes("complete")) return "completed";
  if (key.includes("archiv")) return "completed";
  if (key.includes("success")) return "completed";
  if (key.includes("review")) return "review";
  if (key.includes("reject")) return "rejected";
  if (key.includes("fail")) return "failed";
  if (key.includes("lock")) return "locked";
  if (key.includes("ready")) return "ready";
  if (key.includes("progress")) return "in_progress";
  if (key.includes("submitted")) return "in_progress";
  return "pending";
}
