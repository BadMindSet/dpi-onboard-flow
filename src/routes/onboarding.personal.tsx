import { createFileRoute } from "@tanstack/react-router";

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

export const Route = createFileRoute("/onboarding/personal")({
  head: () => ({
    meta: [
      { title: "Personal Information — DPI Onboarding" },
      { name: "description", content: "Capture basic investor details as the first step of DPI onboarding." },
      { property: "og:title", content: "Personal Information — DPI Onboarding" },
      { property: "og:description", content: "Step one of the DPI digital investor onboarding flow." },
    ],
  }),
  component: PersonalStep,
});

function PersonalStep() {
  return (
    <OnboardingShell
      stepKey="personal"
      title="Personal Information"
      description="Basic investor information used across your application."
      nextTo="/onboarding/contact"
    >
      <div className="grid gap-5 md:grid-cols-2">
        <Field label="Full Name">
          <Input defaultValue={investor.fullName} aria-label="Full name" />
        </Field>
        <Field label="Father's / Guardian's Name">
          <Input defaultValue={investor.fatherName} aria-label="Father or guardian name" />
        </Field>
        <Field label="Date of Birth">
          <Input defaultValue={investor.dateOfBirth} aria-label="Date of birth" />
        </Field>
        <Field label="Gender">
          <Select defaultValue={investor.gender}>
            <SelectTrigger aria-label="Gender">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Female">Female</SelectItem>
              <SelectItem value="Male">Male</SelectItem>
              <SelectItem value="Other">Other</SelectItem>
            </SelectContent>
          </Select>
        </Field>
        <Field label="Occupation">
          <Input defaultValue={investor.occupation} aria-label="Occupation" />
        </Field>
        <Field label="Nationality">
          <Input defaultValue={investor.nationality} aria-label="Nationality" />
        </Field>
      </div>
    </OnboardingShell>
  );
}
