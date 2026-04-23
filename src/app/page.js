import Hero from "@/components/Hero";
import Link from "next/link";
import { ArrowRight, ShoppingBag, Monitor } from "lucide-react";

export default function Home() {
  return (
    <>
      <Hero />

      {/* Brands Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Our Brands
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Akalpa by Pravaaha - Sarees */}
            <div className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100">
              <div className="p-8">
                <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center mb-4">
                  <ShoppingBag className="w-6 h-6 text-pink-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  Akalpa by Pravaaha
                </h3>
                <p className="text-gray-600 mb-6">
                  Premium sarees with traditional Bengal craftsmanship. Each
                  piece tells a story of heritage and elegance.
                </p>
                <Link
                  href="/sarees"
                  className="inline-flex items-center text-pink-600 font-semibold group-hover:text-pink-700"
                >
                  Explore Collection
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Pravaaha Digital */}
            <div className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100">
              <div className="p-8">
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                  <Monitor className="w-6 h-6 text-indigo-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  Pravaaha Digital
                </h3>
                <p className="text-gray-600 mb-6">
                  Professional freelancing services & YouTube content creation.
                  Bringing your digital vision to life.
                </p>
                <Link
                  href="/digital"
                  className="inline-flex items-center text-indigo-600 font-semibold group-hover:text-indigo-700"
                >
                  View Services
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">
            About Pravaaha
          </h2>
          <p className="text-lg text-gray-600 mb-4">
            A proprietorship owned by{" "}
            <strong>Rajesh Kumar Sarkar</strong>, based in the historic town of
            Kalna, Purba Bardhaman. We bring you the finest sarees through{" "}
            <strong>Akalpa by Pravaaha</strong> and cutting-edge digital
            solutions through <strong>Pravaaha Digital</strong>.
          </p>
          <address className="not-italic text-gray-500 mt-4">
            📍 Shyamganj Para, Kalna, Purba Bardhaman, West Bengal – 713409
          </address>
        </div>
      </section>
    </>
  );
}