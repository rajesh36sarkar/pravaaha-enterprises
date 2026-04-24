import { MapPin, User, Briefcase, Award } from "lucide-react";

export const metadata = {
  title: "About | Pravaaha Enterprises",
  description: "Learn about Pravaaha Enterprises — proprietorship by Rajesh Kumar Sarkar in Kalna, WB.",
};

export default function AboutPage() {
  return (
    <>
      <section className="pt-28 pb-16 px-4 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-3xl mx-auto text-center animate-fade-up">
          <span className="inline-flex px-4 py-1.5 bg-[#C58718]/10 text-[#C58718] text-xs font-semibold rounded-full border border-[#C58718]/20 mb-4">About Us</span>
          <h1 className="text-4xl sm:text-5xl font-bold text-[#11120D] mb-3">Our Story</h1>
          <p className="text-gray-500">The journey of Pravaaha Enterprises</p>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto animate-fade-up">
          <div className="bg-white rounded-2xl border p-8 sm:p-10 shadow-sm">
            <h2 className="text-2xl font-bold text-[#11120D] mb-4">Pravaaha Enterprises</h2>
            <blockquote className="border-l-4 border-[#C58718] pl-4 py-2 mb-8 text-gray-600 italic">
              &ldquo;Pravaaha&rdquo; (প্রবাহ) means &ldquo;flow&rdquo; in Bengali — a continuous flow of quality, creativity & trust.
            </blockquote>
            <p className="text-gray-600 mb-8">
              A sole proprietorship by <strong>Rajesh Kumar Sarkar</strong>, based in Kalna, Purba Bardhaman, WB.
            </p>

            <h3 className="font-bold text-[#11120D] mb-4">Our Brands</h3>
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-5">
                <div className="text-2xl mb-2">🥻</div>
                <h4 className="font-bold">Akalpa by Pravaaha</h4>
                <p className="text-sm text-gray-600">Premium Bengal sarees — Kantha to Jamdani.</p>
              </div>
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-5">
                <div className="text-2xl mb-2">💻</div>
                <h4 className="font-bold">Pravaaha Digital</h4>
                <p className="text-sm text-gray-600">Freelancing, YouTube & web services.</p>
              </div>
            </div>

            <h3 className="font-bold text-[#11120D] mb-4">Business Details</h3>
            <div className="overflow-x-auto -mx-4 sm:mx-0">
              <table className="w-full text-sm">
                <tbody className="divide-y">
                  {[
                    [User, "Legal Name", "Rajesh Kumar Sarkar"],
                    [Briefcase, "Trade Name", "Pravaaha Enterprises"],
                    [Award, "Type", "Proprietorship"],
                    [MapPin, "Location", "Shyamganj Para, Kalna, WB – 713409"],
                  ].map(([Icon, l, v], i) => (
                    <tr key={i}>
                      <td className="py-3 pr-2 font-semibold whitespace-nowrap"><Icon className="w-4 h-4 inline mr-1 text-[#C58718]" />{l}</td>
                      <td className="py-3">{v}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}