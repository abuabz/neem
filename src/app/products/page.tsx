import React from "react";
import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import JsonLd from "@/components/JsonLd";
import { PRODUCTS } from "@/data/products";
import { siteConfig } from "@/lib/siteConfig";

export const metadata = {
  title: "Premium Face Tissue Bottles Collection & Combos",
  description:
    "Explore Neem's face tissue bottle collection. Single bottle, Duo combo, Bottle + Refill, and 4 Bottle family pack with flat ₹30 delivery. Fits car cup holders.",
  alternates: {
    canonical: `${siteConfig.url}/products`,
  },
  openGraph: {
    title: "Neem Face Tissue Bottles Collection & Combos",
    description:
      "Explore Neem's face tissue bottle collection. Ultra-soft 2-ply facial tissues in compact cylinder bottles. Flat ₹30 delivery on all orders.",
    url: `${siteConfig.url}/products`,
  },
};

export default function ProductsPage() {
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
        name: "Products",
        item: `${siteConfig.url}/products`,
      },
    ],
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
        description: product.fullDesc,
        image: `${siteConfig.url}${product.image}`,
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
      <JsonLd data={[breadcrumbSchema, productListSchema]} />

      <nav aria-label="Breadcrumb" style={{ marginBottom: "20px", fontSize: "0.85rem", color: "var(--mut)" }}>
        <Link href="/" style={{ textDecoration: "none", color: "var(--coffee)" }}>
          Home
        </Link>
        <span style={{ margin: "0 8px" }}>/</span>
        <span style={{ color: "var(--cream)" }}>Products</span>
      </nav>

      <section aria-labelledby="catalog-title">
        <div className="eyebrow">Neem premium face tissue</div>
        <h1 id="catalog-title" style={{ fontSize: "clamp(2.4rem, 6vw, 4rem)" }}>
          Choose your pack
        </h1>
        <p>
          Premium quality, stylish and compact. 60 pulls, 120 sheets of 2-ply ultra-soft tissue per bottle.
          Free delivery on the 4 bottle combo. Flat ₹30 delivery on other packs.
        </p>

        {/* Highlight Banner */}
        <div
          style={{
            margin: "18px 0 24px",
            padding: "20px 24px",
            borderRadius: "14px",
            background: "linear-gradient(135deg, rgba(200,149,89,0.2), rgba(30,19,13,0.7))",
            border: "1px solid rgba(200,149,89,0.35)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "14px",
          }}
        >
          <div>
            <strong style={{ color: "var(--coffee)", fontSize: "1.2rem", display: "block" }}>
              🎉 Free Delivery: 4 Bottle Family Pack (₹389)
            </strong>
            <span style={{ color: "var(--mut)", fontSize: "0.9rem" }}>
              Get 4 bottles at ₹389 with 100% Free Doorstep Delivery across Kerala &amp; India!
            </span>
          </div>
          <Link href="/products/4-bottle-combo" className="btn">
            View Combo Deal
          </Link>
        </div>

        <div className="pl">
          {PRODUCTS.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Specifications Grid */}
      <section style={{ marginTop: "clamp(30px, 3.5vw, 42px)" }}>
        <div className="eyebrow">Specifications &amp; Quality</div>
        <h2>Engineered for Daily Excellence</h2>
        <div className="grid">
          <div className="card">
            <h3>2-Ply Ultra Soft</h3>
            <p>Gentle on sensitive facial skin without flaking or leaving dusty residue.</p>
          </div>
          <div className="card">
            <h3>Standard Cup Fit</h3>
            <p>Designed to fit securely in automobile center consoles and door pockets.</p>
          </div>
          <div className="card">
            <h3>Hygienic Dispenser</h3>
            <p>One-pull-at-a-time design keeps remaining tissues clean and sterile.</p>
          </div>
          <div className="card">
            <h3>Eco-Friendly Packaging</h3>
            <p>Durable reusable cylinders compatible with our convenient refill packs.</p>
          </div>
        </div>
      </section>
    </>
  );
}

