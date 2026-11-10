# Neem | Premium Face Tissue (Next.js SEO Edition)

A high-performance, maximum-SEO Next.js application converted from `neem.html`, designed for **Neem Premium Face Tissue** (crafted in Vengara, Kerala, India), styled in an executive **Black & Coffee Brown** luxury palette.

---

## 🚀 SEO & Performance Architecture

This project has been engineered specifically for **Maximum Search Engine Optimization (SEO)** and **Core Web Vitals** performance:

1. **Server-Side Rendered & Static Generation (SSG / SSR)**
   - All pages and dynamic product detail pages (`/products/single-bottle`, `/products/duo-combo`, etc.) are pre-rendered into clean semantic HTML at build time so search crawlers (Googlebot, Bingbot) immediately index all text, headings, and images without JavaScript execution delays.

2. **Structured Data & JSON-LD Schemas**
   - **`Organization` Schema**: Details brand name, logo, Kerala address, contact points, and official Instagram handle.
   - **`WebSite` Schema**: Establishes site entity and language.
   - **`Product` & `Offer` Schemas**: Individual product pricing in INR, availability (`InStock`), ratings, SKUs, and specifications.
   - **`ItemList` Schema**: Structured product collections on catalog pages.
   - **`BreadcrumbList` Schema**: Hierarchical trail (`Home > Products > [Product]`) for Google SERP breadcrumbs.
   - **`FAQPage` Schema**: Interactive FAQs ready to trigger rich expandable answer snippets directly in Google search results.
   - **`LocalBusiness` Schema**: Local SEO targeting Vengara, Malappuram, and Kerala personal care buyers.

3. **OpenGraph & Twitter Card Meta Tags**
   - Pre-configured OpenGraph (`og:title`, `og:description`, `og:image`, `og:url`, `og:type`) and Twitter Large Card tags on every route.
   - High-resolution 1200x630 social preview card generated at [`/public/images/og-image.png`](/public/images/og-image.png).

4. **Dynamic XML Sitemap & Robots.txt**
   - [`/sitemap.xml`](/sitemap.xml) is dynamically generated via `src/app/sitemap.ts` with change frequencies and priorities (1.0 for home, 0.9 for products, 0.85 for PDPs).
   - [`/robots.txt`](/robots.txt) is dynamically generated via `src/app/robots.ts` with sitemap referencing.

5. **PWA & Mobile Search Readiness**
   - Includes [`/manifest.webmanifest`](/manifest.webmanifest) for mobile installability and rich search badges.
   - Responsive mobile thumb-navigation bottom bar alongside desktop sticky header.

6. **Core Web Vitals & Image Optimization**
   - Uses `next/image` with AVIF and WebP auto-conversion, explicit sizing, and priority loading for above-the-fold assets (zero Cumulative Layout Shift).

---

## 🛍️ Features & Functionality

- **Delivery Pricing**:
  - **4 Bottle Combo (₹389)**: **100% FREE Doorstep Delivery** (₹0 delivery charge).
  - **Other Packs (Single, Duo, Refill)**: Flat ₹30 delivery fee automatically applied.
- **UPI QR Code Payment**: The Single Bottle pack features an embedded Google Pay / UPI QR Code (`/images/qr-code.jpg`) for instant scan-and-pay.
- **Direct "Buy Now" Checkout**: Streamlined instant order modal opening directly on any product click.
- **PIN Code Auto-Location Fetching**: Entering a 6-digit PIN code automatically fetches the Post Office, District, and State via Postal API.
- **Selectbox Customization**: Post offices, districts, and Indian states are populated in styled selectboxes and can be freely switched or manually entered.
- **Delivery Data Collection**: Collects customer Name, Mobile no, Address, Post, Pin, District, and State with automatic localStorage persistence.
- **WhatsApp Direct Order Generation**: Pre-formats a structured order message ready to send with 1 click:
  - Product Name & Quantity
  - Total Payable
  - Full delivery address and contact details
- **Interactive WhatsApp Contact Form**: For customer inquiries and quantity requests.
- **Dedicated Product Detail Pages (PDP)**:
  - Single Bottle (₹99)
  - Duo Combo (₹189)
  - Bottle + Refill Pack (₹149)
  - 4 Bottle Family Pack with Free Delivery (₹389)
- **Falling Leaves Background**: Subtle animated leaf background matching brand aesthetics, with full `prefers-reduced-motion` accessibility support.

---

## 📂 Project Structure

```
neem/
├── public/
│   ├── favicon.svg              # Leaf logo vector icon
│   ├── icon.png                 # App icon
│   ├── images/
│   │   ├── logo.png             # Extracted brand logo
│   │   ├── product-single.jpeg  # Single bottle photo
│   │   ├── product-duo.jpeg     # Duo combo photo
│   │   ├── product-refill.jpeg  # Bottle + refill photo
│   │   ├── product-combo4.jpeg  # 4-bottle combo photo
│   │   └── og-image.png         # 1200x630 social preview image
├── src/
│   ├── app/
│   │   ├── layout.tsx           # Global layout, fonts & root SEO schemas
│   │   ├── globals.css          # Dark green & gold aesthetic styles
│   │   ├── page.tsx             # Home landing page with FAQ & schemas
│   │   ├── products/
│   │   │   ├── page.tsx         # Products catalog page
│   │   │   └── [slug]/
│   │   │       ├── page.tsx     # Dynamic SSG Product Detail Page
│   │   │       └── AddToCartDetailButton.tsx
│   │   ├── why-neem/page.tsx    # SEO landing page (Neem vs Box tissue)
│   │   ├── about/page.tsx       # Brand story & Kerala heritage
│   │   ├── contact/page.tsx     # Contact & wholesale inquiries
│   │   ├── sitemap.ts           # Dynamic XML sitemap
│   │   ├── robots.ts            # Dynamic robots.txt
│   │   └── manifest.ts          # PWA Web manifest
│   ├── components/
│   │   ├── Header.tsx           # Sticky desktop navigation with direct CTA
│   │   ├── Footer.tsx           # SEO footer with internal links & Instagram
│   │   ├── BottomNav.tsx        # Mobile bottom tab bar
│   │   ├── BuyNowModal.tsx      # Direct checkout modal collecting delivery details
│   │   ├── CheckoutProvider.tsx # Checkout state management & localStorage profile
│   │   ├── ProductCard.tsx      # Reusable SEO product card with Buy Now trigger
│   │   ├── WhatsAppContactForm.tsx
│   │   ├── FaqAccordion.tsx     # Accessible FAQ accordion
│   │   ├── LeavesBackground.tsx # Signature falling leaf animation
│   │   ├── Toast.tsx            # Alert notification
│   │   └── JsonLd.tsx           # Structured data script tag injector
│   ├── data/
│   │   └── products.ts          # Catalog data, specs & FAQs
│   └── lib/
│       └── siteConfig.ts        # Site metadata, phone, and Instagram config
├── .env.example
├── .env.local
├── next.config.mjs
├── tsconfig.json
└── package.json
```

---

## ⚙️ Configuration

Set your WhatsApp phone number and canonical site URL in `.env.local`:

```bash
# Country code + number without plus sign or spaces (e.g. 919876543210)
NEXT_PUBLIC_WHATSAPP_PHONE=91XXXXXXXXXX

# Production Canonical Site URL
NEXT_PUBLIC_SITE_URL=https://neemtissue.in
```

---

## 🛠️ Development & Deployment

### 1. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 2. Build for Production
```bash
npm run build
```
This pre-renders all 15 static pages, generates the XML sitemap, robots.txt, and optimizes assets.

### 3. Start Production Server
```bash
npm start
```

### 4. Deploy to Vercel (Recommended)
1. Push this repository to GitHub or GitLab.
2. Import the repository in [Vercel](https://vercel.com).
3. Set the environment variable `NEXT_PUBLIC_WHATSAPP_PHONE` and `NEXT_PUBLIC_SITE_URL`.
4. Deploy! Vercel will automatically host the static pages with global CDN edge caching.

