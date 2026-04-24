"use client";

import Link from "next/link";
import { ArrowRight, Play } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-[#1a365d] via-[#1a365d] to-[#2b6cb0] overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#e8b86d] rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#2b6cb0] rounded-full blur-3xl"></div>
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDE4YzAtMS4xLS45LTItMi0yaC0yYy0xLjEgMC0yIC45LTIgMnYyYzAgMS4xLjkgMiAyIDJoMmMxLjEgMCAyLS45IDItMnptMC00YzAtMS4xLS45LTItMi0yaC0yYy0xLjEgMC0yIC45LTIgMnYyYzAgMS4xLjkgMiAyIDJoMmMxLjEgMCAyLS45IDItMnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-20"></div>

      <div className="relative max-w-7xl mx-auto px-4 py-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="animate-fade-in-up">
            <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-6">
              <span className="w-2 h-2 bg-[#e8b86d] rounded-full mr-2 animate-pulse"></span>
              <span className="text-white/90 text-sm">Trusted in West Bengal</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Building{" "}
              <span className="text-[#e8b86d]">Trust</span> Through
              <br />
              Quality & Service
            </h1>

            <p className="text-lg text-blue-100 mb-8 max-w-lg leading-relaxed">
              Pravaaha Enterprises brings you premium Bengal sarees under{" "}
              <strong className="text-[#e8b86d]">Akalpa</strong> and professional
              digital solutions through{" "}
              <strong className="text-[#e8b86d]">Pravaaha Digital</strong>.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/sarees"
                className="group inline-flex items-center px-8 py-4 bg-[#e8b86d] text-[#1a365d] rounded-lg font-bold hover:bg-[#d4a54c] smooth-transition shadow-lg hover:shadow-xl"
              >
                Explore Sarees
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 smooth-transition" />
              </Link>
              <Link
                href="/digital"
                className="inline-flex items-center px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-lg font-semibold hover:bg-white/20 smooth-transition border border-white/20"
              >
                <Play className="w-5 h-5 mr-2" />
                Digital Services
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="flex gap-8 mt-12">
              <div>
                <div className="text-3xl font-bold text-[#e8b86d]">100+</div>
                <div className="text-sm text-blue-200">Happy Customers</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-[#e8b86d]">2</div>
                <div className="text-sm text-blue-200">Brands</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-[#e8b86d]">5★</div>
                <div className="text-sm text-blue-200">Quality Rating</div>
              </div>
            </div>
          </div>

          {/* Right - Abstract Illustration */}
          <div className="hidden md:block animate-scale-in">
            <div className="relative">
              <div className="w-full h-96 bg-white/5 backdrop-blur-sm rounded-3xl border border-white/10 p-8 relative overflow-hidden">
                <div className="absolute top-4 right-4 flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-[#e8b86d]"></div>
                  <div className="w-3 h-3 rounded-full bg-[#2b6cb0]"></div>
                  <div className="w-3 h-3 rounded-full bg-gray-500"></div>
                </div>
                
                <div className="mt-12 space-y-4">
                  <div className="animate-slide-left" style={{animationDelay: "0.2s"}}>
                    <div className="bg-white/10 rounded-xl p-4 backdrop-blur-sm border border-white/10">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-[#e8b86d]/20 rounded-lg flex items-center justify-center">
                          <span className="text-[#e8b86d] text-xl">🥻</span>
                        </div>
                        <div>
                          <div className="text-white font-semibold">Akalpa Sarees</div>
                          <div className="text-blue-200 text-sm">Premium Collection</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="animate-slide-left" style={{animationDelay: "0.4s"}}>
                    <div className="bg-white/10 rounded-xl p-4 backdrop-blur-sm border border-white/10 ml-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-[#2b6cb0]/20 rounded-lg flex items-center justify-center">
                          <span className="text-[#2b6cb0] text-xl">💻</span>
                        </div>
                        <div>
                          <div className="text-white font-semibold">Digital Services</div>
                          <div className="text-blue-200 text-sm">Web & Content</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="animate-slide-left" style={{animationDelay: "0.6s"}}>
                    <div className="bg-white/10 rounded-xl p-4 backdrop-blur-sm border border-white/10 ml-8">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center">
                          <span className="text-green-400 text-xl">✅</span>
                        </div>
                        <div>
                          <div className="text-white font-semibold">Quality Assured</div>
                          <div className="text-blue-200 text-sm">100% Satisfaction</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating decoration */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-[#e8b86d]/20 rounded-full blur-xl animate-float"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-[#2b6cb0]/20 rounded-full blur-xl animate-float" style={{animationDelay: "1s"}}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;