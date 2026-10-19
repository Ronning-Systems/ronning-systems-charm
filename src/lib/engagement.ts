export const engagementOptions = [
  {
    id: "tech-leadership-audit",
    name: "Technology Leadership Audit",
    desc: "A focused assessment of your technology organization, architecture, governance, and roadmap — with a prioritized set of recommendations you can act on immediately.",
    priceNote: "Fixed price",
    purchasable: true,
    stripeLink: "https://buy.stripe.com/5kQaEXaXP6TTa814ceaR200",
    maxCapacity: 2,
  },
  {
    id: "advisory-hours",
    name: "Advisory Hour Block",
    desc: "A block of senior advisory hours for boards, leadership teams, or founders who need an independent technical perspective on strategy, risk, or a specific decision.",
    priceNote: "10-hour block",
    purchasable: true,
    stripeLink: "https://buy.stripe.com/3cI28r4zr9214NHgZ0aR201",
    maxCapacity: 3,
  },
  {
    id: "fractional-retainer",
    name: "Fractional CTO / CIO Retainer",
    desc: "Ongoing senior technology leadership without the full-time executive hire. Engagement length and scope are set together — get in touch to scope it.",
    priceNote: "Monthly retainer",
    purchasable: true,
    stripeLink: "https://buy.stripe.com/fZu7sL3vnba97ZT6kmaR202",
    maxCapacity: 1,
  },
  {
    id: "interim-executive",
    name: "Interim Executive Placement",
    desc: "Step-in executive coverage for CIO/CTO transitions and vacancies, including 24/7 operations, budgets, vendors, and governance. Scoping conversation first.",
    priceNote: "Scoped per mandate",
    purchasable: false,
  },
] as const;

export const engagementInquiry = {
  calendly: "https://calendly.com/patrick-ronning/hire-patrick",
};