import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase, GitBranch, Compass, Linkedin, Calendar } from "lucide-react";
import { Seo } from "@/components/Seo";
import { track } from "@/lib/analytics";
import { EmailLink } from "@/components/EmailLink";
import garminLogo from "@/assets/garmin.png";
import virginOrbitLogo from "@/assets/virgin-orbit.png";
import brightInsightLogo from "@/assets/brightinsight.png";
import oshLogo from "@/assets/oregon-state-hospital.png";

const services = [
  {
    icon: Briefcase,
    title: "Interim & Fractional CTO / CIO",
    desc: "Step-in executive coverage for transitions and vacancies, or ongoing senior technology leadership without the full-time hire. I set technology strategy, own operating and capital budgets, lead 24/7 operations, govern vendor and EHR contracts, and hold cybersecurity and risk accountability — working with leadership teams, boards, and unionized workforces.",
  },
  {
    icon: GitBranch,
    title: "Project Execution",
    desc: "From messy requirements to shipped product. I bring disciplined systems engineering — requirements, architecture, verification, traceability — together with hands-on program leadership, delivering on time in regulated environments (medical devices, aerospace, health IT) without the overhead of a large PMO.",
  },
  {
    icon: Compass,
    title: "Board & Technical Advisory",
    desc: "Independent technical perspective for boards and leadership teams. I help directors and executives evaluate technology bets, challenge assumptions, and govern AI, software, and product risk. With prior board experience, I'm available for board seats, advisory engagements, and one-off strategic reviews.",
  },
];

const firstNinetyDays = [
  {
    title: "Stabilize",
    desc: "Take accountability for operations, service levels, and pressing risks. Establish visibility into the budget, the vendor portfolio, and the top open issues.",
  },
  {
    title: "Assess",
    desc: "Map the technology estate — infrastructure, core applications, contracts, team structure — against business goals and regulatory obligations.",
  },
  {
    title: "Roadmap",
    desc: "Deliver a prioritized technology roadmap with costs, risks, and a staffing and operating model that leadership can act on.",
  },
  {
    title: "Transition",
    desc: "Set up the permanent successor, or convert to a fractional engagement, leaving documentation and governance in place.",
  },
];

const projects = [
  {
    title: "Garmin G500 TXi Flight Display System",
    logo: garminLogo,
    logoAlt: "Garmin G500 TXi flight display system",
    desc: "Managed all system requirements, verification, and regulatory compliance for the G500 TXi flight display system. Set the standard for system requirements management at Garmin.",
  },
  {
    title: "First Flight Launch Verification",
    logo: virginOrbitLogo,
    logoAlt: "Virgin Orbit first-flight launch verification",
    desc: "Led cross-functional launch verification efforts at Virgin Orbit. The mission achieved orbit insertion on first flight.",
  },
  {
    title: "SaMD Applications at BrightInsight",
    logo: brightInsightLogo,
    logoAlt: "BrightInsight Software as a Medical Device applications",
    desc: "Led launch of multiple SaMD applications including the Dupixent and Hizentra companion applications, a Type 1 Diabetes application, and a dosing guidance SDK.",
  },
  {
    title: "Oregon State Hospital Information Ecosystem",
    logo: oshLogo,
    logoAlt: "Oregon State Hospital clinical information ecosystem",
    desc: "Mapped the entire ecosystem of information across the Oregon State Hospital system, closed 3 enterprise risks, and significantly improved patient data integrity and operational workflows.",
  },
];

const faqs = [
  {
    q: "What does an interim CIO do for a hospital or health system in transition?",
    a: "An interim CIO keeps the technology organization moving while the permanent search runs: running 24/7 operations, owning the budget and vendor relationships, stabilizing service levels, and leaving a prioritized roadmap for the successor. At Oregon State Hospital this meant ITIL-aligned service management, EHR vendor contract governance, and risk closure across the clinical information ecosystem.",
  },
  {
    q: "How does a fractional CTO engagement start?",
    a: "With a scoping conversation, then usually a short assessment. From there we agree on the recurring scope — strategy, team leadership, architecture decisions, vendor management — typically as a monthly retainer.",
  },
  {
    q: "Do you work in regulated environments?",
    a: "Regulated environments are the core of my practice: FDA SaMD (design controls, ISO 14971, IEC 62304), avionics (DO-178C, ARP4754), and healthcare IT with HIPAA and records-retention obligations.",
  },
  {
    q: "Where are you based and when are you available?",
    a: "Portland, Oregon metro, effective hybrid-remote. Immediately available for interim and fractional mandates.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

const Services = () => {
  return (
    <>
      <Seo
        title="Fractional & Interim CTO/CIO Services — Ronning Systems"
        description="Interim and fractional CIO/CTO for healthcare and regulated organizations, project execution in regulated environments, and board & technical advisory. Portland, OR metro / remote. Immediately available."
        path="/services"
        jsonLd={faqJsonLd}
      />

      <section className="bg-secondary">
        <div className="container py-24 text-center md:py-32">
          <h1 className="text-5xl font-bold tracking-tight md:text-6xl">Services</h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            Senior technology leadership for healthcare and regulated organizations — interim and
            fractional mandates, project execution, and advisory. Based in the Portland, Oregon metro
            and immediately available.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button asChild size="lg" onClick={() => track("cta_click", { cta: "services_contact" })}>
              <Link to="/contact">Get in touch</Link>
            </Button>
            <Button asChild size="lg" variant="outline" onClick={() => track("cta_click", { cta: "services_options" })}>
              <Link to="/engagement-options">Engagement options</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="container py-20">
        <h2 className="text-center text-3xl font-bold">How I engage</h2>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {services.map((s) => (
            <Card key={s.title} className="border-border">
              <CardHeader className="items-center text-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-lg border border-accent/30 bg-accent/10">
                  <s.icon className="h-7 w-7 text-accent" strokeWidth={1.5} aria-hidden="true" />
                </div>
                <CardTitle className="mt-4">{s.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center text-sm text-muted-foreground">{s.desc}</CardContent>
            </Card>
          ))}
        </div>
        <p className="mt-8 text-center text-sm text-muted-foreground">
          Engagement length and scope vary — see{" "}
          <Link to="/engagement-options" className="text-accent hover:underline">
            engagement options
          </Link>{" "}
          or get in touch to scope it together.
        </p>
      </section>

      <section className="bg-secondary">
        <div className="container py-20">
          <h2 className="text-center text-3xl font-bold">What the first 90 days of an interim mandate look like</h2>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {firstNinetyDays.map((p, i) => (
              <Card key={p.title} className="border-border">
                <CardHeader>
                  <div className="text-sm font-medium text-accent">Day {i === 0 ? "1–30" : i === 1 ? "30–60" : i === 2 ? "60–75" : "75–90"}</div>
                  <CardTitle className="mt-1">{p.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">{p.desc}</CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="container py-20">
        <h2 className="text-center text-3xl font-bold">Frequently asked</h2>
        <div className="mx-auto mt-12 max-w-3xl space-y-4">
          {faqs.map((f) => (
            <Card key={f.q} className="border-border">
              <CardHeader>
                <CardTitle>{f.q}</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">{f.a}</CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="bg-secondary">
        <div className="container py-20 text-center">
          <h2 className="text-3xl font-bold">Selected projects</h2>
          <div className="mt-12 grid gap-6 text-left md:grid-cols-2">
            {projects.map((p) => (
              <Card key={p.title} className="border-border bg-card">
                <CardHeader className="flex flex-row items-center gap-4 space-y-0">
                  <div className="flex h-16 w-24 shrink-0 items-center justify-center rounded-md bg-white p-2">
                    <img src={p.logo} alt={p.logoAlt} width={96} height={64} className="max-h-full max-w-full object-contain" loading="lazy" />
                  </div>
                  <CardTitle>{p.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground">{p.desc}</CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-10">
            <Button asChild variant="outline" onClick={() => track("cta_click", { cta: "services_projects" })}>
              <Link to="/projects">See all projects</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="container py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold">Available now</h2>
          <p className="mt-6 text-muted-foreground">
            Portland, Oregon metro, effective hybrid-remote. Currently leading systems architecture
            work for Bonneville Power Administration and technology leadership for Ashore Health.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button asChild onClick={() => track("cta_click", { cta: "services_calendly" })}>
              <a href="https://calendly.com/patrick-ronning/hire-patrick" target="_blank" rel="noopener noreferrer">
                <Calendar className="mr-2 h-4 w-4" />
                Book an intro call
              </a>
            </Button>
            <Button asChild variant="outline">
              <EmailLink>Patrick@Ronning.Systems</EmailLink>
            </Button>
            <Button asChild variant="ghost">
              <a
                href="https://www.linkedin.com/in/patrickronning"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2"
              >
                <Linkedin className="h-5 w-5" />
                Connect on LinkedIn
              </a>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;