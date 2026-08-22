import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase, FileText, Sparkles, Target, ListChecks, Wand2 } from "lucide-react";
import { Seo } from "@/components/Seo";
import { track } from "@/lib/analytics";

const features = [
  {
    icon: Briefcase,
    title: "Job Tracking",
    desc: "Track jobs through every stage — from Saved to Offered to Closed — with structured pay ranges, deadlines, and automatic history logging.",
  },
  {
    icon: FileText,
    title: "Resume Management",
    desc: "Upload a master resume and template, run ATS optimization, and get technical-fit analysis from specialized AI agents.",
  },
  {
    icon: Wand2,
    title: "Cover Letter Generation",
    desc: "Generate tailored cover letters grounded in your resume and the job description, then revise them with text feedback.",
  },
  {
    icon: Sparkles,
    title: "AI Agents",
    desc: "Job description parsing, ATS expert review, and a 4-persona industry panel — all in one place.",
  },
  {
    icon: Target,
    title: "ATS Alignment",
    desc: "Align your resume to each role with keyword matching and structured scores that persist across revisions.",
  },
  {
    icon: ListChecks,
    title: "Pipeline Visibility",
    desc: "Sort by company, position, location, stage, applied date, deadline, pay, or created — know exactly where every application stands.",
  },
];

const Product = () => {
  return (
    <>
      <Seo
        title="Joblign — Get Aligned for Success | Ronning Systems"
        description="Joblign is a job application tracking system with AI-powered job description parsing, resume generation, and ATS analysis. Get aligned for success."
        path="/product"
      />

      <section className="bg-secondary">
        <div className="container py-24 text-center md:py-32">
          <h1 className="text-5xl font-bold tracking-tight md:text-7xl">Joblign</h1>
          <p className="mx-auto mt-4 text-xl font-medium text-accent">Get aligned for success</p>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            A personal job application tracking system with AI-powered job description parsing,
            resume generation, and ATS analysis. Track applications, generate tailored cover
            letters, and align your resume to each role.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button asChild size="lg" onClick={() => track("cta_click", { cta: "product_contact" })}>
              <Link to="/contact">Get Early Access</Link>
            </Button>
            <Button asChild size="lg" variant="outline" onClick={() => track("cta_click", { cta: "product_consulting" })}>
              <Link to="/consulting">Consulting Services</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="container py-20">
        <h2 className="text-center text-3xl font-bold">Features</h2>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <Card key={f.title} className="border-border">
              <CardHeader>
                <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-accent/30 bg-accent/10">
                  <f.icon className="h-6 w-6 text-accent" strokeWidth={1.5} aria-hidden="true" />
                </div>
                <CardTitle className="mt-4">{f.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">{f.desc}</CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="bg-secondary">
        <div className="container py-20 text-center">
          <h2 className="text-3xl font-bold">Ready to get aligned?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Get early access and be first to know when Joblign opens up.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button asChild size="lg" onClick={() => track("cta_click", { cta: "product_contact" })}>
              <Link to="/contact">Get Early Access</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Product;
