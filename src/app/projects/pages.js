import ProjectsSection from '@/components/ProjectsSection'

export const metadata = {
  title: 'Our Projects - Pravaaha Digital',
  description: 'Explore our portfolio of successful digital projects and client work.',
}

export default function ProjectsPage() {
  return (
    <div className="pt-16">
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Our <span className="gradient-text">Projects</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Showcasing our best work and successful client collaborations
            </p>
          </div>
        </div>
      </div>
      <ProjectsSection />
    </div>
  )
}