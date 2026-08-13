import { Link, createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  FileSignature,
  FolderLock,
  IdCard,
  ShieldCheck,
} from "lucide-react";

import heroImage from "@/assets/dpi-hero.jpg";
import { Brand } from "@/components/common/Brand";
import { DemoBadge } from "@/components/common/DemoNotice";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "DPI — Digital Investor Onboarding System" },
      {
        name: "description",
        content:
          "DPI is a digital investor onboarding platform for identity verification, document management and digital signature workflows.",
      },
      { property: "og:title", content: "DPI — Digital Investor Onboarding System" },
      {
        property: "og:description",
        content:
          "DPI is a digital investor onboarding platform for identity verification, document management and digital signature workflows.",
      },
    ],
  }),
  component: Landing,
});

const pillars = [
  { icon: IdCard, title: "Guided onboarding", body: "Personal, contact, address and identity capture in a clear step flow." },
  { icon: ShieldCheck, title: "eKYC verification", body: "Structured identity document validation with explicit result states." },
  { icon: FileSignature, title: "Digital signature", body: "Review-then-sign workflow with document hash and confirmation." },
  { icon: FolderLock, title: "Paperless vault", body: "Signed documents archived, searchable and ready to download." },
];

function Landing() {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-card">
        <div className="mx-auto grid h-16 max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-4 sm:px-6">
          <Brand />
          <div className="flex shrink-0 items-center gap-2">
            <Button asChild variant="ghost" size="sm">
              <Link to="/login">Sign in</Link>
            </Button>
            <Button asChild size="sm">
              <Link to="/register">Create account</Link>
            </Button>
          </div>
        </div>
      </header>

      <section className="relative overflow-hidden dpi-hero-grid">
        <div aria-hidden="true" className="absolute inset-0 dpi-mesh opacity-40" />
        <div className="relative mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:items-center lg:py-24">
          <div className="min-w-0">
            <DemoBadge label="Academic Demonstration Build" className="border-primary-foreground/25 bg-primary-foreground/10 text-primary-foreground" />
            <h1 className="mt-5 text-4xl font-extrabold leading-tight text-primary-foreground sm:text-5xl">
              Digital Investor Onboarding System
            </h1>
            <p className="mt-4 max-w-xl text-base text-primary-foreground/75">
              A paperless onboarding experience for investors — identity capture, eKYC verification,
              digital signature and a secure document vault, in one enterprise workspace.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" variant="secondary">
                <Link to="/dashboard">
                  Open investor dashboard <ArrowRight className="size-4" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
              >
                <Link to="/admin">Admin console</Link>
              </Button>
            </div>
          </div>
          <div className="relative">
            <img
              src={heroImage}
              alt="Abstract visual of a secure digital identity and document network"
              className="w-full rounded-3xl border border-primary-foreground/15 shadow-elevated"
              loading="eager"
              width={1280}
              height={1280}
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <h2 className="text-2xl font-bold text-foreground">What the platform covers</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((pillar) => (
            <article key={pillar.title} className="rounded-2xl border border-border bg-card p-5 shadow-card">
              <span className="grid size-11 place-items-center rounded-xl bg-secondary text-primary">
                <pillar.icon aria-hidden="true" className="size-5" />
              </span>
              <h3 className="mt-4 text-base font-semibold text-foreground">{pillar.title}</h3>
              <p className="mt-1.5 text-sm text-muted-foreground">{pillar.body}</p>
            </article>
          ))}
        </div>
      </section>

      <footer className="border-t border-border bg-card">
        <div className="mx-auto max-w-6xl px-4 py-8 text-sm text-muted-foreground sm:px-6">
          <Brand />
          <p className="mt-4 max-w-3xl">
            This interface is an educational demonstration. It does not connect to UIDAI, NSDL,
            government authorities, banking systems or legally binding eSign services.
          </p>
        </div>
      </footer>
    </div>
  );
}
