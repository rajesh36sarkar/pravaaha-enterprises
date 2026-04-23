import { Monitor, Video, Code, PenTool, Camera, Headphones } from "lucide-react";

export const metadata = {
  title: "Pravaaha Digital | Freelancing & YouTube Services",
  description: "Professional freelancing services and YouTube content creation by Rajesh Kumar Sarkar.",
};

const services = [
  {
    icon: <Code className="w-8 h-8" />,
    title: "Web Development",
    description: "Custom websites and web applications using MERN stack, Next.js, and modern technologies.",
    color: "bg-blue-100 text-blue-600",
  },
  {
    icon: <Video className="w-8 h-8" />,
    title: "YouTube Content",
    description: "Engaging video content creation, editing, and channel management for growth.",
    color: "bg-red-100 text-red-600",
  },
  {
    icon: <PenTool className="w-8 h-8" />,
    title: "Graphic Design",
    description: "Eye-catching designs for social media, branding, and marketing materials.",
    color: "bg-purple-100 text-purple-600",
  },
  {
    icon: <Camera className="w-8 h-8" />,
    title: "Video Editing",
    description: "Professional video editing with effects, transitions, and color grading.",
    color: "bg-orange-100 text-orange-600",
  },
  {
    icon: <Monitor className="w-8 h-8" />,
    title: "Digital Marketing",
    description: "SEO, social media marketing, and online presence building for businesses.",
    color: "bg-green-100 text-green-600",
  },
  {
    icon: <Headphones className="w-8 h-8" />,
    title: "Tech Support",
    description: "Remote technical support, troubleshooting, and IT consultation services.",
    color: "bg-teal-100 text-teal-600",
  },
];

export default function DigitalPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-600 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Pravaaha Digital
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-8">
            Transforming ideas into digital reality. Freelancing, YouTube, and
            creative services by Rajesh Kumar Sarkar.
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-indigo-700 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors"
          >
            Work With Me
          </a>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4 text-gray-800">
            Services I Offer
          </h2>
          <p className="text-center text-gray-500 mb-12 max-w-2xl mx-auto">
            From code to content, I deliver quality digital solutions tailored to
            your needs
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-8 border border-gray-100 hover:border-indigo-200"
              >
                <div
                  className={`w-16 h-16 ${service.color} rounded-lg flex items-center justify-center mb-4`}
                >
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* YouTube Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-6xl mb-4">▶️</div>
          <h2 className="text-3xl font-bold mb-4 text-gray-800">
            YouTube Channel
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Subscribe to my YouTube channel for tech tutorials, coding tips, and
            digital content creation guides.
          </p>
          <a
            href="#"
            className="inline-flex items-center bg-red-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-red-700 transition-colors"
          >
            Visit Channel ↗
          </a>
        </div>
      </section>
    </div>
  );
}