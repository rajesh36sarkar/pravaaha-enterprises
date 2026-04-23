import Image from "next/image";
import type { Metadata } from "next";

export const metadata = {
  title: "Akalpa by Pravaaha | Premium Bengal Sarees",
  description: "Discover our exquisite collection of traditional Bengal sarees. Each piece crafted with heritage and elegance.",
};

const sareeCollection = [
  {
    id: 1,
    name: "Kantha Stitch Silk",
    category: "Silk",
    price: "₹2,499",
    description: "Hand-stitched Kantha work on pure silk, a timeless classic from Bengal.",
  },
  {
    id: 2,
    name: "Baluchari Heritage",
    category: "Silk",
    price: "₹4,999",
    description: "Intricate Baluchari weave depicting mythological scenes on rich silk.",
  },
  {
    id: 3,
    name: "Tant Cotton Elegance",
    category: "Cotton",
    price: "₹899",
    description: "Lightweight Bengal Tant cotton saree, perfect for daily wear and summer days.",
  },
  {
    id: 4,
    name: "Jamdani Artisan",
    category: "Cotton",
    price: "₹3,499",
    description: "Handwoven Jamdani with geometric patterns, a UNESCO heritage masterpiece.",
  },
  {
    id: 5,
    name: "Murshidabad Silk",
    category: "Silk",
    price: "₹5,999",
    description: "Royal Murshidabad silk saree with zari border, fit for special occasions.",
  },
  {
    id: 6,
    name: "Dhakai Delight",
    category: "Cotton",
    price: "₹1,499",
    description: "Fine Dhakai weave with delicate motifs, light as a breeze.",
  },
];

export default function SareesPage() {
  return (
    <div>
      {/* Hero Banner */}
      <section className="bg-gradient-to-r from-pink-600 to-rose-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Akalpa by Pravaaha
          </h1>
          <p className="text-xl text-pink-100 max-w-2xl mx-auto">
            Where tradition meets elegance. Discover our handpicked collection of
            Bengal's finest sarees.
          </p>
        </div>
      </section>

      {/* Collection Grid */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sareeCollection.map((saree) => (
              <div
                key={saree.id}
                className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group"
              >
                {/* Image Placeholder */}
                <div className="h-64 bg-gradient-to-br from-pink-100 to-pink-200 flex items-center justify-center">
                  <span className="text-6xl">🥻</span>
                </div>

                <div className="p-6">
                  <span className="text-xs font-semibold text-pink-600 uppercase tracking-wider">
                    {saree.category}
                  </span>
                  <h3 className="text-xl font-bold text-gray-900 mt-2 mb-2">
                    {saree.name}
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm">
                    {saree.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-pink-600">
                      {saree.price}
                    </span>
                    <button className="bg-pink-600 text-white px-4 py-2 rounded-lg hover:bg-pink-700 transition-colors text-sm font-semibold">
                      Inquire Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8 text-gray-800">
            Why Choose Akalpa?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="text-4xl mb-3">🧵</div>
              <h3 className="font-semibold text-lg mb-2">Handpicked Quality</h3>
              <p className="text-gray-600 text-sm">
                Each saree is personally selected for quality and craftsmanship
              </p>
            </div>
            <div>
              <div className="text-4xl mb-3">🏆</div>
              <h3 className="font-semibold text-lg mb-2">Authentic Weaves</h3>
              <p className="text-gray-600 text-sm">
                Direct from traditional weavers of Bengal
              </p>
            </div>
            <div>
              <div className="text-4xl mb-3">💝</div>
              <h3 className="font-semibold text-lg mb-2">Customer Love</h3>
              <p className="text-gray-600 text-sm">
                Satisfied customers across India trust our collection
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}