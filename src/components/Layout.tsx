import { Link, NavLink as RouterNavLink } from "react-router-dom";
import { Menu, Mail, MapPin, Linkedin } from "lucide-react";
import { Logo } from "@/components/Logo";
import { EmailLink } from "@/components/EmailLink";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const navItems = [
  { to: "/product", label: "Product" },
  { to: "/appliances", label: "Appliances" },
  { to: "/consulting", label: "Consulting" },
  { to: "/pricing", label: "Pricing" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

const footerNav = [
  { to: "/product", label: "Product" },
  { to: "/appliances", label: "Appliances" },
  { to: "/consulting", label: "Consulting" },
  { to: "/pricing", label: "Pricing" },
  { to: "/about", label: "About" },
  { to: "/blog", label: "Blog" },
  { to: "/contact", label: "Contact" },
];

const legalNav = [
  { to: "/privacy", label: "Privacy" },
  { to: "/terms", label: "Terms" },
];

const NavLinks = ({ className }: { className?: string }) => (
  <div className={cn("flex items-center gap-8 text-sm text-muted-foreground", className)}>
    {navItems.map((item) => (
      <RouterNavLink
        key={item.to}
        to={item.to}
        className={({ isActive }) => cn("hover:text-foreground", isActive && "text-foreground")}
      >
        {item.label}
      </RouterNavLink>
    ))}
  </div>
);

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground"
      >
        Skip to content
      </a>
      <header className="sticky top-0 z-40 w-full border-b border-border bg-background/80 backdrop-blur">
        <nav className="container flex h-16 items-center justify-between" aria-label="Main">
          <Link to="/" aria-label="Ronning Systems, LLC home">
            <Logo />
          </Link>
          <NavLinks className="hidden md:flex" />
          <div className="flex items-center gap-2 md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" aria-label="Open navigation menu">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <SheetTitle className="sr-only">Navigation</SheetTitle>
                <div className="mt-8 flex flex-col gap-4">
                  {navItems.map((item) => (
                    <RouterNavLink
                      key={item.to}
                      to={item.to}
                      className={({ isActive }) =>
                        cn(
                          "text-base text-muted-foreground hover:text-foreground",
                          isActive && "text-foreground",
                        )
                      }
                    >
                      {item.label}
                    </RouterNavLink>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </nav>
      </header>

      <main id="main" className="flex-1">
        {children}
      </main>

      <footer className="border-t border-border">
        <div className="container py-10">
          <div className="grid gap-8 md:grid-cols-4">
            <div>
              <Logo />
              <p className="mt-3 text-sm text-muted-foreground">
                Technology consultancy and product engineering from Ronning Systems, LLC — the company
                behind Joblign, "get aligned for success".
              </p>
            </div>
            <div>
              <h3 className="text-sm font-semibold">Site</h3>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                {footerNav.map((item) => (
                  <li key={item.to}>
                    <Link to={item.to} className="hover:text-foreground">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold">Legal</h3>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                {legalNav.map((item) => (
                  <li key={item.to}>
                    <Link to={item.to} className="hover:text-foreground">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold">Contact</h3>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                <li>
                  <EmailLink className="inline-flex items-center gap-2 hover:text-foreground">
                    <Mail className="h-4 w-4" />
                    Patrick@Ronning.Systems
                  </EmailLink>
                </li>
                <li className="inline-flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  Portland, OR Metro Area / Remote
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/patrickronning"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 hover:text-foreground"
                  >
                    <Linkedin className="h-4 w-4" />
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 border-t border-border pt-6 text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} Ronning Systems, LLC. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
