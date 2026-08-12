import { Link, createFileRoute } from "@tanstack/react-router";
import { FileText, Upload } from "lucide-react";

import { PageHeader } from "@/components/common/PageHeader";
import { StatusBadge } from "@/components/common/StatusBadge";
import { AppShell } from "@/components/layout/AppShell";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { uploadedDocuments } from "@/data/mock";

export const Route = createFileRoute("/documents")({
  head: () => ({
    meta: [
      { title: "My Documents — DPI Onboarding" },
      { name: "description", content: "Manage the documents uploaded for your DPI investor onboarding application." },
      { property: "og:title", content: "My Documents — DPI Onboarding" },
      { property: "og:description", content: "Uploaded documents, statuses and required items in one list." },
    ],
  }),
  component: DocumentsPage,
});

function DocumentsPage() {
  return (
    <AppShell>
      <PageHeader
        title="My Documents"
        description="Documents uploaded for your investor application."
        actions={
          <Button asChild>
            <Link to="/onboarding/documents">
              <Upload className="size-4" /> Upload document
            </Link>
          </Button>
        }
      />

      <Card className="border-border shadow-card">
        <CardContent className="divide-y divide-border py-2">
          {uploadedDocuments.map((doc) => (
            <div key={doc.id} className="grid grid-cols-[auto_minmax(0,1fr)] items-center gap-3 py-4 sm:flex sm:justify-between">
              <span className="grid size-10 shrink-0 place-items-center rounded-lg bg-secondary text-primary">
                <FileText aria-hidden="true" className="size-5" />
              </span>
              <div className="min-w-0 sm:flex-1">
                <p className="truncate text-sm font-semibold text-foreground">{doc.name}</p>
                <p className="text-xs text-muted-foreground">
                  {doc.type} • {doc.sizeLabel}
                  {doc.uploadedDate ? ` • ${doc.uploadedDate}` : ""}
                </p>
              </div>
              <div className="col-span-2 flex items-center justify-between gap-3 sm:col-auto">
                <StatusBadge tone={doc.status} label={doc.statusLabel} />
                <Button variant="ghost" size="sm">
                  {doc.status === "required" ? "Upload" : "View"}
                </Button>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </AppShell>
  );
}
