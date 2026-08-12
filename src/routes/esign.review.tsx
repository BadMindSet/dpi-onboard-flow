import { Link, createFileRoute } from "@tanstack/react-router";
import { FileText } from "lucide-react";

import { DemoBadge, DemoNotice } from "@/components/common/DemoNotice";
import { PageHeader } from "@/components/common/PageHeader";
import { StatusBadge } from "@/components/common/StatusBadge";
import { AppShell } from "@/components/layout/AppShell";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { investor, signingDocument } from "@/data/mock";

export const Route = createFileRoute("/esign/review")({
  head: () => ({
    meta: [
      { title: "Document Review — DPI eSign" },
      { name: "description", content: "Review the full investor application content before applying the demo digital signature." },
      { property: "og:title", content: "Document Review — DPI eSign" },
      { property: "og:description", content: "Read the application document, hash and metadata before signing." },
    ],
  }),
  component: EsignReview,
});

const clauses = [
  "Investor declares that the information provided in this application is accurate to the best of their knowledge.",
  "Investor acknowledges that identity verification in this environment is a local demonstration and carries no legal effect.",
  "Investor consents to the storage of application documents in the paperless archive of this prototype.",
  "Investor understands that this document is not filed with any regulator, depository or government authority.",
];

function EsignReview() {
  return (
    <AppShell>
      <PageHeader
        title="Document Review"
        description="Read the full document before continuing to signature."
        badge={<DemoBadge label="Demo Local eSign" />}
        actions={
          <Button asChild>
            <Link to="/esign">Back to signing</Link>
          </Button>
        }
      />

      <Card className="border-border shadow-card">
        <CardContent className="space-y-6 py-6">
          <div className="grid grid-cols-[auto_minmax(0,1fr)] items-center gap-3">
            <span className="grid size-11 place-items-center rounded-xl bg-secondary text-primary">
              <FileText aria-hidden="true" className="size-5" />
            </span>
            <div className="min-w-0">
              <h2 className="truncate text-base font-semibold text-foreground">{signingDocument.name}</h2>
              <p className="text-xs text-muted-foreground">
                {signingDocument.type} • {signingDocument.pages} pages
              </p>
            </div>
          </div>

          <StatusBadge tone="ready" label={signingDocument.status} />

          <dl className="grid gap-3 rounded-xl border border-border bg-secondary/40 p-4 text-sm sm:grid-cols-2">
            {[
              ["Applicant", investor.fullName],
              ["Application ID", investor.applicationId],
              ["Masked Aadhaar", investor.maskedAadhaar],
              ["Generated", "13 Aug 2026"],
            ].map(([label, value]) => (
              <div key={label}>
                <dt className="text-muted-foreground">{label}</dt>
                <dd className="font-medium text-foreground">{value}</dd>
              </div>
            ))}
          </dl>

          <ol className="space-y-3 text-sm text-muted-foreground">
            {clauses.map((clause, i) => (
              <li key={clause} className="rounded-xl border border-border p-4">
                <span className="font-semibold text-foreground">Clause {i + 1}. </span>
                {clause}
              </li>
            ))}
          </ol>

          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              SHA-256 hash
            </p>
            <p className="mt-1 break-all rounded-lg bg-secondary/60 p-3 font-mono text-xs">
              {signingDocument.hash}
            </p>
          </div>
        </CardContent>
      </Card>

      <DemoNotice>
        Document content is illustrative demonstration text for an academic project.
      </DemoNotice>
    </AppShell>
  );
}
