import { Link } from "react-router-dom";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Briefcase, FileText, Sparkles, ArrowRight, Compass, Quote } from "lucide-react";
import { Logo } from "@/components/Logo";
import { Seo } from "@/components/Seo";
import { track } from "@/lib/analytics";

const productHighlights = [
  {
    icon: Briefcase,
    title: "Track Every Application",
    desc: "Nine stages from Saved to Offered, with pay ranges, deadlines, and automatic history logging.",
  },
  {
    icon: FileText,
    title: "Resumes That Align",
    desc: "Generate tailored resumes and cover letters grounded in the job description, with ATS scoring.",
  },
  {
    icon: Sparkles,
    title: "AI-Powered Analysis",
    desc: "Job description parsing, ATS expert review, and a 4-persona industry panel in a single call.",
  },
];

const consultingOffer = {
  icon: Compass,
  title: "Fractional CTO & Technical Advisory",
  desc: "Senior technology leadership for companies that need to ship — without the overhead of a full-time executive team.",
};

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
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent("Joblign early access interest");
    const body = encodeURIComponent(`I'd like early access to Joblign.\n\nEmail: ${email}`);
    window.location.href = `mailto:Patrick@Ronning.Systems?subject=${subject}&body=${body}`;
    track("form_submit", { form: "email_capture" });
    setSubmitted(true);
  };

  return (
    <>
      <Seo
        title="Ronning Systems — Joblign, Get Aligned for Success"
        description="Joblign is a job application tracking system with AI-powered resume generation and ATS analysis. Get aligned for success. Also offering fractional CTO and technical advisory services."
        path="/"
      />

      <section className="bg-secondary">
        <div className="container py-24 text-center md:py-32">
          <div className="flex justify-center">
            <Logo showWordmark={false} className="[&>svg]:h-16 [&>svg]:w-16" />
          </div>
          <h1 className="mt-6 text-5xl font-bold tracking-tight md:text-7xl">Joblign</h1>
          <p className="mt-4 text-xl font-medium text-accent">Get aligned for success</p>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            Track jobs, generate tailored resumes and cover letters, and align your application to
            each role with AI-powered ATS analysis.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button asChild size="lg" onClick={() => track("cta_click", { cta: "hero_product" })}>
              <Link to="/product">
                Learn About Joblign
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" onClick={() => track("cta_click", { cta: "hero_contact" })}>
              <Link to="/contact">Get Early Access</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="container py-20">
        <h2 className="text-center text-3xl font-bold">Why Joblign</h2>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {productHighlights.map((h) => (
            <Card key={h.title} className="border-border">
              <CardHeader className="items-center text-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-lg border border-accent/30 bg-accent/10">
                  <h.icon className="h-7 w-7 text-accent" strokeWidth={1.5} aria-hidden="true" />
                </div>
                <CardTitle className="mt-4">{h.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center text-muted-foreground">{h.desc}</CardContent>
            </Card>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Button asChild variant="outline" onClick={() => track("cta_click", { cta: "home_product" })}>
            <Link to="/product">See All Features</Link>
          </Button>
        </div>
      </section>

      <section className="bg-secondary">
        <div className="container py-20">
          <h2 className="text-center text-3xl font-bold">Consulting</h2>
          <div className="mx-auto mt-12 max-w-3xl">
            <Card className="border-border bg-card">
              <CardHeader className="items-center text-center">
                <consultingOffer.icon className="h-10 w-10 text-accent" strokeWidth={1.5} />
                <CardTitle className="mt-4">{consultingOffer.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center text-muted-foreground">{consultingOffer.desc}</CardContent>
            </Card>
          </div>
          <div className="mt-10 text-center">
            <Button asChild onClick={() => track("cta_click", { cta: "home_consulting" })}>
              <Link to="/consulting">Explore Consulting Services</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="container py-20">
        <h2 className="text-center text-3xl font-bold">What People Say</h2>
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
      </section>

      <section className="bg-secondary">
        <div className="container py-20">
          <h2 className="text-center text-3xl font-bold">Get Early Access to Joblign</h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-muted-foreground">
            Join the waitlist and be first to know when Joblign opens up. No spam — just launch
            updates.
          </p>
          {submitted ? (
            <p className="mx-auto mt-8 max-w-md text-center font-medium text-accent">
              Thanks! Your email client should have opened — hit send to confirm your interest.
            </p>
          ) : (
            <form onSubmit={handleSubscribe} className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row">
              <div className="flex-1">
                <Label htmlFor="waitlist-email" className="sr-only">
                  Email address
                </Label>
                <Input
                  id="waitlist-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  required
                />
              </div>
              <Button type="submit">Join the Waitlist</Button>
            </form>
          )}
        </div>
      </section>

      <section className="container py-20">
        <h2 className="text-center text-3xl font-bold">About</h2>
        <p className="mx-auto mt-6 max-w-3xl text-center text-muted-foreground">
          Ronning Systems, LLC is a technology consultancy founded on the principle that great systems
          don't happen by accident — they're designed, built, and maintained with care. We build
          Joblign and provide fractional CTO and technical advisory services.
        </p>
        <div className="mt-10 text-center">
          <Button asChild variant="outline">
            <Link to="/about">Learn More</Link>
          </Button>
        </div>
      </section>
    </>
  );
};

export default Index;
