import Link from "next/link";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center bg-[#11120D] overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#C58718]/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#F8D05F]/10 rounded-full blur-3xl" />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:24px_24px]" />

      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 sm:py-36">
        <div className="max-w-2xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 backdrop-blur-sm rounded-full border border-white/10 mb-6">
            <span className="w-2 h-2 bg-[#C58718] rounded-full animate-pulse" />
            <span className="text-white/80 text-xs sm:text-sm font-medium">
              Trusted in West Bengal
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-5">
            Building{" "}
            <span className="text-[#C58718]">Trust</span> Through
            <br />
            Quality & Service
          </h1>

          <p className="text-gray-400 text-sm sm:text-lg leading-relaxed mb-8 max-w-lg">
            Pravaaha Enterprises brings you premium Bengal sarees under{" "}
            <strong className="text-[#F8D05F]">Akalpa</strong> and professional
            digital solutions through{" "}
            <strong className="text-[#F8D05F]">Pravaaha Digital</strong>.
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              href="/sarees"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#C58718] text-white font-semibold rounded-xl hover:bg-[#F8D05F] hover:text-[#11120D] transition-all text-sm"
            >
              Explore Sarees
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/digital"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 border border-white/20 text-white font-semibold rounded-xl hover:bg-white/10 transition-all text-sm"
            >
              Digital Services
            </Link>
          </div>

          {/* Stats */}
          <div className="flex gap-8 mt-12 pt-8 border-t border-white/10">
            {[
              { num: "100+", label: "Happy Customers" },
              { num: "2", label: "Brands" },
              { num: "5★", label: "Quality Rating" },
            ].map((stat, i) => (
              <div key={i}>
                <div className="text-2xl sm:text-3xl font-bold text-[#C58718]">
                  {stat.num}
                </div>
                <div className="text-xs sm:text-sm text-gray-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;