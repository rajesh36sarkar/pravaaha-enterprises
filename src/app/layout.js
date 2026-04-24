import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata = {
  title: "Pravaaha Enterprises | Trusted Sarees & Digital Services",
  description:
    "Pravaaha Enterprises - Premium Bengal sarees under Akalpa brand and professional digital services by Rajesh Kumar Sarkar. Based in Kalna, West Bengal.",
  keywords: [
    "Pravaaha Enterprises",
    "Akalpa sarees",
    "Bengal sarees",
    "digital services",
    "Kalna",
    "West Bengal",
  ],
  openGraph: {
    title: "Pravaaha Enterprises | Trusted Sarees & Digital Services",
    description: "Premium sarees and digital services from Kalna, West Bengal",
    url: "https://thepravaaha.com",
    siteName: "Pravaaha Enterprises",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}