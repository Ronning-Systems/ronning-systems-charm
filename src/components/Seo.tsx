import { Helmet } from "react-helmet-async";

const SITE_URL = "https://ronning.systems";
const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.svg`;

interface SeoProps {
  title: string;
  description: string;
  path: string;
  noindex?: boolean;
  ogImage?: string;
  jsonLd?: Record<string, unknown>;
}

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SoftwareApplication",
      name: "Joblign",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      url: `${SITE_URL}/product`,
      description:
        "A job application tracking system with AI-powered job description parsing, resume generation, and ATS analysis.",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
      },
      publisher: {
        "@type": "Organization",
        name: "Ronning Systems, LLC",
        url: SITE_URL,
      },
    },
    {
      "@type": "Person",
      name: "Patrick Ronning",
      jobTitle: "Interim & Fractional CTO / CIO",
      url: SITE_URL,
      sameAs: "https://www.linkedin.com/in/patrickronning",
      description:
        "Interim and fractional technology executive for healthcare and regulated organizations. Most recently Director of Technology Services / CIO of Oregon State Hospital. MBA; PE exam passed.",
      knowsAbout: [
        "Healthcare IT",
        "ITIL service management",
        "HIPAA",
        "FDA Software as a Medical Device",
        "ISO 14971",
        "IEC 62304",
        "Cybersecurity governance",
        "Technology budget and vendor management",
        "SCADA and industrial control systems",
      ],
      address: {
        "@type": "PostalAddress",
        addressLocality: "Portland",
        addressRegion: "OR",
        addressCountry: "US",
      },
    },
    {
      "@type": "ProfessionalService",
      name: "Ronning Systems, LLC",
      url: SITE_URL,
      description:
        "Interim and fractional CTO/CIO for healthcare and regulated organizations, project execution, and board & technical advisory services.",
      areaServed: "Portland, OR Metro Area",
      address: {
        "@type": "PostalAddress",
        addressRegion: "OR",
        addressCountry: "US",
      },
      founder: {
        "@type": "Person",
        name: "Patrick Ronning",
        sameAs: "https://www.linkedin.com/in/patrickronning",
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Technology Leadership Services",
        itemListElement: [
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Interim & Fractional CTO / CIO" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Project Execution" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Board & Technical Advisory" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Technology Leadership Audit" } },
        ],
      },
    },
  ],
};

export const Seo = ({ title, description, path, noindex, ogImage = DEFAULT_OG_IMAGE, jsonLd: extraJsonLd }: SeoProps) => {
  const url = `${SITE_URL}${path}`;
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      {noindex ? <meta name="robots" content="noindex" /> : <meta name="robots" content="index, follow" />}
      <link rel="canonical" href={url} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="Ronning Systems, LLC" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      {extraJsonLd ? <script type="application/ld+json">{JSON.stringify(extraJsonLd)}</script> : null}
    </Helmet>
  );
};

export default Seo;
