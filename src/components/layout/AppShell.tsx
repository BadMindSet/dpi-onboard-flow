import { Link, useRouterState } from "@tanstack/react-router";
import {
  Bell,
  ChevronLeft,
  FileSignature,
  FileText,
  FolderLock,
  Gauge,
  IdCard,
  LayoutDashboard,
  ListChecks,
  LogOut,
  MapPin,
  Menu,
  Phone,
  ScrollText,
  ShieldCheck,
  UserRound,
  Users,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { useState, type ReactNode } from "react";

import { Brand } from "@/components/common/Brand";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { investor, notifications } from "@/data/mock";
import { cn } from "@/lib/utils";

type NavItem = { label: string; to: string; icon: LucideIcon };
type NavSection = { title: string; items: NavItem[] };

const investorNav: NavSection[] = [
  { title: "Overview", items: [{ label: "Dashboard", to: "/dashboard", icon: LayoutDashboard }] },
  {
    title: "Onboarding",
    items: [
      { label: "Personal Information", to: "/onboarding/personal", icon: UserRound },
      { label: "Contact Information", to: "/onboarding/contact", icon: Phone },
      { label: "Address", to: "/onboarding/address", icon: MapPin },
      { label: "Identity", to: "/onboarding/identity", icon: IdCard },
      { label: "Documents", to: "/onboarding/documents", icon: FileText },
    ],
  },
  { title: "Verification", items: [{ label: "eKYC Verification", to: "/kyc", icon: ShieldCheck }] },
  { title: "Signature", items: [{ label: "eSign", to: "/esign", icon: FileSignature }] },
  {
    title: "Documents",
    items: [
      { label: "My Documents", to: "/documents", icon: FileText },
      { label: "Paperless Vault", to: "/paperless", icon: FolderLock },
    ],
  },
  {
    title: "Account",
    items: [
      { label: "Profile", to: "/profile", icon: UserRound },
      { label: "Notifications", to: "/notifications", icon: Bell },
    ],
  },
];

const adminNav: NavSection[] = [
  { title: "Overview", items: [{ label: "Dashboard", to: "/admin", icon: Gauge }] },
  {
    title: "Management",
    items: [
      { label: "Investors", to: "/admin/investors", icon: Users },
      { label: "KYC Management", to: "/admin/kyc", icon: ShieldCheck },
      { label: "eSign Management", to: "/admin/esign", icon: FileSignature },
      { label: "Paperless Archive", to: "/admin/paperless", icon: FolderLock },
    ],
  },
  { title: "Compliance", items: [{ label: "Audit Logs", to: "/admin/audit-logs", icon: ScrollText }] },
];

function NavLinks({ sections, onNavigate }: { sections: NavSection[]; onNavigate?: (() => void) | undefined }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  return (
    <nav aria-label="Primary" className="flex flex-col gap-6 px-3 py-4">
      {sections.map((section) => (
        <div key={section.title}>
          <p className="px-3 pb-2 text-[10px] font-bold uppercase tracking-[0.16em] text-muted-foreground">
            {section.title}
          </p>
          <ul className="space-y-0.5">
            {section.items.map((item) => {
              const active = pathname === item.to;
              const Icon = item.icon;
              return (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    onClick={onNavigate}
                    aria-current={active ? "page" : undefined}
                    className={cn(
                      "flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-colors",
                      active
                        ? "bg-sidebar-accent text-sidebar-accent-foreground shadow-[inset_3px_0_0_0_var(--color-primary)]"
                        : "text-muted-foreground hover:bg-sidebar-accent/70 hover:text-foreground",
                    )}
                  >
                    <Icon aria-hidden="true" className="size-4 shrink-0" />
                    <span className="min-w-0 truncate">{item.label}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      ))}
    </nav>
  );
}

export function AppShell({
  children,
  variant = "investor",
}: {
  children: ReactNode;
  variant?: "investor" | "admin" | undefined;
}) {
  const [open, setOpen] = useState(false);
  const sections = variant === "admin" ? adminNav : investorNav;
  const unread = notifications.filter((n) => !n.read).length;

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-40 border-b border-border bg-card/90 backdrop-blur">
        <div className="grid h-16 grid-cols-[minmax(0,1fr)_auto] items-center gap-3 px-4 sm:px-6">
          <div className="flex min-w-0 items-center gap-3">
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="min-h-11 min-w-11 lg:hidden" aria-label="Open navigation">
                  <Menu className="size-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-72 overflow-y-auto p-0">
                <SheetTitle className="sr-only">Navigation</SheetTitle>
                <div className="border-b border-border px-4 py-4">
                  <Brand />
                </div>
                <NavLinks sections={sections} onNavigate={() => setOpen(false)} />
              </SheetContent>
            </Sheet>
            <Link to="/" className="min-w-0">
              <Brand />
            </Link>
            {variant === "admin" && (
              <span className="ml-1 hidden rounded-full border border-primary/20 bg-primary/10 px-2.5 py-1 text-[11px] font-bold uppercase tracking-[0.12em] text-primary sm:inline-flex">
                Admin Console
              </span>
            )}
          </div>

          <div className="flex shrink-0 items-center gap-1 sm:gap-2">
            <Button asChild variant="ghost" size="sm" className="hidden md:inline-flex">
              <Link to={variant === "admin" ? "/dashboard" : "/admin"}>
                {variant === "admin" ? "Investor view" : "Admin console"}
              </Link>
            </Button>
            <Button asChild variant="ghost" size="icon" className="relative min-h-11 min-w-11" aria-label={`Notifications (${unread} unread)`}>
              <Link to="/notifications">
                <Bell className="size-5" />
                {unread > 0 && (
                  <span className="absolute right-2 top-2 size-2 rounded-full bg-destructive" aria-hidden="true" />
                )}
              </Link>
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="h-11 gap-2 px-2" aria-label="Account menu">
                  <Avatar className="size-8">
                    <AvatarFallback className="bg-primary text-xs font-bold text-primary-foreground">AS</AvatarFallback>
                  </Avatar>
                  <span className="hidden text-sm font-semibold sm:inline">{investor.fullName}</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuLabel className="font-normal">
                  <p className="text-sm font-semibold">{investor.fullName}</p>
                  <p className="text-xs text-muted-foreground">{investor.email}</p>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link to="/profile">
                    <UserRound className="size-4" /> Profile
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/documents">
                    <ListChecks className="size-4" /> My documents
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link to="/login">
                    <LogOut className="size-4" /> Sign out
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </header>

      <div className="mx-auto flex w-full max-w-[1600px]">
        <aside className="sticky top-16 hidden h-[calc(100vh-4rem)] w-72 shrink-0 overflow-y-auto border-r border-sidebar-border bg-sidebar lg:block">
          <NavLinks sections={sections} />
          <div className="px-6 pb-8">
            <Link
              to="/"
              className="inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground hover:text-primary"
            >
              <ChevronLeft className="size-3.5" /> Back to overview
            </Link>
          </div>
        </aside>
        <main className="min-w-0 flex-1 animate-in fade-in duration-300">
          <div className="mx-auto w-full max-w-6xl space-y-6 px-4 py-6 sm:px-6 sm:py-8">{children}</div>
        </main>
      </div>
    </div>
  );
}
