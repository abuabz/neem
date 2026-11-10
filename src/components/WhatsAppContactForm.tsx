"use client";

import React, { useState } from "react";
import { siteConfig } from "@/lib/siteConfig";

export default function WhatsAppContactForm() {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;

    const text = `Hi Neem, I'm ${name}. Quantity: ${quantity.trim() || "-"}. ${message.trim()}`;
    const cleanPhone = siteConfig.phone.replace(/[^0-9]/g, "");
    const url = `https://wa.me/${cleanPhone}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
  };

  return (
    <form id="f" onSubmit={handleSubmit}>
      <label htmlFor="contact-name" className="sr-only">
        Your name
      </label>
      <input
        id="contact-name"
        type="text"
        placeholder="Your name"
        required
        aria-label="Your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        autoComplete="name"
      />

      <label htmlFor="contact-qty" className="sr-only">
        Quantity (bottles)
      </label>
      <input
        id="contact-qty"
        type="text"
        placeholder="Quantity (bottles)"
        inputMode="numeric"
        aria-label="Quantity (bottles)"
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
      />

      <label htmlFor="contact-msg" className="sr-only">
        Your message or delivery address
      </label>
      <textarea
        id="contact-msg"
        rows={4}
        placeholder="Your message or delivery address"
        aria-label="Message or delivery address"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />

      <button className="btn" type="submit">
        Send on WhatsApp
      </button>
    </form>
  );
}

