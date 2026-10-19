import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ShoppingCart, Calendar, BadgeCheck } from "lucide-react";
import { Seo } from "@/components/Seo";
import { track } from "@/lib/analytics";
import { EmailLink } from "@/components/EmailLink";
import { engagementOptions } from "@/lib/engagement";

const EngagementOptions = () => {
  return (
    <>
      <Seo
        title="Engagement Options — Ronning Systems"
        description="Ways to work with Patrick Ronning: technology leadership audits, advisory hour blocks, fractional CTO/CIO retainers, and interim executive placement. Portland, OR metro / remote."
        path="/engagement-options"
      />

      <section className="bg-secondary">
        <div className="container py-24 text-center md:py-32">
          <h1 className="text-5xl font-bold tracking-tight md:text-6xl">Engagement options</h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            Defined-scope options can be purchased directly. Retainers and interim executive mandates
            start with a scoping conversation instead — the right structure matters more than a
            price tag.
          </p>
        </div>
      </section>

      <section className="container py-20">
        <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-2">
          {engagementOptions.map((o) => (
            <Card key={o.id} className="border-border bg-card">
              <CardHeader>
                <div className="flex items-start justify-between gap-4">
                  <CardTitle>{o.name}</CardTitle>
                  <span className="shrink-0 text-sm font-medium text-accent">{o.priceNote}</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">{o.desc}</p>
                {o.purchasable ? (
                  o.stripeLink ? (
                    <Button onClick={() => track("checkout_open", { item: o.id })} asChild>
                      <a href={o.stripeLink} target="_blank" rel="noopener noreferrer">
                        <ShoppingCart className="mr-2 h-4 w-4" />
                        Purchase securely via Stripe
                      </a>
                    </Button>
                  ) : (
                    <Button variant="outline" asChild onClick={() => track("inquiry_click", { item: o.id })}>
                      <EmailLink subject={`Engagement inquiry: ${o.name}`}>
                        Inquire about this engagement
                      </EmailLink>
                    </Button>
                  )
                ) : (
                  <div className="flex flex-wrap gap-2">
                    <Button variant="outline" asChild onClick={() => track("inquiry_click", { item: o.id })}>
                      <EmailLink subject={`Engagement inquiry: ${o.name}`}>Inquire</EmailLink>
                    </Button>
                    <Button variant="ghost" asChild onClick={() => track("calendly_open", { source: "engagement_options", item: o.id })}>
                      <a href="https://calendly.com/patrick-ronning/hire-patrick" target="_blank" rel="noopener noreferrer">
                        <Calendar className="mr-2 h-4 w-4" />
                        Book an intro call
                      </a>
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mx-auto mt-10 max-w-4xl rounded-lg border border-border p-6 text-sm text-muted-foreground">
          <div className="flex items-start gap-3">
            <BadgeCheck className="mt-0.5 h-5 w-5 shrink-0 text-accent" aria-hidden="true" />
            <p>
              Purchases are processed securely by Stripe — Ronning Systems never sees or stores your
              card details. Not sure which fits?{" "}
              <Link to="/contact" className="text-accent hover:underline">
                Get in touch
              </Link>{" "}
              and we'll scope it together.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default EngagementOptions;