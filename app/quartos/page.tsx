import { RoomsHero } from '@/components/rooms/rooms-hero'
import { RoomsGallery } from '@/components/rooms/rooms-gallery'
import { RoomDetails } from '@/components/rooms/room-details'
import { RoomComparison } from '@/components/rooms/room-comparison'

export default function QuartosPage() {
  return (
    <main>
      <RoomsHero />
      <div className="max-w-6xl mx-auto px-4 py-16 space-y-16">
        <RoomsGallery />
        <RoomDetails />
        <RoomComparison />
      </div>
    </main>
  )
}
