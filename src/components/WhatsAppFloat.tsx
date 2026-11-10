"use client";

import React from "react";
import { siteConfig } from "@/lib/siteConfig";

export default function WhatsAppFloat() {
  const cleanPhone = siteConfig.phone.replace(/[^0-9]/g, "");
  const defaultText = encodeURIComponent(
    "Hi Neem, I would like to inquire about ordering face tissue bottles."
  );

  return (
    <aside aria-label="Quick WhatsApp Contact">
      <a
        href={`https://wa.me/${cleanPhone}?text=${defaultText}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="wa-float"
        style={{
          position: "fixed",
          zIndex: 40,
          display: "flex",
          alignItems: "center",
          gap: "8px",
          padding: "10px 16px",
          borderRadius: "99px",
          background: "#25D366",
          color: "#ffffff",
          textDecoration: "none",
          fontWeight: 700,
          fontSize: "0.9rem",
          boxShadow: "0 6px 20px rgba(0, 0, 0, 0.45)",
          transition: "transform 0.2s ease, box-shadow 0.2s ease",
        }}
      >
        <svg
          style={{ width: "20px", height: "20px", fill: "currentColor" }}
          viewBox="0 0 24 24"
        >
          <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.196 8.196 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24m4.52 11.59c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.02-1.25-.75-.67-1.26-1.5-1.4-1.75-.15-.25-.02-.39.11-.51.11-.11.25-.29.37-.43.13-.15.17-.25.25-.42.08-.17.04-.32-.02-.45-.06-.13-.56-1.35-.77-1.85-.2-.49-.41-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.61.13.17 1.78 2.71 4.3 3.8.6.26 1.07.42 1.44.54.61.19 1.16.17 1.6.1.49-.07 1.47-.6 1.68-1.18.21-.58.21-1.08.15-1.18-.07-.1-.23-.16-.48-.28" />
        </svg>
        <span className="wa-text">Chat with Us</span>
      </a>
    </aside>
  );
}

