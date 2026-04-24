import Hero from "@/components/Hero";
import Link from "next/link";
import { ArrowRight, Star, Heart, Award, Shield, ShoppingBag, Monitor, Sparkles } from "lucide-react";
import { generateMetadata, generateLocalBusinessSchema, getPageKeywords } from "@/utils/seo";

// SEO
export const metadata = generateMetadata({
  title: "Pravaaha Enterprises | Trusted Sarees & Digital Services",
  description:
    "Premium Bengal sarees under Akalpa brand and professional digital services by Rajesh Kumar Sarkar. Based in Kalna, West Bengal.",
  keywords: getPageKeywords("home"),
});

const brands = [
  {
    href: "/sarees",
    icon: ShoppingBag,
    title: "Akalpa by Pravaaha",
    desc: "Handpicked collection of traditional Bengal sarees. Each piece embodies craftsmanship, elegance, and heritage.",
    points: ["Premium Quality Weaves", "Handpicked Collection"],
    buttonText: "View Collection",
    badge: "🥻 Sarees",
    borderColor: "border-[#C58718]",
    iconBg: "bg-[#C58718]/10",
    iconColor: "text-[#C58718]",
    btnBg: "bg-[#C58718] hover:bg-[#F8D05F] hover:text-[#11120D]",
    accentGradient: "from-[#C58718] to-[#F8D05F]",
  },
  {
    href: "/digital",
    icon: Monitor,
    title: "Pravaaha Digital",
    desc: "Professional freelancing, YouTube content, and digital solutions tailored to your business needs.",
    points: ["Expert Services", "Reliable & Professional"],
    buttonText: "Explore Services",
    badge: "💻 Digital",
    borderColor: "border-[#11120D]",
    iconBg: "bg-[#11120D]/5",
    iconColor: "text-[#11120D]",
    btnBg: "bg-[#11120D] hover:bg-[#C58718]",
    accentGradient: "from-[#11120D] to-[#333]",
  },
];

const features = [
  {
    icon: Shield,
    title: "Trusted",
    desc: "Serving customers with honesty and integrity since day one",
    bg: "bg-[#C58718]/10",
    color: "text-[#C58718]",
  },
  {
    icon: Award,
    title: "Premium Quality",
    desc: "Every product and service meets our highest standards",
    bg: "bg-[#F8D05F]/20",
    color: "text-[#C58718]",
  },
  {
    icon: Heart,
    title: "Customer First",
    desc: "Your satisfaction is our priority, always",
    bg: "bg-red-50",
    color: "text-red-500",
  },
];

export default function Home() {
  const businessSchema = generateLocalBusinessSchema();

  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }}
      />

      <Hero />

      {/* Brands Section */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-[#C58718]/10 text-[#C58718] text-xs font-semibold rounded-full uppercase tracking-wider mb-4 border border-[#C58718]/20">
              <Sparkles className="w-3 h-3" />
              Our Ventures
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#11120D] mb-3">
              Two Brands, One Promise
            </h2>
            <p className="text-gray-500 leading-relaxed">
              Delivering quality and trust through our premium saree collection
              and professional digital services
            </p>
          </div>

          {/* Cards */}
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {brands.map((brand, i) => (
              <div
                key={i}
                className="group relative bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col"
              >
                {/* Accent Line */}
                <div className={`h-1 bg-gradient-to-r ${brand.accentGradient}`} />

                <div className="p-6 sm:p-8 flex flex-col flex-grow">
                  {/* Icon */}
                  <div
                    className={`w-14 h-14 ${brand.iconBg} rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <brand.icon className={`w-7 h-7 ${brand.iconColor}`} />
                  </div>

                  {/* Badge */}
                  <span className="text-xs text-gray-400 font-medium mb-2">
                    {brand.badge}
                  </span>

                  {/* Title */}
                  <h3 className="text-xl sm:text-2xl font-bold text-[#11120D] mb-3">
                    {brand.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-500 leading-relaxed mb-5 text-sm sm:text-base">
                    {brand.desc}
                  </p>

                  {/* Points */}
                  <ul className="space-y-2 mb-8 flex-grow">
                    {brand.points.map((point, j) => (
                      <li key={j} className="flex items-center gap-2.5 text-sm text-[#11120D]">
                        <Star className={`w-4 h-4 ${brand.iconColor} flex-shrink-0`} />
                        {point}
                      </li>
                    ))}
                  </ul>

                  {/* Button */}
                  <Link
                    href={brand.href}
                    className={`inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-300 shadow-md hover:shadow-lg ${brand.btnBg} text-white`}
                  >
                    {brand.buttonText}
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Features */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <span className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-[#C58718]/10 text-[#C58718] text-xs font-semibold rounded-full uppercase tracking-wider mb-4 border border-[#C58718]/20">
              Why Choose Us
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#11120D] mb-3">
              Built on Trust & Quality
            </h2>
            <p className="text-gray-500">
              We're committed to delivering the best experience for every customer
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-5">
            {features.map((item, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-2xl border border-gray-100 hover:shadow-md transition-all duration-300 text-center"
              >
                <div className={`w-12 h-12 ${item.bg} rounded-xl flex items-center justify-center mx-auto mb-3`}>
                  <item.icon className={`w-5 h-5 ${item.color}`} />
                </div>
                <h3 className="font-bold text-[#11120D] mb-1">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
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

        <div className="relative max-w-2xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Ready to Experience Quality?
          </h2>
          <p className="text-gray-400 mb-8 leading-relaxed">
            Whether you're looking for a beautiful saree or need digital
            expertise, we're here to serve you with trust and integrity.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/sarees"
              className="px-8 py-3.5 bg-[#C58718] text-white font-semibold rounded-xl hover:bg-[#F8D05F] hover:text-[#11120D] transition-all duration-300"
            >
              Browse Sarees
            </Link>
            <Link
              href="/contact"
              className="px-8 py-3.5 border border-gray-600 text-white font-semibold rounded-xl hover:border-[#C58718] hover:text-[#C58718] transition-all duration-300"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}