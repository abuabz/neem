import type { Metadata, Viewport } from "next";
import "./globals.css";
import { siteConfig } from "@/lib/siteConfig";
import { CheckoutProvider } from "@/components/CheckoutProvider";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BottomNav from "@/components/BottomNav";
import BuyNowModal from "@/components/BuyNowModal";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import LeavesBackground from "@/components/LeavesBackground";
import JsonLd from "@/components/JsonLd";

export const viewport: Viewport = {
  themeColor: "#0c0907",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Neem | Premium Face Tissue",
    template: "%s | Neem",
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [{ name: "Neem", url: siteConfig.url }],
  creator: "Neem",
  publisher: "Neem",
  category: "Personal Care",
  alternates: {
    canonical: "/",
  },
  manifest: "/manifest.webmanifest",
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: [{ url: "/icon.png" }],
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: "Neem | Premium Face Tissue",
    description: siteConfig.description,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: "Neem - Premium Face Tissue Bottles",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Neem | Premium Face Tissue",
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: siteConfig.verification.google || undefined,
    other: siteConfig.verification.bing
      ? { "msvalidate.01": siteConfig.verification.bing }
      : undefined,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    legalName: "Neem Tissue",
    url: siteConfig.url,
    logo: `${siteConfig.url}/images/logo.png`,
    description: siteConfig.description,
    sameAs: [siteConfig.instagram],
    address: {
      "@type": "PostalAddress",
      addressLocality: siteConfig.location.city,
      addressRegion: siteConfig.location.state,
      addressCountry: siteConfig.location.country,
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: `+${siteConfig.phone}`,
      contactType: "customer service",
      availableLanguage: ["English", "Malayalam"],
    },
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    inLanguage: "en-IN",
  };

  return (
    <html lang="en" style={{ backgroundColor: "#0c0907", color: "#f7efe4" }}>
      <head>
        <style
          dangerouslySetInnerHTML={{
            __html: `
              html, body {
                background-color: #0c0907 !important;
                color: #f7efe4 !important;
                font-family: "DM Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
                margin: 0;
              }
              a { color: inherit; text-decoration: none; }
            `,
          }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@600;700&family=DM+Sans:ital,opsz,wght@0,9..40,400..700;1,9..40,400..700&display=swap"
          rel="stylesheet"
        />
        <JsonLd data={[organizationSchema, websiteSchema]} />
      </head>
      <body
        style={{
          backgroundColor: "#0c0907",
          color: "#f7efe4",
          margin: 0,
          fontFamily:
            '"DM Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
        }}
      >
        <CheckoutProvider>
          <LeavesBackground />
          <Header />
          <main>{children}</main>
          <Footer />
          <BottomNav />
          <WhatsAppFloat />
          <BuyNowModal />
        </CheckoutProvider>
      </body>
    </html>
  );
}
