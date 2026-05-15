'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaQuoteLeft, FaStar, FaChevronLeft, FaChevronRight } from 'react-icons/fa'

const testimonials = [
  {
    id: 1,
    name: 'Rajesh Kumar',
    role: 'CEO, TechVentures',
    content: 'Pravaaha Digital transformed our online presence completely. Their team delivered a stunning website that increased our conversion rate by 200%.',
    rating: 5,
    image: '👨‍💼',
  },
  {
    id: 2,
    name: 'Priya Sharma',
    role: 'Founder, EcoStore',
    content: 'Outstanding work! The mobile app they developed for us is smooth, intuitive, and our customers love it. Highly recommended!',
    rating: 5,
    image: '👩‍💼',
  },
  {
    id: 3,
    name: 'Amit Patel',
    role: 'Marketing Director, GrowthX',
    content: 'Their SEO strategies brought us to the first page of Google within 3 months. The ROI has been incredible.',
    rating: 5,
    image: '👨‍💻',
  },
]

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-20 relative" id="testimonials">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            What Our <span className="gradient-text">Clients Say</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Don't just take our word for it - hear from our satisfied clients
          </p>
        </motion.div>

        <div ref={ref} className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.5 }}
              className="glass-card p-8 md:p-12 text-center"
            >
              <FaQuoteLeft className="text-4xl text-indigo-500 mx-auto mb-6" />
              
              <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
                "{testimonials[currentIndex].content}"
              </p>

              <div className="flex justify-center gap-1 mb-6">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-500 text-xl" />
                ))}
              </div>

              <div className="text-6xl mb-4">{testimonials[currentIndex].image}</div>
              <h4 className="text-xl font-semibold text-white">
                {testimonials[currentIndex].name}
              </h4>
              <p className="text-gray-400">{testimonials[currentIndex].role}</p>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <div className="flex justify-center gap-4 mt-8">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={prev}
              className="p-3 glass-card rounded-full hover:bg-white/10 transition-all"
            >
              <FaChevronLeft className="text-indigo-400" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={next}
              className="p-3 glass-card rounded-full hover:bg-white/10 transition-all"
            >
              <FaChevronRight className="text-indigo-400" />
            </motion.button>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-4">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex ? 'bg-indigo-500 w-6' : 'bg-gray-600'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials