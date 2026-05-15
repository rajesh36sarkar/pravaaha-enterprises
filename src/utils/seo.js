export function generateMetadata({ title, description, keywords = [] }) {
  return {
    metadataBase: new URL("https://thepravaaha.com"),
    title: title || "Pravaaha Digital",
    description: description || "Web & App Development Services",
    keywords: ["Pravaaha Digital", "web developer", "app development", "freelancer", ...keywords],
    icons: { icon: "/favicon-new.png", shortcut: "/favicon-new.png", apple: "/favicon-new.png" },
    openGraph: { title, description, url: "https://thepravaaha.com", siteName: "Pravaaha Digital", type: "website" },
    twitter: { card: "summary_large_image", title, description },
    robots: { index: true, follow: true },
  };
}

export function getPageKeywords(page) {
  const map = {
    home: ["custom websites", "app developer Kalna", "freelance web developer"],
    services: ["web development", "app development", "React developer", "Next.js developer"],
  };
  return map[page] || [];
}