"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const BOTTOM_LINKS = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Shop" },
  { href: "/why-neem", label: "Why" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function BottomNav() {
  const pathname = usePathname();

  return (
    <nav id="bn" aria-label="Mobile Navigation">
      {BOTTOM_LINKS.map((link) => {
        const isActive =
          link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
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
  );
}

