"use client";

import React, { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { PRODUCTS } from "@/data/products";
import { useCheckout } from "./CheckoutProvider";

interface RefillVideoProps {
  layout?: "section" | "card" | "compact";
  title?: string;
  subtitle?: string;
}

export default function RefillVideo({
  layout = "section",
  title = "How to Refill in 30 Seconds",
  subtitle = "One bottle, multiple refills, less waste. Watch the official step-by-step reel from Neem.",
}: RefillVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const { openCheckout } = useCheckout();

  const refillProduct = PRODUCTS.find((p) => p.id === "refill") || PRODUCTS[2];

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Safely attempt autoplay
    const promise = video.play();
    if (promise !== undefined) {
      promise
        .then(() => setIsPlaying(true))
        .catch(() => {
          // Autoplay was restricted by browser; user can tap to play
          setIsPlaying(false);
        });
    }
  }, []);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      video.play().then(() => setIsPlaying(true)).catch(() => {});
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    const video = videoRef.current;
    if (!video) return;
    video.muted = !video.muted;
    setIsMuted(video.muted);
    if (video.paused) {
      video.play().then(() => setIsPlaying(true)).catch(() => {});
    }
  };

  const videoPlayerNode = (
    <div
      className="refill-video-container"
      onClick={togglePlay}
      role="region"
      aria-label="How to refill Neem face tissue bottle video reel"
    >
      <video
        ref={videoRef}
        src="/videos/how-to-refill.mp4"
        poster="/images/bottleandrefile.jpeg"
        autoPlay
        loop
        muted={isMuted}
        playsInline
        preload="metadata"
        className="refill-video-element"
      />

      {/* Floating Instagram & Live Badge */}
      <div className="refill-video-badge">
        <span className="refill-video-pulse" />
        <span>Watch Reel</span>
      </div>

      {/* Top Overlay Link to Instagram */}
      <a
        href="https://www.instagram.com/reel/DcnoG0XNFZ1/"
        target="_blank"
        rel="noopener noreferrer"
        className="refill-video-ig-link"
        onClick={(e) => e.stopPropagation()}
        aria-label="Open reel on Instagram"
      >
        <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
        <span>@neem_tissue</span>
      </a>

      {/* Center Play/Pause Overlay indicator when paused */}
      {!isPlaying && (
        <div className="refill-video-play-indicator" aria-hidden="true">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
      )}

      {/* Bottom Controls Bar */}
      <div className="refill-video-controls">
        <button
          type="button"
          onClick={toggleMute}
          className="refill-video-sound-btn"
          aria-label={isMuted ? "Tap to unmute video audio" : "Mute video audio"}
        >
          {isMuted ? (
            <>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M11 5L6 9H2v6h4l5 4V5z" />
                <line x1="23" y1="9" x2="17" y2="15" />
                <line x1="17" y1="9" x2="23" y2="15" />
              </svg>
              <span>Tap for sound</span>
            </>
          ) : (
            <>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M11 5L6 9H2v6h4l5 4V5z" />
                <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07" />
              </svg>
              <span>Sound On</span>
            </>
          )}
        </button>
      </div>
    </div>
  );

  if (layout === "compact") {
    return (
      <div className="refill-video-compact-wrap">
        <div style={{ marginBottom: "12px" }}>
          <span className="eyebrow" style={{ margin: 0 }}>Official Video</span>
          <h3 style={{ margin: "4px 0 0", fontSize: "1.2rem", color: "var(--cream)" }}>
            {title}
          </h3>
        </div>
        {videoPlayerNode}
      </div>
    );
  }

  return (
    <section id="refill-video" className="refill-section rv" aria-labelledby="refill-video-title">
      <div className="refill-section-grid">
        {/* Left: Video Reel */}
        <div className="refill-video-column">{videoPlayerNode}</div>

        {/* Right: Steps & Buy Button */}
        <div className="refill-content-column">
          <div className="eyebrow">Eco-Conscious &amp; Reusable</div>
          <h2 id="refill-video-title">{title}</h2>
          <p style={{ color: "var(--mut)", fontSize: "1.05rem", lineHeight: 1.6, margin: "10px 0 22px" }}>
            {subtitle}
          </p>

          <ol className="refill-steps-list">
            <li>
              <span className="step-num">1</span>
              <div>
                <strong>Remove the cap</strong>
                <p>Twist or gently pull off the bottom or top cap of your Neem cylinder.</p>
              </div>
            </li>
            <li>
              <span className="step-num">2</span>
              <div>
                <strong>Unpack the refill pack</strong>
                <p>Open your compact Neem refill bundle (60 pulls / 120 2-ply soft sheets).</p>
              </div>
            </li>
            <li>
              <span className="step-num">3</span>
              <div>
                <strong>Slide in &amp; thread the sheet</strong>
                <p>Slide the tissue cylinder in and pull the first sheet through the dispenser.</p>
              </div>
            </li>
            <li>
              <span className="step-num">4</span>
              <div>
                <strong>Snap shut &amp; travel</strong>
                <p>Snap the cap back on securely. Your bottle is fresh, refillable, and ready.</p>
              </div>
            </li>
          </ol>

          <div className="row" style={{ marginTop: "24px", gap: "12px", flexWrap: "wrap" }}>
            <button
              type="button"
              className="btn"
              onClick={() => openCheckout(refillProduct)}
              aria-label="Order 1 Bottle plus 1 Refill pack for ₹149"
            >
              Order Bottle + Refill (₹149)
            </button>
            <Link href="/guides/how-to-refill-neem-face-tissue-bottle" className="btn alt">
              Read Step Guide &rarr;
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

