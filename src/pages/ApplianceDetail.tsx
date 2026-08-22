import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Seo } from "@/components/Seo";
import { getAppliance, type CatalogEntry } from "@/lib/catalog";

const statusVariant: Record<string, "default" | "secondary" | "outline" | "destructive"> = {
  stable: "default",
  beta: "secondary",
  alpha: "outline",
  planned: "outline",
  deprecated: "destructive",
};

const ApplianceDetail = () => {
  const { name } = useParams<{ name: string }>();
  const [appliance, setAppliance] = useState<CatalogEntry | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!name) return;
    getAppliance(name)
      .then((a) => {
        if (!a) setError("Appliance not found");
        else setAppliance(a);
      })
      .catch((e) => setError(e instanceof Error ? e.message : "Failed to load appliance"));
  }, [name]);

  if (error) {
    return (
      <section className="container py-20 text-center">
        <h1 className="text-3xl font-bold">Appliance not found</h1>
        <p className="mt-4 text-muted-foreground">{error}</p>
        <Button asChild className="mt-8">
          <Link to="/appliances">Back to Appliances</Link>
        </Button>
      </section>
    );
  }

  if (!appliance) {
    return (
      <section className="container py-20 text-center">
        <p className="text-muted-foreground">Loading…</p>
      </section>
    );
  }

  return (
    <>
      <Seo
        title={`${appliance.name} — Ronning Systems`}
        description={appliance.description}
        path={`/appliances/${appliance.name}`}
      />
      <section className="container py-20">
        <Link to="/appliances" className="text-sm text-muted-foreground hover:text-foreground">
          ← Back to Appliances
        </Link>
        <div className="mt-6 flex flex-wrap items-center gap-3">
          <h1 className="text-4xl font-bold tracking-tight capitalize">{appliance.name}</h1>
          <Badge variant={statusVariant[appliance.status] ?? "outline"}>{appliance.status}</Badge>
          {appliance.requires_plan && <Badge variant="secondary">{appliance.requires_plan} plan</Badge>}
        </div>
        <p className="mt-4 max-w-2xl text-lg text-muted-foreground">{appliance.description}</p>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="rounded-lg border border-border p-6">
            <h2 className="text-lg font-semibold">Details</h2>
            <dl className="mt-4 space-y-3 text-sm">
              <div className="flex justify-between gap-4">
                <dt className="text-muted-foreground">Tier</dt>
                <dd className="capitalize">{appliance.tier}</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-muted-foreground">Type</dt>
                <dd className="capitalize">{appliance.type}</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-muted-foreground">Image</dt>
                <dd className="font-mono">{appliance.image}</dd>
              </div>
              {appliance.last_updated_at && (
                <div className="flex justify-between gap-4">
                  <dt className="text-muted-foreground">Last updated</dt>
                  <dd>{new Date(appliance.last_updated_at).toLocaleDateString()}</dd>
                </div>
              )}
            </dl>
          </div>

          <div className="rounded-lg border border-border p-6">
            <h2 className="text-lg font-semibold">Endpoints</h2>
            {appliance.endpoints && appliance.endpoints.length > 0 ? (
              <ul className="mt-4 space-y-2 text-sm">
                {appliance.endpoints.map((e) => (
                  <li key={e.path} className="flex items-center justify-between gap-4">
                    <code className="text-muted-foreground">{e.path}</code>
                    <span className="flex items-center gap-2">
                      <span className="text-muted-foreground">{e.methods.join(", ")}</span>
                      <Badge variant="outline">{e.auth}</Badge>
                    </span>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="mt-4 text-sm text-muted-foreground">No HTTP endpoints.</p>
            )}
          </div>
        </div>

        {appliance.tags.length > 0 && (
          <div className="mt-8 flex flex-wrap gap-2">
            {appliance.tags.map((tag) => (
              <Badge key={tag} variant="outline">
                {tag}
              </Badge>
            ))}
          </div>
        )}

        <div className="mt-10">
          <Button asChild>
            <Link to="/contact">Get in Touch</Link>
          </Button>
        </div>
      </section>
    </>
  );
};

export default ApplianceDetail;
