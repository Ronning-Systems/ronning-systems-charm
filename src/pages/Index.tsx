import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, HeartPulse, Plane, Monitor, Hospital, Cpu, Wrench, Quote } from "lucide-react";
import { Logo } from "@/components/Logo";
import { Seo } from "@/components/Seo";
import { track } from "@/lib/analytics";

const proofStats = [
  { stat: "95% → 99.5%", label: "network availability in one quarter at Oregon State Hospital" },
  { stat: "~25%", label: "operating savings in six months on a $15M technology budget" },
  { stat: "3", label: "enterprise risks closed across the OSH clinical information ecosystem" },
  { stat: "Shipped", label: "FDA Software as a Medical Device (SaMD) applications, incl. Dupixent and Hizentra" },
];

const featuredWork = [
  {
    icon: HeartPulse,
    title: "Manna Health — SaMD digital health platform",
    desc: "As fractional CTO, established the FDA SaMD-compliant quality management system (design controls, ISO 14971 risk management, IEC 62304 lifecycle, cybersecurity), launched the patient application and cloud services, and built the founding engineering team. Shipped under the Manna brand.",
  },
  {
    icon: Monitor,
    title: "Garmin G500 TXi flight display",
    desc: "Led a systems engineering team through requirements and verification for the $30M+ G500 TXi with 31 FAA TSOs traced to manufacturing approval. Set the standard for requirements management at Garmin.",
  },
  {
    icon: Plane,
    title: "Virgin Orbit — first flight launch verification",
    desc: "Led cross-functional launch verification for LauncherOne. The mission achieved orbit insertion on its first flight.",
  },
  {
    icon: Hospital,
    title: "Oregon State Hospital — Director of Technology Services / CIO",
    desc: "Set strategy for a 32-FTE, $15M technology organization in a 24/7 accredited psychiatric hospital. Raised availability 95% to 99.5% in one quarter, closed 3 enterprise risks, delivered ~25% operating savings, and launched a governed LLM policy chatbot on Azure for 700+ staff.",
  },
  {
    icon: Cpu,
    title: "BrightInsight — SaMD applications",
    desc: "Managed a globally distributed team delivering FDA-regulated medical-device software for Novo Nordisk, Sanofi, and CSL Behring. Cut regression test duration 75%.",
  },
];

const engagementModels = [
  {
    title: "CTO / CIO Leadership",
    desc: "Step-in executive coverage for transitions and vacancies — or ongoing senior leadership without the full-time hire. I own technology strategy, budgets, vendors, and governance end-to-end.",
  },
  {
    title: "Project Execution",
    desc: "From messy requirements to shipped product. Disciplined systems engineering — requirements, architecture, verification, traceability — plus hands-on program leadership in regulated environments.",
  },
  {
    title: "Board & Technical Advisory",
    desc: "Independent technical perspective for boards and executives. With prior board experience, I'm available for board seats, advisory engagements, and one-off strategic reviews.",
  },
];

const testimonials = [
  {
    quote:
      "Patrick brought disciplined systems engineering to our launch — requirements, verification, and traceability that held up under regulatory scrutiny.",
    attribution: "Program Lead, Medical Device Software",
  },
  {
    quote:
      "The launch verification work gave us confidence the mission would succeed. It did — orbit insertion on first flight.",
    attribution: "Engineering Lead, Aerospace",
  },
  {
    quote:
      "A practical, business-focused approach to technology. He helped us make build-vs-buy calls we'd been stuck on for months.",
    attribution: "Founder, Health IT Startup",
  },
];

const Index = () => {
  return (
    <>
      <Seo
        title="Patrick Ronning — Technology Executive for Healthcare | Ronning Systems"
        description="Technology executive for healthcare and regulated organizations. Most recently CIO of Oregon State Hospital: 95% to 99.5% availability in one quarter, ~25% operating savings, three enterprise risks closed. Available for full-time, interim (rescue), and fractional engagements. Portland, OR metro / remote."
        path="/"
      />

      <section className="bg-secondary">
        <div className="container py-24 text-center md:py-32">
          <div className="flex justify-center">
            <Logo showWordmark={false} className="[&>svg]:h-16 [&>svg]:w-16" />
          </div>
          <h1 className="mt-6 text-4xl font-bold tracking-tight md:text-6xl">Patrick Ronning, MBA</h1>
          <p className="mt-4 text-xl font-medium text-accent">
            Technology executive — healthcare IT, regulated systems, and SaMD
          </p>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            Most recently Director of Technology Services / CIO of Oregon State Hospital, leading a
            32-FTE, $15M technology organization. 15+ years shipping mission-critical systems — FDA
            Software as a Medical Device, avionics, launch vehicles. Available for full-time,
            interim (rescue), and fractional engagements.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button asChild size="lg" onClick={() => track("cta_click", { cta: "hero_services" })}>
              <Link to="/services">
                How I can help
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" onClick={() => track("cta_click", { cta: "hero_experience" })}>
              <Link to="/experience">View experience</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="container py-20">
        <h2 className="sr-only">Track record</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {proofStats.map((p) => (
            <Card key={p.stat} className="border-border">
              <CardHeader>
                <div className="text-3xl font-bold text-accent">{p.stat}</div>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">{p.label}</CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="bg-secondary">
        <div className="container py-20">
          <h2 className="text-center text-3xl font-bold">Selected work</h2>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featuredWork.map((w) => (
              <Card key={w.title} className="border-border bg-card">
                <CardHeader className="items-center text-center">
                  <div className="flex h-14 w-14 items-center justify-center rounded-lg border border-accent/30 bg-accent/10">
                    <w.icon className="h-7 w-7 text-accent" strokeWidth={1.5} aria-hidden="true" />
                  </div>
                  <CardTitle className="mt-4">{w.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center text-sm text-muted-foreground">{w.desc}</CardContent>
              </Card>
            ))}
            <Card className="border-border bg-card">
              <CardHeader className="items-center text-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-lg border border-accent/30 bg-accent/10">
                  <Wrench className="h-7 w-7 text-accent" strokeWidth={1.5} aria-hidden="true" />
                </div>
                <CardTitle className="mt-4">Current engagements</CardTitle>
              </CardHeader>
              <CardContent className="text-center text-sm text-muted-foreground">
                Systems architecture for Bonneville Power Administration (federal power utility) and
                technology leadership for Ashore Health, a behavioral-health venture.
              </CardContent>
            </Card>
          </div>
          <div className="mt-10 text-center">
            <Button asChild variant="outline" onClick={() => track("cta_click", { cta: "home_projects" })}>
              <Link to="/projects">See all projects</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="container py-20">
        <h2 className="text-center text-3xl font-bold">Engagement models</h2>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {engagementModels.map((m) => (
            <Card key={m.title} className="border-border">
              <CardHeader className="text-center">
                <CardTitle>{m.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center text-muted-foreground">{m.desc}</CardContent>
            </Card>
          ))}
        </div>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <Button asChild onClick={() => track("cta_click", { cta: "home_services" })}>
            <Link to="/services">Explore services</Link>
          </Button>
          <Button asChild variant="outline" onClick={() => track("cta_click", { cta: "home_engagement_options" })}>
            <Link to="/engagement-options">Engagement options</Link>
          </Button>
        </div>
      </section>

      <section className="bg-secondary">
        <div className="container py-20">
          <h2 className="text-center text-3xl font-bold">What people say</h2>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {testimonials.map((t) => (
              <Card key={t.attribution} className="border-border">
                <CardHeader>
                  <Quote className="h-8 w-8 text-accent" strokeWidth={1.5} />
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">"{t.quote}"</p>
                  <p className="mt-4 text-sm font-medium text-foreground">{t.attribution}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <p className="mt-8 text-center text-sm text-muted-foreground">
            More recommendations on{" "}
            <a
              href="https://www.linkedin.com/in/patrickronning"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:underline"
            >
              LinkedIn
            </a>
            .
          </p>
        </div>
      </section>

      <section className="container py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold">Also from Ronning Systems</h2>
          <p className="mt-6 text-muted-foreground">
            Beyond executive engagements, Ronning Systems builds products — including
            <Link to="/product" className="text-accent hover:underline"> Joblign</Link>, a job
            application platform, and One Step, a next-generation digital health offering currently in
            development.
          </p>
          <div className="mt-8 text-center">
            <Button asChild variant="outline" onClick={() => track("cta_click", { cta: "home_product" })}>
              <Link to="/product">Learn about Joblign</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;