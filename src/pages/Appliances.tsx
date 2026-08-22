import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Seo } from "@/components/Seo";
import { getCatalog, type CatalogEntry } from "@/lib/catalog";
import { track } from "@/lib/analytics";

const statusVariant: Record<string, "default" | "secondary" | "outline" | "destructive"> = {
  stable: "default",
  beta: "secondary",
  alpha: "outline",
  planned: "outline",
  deprecated: "destructive",
};

const Appliances = () => {
  const [appliances, setAppliances] = useState<CatalogEntry[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    getCatalog()
      .then((catalog) => setAppliances(catalog.appliances))
      .catch((e) => setError(e instanceof Error ? e.message : "Failed to load catalog"));
  }, []);

  return (
    <>
      <Seo
        title="Appliances — Ronning Systems"
        description="Browse the Joblign appliance catalog — self-contained services for job tracking, resume generation, and more."
        path="/appliances"
      />
      <section className="container py-20">
        <h1 className="text-center text-4xl font-bold tracking-tight">Appliances</h1>
        <p className="mx-auto mt-4 max-w-2xl text-center text-muted-foreground">
          Self-contained services that make up the Joblign platform. Each appliance is a focused
          capability you can use on its own or combine with others.
        </p>
        {error && <p className="mt-8 text-center text-destructive">Failed to load catalog: {error}</p>}
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {appliances.map((a) => (
            <Link key={a.name} to={`/appliances/${a.name}`} onClick={() => track("appliance_view", { name: a.name })}>
              <Card className="h-full border-border transition-shadow hover:shadow-md">
                <CardHeader>
                  <div className="flex items-center justify-between gap-2">
                    <CardTitle className="capitalize">{a.name}</CardTitle>
                    <Badge variant={statusVariant[a.status] ?? "outline"}>{a.status}</Badge>
                  </div>
                  {a.requires_plan && <Badge variant="secondary">{a.requires_plan} plan</Badge>}
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{a.description}</p>
                  {a.tags.length > 0 && (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {a.tags.map((tag) => (
                        <Badge key={tag} variant="outline">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
};

export default Appliances;
