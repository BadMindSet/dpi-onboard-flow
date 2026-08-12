import { createFileRoute } from "@tanstack/react-router";

import { Field, OnboardingShell } from "@/components/forms/OnboardingShell";
import { Input } from "@/components/ui/input";
import { investor } from "@/data/mock";

export const Route = createFileRoute("/onboarding/address")({
  head: () => ({
    meta: [
      { title: "Address Details — DPI Onboarding" },
      { name: "description", content: "Add your residential address to the DPI investor onboarding application." },
      { property: "og:title", content: "Address Details — DPI Onboarding" },
      { property: "og:description", content: "Step three of the DPI digital investor onboarding flow." },
    ],
  }),
  component: AddressStep,
});

function AddressStep() {
  return (
    <OnboardingShell
      stepKey="address"
      title="Address"
      description="Residential address as it appears on your identity document."
      prevTo="/onboarding/contact"
      nextTo="/onboarding/identity"
    >
      <div className="grid gap-5 md:grid-cols-2">
        <Field label="Address Line 1">
          <Input defaultValue={investor.addressLine1} aria-label="Address line 1" />
        </Field>
        <Field label="Address Line 2">
          <Input defaultValue={investor.addressLine2} aria-label="Address line 2" />
        </Field>
        <Field label="City">
          <Input defaultValue={investor.city} aria-label="City" />
        </Field>
        <Field label="State">
          <Input defaultValue={investor.state} aria-label="State" />
        </Field>
        <Field label="PIN Code">
          <Input defaultValue={investor.pincode} inputMode="numeric" aria-label="PIN code" />
        </Field>
        <Field label="Country">
          <Input defaultValue={investor.country} aria-label="Country" />
        </Field>
      </div>
    </OnboardingShell>
  );
}
