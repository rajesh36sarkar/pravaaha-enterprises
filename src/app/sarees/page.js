import Link from "next/link";
import { Star, Award, Truck, Sparkles, ArrowRight } from "lucide-react";
import { generateMetadata, getPageKeywords } from "@/utils/seo";

export const metadata = generateMetadata({
  title: "Akalpa by Pravaaha | Premium Bengal Sarees",
  description: "Exquisite Bengal sarees — Kantha, Baluchari, Tant, Jamdani. Handpicked from Kalna.",
  keywords: getPageKeywords("sarees"),
});

const sarees = [
  { id: 1, name: "Kantha Stitch Silk", cat: "Silk", price: "₹2,499", desc: "Hand-stitched Kantha on pure silk. A Bengal classic.", grad: "from-pink-100 to-rose-200", badge: "Bestseller" },
  { id: 2, name: "Baluchari Heritage", cat: "Silk", price: "₹4,999", desc: "Mythological scenes woven on rich silk.", grad: "from-purple-100 to-violet-200" },
  { id: 3, name: "Tant Cotton Elegance", cat: "Cotton", price: "₹899", desc: "Lightweight daily wear with timeless charm.", grad: "from-emerald-100 to-teal-200" },
  { id: 4, name: "Jamdani Artisan", cat: "Jamdani", price: "₹3,499", desc: "UNESCO heritage geometric weave.", grad: "from-sky-100 to-blue-200", badge: "Heritage" },
  { id: 5, name: "Murshidabad Silk", cat: "Silk", price: "₹5,999", desc: "Royal silk with zari for special occasions.", grad: "from-red-100 to-rose-200" },
  { id: 6, name: "Dhakai Delight", cat: "Cotton", price: "₹1,499", desc: "Fine Dhakai weave, light as a breeze.", grad: "from-amber-100 to-orange-200" },
];

export default function SareesPage() {
  return (
    <>
      <section className="pt-28 pb-16 px-4 bg-gradient-to-b from-amber-50 to-white">
        <div className="max-w-3xl mx-auto text-center animate-fade-up">
          <span className="inline-flex items-center gap-1 px-4 py-1.5 bg-[#C58718]/10 text-[#C58718] text-xs font-semibold rounded-full border border-[#C58718]/20 mb-4">
            <Sparkles className="w-3 h-3" /> Akalpa by Pravaaha
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-[#11120D] mb-3">Our Saree Collection</h1>
          <p className="text-gray-500 max-w-xl mx-auto">Where tradition meets elegance. Handpicked from Bengal's finest weavers.</p>
        </div>
      </section>

      <section className="py-14 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 stagger">
            {sarees.map((s) => (
              <article key={s.id} className="group bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-xl trans-all flex flex-col">
                <div className={`relative h-52 bg-gradient-to-br ${s.grad} flex items-center justify-center`}>
                  <span className="text-5xl opacity-30 group-hover:scale-110 trans-all">🥻</span>
                  <span className="absolute top-3 left-3 px-2.5 py-0.5 bg-white/90 text-xs font-medium rounded-full">{s.cat}</span>
                  {s.badge && <span className="absolute top-3 right-3 px-2.5 py-0.5 bg-[#C58718] text-white text-xs font-bold rounded-full">{s.badge}</span>}
                </div>
                <div className="p-5 flex flex-col flex-grow">
                  <h3 className="font-bold text-[#11120D] mb-1 group-hover:text-[#C58718] trans-all">{s.name}</h3>
                  <p className="text-gray-500 text-sm mb-4 flex-grow">{s.desc}</p>
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <span className="text-xl font-bold text-[#C58718]">{s.price}</span>
                    <Link href="/contact" className="inline-flex items-center gap-1 px-4 py-2 bg-[#11120D] text-white text-sm rounded-xl hover:bg-[#C58718] trans-all">Inquire <ArrowRight className="w-3.5 h-3.5" /></Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-[#11120D] mb-10">Why Choose Akalpa?</h2>
          <div className="grid sm:grid-cols-3 gap-6 stagger">
            {[
              [Star, "Handpicked Quality", "Personally selected for craftsmanship"],
              [Award, "Authentic Weaves", "Direct from traditional Bengal weavers"],
              [Truck, "Fast Delivery", "Safe & quick delivery across India"],
            ].map(([Icon, t, d], i) => (
              <div key={i} className="bg-white p-6 rounded-2xl border text-center hover:shadow-md trans-all">
                <div className="w-12 h-12 bg-[#C58718]/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Icon className="w-5 h-5 text-[#C58718]" />
                </div>
                <h3 className="font-bold text-[#11120D] mb-1">{t}</h3>
                <p className="text-gray-500 text-sm">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}