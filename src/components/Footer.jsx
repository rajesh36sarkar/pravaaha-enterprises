import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#11120D] text-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-12 gap-8">
          {/* Company */}
          <div className="sm:col-span-2 lg:col-span-4">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 bg-[#C58718] rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="text-[#11120D] font-bold">P</span>
              </div>
              <div>
                <h3 className="text-lg font-bold text-white leading-tight">Pravaaha</h3>
                <p className="text-xs text-gray-500">Enterprises</p>
              </div>
            </div>
            <p className="text-sm leading-relaxed mb-5 max-w-xs">
              A proprietorship by Rajesh Kumar Sarkar, bringing premium sarees
              and digital services from the heart of Bengal.
            </p>
            <div className="space-y-2.5 text-sm">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#C58718] flex-shrink-0 mt-0.5" />
                <span>Shyamganj Para, Kalna, Purba Bardhaman, WB – 713409</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#C58718] flex-shrink-0" />
                <span>+91 XXXXXXXXXX</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#C58718] flex-shrink-0" />
                <span>contact@thepravaaha.com</span>
              </div>
            </div>
          </div>

          {/* Links */}
          <div className="lg:col-span-2">
            <h4 className="text-[#F8D05F] font-semibold text-xs uppercase tracking-wider mb-3">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="hover:text-[#C58718] transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-[#C58718] transition-colors">About</Link></li>
              <li><Link href="/contact" className="hover:text-[#C58718] transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Brands */}
          <div className="lg:col-span-2">
            <h4 className="text-[#F8D05F] font-semibold text-xs uppercase tracking-wider mb-3">
              Brands
            </h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/sarees" className="hover:text-[#C58718] transition-colors">Akalpa Sarees</Link></li>
              <li><Link href="/digital" className="hover:text-[#C58718] transition-colors">Digital Services</Link></li>
            </ul>
          </div>

          {/* Hours */}
          <div className="lg:col-span-4">
            <h4 className="text-[#F8D05F] font-semibold text-xs uppercase tracking-wider mb-3">
              Business Hours
            </h4>
            <ul className="space-y-2 text-sm">
              <li className="flex justify-between">
                <span>Mon - Sat</span>
                <span className="text-[#C58718] font-medium">10AM – 8PM</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday</span>
                <span className="text-red-400 font-medium">Closed</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-5 text-center text-xs text-gray-500">
          &copy; {new Date().getFullYear()} Pravaaha Enterprises. Built with trust & integrity.
        </div>
      </div>
    </footer>
  );
};

export default Footer;