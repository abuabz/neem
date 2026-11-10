import React from "react";
import Link from "next/link";
import WhatsAppContactForm from "@/components/WhatsAppContactForm";
import JsonLd from "@/components/JsonLd";
import CopyMobileButton from "@/components/CopyMobileButton";
import { siteConfig } from "@/lib/siteConfig";

export const metadata = {
  title: "Contact & Wholesale Inquiries",
  description:
    "Get in touch with Neem for retail orders, corporate gifting, wholesale distribution, or inquiries. Fast response on WhatsApp. Based in Vengara, Kerala.",
  alternates: {
    canonical: `${siteConfig.url}/contact`,
  },
  openGraph: {
    title: "Contact Neem - Orders & Inquiries",
    description:
      "Order Neem face tissue bottles via WhatsApp or get in touch for bulk orders. Based in Vengara, Kerala.",
    url: `${siteConfig.url}/contact`,
  },
};

export default function ContactPage() {
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
        name: "Contact",
        item: `${siteConfig.url}/contact`,
      },
    ],
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Neem Face Tissue",
    image: `${siteConfig.url}/images/logo.png`,
    telephone: `+${siteConfig.phone}`,
    url: siteConfig.url,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Vengara Town",
      addressLocality: siteConfig.location.city,
      addressRegion: siteConfig.location.state,
      addressCountry: siteConfig.location.country,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "09:00",
        closes: "20:00",
      },
    ],
  };

  return (
    <>
      <JsonLd data={[breadcrumbSchema, localBusinessSchema]} />

      <nav
        aria-label="Breadcrumb"
        style={{ marginBottom: "20px", fontSize: "0.85rem", color: "var(--mut)" }}
      >
        <Link href="/" style={{ textDecoration: "none", color: "var(--coffee)" }}>
          Home
        </Link>
        <span style={{ margin: "0 8px" }}>/</span>
        <span style={{ color: "var(--cream)" }}>Contact</span>
      </nav>

      <section aria-labelledby="contact-heading">
        <div className="eyebrow">Get in touch</div>
        <h1 id="contact-heading" style={{ fontSize: "clamp(2.4rem, 6vw, 4rem)" }}>
          Order or ask us anything
        </h1>
        <p>
          Need a quick pack delivered to your door? Interested in stocking Neem in your store, cafe,
          or hotel? Reach out to us directly through WhatsApp or using the form below.
        </p>

        <div className="two" style={{ marginTop: "32px" }}>
          <div>
            <h2 style={{ fontSize: "1.5rem", marginBottom: "16px", color: "var(--coffee)" }}>
              Send a Direct Message
            </h2>
            <WhatsAppContactForm />
          </div>

          <div>
            <div className="card" style={{ marginBottom: "16px" }}>
              <h3>WhatsApp Direct</h3>
              <p>
                Chat with our team for instant assistance, order tracking, and custom requirements:
              </p>
              <div style={{ margin: "12px 0 14px" }}>
                <CopyMobileButton phone={siteConfig.displayPhone} layout="badge" size="md" />
              </div>
              <a
                href={`https://wa.me/${siteConfig.phone.replace(/[^0-9]/g, "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn"
                style={{ display: "inline-flex" }}
              >
                Chat on WhatsApp &rarr;
              </a>
            </div>

            <div className="card" style={{ marginBottom: "16px" }}>
              <h3>Official Instagram</h3>
              <p>
                Follow our journey, see real customer cars and desks, and tag us:
              </p>
              <p style={{ margin: "8px 0 0" }}>
                <a
                  href={siteConfig.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "var(--coffee)", fontWeight: 600 }}
                >
                  {siteConfig.instagramHandle}
                </a>
              </p>
            </div>

            <div className="card">
              <h3>Headquarters &amp; Distribution</h3>
              <p style={{ margin: 0 }}>
                <strong>Neem Tissue</strong>
                <br />
                {siteConfig.location.city}, Malappuram District,
                <br />
                {siteConfig.location.state}, {siteConfig.location.country}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Wholesale Banner */}
      <section
        style={{
          marginTop: "clamp(30px, 4vw, 44px)",
          padding: "32px 24px",
          borderRadius: "16px",
          border: "1px solid rgba(200,149,89,0.35)",
          background: "linear-gradient(135deg, rgba(200,149,89,0.15), rgba(18,12,8,0.7))",
        }}
      >
        <div className="eyebrow">Wholesale &amp; Corporate Gifting</div>
        <h2 style={{ fontSize: "2rem" }}>Stock Neem in Your Establishment</h2>
        <p style={{ maxWidth: "70ch" }}>
          We partner with premium car detailing studios, automobile showrooms, boutique hotels, cafes,
          and corporate offices looking to elevate their customer touchpoints. Customized branding and bulk discount pricing are available upon request.
        </p>
        <a
          href={`https://wa.me/${siteConfig.phone.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(
            "Hi Neem team, I am interested in wholesale/bulk order pricing."
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="btn"
          style={{ marginTop: "12px" }}
        >
          Inquire About Wholesale
        </a>
      </section>
    </>
  );
}
