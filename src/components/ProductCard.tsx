"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Product } from "@/data/products";
import { useCheckout } from "./CheckoutProvider";

interface ProductCardProps {
  product: Product;
  priority?: boolean;
}

export default function ProductCard({ product, priority = false }: ProductCardProps) {
  const { openCheckout } = useCheckout();

  return (
    <article className="pc">
      {product.tag && <span className="tag">{product.tag}</span>}

      <Link
        href={`/products/${product.slug}`}
        aria-label={`View details for ${product.name}`}
        style={{ textDecoration: "none", color: "inherit" }}
      >
        <div style={{ position: "relative", width: "100%", aspectRatio: "4/3", overflow: "hidden" }}>
          <Image
            src={product.image}
            alt={`${product.name} - Neem Premium Face Tissue Bottle`}
            fill
            sizes="(max-width: 760px) 50vw, 25vw"
            priority={priority}
            style={{ objectFit: "cover" }}
          />
        </div>
      </Link>

      <div className="in">
        <Link
          href={`/products/${product.slug}`}
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <h3>{product.name}</h3>
        </Link>
        <small>{product.shortDesc}</small>
        <div className="pr">₹{product.price}</div>
        <button
          className="btn"
          type="button"
          onClick={() => openCheckout(product)}
          aria-label={`Buy ${product.name} now for ₹${product.price}`}
        >
          Buy Now
        </button>
      </div>
    </article>
  );
}
