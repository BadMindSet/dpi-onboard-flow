import { Link, createFileRoute } from "@tanstack/react-router";
import { FileText } from "lucide-react";

import { StatusBadge } from "@/components/common/StatusBadge";
import { FileDropzone } from "@/components/documents/FileDropzone";
import { OnboardingShell } from "@/components/forms/OnboardingShell";
import { Button } from "@/components/ui/button";
import { uploadedDocuments } from "@/data/mock";

export const Route = createFileRoute("/onboarding/documents")({
  head: () => ({
    meta: [
      { title: "Upload Documents — DPI Onboarding" },
      { name: "description", content: "Upload the documents required to complete your DPI investor application." },
      { property: "og:title", content: "Upload Documents — DPI Onboarding" },
      { property: "og:description", content: "Step five of the DPI digital investor onboarding flow." },
    ],
  }),
  component: DocumentsStep,
});

function DocumentsStep() {
  return (
    <OnboardingShell
      stepKey="documents"
      title="Documents"
      description="Upload the supporting documents required for your application."
      prevTo="/onboarding/identity"
      nextTo="/onboarding/review"
    >
      <FileDropzone onFile={() => undefined} />

      <div className="space-y-3">
        <h2 className="text-sm font-semibold text-foreground">Required documents</h2>
        <ul className="space-y-3">
          {uploadedDocuments.map((doc) => (
            <li
              key={doc.id}
              className="grid grid-cols-[auto_minmax(0,1fr)] items-center gap-3 rounded-xl border border-border bg-card p-4 sm:flex sm:justify-between"
            >
              <span className="grid size-10 shrink-0 place-items-center rounded-lg bg-secondary text-primary">
                <FileText aria-hidden="true" className="size-5" />
              </span>
              <div className="min-w-0 sm:flex-1">
                <p className="truncate text-sm font-semibold text-foreground">{doc.name}</p>
                <p className="text-xs text-muted-foreground">
                  {doc.type} • {doc.sizeLabel}
                </p>
              </div>
              <div className="col-span-2 flex items-center justify-between gap-3 sm:col-auto">
                <StatusBadge tone={doc.status} label={doc.statusLabel} />
                <Button variant="ghost" size="sm">
                  {doc.status === "required" ? "Upload" : "Replace"}
                </Button>
              </div>
            </li>
          ))}
        </ul>
        <p className="text-sm text-muted-foreground">
          Ready to verify your identity document?{" "}
          <Link to="/kyc" className="font-semibold text-primary hover:underline">
            Go to eKYC Verification
          </Link>
        </p>
      </div>
    </OnboardingShell>
  );
}
