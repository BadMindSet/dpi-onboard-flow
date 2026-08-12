import { createFileRoute } from "@tanstack/react-router";

import { DemoBadge } from "@/components/common/DemoNotice";
import { PageHeader } from "@/components/common/PageHeader";
import { StatusBadge, statusToneFromLabel } from "@/components/common/StatusBadge";
import { DataTable, type Column } from "@/components/admin/DataTable";
import { AppShell } from "@/components/layout/AppShell";
import { Button } from "@/components/ui/button";
import { adminEsignRows } from "@/data/mock";
import type { AdminEsignRow } from "@/types";

export const Route = createFileRoute("/admin/esign")({
  head: () => ({
    meta: [
      { title: "eSign Management — DPI Admin" },
      { name: "description", content: "Monitor demonstration signature status and references for investor documents." },
      { property: "og:title", content: "eSign Management — DPI Admin" },
      { property: "og:description", content: "Signature states: ready, pending, signed and failed." },
    ],
  }),
  component: AdminEsign,
});

const columns: Column<AdminEsignRow>[] = [
  { key: "investor", header: "Investor", render: (row) => <span className="font-semibold text-foreground">{row.investor}</span> },
  { key: "doc", header: "Document", render: (row) => row.document },
  { key: "status", header: "Signature Status", render: (row) => <StatusBadge tone={statusToneFromLabel(row.status)} label={row.status} /> },
  { key: "date", header: "Signed Date", render: (row) => <span className="whitespace-nowrap">{row.signedDate}</span> },
  { key: "ref", header: "Reference", render: (row) => <span className="font-mono text-xs">{row.reference}</span> },
  {
    key: "action",
    header: "Action",
    className: "text-right",
    render: () => (
      <Button variant="ghost" size="sm">
        View
      </Button>
    ),
  },
];

function AdminEsign() {
  return (
    <AppShell variant="admin">
      <PageHeader
        title="eSign Management"
        description="Signature workflow status across investor documents."
        badge={<DemoBadge label="Demo Local eSign" />}
      />
      <DataTable
        rows={adminEsignRows}
        columns={columns}
        searchKeys={(row) => `${row.investor} ${row.document} ${row.reference}`}
        filter={{
          label: "Status",
          options: ["Ready", "Pending", "Signed", "Failed"],
          match: (row, value) => row.status === value,
        }}
        pageSize={5}
      />
    </AppShell>
  );
}
