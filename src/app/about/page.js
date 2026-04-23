export const metadata = {
  title: "About Us | Pravaaha Enterprises",
  description: "Learn about Pravaaha Enterprises, a proprietorship by Rajesh Kumar Sarkar based in Kalna, West Bengal.",
};

export default function AboutPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-r from-blue-600 to-teal-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
          <p className="text-xl text-blue-100">The story behind Pravaaha Enterprises</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">
              Pravaaha Enterprises
            </h2>
            
            <div className="prose max-w-none text-gray-600 space-y-4">
              <p className="text-lg">
                <strong>Pravaaha Enterprises</strong> is a sole proprietorship
                owned and operated by <strong>Rajesh Kumar Sarkar</strong>, 
                based in the historic town of Kalna, Purba Bardhaman, West Bengal.
              </p>

              <p>
                The name "Pravaaha" (প্রবাহ) means "flow" in Bengali — 
                representing the continuous flow of quality, creativity, and 
                trust that we bring to everything we do.
              </p>

              <h3 className="text-2xl font-bold text-gray-800 mt-8 mb-4">
                Our Ventures
              </h3>

              <div className="bg-pink-50 border-l-4 border-pink-500 p-4 rounded">
                <h4 className="font-bold text-lg text-pink-700">
                  🥻 Akalpa by Pravaaha
                </h4>
                <p>
                  Our retail saree brand bringing you the finest traditional 
                  Bengal weaves — from Kantha to Baluchari, Tant to Jamdani. 
                  Each saree is handpicked for its quality, craftsmanship, 
                  and timeless beauty.
                </p>
              </div>

              <div className="bg-indigo-50 border-l-4 border-indigo-500 p-4 rounded mt-4">
                <h4 className="font-bold text-lg text-indigo-700">
                  💻 Pravaaha Digital
                </h4>
                <p>
                  Our digital services wing offering freelancing, YouTube 
                  content creation, web development, and digital marketing 
                  services. Helping businesses and creators establish their 
                  online presence.
                </p>
              </div>

              <h3 className="text-2xl font-bold text-gray-800 mt-8 mb-4">
                Business Details
              </h3>

              <div className="bg-gray-50 rounded-lg p-6">
                <table className="w-full text-left">
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="py-3 font-semibold text-gray-700 pr-4">Legal Name</td>
                      <td className="py-3">Rajesh Kumar Sarkar</td>
                    </tr>
                    <tr>
                      <td className="py-3 font-semibold text-gray-700 pr-4">Trade Name</td>
                      <td className="py-3">Pravaaha Enterprises</td>
                    </tr>
                    <tr>
                      <td className="py-3 font-semibold text-gray-700 pr-4">Business Type</td>
                      <td className="py-3">Proprietorship</td>
                    </tr>
                    <tr>
                      <td className="py-3 font-semibold text-gray-700 pr-4">Nature of Business</td>
                      <td className="py-3">Retail (Sarees) + Services (Freelancing & YouTube)</td>
                    </tr>
                    <tr>
                      <td className="py-3 font-semibold text-gray-700 pr-4">Location</td>
                      <td className="py-3">
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
    </div>
  );
}