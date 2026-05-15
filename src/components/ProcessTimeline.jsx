'use client'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  FaLightbulb, FaPencilRuler, FaCode, FaRocket, FaChartLine,
  FaArrowRight 
} from 'react-icons/fa'

const steps = [
  {
    id: 1,
    icon: FaLightbulb,
    title: 'Discovery',
    description: 'We dive deep into understanding your vision, goals, and requirements to create a solid foundation.',
    details: ['Requirements Analysis', 'Market Research', 'Strategy Planning'],
    color: 'from-yellow-500 to-orange-500',
    bgColor: 'bg-yellow-500/10',
    number: '01',
    duration: 'Week 1-2',
  },
  {
    id: 2,
    icon: FaPencilRuler,
    title: 'Design',
    description: 'Creating stunning UI/UX designs and interactive prototypes that bring your vision to life.',
    details: ['Wireframing', 'Visual Design', 'Prototyping'],
    color: 'from-blue-500 to-cyan-500',
    bgColor: 'bg-blue-500/10',
    number: '02',
    duration: 'Week 2-4',
  },
  {
    id: 3,
    icon: FaCode,
    title: 'Development',
    description: 'Building robust, scalable, and high-performance solutions using cutting-edge technologies.',
    details: ['Frontend Development', 'Backend Integration', 'Testing'],
    color: 'from-indigo-500 to-purple-500',
    bgColor: 'bg-indigo-500/10',
    number: '03',
    duration: 'Week 4-8',
  },
  {
    id: 4,
    icon: FaRocket,
    title: 'Launch',
    description: 'Deploying your project to production with thorough testing and quality assurance.',
    details: ['Deployment', 'QA Testing', 'Performance Optimization'],
    color: 'from-green-500 to-emerald-500',
    bgColor: 'bg-green-500/10',
    number: '04',
    duration: 'Week 8-9',
  },
  {
    id: 5,
    icon: FaChartLine,
    title: 'Growth',
    description: 'Continuous monitoring, optimization, and support to ensure long-term success.',
    details: ['Analytics', 'Optimization', '24/7 Support'],
    color: 'from-pink-500 to-red-500',
    bgColor: 'bg-pink-500/10',
    number: '05',
    duration: 'Ongoing',
  },
]

const ProcessTimeline = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section className="relative py-16 sm:py-20 lg:py-24 overflow-hidden" id="process">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-indigo-500/20 to-transparent" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16 lg:mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border border-indigo-500/20 mb-6"
          >
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span className="text-indigo-400 text-xs sm:text-sm font-medium">
              How We Work
            </span>
          </motion.div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Our <span className="gradient-text">Process</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto">
            A proven, systematic methodology to deliver exceptional results consistently
          </p>
        </motion.div>

        {/* Timeline */}
        <div ref={ref} className="relative">
          {/* Desktop Timeline Line */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500 transform -translate-x-1/2" />

          <div className="space-y-8 lg:space-y-0">
            {steps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ 
                  opacity: 0, 
                  x: index % 2 === 0 ? -50 : 50,
                  y: 20 
                }}
                animate={inView ? { 
                  opacity: 1, 
                  x: 0,
                  y: 0,
                  transition: {
                    type: "spring",
                    stiffness: 80,
                    damping: 15,
                    delay: index * 0.15,
                    duration: 0.8
                  }
                } : {}}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
              >
                {/* Content */}
                <div className={`flex-1 ${index % 2 === 0 ? 'lg:pr-16 lg:text-right' : 'lg:pl-16 lg:text-left'}`}>
                  <motion.div
                    whileHover={{ scale: 1.02, y: -5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="glass-card p-6 sm:p-8 hover-glow cursor-pointer group"
                  >
                    {/* Step Number & Duration */}
                    <div className={`flex items-center gap-3 mb-4 ${index % 2 === 0 ? 'lg:justify-end' : ''}`}>
                      <span className={`text-4xl sm:text-5xl font-bold bg-gradient-to-br ${step.color} bg-clip-text text-transparent`}>
                        {step.number}
                      </span>
                      <span className="text-xs sm:text-sm text-gray-500 font-medium px-3 py-1 rounded-full bg-gray-800">
                        {step.duration}
                      </span>
                    </div>

                    {/* Icon */}
                    <div className={`inline-flex p-3 sm:p-4 rounded-2xl bg-gradient-to-br ${step.color} mb-4 group-hover:shadow-lg transition-shadow duration-300`}>
                      <step.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                    </div>

                    {/* Title */}
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
                      {step.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-400 text-sm sm:text-base mb-4 leading-relaxed">
                      {step.description}
                    </p>

                    {/* Details */}
                    <div className={`flex flex-wrap gap-2 ${index % 2 === 0 ? 'lg:justify-end' : ''}`}>
                      {step.details.map((detail, idx) => (
                        <motion.span
                          key={idx}
                          whileHover={{ scale: 1.05 }}
                          className={`px-3 py-1 text-xs font-medium rounded-full ${step.bgColor} bg-opacity-20 text-gray-300 border border-gray-700`}
                        >
                          {detail}
                        </motion.span>
                      ))}
                    </div>
                  </motion.div>
                </div>

                {/* Timeline Dot - Desktop */}
                <div className="hidden lg:flex items-center justify-center w-12">
                  <motion.div
                    whileHover={{ scale: 1.3 }}
                    className={`w-5 h-5 rounded-full bg-gradient-to-br ${step.color} border-4 border-[#0f172a] shadow-lg`}
                  >
                    <div className="w-full h-full rounded-full bg-white animate-pulse" />
                  </motion.div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden lg:block flex-1" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-center mt-16"
        >
          <p className="text-gray-400 mb-6 text-sm sm:text-base">
            Ready to start your project?
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-full font-semibold text-base sm:text-lg hover:shadow-2xl hover:shadow-indigo-500/25 transition-all duration-300"
          >
            Let's Work Together
            <FaArrowRight />
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default ProcessTimeline