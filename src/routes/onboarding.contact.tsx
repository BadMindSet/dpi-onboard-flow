import { createFileRoute } from "@tanstack/react-router";

import { Field, OnboardingShell } from "@/components/forms/OnboardingShell";
import { Input } from "@/components/ui/input";
import { investor } from "@/data/mock";

export const Route = createFileRoute("/onboarding/contact")({
  head: () => ({
    meta: [
      { title: "Contact Information — DPI Onboarding" },
      { name: "description", content: "Provide email and mobile contact details for your DPI investor application." },
      { property: "og:title", content: "Contact Information — DPI Onboarding" },
      { property: "og:description", content: "Step two of the DPI digital investor onboarding flow." },
    ],
  }),
  component: ContactStep,
});

function ContactStep() {
  return (
    <OnboardingShell
      stepKey="contact"
      title="Contact Information"
      description="How we reach you about your application."
      prevTo="/onboarding/personal"
      nextTo="/onboarding/address"
    >
      <div className="grid gap-5 md:grid-cols-2">
        <Field label="Email Address" hint="Used for application notifications.">
          <Input type="email" defaultValue={investor.email} aria-label="Email address" />
        </Field>
        <Field label="Mobile Number" hint="Masked in this demonstration build.">
          <Input defaultValue={investor.mobile} aria-label="Mobile number" />
        </Field>
        <Field label="Alternate Contact Number">
          <Input placeholder="Optional" aria-label="Alternate contact number" />
        </Field>
        <Field label="Preferred Contact Time">
          <Input placeholder="e.g. 10:00 – 18:00" aria-label="Preferred contact time" />
        </Field>
      </div>
    </OnboardingShell>
  );
}
