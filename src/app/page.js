import Hero from "@/components/Hero";
import Link from "next/link";
import { ArrowRight, Star, Award, Shield, Heart, ShoppingBag, Monitor, Sparkles } from "lucide-react";
import { generateMetadata, getPageKeywords } from "@/utils/seo";

export const metadata = generateMetadata({
  title: "Pravaaha Enterprises | Trusted Sarees & Digital Services",
  description: "Premium Bengal sarees and professional digital services from Kalna, West Bengal.",
  keywords: getPageKeywords("home"),
});

const brands = [
  {
    href: "/sarees", icon: ShoppingBag, title: "Akalpa by Pravaaha",
    desc: "Handpicked Bengal sarees — Kantha, Baluchari, Tant, Jamdani. Craftsmanship meets elegance.",
    points: ["Premium Quality Weaves", "Handpicked Collection"],
    accent: "from-[#C58718] to-[#F8D05F]", btn: "bg-[#C58718] hover:bg-[#F8D05F] hover:text-[#11120D]",
  },
  {
    href: "/digital", icon: Monitor, title: "Pravaaha Digital",
    desc: "Freelancing, YouTube, web dev, and digital marketing tailored to your needs.",
    points: ["Expert Services", "Reliable & Professional"],
    accent: "from-[#11120D] to-[#333]", btn: "bg-[#11120D] hover:bg-[#C58718]",
  },
];

const features = [
  { icon: Shield, title: "Trusted", desc: "Honesty and integrity in every interaction", color: "text-[#C58718]", bg: "bg-[#C58718]/10" },
  { icon: Award, title: "Premium Quality", desc: "Highest standards across all products", color: "text-[#C58718]", bg: "bg-[#F8D05F]/20" },
  { icon: Heart, title: "Customer First", desc: "Your satisfaction is our priority", color: "text-red-500", bg: "bg-red-50" },
];

export default function Home() {
  return (
    <>
      <Hero />

      {/* Brands */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14 animate-fade-up">
            <span className="inline-flex items-center gap-1 px-4 py-1.5 bg-[#C58718]/10 text-[#C58718] text-xs font-semibold rounded-full border border-[#C58718]/20 mb-4">
              <Sparkles className="w-3 h-3" /> Our Ventures
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#11120D] mb-3">Two Brands, One Promise</h2>
            <p className="text-gray-500 max-w-xl mx-auto">Quality and trust through our saree collection and digital services</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8 stagger">
            {brands.map((b, i) => (
              <div key={i} className="group flex flex-col bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-xl trans-all">
                <div className={`h-1 bg-gradient-to-r ${b.accent}`} />
                <div className="p-6 sm:p-8 flex flex-col flex-grow">
                  <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 trans-all">
                    <b.icon className="w-6 h-6 text-[#11120D]" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#11120D] mb-2">{b.title}</h3>
                  <p className="text-gray-500 text-sm mb-4">{b.desc}</p>
                  <ul className="space-y-2 mb-8 flex-grow">
                    {b.points.map((p, j) => (
                      <li key={j} className="flex items-center gap-2 text-sm text-[#11120D]">
                        <Star className="w-4 h-4 text-[#C58718]" />{p}
                      </li>
                    ))}
                  </ul>
                  <Link href={b.href} className={`inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-white text-sm font-semibold trans-all ${b.btn}`}>
                    {b.href === "/sarees" ? "View Collection" : "Explore Services"} <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14 animate-fade-up">
            <span className="inline-flex items-center gap-1 px-4 py-1.5 bg-[#C58718]/10 text-[#C58718] text-xs font-semibold rounded-full border border-[#C58718]/20 mb-4">Why Choose Us</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#11120D] mb-3">Built on Trust & Quality</h2>
          </div>
          <div className="grid sm:grid-cols-3 gap-5 stagger">
            {features.map((f, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl border border-gray-100 text-center hover:shadow-md trans-all">
                <div className={`w-12 h-12 ${f.bg} rounded-xl flex items-center justify-center mx-auto mb-3`}>
                  <f.icon className={`w-5 h-5 ${f.color}`} />
                </div>
                <h3 className="font-bold text-[#11120D] mb-1">{f.title}</h3>
                <p className="text-gray-500 text-sm">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-[#11120D] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute -top-20 -right-20 w-80 h-80 bg-[#C58718] rounded-full blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-[#F8D05F] rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-2xl mx-auto text-center animate-fade-up">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Ready to Experience Quality?</h2>
          <p className="text-gray-400 mb-8">Beautiful sarees or digital expertise — we're here with trust and integrity.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/sarees" className="px-8 py-3.5 bg-[#C58718] text-white font-semibold rounded-xl hover:bg-[#F8D05F] hover:text-[#11120D] trans-all text-sm">Browse Sarees</Link>
            <Link href="/contact" className="px-8 py-3.5 border border-gray-600 text-white font-semibold rounded-xl hover:border-[#C58718] trans-all text-sm">Contact Us</Link>
          </div>
        </div>
      </section>
    </>
  );
}