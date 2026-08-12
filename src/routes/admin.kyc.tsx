import { createFileRoute } from "@tanstack/react-router";
import { FileText } from "lucide-react";

import { DemoBadge, DemoNotice } from "@/components/common/DemoNotice";
import { PageHeader } from "@/components/common/PageHeader";
import { StatusBadge, statusToneFromLabel } from "@/components/common/StatusBadge";
import { DataTable, type Column } from "@/components/admin/DataTable";
import { AppShell } from "@/components/layout/AppShell";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { adminKycRows, investor } from "@/data/mock";
import type { AdminKycRow } from "@/types";

export const Route = createFileRoute("/admin/kyc")({
  head: () => ({
    meta: [
      { title: "KYC Management — DPI Admin" },
      { name: "description", content: "Review the identity verification queue and document validation outcomes in DPI admin." },
      { property: "og:title", content: "KYC Management — DPI Admin" },
      { property: "og:description", content: "Verification statuses, review panel and outcomes for investor documents." },
    ],
  }),
  component: AdminKyc,
});

const columns: Column<AdminKycRow>[] = [
  { key: "investor", header: "Investor", render: (row) => <span className="font-semibold text-foreground">{row.investor}</span> },
  { key: "doc", header: "Document", render: (row) => <span className="truncate">{row.document}</span> },
  { key: "status", header: "Verification Status", render: (row) => <StatusBadge tone={statusToneFromLabel(row.status)} label={row.status} /> },
  { key: "date", header: "Verification Date", render: (row) => <span className="whitespace-nowrap">{row.verifiedOn}</span> },
  {
    key: "action",
    header: "Action",
    className: "text-right",
    render: () => (
      <Button variant="ghost" size="sm">
        Review
      </Button>
    ),
  },
];

function AdminKyc() {
  return (
    <AppShell variant="admin">
      <PageHeader
        title="KYC Management"
        description="Identity verification queue for the demonstration dataset."
        badge={<DemoBadge label="Demo Local Validation" />}
      />

      <DemoNotice>
        Verification outcomes are produced by local demonstration rules only — no government or
        depository service is contacted.
      </DemoNotice>

      <div className="grid gap-5 xl:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)]">
        <DataTable
          rows={adminKycRows}
          columns={columns}
          searchKeys={(row) => `${row.investor} ${row.document}`}
          filter={{
            label: "Status",
            options: ["Pending", "Verified", "Rejected", "Review Required"],
            match: (row, value) => row.status === value,
          }}
          pageSize={5}
        />

        <Card className="h-fit border-border shadow-card">
          <CardHeader>
            <CardTitle className="text-base">Document review panel</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex h-40 items-center justify-center rounded-xl border border-dashed border-border bg-secondary/40 text-muted-foreground">
              <FileText aria-hidden="true" className="size-9" />
            </div>
            <dl className="space-y-2 text-sm">
              {[
                ["Investor", investor.fullName],
                ["Document", "identity-document.jpg"],
                ["Masked Aadhaar", investor.maskedAadhaar],
                ["Outcome", "Verified (demo)"],
              ].map(([label, value]) => (
                <div key={label} className="grid grid-cols-[minmax(0,1fr)_minmax(0,1fr)] gap-3">
                  <dt className="text-muted-foreground">{label}</dt>
                  <dd className="min-w-0 break-words font-medium text-foreground">{value}</dd>
                </div>
              ))}
            </dl>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" className="flex-1">
                Request review
              </Button>
              <Button size="sm" className="flex-1">
                Approve
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </AppShell>
  );
}
