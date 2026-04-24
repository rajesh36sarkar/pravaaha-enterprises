import Hero from "@/components/Hero";
import Link from "next/link";
import { ArrowRight, Shield, Star, Heart, Award } from "lucide-react";

export default function Home() {
  return (
    <>
      <Hero />

      {/* Brands Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#2b6cb0] font-semibold text-sm uppercase tracking-wider animate-fade-in">
              Our Ventures
            </span>
            <h2 className="text-4xl font-bold text-[#1a202c] mt-2 mb-4 animate-fade-in-up">
              Two Brands, One Promise
            </h2>
            <p className="text-[#718096] max-w-2xl mx-auto animate-fade-in-up">
              Delivering quality and trust through our premium saree collection
              and professional digital services
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 stagger-children">
            {/* Akalpa - Sarees */}
            <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl smooth-transition overflow-hidden border border-gray-100">
              <div className="h-2 bg-gradient-to-r from-[#e8b86d] to-[#d4a54c]"></div>
              <div className="p-8">
                <div className="w-14 h-14 bg-[#e8b86d]/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 smooth-transition">
                  <span className="text-3xl">🥻</span>
                </div>
                <h3 className="text-2xl font-bold text-[#1a202c] mb-3">
                  Akalpa by Pravaaha
                </h3>
                <p className="text-[#718096] mb-6 leading-relaxed">
                  Handpicked collection of traditional Bengal sarees. Each piece
                  embodies craftsmanship, elegance, and heritage.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-sm text-[#1a202c]">
                    <Star className="w-4 h-4 text-[#e8b86d] mr-2" />
                    Premium Quality Weaves
                  </li>
                  <li className="flex items-center text-sm text-[#1a202c]">
                    <Heart className="w-4 h-4 text-[#e8b86d] mr-2" />
                    Handpicked Collection
                  </li>
                </ul>
                <Link
                  href="/sarees"
                  className="group/link inline-flex items-center text-[#2b6cb0] font-semibold hover:text-[#1a365d] smooth-transition"
                >
                  View Collection
                  <ArrowRight className="w-4 h-4 ml-2 group-hover/link:translate-x-1 smooth-transition" />
                </Link>
              </div>
            </div>

            {/* Pravaaha Digital */}
            <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl smooth-transition overflow-hidden border border-gray-100">
              <div className="h-2 bg-gradient-to-r from-[#2b6cb0] to-[#1a365d]"></div>
              <div className="p-8">
                <div className="w-14 h-14 bg-[#2b6cb0]/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 smooth-transition">
                  <span className="text-3xl">💻</span>
                </div>
                <h3 className="text-2xl font-bold text-[#1a202c] mb-3">
                  Pravaaha Digital
                </h3>
                <p className="text-[#718096] mb-6 leading-relaxed">
                  Professional freelancing, YouTube content, and digital
                  solutions tailored to your business needs.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-sm text-[#1a202c]">
                    <Award className="w-4 h-4 text-[#2b6cb0] mr-2" />
                    Expert Services
                  </li>
                  <li className="flex items-center text-sm text-[#1a202c]">
                    <Shield className="w-4 h-4 text-[#2b6cb0] mr-2" />
                    Reliable & Professional
                  </li>
                </ul>
                <Link
                  href="/digital"
                  className="group/link inline-flex items-center text-[#2b6cb0] font-semibold hover:text-[#1a365d] smooth-transition"
                >
                  Explore Services
                  <ArrowRight className="w-4 h-4 ml-2 group-hover/link:translate-x-1 smooth-transition" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-20 px-4 bg-[#f7fafc]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-[#2b6cb0] font-semibold text-sm uppercase tracking-wider">
              Why Choose Us
            </span>
            <h2 className="text-4xl font-bold text-[#1a202c] mt-2">
              Built on Trust & Quality
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 stagger-children">
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg smooth-transition text-center">
              <Shield className="w-12 h-12 text-[#2b6cb0] mx-auto mb-4" />
              <h3 className="font-bold text-lg mb-2">Trusted</h3>
              <p className="text-[#718096] text-sm">
                Serving customers with honesty and integrity since day one
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg smooth-transition text-center">
              <Award className="w-12 h-12 text-[#e8b86d] mx-auto mb-4" />
              <h3 className="font-bold text-lg mb-2">Premium Quality</h3>
              <p className="text-[#718096] text-sm">
                Every product and service meets our highest standards
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg smooth-transition text-center">
              <Heart className="w-12 h-12 text-red-500 mx-auto mb-4" />
              <h3 className="font-bold text-lg mb-2">Customer First</h3>
              <p className="text-[#718096] text-sm">
                Your satisfaction is our priority, always
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-[#1a365d] to-[#2b6cb0]">
        <div className="max-w-3xl mx-auto text-center animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Experience Quality?
          </h2>
          <p className="text-blue-100 mb-8">
            Whether you're looking for a beautiful saree or need digital
            expertise, we're here to serve you with trust and integrity.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-4 bg-[#e8b86d] text-[#1a365d] rounded-lg font-bold hover:bg-[#d4a54c] smooth-transition shadow-lg"
          >
            Get in Touch
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </section>
    </>
  );
}