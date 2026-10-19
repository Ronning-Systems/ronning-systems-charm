import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Linkedin } from "lucide-react";
import { Seo } from "@/components/Seo";
import { track } from "@/lib/analytics";

const values = [
  { title: "Simplicity", desc: "The best solutions are often the simplest ones. We avoid over-engineering and focus on what matters." },
  { title: "Reliability", desc: "Systems should work when you need them. We build with redundancy, monitoring, and graceful degradation in mind." },
  { title: "Transparency", desc: "No black boxes. We document our work and ensure you understand your own systems." },
  { title: "Partnership", desc: "We succeed when you succeed. Long-term relationships over quick fixes." },
];

const credentials = [
  "MBA, Willamette University · BS Electrical Engineering, Wichita State University",
  "Most recently Director of Technology Services / CIO, Oregon State Hospital (32 FTE, $15M budget)",
  "Shipped FDA SaMD applications at BrightInsight and launched the Manna Health platform as fractional CTO",
  "Prior board experience; currently seeking a board or technical advisory seat",
  "Immediately available for interim and fractional mandates",
];

const About = () => {
  return (
    <>
      <Seo
        title="About — Patrick Ronning | Ronning Systems"
        description="Patrick Ronning — interim and fractional technology executive for healthcare and regulated organizations. MBA. Portland, OR metro / remote."
        path="/about"
      />

      <section className="container py-20">
        <h1 className="text-center text-4xl font-bold tracking-tight">About</h1>
        <p className="mx-auto mt-6 max-w-3xl text-center text-muted-foreground">
          Ronning Systems, LLC is the Portland, Oregon metro practice of Patrick Ronning: interim and
          fractional technology executive work for healthcare and regulated organizations, alongside
          product engineering. Ronning Systems built the Joblign platform and is developing One Step,
          a next-generation digital health offering.
        </p>

        <div className="mx-auto mt-16 grid max-w-4xl gap-8 md:grid-cols-2">
          <div className="rounded-lg border border-border p-6">
            <div className="flex items-center gap-4">
              <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-secondary">
                <span className="text-2xl font-semibold text-primary" aria-hidden="true">
                  PR
                </span>
              </div>
              <div>
                <h2 className="text-xl font-semibold">Patrick Ronning</h2>
                <p className="text-sm text-muted-foreground">Founder, Ronning Systems, LLC</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              Interim and fractional technology executive — most recently Director of Technology
              Services / CIO of Oregon State Hospital, and previously fractional CTO of Manna Health
              AI. Effective hybrid-remote from the Portland, Oregon metro, and immediately available
              for interim and fractional mandates.
            </p>
            <a
              href="https://www.linkedin.com/in/patrickronning"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 text-accent hover:underline"
            >
              <Linkedin className="h-5 w-5" />
              Connect on LinkedIn
            </a>
          </div>
          <div className="rounded-lg border border-border p-6">
            <h2 className="text-xl font-semibold">Credentials</h2>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              {credentials.map((c) => (
                <li key={c} className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <h2 className="mt-16 text-center text-2xl font-bold">What We Value</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {values.map((v) => (
            <div key={v.title} className="rounded-lg border border-border p-6">
              <h3 className="font-semibold text-accent">{v.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{v.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Button asChild size="lg" onClick={() => track("cta_click", { cta: "about_contact" })}>
            <Link to="/contact">Work With Us</Link>
          </Button>
        </div>
      </section>
    </>
  );
};

export default About;
