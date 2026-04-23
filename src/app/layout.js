import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata = {
  title: "Pravaaha Enterprises | Sarees & Digital Services",
  description:
    "Pravaaha Enterprises - Your destination for premium sarees under Akalpa brand and professional digital services. Based in Kalna, West Bengal.",
  keywords: [
    "sarees",
    "Kalna sarees",
    "Akalpa by Pravaaha",
    "Pravaaha Digital",
    "Bengal sarees",
  ],
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