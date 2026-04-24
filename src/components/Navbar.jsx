"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [brandsOpen, setBrandsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
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
      className={`fixed top-0 w-full z-50 smooth-transition ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg"
          : "bg-white shadow-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="w-8 h-8 bg-[#1a365d] rounded-lg flex items-center justify-center smooth-transition group-hover:bg-[#2b6cb0]">
              <span className="text-[#e8b86d] font-bold text-sm">P</span>
            </div>
            <div>
              <span className="text-xl font-bold text-[#1a365d]">Pravaaha</span>
              <span className="text-xs text-[#718096] hidden sm:block -mt-1">
                Enterprises
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-[#1a202c] hover:text-[#2b6cb0] hover:bg-[#f7fafc] rounded-lg smooth-transition font-medium text-sm"
              >
                {link.label}
              </Link>
            ))}

            {/* Brands Dropdown */}
            <div className="relative ml-2">
              <button
                onClick={() => setBrandsOpen(!brandsOpen)}
                className="flex items-center px-4 py-2 text-[#1a202c] hover:text-[#2b6cb0] hover:bg-[#f7fafc] rounded-lg smooth-transition font-medium text-sm"
              >
                Brands
                <ChevronDown
                  className={`w-4 h-4 ml-1 smooth-transition ${
                    brandsOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {brandsOpen && (
                <div className="absolute right-0 mt-2 w-72 bg-white rounded-xl shadow-2xl border border-gray-100 py-2 animate-scale-in overflow-hidden">
                  {brandLinks.map((brand) => (
                    <Link
                      key={brand.href}
                      href={brand.href}
                      className="block px-4 py-3 hover:bg-[#f7fafc] smooth-transition border-l-2 border-transparent hover:border-[#2b6cb0]"
                      onClick={() => setBrandsOpen(false)}
                    >
                      <div className="font-semibold text-[#1a202c]">
                        {brand.label}
                      </div>
                      <div className="text-sm text-[#718096]">{brand.sub}</div>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* CTA Button */}
            <Link
              href="/contact"
              className="ml-4 px-6 py-2 bg-[#1a365d] text-white rounded-lg hover:bg-[#2b6cb0] smooth-transition font-semibold text-sm shadow-md hover:shadow-lg"
            >
              Get in Touch
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-[#1a365d] hover:text-[#2b6cb0] smooth-transition"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden overflow-hidden smooth-transition ${
            isOpen ? "max-h-96 pb-4" : "max-h-0"
          }`}
        >
          <div className="pt-4 space-y-1 border-t border-gray-100">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block px-4 py-3 text-[#1a202c] hover:bg-[#f7fafc] rounded-lg smooth-transition"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}

            <div className="px-4 py-2 text-xs font-semibold text-[#718096] uppercase tracking-wider">
              Brands
            </div>
            {brandLinks.map((brand) => (
              <Link
                key={brand.href}
                href={brand.href}
                className="block px-4 py-3 text-[#1a202c] hover:bg-[#f7fafc] rounded-lg smooth-transition border-l-2 border-transparent hover:border-[#2b6cb0]"
                onClick={() => setIsOpen(false)}
              >
                <div className="font-medium">{brand.label}</div>
                <div className="text-sm text-[#718096]">{brand.sub}</div>
              </Link>
            ))}

            <Link
              href="/contact"
              className="block mx-4 mt-4 px-6 py-3 bg-[#1a365d] text-white rounded-lg hover:bg-[#2b6cb0] smooth-transition text-center font-semibold"
              onClick={() => setIsOpen(false)}
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;