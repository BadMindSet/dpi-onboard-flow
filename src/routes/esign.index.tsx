import { Link, createFileRoute } from "@tanstack/react-router";
import { CheckCircle2, FileSignature, FileText } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

import { DemoBadge, DemoNotice } from "@/components/common/DemoNotice";
import { PageHeader } from "@/components/common/PageHeader";
import { StatusBadge } from "@/components/common/StatusBadge";
import { AppShell } from "@/components/layout/AppShell";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { signingDocument } from "@/data/mock";
import type { EsignState } from "@/types";

export const Route = createFileRoute("/esign/")({
  head: () => ({
    meta: [
      { title: "Digital Signature — DPI eSign" },
      { name: "description", content: "Review your investor application and complete the DPI demonstration digital signature." },
      { property: "og:title", content: "Digital Signature — DPI eSign" },
      { property: "og:description", content: "Review-then-sign workflow with document hash and explicit confirmation." },
    ],
  }),
  component: EsignPage,
});

function EsignPage() {
  const [state, setState] = useState<EsignState>("READY");
  const [confirmed, setConfirmed] = useState(false);

  return (
    <AppShell>
      <PageHeader
        title="Digital Signature"
        description="Review your document before signing."
        badge={<DemoBadge label="Demo Local eSign" />}
        actions={
          <Button asChild variant="outline">
            <Link to="/esign/review">Full document review</Link>
          </Button>
        }
      />

      <DemoNotice>
        This is an educational demonstration and is not a legally binding external eSign service.
      </DemoNotice>

      <div className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.85fr)]">
        <Card className="border-border shadow-card">
          <CardHeader>
            <CardTitle className="text-base">Document preview</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="rounded-xl border border-border bg-secondary/40 p-8 text-center">
              <span className="mx-auto grid size-14 place-items-center rounded-2xl bg-card text-primary shadow-card">
                <FileText aria-hidden="true" className="size-7" />
              </span>
              <p className="mt-4 text-sm font-semibold text-foreground">{signingDocument.name}</p>
              <p className="text-xs text-muted-foreground">
                {signingDocument.type} • {signingDocument.pages} pages
              </p>
            </div>
            <dl className="space-y-2 text-sm">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <dt className="text-muted-foreground">Document status</dt>
                <dd>
                  <StatusBadge
                    tone={state === "SIGNED" ? "signed" : "ready"}
                    label={state === "SIGNED" ? "Signed" : signingDocument.status}
                  />
                </dd>
              </div>
              <div>
                <dt className="text-muted-foreground">SHA-256 hash</dt>
                <dd className="mt-1 break-all rounded-lg bg-secondary/60 p-3 font-mono text-xs text-foreground">
                  {signingDocument.hash}
                </dd>
              </div>
            </dl>
          </CardContent>
        </Card>

        <Card className="border-border shadow-card">
          <CardHeader>
            <CardTitle className="text-base">Signature confirmation</CardTitle>
          </CardHeader>
          <CardContent className="space-y-5">
            {state === "SIGNED" ? (
              <div className="space-y-4">
                <p className="flex items-center gap-2 text-base font-semibold text-success">
                  <CheckCircle2 aria-hidden="true" className="size-5" /> Document signed (demo)
                </p>
                <p className="text-sm text-muted-foreground">
                  Reference DEMO-ESN-4182 • Signed 13 Aug 2026. The signed copy has been placed in
                  your Paperless Vault.
                </p>
                <Button asChild className="w-full">
                  <Link to="/paperless">Open Paperless Vault</Link>
                </Button>
              </div>
            ) : (
              <>
                <div className="flex items-start gap-3 rounded-xl border border-border p-4">
                  <Checkbox
                    id="confirm-sign"
                    checked={confirmed}
                    onCheckedChange={(v) => setConfirmed(v === true)}
                  />
                  <Label htmlFor="confirm-sign" className="text-sm font-normal leading-relaxed">
                    I have reviewed the document and confirm that I want to continue with the
                    demonstration signature.
                  </Label>
                </div>
                <Button
                  className="w-full"
                  disabled={!confirmed}
                  onClick={() => {
                    setState("SIGNED");
                    toast.success("Demo signature applied", {
                      description: "No legally binding signature was created.",
                    });
                  }}
                >
                  <FileSignature className="size-4" /> Confirm &amp; Sign
                </Button>
                <p className="text-xs text-muted-foreground">
                  Signing never happens automatically — explicit confirmation is required.
                </p>
              </>
            )}
          </CardContent>
        </Card>
      </div>
    </AppShell>
  );
}
