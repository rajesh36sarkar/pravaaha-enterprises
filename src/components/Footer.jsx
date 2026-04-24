import Link from "next/link";
import Image from "next/image"; // Added missing import
import { MapPin, Phone, Mail, ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#11120D] text-gray-400 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          
          {/* Brand & About */}
          <div className="sm:col-span-2 lg:col-span-4 lg:pr-8">
            
            {/* FIXED: Removed nested links and "P" badge, kept only the clean image logo */}
            <Link href="/" className="relative block w-40 h-10 sm:w-48 sm:h-12 md:w-56 md:h-14 mb-6 transition-transform duration-300 hover:scale-105">
              <Image 
                src="/footer-logo.jpeg" 
                alt="Pravaaha Enterprises" 
                fill 
                className="object-contain object-left" 
              />
            </Link>

            <p className="text-sm leading-relaxed text-gray-400 mb-8 max-w-sm">
              Premium Bengal sarees under the Akalpa brand and professional digital solutions. Built with trust, rooted in Kalna.
            </p>
            <div className="space-y-4 text-sm">
              <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 group transition-colors hover:text-gray-200">
                <MapPin className="w-4 h-4 text-[#C58718] mt-1 flex-shrink-0" />
                <span className="leading-relaxed">Kalna, bardhaman<br />West Bengal – 713409</span>
              </a>
              <a href="tel:+917478404020" className="flex items-center gap-3 group transition-colors hover:text-gray-200">
                <Phone className="w-4 h-4 text-[#C58718] flex-shrink-0" />
                <span>+91 7478404020</span>
              </a>
              <a href="mailto:pravaaha@yahoo.com" className="flex items-center gap-3 group transition-colors hover:text-gray-200">
                <Mail className="w-4 h-4 text-[#C58718] flex-shrink-0" />
                <span>pravaaha@yahoo.com</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 lg:col-start-6">
            <h4 className="text-white text-sm font-semibold tracking-wider mb-6">Explore</h4>
            <ul className="space-y-4 text-sm">
              {['Home', 'About', 'Contact'].map((item) => (
                <li key={item}>
                  <Link href={item === 'Home' ? '/' : `/${item.toLowerCase()}`} className="group flex items-center text-gray-400 hover:text-[#C58718] transition-colors duration-300">
                    <span>{item}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Brands */}
          <div className="lg:col-span-2">
            <h4 className="text-white text-sm font-semibold tracking-wider mb-6">Our Brands</h4>
            <ul className="space-y-4 text-sm">
              <li>
                <Link href="/sarees" className="group flex items-center justify-between text-gray-400 hover:text-[#C58718] transition-colors duration-300">
                  <span>Akalpa Sarees</span>
                  <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-2 translate-y-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300" />
                </Link>
              </li>
              <li>
                <Link href="/digital" className="group flex items-center justify-between text-gray-400 hover:text-[#C58718] transition-colors duration-300">
                  <span>Pravaaha Digital</span>
                  <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-2 translate-y-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Business Hours */}
          <div className="lg:col-span-3 lg:col-start-10 bg-white/[0.02] p-6 rounded-2xl border border-white/5">
            <h4 className="text-white text-sm font-semibold tracking-wider mb-6">Business Hours</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex justify-between items-center border-b border-white/5 pb-3">
                <span className="text-gray-400">Mon – Sat</span>
                <span className="text-[#C58718] font-medium">10:00 AM – 8:00 PM</span>
              </li>
              <li className="flex justify-between items-center pt-1">
                <span className="text-gray-400">Sunday</span>
                <span className="text-gray-500 font-medium italic">Closed</span>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/5 bg-[#0a0a08]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} Pravaaha Enterprises. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-gray-500">
            <Link href="/privacy" className="hover:text-gray-300 transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-gray-300 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}