import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Download, GraduationCap, Flame, ShieldCheck } from "lucide-react";
import { Seo } from "@/components/Seo";
import { track } from "@/lib/analytics";

const roles = [
  {
    dates: "02/2026 — Present",
    title: "Founder / Principal Consultant",
    org: "Ronning Systems LLC, Portland OR",
    points: [
      "Systems architect for Bonneville Power Administration: unified configuration management across multi-vendor SCADA/RTU/PLC fleets supporting the Pacific Northwest grid.",
      "Fractional Chief Technology Officer, Manna Health AI: established FDA SaMD-compliant quality management system (design controls, ISO 14971, IEC 62304, cybersecurity), launched the patient application and cloud services, built the founding engineering team.",
      "Co-Founder & CTO, Ashore Health: product, platform, and cloud architecture for a behavioral-health venture with privacy by design.",
    ],
  },
  {
    dates: "03/2025 — 01/2026",
    title: "Director of Technology Services / CIO",
    org: "Oregon State Hospital, Salem OR",
    points: [
      "Directed the full technology estate of Oregon's flagship psychiatric hospital — 24x7 operations where downtime is a patient-safety and regulatory event.",
      "Led a 32-FTE organization and owned a $15M operating and capital budget; delivered ~25% operating savings in six months without reducing service levels.",
      "Raised network availability from 95% to 99.5% in one quarter; mapped the clinical information ecosystem and closed 3 enterprise risks.",
      "Launched a governed LLM policy chatbot on Microsoft Azure for 700+ staff, cutting intranet search time 60%.",
    ],
  },
  {
    dates: "07/2023 — 08/2025",
    title: "Founder / Principal Consultant",
    org: "Purposeful Function LLC, Oregon",
    points: [
      "Blue Origin (via Bluehawk Consulting): led verification of the human-rated BE-4 engine control system; authored DO-178C/DO-254-compliant processes.",
      "Northwest Natural Gas: redesigned the standard gas-monitoring SCADA telemetry station as a UL508A-certified PLC control panel.",
      "Wellons: rebuilt the electrical engineering department; raised the 1.5 MW co-generation turbine from 50% to 95% reliability; cut telemetry costs 40%.",
    ],
  },
  {
    dates: "05/2021 — 05/2023",
    title: "Staff Systems Engineer, Software Operations",
    org: "BrightInsight, Remote",
    points: [
      "Managed a distributed team of 10 delivering FDA-regulated medical-device software for Novo Nordisk, Sanofi, and CSL Behring.",
      "Owned SBOM/SCA supply-chain security, CI/CD, and security audits; cut regression test duration 75%.",
    ],
  },
  {
    dates: "03/2020 — 04/2021",
    title: "Program Manager, Contract Manufacturing",
    org: "RBC Medical Innovations, Lenexa KS",
    points: [
      "Delivered $2.5M in annual project revenue with 100% on-time, on-scope, on-budget performance across concurrent FDA Class II programs, including a $2.1M 510(k) contract.",
    ],
  },
  {
    dates: "11/2017 — 03/2020",
    title: "Systems Engineering Consultant",
    org: "Virgin Orbit, Long Beach CA",
    points: [
      "Managed system requirements and first-flight readiness verification for the LauncherOne launch vehicle; mission achieved orbit insertion on its first flight.",
    ],
  },
  {
    dates: "07/2010 — 05/2017",
    title: "Systems Engineering Team Lead",
    org: "Garmin International, Salem OR",
    points: [
      "Led a 6-person team on FAA Part 23/25/27 safety-critical avionics under ARP4754; authored requirements and verification for the $30M+ G500 TXi with 31 FAA TSOs.",
      "Built automated test systems and a 30M+ record test-data management system.",
    ],
  },
  {
    dates: "05/2008 — 08/2010",
    title: "Instrumentation Engineer",
    org: "Bombardier Flight Test Center, Wichita KS",
    points: [
      "Programmed data acquisition systems and defined test, calibration, and operational procedures for flight-test programs.",
    ],
  },
];

const credentials = [
  { icon: GraduationCap, text: "MBA, Willamette University · BS Electrical Engineering, Wichita State University" },
  { icon: Flame, text: "Oregon licensure in progress" },
  { icon: ShieldCheck, text: "Oregon licensure in progress" },
];

const Experience = () => {
  return (
    <>
      <Seo
        title="Experience — Patrick Ronning | Ronning Systems"
        description="15+ years of technology leadership: CIO of Oregon State Hospital, SaMD and medical device programs at BrightInsight and RBC, avionics at Garmin, launch vehicles at Virgin Orbit. MBA, PE exam passed, AWS CSA."
        path="/experience"
      />

      <section className="bg-secondary">
        <div className="container py-24 text-center md:py-32">
          <h1 className="text-5xl font-bold tracking-tight md:text-6xl">Experience</h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            15+ years of progressively responsible technology leadership across healthcare IT, medical
            devices, aerospace, and utilities.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button asChild size="lg" onClick={() => track("cta_click", { cta: "experience_contact" })}>
              <Link to="/contact">Get in touch</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="container py-16">
        <div className="mx-auto grid max-w-4xl gap-4 md:grid-cols-3">
          {credentials.map((c) => (
            <Card key={c.text} className="border-border">
              <CardContent className="flex items-center gap-3 p-5">
                <c.icon className="h-5 w-5 shrink-0 text-accent" aria-hidden="true" />
                <span className="text-sm text-muted-foreground">{c.text}</span>
              </CardContent>
            </Card>
          ))}
        </div>
        <p className="mt-6 text-center text-sm font-medium text-accent">
          Available for full-time, interim (rescue), and fractional engagements.
        </p>
      </section>

      <section className="container pb-20">
        <h2 className="sr-only">Career timeline</h2>
        <div className="mx-auto max-w-4xl space-y-8">
          {roles.map((r) => (
            <article key={r.dates} className="rounded-lg border border-border p-6">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <div>
                  <h3 className="text-xl font-semibold">{r.title}</h3>
                  <p className="text-sm text-muted-foreground">{r.org}</p>
                </div>
                <p className="text-sm font-medium text-accent">{r.dates}</p>
              </div>
              <ul className="mt-4 space-y-2">
                {r.points.map((pt) => (
                  <li key={pt} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    {pt}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Button asChild variant="outline" onClick={() => track("cta_click", { cta: "experience_resume" })}>
            <a href="mailto:Patrick@Ronning.Systems?subject=Resume%20request">
              <Download className="mr-2 h-4 w-4" />
              Request resume (PDF)
            </a>
          </Button>
        </div>
      </section>
    </>
  );
};

export default Experience;