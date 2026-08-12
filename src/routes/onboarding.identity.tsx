import { createFileRoute } from "@tanstack/react-router";

import { DemoNotice } from "@/components/common/DemoNotice";
import { Field, OnboardingShell } from "@/components/forms/OnboardingShell";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { investor } from "@/data/mock";

export const Route = createFileRoute("/onboarding/identity")({
  head: () => ({
    meta: [
      { title: "Identity Details — DPI Onboarding" },
      { name: "description", content: "Provide identity document details for demo verification in DPI onboarding." },
      { property: "og:title", content: "Identity Details — DPI Onboarding" },
      { property: "og:description", content: "Step four of the DPI digital investor onboarding flow." },
    ],
  }),
  component: IdentityStep,
});

function IdentityStep() {
  return (
    <OnboardingShell
      stepKey="identity"
      title="Identity"
      description="Identity information used for demonstration verification."
      prevTo="/onboarding/address"
      nextTo="/onboarding/documents"
    >
      <div className="grid gap-5 md:grid-cols-2">
        <Field label="Identity Document Type">
          <Select defaultValue="aadhaar">
            <SelectTrigger aria-label="Identity document type">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="aadhaar">Aadhaar (demo)</SelectItem>
              <SelectItem value="passport">Passport</SelectItem>
              <SelectItem value="license">Driving Licence</SelectItem>
            </SelectContent>
          </Select>
        </Field>
        <Field label="Identity Number" hint="Stored masked in this prototype.">
          <Input defaultValue={investor.maskedAadhaar} aria-label="Identity number" />
        </Field>
        <Field label="PAN" hint="Masked value shown.">
          <Input defaultValue={investor.maskedPan} aria-label="PAN number" />
        </Field>
        <Field label="Name as per Document">
          <Input defaultValue={investor.fullName} aria-label="Name as per document" />
        </Field>
      </div>
      <DemoNotice>
        Identity values are masked demonstration data. This screen does not query UIDAI, NSDL or any
        government authority.
      </DemoNotice>
    </OnboardingShell>
  );
}
