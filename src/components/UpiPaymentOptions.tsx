"use client";

import React, { useState } from "react";

interface UpiPaymentOptionsProps {
  amount: number;
  productName?: string;
  upiUrl?: string;
  layout?: "compact" | "modal" | "detail";
}

const UPI_ID = "neemfacetissue@okhdfcbank";
const PAYEE_NAME = "Neem Premium face tissue";
const GPAY_NUMBER = "8943019251";

export default function UpiPaymentOptions({
  amount,
  productName,
  upiUrl,
  layout = "modal",
}: UpiPaymentOptionsProps) {
  const [copiedId, setCopiedId] = useState(false);
  const [copiedNumber, setCopiedNumber] = useState(false);

  const formattedAmount = `${amount}.00`;
  const encodedName = encodeURIComponent(PAYEE_NAME);
  const note = encodeURIComponent(
    productName ? `Neem - ${productName}` : "Neem Premium Tissue"
  );

  // Standard universal UPI URL that triggers mobile OS app chooser across GPay, PhonePe, Paytm, etc.
  const targetUpiUrl =
    upiUrl ||
    `upi://pay?pa=${UPI_ID}&pn=${encodedName}&am=${formattedAmount}&cu=INR&tn=${note}`;

  const handleCopyUpiId = async (e: React.MouseEvent) => {
    e.preventDefault();
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(UPI_ID);
      } else {
        const ta = document.createElement("textarea");
        ta.value = UPI_ID;
        ta.style.position = "fixed";
        ta.style.left = "-9999px";
        document.body.appendChild(ta);
        ta.select();
        document.execCommand("copy");
        ta.remove();
      }
      setCopiedId(true);
      setTimeout(() => setCopiedId(false), 2200);
    } catch (err) {
      console.error("Failed to copy UPI ID:", err);
    }
  };

  const handleCopyNumber = async (e: React.MouseEvent) => {
    e.preventDefault();
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(GPAY_NUMBER);
      } else {
        const ta = document.createElement("textarea");
        ta.value = GPAY_NUMBER;
        ta.style.position = "fixed";
        ta.style.left = "-9999px";
        document.body.appendChild(ta);
        ta.select();
        document.execCommand("copy");
        ta.remove();
      }
      setCopiedNumber(true);
      setTimeout(() => setCopiedNumber(false), 2200);
    } catch (err) {
      console.error("Failed to copy phone number:", err);
    }
  };

  return (
    <div className={`upi-options-wrap upi-options-${layout}`}>
      {/* Primary Pay with UPI button (opens all UPI apps on mobile) */}
      <div className="upi-pay-btn-wrap">
        <a
          href={targetUpiUrl}
          className="upi-pay-now-btn"
          aria-label={`Pay ₹${amount} with UPI`}
        >
          <span className="upi-pay-now-icon" aria-hidden="true">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path
                d="M14.5 3L8 13.5h5L10 21l8.5-12.5h-5.5L14.5 3z"
                fill="currentColor"
              />
            </svg>
          </span>
          <span className="upi-pay-now-text">Pay with UPI</span>
        </a>
        <span className="upi-pay-hint">
          Opens Google Pay, PhonePe, Paytm or any UPI app
        </span>
      </div>

      {/* Copy UPI Details Section */}
      <div className="upi-copy-row">
        <button
          type="button"
          onClick={handleCopyUpiId}
          className="upi-copy-chip"
          aria-label="Copy UPI ID"
        >
          <span className="upi-copy-muted">UPI ID:</span>
          <strong>{UPI_ID}</strong>
          <span className="upi-copy-action">{copiedId ? "✓ Copied" : "📋 Copy"}</span>
        </button>

        <button
          type="button"
          onClick={handleCopyNumber}
          className="upi-copy-chip"
          aria-label="Copy GPay Phone Number"
        >
          <span className="upi-copy-muted">GPay No:</span>
          <strong>+91 {GPAY_NUMBER}</strong>
          <span className="upi-copy-action">{copiedNumber ? "✓ Copied" : "📋 Copy"}</span>
        </button>
      </div>
    </div>
  );
}
