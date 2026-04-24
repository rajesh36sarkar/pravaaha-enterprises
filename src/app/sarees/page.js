import Link from "next/link";
import { Star, Award, Truck, Sparkles, ArrowRight } from "lucide-react";
import { generateMetadata, generateFAQSchema, getPageKeywords } from "@/utils/seo";

// SEO Metadata
export const metadata = generateMetadata({
  title: "Akalpa by Pravaaha | Premium Bengal Sarees Collection",
  description:
    "Discover exquisite Bengal sarees - Kantha, Baluchari, Tant, Jamdani. Handpicked quality, authentic weaves from Kalna.",
  keywords: getPageKeywords("sarees"),
});

const sareeCollection = [
  {
    id: 1,
    name: "Kantha Stitch Silk",
    category: "Silk",
    price: "₹2,499",
    description: "Hand-stitched Kantha work on pure silk, a timeless classic from Bengal.",
    gradient: "from-amber-50 to-yellow-100",
    badge: "Bestseller",
  },
  {
    id: 2,
    name: "Baluchari Heritage",
    category: "Silk",
    price: "₹4,999",
    description: "Intricate Baluchari weave depicting mythological scenes on rich silk.",
    gradient: "from-purple-50 to-violet-100",
  },
  {
    id: 3,
    name: "Tant Cotton Elegance",
    category: "Cotton",
    price: "₹899",
    description: "Lightweight Bengal Tant cotton saree, perfect for daily wear and summer days.",
    gradient: "from-emerald-50 to-teal-100",
  },
  {
    id: 4,
    name: "Jamdani Artisan",
    category: "Jamdani",
    price: "₹3,499",
    description: "Handwoven Jamdani with geometric patterns, a UNESCO heritage masterpiece.",
    gradient: "from-sky-50 to-blue-100",
    badge: "Heritage",
  },
  {
    id: 5,
    name: "Murshidabad Silk",
    category: "Silk",
    price: "₹5,999",
    description: "Royal Murshidabad silk saree with zari border, fit for special occasions.",
    gradient: "from-red-50 to-rose-100",
  },
  {
    id: 6,
    name: "Dhakai Delight",
    category: "Cotton",
    price: "₹1,499",
    description: "Fine Dhakai weave with delicate motifs, light as a breeze.",
    gradient: "from-orange-50 to-amber-100",
  },
];

const features = [
  {
    icon: Star,
    title: "Handpicked Quality",
    desc: "Each saree is personally selected for quality and craftsmanship",
  },
  {
    icon: Award,
    title: "Authentic Weaves",
    desc: "Direct from traditional weavers of Bengal",
  },
  {
    icon: Truck,
    title: "Fast Delivery",
    desc: "Quick and safe delivery across India",
  },
];

export default function SareesPage() {
  const faqSchema = generateFAQSchema([
    {
      question: "What types of sarees do you sell?",
      answer:
        "We sell premium Bengal sarees including Kantha Stitch Silk, Baluchari, Tant Cotton, Jamdani, Murshidabad Silk, and Dhakai weaves.",
    },
    {
      question: "Where are you located?",
      answer:
        "We are based in Kalna, Purba Bardhaman, West Bengal - 713409. We ship across India.",
    },
  ]);

  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Header */}
      <section className="relative pt-28 pb-16 px-4 bg-gradient-to-b from-[#F8D05F]/10 to-white">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-[#C58718]/10 text-[#C58718] text-xs font-semibold rounded-full uppercase tracking-wider mb-4 border border-[#C58718]/20">
            <Sparkles className="w-3.5 h-3.5" />
            Akalpa by Pravaaha
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#11120D] mb-4 leading-tight">
            Our Saree Collection
          </h1>
          <p className="text-base sm:text-lg text-gray-500 max-w-xl mx-auto leading-relaxed">
            Where tradition meets elegance. Handpicked collection of Bengal's
            finest sarees, crafted with love and heritage.
          </p>
        </div>
      </section>

      {/* Saree Grid */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {sareeCollection.map((saree) => (
              <article
                key={saree.id}
                className="group relative bg-white rounded-2xl border border-gray-100 overflow-hidden hover:border-[#C58718]/30 hover:shadow-xl transition-all duration-300 flex flex-col"
              >
                {/* Image / Gradient Placeholder */}
                <div
                  className={`relative h-56 bg-gradient-to-br ${saree.gradient} flex items-center justify-center overflow-hidden`}
                >
                  <span className="text-5xl opacity-30 group-hover:scale-110 transition-transform duration-500">
                    🥻
                  </span>

                  {/* Category Tag */}
                  <span className="absolute top-3 left-3 px-2.5 py-0.5 bg-white/90 backdrop-blur-sm text-[#11120D] text-[11px] font-medium rounded-full">
                    {saree.category}
                  </span>

                  {/* Badge */}
                  {saree.badge && (
                    <span className="absolute top-3 right-3 px-2.5 py-0.5 bg-[#C58718] text-white text-[10px] font-bold rounded-full uppercase tracking-wider">
                      {saree.badge}
                    </span>
                  )}
                </div>

                {/* Content */}
                <div className="p-5 flex flex-col flex-grow">
                  <h3 className="text-lg font-bold text-[#11120D] mb-1.5 group-hover:text-[#C58718] transition-colors">
                    {saree.name}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4 flex-grow">
                    {saree.description}
                  </p>

                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <span className="text-xl font-bold text-[#C58718]">
                      {saree.price}
                    </span>
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#11120D] text-white text-sm font-medium rounded-xl hover:bg-[#C58718] transition-all duration-300"
                    >
                      Inquire
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#11120D] text-center mb-10">
            Why Choose Akalpa?
          </h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {features.map((item, i) => (
              <div key={i} className="text-center p-6 bg-white rounded-2xl border border-gray-100 hover:shadow-md hover:border-[#F8D05F]/30 transition-all duration-300">
                <div className="w-12 h-12 bg-[#F8D05F]/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <item.icon className="w-5 h-5 text-[#C58718]" />
                </div>
                <h3 className="font-semibold text-[#11120D] mb-1">{item.title}</h3>
                <p className="text-gray-500 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}