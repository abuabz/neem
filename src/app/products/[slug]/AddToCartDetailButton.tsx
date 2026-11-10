"use client";

import React from "react";
import { Product } from "@/data/products";
import { useCheckout } from "@/components/CheckoutProvider";

export default function AddToCartDetailButton({ product }: { product: Product }) {
  const { openCheckout } = useCheckout();

  return (
    <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", marginTop: "20px" }}>
      <button
        className="btn"
        type="button"
        style={{ minWidth: "220px", minHeight: "48px", fontSize: "1.05rem" }}
        onClick={() => openCheckout(product)}
      >
        Buy Now (₹{product.price})
      </button>
    </div>
  );
}
