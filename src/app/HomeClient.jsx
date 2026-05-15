'use client'
import { useEffect } from 'react'
import Hero from '@/components/Hero'
import ServicesGrid from '@/components/ServicesGrid'
import ProjectsSection from '@/components/ProjectsSection'
import ProcessTimeline from '@/components/ProcessTimeline'
import Testimonials from '@/components/Testimonials'
import CTASection from '@/components/CTASection'

export default function HomeClient() {
  useEffect(() => {
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault()
        const target = document.querySelector(this.getAttribute('href'))
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          })
        }
      })
    })
  }, [])

  return (
    <>
      <Hero />
      <ServicesGrid />
      <ProjectsSection />
      <ProcessTimeline />
      <Testimonials />
      <CTASection />
    </>
  )
}