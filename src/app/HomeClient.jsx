"use client";

import Hero from "@/components/Hero";
import Link from "next/link";
import { Code, Smartphone, Palette, Gauge, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  { icon: Code, title: "Web Development", desc: "High‑performance websites with React, Next.js, and modern tech stacks." },
  { icon: Smartphone, title: "App Development", desc: "Native & cross‑platform mobile apps for iOS and Android." },
  { icon: Palette, title: "UI/UX Design", desc: "User‑centered design that looks great and converts visitors." },
  { icon: Gauge, title: "Performance Optimization", desc: "Speed audits, SEO, and optimization for Core Web Vitals." },
];

const container = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } };
const item = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } };

export default function HomeClient() {
  return (
    <>
      <Hero />

      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden"
      >
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <span className="inline-flex items-center gap-1 px-4 py-1.5 bg-[#C58718]/10 text-[#C58718] text-xs font-semibold rounded-full border border-[#C58718]/20 mb-4">
              Core Services
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold text-[#11120D] mb-3">What I Build</h2>
            <p className="text-gray-500 max-w-xl mx-auto">End‑to‑end development from concept to launch.</p>
          </motion.div>

          <motion.div variants={container} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((s, i) => (
              <motion.div key={i} variants={item} whileHover={{ y: -8, boxShadow: "0 20px 25px -5px rgba(0,0,0,0.1)" }} className="group relative bg-white rounded-2xl border border-gray-100 p-8 transition-shadow">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#C58718]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative z-10">
                  <motion.div whileHover={{ rotate: 10, scale: 1.1 }} className="w-14 h-14 bg-[#C58718]/10 rounded-xl flex items-center justify-center mb-6">
                    <s.icon className="w-7 h-7 text-[#C58718]" />
                  </motion.div>
                  <h3 className="text-xl font-bold text-[#11120D] mb-3">{s.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <div className="text-center mt-12">
            <Link href="/services" className="inline-flex items-center gap-2 text-[#C58718] font-semibold hover:text-[#F8D05F] transition-all">
              View all services <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
        <div className="absolute top-10 right-0 w-64 h-64 bg-[#F8D05F]/10 rounded-full blur-3xl" />
      </motion.section>

      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[#11120D] relative overflow-hidden"
      >
        <div className="absolute inset-0 opacity-30">
          <div className="absolute -top-20 -right-20 w-80 h-80 bg-[#C58718] rounded-full blur-3xl animate-float" />
          <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-[#F8D05F] rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        </div>
        <motion.div initial={{ y: 40, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="relative max-w-2xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">Ready to Start Your Project?</h2>
          <p className="text-gray-400 mb-10 text-lg">Let's discuss your idea and turn it into a powerful digital solution.</p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link href="/contact" className="inline-flex items-center px-10 py-4 bg-[#C58718] text-white font-bold rounded-xl hover:bg-[#F8D05F] hover:text-[#11120D] transition-all shadow-xl shadow-[#C58718]/20">
              Get in Touch
            </Link>
          </motion.div>
        </motion.div>
      </motion.section>
    </>
  );
}