import Link from "next/link";
// import { Monitor, Video, Code, PenTool, Camera, Headphones, TrendingUp, Youtube } from "lucide-react";

export const metadata = {
  title: "Pravaaha Digital | Professional Freelancing & YouTube Services",
  description:
    "Professional freelancing services, YouTube content creation, web development, and digital marketing by Rajesh Kumar Sarkar.",
};

const services = [
  {
    icon: <Code className="w-6 h-6" />,
    title: "Web Development",
    description: "Custom websites and web applications using MERN stack, Next.js, and modern technologies.",
    color: "bg-blue-500",
    bg: "bg-blue-50",
    text: "text-blue-600",
  },
  {
    icon: <Youtube className="w-6 h-6" />,
    title: "YouTube Content",
    description: "Engaging video content creation, editing, and channel management for growth.",
    color: "bg-red-500",
    bg: "bg-red-50",
    text: "text-red-600",
  },
  {
    icon: <PenTool className="w-6 h-6" />,
    title: "Graphic Design",
    description: "Eye-catching designs for social media, branding, and marketing materials.",
    color: "bg-purple-500",
    bg: "bg-purple-50",
    text: "text-purple-600",
  },
  {
    icon: <Camera className="w-6 h-6" />,
    title: "Video Editing",
    description: "Professional video editing with effects, transitions, and color grading.",
    color: "bg-orange-500",
    bg: "bg-orange-50",
    text: "text-orange-600",
  },
  {
    icon: <TrendingUp className="w-6 h-6" />,
    title: "Digital Marketing",
    description: "SEO, social media marketing, and online presence building for businesses.",
    color: "bg-green-500",
    bg: "bg-green-50",
    text: "text-green-600",
  },
  {
    icon: <Headphones className="w-6 h-6" />,
    title: "Tech Support",
    description: "Remote technical support, troubleshooting, and IT consultation services.",
    color: "bg-teal-500",
    bg: "bg-teal-50",
    text: "text-teal-600",
  },
];

export default function DigitalPage() {
  return (
    <>
      {/* Page Header */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto text-center">
          <span className="inline-block px-4 py-1.5 bg-blue-100 text-blue-800 text-sm font-semibold rounded-full mb-4">
            Pravaaha Digital
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
            Digital Services
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed mb-8">
            Transforming ideas into digital reality. Professional freelancing and 
            YouTube content creation by Rajesh Kumar Sarkar.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-all duration-300 shadow-lg"
          >
            Work With Me
          </Link>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Services I Offer
            </h2>
            <p className="text-lg text-gray-600">
              From code to content, I deliver quality digital solutions tailored to your needs
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-8 border border-gray-100"
              >
                <div className={`w-14 h-14 ${service.bg} rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                  <div className={service.text}>{service.icon}</div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* YouTube CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-red-500 to-red-600">
        <div className="max-w-4xl mx-auto text-center">
          <Youtube className="w-16 h-16 text-white mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Subscribe to My YouTube Channel
          </h2>
          <p className="text-red-100 text-lg mb-8">
            Get access to tech tutorials, coding tips, and digital content creation guides
          </p>
          <a
            href="#"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-red-600 font-bold rounded-xl hover:bg-red-50 transition-all duration-300 shadow-lg"
          >
            <Youtube className="w-5 h-5" />
            Visit Channel
          </a>
        </div>
      </section>
    </>
  );
}