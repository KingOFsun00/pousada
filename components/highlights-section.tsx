import Image from 'next/image'
import { getImagePath } from '@/lib/github-pages'

export function HighlightsSection() {
  const highlights = [
    {
      title: 'Bistrô Gastronômico',
      description: 'Desfrute de pratos elaborados com ingredientes locais em nosso bistrô premiado, onde a gastronomia se encontra com a natureza.',
      image: getImagePath('/elegant-rustic-gastronomic-bistro.png')
    },
    {
      title: 'Sauna Rústica',
      description: 'Relaxe com nossos tratamentos que utilizam produtos orgânicos da região, em um ambiente que promove total harmonia e bem-estar.',
      image: getImagePath('/rustic-wood-stone-sauna.png')
    },
    {
      title: 'Experiências Personalizadas',
      description: 'Desde trilhas guiadas até jantares privativos, criamos experiências sob medida para tornar sua estadia verdadeiramente única.',
      image: getImagePath('/serra-do-cipo-trilha.png')
    }
  ]

  return (
    <section className="py-16">
      <h2 className="font-playfair text-3xl md:text-4xl text-[var(--primary-color)] text-center mb-12">
        Nossos Destaques
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {highlights.map((highlight, index) => (
          <div key={index} className="card overflow-hidden group">
            <div className="relative h-48 overflow-hidden">
              <Image
                src={highlight.image || "/placeholder.svg"}
                alt={highlight.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
              />
            </div>
            <div className="p-6">
              <h3 className="font-playfair text-xl text-[var(--primary-color)] mb-3">
                {highlight.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {highlight.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
