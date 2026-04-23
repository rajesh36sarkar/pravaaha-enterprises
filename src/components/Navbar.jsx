"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [brandsOpen, setBrandsOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  const brandLinks = [
    { href: "/sarees", label: "Akalpa by Pravaaha", sub: "Sarees" },
    { href: "/digital", label: "Pravaaha Digital", sub: "Digital Services" },
  ];

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-blue-700">Pravaaha</span>
            <span className="text-sm text-gray-500 hidden sm:block">
              Enterprises
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-600 hover:text-blue-600 transition-colors font-medium"
              >
                {link.label}
              </Link>
            ))}

            {/* Brands Dropdown */}
            <div className="relative">
              <button
                onClick={() => setBrandsOpen(!brandsOpen)}
                className="flex items-center text-gray-600 hover:text-blue-600 transition-colors font-medium"
              >
                Brands
                <ChevronDown className="w-4 h-4 ml-1" />
              </button>

              {brandsOpen && (
                <div className="absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-100 py-2">
                  {brandLinks.map((brand) => (
                    <Link
                      key={brand.href}
                      href={brand.href}
                      className="block px-4 py-3 hover:bg-blue-50 transition-colors"
                      onClick={() => setBrandsOpen(false)}
                    >
                      <div className="font-semibold text-gray-800">
                        {brand.label}
                      </div>
                      <div className="text-sm text-gray-500">{brand.sub}</div>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-600 hover:text-blue-600"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 border-t border-gray-100">
            <div className="pt-4 space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block px-3 py-2 text-gray-600 hover:bg-blue-50 rounded-lg transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}

              <div className="px-3 py-2 text-sm font-semibold text-gray-400 uppercase">
                Brands
              </div>
              {brandLinks.map((brand) => (
                <Link
                  key={brand.href}
                  href={brand.href}
                  className="block px-3 py-2 text-gray-600 hover:bg-blue-50 rounded-lg transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  <div className="font-medium">{brand.label}</div>
                  <div className="text-sm text-gray-400">{brand.sub}</div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;