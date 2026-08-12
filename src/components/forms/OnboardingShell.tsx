import { Link } from "@tanstack/react-router";
import { Check } from "lucide-react";
import type { ReactNode } from "react";
import { toast } from "sonner";

import { PageHeader } from "@/components/common/PageHeader";
import { AppShell } from "@/components/layout/AppShell";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { onboardingSteps } from "@/data/mock";
import { cn } from "@/lib/utils";

export function OnboardingShell({
  stepKey,
  title,
  description,
  children,
  nextTo,
  nextLabel = "Save & Continue",
  prevTo,
}: {
  stepKey: string;
  title: string;
  description: string;
  children: ReactNode;
  nextTo: string;
  nextLabel?: string | undefined;
  prevTo?: string | undefined;
}) {
  const index = onboardingSteps.findIndex((s) => s.key === stepKey);
  const progress = Math.round(((index + 1) / onboardingSteps.length) * 100);

  return (
    <AppShell>
      <PageHeader
        title={title}
        description={description}
        actions={
          <span className="text-sm font-semibold text-muted-foreground">
            Step {index + 1} of {onboardingSteps.length}
          </span>
        }
      />

      <Card className="border-border shadow-card">
        <CardContent className="space-y-4 py-5">
          <Progress value={progress} aria-label={`Onboarding ${progress}% complete`} />
          <ol className="flex flex-wrap gap-x-6 gap-y-2">
            {onboardingSteps.map((step, i) => (
              <li key={step.key} className="flex items-center gap-2 text-sm">
                <span
                  className={cn(
                    "grid size-6 shrink-0 place-items-center rounded-full border text-[11px] font-bold",
                    i < index
                      ? "border-success/30 bg-success/10 text-success"
                      : i === index
                        ? "border-primary bg-primary text-primary-foreground"
                        : "border-border bg-card text-muted-foreground",
                  )}
                >
                  {i < index ? <Check aria-hidden="true" className="size-3.5" /> : i + 1}
                </span>
                <Link
                  to={step.path}
                  className={cn(
                    "truncate hover:text-primary",
                    i === index ? "font-semibold text-foreground" : "text-muted-foreground",
                  )}
                >
                  {step.label}
                </Link>
              </li>
            ))}
          </ol>
        </CardContent>
      </Card>

      <Card className="border-border shadow-card">
        <CardContent className="py-6">
          <form
            className="space-y-6"
            onSubmit={(e) => {
              e.preventDefault();
              toast.success("Demo data saved locally", {
                description: "No backend request was made in this prototype.",
              });
            }}
          >
            {children}
            <div className="flex flex-col-reverse gap-3 border-t border-border pt-5 sm:flex-row sm:justify-between">
              {prevTo ? (
                <Button asChild variant="ghost" type="button">
                  <Link to={prevTo}>Back</Link>
                </Button>
              ) : (
                <span />
              )}
              <div className="flex flex-col gap-3 sm:flex-row">
                <Button variant="outline" type="submit">
                  Save draft
                </Button>
                <Button asChild type="button">
                  <Link to={nextTo}>{nextLabel}</Link>
                </Button>
              </div>
            </div>
          </form>
        </CardContent>
      </Card>
    </AppShell>
  );
}

export function Field({
  label,
  children,
  hint,
}: {
  label: string;
  children: ReactNode;
  hint?: string | undefined;
}) {
  return (
    <div className="space-y-1.5">
      <span className="text-sm font-medium text-foreground">{label}</span>
      {children}
      {hint && <p className="text-xs text-muted-foreground">{hint}</p>}
    </div>
  );
}
