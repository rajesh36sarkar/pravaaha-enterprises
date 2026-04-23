import ContactForm from "@/components/ContactForm";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export const metadata = {
  title: "Contact Us | Pravaaha Enterprises",
  description: "Get in touch with Pravaaha Enterprises. Visit us in Kalna, Purba Bardhaman, West Bengal.",
};

export default function ContactPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl text-blue-100">
            We'd love to hear from you. Reach out today!
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold mb-8 text-gray-800">
                Get In Touch
              </h2>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Address</h3>
                    <p className="text-gray-600">
                      Shyamganj Para<br />
                      Kalna, Purba Bardhaman<br />
                      West Bengal – 713409
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Phone</h3>
                    <p className="text-gray-600">+91 XXXXXXXXXX</p>
                    <p className="text-sm text-gray-400 mt-1">
                      Available during business hours
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Email</h3>
                    <p className="text-gray-600">contact@thepravaaha.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">
                      Business Hours
                    </h3>
                    <p className="text-gray-600">
                      Monday - Saturday: 10:00 AM - 8:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold mb-8 text-gray-800">
                Send a Message
              </h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">
            Visit Us
          </h2>
          <p className="text-gray-600 mb-8">
            Located in the heart of Kalna town, Purba Bardhaman
          </p>
          <div className="bg-gray-200 rounded-xl h-64 flex items-center justify-center">
            <span className="text-gray-400 text-lg">
              🗺️ Google Maps will be embedded here
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}