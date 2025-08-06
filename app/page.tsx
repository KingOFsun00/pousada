import { Hero } from '@/components/hero'
import { AboutSection } from '@/components/about-section'
import { HighlightsSection } from '@/components/highlights-section'
import { TestimonialsSection } from '@/components/testimonials-section'
import { NewsletterSection } from '@/components/newsletter-section'

export default function HomePage() {
  return (
    <main>
      <Hero />
      <div className="max-w-6xl mx-auto px-4 py-16 space-y-16">
        <AboutSection />
        <HighlightsSection />
        <TestimonialsSection />
        <NewsletterSection />
      </div>
    </main>
  )
}
