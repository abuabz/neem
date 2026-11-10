import React from "react";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { siteConfig } from "@/lib/siteConfig";

export const metadata = {
  title: "Why Choose Neem - Premium Car & Desk Face Tissue Bottles",
  description:
    "Discover why Neem tissue bottles outperform traditional tissue boxes. Spill-proof cylinder design, car cup holder fit, ultra-soft 2-ply luxury, and refillable bottles.",
  alternates: {
    canonical: `${siteConfig.url}/why-neem`,
  },
  openGraph: {
    title: "Why Neem - Redefining Everyday Face Tissues",
    description:
      "Engineered for cars, homes, and offices. Explore the benefits of Neem's cylinder face tissue bottles.",
    url: `${siteConfig.url}/why-neem`,
  },
};

export default function WhyNeemPage() {
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
        name: "Why Neem",
        item: `${siteConfig.url}/why-neem`,
      },
    ],
  };

  return (
    <>
      <JsonLd data={breadcrumbSchema} />

      <nav
        aria-label="Breadcrumb"
        style={{ marginBottom: "20px", fontSize: "0.85rem", color: "var(--mut)" }}
      >
        <Link href="/" style={{ textDecoration: "none", color: "var(--coffee)" }}>
          Home
        </Link>
        <span style={{ margin: "0 8px" }}>/</span>
        <span style={{ color: "var(--cream)" }}>Why Neem</span>
      </nav>

      <section aria-labelledby="why-page-title">
        <div className="eyebrow">The Neem Difference</div>
        <h1 id="why-page-title" style={{ fontSize: "clamp(2.4rem, 6vw, 4.2rem)" }}>
          Small things,
          <br />
          <span>done with care.</span>
        </h1>
        <p>
          We believe everyday essentials should feel good to use and look good while you do.
          Traditional facial tissue boxes crush under car seats, get soggy from spills, and clutter your spaces.
          Here is how Neem re-engineers your everyday tissue experience.
        </p>

        {/* Feature Grid */}
        <div className="grid" style={{ margin: "24px 0" }}>
          <div className="card">
            <h3 style={{ fontSize: "1.25rem", marginBottom: "8px" }}>
              1. Built for Automobiles
            </h3>
            <p>
              Fits effortlessly into any vehicle cup holder, door console, or armrest compartment.
              No sliding around on the dashboard or getting crushed under bags.
            </p>
          </div>

          <div className="card">
            <h3 style={{ fontSize: "1.25rem", marginBottom: "8px" }}>
              2. Ultra-Gentle Facial Care
            </h3>
            <p>
              Crafted from 100% virgin pulp with 2-ply softness. Gentle on facial skin,
              lint-free, and absorbent enough for sweat, touch-ups, and makeup.
            </p>
          </div>

          <div className="card">
            <h3 style={{ fontSize: "1.25rem", marginBottom: "8px" }}>
              3. Modern Aesthetics
            </h3>
            <p>
              Our signature copper-gold leaf motif on deep matte black looks like a designer
              interior accessory on dining tables, executive desks, and car consoles.
            </p>
          </div>

          <div className="card">
            <h3 style={{ fontSize: "1.25rem", marginBottom: "8px" }}>
              4. Reusable &amp; Refillable
            </h3>
            <p>
              Don&apos;t throw away the bottle! Our dedicated refill packs allow you to reuse the container,
              reducing household plastic and packaging waste.
            </p>
          </div>
        </div>

        {/* Comparison Table */}
        <div style={{ marginTop: "clamp(28px, 3.5vw, 40px)" }}>
          <div className="eyebrow">Direct Comparison</div>
          <h2>Neem vs Traditional Box Tissues</h2>

          <div
            style={{
              overflowX: "auto",
              marginTop: "20px",
              border: "1px solid rgba(200,149,89,0.25)",
              borderRadius: "14px",
              background: "rgba(0,0,0,0.25)",
            }}
          >
            <table
              style={{
                width: "100%",
                borderCollapse: "collapse",
                textAlign: "left",
                fontSize: "0.95rem",
              }}
            >
              <thead>
                <tr style={{ borderBottom: "1px solid rgba(200,149,89,0.3)", color: "var(--coffee)" }}>
                  <th style={{ padding: "14px 18px" }}>Feature</th>
                  <th style={{ padding: "14px 18px" }}>Neem Cylinder Bottle</th>
                  <th style={{ padding: "14px 18px", opacity: 0.7 }}>Traditional Paper Box</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: "1px solid rgba(200,149,89,0.15)" }}>
                  <td style={{ padding: "14px 18px", fontWeight: 600 }}>Car Cup Holder Fit</td>
                  <td style={{ padding: "14px 18px", color: "var(--cream)" }}>
                    ✅ Perfectly fits 99% of vehicle cup holders
                  </td>
                  <td style={{ padding: "14px 18px", color: "var(--mut)" }}>
                    ❌ Too bulky, must sit on seats
                  </td>
                </tr>
                <tr style={{ borderBottom: "1px solid rgba(200,149,89,0.15)" }}>
                  <td style={{ padding: "14px 18px", fontWeight: 600 }}>Spill &amp; Moisture Resistance</td>
                  <td style={{ padding: "14px 18px", color: "var(--cream)" }}>
                    ✅ Rigid cylinder protects contents
                  </td>
                  <td style={{ padding: "14px 18px", color: "var(--mut)" }}>
                    ❌ Cardboard gets soggy and ruined
                  </td>
                </tr>
                <tr style={{ borderBottom: "1px solid rgba(200,149,89,0.15)" }}>
                  <td style={{ padding: "14px 18px", fontWeight: 600 }}>Crush Proof</td>
                  <td style={{ padding: "14px 18px", color: "var(--cream)" }}>
                    ✅ Retains shape in bags and door slots
                  </td>
                  <td style={{ padding: "14px 18px", color: "var(--mut)" }}>
                    ❌ Crushes under accidental weight
                  </td>
                </tr>
                <tr style={{ borderBottom: "1px solid rgba(200,149,89,0.15)" }}>
                  <td style={{ padding: "14px 18px", fontWeight: 600 }}>Visual Appeal</td>
                  <td style={{ padding: "14px 18px", color: "var(--cream)" }}>
                    ✅ Luxury black &amp; copper leaf artwork
                  </td>
                  <td style={{ padding: "14px 18px", color: "var(--mut)" }}>
                    ❌ Commercial generic branding
                  </td>
                </tr>
                <tr>
                  <td style={{ padding: "14px 18px", fontWeight: 600 }}>Starting Price</td>
                  <td style={{ padding: "14px 18px", color: "var(--coffee)", fontWeight: 700 }}>
                    ₹99 per bottle
                  </td>
                  <td style={{ padding: "14px 18px", color: "var(--mut)" }}>
                    ₹80 - ₹150
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* CTA */}
        <div
          style={{
            marginTop: "clamp(28px, 3.5vw, 40px)",
            textAlign: "center",
            padding: "36px 20px",
            background: "rgba(255,255,255,0.03)",
            borderRadius: "16px",
            border: "1px solid rgba(200,149,89,0.3)",
          }}
        >
          <h2 style={{ fontSize: "2rem" }}>Ready to upgrade your daily tissue?</h2>
          <p style={{ margin: "8px auto 20px" }}>
            Experience the soft touch of Neem. Free delivery on our 4-bottle combo (₹389)!
          </p>
          <div className="row" style={{ justifyContent: "center" }}>
            <Link href="/products" className="btn">
              Explore Products
            </Link>
            <Link href="/contact" className="btn alt">
              Contact Sales
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
