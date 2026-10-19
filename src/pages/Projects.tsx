import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Seo } from "@/components/Seo";
import { track } from "@/lib/analytics";
import mannaLogo from "@/assets/manna_logo.png";
import bpaLogo from "@/assets/bpa_logo.svg";

const projects = [
  {
    title: "Manna Health — SaMD digital health platform",
    logo: mannaLogo,
    logoAlt: "Manna Health",
    role: "Fractional Chief Technology Officer",
    desc: "Established an FDA SaMD-compliant quality management system — design controls, ISO 14971 risk management, IEC 62304 lifecycle, and cybersecurity — for a digital-health platform. Launched the patient application and cloud services, and built and mentored the founding engineering team. A shipped, regulated product — the template for the next generation now being built at Ronning Systems.",
  },
  {
    title: "Oregon State Hospital Information Ecosystem",
    logo: oshLogo,
    logoAlt: "Oregon State Hospital clinical information ecosystem",
    role: "Director of Technology Services / CIO",
    desc: "Mapped the entire ecosystem of information across the Oregon State Hospital system. Identified critical gaps, closed 3 enterprise risks, and significantly improved patient data integrity and operational workflows.",
  },
  {
    title: "BrightInsight SaMD Applications",
    logo: brightInsightLogo,
    logoAlt: "BrightInsight Software as a Medical Device applications",
    role: "Staff Systems Engineer, Software Operations",
    desc: "Led launch of multiple Software as a Medical Device (SaMD) applications including two blockbuster immunotherapy companion applications (Dupixent and Hizentra), a Type 1 Diabetes application, and a dosing guidance SDK.",
  },
  {
    title: "Garmin G500 TXi Flight Display System",
    logo: garminLogo,
    logoAlt: "Garmin G500 TXi flight display system",
    role: "Systems Engineering Team Lead",
    desc: "Managed all system requirements, verification, and regulatory compliance for the G500 TXi flight display system, with 31 FAA TSOs traced to manufacturing approval. Set the standard for systems engineering at Garmin.",
  },
  {
    title: "Virgin Orbit First Flight Launch Verification",
    logo: virginOrbitLogo,
    logoAlt: "Virgin Orbit first-flight launch verification",
    role: "Systems Engineering Consultant",
    desc: "Led cross-functional launch verification, coordinating across propulsion, avionics, structural dynamics, and integration. The mission achieved orbit insertion on first flight.",
  },
  {
    title: "Bonneville Power Administration — Configuration Management Platform",
    logo: bpaLogo,
    logoAlt: "Bonneville Power Administration",
    role: "Systems Architect (current)",
    desc: "Architecting a unified configuration-management platform across multi-vendor SCADA/RTU/PLC fleets supporting the Pacific Northwest grid, with redundant multi-medium telemetry and automatic failover.",
  },
];

const Projects = () => {
  return (
    <>
      <Seo
        title="Projects & Work — Patrick Ronning | Ronning Systems"
        description="Case studies: Manna Health SaMD launch, Oregon State Hospital clinical information ecosystem, BrightInsight SaMD applications, Garmin G500 TXi, Virgin Orbit launch verification, and BPA grid systems architecture."
        path="/projects"
      />

      <section className="bg-secondary">
        <div className="container py-24 text-center md:py-32">
          <h1 className="text-5xl font-bold tracking-tight md:text-6xl">Projects</h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            Shipped, regulated, mission-critical systems — from hospital IT to avionics to Software as
            a Medical Device.
          </p>
        </div>
      </section>

      <section className="container py-20">
        <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-2">
          {projects.map((p) => (
            <Card key={p.title} className="border-border bg-card">
              <CardHeader className="space-y-0">
                {p.logo ? (
                  <div className="flex h-16 w-24 shrink-0 items-center justify-center rounded-md bg-white p-2">
                    <img src={p.logo} alt={p.logoAlt} width={96} height={64} className="max-h-full max-w-full object-contain" loading="lazy" />
                  </div>
                ) : (
                  <div className="flex h-16 w-24 shrink-0 items-center justify-center rounded-md bg-secondary text-sm font-semibold text-accent">
                    {p.logoAlt}
                  </div>
                )}
                <div className="mt-4 space-y-1">
                  <CardTitle>{p.title}</CardTitle>
                  <p className="text-sm font-medium text-accent">{p.role}</p>
                </div>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">{p.desc}</CardContent>
            </Card>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Button asChild onClick={() => track("cta_click", { cta: "projects_services" })}>
            <Link to="/services">See how I can help</Link>
          </Button>
        </div>
      </section>
    </>
  );
};

export default Projects;