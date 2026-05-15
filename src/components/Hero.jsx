"use client";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const FloatingOrb = ({ className }) => (
  <motion.div
    className={`absolute rounded-full blur-3xl opacity-20 ${className}`}
    animate={{ y: [0, -30, 0], scale: [1, 1.1, 1] }}
    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
  />
);

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-[#11120D] overflow-hidden">
      <FloatingOrb className="top-20 left-10 w-80 h-80 bg-[#C58718]" />
      <FloatingOrb className="bottom-20 right-10 w-96 h-96 bg-[#F8D05F]" />
      <FloatingOrb className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#C58718]/30" />
      <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:24px_24px]" />

      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 glass rounded-full text-white/80 text-xs sm:text-sm mb-6"
          >
            <span className="w-2 h-2 bg-[#C58718] rounded-full animate-pulse" />
            Web & App Development Studio
          </motion.span>

          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white leading-tight mb-5">
            Custom{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C58718] to-[#F8D05F]">
              Websites & Apps
            </span>{" "}
            That Drive Results
          </h1>

          <p className="text-gray-400 text-base sm:text-lg max-w-lg mb-8">
            I build high‑performance web and mobile applications tailored to your business needs. 
            From concept to deployment, with clean code and modern design.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#C58718] text-white font-semibold rounded-xl hover:bg-[#F8D05F] hover:text-[#11120D] transition-all shadow-lg shadow-[#C58718]/25"
              >
                View Services <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 glass text-white font-semibold rounded-xl hover:bg-white/20 transition-all"
              >
                Get a Quote
              </Link>
            </motion.div>
          </div>

          <div className="flex gap-8 mt-12 pt-8 border-t border-white/10">
            {[
              ["50+", "Projects"],
              ["3+", "Years Exp."],
              ["100%", "Client Satisfaction"],
            ].map(([num, label], i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + i * 0.2 }}
              >
                <div className="text-3xl sm:text-4xl font-bold text-[#C58718]">{num}</div>
                <div className="text-sm text-gray-500">{label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}