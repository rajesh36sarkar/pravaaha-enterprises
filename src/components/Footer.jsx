import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">
              Pravaaha Enterprises
            </h3>
            <p className="mb-2">
              Proprietor: <span className="text-white">Rajesh Kumar Sarkar</span>
            </p>
            <address className="not-italic">
              <p>Shyamganj Para</p>
              <p>Kalna, Purba Bardhaman</p>
              <p>West Bengal – 713409</p>
            </address>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-blue-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-blue-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-blue-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Our Brands */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Our Brands</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/sarees" className="hover:text-pink-400 transition-colors">
                  Akalpa by Pravaaha - Sarees
                </Link>
              </li>
              <li>
                <Link href="/digital" className="hover:text-indigo-400 transition-colors">
                  Pravaaha Digital - Services
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Pravaaha Enterprises. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;