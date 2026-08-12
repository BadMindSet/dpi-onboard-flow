import { createFileRoute } from "@tanstack/react-router";

import { DemoBadge } from "@/components/common/DemoNotice";
import { PageHeader } from "@/components/common/PageHeader";
import { StatusBadge } from "@/components/common/StatusBadge";
import { AppShell } from "@/components/layout/AppShell";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { investor } from "@/data/mock";

export const Route = createFileRoute("/profile")({
  head: () => ({
    meta: [
      { title: "Investor Profile — DPI" },
      { name: "description", content: "View your DPI investor profile: personal, contact, address and identity details." },
      { property: "og:title", content: "Investor Profile — DPI" },
      { property: "og:description", content: "Masked identity details and account status for your DPI application." },
    ],
  }),
  component: ProfilePage,
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
      ["Country", investor.country],
    ],
  },
  {
    title: "Identity",
    rows: [
      ["Aadhaar (masked)", investor.maskedAadhaar],
      ["PAN (masked)", investor.maskedPan],
      ["Nationality", investor.nationality],
    ],
  },
];

function ProfilePage() {
  return (
    <AppShell>
      <PageHeader
        title="Investor Profile"
        description="Your application details. Sensitive values are masked."
        badge={<DemoBadge label="Demo Profile" />}
        actions={<Button variant="outline">Edit profile</Button>}
      />

      <Card className="border-border shadow-card">
        <CardContent className="grid gap-4 py-5 sm:grid-cols-3">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Application ID</p>
            <p className="mt-1 font-semibold text-foreground">{investor.applicationId}</p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Created</p>
            <p className="mt-1 font-semibold text-foreground">{investor.createdAt}</p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Account status</p>
            <div className="mt-1">
              <StatusBadge tone="in_progress" label={investor.accountStatus} />
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid gap-4 md:grid-cols-2">
        {sections.map((section) => (
          <Card key={section.title} className="border-border shadow-card">
            <CardHeader className="flex-row items-center justify-between gap-3 space-y-0">
              <CardTitle className="text-base">{section.title}</CardTitle>
              <Button variant="ghost" size="sm">
                Edit
              </Button>
            </CardHeader>
            <CardContent>
              <dl className="space-y-2 text-sm">
                {section.rows.map(([label, value]) => (
                  <div key={label} className="grid grid-cols-[minmax(0,1fr)_minmax(0,1.3fr)] gap-3">
                    <dt className="text-muted-foreground">{label}</dt>
                    <dd className="min-w-0 break-words font-medium text-foreground">{value}</dd>
                  </div>
                ))}
              </dl>
            </CardContent>
          </Card>
        ))}
      </div>
    </AppShell>
  );
}
