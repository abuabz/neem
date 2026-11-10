"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/why-neem", label: "Why Neem" },
  { href: "/guides", label: "Guides" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header>
      <div className="bar">
        <Link href="/" aria-label="Neem - Home" className="brand-logo">
          <Image
            src="/images/logo.png"
            alt="Neem - Premium Face Tissue Logo"
            width={120}
            height={42}
            priority
            style={{ height: "42px", width: "auto" }}
          />
        </Link>

        <nav id="nav" aria-label="Desktop Navigation">
          {NAV_LINKS.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={isActive ? "on" : ""}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <Link
          href="/products"
          className="btn"
          style={{
            minHeight: "38px",
            padding: "8px 20px",
            fontSize: "0.88rem",
            textDecoration: "none",
          }}
        >
          Buy Now
        </Link>
      </div>
    </header>
  );
}
