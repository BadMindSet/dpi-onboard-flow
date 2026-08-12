import { createFileRoute } from "@tanstack/react-router";

import { DemoNotice } from "@/components/common/DemoNotice";
import { StatusBadge } from "@/components/common/StatusBadge";
import { OnboardingShell } from "@/components/forms/OnboardingShell";
import { investor } from "@/data/mock";

export const Route = createFileRoute("/onboarding/review")({
  head: () => ({
    meta: [
      { title: "Review & Submit — DPI Onboarding" },
      { name: "description", content: "Review your investor application details before submitting for verification." },
      { property: "og:title", content: "Review & Submit — DPI Onboarding" },
      { property: "og:description", content: "Final step of the DPI digital investor onboarding flow." },
    ],
  }),
  component: ReviewStep,
});

const sections: { title: string; rows: [string, string][] }[] = [
  {
    title: "Personal Information",
    rows: [
      ["Full Name", investor.fullName],
      ["Date of Birth", investor.dateOfBirth],
      ["Gender", investor.gender],
      ["Occupation", investor.occupation],
    ],
  },
  {
    title: "Contact Information",
    rows: [
      ["Email", investor.email],
      ["Mobile", investor.mobile],
    ],
  },
  {
    title: "Address",
    rows: [
      ["Address", `${investor.addressLine1}, ${investor.addressLine2}`],
      ["City / State", `${investor.city}, ${investor.state}`],
      ["PIN Code", investor.pincode],
    ],
  },
  {
    title: "Identity",
    rows: [
      ["Aadhaar", investor.maskedAadhaar],
      ["PAN", investor.maskedPan],
    ],
  },
];

function ReviewStep() {
  return (
    <OnboardingShell
      stepKey="review"
      title="Review & Submit"
      description="Check your details before continuing to verification."
      prevTo="/onboarding/documents"
      nextTo="/kyc"
      nextLabel="Continue to eKYC"
    >
      <div className="grid gap-4 md:grid-cols-2">
        {sections.map((section) => (
          <section key={section.title} className="rounded-xl border border-border bg-secondary/40 p-4">
            <div className="flex items-center justify-between gap-3">
              <h2 className="text-sm font-semibold text-foreground">{section.title}</h2>
              <StatusBadge tone="completed" />
            </div>
            <dl className="mt-3 space-y-2 text-sm">
              {section.rows.map(([label, value]) => (
                <div key={label} className="grid grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)] gap-3">
                  <dt className="truncate text-muted-foreground">{label}</dt>
                  <dd className="min-w-0 break-words font-medium text-foreground">{value}</dd>
                </div>
              ))}
            </dl>
          </section>
        ))}
      </div>
      <DemoNotice>
        Submitting this form in the prototype does not create a record. Sensitive identity values are
        masked throughout the interface.
      </DemoNotice>
    </OnboardingShell>
  );
}
