"use client";
import Link from "next/link";
import { Code, Smartphone, Palette, Gauge, Layers, Server, Shield, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function ServicesPage() {
  const services = [
    { icon: Code, title: "Web Development", desc: "Custom websites, web apps, and e‑commerce solutions. I use React, Next.js, Node.js, and more.", bg: "bg-blue-50", text: "text-blue-600" },
    { icon: Smartphone, title: "App Development", desc: "Cross‑platform mobile apps with React Native, Flutter, or native iOS/Android. Performance‑first approach.", bg: "bg-green-50", text: "text-green-600" },
    { icon: Layers, title: "Full‑Stack Development", desc: "End‑to‑end solutions: frontend, backend, databases, and cloud deployment.", bg: "bg-purple-50", text: "text-purple-600" },
    { icon: Palette, title: "UI/UX Design", desc: "Figma designs, prototyping, and user research to create delightful digital experiences.", bg: "bg-pink-50", text: "text-pink-600" },
    { icon: Gauge, title: "Performance Tuning", desc: "Audits, Core Web Vitals optimization, and speed improvements for existing apps.", bg: "bg-orange-50", text: "text-orange-600" },
    { icon: Shield, title: "Maintenance & Support", desc: "Ongoing technical support, updates, and security monitoring for your digital products.", bg: "bg-teal-50", text: "text-teal-600" },
  ];

  const container = { hidden: {}, visible: { transition: { staggerChildren: 0.08 } } };
  const item = { hidden: { opacity: 0, scale: 0.9 }, visible: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 100 } } };

  return (
    <>
      <section className="pt-32 pb-16 px-4 bg-gradient-to-b from-gray-50 to-white">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-3xl mx-auto text-center">
          <span className="inline-flex items-center gap-1 px-4 py-1.5 bg-[#C58718]/10 text-[#C58718] text-xs font-semibold rounded-full border border-[#C58718]/20 mb-4">
            All Services
          </span>
          <h1 className="text-5xl sm:text-6xl font-bold text-[#11120D] mb-4">What I Can Do For You</h1>
          <p className="text-gray-500 max-w-xl mx-auto mb-8">
            I specialize in building robust digital products – from simple websites to complex web and mobile applications.
          </p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link href="/contact" className="inline-flex px-8 py-4 bg-[#11120D] text-white font-semibold rounded-xl hover:bg-[#C58718] transition-all">
              Start a Project
            </Link>
          </motion.div>
        </motion.div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div variants={container} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((s, i) => (
              <motion.div
                key={i}
                variants={item}
                whileHover={{ y: -10, boxShadow: "0 25px 30px -12px rgba(0,0,0,0.15)" }}
                className="group bg-white rounded-2xl border border-gray-200 p-8 transition-all relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#C58718]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative z-10">
                  <motion.div whileHover={{ rotate: 15, scale: 1.2 }} className={`w-14 h-14 ${s.bg} rounded-2xl flex items-center justify-center mb-6`}>
                    <s.icon className={`w-7 h-7 ${s.text}`} />
                  </motion.div>
                  <h3 className="text-xl font-bold text-[#11120D] mb-3">{s.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-[#11120D] relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <motion.div animate={{ x: [0, 100, 0], opacity: [0.2, 0.5, 0.2] }} transition={{ duration: 10, repeat: Infinity }} className="w-80 h-80 bg-[#C58718] rounded-full blur-3xl absolute -top-20 -left-20" />
        </div>
        <motion.div initial={{ y: 40, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} className="relative max-w-2xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Have a Custom Requirement?</h2>
          <p className="text-gray-400 mb-8">I'm open to discussing unique projects and collaborations.</p>
          <motion.div whileHover={{ scale: 1.05 }}>
            <Link href="/contact" className="inline-flex px-10 py-4 bg-[#C58718] text-white font-bold rounded-xl hover:bg-[#F8D05F] hover:text-[#11120D] transition-all shadow-xl">
              Contact Me
            </Link>
          </motion.div>
        </motion.div>
      </section>
    </>
  );
}