import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Calendar, ExternalLink } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { EmailLink } from "@/components/EmailLink";
import { Seo } from "@/components/Seo";
import { track } from "@/lib/analytics";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Inquiry from ${name || "the website"}`);
    const body = encodeURIComponent(`${message}\n\n— ${name}\n${email}`);
    window.location.href = `mailto:Patrick@Ronning.Systems?subject=${subject}&body=${body}`;
    track("form_submit", { form: "contact" });
  };

  return (
    <>
      <Seo
        title="Contact — Ronning Systems"
        description="Get in touch with Ronning Systems about Joblign, consulting, or your project."
        path="/contact"
      />

      <section className="container py-20">
        <h1 className="text-center text-4xl font-bold tracking-tight">Contact</h1>
        <p className="mt-4 text-center text-muted-foreground">
          Ready to discuss your project? Get in touch.
        </p>

        <div className="mx-auto mt-10 grid max-w-4xl gap-6 md:grid-cols-2">
          <Card>
            <CardContent className="space-y-4 p-6">
              <div className="flex items-start gap-3">
                <Mail className="mt-0.5 h-5 w-5 text-accent" />
                <div>
                  <div className="font-medium">Email</div>
                  <EmailLink className="text-sm text-muted-foreground hover:text-foreground">
                    Patrick@Ronning.Systems
                  </EmailLink>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 text-accent" />
                <div>
                  <div className="font-medium">Location</div>
                  <div className="text-sm text-muted-foreground">Portland, OR Metro Area / Remote</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Calendar className="mt-0.5 h-5 w-5 text-accent" />
                <div>
                  <div className="font-medium">Schedule a Call</div>
                  <p className="text-sm text-muted-foreground">Prefer to talk? Book a time that works for you.</p>
                </div>
              </div>
              <Dialog>
                <DialogTrigger asChild>
                  <Button className="w-full" onClick={() => track("calendly_open", { source: "contact" })}>
                    Book on Calendly
                  </Button>
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
                  <div className="flex items-center justify-between gap-2 border-t p-4">
                    <p className="text-sm text-muted-foreground">
                      Calendly not loading? Open it in a new tab or email us directly.
                    </p>
                    <div className="flex shrink-0 gap-2">
                      <Button
                        asChild
                        variant="outline"
                        size="sm"
                        onClick={() => track("calendly_open", { source: "fallback" })}
                      >
                        <a
                          href="https://calendly.com/patrick-ronning/hire-patrick"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="mr-1 h-4 w-4" />
                          Open
                        </a>
                      </Button>
                      <Button asChild size="sm">
                        <a href="mailto:Patrick@Ronning.Systems">Email</a>
                      </Button>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h2 className="text-lg font-semibold">Send a Message</h2>
              <form onSubmit={handleSubmit} className="mt-4 space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your name"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tell us about your project…"
                    rows={5}
                    required
                  />
                </div>
                <Button type="submit" className="w-full">
                  Send Message
                </Button>
                <p className="text-xs text-muted-foreground">
                  This opens your email client with the message pre-filled. No data is stored on this site.
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>
    </>
  );
};

export default Contact;
