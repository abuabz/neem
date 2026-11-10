"use client";

import React, { useState } from "react";
import { siteConfig } from "@/lib/siteConfig";

interface CopyMobileButtonProps {
  phone?: string;
  label?: string;
  showNumber?: boolean;
  layout?: "inline" | "card" | "badge" | "button-only";
  size?: "sm" | "md" | "lg";
}

export default function CopyMobileButton({
  phone = siteConfig.displayPhone,
  label = "Copy Mobile Number",
  showNumber = true,
  layout = "badge",
  size = "md",
}: CopyMobileButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(phone);
      } else {
        const textArea = document.createElement("textarea");
        textArea.value = phone;
        textArea.style.position = "fixed";
        textArea.style.left = "-999999px";
        textArea.style.top = "-999999px";
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        document.execCommand("copy");
        textArea.remove();
      }
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } catch (err) {
      console.error("Failed to copy phone number:", err);
    }
  };

  if (layout === "button-only") {
    return (
      <button
        type="button"
        onClick={handleCopy}
        aria-label={`Copy mobile number ${phone}`}
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "6px",
          background: copied ? "#2e7d32" : "var(--coffee)",
          color: copied ? "#ffffff" : "#0c0907",
          border: "none",
          borderRadius: "8px",
          padding: size === "sm" ? "5px 12px" : "8px 16px",
          fontSize: size === "sm" ? "0.8rem" : "0.88rem",
          fontWeight: 700,
          cursor: "pointer",
          transition: "all 0.2s ease",
          boxShadow: "0 2px 8px rgba(0,0,0,0.3)",
        }}
      >
        {copied ? (
          <>
            <span aria-hidden="true">✓</span> Copied!
          </>
        ) : (
          <>
            <span aria-hidden="true">📋</span> {label}
          </>
        )}
      </button>
    );
  }

  if (layout === "card") {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "8px",
          padding: "12px 16px",
          borderRadius: "12px",
          background: "rgba(200, 149, 89, 0.08)",
          border: "1px solid rgba(200, 149, 89, 0.3)",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "10px", flexWrap: "wrap" }}>
          <div>
            <span style={{ fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--mut)", display: "block" }}>
              Mobile / UPI Payment
            </span>
            <strong style={{ fontFamily: "monospace", fontSize: "1.15rem", color: "var(--cream)", letterSpacing: "0.05em" }}>
              {phone}
            </strong>
          </div>
          <button
            type="button"
            onClick={handleCopy}
            aria-label={`Copy mobile number ${phone}`}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
              background: copied ? "#2e7d32" : "var(--coffee)",
              color: copied ? "#ffffff" : "#0c0907",
              border: "none",
              borderRadius: "8px",
              padding: "7px 14px",
              fontSize: "0.82rem",
              fontWeight: 700,
              cursor: "pointer",
              transition: "all 0.2s ease",
            }}
          >
            {copied ? (
              <>
                <span aria-hidden="true">✓</span> Copied!
              </>
            ) : (
              <>
                <span aria-hidden="true">📋</span> Copy Number
              </>
            )}
          </button>
        </div>
      </div>
    );
  }

  // Default: badge pill
  return (
    <div
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "10px",
        padding: "6px 12px",
        borderRadius: "999px",
        background: "rgba(200, 149, 89, 0.12)",
        border: "1px solid rgba(200, 149, 89, 0.35)",
      }}
    >
      {showNumber && (
        <span
          style={{
            fontFamily: "monospace",
            fontSize: size === "sm" ? "0.92rem" : "1.05rem",
            fontWeight: 700,
            color: "var(--cream)",
            letterSpacing: "0.05em",
          }}
        >
          {phone}
        </span>
      )}
      <button
        type="button"
        onClick={handleCopy}
        aria-label={`Copy mobile number ${phone}`}
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "4px",
          background: copied ? "#2e7d32" : "var(--coffee)",
          color: copied ? "#ffffff" : "#0c0907",
          border: "none",
          borderRadius: "999px",
          padding: size === "sm" ? "4px 10px" : "5px 12px",
          fontSize: size === "sm" ? "0.75rem" : "0.8rem",
          fontWeight: 700,
          cursor: "pointer",
          transition: "all 0.2s ease",
        }}
      >
        {copied ? (
          <>
            <span aria-hidden="true">✓</span> Copied!
          </>
        ) : (
          <>
            <span aria-hidden="true">📋</span> Copy
          </>
        )}
      </button>
    </div>
  );
}

