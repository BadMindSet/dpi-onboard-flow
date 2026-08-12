import { createFileRoute } from "@tanstack/react-router";
import { Download, Eye } from "lucide-react";

import { DemoBadge } from "@/components/common/DemoNotice";
import { PageHeader } from "@/components/common/PageHeader";
import { StatusBadge, statusToneFromLabel } from "@/components/common/StatusBadge";
import { DataTable, type Column } from "@/components/admin/DataTable";
import { AppShell } from "@/components/layout/AppShell";
import { Button } from "@/components/ui/button";
import { adminArchiveRows } from "@/data/mock";
import type { AdminArchiveRow } from "@/types";

export const Route = createFileRoute("/admin/paperless")({
  head: () => ({
    meta: [
      { title: "Paperless Archive — DPI Admin" },
      { name: "description", content: "Browse archived signed investor documents in the DPI admin console." },
      { property: "og:title", content: "Paperless Archive — DPI Admin" },
      { property: "og:description", content: "Archived documents with signer, date and access scope." },
    ],
  }),
  component: AdminPaperless,
});

const columns: Column<AdminArchiveRow>[] = [
  { key: "doc", header: "Document", render: (row) => <span className="font-semibold text-foreground">{row.document}</span> },
  { key: "investor", header: "Investor", render: (row) => row.investor },
  { key: "date", header: "Signed Date", render: (row) => <span className="whitespace-nowrap">{row.signedDate}</span> },
  { key: "status", header: "Status", render: (row) => <StatusBadge tone={statusToneFromLabel(row.status)} label={row.status} /> },
  { key: "access", header: "Access", render: (row) => <span className="text-muted-foreground">{row.access}</span> },
  {
    key: "actions",
    header: "Actions",
    className: "text-right",
    render: () => (
      <div className="flex justify-end gap-1">
        <Button variant="ghost" size="sm">
          <Eye className="size-4" /> View
        </Button>
        <Button variant="ghost" size="sm">
          <Download className="size-4" /> Download
        </Button>
      </div>
    ),
  },
];

function AdminPaperless() {
  return (
    <AppShell variant="admin">
      <PageHeader
        title="Paperless Archive"
        description="Signed documents archived across all investors."
        badge={<DemoBadge label="Demo Archive" />}
      />
      <DataTable
        rows={adminArchiveRows}
        columns={columns}
        searchKeys={(row) => `${row.document} ${row.investor}`}
        pageSize={5}
      />
    </AppShell>
  );
}
