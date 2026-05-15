'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { 
  FaRocket, 
  FaFacebook, 
  FaTwitter, 
  FaLinkedin, 
  FaInstagram, 
  FaGithub,
  FaChevronDown,
  FaHeart,
  FaArrowUp
} from 'react-icons/fa'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  const [openSections, setOpenSections] = useState({})

  const toggleSection = (title) => {
    setOpenSections(prev => ({
      ...prev,
      [title]: !prev[title]
    }))
  }

  const footerLinks = {
    Services: [
      { name: 'Web Development', href: '/services', icon: '🌐' },
      { name: 'Mobile Apps', href: '/services', icon: '📱' },
      { name: 'UI/UX Design', href: '/services', icon: '🎨' },
      { name: 'SEO Optimization', href: '/services', icon: '🔍' },
      { name: 'Cloud Solutions', href: '/services', icon: '☁️' },
    ],
    Company: [
      { name: 'About Us', href: '/about', icon: '👥' },
      { name: 'Our Projects', href: '/projects', icon: '💼' },
      { name: 'Testimonials', href: '/#testimonials', icon: '⭐' },
      { name: 'Contact Us', href: '/contact', icon: '📧' },
      { name: 'Careers', href: '#', icon: '💪' },
    ],
    Legal: [
      { name: 'Privacy Policy', href: '#', icon: '🔒' },
      { name: 'Terms of Service', href: '#', icon: '📄' },
      { name: 'Cookie Policy', href: '#', icon: '🍪' },
      { name: 'GDPR', href: '#', icon: '🛡️' },
    ],
  }

  const socialLinks = [
    { icon: FaFacebook, href: '#', label: 'Facebook', color: 'hover:text-blue-500 hover:bg-blue-500/10' },
    { icon: FaTwitter, href: '#', label: 'Twitter', color: 'hover:text-sky-500 hover:bg-sky-500/10' },
    { icon: FaLinkedin, href: '#', label: 'LinkedIn', color: 'hover:text-blue-700 hover:bg-blue-700/10' },
    { icon: FaInstagram, href: '#', label: 'Instagram', color: 'hover:text-pink-500 hover:bg-pink-500/10' },
    { icon: FaGithub, href: '#', label: 'GitHub', color: 'hover:text-gray-400 hover:bg-gray-400/10' },
  ]

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 10,
      },
    },
  }

  const linkVariants = {
    hover: { 
      x: 5,
      color: '#818cf8',
      transition: { type: 'spring', stiffness: 300 }
    }
  }

  return (
    <footer className="relative bg-gradient-to-b from-[#1e293b] to-[#0f172a] border-t border-gray-800/50">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 overflow-hidden opacity-5">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-indigo-500 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500 rounded-full blur-3xl animate-pulse animation-delay-2000" />
      </div>

      {/* Newsletter Section */}
      <div className="relative border-b border-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row items-center justify-between gap-6"
          >
            <div className="text-center md:text-left">
              <h3 className="text-lg font-semibold text-white mb-1">
                Subscribe to Our Newsletter
              </h3>
              <p className="text-gray-400 text-sm">
                Get the latest updates and insights delivered to your inbox.
              </p>
            </div>
            <div className="flex w-full md:w-auto gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 md:w-64 px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:border-indigo-500 focus:outline-none transition-colors text-sm"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-lg font-medium text-sm hover:shadow-lg hover:shadow-indigo-500/25 transition-all duration-300 whitespace-nowrap"
              >
                Subscribe
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12"
        >
          {/* Brand Column - Full width on mobile, 4 cols on desktop */}
          <motion.div variants={itemVariants} className="lg:col-span-4">
            <Link href="/" className="inline-flex items-center space-x-3 mb-6 group">
              <motion.div
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6 }}
                className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center"
              >
                <FaRocket className="w-5 h-5 text-white" />
              </motion.div>
              <span className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                Pravaaha
              </span>
            </Link>
            
            <p className="text-gray-400 mb-6 text-sm lg:text-base leading-relaxed max-w-md">
              Transforming businesses through innovative digital solutions. 
              We create exceptional web experiences that drive growth and success 
              in the digital landscape.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-3 text-gray-400 text-sm">
                <span className="text-indigo-400">📧</span>
                <a href="mailto:hello@pravaaha.digital" className="hover:text-indigo-400 transition-colors">
                  hello@pravaaha.digital
                </a>
              </div>
              <div className="flex items-center gap-3 text-gray-400 text-sm">
                <span className="text-indigo-400">📞</span>
                <a href="tel:+15551234567" className="hover:text-indigo-400 transition-colors">
                  +1 (555) 123-4567
                </a>
              </div>
              <div className="flex items-center gap-3 text-gray-400 text-sm">
                <span className="text-indigo-400">📍</span>
                <span>Silicon Valley, CA 94025</span>
              </div>
            </div>
            
            {/* Social Links */}
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, y: -5 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={social.label}
                  className={`w-10 h-10 flex items-center justify-center rounded-lg bg-gray-800/50 border border-gray-700 text-gray-400 ${social.color} transition-all duration-300`}
                >
                  <social.icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Link Columns - Desktop view */}
          <div className="hidden lg:contents">
            {Object.entries(footerLinks).map(([title, links], index) => (
              <motion.div
                key={title}
                variants={itemVariants}
                custom={index}
                className="lg:col-span-2"
              >
                <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
                  {title}
                </h4>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <motion.li key={link.name} variants={linkVariants} whileHover="hover">
                      <Link
                        href={link.href}
                        className="text-gray-400 hover:text-indigo-400 transition-colors text-sm flex items-center gap-2 group"
                      >
                        <span className="text-base group-hover:scale-110 transition-transform">
                          {link.icon}
                        </span>
                        <span>{link.name}</span>
                        <span className="w-0 group-hover:w-2 h-0.5 bg-indigo-400 transition-all duration-300" />
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Link Columns - Mobile/Tablet Accordion View */}
          <div className="lg:hidden space-y-4 md:col-span-2">
            {Object.entries(footerLinks).map(([title, links]) => (
              <motion.div
                key={title}
                variants={itemVariants}
                className="border border-gray-800 rounded-lg overflow-hidden"
              >
                <button
                  onClick={() => toggleSection(title)}
                  className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-800/50 transition-colors"
                >
                  <span className="text-white font-semibold text-sm uppercase tracking-wider">
                    {title}
                  </span>
                  <motion.span
                    animate={{ rotate: openSections[title] ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-gray-400"
                  >
                    <FaChevronDown className="w-4 h-4" />
                  </motion.span>
                </button>
                <motion.div
                  initial={false}
                  animate={{
                    height: openSections[title] ? 'auto' : 0,
                    opacity: openSections[title] ? 1 : 0
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <ul className="px-4 pb-4 space-y-2">
                    {links.map((link) => (
                      <motion.li
                        key={link.name}
                        whileHover={{ x: 5 }}
                        transition={{ type: 'spring', stiffness: 300 }}
                      >
                        <Link
                          href={link.href}
                          className="text-gray-400 hover:text-indigo-400 transition-colors text-sm flex items-center gap-2 py-1"
                        >
                          <span>{link.icon}</span>
                          <span>{link.name}</span>
                        </Link>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 p-6 glass-card rounded-xl"
        >
          {[
            { value: '150+', label: 'Projects' },
            { value: '50+', label: 'Clients' },
            { value: '20+', label: 'Countries' },
            { value: '99%', label: 'Satisfaction' },
          ].map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="text-center"
            >
              <div className="text-2xl lg:text-3xl font-bold gradient-text mb-1">
                {stat.value}
              </div>
              <div className="text-gray-400 text-xs lg:text-sm">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-xs lg:text-sm text-center md:text-left">
              © {currentYear} Pravaaha Digital. All rights reserved.
            </p>
            
            <div className="flex items-center gap-2 text-gray-400 text-xs lg:text-sm">
              <span>Made with</span>
              <motion.span
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="text-red-500 inline-block"
              >
                <FaHeart className="w-4 h-4" />
              </motion.span>
              <span>by Pravaaha Team</span>
            </div>

            {/* Scroll to Top Button */}
            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.1, y: -3 }}
              whileTap={{ scale: 0.9 }}
              className="p-3 bg-gradient-to-br from-indigo-500 to-purple-500 text-white rounded-full hover:shadow-lg hover:shadow-indigo-500/25 transition-all duration-300 fixed bottom-8 right-8 lg:static"
              aria-label="Scroll to top"
            >
              <FaArrowUp className="w-4 h-4" />
            </motion.button>
          </div>
        </div>
      </div>

      {/* Add this CSS to your global styles for the animations */}
      <style jsx>{`
        @keyframes pulse {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 0.8; }
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </footer>
  )
}

export default Footer