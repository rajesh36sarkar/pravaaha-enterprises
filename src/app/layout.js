import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://thepravaaha.com"),
  title: {
    default: "Pravaaha Digital | Web & App Development",
    template: "%s | Pravaaha Digital",
  },
  description:
    "Professional web development, app development, and custom digital solutions by Rajesh Kumar Sarkar. Based in Kalna, WB.",
  icons: { icon: "/favicon-new.png", shortcut: "/favicon-new.png", apple: "/favicon-new.png" },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body 
        className="bg-white text-[#11120D] antialiased flex flex-col min-h-screen"
        suppressHydrationWarning
      >
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}