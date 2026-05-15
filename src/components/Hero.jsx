'use client'
import { useEffect, useState } from 'react'
import { motion, useAnimation } from 'framer-motion'
import Link from 'next/link'
import { FaArrowRight, FaPlay, FaStar, FaCheckCircle } from 'react-icons/fa'
import Hero3D from './Hero3D'
import TechMarquee from './TechMarquee'

const Hero = () => {
  const [isMobile, setIsMobile] = useState(false)
  const controls = useAnimation()

  useEffect(() => {
    // Check if mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    
    // Start animation sequence
    controls.start('visible')
    
    return () => window.removeEventListener('resize', checkMobile)
  }, [controls])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
        when: "beforeChildren",
      },
    },
  }

  const fadeInUp = {
    hidden: { 
      y: isMobile ? 30 : 60, 
      opacity: 0,
      scale: 0.95,
    },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 80,
        damping: 12,
        duration: 0.8,
      },
    },
  }

  const fadeInScale = {
    hidden: { 
      scale: 0.8, 
      opacity: 0,
    },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 10,
        delay: 0.4,
      },
    },
  }

  const stats = [
    { 
      number: '150+', 
      label: 'Projects Completed',
      icon: FaCheckCircle,
      color: 'from-emerald-500 to-green-500'
    },
    { 
      number: '50+', 
      label: 'Happy Clients',
      icon: FaStar,
      color: 'from-yellow-500 to-orange-500'
    },
    { 
      number: '5+', 
      label: 'Years Experience',
      icon: FaStar,
      color: 'from-blue-500 to-cyan-500'
    },
    { 
      number: '99%', 
      label: 'Client Satisfaction',
      icon: FaStar,
      color: 'from-purple-500 to-pink-500'
    },
  ]

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Three.js Background - Hidden on mobile for performance */}
      <div className="hidden md:block">
        <Hero3D />
      </div>

      {/* Mobile Background */}
      <div className="absolute inset-0 md:hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/50 via-purple-900/30 to-[#0f172a]" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl animate-float" />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0f172a]/70 via-[#0f172a]/50 to-[#0f172a]/95 z-10" />

      {/* Content */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="flex flex-col items-center text-center"
        >
          {/* Badge */}
          <motion.div variants={fadeInScale} className="mb-6 md:mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border border-indigo-500/20">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-indigo-400 text-xs sm:text-sm font-medium">
                🚀 Leading Digital Solutions Agency
              </span>
            </div>
          </motion.div>

          {/* Main Heading */}
          <motion.div variants={fadeInUp} className="mb-6 md:mb-8">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight px-2">
              <span className="gradient-text block md:inline">
                Digital Excellence
              </span>
              <span className="block md:inline text-white md:ml-4">
                Delivered
              </span>
            </h1>
          </motion.div>

          {/* Subtitle */}
          <motion.div variants={fadeInUp} className="mb-8 md:mb-10 max-w-2xl">
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 leading-relaxed px-4">
              Transform your vision into reality with cutting-edge digital solutions.
              We craft exceptional websites, apps, and digital experiences that drive growth.
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div 
            variants={fadeInUp}
            className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center w-full max-w-md sm:max-w-none px-4"
          >
            <Link href="/contact" className="w-full sm:w-auto">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto group px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-full font-semibold text-base md:text-lg flex items-center justify-center gap-2 hover:shadow-2xl hover:shadow-indigo-500/25 transition-all duration-300"
              >
                Start Your Project
                <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </Link>
            
            <Link href="/projects" className="w-full sm:w-auto">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto px-6 md:px-8 py-3 md:py-4 glass-card text-white rounded-full font-semibold text-base md:text-lg flex items-center justify-center gap-2 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300"
              >
                <FaPlay className="text-indigo-400 text-sm" />
                View Our Work
              </motion.button>
            </Link>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            variants={fadeInUp}
            className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 lg:gap-8 mt-12 md:mt-16 lg:mt-20 w-full max-w-4xl px-2"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ 
                  scale: 1.05,
                  transition: { type: 'spring', stiffness: 300 }
                }}
                className="group relative"
              >
                <div className="glass-card p-4 md:p-6 text-center hover:bg-white/5 transition-all duration-300 border border-white/5 hover:border-indigo-500/20">
                  {/* Icon */}
                  <div className={`inline-flex p-2 rounded-lg bg-gradient-to-br ${stat.color} bg-opacity-10 mb-2 md:mb-3`}>
                    <stat.icon className="w-4 h-4 md:w-5 md:h-5 text-white" />
                  </div>
                  
                  {/* Number */}
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold gradient-text mb-1">
                    {stat.number}
                  </div>
                  
                  {/* Label */}
                  <div className="text-xs sm:text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                    {stat.label}
                  </div>

                  {/* Hover Glow Effect */}
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-indigo-500/0 via-purple-500/0 to-pink-500/0 group-hover:from-indigo-500/5 group-hover:via-purple-500/5 group-hover:to-pink-500/5 transition-all duration-500" />
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2 }}
            className="hidden md:block mt-12 md:mt-16"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ 
                duration: 2, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="flex flex-col items-center gap-2 text-gray-400"
            >
              <span className="text-sm">Scroll to explore</span>
              <div className="w-6 h-10 rounded-full border-2 border-gray-400 flex justify-center">
                <motion.div
                  animate={{ y: [0, 12, 0] }}
                  transition={{ 
                    duration: 2, 
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2"
                />
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Tech Marquee at Bottom */}
      <TechMarquee />
    </section>
  )
}

export default Hero