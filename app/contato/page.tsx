import { ContactHero } from '@/components/contact/contact-hero'
import { ContactInfo } from '@/components/contact/contact-info'
import { ContactForm } from '@/components/contact/contact-form'
import { ContactGallery } from '@/components/contact/contact-gallery'
import { ContactMap } from '@/components/contact/contact-map'

export default function ContatoPage() {
  return (
    <main>
      <ContactHero />
      <div className="max-w-6xl mx-auto px-4 py-16 space-y-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <ContactInfo />
          <ContactForm />
        </div>
        <ContactGallery />
        <ContactMap />
      </div>
    </main>
  )
}
