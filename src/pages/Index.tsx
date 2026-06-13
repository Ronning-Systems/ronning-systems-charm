import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Cloud, Boxes, Code2, Mail, MapPin, Calendar } from "lucide-react";
import { Logo } from "@/components/Logo";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const services = [
  {
    icon: Cloud,
    title: "Audit Readiness",
    desc: "Prepare for FDA inspections with confidence. I help medical device companies achieve audit-ready status through Design History File (DHF) development, Device Master Record (DMR) compliance, and pre-audit gap assessments. Specializing in FDA 21 CFR Part 820 requirements for product development.",
  },
  {
    icon: Boxes,
    title: "Systems Engineering",
    desc: "Build a foundation for compliant product development. I develop and operate Quality Management Systems, create product requirements, and design verification plans with complete traceability. Experience with DO-178C and medical device validation protocols.",
  },
  {
    icon: Code2,
    title: "Technical Facilitation",
    desc: 'Break down silos and align your teams. I work side-by-side with your organization to identify pain points, facilitate cross-functional communication, and establish better ways of working together. Turn "talking at each other" into "speaking with each other."',
  },
];

const projects = [
  {
    title: "Garmin G500 TXi Flight Display System",
    desc: "Managed all system requirements, verification, and regulatory compliance for the G500 TXi flight display system. Set the standard for system requirements management at Garmin, establishing processes that became the benchmark for subsequent aviation product development.",
  },
  {
    title: "First Flight Launch Verification",
    desc: "Led cross-functional launch verification efforts at Virgin Orbit, coordinating with all departments to ensure testing supported a high probability of successful launch. The mission achieved orbit insertion on first flight.",
  },
  {
    title: "SaMD Applications at BrightInsight",
    desc: "Led launch of multiple Software as a Medical Device (SaMD) applications including two blockbuster immunotherapy companion applications (Dupixent and Hizentra), a Type I Diabetes application, and a Type 1 Diabetes dosing guidance SDK.",
  },
  {
    title: "Oregon State Hospital Information Ecosystem",
    desc: "Mapped the entire ecosystem of information across the Oregon State Hospital system. Identified critical gaps and led initiatives that resulted in closure of 3 enterprise risks, significantly improving patient data integrity and operational workflows.",
  },
];

const values = [
  { title: "Simplicity", desc: "The best solutions are often the simplest ones. We avoid over-engineering and focus on what matters." },
  { title: "Reliability", desc: "Systems should work when you need them. We build with redundancy, monitoring, and graceful degradation in mind." },
  { title: "Transparency", desc: "No black boxes. We document our work and ensure you understand your own systems." },
  { title: "Partnership", desc: "We succeed when you succeed. Long-term relationships over quick fixes." },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-40 w-full border-b border-border bg-background/80 backdrop-blur">
        <nav className="container flex h-16 items-center justify-between">
          <a href="#" aria-label="Ronning Systems, LLC home">
            <Logo />
          </a>
          <div className="hidden gap-8 text-sm text-muted-foreground md:flex">
            <a href="#services" className="hover:text-foreground">Services</a>
            <a href="#projects" className="hover:text-foreground">Projects</a>
            <a href="#about" className="hover:text-foreground">About</a>
            <a href="#contact" className="hover:text-foreground">Contact</a>
          </div>
        </nav>
      </header>

      <main>
        <section className="bg-secondary">
          <div className="container py-24 text-center md:py-32">
            <div className="flex justify-center">
              <Logo showWordmark={false} className="[&>svg]:h-16 [&>svg]:w-16" />
            </div>
            <h1 className="mt-6 text-4xl font-bold tracking-tight md:text-6xl">Ronning Systems, LLC</h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
              Building reliable systems that scale with your business.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Button asChild size="lg">
                <a href="#contact">Get in Touch</a>
              </Button>
            </div>
          </div>
        </section>

        <section id="services" className="container py-20">
          <h2 className="text-center text-3xl font-bold">Services</h2>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {services.map((s) => (
              <Card key={s.title} className="border-border">
                <CardHeader className="items-center text-center">
                  <s.icon className="h-10 w-10 text-accent" strokeWidth={1.5} />
                  <CardTitle className="mt-4">{s.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center text-muted-foreground">{s.desc}</CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section id="projects" className="bg-secondary">
          <div className="container py-20">
            <h2 className="text-center text-3xl font-bold">Projects</h2>
            <div className="mt-12 grid gap-6 md:grid-cols-2">
              {projects.map((p) => (
                <Card key={p.title} className="border-border bg-card">
                  <CardHeader>
                    <CardTitle>{p.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-muted-foreground">{p.desc}</CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="container py-20">
          <h2 className="text-center text-3xl font-bold">About</h2>
          <p className="mx-auto mt-6 max-w-3xl text-center text-muted-foreground">
            Ronning Systems, LLC is a technology consultancy founded on the principle that great systems don't happen by accident—they're designed, built, and maintained with care.
          </p>

          <h3 className="mt-16 text-center text-xl font-semibold">What We Value</h3>
          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <div key={v.title} className="rounded-lg border border-border p-6">
                <h4 className="font-semibold text-accent">{v.title}</h4>
                <p className="mt-2 text-sm text-muted-foreground">{v.desc}</p>
              </div>
            ))}
          </div>

          <div className="mx-auto mt-16 max-w-3xl">
            <h3 className="text-center text-xl font-semibold">Background</h3>
            <p className="mt-4 text-center text-muted-foreground">
              With 15+ years of experience in systems engineering, software development, and cloud architecture, Patrick brings a practical, business-focused approach to technology. He has worked with startups and established enterprises, always focusing on delivering real value.&nbsp;
            </p>
          </div>
        </section>

        <section id="contact" className="bg-secondary">
          <div className="container py-20">
            <h2 className="text-center text-3xl font-bold">Contact</h2>
            <p className="mt-4 text-center text-muted-foreground">Ready to discuss your project? Get in touch.</p>
            <div className="mx-auto mt-10 grid max-w-3xl gap-6 md:grid-cols-2">
              <Card>
                <CardContent className="space-y-4 p-6">
                  <div className="flex items-start gap-3">
                    <Mail className="mt-0.5 h-5 w-5 text-accent" />
                    <div>
                      <div className="font-medium">Email</div>
                      <a href="mailto:Patrick@Ronning.Systems" className="text-sm text-muted-foreground hover:text-foreground">Patrick@Ronning.Systems</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="mt-0.5 h-5 w-5 text-accent" />
                    <div>
                      <div className="font-medium">Location</div>
                      <div className="text-sm text-muted-foreground">Portland, OR Metro Area / Remote</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="space-y-4 p-6">
                  <div className="flex items-start gap-3">
                    <Calendar className="mt-0.5 h-5 w-5 text-accent" />
                    <div>
                      <div className="font-medium">Schedule a Call</div>
                      <p className="text-sm text-muted-foreground">Prefer to talk? Book a time that works for you.</p>
                    </div>
                  </div>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button className="w-full">Book on Calendly</Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-3xl p-0 sm:max-w-3xl">
                      <DialogHeader className="p-4 pb-0">
                        <DialogTitle>Schedule a Call</DialogTitle>
                      </DialogHeader>
                      <iframe
                        title="Calendly scheduling"
                        src="https://calendly.com/patrick-ronning/hire-patrick?embed_domain=ronning.systems&embed_type=Inline"
                        className="h-[70vh] w-full rounded-b-lg border-0"
                      />
                    </DialogContent>
                  </Dialog>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border">
        <div className="container py-8 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Ronning Systems, LLC. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Index;
