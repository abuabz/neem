import React from "react";
import Link from "next/link";

export default function NotFound() {
  return (
    <section style={{ textAlign: "center", padding: "80px 20px" }}>
      <div className="eyebrow">404 Error</div>
      <h1 style={{ fontSize: "clamp(3rem, 7vw, 5rem)" }}>Page Not Found</h1>
      <p style={{ margin: "16px auto 28px", maxWidth: "480px" }}>
        The page you are looking for doesn&apos;t exist or has been moved. Explore our premium face tissue collection instead.
      </p>
      <Link href="/" className="btn">
        Return Home
      </Link>
    </section>
  );
}

