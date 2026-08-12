import { createFileRoute } from "@tanstack/react-router";
import { AlertTriangle, CheckCircle2, Info } from "lucide-react";

import { PageHeader } from "@/components/common/PageHeader";
import { AppShell } from "@/components/layout/AppShell";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { notifications } from "@/data/mock";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/notifications")({
  head: () => ({
    meta: [
      { title: "Notifications — DPI Onboarding" },
      { name: "description", content: "Updates about your DPI application: verification, signatures and required documents." },
      { property: "og:title", content: "Notifications — DPI Onboarding" },
      { property: "og:description", content: "Your onboarding activity timeline and alerts." },
    ],
  }),
  component: NotificationsPage,
});

const ICONS = {
  success: { icon: CheckCircle2, className: "bg-success/10 text-success" },
  warning: { icon: AlertTriangle, className: "bg-warning/15 text-warning-foreground" },
  info: { icon: Info, className: "bg-info/10 text-info" },
} as const;

function NotificationsPage() {
  return (
    <AppShell>
      <PageHeader
        title="Notifications"
        description="Activity and alerts for your investor application."
        actions={<Button variant="outline">Mark all as read</Button>}
      />

      <Card className="border-border shadow-card">
        <CardContent className="divide-y divide-border py-2">
          {notifications.map((item) => {
            const config = ICONS[item.tone];
            const Icon = config.icon;
            return (
              <article key={item.id} className="grid grid-cols-[auto_minmax(0,1fr)] gap-3 py-4">
                <span className={cn("grid size-10 shrink-0 place-items-center rounded-xl", config.className)}>
                  <Icon aria-hidden="true" className="size-5" />
                </span>
                <div className="min-w-0">
                  <div className="flex flex-wrap items-center gap-2">
                    <h2 className="text-sm font-semibold text-foreground">{item.title}</h2>
                    {!item.read && (
                      <span className="rounded-full bg-primary/10 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-primary">
                        New
                      </span>
                    )}
                  </div>
                  <p className="mt-1 text-sm text-muted-foreground">{item.body}</p>
                  <p className="mt-1 text-xs text-muted-foreground">{item.timestamp}</p>
                </div>
              </article>
            );
          })}
        </CardContent>
      </Card>
    </AppShell>
  );
}
