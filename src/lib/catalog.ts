import fixture from "@/data/catalog.fixture.json";

export interface CatalogEntry {
  name: string;
  tier: string;
  type: string;
  description: string;
  image: string;
  audience: string;
  status: string;
  tags: string[];
  auth?: { scheme: string; scopes?: string[] };
  rate_limit?: { per_user?: string; per_appliance?: string };
  depends_on: string[];
  endpoints?: { path: string; methods: string[]; auth: string }[];
  last_updated_at?: string;
  requires_plan?: string;
}

export interface Catalog {
  generated_at: string;
  appliances: CatalogEntry[];
}

const STATUS_RANK: Record<string, number> = {
  stable: 0,
  beta: 1,
  alpha: 2,
  deprecated: 3,
  planned: 4,
};

const sortEntries = (entries: CatalogEntry[]) =>
  [...entries].sort(
    (a, b) => (STATUS_RANK[a.status] ?? 4) - (STATUS_RANK[b.status] ?? 4) || a.name.localeCompare(b.name),
  );

export const fetchCatalog = async (): Promise<Catalog> => {
  const liveUrl = import.meta.env.VITE_CATALOG_INDEX_URL as string | undefined;
  if (liveUrl) {
    const res = await fetch(liveUrl);
    if (!res.ok) throw new Error(`catalog fetch failed: ${res.status}`);
    return res.json();
  }
  return fixture as Catalog;
};

export const getCatalog = async (): Promise<Catalog> => {
  const catalog = await fetchCatalog();
  return { ...catalog, appliances: sortEntries(catalog.appliances) };
};

export const getAppliance = async (name: string): Promise<CatalogEntry | undefined> => {
  const catalog = await getCatalog();
  return catalog.appliances.find((a) => a.name === name);
};
