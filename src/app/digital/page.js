import Link from "next/link";
import { CodeXml, Monitor, PenTool, Camera, Headphones, TrendingUp } from "lucide-react";

export const metadata = {
  title: "Pravaaha Digital | Freelancing & YouTube Services",
  description: "Professional freelancing, YouTube content, web dev & digital marketing by Rajesh Kumar Sarkar.",
};

const services = [
  { icon: CodeXml, title: "Web Development", desc: "MERN stack, Next.js, modern web apps", bg: "bg-blue-50", text: "text-blue-600" },
  { icon: Monitor, title: "YouTube Content", desc: "Video creation, editing & channel growth", bg: "bg-red-50", text: "text-red-600" },
  { icon: PenTool, title: "Graphic Design", desc: "Branding, social media & marketing designs", bg: "bg-purple-50", text: "text-purple-600" },
  { icon: Camera, title: "Video Editing", desc: "Professional cuts, effects & color grading", bg: "bg-orange-50", text: "text-orange-600" },
  { icon: TrendingUp, title: "Digital Marketing", desc: "SEO, social media & online presence", bg: "bg-green-50", text: "text-green-600" },
  { icon: Headphones, title: "Tech Support", desc: "Remote troubleshooting & IT consultation", bg: "bg-teal-50", text: "text-teal-600" },
];

export default function DigitalPage() {
  return (
    <>
      <section className="pt-28 pb-16 px-4 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-3xl mx-auto text-center animate-fade-up">
          <span className="inline-flex items-center gap-1 px-4 py-1.5 bg-blue-100 text-blue-700 text-xs font-semibold rounded-full mb-4">💻 Pravaaha Digital</span>
          <h1 className="text-4xl sm:text-5xl font-bold text-[#11120D] mb-3">Digital Services</h1>
          <p className="text-gray-500 max-w-xl mx-auto mb-6">Freelancing & YouTube content by Rajesh Kumar Sarkar</p>
          <Link href="/contact" className="inline-flex px-6 py-3 bg-[#11120D] text-white font-semibold rounded-xl hover:bg-[#C58718] trans-all text-sm">Work With Me</Link>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-[#11120D] mb-10">Services I Offer</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 stagger">
            {services.map((s, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl border border-gray-100 hover:shadow-md trans-all">
                <div className={`w-12 h-12 ${s.bg} rounded-xl flex items-center justify-center mb-4`}>
                  <s.icon className={`w-6 h-6 ${s.text}`} />
                </div>
                <h3 className="font-bold text-[#11120D] mb-2">{s.title}</h3>
                <p className="text-gray-500 text-sm">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-gradient-to-r from-red-500 to-red-600">
        <div className="max-w-2xl mx-auto text-center">
          <span className="text-5xl block mb-4">▶️</span>
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">Subscribe to My Channel</h2>
          <p className="text-red-100 mb-6">Tech tutorials, coding tips, and digital content guides.</p>
          <a href="#" className="inline-flex px-8 py-3.5 bg-white text-red-600 font-bold rounded-xl hover:bg-red-50 trans-all text-sm">Visit Channel</a>
        </div>
      </section>
    </>
  );
}