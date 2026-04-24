// src/utils/seo.js

/**
 * SEO Utility for Pravaaha Enterprises
 * Use these functions across all pages for consistent SEO
 */

const siteConfig = {
  name: "Pravaaha Enterprises",
  url: "https://thepravaaha.com",
  ogImage: "/images/og-image.jpg",
  author: "Rajesh Kumar Sarkar",
  location: "Kalna, Purba Bardhaman, West Bengal – 713409",
  phone: "+91 XXXXXXXXXX",
  email: "contact@thepravaaha.com",
  sameAs: [
    "https://www.youtube.com/@pravaahadigital",
    "https://www.instagram.com/pravaaha",
    "https://www.facebook.com/pravaaha",
  ],
};

/**
 * Generate page metadata for Next.js App Router
 * @param {Object} props
 * @param {string} props.title - Page title
 * @param {string} props.description - Page description
 * @param {string} props.url - Page URL
 * @param {string} props.image - Open Graph image URL
 * @param {string} props.type - Page type (website, article, product)
 * @param {Array} props.keywords - Additional keywords
 * @returns {Object} Metadata object for Next.js
 */
export function generateMetadata({
  title,
  description,
  url = "",
  image = "",
  type = "website",
  keywords = [],
}) {
  const fullUrl = url ? `${siteConfig.url}${url}` : siteConfig.url;
  const ogImageUrl = image || siteConfig.ogImage;

  return {
    metadataBase: new URL(siteConfig.url),
    title: title || siteConfig.name,
    description:
      description ||
      "Pravaaha Enterprises - Premium Bengal sarees and professional digital services from Kalna, West Bengal.",
    keywords: [
      "Pravaaha Enterprises",
      "Akalpa sarees",
      "Bengal sarees",
      "Kalna sarees",
      "digital services",
      "freelancing",
      ...keywords,
    ],
    authors: [{ name: siteConfig.author }],
    creator: siteConfig.author,
    publisher: siteConfig.name,
    formatDetection: {
      email: false,
      address: true,
      telephone: true,
    },

    // Open Graph
    openGraph: {
      title: title || siteConfig.name,
      description:
        description ||
        "Premium sarees and digital services from Kalna, West Bengal",
      url: fullUrl,
      siteName: siteConfig.name,
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: title || siteConfig.name,
        },
      ],
      locale: "en_IN",
      type: type,
    },

    // Twitter Card
    twitter: {
      card: "summary_large_image",
      title: title || siteConfig.name,
      description:
        description ||
        "Premium sarees and digital services from Kalna, West Bengal",
      images: [ogImageUrl],
      creator: "@pravaaha",
    },

    // Robots
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },

    // Icons
    icons: {
      icon: "/favicon.png",
      shortcut: "/favicon.png",
      apple: "/favicon.png",
    },

    // Verification
    verification: {
      google: "YOUR_GOOGLE_VERIFICATION_CODE",
    },

    // Alternates
    alternates: {
      canonical: fullUrl,
    },
  };
}

/**
 * Generate Local Business JSON-LD Schema
 * @returns {Object} JSON-LD schema object
 */
export function generateLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Pravaaha Enterprises",
    alternateName: ["Akalpa by Pravaaha", "Pravaaha Digital"],
    url: siteConfig.url,
    logo: `${siteConfig.url}/favicon.png`,
    image: `${siteConfig.url}${siteConfig.ogImage}`,
    description:
      "Premium Bengal sarees under Akalpa brand and professional digital services including freelancing and YouTube content creation.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Shyamganj Para",
      addressLocality: "Kalna",
      addressRegion: "West Bengal",
      postalCode: "713409",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "23.2234",
      longitude: "88.3619",
    },
    telephone: siteConfig.phone,
    email: siteConfig.email,
    priceRange: "₹500 - ₹10,000",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "10:00",
        closes: "20:00",
      },
    ],
    founder: {
      "@type": "Person",
      name: siteConfig.author,
      jobTitle: "Proprietor",
    },
    sameAs: siteConfig.sameAs,
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Pravaaha Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Akalpa Sarees",
            description: "Premium traditional Bengal sarees",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Pravaaha Digital Services",
            description: "Freelancing, YouTube, and digital marketing",
          },
        },
      ],
    },
  };
}

/**
 * Generate Product JSON-LD Schema for Sarees
 * @param {Object} product - Product details
 * @returns {Object} JSON-LD schema object
 */
export function generateProductSchema(product) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description,
    image: product.image,
    brand: {
      "@type": "Brand",
      name: "Akalpa by Pravaaha",
    },
    manufacturer: {
      "@type": "Organization",
      name: "Pravaaha Enterprises",
    },
    offers: {
      "@type": "Offer",
      priceCurrency: "INR",
      price: product.price,
      availability: "https://schema.org/InStock",
      seller: {
        "@type": "Organization",
        name: "Pravaaha Enterprises",
      },
    },
  };
}

/**
 * Generate BreadcrumbList JSON-LD Schema
 * @param {Array} items - Array of {name, url} objects
 * @returns {Object} JSON-LD schema object
 */
export function generateBreadcrumbSchema(items) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url ? `${siteConfig.url}${item.url}` : siteConfig.url,
    })),
  };
}

/**
 * Generate FAQ JSON-LD Schema
 * @param {Array} faqs - Array of {question, answer} objects
 * @returns {Object} JSON-LD schema object
 */
export function generateFAQSchema(faqs) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

/**
 * Generate Organization JSON-LD Schema
 * @returns {Object} JSON-LD schema object
 */
export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
    logo: `${siteConfig.url}/favicon.png`,
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: siteConfig.phone,
        contactType: "customer service",
        availableLanguage: ["English", "Bengali", "Hindi"],
      },
    ],
    sameAs: siteConfig.sameAs,
    founder: {
      "@type": "Person",
      name: siteConfig.author,
    },
  };
}

/**
 * Get default keywords for pages
 * @param {string} page - Page name
 * @returns {Array} Array of keywords
 */
export function getPageKeywords(page) {
  const keywordMap = {
    home: [
      "Pravaaha Enterprises Kalna",
      "saree shop Kalna",
      "digital services West Bengal",
      "freelancer Kalna",
    ],
    sarees: [
      "Akalpa sarees",
      "Bengal sarees online",
      "traditional sarees Bengal",
      "Kantha stitch saree",
      "Baluchari saree price",
      "Tant cotton saree",
      "Jamdani saree",
      "Murshidabad silk saree",
    ],
    digital: [
      "Pravaaha Digital",
      "freelancing services",
      "YouTube content creator",
      "web developer Kalna",
      "digital marketing West Bengal",
      "MERN stack developer",
    ],
    about: [
      "about Pravaaha Enterprises",
      "Rajesh Kumar Sarkar",
      "saree business Kalna",
    ],
    contact: [
      "contact Pravaaha Enterprises",
      "saree shop near me Kalna",
      "digital services contact",
    ],
  };

  return keywordMap[page] || [];
}

export default siteConfig;