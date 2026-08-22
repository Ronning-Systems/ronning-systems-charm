import { describe, it, expect } from "vitest";
import { getCatalog, getAppliance } from "@/lib/catalog";

describe("catalog", () => {
  it("loads the fixture catalog sorted by status then name", async () => {
    const catalog = await getCatalog();
    expect(catalog.appliances.length).toBeGreaterThan(0);
    const names = catalog.appliances.map((a) => a.name);
    expect(names).toEqual(["joblign", "autoapply"]);
    expect(catalog.appliances[0].status).toBe("stable");
  });

  it("returns a single appliance by name", async () => {
    const appliance = await getAppliance("joblign");
    expect(appliance).toBeDefined();
    expect(appliance?.description).toContain("Track jobs");
  });

  it("returns undefined for unknown appliances", async () => {
    const appliance = await getAppliance("does-not-exist");
    expect(appliance).toBeUndefined();
  });
});
