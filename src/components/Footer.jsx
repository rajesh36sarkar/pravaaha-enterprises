"use client";
import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="bg-[#11120D] text-gray-400"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid sm:grid-cols-2 lg:grid-cols-12 gap-8">
          <div className="sm:col-span-2 lg:col-span-5">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 bg-[#C58718] rounded-lg flex items-center justify-center">
                <span className="text-[#11120D] font-bold">P</span>
              </div>
              <span className="text-lg font-bold text-white">Pravaaha Digital</span>
            </div>
            <p className="text-sm max-w-xs mb-5">
              Web & App development by Rajesh Kumar Sarkar. Based in Kalna, WB.
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex items-start gap-2"><MapPin className="w-4 h-4 text-[#C58718] mt-0.5" /><span>Shyamganj Para, Kalna, WB – 713409</span></div>
              <div className="flex items-center gap-2"><Phone className="w-4 h-4 text-[#C58718]" /><span>+91 7363920402</span></div>
              <div className="flex items-center gap-2"><Mail className="w-4 h-4 text-[#C58718]" /><span>contact@thepravaaha.com</span></div>
            </div>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-[#F8D05F] text-xs uppercase tracking-wider mb-3 font-semibold">Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="hover:text-[#C58718] transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-[#C58718] transition-colors">About</Link></li>
              <li><Link href="/contact" className="hover:text-[#C58718] transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-[#F8D05F] text-xs uppercase tracking-wider mb-3 font-semibold">Services</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/services" className="hover:text-[#C58718] transition-colors">Web Development</Link></li>
              <li><Link href="/services" className="hover:text-[#C58718] transition-colors">App Development</Link></li>
              <li><Link href="/services" className="hover:text-[#C58718] transition-colors">Custom Solutions</Link></li>
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="text-[#F8D05F] text-xs uppercase tracking-wider mb-3 font-semibold">Hours</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex justify-between"><span>Mon–Sat</span><span className="text-[#C58718]">10AM–8PM</span></li>
              <li className="flex justify-between"><span>Sunday</span><span className="text-red-400">Closed</span></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-800 py-5 text-center text-xs text-gray-600">
        &copy; {new Date().getFullYear()} Pravaaha Digital. Built with trust & integrity.
      </div>
    </motion.footer>
  );
}