import { createFileRoute } from "@tanstack/react-router";

import { DemoBadge } from "@/components/common/DemoNotice";
import { PageHeader } from "@/components/common/PageHeader";
import { StatusBadge, statusToneFromLabel } from "@/components/common/StatusBadge";
import { DataTable, type Column } from "@/components/admin/DataTable";
import { AppShell } from "@/components/layout/AppShell";
import { Button } from "@/components/ui/button";
import { adminInvestors } from "@/data/mock";
import type { AdminInvestorRow } from "@/types";

export const Route = createFileRoute("/admin/investors")({
  head: () => ({
    meta: [
      { title: "Investor Management — DPI Admin" },
      { name: "description", content: "Search, filter and review investor onboarding applications in the DPI admin console." },
      { property: "og:title", content: "Investor Management — DPI Admin" },
      { property: "og:description", content: "Application status, KYC state and document completeness per investor." },
    ],
  }),
  component: AdminInvestors,
});

const columns: Column<AdminInvestorRow>[] = [
  {
    key: "investor",
    header: "Investor",
    render: (row) => (
      <div className="min-w-0">
        <p className="truncate font-semibold text-foreground">{row.name}</p>
        <p className="truncate text-xs text-muted-foreground">{row.email}</p>
      </div>
    ),
  },
  { key: "app", header: "Application ID", render: (row) => <span className="whitespace-nowrap">{row.applicationId}</span> },
  { key: "status", header: "Status", render: (row) => <StatusBadge tone={statusToneFromLabel(row.status)} label={row.status} /> },
  { key: "kyc", header: "KYC", render: (row) => <StatusBadge tone={statusToneFromLabel(row.kyc)} label={row.kyc} /> },
  { key: "docs", header: "Documents", render: (row) => row.documents },
  { key: "created", header: "Created", render: (row) => <span className="whitespace-nowrap">{row.createdDate}</span> },
  {
    key: "actions",
    header: "Actions",
    className: "text-right",
    render: () => (
      <div className="flex justify-end gap-1">
        <Button variant="ghost" size="sm">View</Button>
        <Button variant="ghost" size="sm">Review</Button>
      </div>
    ),
  },
];

function AdminInvestors() {
  return (
    <AppShell variant="admin">
      <PageHeader
        title="Investors"
        description="All investor applications in the demonstration dataset."
        badge={<DemoBadge label="Demo Records" />}
      />
      <DataTable
        rows={adminInvestors}
        columns={columns}
        searchKeys={(row) => `${row.name} ${row.email} ${row.applicationId}`}
        filter={{
          label: "Status",
          options: ["In Progress", "Submitted", "Completed"],
          match: (row, value) => row.status === value,
        }}
      />
    </AppShell>
  );
}
