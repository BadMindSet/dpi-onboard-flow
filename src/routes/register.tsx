import { Link, createFileRoute, useNavigate } from "@tanstack/react-router";
import { AlertTriangle, Check, Eye, EyeOff } from "lucide-react";
import { useMemo, useState } from "react";

import { Brand } from "@/components/common/Brand";
import { DemoNotice } from "@/components/common/DemoNotice";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/register")({
  head: () => ({
    meta: [
      { title: "Create your DPI account — Investor Onboarding" },
      { name: "description", content: "Create a DPI account and start your digital investor onboarding journey." },
      { property: "og:title", content: "Create your DPI account" },
      { property: "og:description", content: "Register to begin paperless investor onboarding with DPI." },
    ],
  }),
  component: RegisterPage,
});

// Demo-only list; a real implementation would call the existing backend API.
const TAKEN_EMAILS = ["investor@dpi.demo", "ananya.sharma@example.com"];

function scorePassword(value: string) {
  let score = 0;
  if (value.length >= 8) score += 25;
  if (/[A-Z]/.test(value)) score += 25;
  if (/[0-9]/.test(value)) score += 25;
  if (/[^A-Za-z0-9]/.test(value)) score += 25;
  return score;
}

function RegisterPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email);
  const emailTaken = emailValid && TAKEN_EMAILS.includes(email.toLowerCase());
  const strength = useMemo(() => scorePassword(password), [password]);
  const strengthLabel = strength >= 100 ? "Strong" : strength >= 75 ? "Good" : strength >= 50 ? "Fair" : "Weak";
  const mismatch = confirm.length > 0 && confirm !== password;

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-card">
        <div className="mx-auto grid h-16 max-w-5xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-4 sm:px-6">
          <Brand />
          <Button asChild variant="ghost" size="sm">
            <Link to="/login">Sign in</Link>
          </Button>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-4 py-10 sm:px-6 sm:py-14">
        <h1 className="text-3xl font-bold text-foreground">Create Your DPI Account</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Start your digital investor onboarding journey.
        </p>

        <form
          className="mt-8 rounded-2xl border border-border bg-card p-6 shadow-card sm:p-8"
          onSubmit={(e) => {
            e.preventDefault();
            void navigate({ to: "/dashboard" });
          }}
        >
          <div className="grid gap-5 md:grid-cols-2">
            <div className="space-y-1.5">
              <Label htmlFor="fullname">Full Name</Label>
              <Input id="fullname" required autoComplete="name" placeholder="Ananya Sharma" />
            </div>

            <div className="space-y-1.5">
              <Label htmlFor="mobile">Mobile Number</Label>
              <Input id="mobile" required inputMode="tel" autoComplete="tel" placeholder="+91 98765 43210" />
            </div>

            <div className="space-y-1.5 md:col-span-2">
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                type="email"
                required
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                aria-describedby="email-help"
                placeholder="you@example.com"
              />
              <p id="email-help" className="flex items-center gap-1.5 text-xs">
                {email.length === 0 ? (
                  <span className="text-muted-foreground">Use an address you can access.</span>
                ) : !emailValid ? (
                  <span className="flex items-center gap-1.5 text-destructive">
                    <AlertTriangle aria-hidden="true" className="size-3.5" /> Please enter a valid email address
                  </span>
                ) : emailTaken ? (
                  <span className="flex items-center gap-1.5 text-warning-foreground">
                    <AlertTriangle aria-hidden="true" className="size-3.5" /> Email already registered (demo check)
                  </span>
                ) : (
                  <span className="flex items-center gap-1.5 text-success">
                    <Check aria-hidden="true" className="size-3.5" /> Email available (demo check)
                  </span>
                )}
              </p>
            </div>

            <div className="space-y-1.5">
              <Label htmlFor="password">Password</Label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  required
                  autoComplete="new-password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="pr-11"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((v) => !v)}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                  className="absolute right-2 top-1/2 grid size-8 -translate-y-1/2 place-items-center rounded-md text-muted-foreground hover:bg-secondary hover:text-foreground"
                >
                  {showPassword ? <EyeOff className="size-4" /> : <Eye className="size-4" />}
                </button>
              </div>
              {password.length > 0 && (
                <div className="space-y-1.5 pt-1">
                  <Progress value={strength} aria-label={`Password strength: ${strengthLabel}`} />
                  <p
                    className={cn(
                      "text-xs font-medium",
                      strength >= 75 ? "text-success" : strength >= 50 ? "text-warning-foreground" : "text-destructive",
                    )}
                  >
                    Password strength: {strengthLabel}
                  </p>
                </div>
              )}
            </div>

            <div className="space-y-1.5">
              <Label htmlFor="confirm">Confirm Password</Label>
              <div className="relative">
                <Input
                  id="confirm"
                  type={showConfirm ? "text" : "password"}
                  required
                  autoComplete="new-password"
                  value={confirm}
                  onChange={(e) => setConfirm(e.target.value)}
                  aria-invalid={mismatch}
                  className="pr-11"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirm((v) => !v)}
                  aria-label={showConfirm ? "Hide password" : "Show password"}
                  className="absolute right-2 top-1/2 grid size-8 -translate-y-1/2 place-items-center rounded-md text-muted-foreground hover:bg-secondary hover:text-foreground"
                >
                  {showConfirm ? <EyeOff className="size-4" /> : <Eye className="size-4" />}
                </button>
              </div>
              {mismatch && <p className="text-xs text-destructive">Passwords do not match.</p>}
            </div>
          </div>

          <Button type="submit" size="lg" className="mt-7 w-full sm:w-auto">
            Create Account
          </Button>

          <p className="mt-5 text-sm text-muted-foreground">
            Already have an account?{" "}
            <Link to="/login" className="font-semibold text-primary hover:underline">
              Sign in
            </Link>
          </p>
        </form>

        <DemoNotice className="mt-6">
          Validation shown here is local demonstration logic only. Email availability is not checked
          against a live database.
        </DemoNotice>
      </main>
    </div>
  );
}
