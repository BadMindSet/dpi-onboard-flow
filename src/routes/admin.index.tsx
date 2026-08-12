import { Link, createFileRoute } from "@tanstack/react-router";
import { FileSignature, FolderLock, ScrollText, ShieldCheck, Users } from "lucide-react";

import { DemoBadge, DemoNotice } from "@/components/common/DemoNotice";
import { PageHeader } from "@/components/common/PageHeader";
import { AppShell } from "@/components/layout/AppShell";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { adminStats } from "@/data/mock";

export const Route = createFileRoute("/admin/")({
  head: () => ({
    meta: [
      { title: "Admin Dashboard — DPI Console" },
      { name: "description", content: "Operations overview for DPI: investors, KYC queue, signatures and archived documents." },
      { property: "og:title", content: "Admin Dashboard — DPI Console" },
      { property: "og:description", content: "Enterprise console for reviewing investor onboarding activity." },
    ],
  }),
  component: AdminDashboard,
});

const shortcuts = [
  { icon: Users, label: "Investors", to: "/admin/investors", body: "Review applications and onboarding progress." },
  { icon: ShieldCheck, label: "KYC Management", to: "/admin/kyc", body: "Process the identity verification queue." },
  { icon: FileSignature, label: "eSign Management", to: "/admin/esign", body: "Track signature status per document." },
  { icon: FolderLock, label: "Paperless Archive", to: "/admin/paperless", body: "Access archived signed documents." },
  { icon: ScrollText, label: "Audit Logs", to: "/admin/audit-logs", body: "Review system activity records." },
];

function AdminDashboard() {
  return (
    <AppShell variant="admin">
      <PageHeader
        title="Admin Dashboard"
        description="Operational overview of investor onboarding activity."
        badge={<DemoBadge label="Demo Statistics" />}
      />

      <DemoNotice>
        All figures below are labelled demonstration values. They are not sourced from the production
        backend.
      </DemoNotice>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-5">
        {adminStats.map((stat) => (
          <Card key={stat.label} className="border-border shadow-card">
            <CardContent className="py-5">
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">
                {stat.label}
              </p>
              <p className="mt-2 text-3xl font-bold text-foreground">{stat.value}</p>
              <p className="mt-1 text-xs text-muted-foreground">{stat.delta}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <section aria-labelledby="admin-shortcuts" className="space-y-4">
        <h2 id="admin-shortcuts" className="text-lg font-semibold text-foreground">
          Management areas
        </h2>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {shortcuts.map((item) => (
            <article key={item.label} className="flex flex-col rounded-2xl border border-border bg-card p-5 shadow-card transition-all hover:-translate-y-0.5 hover:shadow-elevated">
              <span className="grid size-11 place-items-center rounded-xl bg-secondary text-primary">
                <item.icon aria-hidden="true" className="size-5" />
              </span>
              <h3 className="mt-4 text-base font-semibold text-foreground">{item.label}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{item.body}</p>
              <Button asChild variant="outline" size="sm" className="mt-5 self-start">
                <Link to={item.to}>Open</Link>
              </Button>
            </article>
          ))}
        </div>
      </section>
    </AppShell>
  );
}
