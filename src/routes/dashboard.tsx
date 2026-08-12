import { Link, createFileRoute } from "@tanstack/react-router";
import {
  FileSignature,
  FileText,
  FolderLock,
  IdCard,
  MapPin,
  Phone,
  ShieldCheck,
  UserRound,
} from "lucide-react";

import { DemoBadge } from "@/components/common/DemoNotice";
import { PageHeader } from "@/components/common/PageHeader";
import { StatusBadge } from "@/components/common/StatusBadge";
import { ModuleCard } from "@/components/dashboard/ModuleCard";
import { AppShell } from "@/components/layout/AppShell";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { investor } from "@/data/mock";

export const Route = createFileRoute("/dashboard")({
  head: () => ({
    meta: [
      { title: "Investor Dashboard — DPI Onboarding" },
      { name: "description", content: "Track your DPI onboarding progress, eKYC status, documents and digital signature workflow." },
      { property: "og:title", content: "Investor Dashboard — DPI Onboarding" },
      { property: "og:description", content: "Your onboarding progress, verification status and signed documents in one place." },
    ],
  }),
  component: Dashboard,
});

const modules = [
  { icon: UserRound, title: "Personal Information", description: "Basic investor information", statusTone: "completed" as const, statusLabel: "Completed", actionLabel: "View", to: "/onboarding/personal" },
  { icon: Phone, title: "Contact Information", description: "Email and mobile details", statusTone: "completed" as const, statusLabel: "Completed", actionLabel: "View", to: "/onboarding/contact" },
  { icon: MapPin, title: "Address", description: "Residential address details", statusTone: "completed" as const, statusLabel: "Completed", actionLabel: "View", to: "/onboarding/address" },
  { icon: IdCard, title: "Identity", description: "Identity information", statusTone: "completed" as const, statusLabel: "Completed", actionLabel: "View", to: "/onboarding/identity" },
  { icon: FileText, title: "Documents", description: "Upload required documents", statusTone: "in_progress" as const, statusLabel: "2 / 3 completed", actionLabel: "Manage", to: "/onboarding/documents" },
  { icon: ShieldCheck, title: "eKYC Verification", description: "Verify your identity document", statusTone: "pending" as const, statusLabel: "Pending", actionLabel: "Verify Identity", to: "/kyc" },
  { icon: FileSignature, title: "eSign", description: "Digitally sign your documents", statusTone: "locked" as const, statusLabel: "Locked until KYC completion", actionLabel: "View", to: "/esign" },
  { icon: FolderLock, title: "Paperless Vault", description: "Access your signed documents", statusTone: "completed" as const, statusLabel: "3 Documents", actionLabel: "Open Vault", to: "/paperless" },
];

function Dashboard() {
  const progress = 80;

  return (
    <AppShell>
      <PageHeader
        title="Good morning, Investor"
        description="Complete your digital onboarding and verification."
        badge={<DemoBadge label="Demo Data" />}
        actions={
          <Button asChild>
            <Link to="/kyc">Continue onboarding</Link>
          </Button>
        }
      />

      <Card className="border-border shadow-card">
        <CardContent className="py-6">
          <div className="grid gap-6 md:grid-cols-[minmax(0,1fr)_auto] md:items-center">
            <div className="min-w-0 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-muted-foreground">
                    Onboarding progress
                  </p>
                  <p className="mt-1 text-2xl font-bold text-foreground">{progress}% Complete</p>
                </div>
                <StatusBadge tone="in_progress" label="Application in progress" />
              </div>
              <Progress value={progress} aria-label={`Onboarding ${progress}% complete`} />
              <p className="text-sm text-muted-foreground">
                Remaining: complete your eKYC verification, then sign your application.
              </p>
            </div>
            <dl className="grid gap-4 rounded-xl border border-border bg-secondary/50 p-4 text-sm sm:grid-cols-2 md:w-72 md:grid-cols-1">
              <div>
                <dt className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Application ID</dt>
                <dd className="mt-0.5 font-semibold text-foreground">{investor.applicationId}</dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Status</dt>
                <dd className="mt-0.5 font-semibold text-foreground">Verification pending</dd>
              </div>
            </dl>
          </div>
        </CardContent>
      </Card>

      <section aria-labelledby="modules-heading" className="space-y-4">
        <h2 id="modules-heading" className="text-lg font-semibold text-foreground">
          Onboarding modules
        </h2>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {modules.map((module) => (
            <ModuleCard key={module.title} {...module} />
          ))}
        </div>
      </section>
    </AppShell>
  );
}
