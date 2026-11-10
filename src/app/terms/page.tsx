import React from "react";
import Link from "next/link";
import { siteConfig } from "@/lib/siteConfig";
import JsonLd from "@/components/JsonLd";

export const metadata = {
  title: "Terms of Service - Neem Face Tissue",
  description:
    "Terms of service, ordering policies, product authenticity guarantees, and user agreements for Neem Face Tissue.",
  alternates: {
    canonical: `${siteConfig.url}/terms`,
  },
};

export default function TermsPage() {
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
        name: "Terms of Service",
        item: `${siteConfig.url}/terms`,
      },
    ],
  };

  return (
    <>
      <JsonLd data={breadcrumbSchema} />

      <article style={{ maxWidth: "860px", margin: "0 auto", padding: "20px 0" }}>
        <nav
          aria-label="Breadcrumb"
          style={{ marginBottom: "20px", fontSize: "0.85rem", color: "var(--mut)" }}
        >
          <Link href="/" style={{ textDecoration: "none", color: "var(--coffee)" }}>
            Home
          </Link>
          <span style={{ margin: "0 8px" }}>/</span>
          <span style={{ color: "var(--cream)" }}>Terms of Service</span>
        </nav>

        <div className="eyebrow">Customer Agreement</div>
        <h1 style={{ fontSize: "clamp(2.2rem, 5vw, 3rem)", marginBottom: "16px" }}>
          Terms of Service
        </h1>
        <p style={{ fontSize: "0.95rem", color: "var(--mut)", marginBottom: "28px" }}>
          Effective Date: November 2026
        </p>

        <div style={{ display: "grid", gap: "20px", lineHeight: "1.7", color: "var(--cream)" }}>
          <section className="card">
            <h2 style={{ fontSize: "1.25rem", color: "var(--coffee)", margin: "0 0 8px" }}>
              1. Orders &amp; Payments
            </h2>
            <p style={{ margin: 0, color: "var(--mut)" }}>
              All orders are confirmed via direct communication on our official WhatsApp business channel (+{siteConfig.phone}).
              Payments can be completed via Google Pay, PhonePe, UPI QR code, or bank transfer prior to order dispatch.
              A flat ₹30 delivery fee is applied across orders unless promotional offers explicitly state otherwise.
            </p>
          </section>

          <section className="card">
            <h2 style={{ fontSize: "1.25rem", color: "var(--coffee)", margin: "0 0 8px" }}>
              2. Product Quality Guarantee
            </h2>
            <p style={{ margin: 0, color: "var(--mut)" }}>
              Neem guarantees that all face tissue bottles are crafted using 100% virgin pulp 2-ply soft paper and manufactured according to stringent hygiene standards.
              In the unlikely event of courier transit damage or packaging defect, we provide a 100% free replacement upon receiving verification photos within 48 hours.
            </p>
          </section>

          <section className="card">
            <h2 style={{ fontSize: "1.25rem", color: "var(--coffee)", margin: "0 0 8px" }}>
              3. Intellectual Property
            </h2>
            <p style={{ margin: 0, color: "var(--mut)" }}>
              All brand assets, cylinder design elements, logos, artwork, photographs, and editorial guides on this website are the proprietary intellectual property of Neem Tissue, Vengara, Kerala. Unauthorized reproduction is strictly prohibited.
            </p>
          </section>

          <section className="card">
            <h2 style={{ fontSize: "1.25rem", color: "var(--coffee)", margin: "0 0 8px" }}>
              4. Governing Law &amp; Jurisdiction
            </h2>
            <p style={{ margin: 0, color: "var(--mut)" }}>
              These terms are governed by the laws of India. Any legal disputes or claims arising shall be subject to the exclusive jurisdiction of the competent courts in Malappuram District, Kerala.
            </p>
          </section>
        </div>
      </article>
    </>
  );
}

