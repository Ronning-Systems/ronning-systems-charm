import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";
import { Seo } from "@/components/Seo";
import { track } from "@/lib/analytics";

const consultingTiers = [
  {
    name: "Fractional CTO",
    price: "$6,000 / month",
    detail: "Retainer · up to 20 hrs / month",
    features: [
      "Technology strategy and roadmap",
      "Engineering team hiring and mentoring",
      "Build-vs-buy decisions",
      "Board and founder reporting",
    ],
  },
  {
    name: "Project Execution",
    price: "$250 / hour",
    detail: "Engagements up to 20 hrs / week",
    features: [
      "Requirements, architecture, verification",
      "Traceability and audit readiness",
      "Hands-on program leadership",
      "Regulated-environment delivery",
    ],
  },
  {
    name: "Board & Technical Advisory",
    price: "Negotiated",
    detail: "Equity or retainer arrangements",
    features: [
      "Independent technical perspective",
      "Evaluate technology bets",
      "Govern AI, software, and product risk",
      "Board seats and one-off reviews",
    ],
  },
];

const joblignPlans = [
  {
    name: "Free",
    price: "$0",
    detail: "Get started",
    features: ["Job tracking through 9 stages", "Basic resume management", "Community support"],
  },
  {
    name: "Pro",
    price: "TBD",
    detail: "For active job seekers",
    features: ["AI resume and cover letter generation", "ATS expert analysis", "Industry panel review", "Auto-apply"],
  },
  {
    name: "Team",
    price: "TBD",
    detail: "For teams and coaches",
    features: ["Everything in Pro", "Shared pipelines", "Collaboration tools"],
  },
];

const Pricing = () => {
  return (
    <>
      <Seo
        title="Pricing — Ronning Systems"
        description="Pricing for Ronning Systems consulting services and the Joblign platform."
        path="/pricing"
      />

      <section className="container py-20">
        <h1 className="text-center text-4xl font-bold tracking-tight">Pricing</h1>
        <p className="mx-auto mt-4 max-w-2xl text-center text-muted-foreground">
          Transparent pricing for consulting engagements and the Joblign platform.
        </p>

        <h2 className="mt-16 text-center text-2xl font-bold">Consulting</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {consultingTiers.map((t) => (
            <Card key={t.name} className="border-border">
              <CardHeader className="text-center">
                <CardTitle>{t.name}</CardTitle>
                <div className="mt-2">
                  <div className="text-2xl font-semibold">{t.price}</div>
                  <div className="text-sm text-muted-foreground">{t.detail}</div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {t.features.map((f) => (
                    <li key={f} className="flex items-start gap-2">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Button asChild className="mt-6 w-full" onClick={() => track("cta_click", { cta: "pricing_consulting" })}>
                  <Link to="/contact">Get in Touch</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <h2 className="mt-20 text-center text-2xl font-bold">Joblign</h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-muted-foreground">
          Plan tiers for the Joblign platform. Pro and Team pricing is being finalized.
        </p>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {joblignPlans.map((p) => (
            <Card key={p.name} className="border-border">
              <CardHeader className="text-center">
                <CardTitle>{p.name}</CardTitle>
                <div className="mt-2">
                  <div className="text-2xl font-semibold">{p.price}</div>
                  <div className="text-sm text-muted-foreground">{p.detail}</div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-2">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Button asChild variant="outline" className="mt-6 w-full" onClick={() => track("cta_click", { cta: "pricing_joblign" })}>
                  <Link to="/contact">Request Access</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </>
  );
};

export default Pricing;
