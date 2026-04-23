import Link from "next/link";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-800 text-white py-24">
      <div className="absolute inset-0 bg-black/20"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
          Welcome to Pravaaha Enterprises
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-blue-100">
          Premium Sarees & Digital Services from the heart of Bengal
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/sarees"
            className="bg-white text-blue-700 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors shadow-lg"
          >
            Explore Sarees
          </Link>
          <Link
            href="/digital"
            className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white/10 transition-colors"
          >
            Digital Services
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;