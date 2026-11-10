import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PRODUCTS, getProductBySlug } from "@/data/products";
import { siteConfig } from "@/lib/siteConfig";
import JsonLd from "@/components/JsonLd";
import AddToCartDetailButton from "./AddToCartDetailButton";
import CopyMobileButton from "@/components/CopyMobileButton";

export function generateStaticParams() {
  return PRODUCTS.map((product) => ({
    slug: product.slug,
  }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const product = getProductBySlug(params.slug);
  if (!product) return {};

  const title = `${product.name} (₹${product.price}) | Neem Premium Face Tissue`;
  const description = `${product.name}: ${product.shortDesc}. ${product.fullDesc.slice(0, 150)}...`;

  return {
    title: {
      absolute: title,
    },
    description,
    alternates: {
      canonical: `${siteConfig.url}/products/${product.slug}`,
    },
    openGraph: {
      title,
      description,
      url: `${siteConfig.url}/products/${product.slug}`,
      images: [
        {
          url: `${siteConfig.url}${product.image}`,
          width: product.imageWidth,
          height: product.imageHeight,
          alt: `${product.name} - Neem Face Tissue Bottle`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`${siteConfig.url}${product.image}`],
    },
  };
}

export default function ProductDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const product = getProductBySlug(params.slug);
  if (!product) {
    notFound();
  }

  const otherProducts = PRODUCTS.filter((p) => p.id !== product.id);

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    headline: product.headline,
    image: `${siteConfig.url}${product.image}`,
    description: product.fullDesc,
    sku: product.sku,
    mpn: product.sku,
    brand: {
      "@type": "Brand",
      name: "Neem",
    },
    offers: {
      "@type": "Offer",
      url: `${siteConfig.url}/products/${product.slug}`,
      priceCurrency: product.currency,
      price: product.price,
      priceValidUntil: "2027-12-31",
      availability: "https://schema.org/InStock",
      itemCondition: "https://schema.org/NewCondition",
      seller: {
        "@type": "Organization",
        name: "Neem",
      },
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: product.ratingValue,
      reviewCount: product.reviewCount,
    },
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
        name: "Products",
        item: `${siteConfig.url}/products`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: product.name,
        item: `${siteConfig.url}/products/${product.slug}`,
      },
    ],
  };

  return (
    <>
      <JsonLd data={[productSchema, breadcrumbSchema]} />

      <nav
        aria-label="Breadcrumb"
        style={{ marginBottom: "20px", fontSize: "0.85rem", color: "var(--mut)" }}
      >
        <Link href="/" style={{ textDecoration: "none", color: "var(--coffee)" }}>
          Home
        </Link>
        <span style={{ margin: "0 8px" }}>/</span>
        <Link href="/products" style={{ textDecoration: "none", color: "var(--coffee)" }}>
          Products
        </Link>
        <span style={{ margin: "0 8px" }}>/</span>
        <span style={{ color: "var(--cream)" }}>{product.name}</span>
      </nav>

      <section
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "36px",
          alignItems: "center",
          marginTop: "16px",
        }}
      >
        {/* Product Image Tile */}
        <div
          style={{
            position: "relative",
            aspectRatio: "3/4",
            maxWidth: "520px",
            width: "100%",
            margin: "0 auto",
            borderRadius: "20px",
            overflow: "hidden",
            border: "1px solid rgba(200,149,89,0.35)",
            background: "radial-gradient(circle at 50% 35%, #352115, #140e0a)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {product.tag && <span className="tag">{product.tag}</span>}
          <Image
            src={product.image}
            alt={`${product.name} - Neem face tissue cylinder bottle`}
            width={product.imageWidth}
            height={product.imageHeight}
            priority
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </div>

        {/* Product Details */}
        <div>
          <div className="eyebrow">{product.headline}</div>
          <h1 style={{ fontSize: "clamp(2rem, 5vw, 3.2rem)", margin: "0 0 10px" }}>
            {product.name}
          </h1>

          <div
            style={{
              display: "flex",
              alignItems: "baseline",
              gap: "12px",
              marginBottom: "16px",
            }}
          >
            <div
              style={{
                fontFamily: '"Barlow Condensed", sans-serif',
                fontSize: "3rem",
                fontWeight: 700,
                color: "var(--coffee)",
                lineHeight: 1,
              }}
            >
              ₹{product.price}
            </div>
            <span style={{ color: "var(--mut)", fontSize: "0.9rem" }}>
              ({product.pulls} pulls / {product.sheets} sheets)
            </span>
          </div>

          <p style={{ fontSize: "1.05rem", lineHeight: "1.6" }}>{product.fullDesc}</p>

          {/* Key Features Bullet List */}
          <ul
            style={{
              listStyle: "none",
              padding: 0,
              margin: "20px 0 28px",
            }}
          >
            {product.features.map((feat, i) => (
              <li
                key={i}
                style={{
                  padding: "8px 0 8px 28px",
                  position: "relative",
                  borderBottom: "1px solid rgba(200,149,89,0.18)",
                  color: "var(--cream)",
                  fontSize: "0.95rem",
                }}
              >
                <span
                  style={{
                    position: "absolute",
                    left: "4px",
                    top: "14px",
                    width: "10px",
                    height: "10px",
                    borderRadius: "50% 0",
                    background: "var(--coffee)",
                  }}
                />
                {feat}
              </li>
            ))}
          </ul>

          <AddToCartDetailButton product={product} />

          {product.id === "single" && (
            <div
              style={{
                marginTop: "24px",
                padding: "16px 20px",
                borderRadius: "14px",
                border: "1px solid rgba(200, 149, 89, 0.35)",
                background: "rgba(0, 0, 0, 0.45)",
                display: "flex",
                alignItems: "center",
                gap: "18px",
                flexWrap: "wrap",
              }}
            >
              <div
                style={{
                  padding: "8px",
                  background: "#ffffff",
                  borderRadius: "10px",
                  flexShrink: 0,
                }}
              >
                <Image
                  src="/images/qr-code.jpg"
                  alt="Neem Google Pay UPI QR Code"
                  width={96}
                  height={96}
                  style={{ display: "block", borderRadius: "6px" }}
                />
              </div>
              <div style={{ flex: 1, minWidth: "200px" }}>
                <strong style={{ display: "block", color: "var(--coffee)", fontSize: "1.02rem" }}>
                  Pay via Google Pay / UPI
                </strong>
                <span style={{ fontSize: "0.84rem", color: "var(--mut)", display: "block", marginTop: "4px" }}>
                  ₹99 + ₹30 flat delivery = <strong style={{ color: "var(--cream)" }}>₹129 total</strong>.
                  Scan QR code with Google Pay / PhonePe &amp; tap &apos;Buy Now&apos; to complete your delivery details.
                </span>
                <div style={{ marginTop: "10px", display: "flex", alignItems: "center", gap: "8px", flexWrap: "wrap" }}>
                  <span style={{ fontSize: "0.78rem", color: "var(--mut)" }}>GPay / UPI Mobile:</span>
                  <CopyMobileButton phone="8943019251" layout="badge" size="sm" />
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Other Pack Options */}
      <section style={{ marginTop: "clamp(32px, 4vw, 44px)" }}>
        <div className="eyebrow">Explore Other Options</div>
        <h2>More Neem Packs</h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "16px",
            marginTop: "20px",
          }}
        >
          {otherProducts.map((p) => (
            <Link
              key={p.id}
              href={`/products/${p.slug}`}
              style={{
                textDecoration: "none",
                display: "block",
                padding: "16px",
                borderRadius: "14px",
                border: "1px solid rgba(200,149,89,0.25)",
                background: "rgba(255,255,255,0.03)",
              }}
            >
              <h3 style={{ margin: "0 0 4px", color: "var(--coffee)" }}>{p.name}</h3>
              <p style={{ margin: "0 0 8px", fontSize: "0.85rem", color: "var(--mut)" }}>
                {p.shortDesc}
              </p>
              <strong style={{ color: "var(--cream)", fontSize: "1.2rem" }}>
                ₹{p.price}
              </strong>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
