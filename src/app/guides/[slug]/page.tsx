import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { GUIDES, getGuideBySlug } from "@/data/guides";
import { siteConfig } from "@/lib/siteConfig";
import JsonLd from "@/components/JsonLd";

export function generateStaticParams() {
  return GUIDES.map((guide) => ({
    slug: guide.slug,
  }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const guide = getGuideBySlug(params.slug);
  if (!guide) return {};

  const title = `${guide.title} | Neem Guides`;

  return {
    title: {
      absolute: title,
    },
    description: guide.excerpt,
    keywords: guide.keywords,
    alternates: {
      canonical: `${siteConfig.url}/guides/${guide.slug}`,
    },
    openGraph: {
      title,
      description: guide.excerpt,
      url: `${siteConfig.url}/guides/${guide.slug}`,
      type: "article",
      publishedTime: guide.publishDate,
      authors: [guide.author],
      images: [
        {
          url: `${siteConfig.url}${siteConfig.ogImage}`,
          width: 1200,
          height: 630,
          alt: guide.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: guide.excerpt,
      images: [`${siteConfig.url}${siteConfig.ogImage}`],
    },
  };
}

export default function GuideDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const guide = getGuideBySlug(params.slug);
  if (!guide) {
    notFound();
  }

  const otherGuides = GUIDES.filter((g) => g.slug !== guide.slug);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: guide.title,
    description: guide.excerpt,
    datePublished: guide.publishDate,
    dateModified: guide.publishDate,
    author: {
      "@type": "Organization",
      name: guide.author,
      url: siteConfig.url,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      logo: {
        "@type": "ImageObject",
        url: `${siteConfig.url}/images/logo.png`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${siteConfig.url}/guides/${guide.slug}`,
    },
    image: `${siteConfig.url}${siteConfig.ogImage}`,
  };

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
      {
        "@type": "ListItem",
        position: 3,
        name: guide.title,
        item: `${siteConfig.url}/guides/${guide.slug}`,
      },
    ],
  };

  return (
    <>
      <JsonLd data={[articleSchema, breadcrumbSchema]} />

      <nav
        aria-label="Breadcrumb"
        style={{ marginBottom: "20px", fontSize: "0.85rem", color: "var(--mut)" }}
      >
        <Link href="/" style={{ textDecoration: "none", color: "var(--coffee)" }}>
          Home
        </Link>
        <span style={{ margin: "0 8px" }}>/</span>
        <Link href="/guides" style={{ textDecoration: "none", color: "var(--coffee)" }}>
          Guides
        </Link>
        <span style={{ margin: "0 8px" }}>/</span>
        <span style={{ color: "var(--cream)" }}>{guide.title}</span>
      </nav>

      <article aria-labelledby="article-title" style={{ maxWidth: "860px", margin: "0 auto" }}>
        <header style={{ marginBottom: "32px" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              fontSize: "0.82rem",
              color: "var(--coffee)",
              marginBottom: "10px",
              fontWeight: 600,
            }}
          >
            <span>{guide.author}</span>
            <span>•</span>
            <span>{guide.publishDate}</span>
            <span>•</span>
            <span>{guide.readingTime}</span>
          </div>

          <h1
            id="article-title"
            style={{
              fontSize: "clamp(2rem, 5vw, 3.4rem)",
              lineHeight: "1.05",
              margin: "0 0 16px",
              color: "var(--cream)",
            }}
          >
            {guide.title}
          </h1>

          <p
            style={{
              fontSize: "1.15rem",
              lineHeight: "1.65",
              color: "var(--mut)",
              borderLeft: "3px solid var(--coffee)",
              paddingLeft: "16px",
              margin: "0 0 24px",
            }}
          >
            {guide.excerpt}
          </p>
        </header>

        {/* Article Body */}
        <div style={{ display: "grid", gap: "28px" }}>
          {guide.sections.map((sec, idx) => (
            <section key={idx} className="card" style={{ padding: "24px 28px" }}>
              <h2
                style={{
                  fontSize: "1.5rem",
                  margin: "0 0 12px",
                  color: "var(--coffee)",
                }}
              >
                {sec.heading}
              </h2>
              <p
                style={{
                  margin: 0,
                  fontSize: "1rem",
                  lineHeight: "1.7",
                  color: "var(--cream)",
                  whiteSpace: "pre-line",
                }}
              >
                {sec.body}
              </p>
            </section>
          ))}
        </div>

        {/* Product Promo Callout */}
        <aside
          style={{
            margin: "44px 0",
            padding: "28px",
            borderRadius: "16px",
            border: "1px solid rgba(200,149,89,0.35)",
            background: "linear-gradient(135deg, rgba(200,149,89,0.18), rgba(20,14,10,0.8))",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "18px",
          }}
        >
          <div>
            <span
              style={{
                fontSize: "0.8rem",
                textTransform: "uppercase",
                letterSpacing: "0.2em",
                color: "var(--coffee)",
                fontWeight: 600,
                display: "block",
                marginBottom: "4px",
              }}
            >
              Ready to Upgrade?
            </span>
            <strong style={{ fontSize: "1.4rem", color: "var(--cream)", display: "block" }}>
              Get the Neem 4-Bottle Value Pack
            </strong>
            <span style={{ color: "var(--mut)", fontSize: "0.9rem" }}>
              4 premium cylinder bottles at ₹389 with Free Doorstep Delivery. Fits all automotive cup holders.
            </span>
          </div>
          <Link href="/products/4-bottle-combo" className="btn">
            Order Combo (₹389)
          </Link>
        </aside>

        {/* Related Guides */}
        {otherGuides.length > 0 && (
          <section style={{ marginTop: "44px" }}>
            <div className="eyebrow">Continue Reading</div>
            <h2 style={{ fontSize: "1.6rem" }}>More Helpful Guides</h2>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
                gap: "16px",
                marginTop: "16px",
              }}
            >
              {otherGuides.map((item) => (
                <Link
                  key={item.slug}
                  href={`/guides/${item.slug}`}
                  className="card"
                  style={{
                    textDecoration: "none",
                    display: "block",
                    padding: "18px",
                  }}
                >
                  <span
                    style={{
                      fontSize: "0.75rem",
                      color: "var(--coffee)",
                      fontWeight: 600,
                      display: "block",
                      marginBottom: "6px",
                    }}
                  >
                    {item.readingTime}
                  </span>
                  <h3 style={{ margin: "0 0 6px", fontSize: "1.05rem", color: "var(--cream)" }}>
                    {item.title}
                  </h3>
                  <p style={{ margin: 0, fontSize: "0.85rem", color: "var(--mut)" }}>
                    {item.excerpt.slice(0, 90)}...
                  </p>
                </Link>
              ))}
            </div>
          </section>
        )}
      </article>
    </>
  );
}

