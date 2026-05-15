'use client'
import { motion } from 'framer-motion'
import { FaUsers, FaAward, FaGlobe, FaHandshake } from 'react-icons/fa'
import CTASection from '@/components/CTASection'

const stats = [
  { icon: FaUsers, value: '50+', label: 'Team Members' },
  { icon: FaAward, value: '150+', label: 'Projects Delivered' },
  { icon: FaGlobe, value: '20+', label: 'Countries Served' },
  { icon: FaHandshake, value: '99%', label: 'Client Satisfaction' },
]

const values = [
  {
    title: 'Innovation',
    description: 'We embrace cutting-edge technologies to deliver innovative solutions.',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    title: 'Quality',
    description: 'We maintain the highest standards in every project we deliver.',
    color: 'from-purple-500 to-pink-500',
  },
  {
    title: 'Collaboration',
    description: 'We work closely with our clients as trusted partners.',
    color: 'from-green-500 to-emerald-500',
  },
  {
    title: 'Integrity',
    description: 'We believe in transparent and honest communication.',
    color: 'from-orange-500 to-red-500',
  },
]

export default function AboutPage() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              About <span className="gradient-text">Pravaaha</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              We are a passionate team of digital experts dedicated to transforming businesses through innovative technology solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <stat.icon className="text-4xl text-indigo-500 mx-auto mb-4" />
                <div className="text-3xl font-bold gradient-text mb-2">{stat.value}</div>
                <div className="text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 bg-[#1e293b]/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Our <span className="gradient-text">Story</span>
              </h2>
              <p className="text-gray-300 mb-4 leading-relaxed">
                Founded in 2020, Pravaaha Digital started with a simple mission: to help businesses 
                thrive in the digital age. What began as a small team of passionate developers has 
                grown into a full-service digital agency serving clients worldwide.
              </p>
              <p className="text-gray-300 mb-4 leading-relaxed">
                We believe that every business deserves access to world-class digital solutions. 
                Our team combines technical expertise with creative innovation to deliver results 
                that exceed expectations.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Today, we're proud to have delivered over 150 successful projects across 20+ 
                countries, helping businesses of all sizes achieve their digital goals.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="glass-card p-8"
            >
              <div className="aspect-w-16 aspect-h-9 rounded-lg bg-gradient-to-br from-indigo-500/20 to-purple-500/20 flex items-center justify-center">
                <span className="text-8xl">🚀</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-4xl font-bold text-center mb-12"
          >
            Our <span className="gradient-text">Values</span>
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="glass-card p-6 text-center hover-glow"
              >
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${value.color} p-4 mb-4 mx-auto`}>
                  <div className="w-full h-full bg-white/20 rounded-lg" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{value.title}</h3>
                <p className="text-gray-400">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  )
}