import { MapPin, User, Briefcase, Award, Target } from "lucide-react";

export const metadata = {
  title: "About Us | Pravaaha Enterprises",
  description: "Learn about Pravaaha Enterprises, a proprietorship by Rajesh Kumar Sarkar based in Kalna, West Bengal.",
};

export default function AboutPage() {
  return (
    <>
      {/* Page Header */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto text-center">
          <span className="inline-block px-4 py-1.5 bg-blue-100 text-blue-800 text-sm font-semibold rounded-full mb-4">
            About Us
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
            Our Story
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            The story behind Pravaaha Enterprises and our commitment to quality
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 md:p-12">
            {/* Company Name Meaning */}
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Pravaaha Enterprises
            </h2>
            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-xl mb-8">
              <p className="text-lg text-gray-700 leading-relaxed">
                The name &ldquo;Pravaaha&rdquo; (প্রবাহ) means &ldquo;flow&rdquo; in Bengali — 
                representing the continuous flow of quality, creativity, and 
                trust that we bring to everything we do.
              </p>
            </div>

            <div className="prose max-w-none text-gray-600 space-y-6">
              <p className="text-lg leading-relaxed">
                <strong>Pravaaha Enterprises</strong> is a sole proprietorship
                owned and operated by <strong>Rajesh Kumar Sarkar</strong>, 
                based in the historic town of Kalna, Purba Bardhaman, West Bengal.
              </p>

              {/* Brands */}
              <h3 className="text-2xl font-bold text-gray-900 mt-12 mb-6">
                Our Brands
              </h3>

              <div className="grid sm:grid-cols-2 gap-6">
                <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
                  <span className="text-3xl mb-3 block">🥻</span>
                  <h4 className="font-bold text-lg text-gray-900 mb-2">
                    Akalpa by Pravaaha
                  </h4>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Our retail saree brand bringing you the finest traditional 
                    Bengal weaves — from Kantha to Baluchari, Tant to Jamdani.
                  </p>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                  <span className="text-3xl mb-3 block">💻</span>
                  <h4 className="font-bold text-lg text-gray-900 mb-2">
                    Pravaaha Digital
                  </h4>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Our digital services wing offering freelancing, YouTube 
                    content creation, web development, and digital marketing.
                  </p>
                </div>
              </div>

              {/* Business Details Table */}
              <h3 className="text-2xl font-bold text-gray-900 mt-12 mb-6">
                Business Details
              </h3>

              <div className="bg-gray-50 rounded-xl overflow-hidden border border-gray-200">
                <table className="w-full">
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="py-4 px-6 font-semibold text-gray-700 bg-gray-100 w-1/3">
                        <div className="flex items-center gap-2">
                          <User className="w-4 h-4 text-blue-500" />
                          Legal Name
                        </div>
                      </td>
                      <td className="py-4 px-6 text-gray-900">Rajesh Kumar Sarkar</td>
                    </tr>
                    <tr>
                      <td className="py-4 px-6 font-semibold text-gray-700 bg-gray-100">
                        <div className="flex items-center gap-2">
                          <Briefcase className="w-4 h-4 text-blue-500" />
                          Trade Name
                        </div>
                      </td>
                      <td className="py-4 px-6 text-gray-900">Pravaaha Enterprises</td>
                    </tr>
                    <tr>
                      <td className="py-4 px-6 font-semibold text-gray-700 bg-gray-100">
                        <div className="flex items-center gap-2">
                          <Target className="w-4 h-4 text-blue-500" />
                          Business Type
                        </div>
                      </td>
                      <td className="py-4 px-6 text-gray-900">Proprietorship</td>
                    </tr>
                    <tr>
                      <td className="py-4 px-6 font-semibold text-gray-700 bg-gray-100">
                        <div className="flex items-center gap-2">
                          <Award className="w-4 h-4 text-blue-500" />
                          Nature of Business
                        </div>
                      </td>
                      <td className="py-4 px-6 text-gray-900">
                        Retail (Sarees) + Services (Freelancing & YouTube)
                      </td>
                    </tr>
                    <tr>
                      <td className="py-4 px-6 font-semibold text-gray-700 bg-gray-100">
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4 text-blue-500" />
                          Location
                        </div>
                      </td>
                      <td className="py-4 px-6 text-gray-900">
                        Shyamganj Para, Kalna<br />
                        Purba Bardhaman, West Bengal – 713409
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}