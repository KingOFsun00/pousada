import Image from 'next/image'

export function ContactGallery() {
  const galleryImages = [
    {
      src: '/placeholder.svg?height=300&width=400',
      alt: 'Vista da Pousada',
      caption: 'Vista Panorâmica'
    },
    {
      src: '/placeholder.svg?height=300&width=400',
      alt: 'Quarto da Pousada',
      caption: 'Chalé Premium'
    },
    {
      src: '/placeholder.svg?height=300&width=400',
      alt: 'Área de Alimentação',
      caption: 'Bistrô Gastronômico'
    },
    {
      src: '/placeholder.svg?height=300&width=400',
      alt: 'Área de Lazer',
      caption: 'Área de Lazer'
    }
  ]

  return (
    <section>
      <h2 className="font-playfair text-3xl text-[var(--primary-color)] text-center mb-8">
        Conheça Nossos Espaços
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {galleryImages.map((image, index) => (
          <div key={index} className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
            <div className="relative h-64">
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
              <p className="font-semibold">{image.caption}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
