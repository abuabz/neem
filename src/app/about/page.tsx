import React from "react";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { siteConfig } from "@/lib/siteConfig";

export const metadata = {
  title: "About Our Story & Kerala Heritage",
  description:
    "Learn about Neem, a premium personal care brand born in Vengara, Kerala. Inspired by the resilience of the neem tree to bring soft, protective everyday essentials.",
  alternates: {
    canonical: `${siteConfig.url}/about`,
  },
  openGraph: {
    title: "About Neem - A Touch by Nature",
    description:
      "Crafted in Vengara, Kerala. Discover our story, promise, and commitment to everyday wellness.",
    url: `${siteConfig.url}/about`,
  },
};

export default function AboutPage() {
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
        name: "About",
        item: `${siteConfig.url}/about`,
      },
    ],
  };

  const aboutSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "About Neem Face Tissue",
    url: `${siteConfig.url}/about`,
    description:
      "Neem is a premium face tissue brand from Kerala, India. Softness that cares, nature that protects.",
    mainEntity: {
      "@type": "Organization",
      name: siteConfig.name,
      address: {
        "@type": "PostalAddress",
        addressLocality: siteConfig.location.city,
        addressRegion: siteConfig.location.state,
        addressCountry: siteConfig.location.country,
      },
    },
  };

  return (
    <>
      <JsonLd data={[breadcrumbSchema, aboutSchema]} />

      <nav
        aria-label="Breadcrumb"
        style={{ marginBottom: "20px", fontSize: "0.85rem", color: "var(--mut)" }}
      >
        <Link href="/" style={{ textDecoration: "none", color: "var(--coffee)" }}>
          Home
        </Link>
        <span style={{ margin: "0 8px" }}>/</span>
        <span style={{ color: "var(--cream)" }}>About</span>
      </nav>

      <section aria-labelledby="about-page-title">
        <div className="eyebrow">Our story</div>
        <h1 id="about-page-title" style={{ fontSize: "clamp(2.4rem, 6vw, 4rem)" }}>
          A touch by nature
        </h1>

        <div className="two" style={{ marginTop: "24px" }}>
          <div>
            <p>
              Neem is a premium face tissue brand born in <strong>Vengara, Kerala, India</strong>.
              Our name and our leaf mark are deeply rooted in the neem tree (Azadirachta indica),
              which has been a symbol of healing, protection, and purity across homes in India for generations.
            </p>
            <p>
              We noticed that most facial tissues on the market were packaged in identical, fragile cardboard boxes
              that get crushed under car seats or ruined by condensation in vehicle cup holders. We set out to change that.
            </p>
            <p>
              We designed a sturdy, tactile cylinder bottle with copper-gold leaf iconography that looks stunning
              in luxury cars, offices, and homes, while delivering ultra-soft 2-ply skin-safe sheets.
            </p>
          </div>

          <div>
            <div className="card" style={{ marginBottom: "20px" }}>
              <h3 style={{ fontSize: "1.2rem", color: "var(--coffee)" }}>Our Brand Promise</h3>
              <p style={{ marginTop: "6px" }}>
                <em>&ldquo;Softness that cares, nature that protects.&rdquo;</em>
                <br />
                Every bottle is made to feel pleasant in your hands, smooth on your skin, and kind to your senses.
              </p>
            </div>

            <div className="card">
              <h3 style={{ fontSize: "1.2rem", color: "var(--coffee)" }}>Heritage &amp; Location</h3>
              <p style={{ marginTop: "6px" }}>
                Proudly based in <strong>Vengara, Malappuram district, Kerala</strong>.
                We ship across Kerala and India with prompt, friendly WhatsApp customer service.
              </p>
            </div>
          </div>
        </div>

        {/* Pillars */}
        <div style={{ marginTop: "clamp(28px, 3.5vw, 40px)" }}>
          <div className="eyebrow">Core Values</div>
          <h2>What We Stand For</h2>

          <div className="grid">
            <div className="card">
              <h3>Pure Softness</h3>
              <p>Hypoallergenic and dermatologist-friendly virgin fibers gentle enough for all skin types.</p>
            </div>
            <div className="card">
              <h3>Design That Matters</h3>
              <p>Everyday essentials shouldn&apos;t look like hospital supplies. We design for modern aesthetics.</p>
            </div>
            <div className="card">
              <h3>Honest Pricing</h3>
              <p>Premium experience shouldn&apos;t demand an inflated price tag. Starting at ₹99.</p>
            </div>
            <div className="card">
              <h3>Kerala Roots</h3>
              <p>Committed to local employment, sustainable development, and customer satisfaction.</p>
            </div>
          </div>
        </div>

        <div style={{ marginTop: "40px" }}>
          <Link href="/products" className="btn">
            Explore Our Packs
          </Link>
          <Link href="/contact" className="btn alt" style={{ marginLeft: "12px" }}>
            Get In Touch
          </Link>
        </div>
      </section>
    </>
  );
}
