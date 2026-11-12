import React from "react";
import Link from "next/link";
import { siteConfig } from "@/lib/siteConfig";
import JsonLd from "@/components/JsonLd";
import CopyMobileButton from "@/components/CopyMobileButton";

export const metadata = {
  title: "Wholesale & Corporate Orders - Car Studios, Hotels & Dealerships",
  description:
    "Partner with Neem for bulk wholesale orders, customized corporate branding, car detailing gift packs, and luxury hotel bathroom amenities. Direct supply from Kerala.",
  alternates: {
    canonical: `${siteConfig.url}/wholesale`,
  },
  openGraph: {
    title: "Neem Wholesale & Corporate B2B Supply",
    description:
      "Bulk cylinder face tissue bottles for car dealerships, detailing studios, and luxury hospitality. Crafted in Vengara, Kerala.",
    url: `${siteConfig.url}/wholesale`,
  },
};

export default function WholesalePage() {
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
        name: "Wholesale",
        item: `${siteConfig.url}/wholesale`,
      },
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Neem Wholesale & Corporate Face Tissue Supply",
    provider: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    serviceType: "B2B Personal Care Supply",
    areaServed: "India",
    description:
      "Bulk cylinder face tissue bottles for car detailing studios, automobile showrooms, luxury hotels, and corporate gifting.",
  };

  const wholesaleText = encodeURIComponent(
    "Hi Neem Team, I would like to inquire about wholesale/bulk pricing for our business. Please share your catalog and bulk rates."
  );
  const cleanPhone = siteConfig.phone.replace(/[^0-9]/g, "");

  return (
    <>
      <JsonLd data={[breadcrumbSchema, serviceSchema]} />

      <nav
        aria-label="Breadcrumb"
        style={{ marginBottom: "20px", fontSize: "0.85rem", color: "var(--mut)" }}
      >
        <Link href="/" style={{ textDecoration: "none", color: "var(--coffee)" }}>
          Home
        </Link>
        <span style={{ margin: "0 8px" }}>/</span>
        <span style={{ color: "var(--cream)" }}>Wholesale &amp; B2B</span>
      </nav>

      <section aria-labelledby="wholesale-title">
        <div className="eyebrow">B2B &amp; Corporate Partnerships</div>
        <h1 id="wholesale-title" style={{ fontSize: "clamp(2.4rem, 6vw, 4rem)" }}>
          Elevate Your Customer Experience with Neem
        </h1>
        <p style={{ fontSize: "1.08rem", lineHeight: "1.7", maxWidth: "75ch" }}>
          Neem partners with forward-thinking automotive businesses, luxury resorts, and corporate offices across India.
          Our designer black and copper cylinder bottles turn an ordinary commodity into a memorable branding touchpoint.
        </p>

        {/* Sectors We Serve */}
        <div className="grid" style={{ margin: "36px 0" }}>
          <div className="card">
            <h3 style={{ fontSize: "1.2rem", color: "var(--coffee)" }}>
              🚗 Automobile Dealerships &amp; Car Delivery Kits
            </h3>
            <p>
              Deliver new cars to your customers with a Neem cylinder resting in the cup holder.
              Leaves an unforgettable impression of luxury and attention to detail.
            </p>
          </div>

          <div className="card">
            <h3 style={{ fontSize: "1.2rem", color: "var(--coffee)" }}>
              ✨ Car Detailing &amp; Ceramic Coating Studios
            </h3>
            <p>
              The ultimate final handover gift. Detailing clients care deeply about car interior cleanliness.
              Neem bottles keep their fresh cabin spotless and stylish.
            </p>
          </div>

          <div className="card">
            <h3 style={{ fontSize: "1.2rem", color: "var(--coffee)" }}>
              🏨 Boutique Hotels &amp; Luxury Homestays
            </h3>
            <p>
              Replace commercial generic paper boxes with sleek cylinder bottles on vanity mirrors,
              study desks, and guest transport vehicles across Kerala and South India.
            </p>
          </div>

          <div className="card">
            <h3 style={{ fontSize: "1.2rem", color: "var(--coffee)" }}>
              🎁 Corporate Gifting &amp; Executive Kits
            </h3>
            <p>
              Useful, eco-conscious, and refined. Custom branded sleeve options available for large corporate gifting runs and executive conferences.
            </p>
          </div>
        </div>

        {/* Wholesale Benefits */}
        <div
          style={{
            padding: "32px 28px",
            borderRadius: "16px",
            border: "1px solid rgba(200, 149, 89, 0.35)",
            background: "linear-gradient(135deg, rgba(200, 149, 89, 0.16), rgba(18, 12, 8, 0.8))",
            margin: "40px 0",
          }}
        >
          <div className="eyebrow">Wholesale Advantages</div>
          <h2 style={{ fontSize: "2rem", margin: "0 0 16px" }}>Why Partner with Us?</h2>
          <ul style={{ listStyle: "none", padding: 0, margin: "0 0 24px" }}>
            <li style={{ padding: "8px 0 8px 24px", position: "relative", color: "var(--cream)" }}>
              <span style={{ position: "absolute", left: 0, color: "var(--coffee)", fontWeight: 700 }}>✓</span>
              Tiered volume discounts starting from 50+ units
            </li>
            <li style={{ padding: "8px 0 8px 24px", position: "relative", color: "var(--cream)" }}>
              <span style={{ position: "absolute", left: 0, color: "var(--coffee)", fontWeight: 700 }}>✓</span>
              Reliable delivery and freight handling across Kerala and all Indian states
            </li>
            <li style={{ padding: "8px 0 8px 24px", position: "relative", color: "var(--cream)" }}>
              <span style={{ position: "absolute", left: 0, color: "var(--coffee)", fontWeight: 700 }}>✓</span>
              Recurring refill supply contracts for zero-hassle replenishment
            </li>
            <li style={{ padding: "8px 0 8px 24px", position: "relative", color: "var(--cream)" }}>
              <span style={{ position: "absolute", left: 0, color: "var(--coffee)", fontWeight: 700 }}>✓</span>
              GST invoices and priority dispatch
            </li>
          </ul>

          <div style={{ display: "flex", alignItems: "center", gap: "14px", flexWrap: "wrap", marginTop: "16px" }}>
            <a
              href={`https://wa.me/${cleanPhone}?text=${wholesaleText}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
              style={{ fontSize: "1.05rem", padding: "14px 28px" }}
            >
              Inquire for Wholesale Rates on WhatsApp &rarr;
            </a>
            <CopyMobileButton phone={siteConfig.displayPhone} layout="badge" size="md" />
          </div>
        </div>
      </section>
    </>
  );
}

