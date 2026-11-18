"use client";

import React, { useState, useEffect } from "react";

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
  const [isIos, setIsIos] = useState(false);
  const [copiedId, setCopiedId] = useState(false);
  const [copiedNumber, setCopiedNumber] = useState(false);

  useEffect(() => {
    if (typeof navigator !== "undefined") {
      const ua = navigator.userAgent || "";
      const isApple =
        /iPad|iPhone|iPod/.test(ua) ||
        (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);
      setIsIos(isApple);
    }
  }, []);

  const formattedAmount = `${amount}.00`;
  const encodedName = encodeURIComponent(PAYEE_NAME);
  const note = encodeURIComponent(
    productName ? `Neem - ${productName}` : "Neem Premium Tissue"
  );

  // App-specific URLs for iOS
  const gpayIosUrl = `tez://upi/pay?pa=${UPI_ID}&pn=${encodedName}&am=${formattedAmount}&cu=INR&tn=${note}`;
  const phonepeIosUrl = `phonepe://pay?pa=${UPI_ID}&pn=${encodedName}&am=${formattedAmount}&cu=INR&tn=${note}`;
  const paytmIosUrl = `paytmmp://pay?pa=${UPI_ID}&pn=${encodedName}&am=${formattedAmount}&cu=INR&tn=${note}`;

  // Universal UPI URL for Android (triggers Android native app chooser)
  const universalUpiUrl =
    upiUrl ||
    `upi://pay?pa=${UPI_ID}&pn=${encodedName}&am=${formattedAmount}&cu=INR&tn=${note}`;

  // On iPhone, default directly to Google Pay (tez://) to avoid WhatsApp Pay hijack
  const targetUpiUrl = isIos ? gpayIosUrl : universalUpiUrl;

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
      {/* Primary Pay Button */}
      <div className="upi-pay-btn-wrap">
        <a
          href={targetUpiUrl}
          className="upi-pay-now-btn"
          aria-label={`Pay ₹${amount} with ${isIos ? "Google Pay" : "UPI"}`}
        >
          <span className="upi-pay-now-icon" aria-hidden="true">
            {isIos ? (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path
                  d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.8-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17z"
                  fill="#4285F4"
                />
                <path
                  d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.33 24 12 24z"
                  fill="#34A853"
                />
                <path
                  d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 9.99 0 12s.45 3.82 1.25 5.42l4.03-3.15z"
                  fill="#FBBC05"
                />
                <path
                  d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"
                  fill="#EA4335"
                />
              </svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path
                  d="M14.5 3L8 13.5h5L10 21l8.5-12.5h-5.5L14.5 3z"
                  fill="currentColor"
                />
              </svg>
            )}
          </span>
          <span className="upi-pay-now-text">
            {isIos ? "Pay with Google Pay" : "Pay with UPI"}
          </span>
        </a>
        <span className="upi-pay-hint">
          {isIos
            ? "Opens Google Pay directly on your iPhone"
            : "Opens Google Pay, PhonePe, Paytm or any UPI app"}
        </span>

        {/* Alternate apps for iPhone users if they prefer PhonePe or Paytm */}
        {isIos && (
          <div className="upi-ios-alternatives">
            <span className="upi-ios-alt-label">Or pay using:</span>
            <div className="upi-ios-alt-btns">
              <a
                href={phonepeIosUrl}
                className="upi-ios-alt-btn"
                aria-label={`Pay ₹${amount} with PhonePe`}
              >
                PhonePe
              </a>
              <a
                href={paytmIosUrl}
                className="upi-ios-alt-btn"
                aria-label={`Pay ₹${amount} with Paytm`}
              >
                Paytm
              </a>
            </div>
          </div>
        )}
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
