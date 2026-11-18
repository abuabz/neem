"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

interface ProductQrLinkProps {
  qrImage: string;
  productName: string;
  totalWithDelivery: number;
}

export default function ProductQrLink({
  qrImage,
  productName,
  totalWithDelivery,
}: ProductQrLinkProps) {
  const [isIos, setIsIos] = useState(false);

  useEffect(() => {
    if (typeof navigator !== "undefined") {
      const ua = navigator.userAgent || "";
      const isApple =
        /iPad|iPhone|iPod/.test(ua) ||
        (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);
      setIsIos(isApple);
    }
  }, []);

  const encodedName = encodeURIComponent("Neem Premium face tissue");
  const note = encodeURIComponent(`Neem - ${productName}`);
  const formattedAmount = `${totalWithDelivery}.00`;

  // On iPhone, default directly to Google Pay (tez://) to prevent WhatsApp Pay hijack
  const href = isIos
    ? `tez://upi/pay?pa=neemfacetissue@okhdfcbank&pn=${encodedName}&am=${formattedAmount}&cu=INR&tn=${note}`
    : `upi://pay?pa=neemfacetissue@okhdfcbank&pn=${encodedName}&am=${formattedAmount}&cu=INR&tn=${note}`;

  return (
    <a
      href={href}
      aria-label={`Pay ₹${totalWithDelivery} with ${isIos ? "Google Pay" : "UPI"}`}
      style={{
        display: "block",
        padding: "8px",
        background: "#ffffff",
        borderRadius: "10px",
        flexShrink: 0,
        textDecoration: "none",
        cursor: "pointer",
      }}
    >
      <Image
        src={qrImage}
        alt={`${productName} Google Pay UPI QR Code - ₹${totalWithDelivery}`}
        width={104}
        height={104}
        style={{ display: "block", borderRadius: "6px" }}
      />
    </a>
  );
}
