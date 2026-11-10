"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { useCheckout, DeliveryDetails, STANDARD_DELIVERY_CHARGE } from "./CheckoutProvider";
import CopyMobileButton from "./CopyMobileButton";

const INDIAN_STATES = [
  "Kerala",
  "Karnataka",
  "Tamil Nadu",
  "Maharashtra",
  "Andhra Pradesh",
  "Telangana",
  "Delhi",
  "Goa",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jammu and Kashmir",
  "Jharkhand",
  "Madhya Pradesh",
  "Odisha",
  "Punjab",
  "Rajasthan",
  "Uttar Pradesh",
  "Uttarakhand",
  "West Bengal",
  "Other",
];

const DEFAULT_DISTRICTS = [
  "Malappuram",
  "Kozhikode",
  "Ernakulam",
  "Thrissur",
  "Palakkad",
  "Kannur",
  "Thiruvananthapuram",
  "Kollam",
  "Kottayam",
  "Alappuzha",
  "Kasaragod",
  "Pathanamthitta",
  "Idukki",
  "Wayanad",
  "Bengaluru Urban",
  "Coimbatore",
  "Chennai",
  "Mangaluru",
  "Mumbai",
  "Delhi",
  "Other",
];

export default function BuyNowModal() {
  const {
    isCheckoutOpen,
    selectedProduct,
    quantity,
    closeCheckout,
    incrementQuantity,
    decrementQuantity,
    submitOrder,
  } = useCheckout();

  const [formData, setFormData] = useState<DeliveryDetails>({
    name: "",
    mobile: "",
    address: "",
    post: "",
    pin: "",
    district: "Malappuram",
    state: "Kerala",
  });

  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [pinStatus, setPinStatus] = useState<string | null>(null);
  const [isLoadingPin, setIsLoadingPin] = useState(false);
  const [availablePosts, setAvailablePosts] = useState<string[]>([]);
  const [districtList, setDistrictList] = useState<string[]>(DEFAULT_DISTRICTS);
  const [customPostMode, setCustomPostMode] = useState(false);
  const [customDistrictMode, setCustomDistrictMode] = useState(false);

  // Load saved delivery profile from localStorage
  useEffect(() => {
    try {
      const saved = localStorage.getItem("neem_customer_profile");
      if (saved) {
        const parsed = JSON.parse(saved);
        setFormData((prev) => ({ ...prev, ...parsed }));
      }
    } catch {
      // Ignore storage errors
    }
  }, []);

  // Auto-fetch location by PIN Code
  const fetchPinDetails = useCallback(async (pin: string) => {
    if (pin.length !== 6) return;
    setIsLoadingPin(true);
    setPinStatus("Fetching location details...");
    setErrorMsg(null);

    try {
      const res = await fetch(`https://api.postalpincode.in/pincode/${pin}`);
      if (!res.ok) throw new Error("API error");
      const data = await res.json();

      if (
        Array.isArray(data) &&
        data.length > 0 &&
        data[0].Status === "Success" &&
        Array.isArray(data[0].PostOffice) &&
        data[0].PostOffice.length > 0
      ) {
        const postOffices: string[] = Array.from(
          new Set(data[0].PostOffice.map((p: { Name: string }) => p.Name).filter(Boolean))
        );
        const detectedDistrict: string = data[0].PostOffice[0].District || "Malappuram";
        const detectedState: string = data[0].PostOffice[0].State || "Kerala";

        setAvailablePosts(postOffices);
        setCustomPostMode(false);

        setDistrictList((prev) => {
          if (!prev.includes(detectedDistrict)) {
            return [detectedDistrict, ...prev];
          }
          return prev;
        });
        setCustomDistrictMode(false);

        setFormData((prev) => ({
          ...prev,
          post: postOffices[0] || prev.post,
          district: detectedDistrict,
          state: detectedState,
        }));

        setPinStatus(
          `✅ Found: ${postOffices[0]}, ${detectedDistrict}, ${detectedState}`
        );
      } else {
        setPinStatus("⚠️ PIN not recognized by postal database. Please select manually below.");
      }
    } catch {
      setPinStatus("⚠️ Could not auto-fetch. Please select your location below.");
    } finally {
      setIsLoadingPin(false);
    }
  }, []);

  if (!isCheckoutOpen || !selectedProduct) return null;

  const itemSubtotal = selectedProduct.price * quantity;
  const isFreeDelivery = selectedProduct.id === "combo4" || selectedProduct.price === 389;
  const deliveryCharge = isFreeDelivery ? 0 : STANDARD_DELIVERY_CHARGE;
  const grandTotal = itemSubtotal + deliveryCharge;
  const isSingleProduct = selectedProduct.id === "single" || selectedProduct.slug === "single-bottle";

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errorMsg) setErrorMsg(null);
  };

  const handlePinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const rawVal = e.target.value.replace(/[^0-9]/g, "").slice(0, 6);
    setFormData((prev) => ({ ...prev, pin: rawVal }));
    if (errorMsg) setErrorMsg(null);

    if (rawVal.length === 6) {
      fetchPinDetails(rawVal);
    } else {
      setPinStatus(null);
    }
  };

  const handlePostSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const val = e.target.value;
    if (val === "__custom__") {
      setCustomPostMode(true);
      setFormData((prev) => ({ ...prev, post: "" }));
    } else {
      setCustomPostMode(false);
      setFormData((prev) => ({ ...prev, post: val }));
    }
  };

  const handleDistrictSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const val = e.target.value;
    if (val === "Other") {
      setCustomDistrictMode(true);
      setFormData((prev) => ({ ...prev, district: "" }));
    } else {
      setCustomDistrictMode(false);
      setFormData((prev) => ({ ...prev, district: val }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);

    if (
      !formData.name.trim() ||
      !formData.mobile.trim() ||
      !formData.address.trim() ||
      !formData.post.trim() ||
      !formData.pin.trim() ||
      !formData.district.trim() ||
      !formData.state.trim()
    ) {
      setErrorMsg("Please fill in all delivery details.");
      return;
    }

    const cleanMobile = formData.mobile.replace(/[^0-9]/g, "");
    if (cleanMobile.length < 10) {
      setErrorMsg("Please enter a valid 10-digit mobile number.");
      return;
    }

    const cleanPin = formData.pin.replace(/[^0-9]/g, "");
    if (cleanPin.length !== 6) {
      setErrorMsg("Please enter a valid 6-digit postal PIN code.");
      return;
    }

    submitOrder(formData);
  };

  return (
    <div
      className="ov"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      onClick={(e) => {
        if (e.target === e.currentTarget) closeCheckout();
      }}
    >
      <div className="sheet" style={{ maxWidth: "580px" }}>
        {/* Header */}
        <div
          className="sh"
          style={{
            borderBottom: "1px solid rgba(200, 149, 89, 0.25)",
            paddingBottom: "10px",
          }}
        >
          <div>
            <span
              style={{
                fontSize: "0.75rem",
                textTransform: "uppercase",
                letterSpacing: "0.15em",
                color: "var(--coffee)",
                fontWeight: 600,
              }}
            >
              Instant Checkout
            </span>
            <h2 id="modal-title" style={{ margin: "2px 0 0", fontSize: "1.6rem" }}>
              Buy Now
            </h2>
          </div>
          <button
            className="x"
            onClick={closeCheckout}
            aria-label="Close checkout"
            type="button"
          >
            &times;
          </button>
        </div>

        {/* Selected Product Summary & Quantity Selector */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "14px",
            padding: "12px 14px",
            margin: "14px 0",
            borderRadius: "12px",
            background: "rgba(0, 0, 0, 0.4)",
            border: "1px solid rgba(200, 149, 89, 0.25)",
          }}
        >
          <div
            style={{
              position: "relative",
              width: "56px",
              height: "56px",
              borderRadius: "8px",
              overflow: "hidden",
              flexShrink: 0,
            }}
          >
            <Image
              src={selectedProduct.image}
              alt={selectedProduct.name}
              fill
              style={{ objectFit: "cover" }}
            />
          </div>

          <div style={{ flex: 1, minWidth: 0 }}>
            <strong style={{ display: "block", color: "var(--cream)", fontSize: "0.98rem" }}>
              {selectedProduct.name}
            </strong>
            <span style={{ fontSize: "0.82rem", color: "var(--mut)" }}>
              ₹{selectedProduct.price} per pack
            </span>
          </div>

          {/* Quantity Controls */}
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <button
              type="button"
              onClick={decrementQuantity}
              disabled={quantity <= 1}
              aria-label="Decrease quantity"
              style={{
                width: "32px",
                height: "32px",
                borderRadius: "50%",
                border: "1px solid var(--coffee)",
                background: "none",
                color: "var(--coffee)",
                fontSize: "1.2rem",
                cursor: quantity <= 1 ? "not-allowed" : "pointer",
                opacity: quantity <= 1 ? 0.4 : 1,
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              −
            </button>
            <b style={{ minWidth: "22px", textAlign: "center", color: "var(--cream)" }}>
              {quantity}
            </b>
            <button
              type="button"
              onClick={incrementQuantity}
              aria-label="Increase quantity"
              style={{
                width: "32px",
                height: "32px",
                borderRadius: "50%",
                border: "1px solid var(--coffee)",
                background: "none",
                color: "var(--coffee)",
                fontSize: "1.2rem",
                cursor: "pointer",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              +
            </button>
          </div>
        </div>

        {/* Pricing Breakdown */}
        <div
          style={{
            padding: "10px 14px",
            borderRadius: "10px",
            background: "rgba(255, 255, 255, 0.03)",
            border: "1px solid rgba(200, 149, 89, 0.2)",
            marginBottom: "14px",
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.9rem", color: "var(--mut)", marginBottom: "4px" }}>
            <span>Items Subtotal ({quantity} {quantity === 1 ? "pack" : "packs"}):</span>
            <span style={{ color: "var(--cream)" }}>₹{itemSubtotal}</span>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.9rem", color: "var(--mut)", marginBottom: "8px" }}>
            <span>Delivery Charge:</span>
            {isFreeDelivery ? (
              <span style={{ color: "#7cd97c", fontWeight: 700 }}>FREE (₹0)</span>
            ) : (
              <span style={{ color: "var(--coffee)", fontWeight: 600 }}>+ ₹{deliveryCharge}</span>
            )}
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              paddingTop: "8px",
              borderTop: "1px solid rgba(200, 149, 89, 0.2)",
            }}
          >
            <strong style={{ color: "var(--cream)", fontSize: "1.05rem" }}>Total Payable:</strong>
            <b
              style={{
                fontFamily: "var(--font-barlow-condensed), sans-serif",
                fontSize: "1.7rem",
                color: "var(--coffee)",
              }}
            >
              ₹{grandTotal}
            </b>
          </div>
        </div>

        {/* Single Product UPI QR Code Payment Box (No Transaction ID field) */}
        {isSingleProduct && (
          <div
            style={{
              padding: "16px",
              margin: "12px 0 16px",
              borderRadius: "14px",
              border: "1px solid rgba(200, 149, 89, 0.4)",
              background: "rgba(0, 0, 0, 0.5)",
              textAlign: "center",
            }}
          >
            <div
              style={{
                fontSize: "0.8rem",
                textTransform: "uppercase",
                letterSpacing: "0.15em",
                color: "var(--coffee)",
                fontWeight: 700,
                marginBottom: "4px",
              }}
            >
              Pay via Google Pay / UPI QR
            </div>
            <p style={{ margin: "0 auto 12px", fontSize: "0.86rem", color: "var(--cream)", maxWidth: "42ch" }}>
              Scan this QR code using <strong>Google Pay</strong>, <strong>PhonePe</strong>, or <strong>Paytm</strong> to pay <strong>₹{grandTotal}</strong> (₹{itemSubtotal} + ₹{deliveryCharge} delivery).
            </p>

            <div
              style={{
                display: "inline-block",
                padding: "10px",
                background: "#ffffff",
                borderRadius: "12px",
                boxShadow: "0 6px 20px rgba(0, 0, 0, 0.6)",
              }}
            >
              <Image
                src="/images/qr-code.jpg"
                alt="Neem Google Pay UPI QR Code"
                width={170}
                height={170}
                priority
                style={{ display: "block", borderRadius: "8px" }}
              />
            </div>

            {/* Copy Mobile Number for GPay / UPI */}
            <div
              style={{
                marginTop: "14px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "6px",
              }}
            >
              <span style={{ fontSize: "0.82rem", color: "var(--mut)" }}>
                Or pay directly using Google Pay / PhonePe Mobile Number:
              </span>
              <CopyMobileButton phone="8943019251" layout="badge" size="md" />
            </div>
          </div>
        )}

        {/* Delivery Details Form */}
        <form onSubmit={handleSubmit} style={{ display: "grid", gap: "10px" }}>
          <div style={{ fontSize: "0.85rem", color: "var(--coffee)", fontWeight: 600, marginBottom: "2px" }}>
            Delivery Information:
          </div>

          {/* Name & Mobile No */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}>
            <div>
              <label htmlFor="checkout-name" className="sr-only">
                Full Name
              </label>
              <input
                id="checkout-name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                placeholder="Full Name *"
                required
                autoComplete="name"
              />
            </div>
            <div>
              <label htmlFor="checkout-mobile" className="sr-only">
                Mobile no
              </label>
              <input
                id="checkout-mobile"
                name="mobile"
                type="tel"
                value={formData.mobile}
                onChange={handleChange}
                placeholder="Mobile no (10-digits) *"
                required
                autoComplete="tel"
              />
            </div>
          </div>

          {/* Address */}
          <div>
            <label htmlFor="checkout-address" className="sr-only">
              Address
            </label>
            <textarea
              id="checkout-address"
              name="address"
              rows={2}
              value={formData.address}
              onChange={handleChange}
              placeholder="House name / Flat / Building / Street address *"
              required
              autoComplete="street-address"
            />
          </div>

          {/* PIN Code with Auto Fetch */}
          <div>
            <div style={{ position: "relative" }}>
              <label htmlFor="checkout-pin" className="sr-only">
                Pin
              </label>
              <input
                id="checkout-pin"
                name="pin"
                type="text"
                inputMode="numeric"
                maxLength={6}
                value={formData.pin}
                onChange={handlePinChange}
                placeholder="PIN Code (e.g. 676304 - auto-fetches location) *"
                required
                autoComplete="postal-code"
                style={{
                  paddingRight: isLoadingPin ? "40px" : "14px",
                }}
              />
              {isLoadingPin && (
                <span
                  style={{
                    position: "absolute",
                    right: "14px",
                    top: "50%",
                    transform: "translateY(-50%)",
                    fontSize: "0.85rem",
                    color: "var(--coffee)",
                  }}
                >
                  ⏳
                </span>
              )}
            </div>

            {/* PIN Detection Status Feedback */}
            {pinStatus && (
              <div
                style={{
                  fontSize: "0.78rem",
                  marginTop: "4px",
                  color: pinStatus.startsWith("✅") ? "var(--coffee-light)" : "var(--mut)",
                }}
              >
                {pinStatus}
              </div>
            )}
          </div>

          {/* Post Office (Changable using Selectbox or Manual Input) */}
          <div>
            <label
              htmlFor="checkout-post"
              style={{
                fontSize: "0.78rem",
                color: "var(--coffee)",
                display: "block",
                marginBottom: "3px",
                fontWeight: 600,
              }}
            >
              Post Office:
            </label>

            {availablePosts.length > 0 && !customPostMode ? (
              <div style={{ display: "flex", gap: "8px" }}>
                <select
                  id="checkout-post-select"
                  aria-label="Select Post Office"
                  value={formData.post}
                  onChange={handlePostSelect}
                  style={{ flex: 1 }}
                >
                  {availablePosts.map((p) => (
                    <option key={p} value={p}>
                      {p}
                    </option>
                  ))}
                  <option value="__custom__">✎ Other (Type manually)...</option>
                </select>
                <button
                  type="button"
                  onClick={() => setCustomPostMode(true)}
                  style={{
                    background: "none",
                    border: "1px solid rgba(200, 149, 89, 0.4)",
                    borderRadius: "8px",
                    color: "var(--coffee)",
                    fontSize: "0.8rem",
                    padding: "0 10px",
                    cursor: "pointer",
                  }}
                  title="Switch to typing manually"
                >
                  Manual
                </button>
              </div>
            ) : (
              <div style={{ display: "flex", gap: "8px" }}>
                <input
                  id="checkout-post"
                  name="post"
                  type="text"
                  value={formData.post}
                  onChange={handleChange}
                  placeholder="Post Office name *"
                  required
                  style={{ flex: 1 }}
                />
                {availablePosts.length > 0 && (
                  <button
                    type="button"
                    onClick={() => setCustomPostMode(false)}
                    style={{
                      background: "none",
                      border: "1px solid rgba(200, 149, 89, 0.4)",
                      borderRadius: "8px",
                      color: "var(--coffee)",
                      fontSize: "0.8rem",
                      padding: "0 10px",
                      cursor: "pointer",
                    }}
                  >
                    List
                  </button>
                )}
              </div>
            )}
          </div>

          {/* District & State (Both Changable using Selectbox) */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}>
            {/* District Selectbox */}
            <div>
              <label
                htmlFor="checkout-district-select"
                style={{
                  fontSize: "0.78rem",
                  color: "var(--coffee)",
                  display: "block",
                  marginBottom: "3px",
                  fontWeight: 600,
                }}
              >
                District:
              </label>

              {!customDistrictMode ? (
                <select
                  id="checkout-district-select"
                  name="district"
                  aria-label="Select District"
                  value={formData.district}
                  onChange={handleDistrictSelect}
                >
                  {districtList.map((d) => (
                    <option key={d} value={d}>
                      {d}
                    </option>
                  ))}
                </select>
              ) : (
                <div style={{ display: "flex", gap: "6px" }}>
                  <input
                    id="checkout-district"
                    name="district"
                    type="text"
                    value={formData.district}
                    onChange={handleChange}
                    placeholder="District name *"
                    required
                    style={{ flex: 1 }}
                  />
                  <button
                    type="button"
                    onClick={() => setCustomDistrictMode(false)}
                    style={{
                      background: "none",
                      border: "1px solid rgba(200, 149, 89, 0.4)",
                      borderRadius: "8px",
                      color: "var(--coffee)",
                      fontSize: "0.75rem",
                      padding: "0 8px",
                      cursor: "pointer",
                    }}
                  >
                    List
                  </button>
                </div>
              )}
            </div>

            {/* State Selectbox */}
            <div>
              <label
                htmlFor="checkout-state-select"
                style={{
                  fontSize: "0.78rem",
                  color: "var(--coffee)",
                  display: "block",
                  marginBottom: "3px",
                  fontWeight: 600,
                }}
              >
                State:
              </label>
              <select
                id="checkout-state-select"
                name="state"
                aria-label="Select State"
                value={formData.state}
                onChange={handleChange}
              >
                {INDIAN_STATES.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Validation Error Message */}
          {errorMsg && (
            <div
              style={{
                padding: "10px 14px",
                borderRadius: "8px",
                background: "rgba(235, 87, 87, 0.15)",
                border: "1px solid rgba(235, 87, 87, 0.4)",
                color: "#ff8080",
                fontSize: "0.85rem",
              }}
            >
              ⚠️ {errorMsg}
            </div>
          )}

          {/* Submit Button */}
          <button
            className="btn"
            type="submit"
            style={{
              width: "100%",
              marginTop: "6px",
              minHeight: "48px",
              fontSize: "1rem",
              fontWeight: 700,
            }}
          >
            Confirm &amp; Order on WhatsApp (₹{grandTotal})
          </button>

          {/* Direct Mobile Assistance & Copy */}
          <div
            style={{
              marginTop: "10px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "8px",
              flexWrap: "wrap",
              fontSize: "0.82rem",
              color: "var(--mut)",
              textAlign: "center",
            }}
          >
            <span>Need phone assistance or direct UPI?</span>
            <CopyMobileButton phone="8943019251" layout="badge" size="sm" />
          </div>
        </form>
      </div>
    </div>
  );
}
