"use client";
import ContactForm from "@/components/ContactForm";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { motion } from "framer-motion";

export default function ContactPage() {
  return (
    <>
      <section className="pt-32 pb-16 px-4 bg-gradient-to-b from-blue-50 to-white">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl mx-auto text-center">
          <span className="inline-flex px-4 py-1.5 bg-[#C58718]/10 text-[#C58718] text-xs font-semibold rounded-full border border-[#C58718]/20 mb-4">Get In Touch</span>
          <h1 className="text-5xl sm:text-6xl font-bold text-[#11120D] mb-4">Contact Me</h1>
          <p className="text-gray-500">Have a project in mind? Let's discuss.</p>
        </motion.div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-12">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-[#11120D] mb-8">Contact Info</h2>
              <div className="space-y-6">
                {[
                  [MapPin, "bg-[#C58718]/10 text-[#C58718]", "Address", "Shyamganj Para, Kalna, WB – 713409"],
                  [Phone, "bg-green-100 text-green-600", "Phone", "+91 7363920402"],
                  [Mail, "bg-purple-100 text-purple-600", "Email", "contact@thepravaaha.com"],
                  [Clock, "bg-orange-100 text-orange-600", "Hours", "Mon–Sat: 10AM–8PM"],
                ].map(([Icon, cls, title, value], i) => (
                  <motion.div key={i} whileHover={{ x: 10 }} className="flex gap-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${cls}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#11120D]">{title}</h3>
                      <p className="text-gray-500 text-sm">{value}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="lg:col-span-3">
              <h2 className="text-2xl font-bold text-[#11120D] mb-8">Send a Message</h2>
              <div className="bg-white rounded-2xl border p-8 shadow-sm">
                <ContactForm />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-14 px-4 bg-gray-50">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#11120D] mb-3">Visit Me</h2>
          <p className="text-gray-500 mb-6">Kalna town, Purba Bardhaman</p>
          <div className="bg-gray-200 rounded-2xl h-80 flex items-center justify-center text-gray-400">📍 Google Maps Embed Here</div>
        </motion.div>
      </section>
    </>
  );
}