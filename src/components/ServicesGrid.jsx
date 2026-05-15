'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Link from 'next/link'
import { 
  FaGlobe, FaMobileAlt, FaSearch, FaPalette, 
  FaCloud, FaShieldAlt, FaChartLine, FaCode,
  FaArrowRight, FaCheck
} from 'react-icons/fa'

const services = [
  {
    id: 1,
    icon: FaGlobe,
    title: 'Web Development',
    description: 'Custom websites and web applications built with cutting-edge technologies for optimal performance.',
    features: ['Responsive Design', 'SEO Optimized', 'Fast Loading', 'Scalable'],
    gradient: 'from-blue-500 to-cyan-500',
    iconBg: 'bg-blue-500/10',
    borderHover: 'hover:border-blue-500/30',
    delay: 0,
  },
  {
    id: 2,
    icon: FaMobileAlt,
    title: 'Mobile Apps',
    description: 'Native and cross-platform mobile applications for iOS and Android that users love.',
    features: ['iOS & Android', 'Cross-Platform', 'Push Notifications', 'Offline Support'],
    gradient: 'from-purple-500 to-pink-500',
    iconBg: 'bg-purple-500/10',
    borderHover: 'hover:border-purple-500/30',
    delay: 0.1,
  },
  {
    id: 3,
    icon: FaSearch,
    title: 'SEO Optimization',
    description: 'Boost your online visibility and drive organic traffic with data-driven SEO strategies.',
    features: ['Keyword Research', 'On-Page SEO', 'Link Building', 'Analytics'],
    gradient: 'from-green-500 to-emerald-500',
    iconBg: 'bg-green-500/10',
    borderHover: 'hover:border-green-500/30',
    delay: 0.2,
  },
  {
    id: 4,
    icon: FaPalette,
    title: 'UI/UX Design',
    description: 'Beautiful, intuitive interfaces that delight users and drive engagement and conversions.',
    features: ['Wireframing', 'Prototyping', 'User Testing', 'Design Systems'],
    gradient: 'from-orange-500 to-red-500',
    iconBg: 'bg-orange-500/10',
    borderHover: 'hover:border-orange-500/30',
    delay: 0.3,
  },
  {
    id: 5,
    icon: FaCloud,
    title: 'Cloud Solutions',
    description: 'Scalable cloud infrastructure and deployment solutions for modern applications.',
    features: ['AWS/Azure/GCP', 'Auto-scaling', 'CI/CD', 'Monitoring'],
    gradient: 'from-indigo-500 to-blue-500',
    iconBg: 'bg-indigo-500/10',
    borderHover: 'hover:border-indigo-500/30',
    delay: 0.4,
  },
  {
    id: 6,
    icon: FaShieldAlt,
    title: 'Cybersecurity',
    description: 'Protect your digital assets with enterprise-grade security solutions and best practices.',
    features: ['Threat Detection', 'Encryption', 'Compliance', '24/7 Monitoring'],
    gradient: 'from-red-500 to-pink-500',
    iconBg: 'bg-red-500/10',
    borderHover: 'hover:border-red-500/30',
    delay: 0.5,
  },
  {
    id: 7,
    icon: FaChartLine,
    title: 'Digital Marketing',
    description: 'Data-driven marketing strategies to grow your business and reach your target audience.',
    features: ['Social Media', 'PPC Ads', 'Content Strategy', 'Email Marketing'],
    gradient: 'from-yellow-500 to-orange-500',
    iconBg: 'bg-yellow-500/10',
    borderHover: 'hover:border-yellow-500/30',
    delay: 0.6,
  },
  {
    id: 8,
    icon: FaCode,
    title: 'Custom Software',
    description: 'Tailored software solutions to streamline your business operations and boost efficiency.',
    features: ['API Development', 'Integration', 'Automation', 'Support'],
    gradient: 'from-teal-500 to-green-500',
    iconBg: 'bg-teal-500/10',
    borderHover: 'hover:border-teal-500/30',
    delay: 0.7,
  },
]

const ServiceCard = ({ service, index, inView }) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 60, scale: 0.95 }}
      animate={inView ? { 
        opacity: 1, 
        y: 0, 
        scale: 1,
        transition: {
          type: "spring",
          stiffness: 80,
          damping: 15,
          delay: service.delay,
          duration: 0.8
        }
      } : {}}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative h-full"
    >
      <motion.div
        whileHover={{ y: -8 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className={`relative h-full p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-[#1e293b]/80 to-[#0f172a]/80 backdrop-blur-sm border border-gray-800/50 ${service.borderHover} transition-all duration-500 overflow-hidden`}
      >
        {/* Gradient Background on Hover */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.5 }}
          className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500`}
        />
        
        {/* Animated Border Glow */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ 
            opacity: isHovered ? 1 : 0,
            scale: isHovered ? 1 : 0.8
          }}
          transition={{ duration: 0.5 }}
          className="absolute -inset-px rounded-2xl bg-gradient-to-r from-transparent via-indigo-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"
        />

        <div className="relative z-10 flex flex-col h-full">
          {/* Icon Container */}
          <motion.div
            whileHover={{ rotate: 360, scale: 1.1 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className={`w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br ${service.gradient} p-3 sm:p-3.5 mb-5 sm:mb-6 shadow-lg group-hover:shadow-2xl transition-shadow duration-300`}
          >
            <service.icon className="w-full h-full text-white" />
          </motion.div>
          
          {/* Title */}
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
            {service.title}
          </h3>
          
          {/* Description */}
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-6 flex-grow">
            {service.description}
          </p>

          {/* Features List */}
          <AnimatePresence>
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ 
                height: isHovered ? 'auto' : 0,
                opacity: isHovered ? 1 : 0
              }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="overflow-hidden mb-6"
            >
              <div className="space-y-2">
                {service.features.map((feature, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ x: -10, opacity: 0 }}
                    animate={{ 
                      x: isHovered ? 0 : -10,
                      opacity: isHovered ? 1 : 0
                    }}
                    transition={{ delay: idx * 0.05 }}
                    className="flex items-center gap-2 text-sm text-gray-300"
                  >
                    <FaCheck className={`text-xs flex-shrink-0 bg-gradient-to-br ${service.gradient} bg-clip-text text-transparent`} />
                    <span>{feature}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
          
          {/* Learn More Button */}
          <motion.div
            whileHover={{ x: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-sm font-semibold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent group/link"
            >
              <span>Learn More</span>
              <FaArrowRight className="w-3 h-3 group-hover/link:translate-x-1 transition-transform duration-300" />
            </Link>
          </motion.div>
        </div>

        {/* Corner Decoration */}
        <div className="absolute top-0 right-0 w-20 h-20 opacity-0 group-hover:opacity-10 transition-opacity duration-500">
          <div className={`absolute top-0 right-0 w-full h-full bg-gradient-to-br ${service.gradient} rounded-bl-full`} />
        </div>
      </motion.div>
    </motion.div>
  )
}

const ServicesGrid = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  return (
    <section className="relative py-16 sm:py-20 lg:py-24 overflow-hidden" id="services">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse animation-delay-2000" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-12 sm:mb-16 lg:mb-20"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border border-indigo-500/20 mb-6"
          >
            <span className="w-2 h-2 bg-indigo-500 rounded-full animate-pulse" />
            <span className="text-indigo-400 text-xs sm:text-sm font-medium">
              What We Offer
            </span>
          </motion.div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 px-4">
            Our <span className="gradient-text">Services</span>
          </h2>
          
          <p className="text-gray-400 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto px-4">
            Comprehensive digital solutions tailored to transform your business 
            and drive sustainable growth in the digital landscape
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8"
        >
          {services.map((service, index) => (
            <ServiceCard
              key={service.id}
              service={service}
              index={index}
              inView={inView}
            />
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-center mt-12 sm:mt-16"
        >
          <Link href="/services">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-full font-semibold text-base sm:text-lg hover:shadow-2xl hover:shadow-indigo-500/25 transition-all duration-300"
            >
              View All Services
              <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default ServicesGrid