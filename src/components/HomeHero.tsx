"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { PRODUCTS } from "@/data/products";
import { useCheckout } from "./CheckoutProvider";

export default function HomeHero() {
  const { openCheckout } = useCheckout();

  const singleProduct = PRODUCTS.find((p) => p.id === "single") || PRODUCTS[0];
  const combo4Product = PRODUCTS.find((p) => p.id === "combo4") || PRODUCTS[3];

  const handleBuySingle = () => {
    openCheckout(singleProduct);
  };

  const handleBuyCombo = () => {
    openCheckout(combo4Product);
  };

  useEffect(() => {
    if (typeof window === "undefined" || !("IntersectionObserver" in window)) {
      document.querySelectorAll(".rv").forEach((el) => el.classList.add("in"));
      return;
    }
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in");
        }
      });
    });
    document.querySelectorAll(".rv").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <>
      {/* Cinematic Hero with Perfectly Proportioned Bottle Showcase */}
      <section className="hero2" aria-labelledby="hero-heading">
        <div
          className="hbg-container"
          onClick={handleBuySingle}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") handleBuySingle();
          }}
          aria-label="Buy Single Neem Bottle for ₹99 - Click to order"
        >
          <Image
            className="hbg"
            src="/images/oneproduct.jpeg"
            alt="Neem Premium Face Tissue Bottle in Nature - Just ₹99"
            width={390}
            height={520}
            priority
            sizes="(max-width: 900px) 280px, 390px"
          />
        </div>

        <div className="hov" aria-hidden="true" />
        <div className="hc">
          <span className="chip">✦ CRAFTED IN KERALA · JUST ₹99</span>
          <h1 id="hero-heading">
            SOFTNESS THAT CARES,<br />
            <span>NATURE THAT PROTECTS.</span>
          </h1>
          <p>
            Neem premium face tissue in an iconic matte black cylinder bottle. Ultra soft, lint-free, and custom-made
            for car cup holders and elegant desks.
          </p>
          <div className="row" style={{ marginTop: "22px" }}>
            <button
              type="button"
              className="btn"
              onClick={handleBuySingle}
              aria-label="Buy Single Neem Bottle for ₹99"
            >
              Buy Now · ₹99
            </button>
            <a className="btn alt" href="#why">
              Why Neem
            </a>
          </div>
        </div>
        <div className="cue" aria-hidden="true" />
      </section>

      {/* Marquee Ticker from neem.html */}
      <div className="mq" aria-hidden="true">
        <div>
          <span>Car Cup Holder Fit</span>
          <span>60 Pulls · 120 Sheets</span>
          <span>Ultra Soft 2-Ply Virgin Pulp</span>
          <span>Dust-Proof Push-Pull Dispenser</span>
          <span>Free Delivery on 4-Bottle Combo</span>
          <span>Refillable &amp; Eco-Conscious</span>
          <span>Car Cup Holder Fit</span>
          <span>60 Pulls · 120 Sheets</span>
          <span>Ultra Soft 2-Ply Virgin Pulp</span>
          <span>Dust-Proof Push-Pull Dispenser</span>
          <span>Free Delivery on 4-Bottle Combo</span>
          <span>Refillable &amp; Eco-Conscious</span>
        </div>
      </div>

      {/* Feature Highlight from neem.html */}
      <section className="feat rv" aria-labelledby="feat-heading">
        <div style={{ position: "relative", width: "100%", maxWidth: "440px", margin: "0 auto", aspectRatio: "4/5" }}>
          <Image
            src="/images/oneproduct.jpeg"
            alt="Neem Bottle Arch Feature"
            fill
            sizes="(max-width: 900px) 300px, 440px"
            style={{
              objectFit: "cover",
              borderRadius: "220px 220px 22px 22px",
              border: "1px solid rgba(200, 149, 89, 0.45)",
            }}
          />
        </div>
        <div>
          <div className="eyebrow">The Neem Difference</div>
          <h2 id="feat-heading" style={{ fontSize: "clamp(2rem, 5vw, 3.2rem)" }}>
            Designed to be seen, built to travel
          </h2>
          <p>
            Traditional rectangular tissue boxes get crushed in car doors, slide across dashboards, and look out of place on a coffee
            table.
          </p>
          <div className="trust">
            <div>
              <i aria-hidden="true">🌿</i>
              <strong>Premium quality</strong>
              <div style={{ fontSize: "0.78rem", color: "var(--mut)", marginTop: "2px" }}>100% Virgin Soft Pulp</div>
            </div>
            <div>
              <i aria-hidden="true">🧴</i>
              <strong>Stylish &amp; compact</strong>
              <div style={{ fontSize: "0.78rem", color: "var(--mut)", marginTop: "2px" }}>Fits cup holders &amp; desks</div>
            </div>
            <div>
              <i aria-hidden="true">🚗</i>
              <strong>Travel &amp; car</strong>
              <div style={{ fontSize: "0.78rem", color: "var(--mut)", marginTop: "2px" }}>Spill &amp; dust sealed</div>
            </div>
            <div>
              <i aria-hidden="true">🛡️</i>
              <strong>Safe &amp; hygienic</strong>
              <div style={{ fontSize: "0.78rem", color: "var(--mut)", marginTop: "2px" }}>Smooth 1-handed pull</div>
            </div>
          </div>
        </div>
      </section>

      {/* Band Promo from neem.html */}
      <section className="band rv" aria-label="Free Delivery Promotion">
        <div>
          <b>Free delivery on the 4 bottle combo</b>
          <p style={{ margin: "4px 0 0", color: "var(--cream)", opacity: 0.9 }}>
            Order in a minute on WhatsApp with 100% Free Doorstep Delivery.
          </p>
        </div>
        <button
          type="button"
          className="btn"
          onClick={handleBuyCombo}
          aria-label="Order 4-bottle combo now"
        >
          Order now (₹389) &rarr;
        </button>
      </section>
    </>
  );
}

