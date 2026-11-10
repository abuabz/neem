import React from "react";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { GUIDES } from "@/data/guides";
import { siteConfig } from "@/lib/siteConfig";

export const metadata = {
  title: "Guides & Articles - Car Care, Hygiene & Refill Tips",
  description:
    "Expert tips on car tissue accessories, vehicle interior organization, skin hygiene for commuters, and how to refill Neem face tissue bottles.",
  alternates: {
    canonical: `${siteConfig.url}/guides`,
  },
  openGraph: {
    title: "Neem Guides - Car Care, Hygiene & Bottle Tips",
    description:
      "Explore articles on car interior organization, facial skin hygiene, and sustainable refills from the Neem editorial team.",
    url: `${siteConfig.url}/guides`,
  },
};

export default function GuidesPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: siteConfig.url,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Guides",
        item: `${siteConfig.url}/guides`,
      },
    ],
  };

  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Neem Guides & Articles",
    url: `${siteConfig.url}/guides`,
    description:
      "Educational articles and guides on car tissue accessories, skin wellness, and sustainable refills.",
  };

  return (
    <>
      <JsonLd data={[breadcrumbSchema, collectionSchema]} />

      <nav
        aria-label="Breadcrumb"
        style={{ marginBottom: "20px", fontSize: "0.85rem", color: "var(--mut)" }}
      >
        <Link href="/" style={{ textDecoration: "none", color: "var(--coffee)" }}>
          Home
        </Link>
        <span style={{ margin: "0 8px" }}>/</span>
        <span style={{ color: "var(--cream)" }}>Guides</span>
      </nav>

      <section aria-labelledby="guides-title">
        <div className="eyebrow">Insights &amp; Tips</div>
        <h1 id="guides-title" style={{ fontSize: "clamp(2.4rem, 6vw, 4rem)" }}>
          Guides &amp; Articles
        </h1>
        <p>
          Discover practical insights on automobile cleanliness, daily skincare hygiene,
          and how to get the most value from your Neem face tissue bottles.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "24px",
            marginTop: "32px",
          }}
        >
          {GUIDES.map((guide) => (
            <article
              key={guide.slug}
              className="card"
              style={{
                display: "flex",
                flexDirection: "column",
                transition: "border-color 0.2s ease, transform 0.2s ease",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  fontSize: "0.78rem",
                  color: "var(--coffee)",
                  marginBottom: "8px",
                  fontWeight: 600,
                }}
              >
                <span>{guide.author}</span>
                <span>{guide.readingTime}</span>
              </div>

              <h2
                style={{
                  fontSize: "1.35rem",
                  lineHeight: "1.2",
                  margin: "0 0 10px",
                  color: "var(--cream)",
                }}
              >
                <Link
                  href={`/guides/${guide.slug}`}
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  {guide.title}
                </Link>
              </h2>

              <p style={{ fontSize: "0.92rem", flex: 1, marginBottom: "20px" }}>
                {guide.excerpt}
              </p>

              <Link
                href={`/guides/${guide.slug}`}
                className="btn alt"
                style={{ width: "fit-content", padding: "8px 18px", fontSize: "0.88rem" }}
              >
                Read Article &rarr;
              </Link>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}

