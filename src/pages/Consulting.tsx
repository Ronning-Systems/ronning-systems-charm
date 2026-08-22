import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase, GitBranch, Compass, Linkedin } from "lucide-react";
import { Seo } from "@/components/Seo";
import { track } from "@/lib/analytics";
import garminLogo from "@/assets/garmin.png";
import virginOrbitLogo from "@/assets/virgin-orbit.png";
import brightInsightLogo from "@/assets/brightinsight.png";
import oshLogo from "@/assets/oregon-state-hospital.png";

const projects = [
  {
    title: "Garmin G500 TXi Flight Display System",
    logo: garminLogo,
    logoAlt: "Garmin G500 TXi flight display system",
    desc: "Managed all system requirements, verification, and regulatory compliance for the G500 TXi flight display system. Set the standard for system requirements management at Garmin, establishing processes that became the benchmark for subsequent aviation product development.",
  },
  {
    title: "First Flight Launch Verification",
    logo: virginOrbitLogo,
    logoAlt: "Virgin Orbit first-flight launch verification",
    desc: "Led cross-functional launch verification efforts at Virgin Orbit, coordinating with all departments to ensure testing supported a high probability of successful launch. The mission achieved orbit insertion on first flight.",
  },
  {
    title: "SaMD Applications at BrightInsight",
    logo: brightInsightLogo,
    logoAlt: "BrightInsight Software as a Medical Device applications",
    desc: "Led launch of multiple Software as a Medical Device (SaMD) applications including two blockbuster immunotherapy companion applications (Dupixent and Hizentra), a Type I Diabetes application, and a Type 1 Diabetes dosing guidance SDK.",
  },
  {
    title: "Oregon State Hospital Information Ecosystem",
    logo: oshLogo,
    logoAlt: "Oregon State Hospital clinical information ecosystem",
    desc: "Mapped the entire ecosystem of information across the Oregon State Hospital system. Identified critical gaps and led initiatives that resulted in closure of 3 enterprise risks, significantly improving patient data integrity and operational workflows.",
  },
];

const services = [
  {
    icon: Briefcase,
    title: "Fractional CTO",
    desc: "Senior technical leadership without the full-time hire. I step in as your fractional CTO to set technology strategy, hire and mentor engineering teams, make build-vs-buy calls, and own the technical roadmap end-to-end — so the founders and board can focus on the business.",
    price: "$6,000 / month",
    priceDetail: "Retainer · up to 20 hrs / month",
  },
  {
    icon: GitBranch,
    title: "Project Execution",
    desc: "From messy requirements to shipped product. I bring disciplined systems engineering — requirements, architecture, verification, traceability — together with hands-on program leadership. The result is on-time delivery in regulated environments (medical devices, aerospace, health IT) without the overhead of a large PMO.",
    price: "$250 / hour",
    priceDetail: "Engagements up to 20 hrs / week",
  },
  {
    icon: Compass,
    title: "Board & Technical Advisory",
    desc: "Independent technical perspective for boards and leadership teams. I help directors and executives evaluate technology bets, challenge assumptions, and govern AI, software, and product risk. With prior board experience and currently seeking a board or technical advisory role, I'm available for board seats, advisory engagements, and one-off strategic reviews.",
    price: "Negotiated",
    priceDetail: "Equity or retainer arrangements",
  },
];

const Consulting = () => {
  return (
    <>
      <Seo
        title="Consulting — Ronning Systems"
        description="Fractional CTO, project execution, and board & technical advisory services from Ronning Systems, LLC."
        path="/consulting"
      />

      <section className="bg-secondary">
        <div className="container py-24 text-center md:py-32">
          <h1 className="text-5xl font-bold tracking-tight md:text-6xl">Consulting</h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            Senior technology leadership for companies that need to ship — without the overhead of a
            full-time executive team.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button asChild size="lg" onClick={() => track("cta_click", { cta: "consulting_contact" })}>
              <Link to="/contact">Get in Touch</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link to="/pricing">See Engagement Options</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="container py-20">
        <h2 className="text-center text-3xl font-bold">Services</h2>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {services.map((s) => (
            <Card key={s.title} className="border-border">
              <CardHeader className="items-center text-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-lg border border-accent/30 bg-accent/10">
                  <s.icon className="h-7 w-7 text-accent" strokeWidth={1.5} aria-hidden="true" />
                </div>
                <CardTitle className="mt-4">{s.title}</CardTitle>
                <div className="mt-2">
                  <div className="text-2xl font-semibold text-foreground">{s.price}</div>
                  <div className="text-sm text-muted-foreground">{s.priceDetail}</div>
                </div>
              </CardHeader>
              <CardContent className="text-center text-muted-foreground">{s.desc}</CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="container py-20">
        <h2 className="text-center text-3xl font-bold">Selected Projects</h2>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {projects.map((p) => (
            <Card key={p.title} className="border-border bg-card">
              <CardHeader className="flex flex-row items-center gap-4 space-y-0">
                <div className="flex h-16 w-24 shrink-0 items-center justify-center rounded-md bg-white p-2">
                  <img
                    src={p.logo}
                    alt={p.logoAlt}
                    width={96}
                    height={64}
                    className="max-h-full max-w-full object-contain"
                    loading="lazy"
                  />
                </div>
                <CardTitle>{p.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">{p.desc}</CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="bg-secondary">
        <div className="container py-20 text-center">
          <h2 className="text-3xl font-bold">Background</h2>
          <p className="mx-auto mt-4 max-w-3xl text-muted-foreground">
            With 15+ years of experience in systems engineering, software development, and cloud
            architecture, Patrick brings a practical, business-focused approach to technology. He has
            worked with startups and established enterprises, always focusing on delivering real
            value. He currently serves as a fractional CTO and leads systems engineering and program
            delivery for regulated products, with prior board experience and an interest in joining a
            board in a technical advisory capacity.
          </p>
          <div className="mt-6 flex justify-center">
            <a
              href="https://www.linkedin.com/in/patrickronning"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-accent hover:underline"
            >
              <Linkedin className="h-5 w-5" />
              Connect on LinkedIn
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Consulting;
