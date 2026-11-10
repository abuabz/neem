export interface Product {
  id: string;
  slug: string;
  name: string;
  headline: string;
  price: number;
  currency: string;
  shortDesc: string;
  fullDesc: string;
  image: string;
  imageWidth: number;
  imageHeight: number;
  tag?: string;
  features: string[];
  inStock: boolean;
  sku: string;
  pulls: number;
  sheets: number;
  ratingValue: number;
  reviewCount: number;
}

export const PRODUCTS: Product[] = [
  {
    id: "single",
    slug: "single-bottle",
    name: "Single Bottle",
    headline: "1 Premium Tissue Bottle",
    price: 99,
    currency: "INR",
    shortDesc: "1 premium tissue bottle",
    fullDesc:
      "The signature Neem single cylinder face tissue bottle. Contains 60 pulls (120 sheets of 2-ply ultra-soft tissue). Crafted with signature copper and black leaf packaging that looks stunning on car cup holders, office desks, dining tables, and vanity counters.",
    image: "/images/oneproduct.jpeg",
    imageWidth: 1200,
    imageHeight: 1600,
    tag: undefined,
    features: [
      "60 pulls / 120 2-ply ultra soft sheets",
      "Fits all standard vehicle cup holders",
      "Hygienic dust-proof pull dispenser",
      "Neem-inspired nature-safe formulation",
      "Elegant black and warm gold leaf design",
    ],
    inStock: true,
    sku: "NEEM-BTL-01",
    pulls: 60,
    sheets: 120,
    ratingValue: 4.9,
    reviewCount: 142,
  },
  {
    id: "duo",
    slug: "duo-combo",
    name: "Duo Combo",
    headline: "2 Premium Tissue Bottles",
    price: 189,
    currency: "INR",
    shortDesc: "2 bottles",
    fullDesc:
      "Two premium Neem face tissue cylinders. Keep one inside your car and one on your workstation or living room table. Experience daily luxury, hygiene, and instant access to soft tissues wherever you go.",
    image: "/images/twocombo.jpeg",
    imageWidth: 1086,
    imageHeight: 1448,
    tag: "Popular",
    features: [
      "2 Bottles (120 pulls / 240 sheets total)",
      "Ideal setup for car + office or car + bedroom",
      "Save on unit price and bundled delivery",
      "Ultra-soft lint-free facial wipes",
      "Refined aesthetic that elevates any interior",
    ],
    inStock: true,
    sku: "NEEM-BTL-02",
    pulls: 120,
    sheets: 240,
    ratingValue: 4.9,
    reviewCount: 98,
  },
  {
    id: "refill",
    slug: "bottle-plus-refill",
    name: "Bottle + Refill",
    headline: "1 Bottle + 1 Refill Pack",
    price: 149,
    currency: "INR",
    shortDesc: "1 bottle and 1 refill pack",
    fullDesc:
      "The eco-conscious choice: 1 reusable designer tissue bottle plus 1 soft tissue refill pack. Once you finish your initial cylinder, reload it easily while reducing container waste and saving money.",
    image: "/images/bottleandrefile.jpeg",
    imageWidth: 1200,
    imageHeight: 1600,
    tag: "Eco Choice",
    features: [
      "1 reusable designer bottle + 1 refill bundle",
      "Eco-conscious and waste-reducing design",
      "Easy quick-reload mechanism",
      "Same ultra-gentle skin-friendly sheets",
      "Most economical refill option",
    ],
    inStock: true,
    sku: "NEEM-BTL-RF1",
    pulls: 120,
    sheets: 240,
    ratingValue: 5.0,
    reviewCount: 76,
  },
  {
    id: "combo4",
    slug: "4-bottle-combo",
    name: "4 Bottle Combo",
    headline: "4 Bottles with Free Delivery",
    price: 389,
    currency: "INR",
    shortDesc: "4 bottles, free delivery",
    fullDesc:
      "The ultimate value set! 4 premium face tissue bottles with complimentary free doorstep delivery. Equip every car in the family, the office conference room, and home living spaces with pristine Neem tissues.",
    image: "/images/fourcombo.jpeg",
    imageWidth: 1086,
    imageHeight: 1448,
    tag: "Free delivery",
    features: [
      "4 Full bottles (240 pulls / 480 sheets total)",
      "100% Free doorstep delivery across Kerala & India",
      "Maximum value per sheet",
      "Perfect gift for car owners and modern homes",
      "Long-lasting premium stock",
    ],
    inStock: true,
    sku: "NEEM-BTL-04",
    pulls: 240,
    sheets: 480,
    ratingValue: 5.0,
    reviewCount: 215,
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return PRODUCTS.find((p) => p.slug === slug || p.id === slug);
}

export const FAQS = [
  {
    question: "What makes Neem face tissue bottles better than regular box tissues?",
    answer:
      "Unlike bulky rectangular paper boxes that crush under car seats or soak up water spills, Neem tissues come in a rigid, cylindrical bottle designed to fit into car cup holders, backpack pockets, and modern desks. It stays pristine and serves as a stylish interior decor piece.",
  },
  {
    question: "How many sheets and pulls are in each bottle?",
    answer:
      "Each Neem cylinder bottle holds 60 pulls, which equals 120 sheets of 2-ply premium ultra-soft facial tissue.",
  },
  {
    question: "Does the bottle fit all car cup holders?",
    answer:
      "Yes! Neem bottles are engineered to fit virtually every automotive cup holder (front center consoles, rear armrests, and door bottle pockets).",
  },
  {
    question: "Can I refill the Neem bottle once it is finished?",
    answer:
      "Yes, we offer our 'Bottle + Refill' combo pack specifically for easy refilling so you can reuse the cylinder bottle and minimize waste.",
  },
  {
    question: "Where is Neem manufactured and based?",
    answer:
      "Neem is proudly based in Vengara, Malappuram district, Kerala, India, drawing inspiration from natural wellness and everyday elegance.",
  },
  {
    question: "How does ordering through WhatsApp work?",
    answer:
      "Simply add your desired packs to your cart or submit our order form. It generates a pre-formatted WhatsApp message with your items, address, and total amount. Our team confirms your order and dispatches it promptly.",
  },
];

export const TESTIMONIALS = [
  {
    name: "Varis AK",
    location: "Vengara, Kerala",
    review: "Fits into my Honda City cup holder like a glove. Looks super premium with the black and gold leaf design.",
    rating: 5,
  },
  {
    name: "Dr. Shifa",
    location: "Calicut, Kerala",
    review: "Much softer than regular supermarket tissues and doesn't leave any lint on glasses or face. Truly gentle on skin.",
    rating: 5,
  },
  {
    name: "Rahul M.",
    location: "Bengaluru, Karnataka",
    review: "Ordered the 4 bottle combo with free delivery. Kept two in the cars and two at the office. Everyone asks where I got them!",
    rating: 5,
  },
  {
    name: "Fathima Z.",
    location: "Malappuram, Kerala",
    review: "The refill option is genius. Sustainable, economical, and the bottle is durable enough to last for years.",
    rating: 5,
  },
];

