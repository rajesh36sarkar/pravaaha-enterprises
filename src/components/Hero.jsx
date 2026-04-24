import Link from "next/link";
import Image from "next/image"; // Added Image import
import { ArrowRight, Star } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center bg-[#0a0a08] overflow-hidden pt-20">
      
      {/* 1. The New Background Image */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/bg1.jpg" 
          alt="Pravaaha Background" 
          fill 
          className="object-cover opacity-60 object-center" // opacity-30 keeps it subtle
          priority 
        />
        {/* Dark overlay to ensure text stays readable */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a08] via-[#0a0a08]/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a08] via-transparent to-[#0a0a08]/50" />
      </div>

      {/* 2. Background Ambience (Glows) */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-[#C58718]/15 rounded-full blur-[120px] animate-pulse mix-blend-screen" style={{ animationDuration: '8s' }} />
        <div className="absolute bottom-[-10%] right-[-5%] w-[600px] h-[600px] bg-[#9A6A12]/15 rounded-full blur-[150px] animate-pulse mix-blend-screen" style={{ animationDuration: '12s' }} />
      </div>
      
      {/* 3. Subtle Dot Grid */}
      <div className="absolute inset-0 z-0 opacity-[0.04] bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:32px_32px] pointer-events-none" />

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="max-w-3xl stagger">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-2 bg-white/[0.03] backdrop-blur-md rounded-full border border-white/10 shadow-xl mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#F8D05F] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#C58718]"></span>
            </span>
            <span className="text-gray-300 text-xs sm:text-sm font-medium tracking-wide">
              Trusted Excellence in West Bengal
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white leading-[1.1] mb-6 tracking-tight drop-shadow-lg">
            Building <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F8D05F] via-[#C58718] to-[#9A6A12]">Trust</span> <br className="hidden sm:block" />
            Through Quality.
          </h1>

          {/* Paragraph */}
          <p className="text-gray-300 text-lg sm:text-xl max-w-xl mb-10 font-light leading-relaxed drop-shadow-md">
            Premium handmade sarees curated by <strong className="text-white font-medium">Akalpa</strong>, paired with professional digital solutions from <strong className="text-white font-medium">Pravaaha Digital</strong>.
          </p>

          {/* Call to Actions */}
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <Link
              href="/sarees"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-[#C58718] to-[#9A6A12] text-white font-semibold rounded-xl shadow-lg shadow-[#C58718]/20 hover:shadow-[#C58718]/40 transition-all duration-300 hover:-translate-y-1 group"
            >
              Explore Sarees 
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            
            <Link
              href="/digital"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/[0.03] backdrop-blur-md border border-white/10 text-white font-semibold rounded-xl hover:bg-white/10 hover:bg-white/[0.05] transition-all duration-300 hover:-translate-y-1"
            >
              Digital Services
            </Link>
          </div>

          {/* Stats Section */}
          <div className="flex items-center gap-6 sm:gap-12 mt-16 pt-10 border-t border-white/10">
            {[
              { num: "100+", label: "Happy Customers" },
              { num: "2", label: "Premium Brands" },
              { num: "5.0", label: "Quality Rating", icon: true },
            ].map((stat, i) => (
              <div key={i} className="flex flex-col gap-1">
                <div className="flex items-center gap-1 text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-white to-gray-400 drop-shadow-sm">
                  {stat.num}
                  {stat.icon && <Star className="w-5 h-5 text-[#C58718] fill-[#C58718] mb-1 drop-shadow-md" />}
                </div>
                <div className="text-xs sm:text-sm text-gray-400 font-medium tracking-wide uppercase">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}