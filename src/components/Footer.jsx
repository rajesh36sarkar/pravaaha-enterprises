import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#1a365d] text-gray-300">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-12 gap-8">
          {/* Company Info */}
          <div className="md:col-span-5">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-[#e8b86d] rounded-lg flex items-center justify-center">
                <span className="text-[#1a365d] font-bold text-lg">P</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">Pravaaha</h3>
                <p className="text-sm text-gray-400">Enterprises</p>
              </div>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              A proprietorship by Rajesh Kumar Sarkar, bringing premium sarees
              and digital services from the heart of Bengal.
            </p>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-[#e8b86d] flex-shrink-0 mt-1" />
                <p className="text-sm">
                  Shyamganj Para, Kalna<br />
                  Purba Bardhaman, West Bengal – 713409
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-[#e8b86d]" />
                <p className="text-sm">+91 XXXXXXXXXX</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-[#e8b86d]" />
                <p className="text-sm">contact@thepravaaha.com</p>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-2">
            <h4 className="text-white font-semibold mb-4 uppercase text-sm tracking-wider">
              Navigation
            </h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-[#e8b86d] smooth-transition text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#e8b86d] smooth-transition text-sm">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#e8b86d] smooth-transition text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Brands */}
          <div className="md:col-span-2">
            <h4 className="text-white font-semibold mb-4 uppercase text-sm tracking-wider">
              Brands
            </h4>
            <ul className="space-y-2">
              <li>
                <Link href="/sarees" className="hover:text-[#e8b86d] smooth-transition text-sm">
                  Akalpa Sarees
                </Link>
              </li>
              <li>
                <Link href="/digital" className="hover:text-[#e8b86d] smooth-transition text-sm">
                  Digital Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Business Hours */}
          <div className="md:col-span-3">
            <h4 className="text-white font-semibold mb-4 uppercase text-sm tracking-wider">
              Business Hours
            </h4>
            <ul className="space-y-2 text-sm">
              <li className="flex justify-between">
                <span>Monday - Saturday</span>
                <span className="text-[#e8b86d]">10AM - 8PM</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday</span>
                <span className="text-red-400">Closed</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 py-6 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Pravaaha Enterprises. Built with trust & integrity.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;