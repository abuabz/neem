import React from "react";
import Link from "next/link";
import { siteConfig } from "@/lib/siteConfig";
import JsonLd from "@/components/JsonLd";

export const metadata = {
  title: "Shipping & Return Policy - Neem Face Tissue",
  description:
    "Learn about Neem's delivery timelines across Kerala and India, free delivery offers on combos, packaging guarantees, and replacement terms.",
  alternates: {
    canonical: `${siteConfig.url}/shipping-policy`,
  },
};

export default function ShippingPolicyPage() {
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
        name: "Shipping Policy",
        item: `${siteConfig.url}/shipping-policy`,
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
        <span style={{ color: "var(--cream)" }}>Shipping &amp; Returns</span>
      </nav>

      <article style={{ maxWidth: "860px", margin: "0 auto" }}>
        <div className="eyebrow">Customer Protection &amp; Delivery</div>
        <h1 style={{ fontSize: "clamp(2.2rem, 5vw, 3.2rem)", marginBottom: "16px" }}>
          Shipping &amp; Return Policy
        </h1>
        <p style={{ fontSize: "1.05rem", lineHeight: "1.7", marginBottom: "32px" }}>
          At Neem, we take immense pride in crafting premium cylinder face tissues in Vengara, Kerala.
          We ensure every bottle is securely packed in protective outer cartons so it arrives in pristine condition.
        </p>

        <div style={{ display: "grid", gap: "24px" }}>
          <section className="card">
            <h2 style={{ fontSize: "1.3rem", color: "var(--coffee)", margin: "0 0 10px" }}>
              1. Delivery Timelines
            </h2>
            <p style={{ margin: "0 0 8px" }}>
              • <strong>Kerala Deliveries:</strong> Typically delivered within <strong>2 to 5 Working days</strong>.
            </p>
            <p style={{ margin: "0 0 8px" }}>
              • <strong>Rest of South India (Karnataka, Tamil Nadu, Andhra Pradesh, Telangana):</strong> <strong>3 to 5 business days</strong>.
            </p>
            <p style={{ margin: 0 }}>
              • <strong>All Other Indian States:</strong> <strong>5 to 7 business days</strong> via express postal / courier services.
            </p>
          </section>

          <section className="card">
            <h2 style={{ fontSize: "1.3rem", color: "var(--coffee)", margin: "0 0 10px" }}>
              2. Shipping Charges
            </h2>
            <p style={{ margin: "0 0 8px" }}>
              • <strong>4 Bottle Combo (₹389):</strong> <strong>100% Free Delivery</strong> anywhere across Kerala. Zero delivery fee.
            </p>
            <p style={{ margin: 0 }}>
              • <strong>Single, Duo &amp; Refill Packs:</strong> Flat delivery charge of just <strong>₹30</strong> per order.
            </p>
          </section>

          <section className="card">
            <h2 style={{ fontSize: "1.3rem", color: "var(--coffee)", margin: "0 0 10px" }}>
              3. Damaged in Transit &amp; Replacement Guarantee
            </h2>
            <p style={{ margin: "0 0 8px" }}>
              If your package or bottle arrives crushed, defective, or damaged during courier transit, we will replace it immediately at zero additional cost to you.
            </p>
            <p style={{ margin: 0 }}>
              Simply send a photo or quick video of the damaged package to our WhatsApp support at{" "}
              <strong>+{siteConfig.phone}</strong> within 48 hours of delivery.
            </p>
          </section>

          <section className="card">
            <h2 style={{ fontSize: "1.3rem", color: "var(--coffee)", margin: "0 0 10px" }}>
              4. Order Tracking &amp; Inquiries
            </h2>
            <p style={{ margin: 0 }}>
              Once dispatched, we share your consignment tracking link directly on WhatsApp. You can reply to our WhatsApp thread anytime to check the real-time status of your parcel.
            </p>
          </section>
        </div>

        <div style={{ marginTop: "40px", textAlign: "center" }}>
          <Link href="/products" className="btn">
            Explore Neem Packs &rarr;
          </Link>
        </div>
      </article>
    </>
  );
}
