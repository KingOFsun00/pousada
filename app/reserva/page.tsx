import { ReservationHero } from '@/components/reservation/reservation-hero'
import { ReservationForm } from '@/components/reservation/reservation-form'
import { ReservationHighlights } from '@/components/reservation/reservation-highlights'

export default function ReservaPage() {
  return (
    <main>
      <ReservationHero />
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <ReservationForm />
          <ReservationHighlights />
        </div>
      </div>
    </main>
  )
}
