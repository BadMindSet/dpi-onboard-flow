import { createFileRoute } from "@tanstack/react-router";

import { DemoBadge, DemoNotice } from "@/components/common/DemoNotice";
import { PageHeader } from "@/components/common/PageHeader";
import { StatusBadge, statusToneFromLabel } from "@/components/common/StatusBadge";
import { DataTable, type Column } from "@/components/admin/DataTable";
import { AppShell } from "@/components/layout/AppShell";
import { auditLogs } from "@/data/mock";
import type { AuditLogRow } from "@/types";

export const Route = createFileRoute("/admin/audit-logs")({
  head: () => ({
    meta: [
      { title: "Audit Logs — DPI Admin" },
      { name: "description", content: "Review timestamped system activity across onboarding, KYC, eSign and archive modules." },
      { property: "og:title", content: "Audit Logs — DPI Admin" },
      { property: "og:description", content: "Compliance activity trail with no sensitive values displayed." },
    ],
  }),
  component: AdminAuditLogs,
});

const columns: Column<AuditLogRow>[] = [
  { key: "ts", header: "Timestamp", render: (row) => <span className="whitespace-nowrap">{row.timestamp}</span> },
  { key: "user", header: "User", render: (row) => <span className="font-mono text-xs">{row.user}</span> },
  { key: "action", header: "Action", render: (row) => row.action },
  { key: "module", header: "Module", render: (row) => row.module },
  { key: "status", header: "Status", render: (row) => <StatusBadge tone={statusToneFromLabel(row.status)} label={row.status} /> },
];

function AdminAuditLogs() {
  return (
    <AppShell variant="admin">
      <PageHeader
        title="Audit Logs"
        description="System activity trail for the demonstration environment."
        badge={<DemoBadge label="Demo Records" />}
      />
      <DemoNotice>
        Passwords, tokens, full identity numbers and authentication secrets are never recorded or
        displayed in this log.
      </DemoNotice>
      <DataTable
        rows={auditLogs}
        columns={columns}
        searchKeys={(row) => `${row.user} ${row.action} ${row.module}`}
        filter={{
          label: "Module",
          options: ["eKYC", "eSign", "Documents", "Investors", "Paperless"],
          match: (row, value) => row.module === value,
        }}
        pageSize={5}
      />
    </AppShell>
  );
}
