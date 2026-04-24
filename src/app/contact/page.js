import ContactForm from "@/components/ContactForm";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export const metadata = {
  title: "Contact | Pravaaha Enterprises",
  description: "Get in touch with Pravaaha Enterprises, Kalna, West Bengal.",
};

export default function ContactPage() {
  return (
    <>
      <section className="pt-28 pb-16 px-4 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-3xl mx-auto text-center animate-fade-up">
          <span className="inline-flex px-4 py-1.5 bg-[#C58718]/10 text-[#C58718] text-xs font-semibold rounded-full border border-[#C58718]/20 mb-4">Get In Touch</span>
          <h1 className="text-4xl sm:text-5xl font-bold text-[#11120D] mb-3">Contact Us</h1>
          <p className="text-gray-500">We'd love to hear from you!</p>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-10">
            <div className="lg:col-span-2 animate-slide-right">
              <h2 className="text-xl font-bold text-[#11120D] mb-6">Contact Info</h2>
              <div className="space-y-4">
                {[
                  [MapPin, "bg-[#C58718]/10 text-[#C58718]", "Address", "Shyamganj Para, Kalna, WB – 713409"],
                  [Phone, "bg-green-100 text-green-600", "Phone", "+91 XXXXXXXXXX"],
                  [Mail, "bg-purple-100 text-purple-600", "Email", "contact@thepravaaha.com"],
                  [Clock, "bg-orange-100 text-orange-600", "Hours", "Mon–Sat: 10AM–8PM"],
                ].map(([Icon, cls, t, v], i) => (
                  <div key={i} className="flex gap-3">
                    <div className={`w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 ${cls}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-semibold text-sm text-[#11120D]">{t}</div>
                      <div className="text-sm text-gray-500">{v}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:col-span-3 animate-scale-in">
              <h2 className="text-xl font-bold text-[#11120D] mb-6">Send a Message</h2>
              <div className="bg-white rounded-2xl border p-6 sm:p-8">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-[#11120D] mb-2">Visit Us</h2>
          <p className="text-gray-500 mb-4">Located in Kalna town, Purba Bardhaman</p>
          <div className="bg-gray-200 rounded-2xl h-64 flex items-center justify-center text-gray-400">📍 Google Maps</div>
        </div>
      </section>
    </>
  );
}