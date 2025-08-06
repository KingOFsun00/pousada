'use client'

import { useState } from 'react'
import Image from 'next/image'
import { getImagePath } from '@/lib/github-pages'

export function AboutSection() {
  const [showDescription, setShowDescription] = useState(false)
  const [showImages, setShowImages] = useState(false)

  const galleryImages = [
    {
      src: getImagePath('/cachoeira-tombador-serra-do-cipo.png'),
      alt: 'Cachoeira do Tombador',
      caption: 'Cachoeira do Tombador'
    },
    {
      src: getImagePath('/cachoeira-congonhas-cipó.png'),
      alt: 'Cachoeira de Congonhas',
      caption: 'Cachoeira de Congonhas'
    },
    {
      src: getImagePath('/cachoeira-da-farinha-serra-do-cipo.png'),
      alt: 'Cachoeira da Farinha',
      caption: 'Cachoeira da Farinha'
    },
    {
      src: getImagePath('/cachoeira-sempre-viva.png'),
      alt: 'Cachoeira do Sempre-Viva',
      caption: 'Cachoeira do Sempre-Viva'
    }
  ]

  return (
    <section className="card p-8 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-[var(--primary-color)] to-[var(--secondary-color)]" />
      
      <h2 
        className="font-playfair text-3xl md:text-4xl text-[var(--primary-color)] mb-6 cursor-pointer hover:text-[var(--dark-color)] transition-colors relative inline-block group"
        onClick={() => setShowDescription(!showDescription)}
      >
        Sobre Nós
        <span className="absolute bottom-0 left-0 w-12 h-1 bg-[var(--secondary-color)] transition-all duration-300 group-hover:w-24" />
      </h2>

      {showDescription && (
        <div className="bg-[var(--light-color)] p-6 rounded-lg mt-6 animate-fade-in space-y-4">
          <p className="text-lg leading-relaxed">
            Bem-vindo à Pousada Bistrô Savacipo, seu refúgio de tranquilidade no coração da Serra do Cipó. 
            Combinando o charme rústico da região com o conforto moderno, nossa pousada oferece uma experiência 
            única para quem busca reconectar-se com a natureza sem abrir mão do requinte.
          </p>
          
          <p className="text-lg leading-relaxed">
            Localizada a poucos minutos das mais belas cachoeiras da região, nossa propriedade foi cuidadosamente 
            projetada para harmonizar com a paisagem exuberante que nos rodeia. Cada detalhe, desde a arquitetura 
            até o cardápio do nosso bistrô, foi pensado para proporcionar uma experiência autêntica e memorável.
          </p>
          
          <p className="text-lg leading-relaxed">
            Nossa equipe está comprometida em oferecer um atendimento personalizado, garantindo que cada hóspede 
            se sinta especial. Seja para um fim de semana romântico, férias em família ou uma escapada solo, 
            a Pousada Bistrô Savacipo é o lugar perfeito para criar memórias inesquecíveis.
          </p>
        </div>
      )}
      
      <button
        className="mt-6 px-6 py-3 bg-[var(--light-color)] text-[var(--secondary-color)] font-semibold rounded-full border-2 border-[var(--secondary-color)] hover:bg-[var(--secondary-color)] hover:text-white transition-all duration-300 hover:-translate-y-1"
        onClick={() => setShowImages(!showImages)}
      >
        Explore a Beleza da Nossa Região
      </button>
      
      {showImages && (
        <div className="mt-8 animate-fade-in">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {galleryImages.map((image, index) => (
              <div key={index} className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="font-semibold">{image.caption}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  )
}
