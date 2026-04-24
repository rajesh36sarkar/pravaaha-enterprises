import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://thepravaaha.com"),
  title: {
    default: "Pravaaha Enterprises | Trusted Sarees & Digital Services",
    template: "%s | Pravaaha Enterprises",
  },
  description:
    "Premium Bengal sarees under Akalpa brand and professional digital services by Rajesh Kumar Sarkar. Based in Kalna, West Bengal.",
  icons: {
    icon: "/favicon-new.png",
    shortcut: "/favicon-new.png",
    apple: "/favicon-new.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-white text-[#11120D] antialiased flex flex-col min-h-screen">
        <Navbar />
        {/* Added pt-16 lg:pt-20 to prevent content from hiding under the fixed Navbar */}
        <main className="flex-grow pt-16 lg:pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}