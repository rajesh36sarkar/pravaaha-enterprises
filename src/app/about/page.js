"use client";
import { MapPin, User, Briefcase, Award } from "lucide-react";
import { motion } from "framer-motion";

export default function AboutPage() {
  const fadeIn = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };

  return (
    <>
      <section className="pt-32 pb-16 px-4 bg-gradient-to-b from-blue-50 to-white">
        <motion.div initial="hidden" animate="visible" variants={fadeIn} className="max-w-3xl mx-auto text-center">
          <span className="inline-flex px-4 py-1.5 bg-[#C58718]/10 text-[#C58718] text-xs font-semibold rounded-full border border-[#C58718]/20 mb-4">About Me</span>
          <h1 className="text-5xl sm:text-6xl font-bold text-[#11120D] mb-4">Rajesh Kumar Sarkar</h1>
          <p className="text-xl text-gray-500">Web & App Developer | Freelancer | YouTuber</p>
        </motion.div>
      </section>

      <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl border p-8 sm:p-12 shadow-sm">
            <h2 className="text-3xl font-bold text-[#11120D] mb-6">Pravaaha Digital</h2>
            <blockquote className="border-l-4 border-[#C58718] pl-6 py-4 mb-8 text-gray-600 italic text-lg">
              “Pravaaha” means “flow” — a continuous flow of code, creativity, and digital solutions.
            </blockquote>
            <p className="text-gray-600 mb-10 leading-relaxed">
              I’m a full‑stack developer specializing in custom website and application development. With a passion for clean code and user‑centric design, I help businesses and startups turn their ideas into powerful digital products.
            </p>

            <h3 className="text-2xl font-bold text-[#11120D] mb-6">Technical Expertise</h3>
            <div className="grid sm:grid-cols-2 gap-6 mb-12">
              {[
                ["💻", "Frontend", "React, Next.js, Tailwind CSS, Framer Motion"],
                ["⚙️", "Backend", "Node.js, Express, MongoDB, REST APIs"],
                ["📱", "Mobile", "React Native, Flutter"],
                ["☁️", "Cloud & DevOps", "AWS, Vercel, Git, CI/CD"],
              ].map(([emoji, title, desc], i) => (
                <motion.div key={i} whileHover={{ scale: 1.02 }} className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                  <div className="text-3xl mb-3">{emoji}</div>
                  <h4 className="font-bold text-lg text-[#11120D]">{title}</h4>
                  <p className="text-gray-500 text-sm">{desc}</p>
                </motion.div>
              ))}
            </div>

            <h3 className="text-2xl font-bold text-[#11120D] mb-6">Business Details</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <tbody className="divide-y">
                  {[
                    [User, "Name", "Rajesh Kumar Sarkar"],
                    [Briefcase, "Business", "Pravaaha Digital"],
                    [Award, "Type", "Freelancer"],
                    [MapPin, "Location", "Shyamganj Para, Kalna, WB – 713409"],
                  ].map(([Icon, label, value], i) => (
                    <motion.tr key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.1 }} viewport={{ once: true }}>
                      <td className="py-4 pr-4 font-semibold whitespace-nowrap">
                        <Icon className="w-5 h-5 inline mr-2 text-[#C58718]" />
                        {label}
                      </td>
                      <td className="py-4">{value}</td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </motion.section>
    </>
  );
}