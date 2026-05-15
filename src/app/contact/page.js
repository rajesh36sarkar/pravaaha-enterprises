'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock,
  FaFacebook, FaTwitter, FaLinkedin, FaInstagram,
  FaPaperPlane, FaCheckCircle, FaArrowRight, FaHeadset
} from 'react-icons/fa'
import ContactForm from '@/components/ContactForm'

const contactInfo = [
  {
    icon: FaMapMarkerAlt,
    title: 'Visit Us',
    details: ['123 Tech Street, Silicon Valley', 'CA 94025, United States'],
    color: 'from-blue-500 to-cyan-500',
    bgColor: 'bg-blue-500/10',
    borderColor: 'border-blue-500/20',
    hoverBorder: 'hover:border-blue-500/40',
  },
  {
    icon: FaEnvelope,
    title: 'Email Us',
    details: ['hello@pravaaha.digital', 'support@pravaaha.digital'],
    color: 'from-purple-500 to-pink-500',
    bgColor: 'bg-purple-500/10',
    borderColor: 'border-purple-500/20',
    hoverBorder: 'hover:border-purple-500/40',
  },
  {
    icon: FaPhone,
    title: 'Call Us',
    details: ['+1 (555) 123-4567', '+1 (555) 987-6543'],
    color: 'from-green-500 to-emerald-500',
    bgColor: 'bg-green-500/10',
    borderColor: 'border-green-500/20',
    hoverBorder: 'hover:border-green-500/40',
  },
  {
    icon: FaClock,
    title: 'Working Hours',
    details: ['Mon - Fri: 9:00 AM - 6:00 PM', 'Sat: 10:00 AM - 2:00 PM'],
    color: 'from-orange-500 to-red-500',
    bgColor: 'bg-orange-500/10',
    borderColor: 'border-orange-500/20',
    hoverBorder: 'hover:border-orange-500/40',
  },
]

const socialLinks = [
  { icon: FaFacebook, href: '#', label: 'Facebook', color: 'hover:text-blue-500 hover:bg-blue-500/10' },
  { icon: FaTwitter, href: '#', label: 'Twitter', color: 'hover:text-sky-500 hover:bg-sky-500/10' },
  { icon: FaLinkedin, href: '#', label: 'LinkedIn', color: 'hover:text-blue-700 hover:bg-blue-700/10' },
  { icon: FaInstagram, href: '#', label: 'Instagram', color: 'hover:text-pink-500 hover:bg-pink-500/10' },
]

export default function ContactPage() {
  const [activeCard, setActiveCard] = useState(null)

  return (
    <div className="min-h-screen pt-16 sm:pt-20 lg:pt-24">
      {/* Hero Section */}
      <section className="relative py-12 sm:py-16 lg:py-20 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-72 h-72 bg-indigo-500/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse animation-delay-2000" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-center"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border border-indigo-500/20 mb-6"
            >
              <FaHeadset className="text-indigo-400 text-sm" />
              <span className="text-indigo-400 text-xs sm:text-sm font-medium">
                24/7 Support Available
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6"
            >
              Get in <span className="gradient-text">Touch</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-base sm:text-lg lg:text-xl text-gray-400 max-w-2xl mx-auto px-4"
            >
              Have a project in mind? We'd love to hear about it. 
              Send us a message and we'll respond within 24 hours.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information & Form Section */}
      <section className="relative py-12 sm:py-16 lg:py-20">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-500/[0.02] to-transparent" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
            {/* Contact Info Cards - Left Side */}
            <div className="space-y-4 sm:space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30, y: 20 }}
                  whileInView={{ opacity: 1, x: 0, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ 
                    type: "spring",
                    stiffness: 80,
                    damping: 15,
                    delay: index * 0.1,
                    duration: 0.6 
                  }}
                  onMouseEnter={() => setActiveCard(index)}
                  onMouseLeave={() => setActiveCard(null)}
                  className={`group relative p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-[#1e293b]/80 to-[#0f172a]/80 backdrop-blur-sm border ${info.borderColor} ${info.hoverBorder} transition-all duration-300 cursor-pointer overflow-hidden`}
                >
                  {/* Hover Background Glow */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: activeCard === index ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                    className={`absolute inset-0 bg-gradient-to-br ${info.color} opacity-[0.03]`}
                  />
                  
                  {/* Animated Border */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ 
                      opacity: activeCard === index ? 1 : 0,
                      scale: activeCard === index ? 1 : 0.8
                    }}
                    transition={{ duration: 0.3 }}
                    className="absolute -inset-px rounded-2xl bg-gradient-to-r from-transparent via-indigo-500/10 to-transparent blur-sm"
                  />

                  <div className="relative z-10">
                    <div className="flex items-start gap-4">
                      {/* Icon Container */}
                      <motion.div
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                        className={`flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br ${info.color} p-3 sm:p-3.5 shadow-lg group-hover:shadow-xl transition-shadow duration-300`}
                      >
                        <info.icon className="w-full h-full text-white" />
                      </motion.div>

                      <div className="flex-1 min-w-0">
                        <h3 className="text-lg sm:text-xl font-semibold text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 group-hover:bg-clip-text transition-all duration-300">
                          {info.title}
                        </h3>
                        
                        {info.details.map((detail, i) => (
                          <motion.p
                            key={i}
                            initial={{ opacity: 0.8 }}
                            whileHover={{ opacity: 1, x: 3 }}
                            className="text-gray-400 text-sm sm:text-base leading-relaxed truncate hover:text-gray-300 transition-colors"
                          >
                            {detail}
                          </motion.p>
                        ))}
                      </div>

                      {/* Arrow Indicator */}
                      <motion.div
                        animate={{ 
                          x: activeCard === index ? 0 : -5,
                          opacity: activeCard === index ? 1 : 0
                        }}
                        transition={{ duration: 0.3 }}
                        className="hidden sm:flex items-center"
                      >
                        <FaArrowRight className="text-indigo-400 text-sm" />
                      </motion.div>
                    </div>

                    {/* Clickable overlay for mobile */}
                    <div className="absolute inset-0 sm:hidden" />
                  </div>
                </motion.div>
              ))}

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="p-5 sm:p-6 glass-card rounded-2xl"
              >
                <h3 className="text-white font-semibold mb-4 text-sm sm:text-base">
                  Follow Us
                </h3>
                <div className="flex gap-3">
                  {socialLinks.map((social, idx) => (
                    <motion.a
                      key={idx}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.2, y: -3 }}
                      whileTap={{ scale: 0.9 }}
                      aria-label={social.label}
                      className={`w-10 h-10 sm:w-11 sm:h-11 flex items-center justify-center rounded-xl bg-gray-800/50 border border-gray-700 text-gray-400 ${social.color} transition-all duration-300`}
                    >
                      <social.icon className="w-4 h-4 sm:w-5 sm:h-5" />
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Contact Form - Right Side */}
            <motion.div
              initial={{ opacity: 0, x: 30, y: 20 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                type: "spring",
                stiffness: 80,
                damping: 15,
                delay: 0.2,
                duration: 0.8
              }}
              className="lg:col-span-2"
            >
              <div className="sticky top-24">
                <div className="relative p-6 sm:p-8 lg:p-10 rounded-2xl bg-gradient-to-br from-[#1e293b]/90 to-[#0f172a]/90 backdrop-blur-sm border border-gray-800/50 overflow-hidden">
                  {/* Decorative Elements */}
                  <div className="absolute top-0 right-0 w-40 h-40 bg-indigo-500/5 rounded-full blur-2xl" />
                  <div className="absolute bottom-0 left-0 w-40 h-40 bg-purple-500/5 rounded-full blur-2xl" />
                  
                  <div className="relative z-10">
                    <div className="mb-6 sm:mb-8">
                      <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                        Send Us a <span className="gradient-text">Message</span>
                      </h2>
                      <p className="text-gray-400 text-sm sm:text-base">
                        Fill out the form below and we'll get back to you within 24 hours.
                      </p>
                    </div>
                    
                    <ContactForm />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="relative py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative p-1.5 sm:p-2 rounded-2xl bg-gradient-to-br from-indigo-500/20 via-purple-500/20 to-pink-500/20 overflow-hidden group">
              {/* Map Placeholder */}
              <div className="relative w-full h-64 sm:h-80 lg:h-96 rounded-xl bg-[#1e293b] overflow-hidden">
                {/* Decorative Map Pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute inset-0" style={{
                    backgroundImage: `radial-gradient(circle at 1px 1px, rgba(99, 102, 241, 0.5) 1px, transparent 0)`,
                    backgroundSize: '40px 40px'
                  }} />
                </div>
                
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    className="text-center"
                  >
                    <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg shadow-indigo-500/25">
                      <FaMapMarkerAlt className="text-2xl sm:text-3xl text-white" />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                      Visit Our Office
                    </h3>
                    <p className="text-gray-400 text-sm sm:text-base">
                      123 Tech Street, Silicon Valley, CA 94025
                    </p>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="mt-4 px-6 py-2.5 bg-white/10 hover:bg-white/20 text-white rounded-full text-sm font-medium transition-all duration-300 border border-white/20"
                    >
                      Get Directions
                    </motion.button>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ or Quick Links Section */}
      <section className="relative py-12 sm:py-16 lg:py-20 border-t border-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">
              Prefer to Reach Out Directly?
            </h3>
            <p className="text-gray-400 text-sm sm:text-base mb-6">
              We're available Monday through Friday, 9 AM to 6 PM PST
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="mailto:hello@pravaaha.digital"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 rounded-full font-medium hover:bg-indigo-500/20 transition-all duration-300"
              >
                <FaEnvelope className="text-sm" />
                hello@pravaaha.digital
              </motion.a>
              <motion.a
                href="tel:+15551234567"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-green-500/10 border border-green-500/30 text-green-400 rounded-full font-medium hover:bg-green-500/20 transition-all duration-300"
              >
                <FaPhone className="text-sm" />
                +1 (555) 123-4567
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}