import React from "react";
import Link from "next/link";
import { siteConfig } from "@/lib/siteConfig";

export const metadata = {
  title: "Privacy Policy - Neem Face Tissue",
  description:
    "Privacy terms and data protection policies for Neem Face Tissue customers and order inquiries.",
  alternates: {
    canonical: `${siteConfig.url}/privacy`,
  },
};

export default function PrivacyPage() {
  return (
    <article style={{ maxWidth: "860px", margin: "0 auto", padding: "20px 0" }}>
      <nav
        aria-label="Breadcrumb"
        style={{ marginBottom: "20px", fontSize: "0.85rem", color: "var(--mut)" }}
      >
        <Link href="/" style={{ textDecoration: "none", color: "var(--coffee)" }}>
          Home
        </Link>
        <span style={{ margin: "0 8px" }}>/</span>
        <span style={{ color: "var(--cream)" }}>Privacy Policy</span>
      </nav>

      <div className="eyebrow">Data Protection</div>
      <h1 style={{ fontSize: "clamp(2.2rem, 5vw, 3rem)", marginBottom: "16px" }}>
        Privacy Policy
      </h1>
      <p style={{ fontSize: "0.95rem", color: "var(--mut)", marginBottom: "28px" }}>
        Last updated: November 2026
      </p>

      <div style={{ display: "grid", gap: "20px", lineHeight: "1.7", color: "var(--cream)" }}>
        <section className="card">
          <h2 style={{ fontSize: "1.25rem", color: "var(--coffee)", margin: "0 0 8px" }}>
            1. Information We Collect
          </h2>
          <p style={{ margin: 0, color: "var(--mut)" }}>
            When you place an order or contact us via WhatsApp, we collect the details you provide:
            your Name, Mobile number, Address, Post Office, PIN code, District, and State.
            We use these strictly to dispatch your orders and provide shipment tracking updates.
          </p>
        </section>

        <section className="card">
          <h2 style={{ fontSize: "1.25rem", color: "var(--coffee)", margin: "0 0 8px" }}>
            2. How Your Data Is Handled
          </h2>
          <p style={{ margin: 0, color: "var(--mut)" }}>
            We do not sell, rent, or trade your personal information to third parties.
            Your delivery address is shared only with our trusted shipping partners (India Post and express logistics couriers) solely for parcel delivery.
          </p>
        </section>

        <section className="card">
          <h2 style={{ fontSize: "1.25rem", color: "var(--coffee)", margin: "0 0 8px" }}>
            3. Local Storage on Your Device
          </h2>
          <p style={{ margin: 0, color: "var(--mut)" }}>
            Our website uses browser `localStorage` to save your delivery profile on your device so you do not have to re-enter your address every time you order. This information remains solely on your device.
          </p>
        </section>

        <section className="card">
          <h2 style={{ fontSize: "1.25rem", color: "var(--coffee)", margin: "0 0 8px" }}>
            4. Contact Us
          </h2>
          <p style={{ margin: 0, color: "var(--mut)" }}>
            If you have questions about your privacy or wish to update your details, contact us anytime at{" "}
            <strong>contact@neemtissue.com</strong> or via WhatsApp at <strong>+{siteConfig.phone}</strong>.
          </p>
        </section>
      </div>
    </article>
  );
}

