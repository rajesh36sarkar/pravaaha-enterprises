import ContactForm from "@/components/ContactForm";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export const metadata = {
  title: "Contact Us | Pravaaha Enterprises",
  description: "Get in touch with Pravaaha Enterprises. Visit us in Kalna, Purba Bardhaman, West Bengal.",
};

export default function ContactPage() {
  return (
    <>
      {/* Page Header */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto text-center">
          <span className="inline-block px-4 py-1.5 bg-blue-100 text-blue-800 text-sm font-semibold rounded-full mb-4">
            Get In Touch
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
            Contact Us
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            We'd love to hear from you. Reach out today!
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact Info - 2 columns */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-gray-900 mb-8">
                Contact Information
              </h2>

              <div className="space-y-6">
                {[
                  {
                    icon: <MapPin className="w-5 h-5" />,
                    bg: "bg-blue-100",
                    text: "text-blue-600",
                    title: "Address",
                    content: "Shyamganj Para, Kalna, Purba Bardhaman, West Bengal – 713409",
                  },
                  {
                    icon: <Phone className="w-5 h-5" />,
                    bg: "bg-green-100",
                    text: "text-green-600",
                    title: "Phone",
                    content: "+91 XXXXXXXXXX",
                  },
                  {
                    icon: <Mail className="w-5 h-5" />,
                    bg: "bg-purple-100",
                    text: "text-purple-600",
                    title: "Email",
                    content: "contact@thepravaaha.com",
                  },
                  {
                    icon: <Clock className="w-5 h-5" />,
                    bg: "bg-orange-100",
                    text: "text-orange-600",
                    title: "Business Hours",
                    content: "Monday - Saturday: 10:00 AM - 8:00 PM\nSunday: Closed",
                  },
                ].map((item, index) => (
                  <div key={index} className="flex gap-4">
                    <div className={`w-12 h-12 ${item.bg} rounded-xl flex items-center justify-center flex-shrink-0`}>
                      <div className={item.text}>{item.icon}</div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">{item.title}</h3>
                      <p className="text-gray-600 text-sm whitespace-pre-line">{item.content}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Form - 3 columns */}
            <div className="lg:col-span-3">
              <h2 className="text-2xl font-bold text-gray-900 mb-8">
                Send a Message
              </h2>
              <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Visit Us</h2>
            <p className="text-gray-600 mt-2">Located in the heart of Kalna town, Purba Bardhaman</p>
          </div>
          <div className="bg-gray-200 rounded-2xl h-80 flex items-center justify-center">
            <span className="text-gray-500 text-lg">📍 Google Maps will be embedded here</span>
          </div>
        </div>
      </section>
    </>
  );
}