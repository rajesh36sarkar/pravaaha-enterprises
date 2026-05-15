"use client";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function CTASection() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#0f172a] via-[#050816] to-[#0f172a] relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-72 h-72 bg-[#f59e0b] rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-[#7c3aed] rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      </div>
      <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="relative max-w-3xl mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-['Space_Grotesk'] text-white mb-6">
          Let's Build Something <span className="gradient-text">Amazing</span> Together
        </h2>
        <p className="text-gray-400 text-lg mb-10 max-w-xl mx-auto">
          Have a project in mind? Let's discuss how I can help you build a powerful digital product.
        </p>
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Link href="/contact" className="inline-flex items-center gap-2 px-10 py-5 bg-[#f59e0b] text-black font-bold rounded-xl hover:bg-[#fbbf24] transition-all text-lg shadow-2xl shadow-[#f59e0b]/20">
            Start Your Project <ArrowRight className="w-6 h-6" />
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}