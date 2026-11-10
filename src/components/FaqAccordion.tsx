"use client";

import React, { useState } from "react";
import { FAQS } from "@/data/products";

export default function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className="faq-list" style={{ marginTop: "20px" }}>
      {FAQS.map((faq, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={index}
            className="faq-item"
            style={{
              border: "1px solid rgba(200,149,89,0.25)",
              borderRadius: "12px",
              marginBottom: "12px",
              background: "rgba(255,255,255,0.03)",
              overflow: "hidden",
            }}
          >
            <button
              type="button"
              onClick={() => toggle(index)}
              aria-expanded={isOpen}
              style={{
                width: "100%",
                padding: "16px 20px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                background: "none",
                border: "none",
                color: "var(--cream)",
                font: "inherit",
                fontSize: "1.05rem",
                fontWeight: 600,
                textAlign: "left",
                cursor: "pointer",
              }}
            >
              <span style={{ color: "var(--coffee)" }}>{faq.question}</span>
              <span style={{ fontSize: "1.3rem", transform: isOpen ? "rotate(45deg)" : "rotate(0deg)", transition: "0.2s" }}>
                +
              </span>
            </button>
            {isOpen && (
              <div
                style={{
                  padding: "0 20px 16px",
                  color: "var(--mut)",
                  fontSize: "0.95rem",
                  lineHeight: "1.6",
                }}
              >
                {faq.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

