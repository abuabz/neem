import React from "react";
import Link from "next/link";
import { siteConfig } from "@/lib/siteConfig";

export default function Footer() {
  return (
    <footer>
      <div className="footer-nav">
        <Link href="/">Home</Link>
        <Link href="/products">Products</Link>
        <Link href="/why-neem">Why Neem</Link>
        <Link href="/wholesale">Wholesale</Link>
        <Link href="/guides">Guides</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      </div>

      <div className="footer-nav" style={{ marginTop: "10px", fontSize: "0.8rem", opacity: 0.85 }}>
        <Link href="/shipping-policy">Shipping &amp; Returns</Link>
        <Link href="/terms">Terms of Service</Link>
        <Link href="/privacy">Privacy Policy</Link>
      </div>

      <div style={{ margin: "16px auto 8px", maxWidth: "600px", lineHeight: "1.6" }}>
        <p style={{ margin: "0 0 8px", fontSize: "0.85rem", color: "var(--mut)" }}>
          Crafted with care in {siteConfig.location.city}, {siteConfig.location.state},{" "}
          {siteConfig.location.country}. Ultra soft, stylish &amp; portable face tissue bottles.
        </p>
        <p style={{ margin: 0, fontSize: "0.85rem" }}>
          <a
            href={siteConfig.instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Follow Neem on Instagram"
          >
            Instagram: {siteConfig.instagramHandle}
          </a>
        </p>
      </div>

      <p style={{ margin: "16px auto 0", fontSize: "0.82rem", opacity: 0.75 }}>
        &copy; {new Date().getFullYear()} {siteConfig.name}. A touch by nature. All rights reserved.
      </p>
    </footer>
  );
}

