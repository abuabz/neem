import React from "react";
import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import WhatsAppContactForm from "@/components/WhatsAppContactForm";
import FaqAccordion from "@/components/FaqAccordion";
import JsonLd from "@/components/JsonLd";
import CopyMobileButton from "@/components/CopyMobileButton";
import HomeHero from "@/components/HomeHero";
import { PRODUCTS, FAQS, TESTIMONIALS } from "@/data/products";
import { siteConfig } from "@/lib/siteConfig";

export const metadata = {
  title: {
    absolute: "Neem | Premium Face Tissue Bottles - Just ₹99 | Softness That Cares",
  },
  description:
    "Neem premium face tissue: ultra soft, strong and compact, in a stylish bottle you can carry anywhere. Designed for car cup holders, homes, and offices. Based in Vengara, Kerala.",
  alternates: {
    canonical: siteConfig.url,
  },
  openGraph: {
    title: "Neem | Premium Face Tissue - Just ₹99",
    description:
      "Ultra-soft face tissue bottles designed for vehicle cup holders and modern desks. Nature that protects. Crafted in Kerala.",
    url: siteConfig.url,
    images: [
      {
        url: `${siteConfig.url}/images/hero-bg.jpg`,
        width: 768,
        height: 1024,
        alt: "Neem Premium Face Tissue Bottle in Nature - Just ₹99",
      },
    ],
  },
};

export default function HomePage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  const productListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: PRODUCTS.map((product, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Product",
        name: product.name,
        image: `${siteConfig.url}${product.image}`,
        description: product.shortDesc,
        sku: product.sku,
        offers: {
          "@type": "Offer",
          price: product.price,
          priceCurrency: product.currency,
          availability: "https://schema.org/InStock",
          url: `${siteConfig.url}/products/${product.slug}`,
        },
      },
    })),
  };

  return (
    <>
      <JsonLd data={[faqSchema, productListSchema]} />

      {/* Hero2 Cinematic Section + Marquee Ticker + Feature Highlight + Free Delivery Band */}
      <HomeHero />

      {/* PRODUCTS Section from neem.html */}
      <section id="products" style={{ marginTop: "clamp(36px, 5vw, 56px)" }} aria-labelledby="products-title">
        <div className="eyebrow">Neem premium face tissue</div>
        <h2 id="products-title">Choose your pack</h2>
        <p>
          Premium quality, stylish and compact. 60 pulls, 120 sheets per bottle.
          Free delivery on the 4 bottle combo (₹389). Flat ₹30 delivery on other packs.
        </p>
        <div className="pl">
          {PRODUCTS.map((product, idx) => (
            <ProductCard key={product.id} product={product} priority={idx < 2} />
          ))}
        </div>
      </section>

      {/* WHY Section from neem.html */}
      <section id="why" style={{ marginTop: "clamp(36px, 5vw, 56px)" }} aria-labelledby="why-title">
        <div className="eyebrow">Why choose Neem</div>
        <h2 id="why-title">
          Small things,<br />
          done with care
        </h2>
        <p>
          We believe everyday essentials should feel good to use and look good while you do.
          That is the idea behind every Neem bottle.
        </p>
        <div className="grid">
          <div className="card">
            <h3>Soft that lasts</h3>
            <p>Ultra soft sheets that stay strong when you need them.</p>
          </div>
          <div className="card">
            <h3>Designed to be seen</h3>
            <p>A black and copper leaf design that suits homes, cars, offices and cafes.</p>
          </div>
          <div className="card">
            <h3>Made to travel</h3>
            <p>Compact enough for any bag, car door or desk drawer.</p>
          </div>
          <div className="card">
            <h3>Fair price</h3>
            <p>Premium feel at just ₹99 per bottle.</p>
          </div>
        </div>
        <p style={{ marginTop: "20px" }}>
          <Link className="btn alt" href="/why-neem">
            Explore why Neem is different &rarr;
          </Link>
        </p>
      </section>

      {/* ABOUT Section from neem.html */}
      <section id="about" style={{ marginTop: "clamp(36px, 5vw, 56px)" }} aria-labelledby="story-title">
        <div className="eyebrow">Our story</div>
        <h2 id="story-title">A touch by nature</h2>
        <div className="two">
          <div>
            <p>
              Neem is a premium face tissue brand from Kerala, India. Our name and our leaf mark come from the neem tree,
              which has long been part of everyday life here.
            </p>
            <p>
              We set out to make a tissue that feels soft, looks premium and fits easily into daily routines, without a
              premium price tag.
            </p>
            <Link className="btn alt" href="/about" style={{ marginTop: "12px", display: "inline-flex" }}>
              Learn our story &rarr;
            </Link>
          </div>
          <div>
            <div className="card">
              <h3>Our promise</h3>
              <p>
                Softness that cares, nature that protects. Every bottle is made to feel good in your hands and on your
                skin.
              </p>
            </div>
            <p style={{ marginTop: "16px", color: "var(--coffee)", fontWeight: 600 }}>
              📍 Based in Vengara, Kerala.
            </p>
          </div>
        </div>
      </section>

      {/* REAL EXPERIENCES / TESTIMONIALS */}
      <section style={{ marginTop: "clamp(36px, 5vw, 56px)" }} aria-labelledby="reviews-title">
        <div className="eyebrow">Real Experiences</div>
        <h2 id="reviews-title">Loved in Cars &amp; Workstations</h2>
        <p>See why thousands across Kerala and India choose Neem for their daily journeys.</p>
        <div className="grid">
          {TESTIMONIALS.map((item, idx) => (
            <div key={idx} className="card">
              <div style={{ color: "var(--coffee)", fontSize: "1.1rem", marginBottom: "8px" }}>
                {"★".repeat(item.rating)}
              </div>
              <p style={{ fontStyle: "italic", marginBottom: "12px", color: "var(--cream)" }}>
                &ldquo;{item.review}&rdquo;
              </p>
              <div style={{ fontSize: "0.85rem", color: "var(--coffee)", fontWeight: 600 }}>
                {item.name}
              </div>
              <div style={{ fontSize: "0.78rem", color: "var(--mut)" }}>{item.location}</div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQS */}
      <section style={{ marginTop: "clamp(36px, 5vw, 56px)" }} aria-labelledby="faq-title">
        <div className="eyebrow">Got questions?</div>
        <h2 id="faq-title">Frequently Asked Questions</h2>
        <p>Everything you need to know about Neem face tissue bottles, refills, and delivery.</p>
        <FaqAccordion />
      </section>

      {/* CONTACT Section from neem.html */}
      <section id="contact" style={{ marginTop: "clamp(36px, 5vw, 56px)" }} aria-labelledby="contact-title">
        <div className="eyebrow">Get in touch</div>
        <h2 id="contact-title">Order or ask us anything</h2>
        <div className="two">
          <WhatsAppContactForm />
          <div>

            <div className="card" style={{ marginBottom: "14px" }}>
              <h3>Instagram</h3>
              <p style={{ margin: "6px 0 0" }}>
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
              <h3>Location</h3>
              <p style={{ margin: 0 }}>
                {siteConfig.location.city}, {siteConfig.location.state},{" "}
                {siteConfig.location.country}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
