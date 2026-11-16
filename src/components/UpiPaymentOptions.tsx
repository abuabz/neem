"use client";

import React, { useState, useEffect } from "react";

interface UpiPaymentOptionsProps {
  amount: number;
  productName?: string;
  layout?: "compact" | "modal" | "detail";
}

const UPI_ID = "neemfacetissue@okhdfcbank";
const PAYEE_NAME = "Neem Premium face tissue";
const GPAY_NUMBER = "8943019251";

export default function UpiPaymentOptions({
  amount,
  productName,
  layout = "modal",
}: UpiPaymentOptionsProps) {
  const [isAndroid, setIsAndroid] = useState(false);
  const [copiedId, setCopiedId] = useState(false);
  const [copiedNumber, setCopiedNumber] = useState(false);

  useEffect(() => {
    if (typeof navigator !== "undefined") {
      setIsAndroid(/android/i.test(navigator.userAgent));
    }
  }, []);

  const formattedAmount = `${amount}.00`;
  const encodedName = encodeURIComponent(PAYEE_NAME);
  const note = encodeURIComponent(
    productName ? `Neem - ${productName}` : "Neem Premium Tissue"
  );

  // App-specific deep links
  const gpayUrl = isAndroid
    ? `intent://pay?pa=${UPI_ID}&pn=${encodedName}&am=${formattedAmount}&cu=INR&tn=${note}#Intent;scheme=upi;package=com.google.android.apps.nbu.paisa.user;end`
    : `tez://upi/pay?pa=${UPI_ID}&pn=${encodedName}&am=${formattedAmount}&cu=INR&tn=${note}`;

  const phonepeUrl = isAndroid
    ? `intent://pay?pa=${UPI_ID}&pn=${encodedName}&am=${formattedAmount}&cu=INR&tn=${note}#Intent;scheme=upi;package=com.phonepe.app;end`
    : `phonepe://pay?pa=${UPI_ID}&pn=${encodedName}&am=${formattedAmount}&cu=INR&tn=${note}`;

  const paytmUrl = isAndroid
    ? `intent://pay?pa=${UPI_ID}&pn=${encodedName}&am=${formattedAmount}&cu=INR&tn=${note}#Intent;scheme=upi;package=net.one97.paytm;end`
    : `paytmmp://pay?pa=${UPI_ID}&pn=${encodedName}&am=${formattedAmount}&cu=INR&tn=${note}`;

  const otherUpiUrl = `upi://pay?pa=${UPI_ID}&pn=${encodedName}&am=${formattedAmount}&cu=INR&tn=${note}`;

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
      <div className="upi-options-title">
        <span>Tap to Pay with your preferred app:</span>
      </div>

      {/* App Choice Quick-Launch Buttons */}
      <div className="upi-app-buttons">
        {/* Google Pay */}
        <a
          href={gpayUrl}
          className="upi-app-btn upi-gpay"
          aria-label={`Pay ₹${amount} with Google Pay`}
        >
          <span className="upi-app-icon" aria-hidden="true">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
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
          </span>
          <span className="upi-app-label">GPay</span>
        </a>

        {/* PhonePe */}
        <a
          href={phonepeUrl}
          className="upi-app-btn upi-phonepe"
          aria-label={`Pay ₹${amount} with PhonePe`}
        >
          <span className="upi-app-icon" aria-hidden="true">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <rect width="24" height="24" rx="12" fill="#5f259f" />
              <path
                d="M15.5 8h-4.2c-.2 0-.3.1-.3.3v1.8h3.8c.2 0 .3.1.3.3v.8c0 .2-.1.3-.3.3H11v2.1c0 1.2.7 1.8 1.8 1.8h1.2c.2 0 .3.1.3.3v.9c0 .2-.1.3-.3.3h-1.4c-2.3 0-3.6-1.3-3.6-3.4V6.7c0-.2.1-.3.3-.3h6.2c.2 0 .3.1.3.3v1c0 .2-.1.3-.3.3z"
                fill="#ffffff"
              />
              <path
                d="M13.2 12.3l2.8 4.2c.1.2.1.4-.1.5l-.8.6c-.2.1-.4.1-.5-.1l-2.6-4c-.1-.2-.1-.4.1-.5l.6-.6c.2-.2.4-.2.5-.1z"
                fill="#ffffff"
              />
            </svg>
          </span>
          <span className="upi-app-label">PhonePe</span>
        </a>

        {/* Paytm */}
        <a
          href={paytmUrl}
          className="upi-app-btn upi-paytm"
          aria-label={`Pay ₹${amount} with Paytm`}
        >
          <span className="upi-app-icon" aria-hidden="true">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <rect width="24" height="24" rx="6" fill="#002e6e" />
              <path
                d="M4 14.5V9.5h2.2c1.3 0 2.1.8 2.1 2s-.8 2-2.1 2H5.4v1H4zm1.4-2h.8c.6 0 .9-.3.9-.9s-.3-.9-.9-.9h-.8v1.8zm4 2V9.5h1.3v4.2l2.3-4.2h1.4v5h-1.3v-4.1l-2.3 4.1H9.4z"
                fill="#00baf2"
              />
            </svg>
          </span>
          <span className="upi-app-label">Paytm</span>
        </a>

        {/* Other UPI / BHIM / Cred */}
        <a
          href={otherUpiUrl}
          className="upi-app-btn upi-other"
          aria-label={`Pay ₹${amount} with other UPI apps`}
        >
          <span className="upi-app-icon" aria-hidden="true">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path
                d="M14.5 3L8 13.5h5L10 21l8.5-12.5h-5.5L14.5 3z"
                fill="var(--coffee)"
              />
            </svg>
          </span>
          <span className="upi-app-label">Other UPI</span>
        </a>
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

