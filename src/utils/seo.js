export function generateMetadata({ title, description, keywords = [] }) {
  return {
    metadataBase: new URL("https://thepravaaha.com"),
    title: title || "Pravaaha Digital",
    description: description || "Premium web & app development studio.",
    keywords: ["web development", "app development", "freelancer", "Next.js", ...keywords],
    icons: { icon: "/favicon-new.png", shortcut: "/favicon-new.png", apple: "/favicon-new.png" },
    openGraph: { title, description, url: "https://thepravaaha.com", siteName: "Pravaaha Digital", type: "website" },
    twitter: { card: "summary_large_image", title, description },
    robots: { index: true, follow: true },
  };
}

export function getPageKeywords(page) {
  const map = {
    home: ["custom websites", "app developer", "freelance web developer", "React developer"],
    services: ["web development services", "app development", "SaaS development"],
  };
  return map[page] || [];
}