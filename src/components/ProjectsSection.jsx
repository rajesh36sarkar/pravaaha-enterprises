'use client'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt, FaPlus, FaEdit, FaTrash, FaTimes } from 'react-icons/fa'
import { useInView } from 'react-intersection-observer'
import { v4 as uuidv4 } from 'uuid'

const ProjectsSection = () => {
  const [projects, setProjects] = useState([])
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [editingProject, setEditingProject] = useState(null)
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    technologies: '',
    imageUrl: '',
    liveUrl: '',
    githubUrl: '',
    category: 'web',
  })

  // Load projects from localStorage on component mount
  useEffect(() => {
    const savedProjects = localStorage.getItem('pravaaha-projects')
    if (savedProjects) {
      setProjects(JSON.parse(savedProjects))
    } else {
      // Default projects
      const defaultProjects = [
        {
          id: uuidv4(),
          title: 'E-Commerce Platform',
          description: 'Full-featured online shopping platform with real-time inventory management.',
          technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
          imageUrl: '/images/projects/ecommerce.jpg',
          liveUrl: 'https://example.com',
          githubUrl: 'https://github.com',
          category: 'web',
        },
        {
          id: uuidv4(),
          title: 'Healthcare App',
          description: 'Telemedicine application connecting patients with healthcare providers.',
          technologies: ['Next.js', 'TypeScript', 'PostgreSQL', 'WebRTC'],
          imageUrl: '/images/projects/healthcare.jpg',
          liveUrl: 'https://example.com',
          githubUrl: 'https://github.com',
          category: 'mobile',
        },
        {
          id: uuidv4(),
          title: 'SaaS Dashboard',
          description: 'Analytics dashboard for business intelligence and reporting.',
          technologies: ['Vue.js', 'Python', 'Django', 'Chart.js'],
          imageUrl: '/images/projects/saas.jpg',
          liveUrl: 'https://example.com',
          githubUrl: 'https://github.com',
          category: 'web',
        },
      ]
      setProjects(defaultProjects)
      localStorage.setItem('pravaaha-projects', JSON.stringify(defaultProjects))
    }
  }, [])

  // Save projects to localStorage whenever they change
  useEffect(() => {
    if (projects.length > 0) {
      localStorage.setItem('pravaaha-projects', JSON.stringify(projects))
    }
  }, [projects])

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const technologiesArray = formData.technologies.split(',').map(tech => tech.trim())
    
    if (editingProject) {
      setProjects(projects.map(project => 
        project.id === editingProject.id 
          ? { ...project, ...formData, technologies: technologiesArray }
          : project
      ))
    } else {
      const newProject = {
        id: uuidv4(),
        ...formData,
        technologies: technologiesArray,
      }
      setProjects([newProject, ...projects])
    }
    
    closeModal()
  }

  const openEditModal = (project) => {
    setEditingProject(project)
    setFormData({
      title: project.title,
      description: project.description,
      technologies: project.technologies.join(', '),
      imageUrl: project.imageUrl,
      liveUrl: project.liveUrl,
      githubUrl: project.githubUrl,
      category: project.category,
    })
    setIsModalOpen(true)
  }

  const deleteProject = (id) => {
    if (window.confirm('Are you sure you want to delete this project?')) {
      setProjects(projects.filter(project => project.id !== id))
    }
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setEditingProject(null)
    setFormData({
      title: '',
      description: '',
      technologies: '',
      imageUrl: '',
      liveUrl: '',
      githubUrl: '',
      category: 'web',
    })
  }

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section className="py-20 relative" id="projects">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-8">
            Showcasing our best work and successful client collaborations
          </p>
          
          {/* Add Project Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsModalOpen(true)}
            className="px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-full font-semibold flex items-center gap-2 mx-auto hover:shadow-lg hover:shadow-indigo-500/25 transition-all duration-300"
          >
            <FaPlus />
            Add New Project
          </motion.button>
        </motion.div>

        {/* Projects Grid */}
        <div ref={ref} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-[#1e293b] rounded-2xl overflow-hidden border border-gray-800 hover:border-indigo-500/50 transition-all duration-300"
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 group-hover:opacity-75 transition-opacity duration-300" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-4xl font-bold text-white/20">{project.title.charAt(0)}</span>
                </div>
                
                {/* Action Buttons */}
                <div className="absolute top-2 right-2 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button
                    onClick={() => openEditModal(project)}
                    className="p-2 bg-yellow-500 rounded-full hover:bg-yellow-600 transition-colors"
                  >
                    <FaEdit className="text-white text-sm" />
                  </button>
                  <button
                    onClick={() => deleteProject(project.id)}
                    className="p-2 bg-red-500 rounded-full hover:bg-red-600 transition-colors"
                  >
                    <FaTrash className="text-white text-sm" />
                  </button>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                  <span className="px-3 py-1 text-xs font-medium rounded-full glass-card text-indigo-400">
                    {project.category}
                  </span>
                </div>
                
                <p className="text-gray-400 mb-4 line-clamp-2">{project.description}</p>
                
                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 text-xs font-medium rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                {/* Links */}
                <div className="flex gap-4">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-sm text-gray-400 hover:text-indigo-400 transition-colors"
                  >
                    <FaExternalLinkAlt className="w-3 h-3" />
                    Live Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-sm text-gray-400 hover:text-indigo-400 transition-colors"
                  >
                    <FaGithub className="w-3 h-3" />
                    Source Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal for Add/Edit Project */}
        <AnimatePresence>
          {isModalOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
              onClick={closeModal}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="bg-[#1e293b] rounded-2xl p-8 max-w-lg w-full max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-bold text-white">
                    {editingProject ? 'Edit Project' : 'Add New Project'}
                  </h3>
                  <button
                    onClick={closeModal}
                    className="p-2 hover:bg-gray-700 rounded-full transition-colors"
                  >
                    <FaTimes className="text-gray-400" />
                  </button>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1">Title</label>
                    <input
                      type="text"
                      name="title"
                      value={formData.title}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-indigo-500 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1">Description</label>
                    <textarea
                      name="description"
                      value={formData.description}
                      onChange={handleInputChange}
                      required
                      rows="3"
                      className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-indigo-500 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1">
                      Technologies (comma-separated)
                    </label>
                    <input
                      type="text"
                      name="technologies"
                      value={formData.technologies}
                      onChange={handleInputChange}
                      required
                      placeholder="React, Node.js, MongoDB"
                      className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-indigo-500 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1">Category</label>
                    <select
                      name="category"
                      value={formData.category}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-indigo-500 focus:outline-none"
                    >
                      <option value="web">Web Development</option>
                      <option value="mobile">Mobile App</option>
                      <option value="design">UI/UX Design</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1">Live URL</label>
                    <input
                      type="url"
                      name="liveUrl"
                      value={formData.liveUrl}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-indigo-500 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1">GitHub URL</label>
                    <input
                      type="url"
                      name="githubUrl"
                      value={formData.githubUrl}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-indigo-500 focus:outline-none"
                    />
                  </div>

                  <div className="flex gap-3 pt-4">
                    <button
                      type="submit"
                      className="flex-1 px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-indigo-500/25 transition-all duration-300"
                    >
                      {editingProject ? 'Update Project' : 'Add Project'}
                    </button>
                    <button
                      type="button"
                      onClick={closeModal}
                      className="px-6 py-3 glass-card text-white rounded-lg font-semibold hover:bg-white/10 transition-all duration-300"
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}

export default ProjectsSection