"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [brandsOpen, setBrandsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  const brandLinks = [
    { href: "/sarees", label: "Akalpa by Pravaaha", sub: "Premium Sarees" },
    { href: "/digital", label: "Pravaaha Digital", sub: "Digital Services" },
  ];

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 flex-shrink-0">
            <div className="w-8 h-8 bg-[#C58718] rounded-lg flex items-center justify-center">
              <span className="text-[#11120D] font-bold text-sm">P</span>
            </div>
            <span className="text-lg font-bold text-[#11120D] hidden sm:block">
              Pravaaha
            </span>
          </Link>

          {/* Desktop */}
          <div className="hidden md:flex items-center gap-0.5">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-3 py-2 text-sm font-medium text-[#11120D] hover:text-[#C58718] rounded-lg hover:bg-gray-50 transition-all"
              >
                {link.label}
              </Link>
            ))}

            {/* Brands Dropdown */}
            <div className="relative">
              <button
                onClick={() => setBrandsOpen(!brandsOpen)}
                className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-[#11120D] hover:text-[#C58718] rounded-lg hover:bg-gray-50 transition-all"
              >
                Brands
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform ${
                    brandsOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {brandsOpen && (
                <>
                  <div
                    className="fixed inset-0 z-10"
                    onClick={() => setBrandsOpen(false)}
                  />
                  <div className="absolute right-0 mt-2 w-64 bg-white rounded-xl shadow-2xl border border-gray-100 py-2 z-20">
                    {brandLinks.map((brand) => (
                      <Link
                        key={brand.href}
                        href={brand.href}
                        className="block px-4 py-3 hover:bg-gray-50 border-l-2 border-transparent hover:border-[#C58718] transition-all"
                        onClick={() => setBrandsOpen(false)}
                      >
                        <div className="font-semibold text-sm text-[#11120D]">
                          {brand.label}
                        </div>
                        <div className="text-xs text-gray-500">{brand.sub}</div>
                      </Link>
                    ))}
                  </div>
                </>
              )}
            </div>

            <Link
              href="/contact"
              className="ml-3 px-5 py-2 bg-[#C58718] text-white text-sm font-semibold rounded-lg hover:bg-[#F8D05F] hover:text-[#11120D] transition-all"
            >
              Get in Touch
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-[#11120D] hover:bg-gray-100 rounded-lg transition-all"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white">
          <div className="px-4 py-3 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block px-3 py-2.5 text-sm font-medium text-[#11120D] hover:bg-gray-50 rounded-lg transition-all"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="px-3 pt-3 pb-1 text-xs font-semibold text-gray-400 uppercase tracking-wider">
              Brands
            </div>
            {brandLinks.map((brand) => (
              <Link
                key={brand.href}
                href={brand.href}
                className="block px-3 py-2.5 hover:bg-gray-50 rounded-lg border-l-2 border-transparent hover:border-[#C58718] transition-all"
                onClick={() => setIsOpen(false)}
              >
                <div className="font-medium text-sm text-[#11120D]">
                  {brand.label}
                </div>
                <div className="text-xs text-gray-500">{brand.sub}</div>
              </Link>
            ))}
            <Link
              href="/contact"
              className="block mt-3 px-3 py-2.5 bg-[#C58718] text-white text-sm font-semibold rounded-lg text-center hover:bg-[#F8D05F] hover:text-[#11120D] transition-all"
              onClick={() => setIsOpen(false)}
            >
              Get in Touch
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;