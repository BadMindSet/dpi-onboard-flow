import { createFileRoute } from "@tanstack/react-router";
import { Download, Eye, FileText, Search } from "lucide-react";
import { useMemo, useState } from "react";

import { DemoBadge } from "@/components/common/DemoNotice";
import { EmptyState } from "@/components/common/EmptyState";
import { PageHeader } from "@/components/common/PageHeader";
import { StatusBadge } from "@/components/common/StatusBadge";
import { AppShell } from "@/components/layout/AppShell";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { vaultDocuments } from "@/data/mock";

export const Route = createFileRoute("/paperless")({
  head: () => ({
    meta: [
      { title: "Paperless Vault — DPI Documents" },
      { name: "description", content: "Secure access to your signed DPI investor documents with search, filter and download." },
      { property: "og:title", content: "Paperless Vault — DPI Documents" },
      { property: "og:description", content: "Your signed and verified documents, archived and searchable." },
    ],
  }),
  component: PaperlessPage,
});

function PaperlessPage() {
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState("recent");

  const documents = useMemo(() => {
    const filtered = vaultDocuments.filter((doc) =>
      doc.name.toLowerCase().includes(query.toLowerCase()),
    );
    return [...filtered].sort((a, b) =>
      sort === "name" ? a.name.localeCompare(b.name) : b.id.localeCompare(a.id),
    );
  }, [query, sort]);

  return (
    <AppShell>
      <PageHeader
        title="Paperless Vault"
        description="Secure access to your signed documents."
        badge={<DemoBadge label="Demo Archive" />}
      />

      <div className="grid gap-3 sm:flex sm:items-center sm:justify-between">
        <div className="relative min-w-0 sm:max-w-xs sm:flex-1">
          <Search aria-hidden="true" className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search documents"
            aria-label="Search documents"
            className="pl-9"
          />
        </div>
        <Select value={sort} onValueChange={setSort}>
          <SelectTrigger className="w-full sm:w-52" aria-label="Sort documents">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="recent">Most recent</SelectItem>
            <SelectItem value="name">Name (A–Z)</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {documents.length === 0 ? (
        <EmptyState
          icon={FileText}
          title="No documents yet"
          description="Your signed documents will appear here."
          action={<Button variant="outline">Go to Documents</Button>}
        />
      ) : (
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {documents.map((doc) => (
            <article key={doc.id} className="flex flex-col rounded-2xl border border-border bg-card p-5 shadow-card transition-shadow hover:shadow-elevated">
              <div className="grid grid-cols-[auto_minmax(0,1fr)] items-start gap-3">
                <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-secondary text-primary">
                  <FileText aria-hidden="true" className="size-5" />
                </span>
                <div className="min-w-0">
                  <h2 className="truncate text-sm font-semibold text-foreground">{doc.name}</h2>
                  <p className="text-xs text-muted-foreground">
                    {doc.type} • {doc.sizeLabel} • {doc.signedDate}
                  </p>
                </div>
              </div>
              <div className="mt-4">
                <StatusBadge tone={doc.status} label={doc.statusLabel} />
              </div>
              <div className="mt-5 flex gap-2">
                <Button variant="outline" size="sm" className="flex-1">
                  <Eye className="size-4" /> View
                </Button>
                <Button variant="outline" size="sm" className="flex-1">
                  <Download className="size-4" /> Download
                </Button>
              </div>
            </article>
          ))}
        </div>
      )}
    </AppShell>
  );
}
