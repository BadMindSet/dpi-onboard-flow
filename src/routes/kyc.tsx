import { Link, createFileRoute } from "@tanstack/react-router";
import {
  AlertTriangle,
  CheckCircle2,
  FileText,
  Loader2,
  RefreshCcw,
  XCircle,
} from "lucide-react";
import { useState } from "react";

import { DemoBadge, DemoNotice } from "@/components/common/DemoNotice";
import { PageHeader } from "@/components/common/PageHeader";
import { StatusBadge } from "@/components/common/StatusBadge";
import { FileDropzone, type PickedFile } from "@/components/documents/FileDropzone";
import { AppShell } from "@/components/layout/AppShell";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { investor } from "@/data/mock";
import type { KycState } from "@/types";

export const Route = createFileRoute("/kyc")({
  head: () => ({
    meta: [
      { title: "eKYC Verification — DPI Onboarding" },
      { name: "description", content: "Upload and validate your identity document using the DPI demo eKYC workflow." },
      { property: "og:title", content: "eKYC Verification — DPI Onboarding" },
      { property: "og:description", content: "Demonstration identity document validation with clear verified, rejected and review states." },
    ],
  }),
  component: KycPage,
});

/**
 * DEMO-ONLY validation heuristic.
 * A random photograph (landscape, monument, selfie, food, screenshot) can never
 * be reported as a verified identity document — it is rejected or sent to review.
 */
const IDENTITY_HINTS = ["aadhaar", "aadhar", "identity", "id-card", "idcard", "kyc", "pan", "passport", "licence", "license", "voter"];
const OBVIOUS_NON_ID = ["taj", "selfie", "photo", "img_", "screenshot", "food", "landscape", "wallpaper", "dsc"];

function classify(file: PickedFile): Exclude<KycState, "PENDING" | "UPLOADING" | "VALIDATING"> {
  const name = file.name.toLowerCase();
  if (OBVIOUS_NON_ID.some((k) => name.includes(k))) return "REJECTED";
  if (IDENTITY_HINTS.some((k) => name.includes(k))) return "VERIFIED";
  return "REVIEW_REQUIRED";
}

function formatSize(bytes: number) {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(0)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

function KycPage() {
  const [state, setState] = useState<KycState>("PENDING");
  const [file, setFile] = useState<PickedFile | null>(null);

  const reset = () => {
    setFile(null);
    setState("PENDING");
  };

  const verify = () => {
    if (!file) return;
    setState("VALIDATING");
    window.setTimeout(() => setState(classify(file)), 1400);
  };

  return (
    <AppShell>
      <PageHeader
        title="eKYC Verification"
        description="Verify your identity document."
        badge={<DemoBadge label="Demo Local Validation" />}
      />

      <DemoNotice>
        This is an educational/student demonstration. This interface does not connect to UIDAI, NSDL,
        government authorities, or official Aadhaar verification services.
      </DemoNotice>

      <div className="grid gap-5 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)]">
        <Card className="border-border shadow-card">
          <CardHeader>
            <CardTitle className="text-base">Identity document</CardTitle>
          </CardHeader>
          <CardContent>
            {!file ? (
              <FileDropzone
                onFile={(picked) => {
                  setFile(picked);
                  setState("UPLOADING");
                  window.setTimeout(() => setState("PENDING"), 600);
                }}
              />
            ) : (
              <div className="space-y-4">
                <div className="overflow-hidden rounded-xl border border-border bg-secondary/40">
                  {file.previewUrl ? (
                    <img
                      src={file.previewUrl}
                      alt={`Preview of uploaded document ${file.name}`}
                      className="max-h-72 w-full object-contain"
                      loading="lazy"
                    />
                  ) : (
                    <div className="flex h-48 items-center justify-center text-muted-foreground">
                      <FileText aria-hidden="true" className="size-10" />
                    </div>
                  )}
                </div>
                <div className="grid grid-cols-[auto_minmax(0,1fr)] items-center gap-3 rounded-xl border border-border p-4">
                  <span className="grid size-10 place-items-center rounded-lg bg-secondary text-primary">
                    <FileText aria-hidden="true" className="size-5" />
                  </span>
                  <div className="min-w-0">
                    <p className="truncate text-sm font-semibold text-foreground">{file.name}</p>
                    <p className="text-xs text-muted-foreground">
                      {formatSize(file.size)} • {file.type} • Uploaded successfully
                    </p>
                  </div>
                </div>
                <div className="flex flex-col gap-3 sm:flex-row">
                  <Button variant="outline" className="flex-1" onClick={reset}>
                    <RefreshCcw className="size-4" /> Replace
                  </Button>
                  <Button className="flex-1" onClick={verify} disabled={state === "VALIDATING"}>
                    {state === "VALIDATING" ? (
                      <>
                        <Loader2 className="size-4 animate-spin" /> Validating…
                      </>
                    ) : (
                      "Verify Document"
                    )}
                  </Button>
                </div>
                {state === "VALIDATING" && <Progress value={66} aria-label="Validating document" />}
              </div>
            )}
          </CardContent>
        </Card>

        <div className="space-y-5">
          <Card className="border-border shadow-card">
            <CardHeader>
              <CardTitle className="text-base">Verification result</CardTitle>
            </CardHeader>
            <CardContent>
              {state === "PENDING" || state === "UPLOADING" || state === "VALIDATING" ? (
                <div className="space-y-3">
                  <StatusBadge
                    tone={state === "VALIDATING" ? "in_progress" : "pending"}
                    label={state === "VALIDATING" ? "Validating document" : "Awaiting verification"}
                  />
                  <p className="text-sm text-muted-foreground">
                    Upload an identity document and run the demo validation to see the result.
                  </p>
                </div>
              ) : state === "VERIFIED" ? (
                <div className="space-y-4">
                  <p className="flex items-center gap-2 text-base font-semibold text-success">
                    <CheckCircle2 aria-hidden="true" className="size-5" /> Demo KYC Verified
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Identity document successfully validated using local demonstration rules.
                  </p>
                  <dl className="space-y-2 rounded-xl border border-border bg-secondary/40 p-4 text-sm">
                    {[
                      ["Name", investor.fullName],
                      ["Masked Aadhaar Number", investor.maskedAadhaar],
                      ["Document Type", "Identity document (demo)"],
                      ["Verification Date", "13 Aug 2026"],
                    ].map(([label, value]) => (
                      <div key={label} className="grid grid-cols-[minmax(0,1fr)_minmax(0,1fr)] gap-3">
                        <dt className="text-muted-foreground">{label}</dt>
                        <dd className="min-w-0 break-words font-medium text-foreground">{value}</dd>
                      </div>
                    ))}
                  </dl>
                  <Button asChild className="w-full">
                    <Link to="/esign">Continue to eSign</Link>
                  </Button>
                </div>
              ) : state === "REJECTED" ? (
                <div className="space-y-4">
                  <p className="flex items-center gap-2 text-base font-semibold text-destructive">
                    <XCircle aria-hidden="true" className="size-5" /> Document Verification Failed
                  </p>
                  <p className="text-sm text-muted-foreground">
                    The uploaded document could not be validated as an identity document.
                  </p>
                  <ul className="list-inside list-disc space-y-1 rounded-xl border border-destructive/20 bg-destructive/5 p-4 text-sm text-muted-foreground">
                    <li>Unsupported document</li>
                    <li>Required information unavailable</li>
                    <li>Invalid document</li>
                    <li>Document could not be validated</li>
                  </ul>
                  <Button variant="outline" className="w-full" onClick={reset}>
                    Upload Another Document
                  </Button>
                </div>
              ) : (
                <div className="space-y-4">
                  <p className="flex items-center gap-2 text-base font-semibold text-warning-foreground">
                    <AlertTriangle aria-hidden="true" className="size-5" /> Verification Requires Review
                  </p>
                  <p className="text-sm text-muted-foreground">
                    The uploaded document could not be confidently validated.
                  </p>
                  <Button variant="outline" className="w-full" onClick={reset}>
                    Upload Another Document
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>

          <Card className="border-border shadow-card">
            <CardHeader>
              <CardTitle className="text-base">Document information</CardTitle>
            </CardHeader>
            <CardContent>
              {state === "VERIFIED" ? (
                <dl className="space-y-2 text-sm">
                  {[
                    ["Document Type", "Identity document (demo)"],
                    ["Full Name", investor.fullName],
                    ["Masked Aadhaar Number", investor.maskedAadhaar],
                    ["Date of Birth", investor.dateOfBirth],
                    ["Gender", investor.gender],
                    ["Address", `${investor.city}, ${investor.state} — ${investor.pincode}`],
                  ].map(([label, value]) => (
                    <div key={label} className="grid grid-cols-[minmax(0,1fr)_minmax(0,1fr)] gap-3">
                      <dt className="text-muted-foreground">{label}</dt>
                      <dd className="min-w-0 break-words font-medium text-foreground">{value}</dd>
                    </div>
                  ))}
                </dl>
              ) : (
                <p className="text-sm text-muted-foreground">
                  Document details appear only after a successful demo validation. Sensitive values
                  are always masked.
                </p>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </AppShell>
  );
}
