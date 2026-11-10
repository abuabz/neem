export interface Guide {
  slug: string;
  title: string;
  headline: string;
  excerpt: string;
  publishDate: string;
  readingTime: string;
  author: string;
  keywords: string[];
  sections: {
    heading: string;
    body: string;
  }[];
}

export const GUIDES: Guide[] = [
  {
    slug: "why-tissue-bottles-are-the-ultimate-car-accessory",
    title: "Why Tissue Bottles Are the Ultimate Car Accessory",
    headline: "Say Goodbye to Crushed Paper Box Tissues on Your Car Seats",
    excerpt:
      "Automobile cup holders are designed for cylindrical bottles. Discover why switching from bulky cardboard tissue boxes to rigid cylinder bottles elevates vehicle cleanliness and driver comfort.",
    publishDate: "2026-10-15",
    readingTime: "4 min read",
    author: "Neem Editorial Team",
    keywords: [
      "car cup holder tissue bottle",
      "best car accessories India",
      "cylinder tissue box alternative",
      "car interior aesthetics",
      "spill proof car tissue",
    ],
    sections: [
      {
        heading: "The Flaws of Traditional Car Tissue Boxes",
        body: "For decades, car owners placed rectangular cardboard tissue boxes either on the rear parcel tray or loose on passenger seats. The moment you take a sharp turn or brake suddenly, the box slides across the car. Even worse, passengers step on them, pet claws shred them, and condensation from cold drinks or rain makes the cardboard soggy.",
      },
      {
        heading: "Engineered for Vehicle Cup Holders",
        body: "Neem face tissue cylinders are specifically engineered to fit all standard automobile cup holders (front center consoles, rear seat armrests, and door pockets). By sitting upright in a designated slot, the tissue bottle remains stable, rattle-free, and always within arm's reach of the driver.",
      },
      {
        heading: "Safer One-Hand Access While Driving",
        body: "When driving, your eyes must remain on the road. Fumbling for an elusive tissue box in the backseat or under passenger seats is a serious distraction. With Neem's rigid upright cylinder, you can effortlessly pull a single sheet with one hand without shifting your posture or losing road focus.",
      },
      {
        heading: "Executive Black and Copper Aesthetics",
        body: "Modern cars feature refined leather, carbon fiber, and brushed metallic interiors. A generic, brightly colored tissue box destroys the cabin vibe. Neem's executive black and copper leaf artwork complements premium vehicle interiors, from daily hatchbacks to luxury German sedans.",
      },
    ],
  },
  {
    slug: "how-to-refill-neem-face-tissue-bottle",
    title: "How to Easily Refill Your Neem Face Tissue Bottle",
    headline: "Reduce Waste with Reusable Cylinder Packaging",
    excerpt:
      "Don't discard your designer cylinder! Learn how our eco-friendly refill pack lets you replenish soft sheets in under 30 seconds while minimizing household waste.",
    publishDate: "2026-10-22",
    readingTime: "3 min read",
    author: "Neem Care Team",
    keywords: [
      "how to refill face tissue bottle",
      "reusable tissue container",
      "eco friendly face tissue Kerala",
      "refillable facial wipes",
    ],
    sections: [
      {
        heading: "Why Throw Away a Perfectly Durable Bottle?",
        body: "Most consumer packaging is designed for single-use disposal. Neem took a different approach: our cylinder bottles are made from sturdy, premium materials intended to be reused repeatedly across months and years.",
      },
      {
        heading: "The 30-Second Refill Procedure",
        body: "Step 1: Gently remove the bottom or top cap of your Neem bottle.\nStep 2: Unpack your Neem Refill Bundle (containing 60 pulls / 120 2-ply soft sheets).\nStep 3: Insert the cylindrical tissue stack into the bottle and thread the leading sheet through the pull dispenser.\nStep 4: Snap the cap securely back in place. Your bottle is fresh and ready for the road!",
      },
      {
        heading: "Economical and Eco-Conscious",
        body: "By choosing our 'Bottle + Refill' combo or purchasing dedicated refills, you save money per sheet and help eliminate unnecessary plastic and cardboard packaging waste.",
      },
    ],
  },
  {
    slug: "face-tissue-hygiene-for-daily-commuters-and-sensitive-skin",
    title: "Facial Tissue Hygiene: Why Commuters Need Dust-Free Tissues",
    headline: "Protecting Your Skin from Road Dust & Air Conditioning Dryness",
    excerpt:
      "Daily commutes expose facial skin to pollution, dust, and car AC dryness. Discover how 2-ply hypoallergenic tissues keep your skin refreshed throughout the day.",
    publishDate: "2026-11-01",
    readingTime: "5 min read",
    author: "Neem Wellness Team",
    keywords: [
      "hypoallergenic face tissue",
      "car AC dry skin relief",
      "sensitive skin facial wipes",
      "dust free face tissue",
      "Kerala wellness skincare",
    ],
    sections: [
      {
        heading: "The Hidden Impact of the Daily Commute",
        body: "Whether riding in air-conditioned cars or navigating bustling city traffic, your face encounters continuous environmental stress. Car air conditioning strips moisture from delicate facial skin, leading to midday tightness, while ambient urban air carries micro-dust particles and oils.",
      },
      {
        heading: "Why Cheap Tissues Cause More Harm Than Good",
        body: "Low-grade tissues often contain coarse recycled fibers and harsh bleaching agents that flake into microscopic paper dust. When wiping sweat or eye corners, this lint can clog pores or irritate contact lens wearers.",
      },
      {
        heading: "The Neem Standard: 100% Virgin 2-Ply Softness",
        body: "Neem tissues are crafted strictly from 100% virgin pulp fibers bonded into smooth 2-ply sheets. They deliver exceptional softness and high tensile strength, absorbing moisture without flaking, shredding, or irritating sensitive skin.",
      },
    ],
  },
];

export function getGuideBySlug(slug: string): Guide | undefined {
  return GUIDES.find((g) => g.slug === slug);
}

