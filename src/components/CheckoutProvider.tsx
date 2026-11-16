"use client";

import React, { createContext, useContext, useState } from "react";
import { Product } from "@/data/products";
import { siteConfig } from "@/lib/siteConfig";

export const STANDARD_DELIVERY_CHARGE = 30;

export interface DeliveryDetails {
  name: string;
  address: string;
  pin: string;
  post: string;
  district: string;
  state: string;
  mobile: string;
}

interface CheckoutContextType {
  isCheckoutOpen: boolean;
  selectedProduct: Product | null;
  quantity: number;
  openCheckout: (product: Product, initialQty?: number) => void;
  closeCheckout: () => void;
  setQuantity: (qty: number) => void;
  incrementQuantity: () => void;
  decrementQuantity: () => void;
  submitOrder: (details: DeliveryDetails) => void;
}

const CheckoutContext = createContext<CheckoutContextType | undefined>(undefined);

export function CheckoutProvider({ children }: { children: React.ReactNode }) {
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [quantity, setQuantityState] = useState<number>(1);

  const openCheckout = (product: Product, initialQty?: number) => {
    setSelectedProduct(product);
    const minQty = product.minQuantity || 1;
    setQuantityState(Math.max(minQty, initialQty ?? minQty));
    setIsCheckoutOpen(true);
  };

  const closeCheckout = () => {
    setIsCheckoutOpen(false);
  };

  const setQuantity = (qty: number) => {
    const minQty = selectedProduct?.minQuantity || 1;
    setQuantityState(Math.max(minQty, qty));
  };

  const incrementQuantity = () => {
    setQuantityState((prev) => prev + 1);
  };

  const decrementQuantity = () => {
    setQuantityState((prev) => {
      const minQty = selectedProduct?.minQuantity || 1;
      return Math.max(minQty, prev - 1);
    });
  };

  const submitOrder = (details: DeliveryDetails) => {
    if (!selectedProduct) return;

    // Save details to localStorage for future orders
    try {
      localStorage.setItem("neem_customer_profile", JSON.stringify(details));
    } catch {
      // Ignore storage errors
    }

    const isRefillPack = selectedProduct.id === "refill-pack";
    const itemSubtotal = isRefillPack
      ? (quantity <= 2 ? 119 : 119 + (quantity - 2) * (selectedProduct.additionalUnitPrice || 60))
      : selectedProduct.price * quantity;

    const deliveryFee =
      selectedProduct.deliveryFee !== undefined
        ? selectedProduct.deliveryFee
        : (selectedProduct.id === "combo4" || selectedProduct.price === 389 ? 0 : STANDARD_DELIVERY_CHARGE);

    const grandTotal = itemSubtotal + deliveryFee;
    const cleanPhone = siteConfig.phone.replace(/[^0-9]/g, "");

    const deliveryText =
      deliveryFee === 0 ? "FREE (Complimentary)" : `₹${deliveryFee}`;

    const qtyText = isRefillPack
      ? `${quantity} Packs (${quantity === 2 ? "2 Packs Min. Order" : `2 Packs + ${quantity - 2} Extra`})`
      : `${quantity} ${quantity === 1 ? "Pack" : "Packs"}`;

    const text =
      `🛍️ *NEW ORDER - NEEM FACE TISSUE*\n` +
      `─────────────────────────\n` +
      `*Product:* ${selectedProduct.name}\n` +
      `*Quantity:* ${qtyText}\n` +
      `*Items Subtotal:* ₹${itemSubtotal}\n` +
      `*Delivery Charge:* ${deliveryText}\n` +
      `*Total Amount:* ₹${grandTotal}\n\n` +
      `📦 *DELIVERY DETAILS*\n` +
      `─────────────────────────\n` +
      `*Name:* ${details.name.trim()}\n` +
      `*Mobile no:* ${details.mobile.trim()}\n` +
      `*Address:* ${details.address.trim()}\n` +
      `*Post:* ${details.post.trim()}\n` +
      `*Pin:* ${details.pin.trim()}\n` +
      `*District:* ${details.district.trim()}\n` +
      `*State:* ${details.state.trim()}\n` +
      `─────────────────────────\n` +
      `Please confirm my order and share delivery details!`;

    const url = `https://wa.me/${cleanPhone}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
    closeCheckout();
  };

  return (
    <CheckoutContext.Provider
      value={{
        isCheckoutOpen,
        selectedProduct,
        quantity,
        openCheckout,
        closeCheckout,
        setQuantity,
        incrementQuantity,
        decrementQuantity,
        submitOrder,
      }}
    >
      {children}
    </CheckoutContext.Provider>
  );
}

export function useCheckout() {
  const context = useContext(CheckoutContext);
  if (!context) {
    throw new Error("useCheckout must be used within a CheckoutProvider");
  }
  return context;
}
