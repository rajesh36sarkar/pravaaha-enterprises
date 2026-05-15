'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaPaperPlane, FaCheckCircle, FaUser, FaEnvelope, FaPhone, FaBuilding } from 'react-icons/fa'

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    budget: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [focusedField, setFocusedField] = useState(null)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleFocus = (fieldName) => {
    setFocusedField(fieldName)
  }

  const handleBlur = () => {
    setFocusedField(null)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))

    console.log('Form Data:', formData)
    setIsSubmitting(false)
    setIsSuccess(true)

    // Reset form after success
    setTimeout(() => {
      setIsSuccess(false)
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        service: '',
        budget: '',
        message: '',
      })
    }, 3000)
  }

  if (isSuccess) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-12 sm:py-16"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
          className="w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-green-500/25"
        >
          <FaCheckCircle className="text-3xl sm:text-4xl text-white" />
        </motion.div>
        <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">
          Message Sent Successfully!
        </h3>
        <p className="text-gray-400 text-sm sm:text-base max-w-md mx-auto">
          Thank you for reaching out. We'll review your message and get back to you within 24 hours.
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsSuccess(false)}
          className="mt-6 px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-full font-medium text-sm hover:shadow-lg hover:shadow-indigo-500/25 transition-all duration-300"
        >
          Send Another Message
        </motion.button>
      </motion.div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
      {/* Name & Email Row */}
      <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
        <div className="relative">
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Full Name <span className="text-indigo-400">*</span>
          </label>
          <div className="relative">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              onFocus={() => handleFocus('name')}
              onBlur={handleBlur}
              required
              className={`w-full pl-10 pr-4 py-3 bg-gray-800/50 border rounded-xl text-white placeholder-gray-500 transition-all duration-300 ${
                focusedField === 'name' 
                  ? 'border-indigo-500 shadow-lg shadow-indigo-500/10' 
                  : 'border-gray-700 hover:border-gray-600'
              } focus:outline-none`}
              placeholder="John Doe"
            />
            <FaUser className={`absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 transition-colors duration-300 ${
              focusedField === 'name' ? 'text-indigo-400' : 'text-gray-500'
            }`} />
          </div>
        </div>

        <div className="relative">
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Email Address <span className="text-indigo-400">*</span>
          </label>
          <div className="relative">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              onFocus={() => handleFocus('email')}
              onBlur={handleBlur}
              required
              className={`w-full pl-10 pr-4 py-3 bg-gray-800/50 border rounded-xl text-white placeholder-gray-500 transition-all duration-300 ${
                focusedField === 'email' 
                  ? 'border-indigo-500 shadow-lg shadow-indigo-500/10' 
                  : 'border-gray-700 hover:border-gray-600'
              } focus:outline-none`}
              placeholder="john@example.com"
            />
            <FaEnvelope className={`absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 transition-colors duration-300 ${
              focusedField === 'email' ? 'text-indigo-400' : 'text-gray-500'
            }`} />
          </div>
        </div>
      </div>

      {/* Phone & Company Row */}
      <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
        <div className="relative">
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Phone Number
          </label>
          <div className="relative">
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              onFocus={() => handleFocus('phone')}
              onBlur={handleBlur}
              className={`w-full pl-10 pr-4 py-3 bg-gray-800/50 border rounded-xl text-white placeholder-gray-500 transition-all duration-300 ${
                focusedField === 'phone' 
                  ? 'border-indigo-500 shadow-lg shadow-indigo-500/10' 
                  : 'border-gray-700 hover:border-gray-600'
              } focus:outline-none`}
              placeholder="+1 (555) 123-4567"
            />
            <FaPhone className={`absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 transition-colors duration-300 ${
              focusedField === 'phone' ? 'text-indigo-400' : 'text-gray-500'
            }`} />
          </div>
        </div>

        <div className="relative">
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Company
          </label>
          <div className="relative">
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              onFocus={() => handleFocus('company')}
              onBlur={handleBlur}
              className={`w-full pl-10 pr-4 py-3 bg-gray-800/50 border rounded-xl text-white placeholder-gray-500 transition-all duration-300 ${
                focusedField === 'company' 
                  ? 'border-indigo-500 shadow-lg shadow-indigo-500/10' 
                  : 'border-gray-700 hover:border-gray-600'
              } focus:outline-none`}
              placeholder="Your Company"
            />
            <FaBuilding className={`absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 transition-colors duration-300 ${
              focusedField === 'company' ? 'text-indigo-400' : 'text-gray-500'
            }`} />
          </div>
        </div>
      </div>

      {/* Service & Budget Row */}
      <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Service Needed <span className="text-indigo-400">*</span>
          </label>
          <select
            name="service"
            value={formData.service}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white focus:border-indigo-500 focus:outline-none transition-all duration-300 hover:border-gray-600 cursor-pointer"
          >
            <option value="">Select a service</option>
            <option value="web">Web Development</option>
            <option value="mobile">Mobile App Development</option>
            <option value="design">UI/UX Design</option>
            <option value="seo">SEO Optimization</option>
            <option value="cloud">Cloud Solutions</option>
            <option value="marketing">Digital Marketing</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Budget Range
          </label>
          <select
            name="budget"
            value={formData.budget}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white focus:border-indigo-500 focus:outline-none transition-all duration-300 hover:border-gray-600 cursor-pointer"
          >
            <option value="">Select budget</option>
            <option value="1k-5k">$1,000 - $5,000</option>
            <option value="5k-10k">$5,000 - $10,000</option>
            <option value="10k-25k">$10,000 - $25,000</option>
            <option value="25k+">$25,000+</option>
            <option value="not-sure">Not Sure Yet</option>
          </select>
        </div>
      </div>

      {/* Message */}
      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">
          Project Details <span className="text-indigo-400">*</span>
        </label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          onFocus={() => handleFocus('message')}
          onBlur={handleBlur}
          required
          rows="5"
          className={`w-full px-4 py-3 bg-gray-800/50 border rounded-xl text-white placeholder-gray-500 transition-all duration-300 resize-none ${
            focusedField === 'message' 
              ? 'border-indigo-500 shadow-lg shadow-indigo-500/10' 
              : 'border-gray-700 hover:border-gray-600'
          } focus:outline-none`}
          placeholder="Tell us about your project, goals, and timeline..."
        />
        <div className="mt-1 text-right">
          <span className="text-xs text-gray-500">
            {formData.message.length}/1000 characters
          </span>
        </div>
      </div>

      {/* Submit Button */}
      <motion.button
        type="submit"
        disabled={isSubmitting}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="w-full px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-xl font-semibold text-base sm:text-lg flex items-center justify-center gap-3 hover:shadow-xl hover:shadow-indigo-500/25 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed group"
      >
        {isSubmitting ? (
          <>
            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            <span>Sending Message...</span>
          </>
        ) : (
          <>
            <span>Send Message</span>
            <FaPaperPlane className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
          </>
        )}
      </motion.button>

      {/* Trust Indicators */}
      <div className="flex items-center justify-center gap-4 pt-2">
        <div className="flex items-center gap-1.5">
          <div className="w-1.5 h-1.5 bg-green-500 rounded-full" />
          <span className="text-xs text-gray-500">Secure Form</span>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="w-1.5 h-1.5 bg-green-500 rounded-full" />
          <span className="text-xs text-gray-500">24h Response</span>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="w-1.5 h-1.5 bg-green-500 rounded-full" />
          <span className="text-xs text-gray-500">Free Consultation</span>
        </div>
      </div>
    </form>
  )
}

export default ContactForm