import ServicesGrid from '@/components/ServicesGrid'
import CTASection from '@/components/CTASection'

export const metadata = {
  title: 'Our Services - Pravaaha Digital',
  description: 'Explore our comprehensive digital services including web development, mobile apps, UI/UX design, and more.',
}

export default function ServicesPage() {
  return (
    <div className="pt-16">
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Our <span className="gradient-text">Services</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Comprehensive digital solutions tailored to your business needs
            </p>
          </div>
        </div>
      </div>
      <ServicesGrid />
      <CTASection />
    </div>
  )
}