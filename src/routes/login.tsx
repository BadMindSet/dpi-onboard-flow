import { Link, createFileRoute, useNavigate } from "@tanstack/react-router";
import { Eye, EyeOff, Lock, Mail } from "lucide-react";
import { useState } from "react";

import heroImage from "@/assets/dpi-hero.jpg";
import { Brand } from "@/components/common/Brand";
import { DemoNotice } from "@/components/common/DemoNotice";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export const Route = createFileRoute("/login")({
  head: () => ({
    meta: [
      { title: "Sign in — DPI Investor Onboarding" },
      { name: "description", content: "Sign in to your DPI account to continue your digital investor onboarding." },
      { property: "og:title", content: "Sign in — DPI Investor Onboarding" },
      { property: "og:description", content: "Secure sign in for the DPI digital investor onboarding workspace." },
    ],
  }),
  component: LoginPage,
});

function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="grid min-h-screen lg:grid-cols-2">
      <section className="relative hidden overflow-hidden dpi-hero-grid lg:flex lg:flex-col lg:justify-between lg:p-12">
        <div aria-hidden="true" className="absolute inset-0 dpi-mesh opacity-40" />
        <Brand inverted className="relative" />
        <div className="relative max-w-md">
          <img
            src={heroImage}
            alt="Abstract secure digital identity network visual"
            className="mb-8 w-64 rounded-2xl border border-primary-foreground/15 opacity-90"
            loading="lazy"
            width={1280}
            height={1280}
          />
          <h2 className="text-3xl font-bold text-primary-foreground">
            Paperless onboarding, end to end.
          </h2>
          <p className="mt-3 text-sm text-primary-foreground/70">
            Capture investor details, verify identity documents, sign digitally and archive everything
            in one secure workspace.
          </p>
        </div>
        <p className="relative text-xs text-primary-foreground/60">
          Educational demonstration build — no external verification services are contacted.
        </p>
      </section>

      <section className="flex items-center justify-center bg-background px-4 py-12 sm:px-8">
        <div className="w-full max-w-md">
          <div className="lg:hidden">
            <Brand />
          </div>
          <div className="mt-8 rounded-2xl border border-border bg-card p-6 shadow-card sm:p-8 lg:mt-0">
            <h1 className="text-2xl font-bold text-foreground">Welcome Back</h1>
            <p className="mt-1 text-sm text-muted-foreground">Sign in to your DPI account</p>

            <form
              className="mt-7 space-y-5"
              onSubmit={(e) => {
                e.preventDefault();
                void navigate({ to: "/dashboard" });
              }}
            >
              <div className="space-y-1.5">
                <Label htmlFor="login-email">Email Address</Label>
                <div className="relative">
                  <Mail aria-hidden="true" className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
                  <Input id="login-email" type="email" autoComplete="email" required placeholder="you@example.com" className="pl-9" />
                </div>
              </div>

              <div className="space-y-1.5">
                <Label htmlFor="login-password">Password</Label>
                <div className="relative">
                  <Lock aria-hidden="true" className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
                  <Input
                    id="login-password"
                    type={showPassword ? "text" : "password"}
                    autoComplete="current-password"
                    required
                    placeholder="Enter your password"
                    className="pl-9 pr-11"
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
              </div>

              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <Checkbox id="remember" />
                  <Label htmlFor="remember" className="text-sm font-normal">
                    Remember me
                  </Label>
                </div>
                <Link to="/login" className="text-sm font-semibold text-primary hover:underline">
                  Forgot Password?
                </Link>
              </div>

              <Button type="submit" size="lg" className="w-full">
                Sign In
              </Button>
            </form>

            <p className="mt-6 text-center text-sm text-muted-foreground">
              Don&apos;t have an account?{" "}
              <Link to="/register" className="font-semibold text-primary hover:underline">
                Create Account
              </Link>
            </p>
          </div>

          <DemoNotice className="mt-6">
            Demonstration interface — any credentials open the prototype dashboard. No authentication
            request is sent to a backend.
          </DemoNotice>
        </div>
      </section>
    </div>
  );
}
