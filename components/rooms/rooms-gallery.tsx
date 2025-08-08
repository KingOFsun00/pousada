'use client'

import { useState } from 'react'
import Image from 'next/image'

export function RoomsGallery() {
  const [selectedRoom, setSelectedRoom] = useState<string | null>(null)

  const rooms = [
    {
      id: 'chale-mata',
      name: 'Chalé da Mata',
      description: 'Conforto e privacidade em meio à natureza',
      image: '/chale-da-mata/standard_img1.jpeg',
      price: 'R$ 350/noite'
    },
    {
      id: 'chale-adobe',
      name: 'Chalé de Adobe',
      description: 'Conforto rústico com toques modernos',
      image: '/chale-adobe/suite_img1.jpeg',
      price: 'R$ 420/noite'
    },
    {
      id: 'suite-interna',
      name: 'Suíte Interna',
      description: 'Ideal para famílias ou grupos',
      image: '/suite-interna/luxo_img1.jpeg',
      price: 'R$ 280/noite'
    }
  ]

  return (
    <section>
      <div className="text-center mb-12">
        <h1 className="font-playfair text-3xl md:text-4xl text-[var(--primary-color)] mb-4">
          Conheça Nossas Acomodações
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Na Pousada Bistrô Savacipo, cada detalhe foi pensado para o seu conforto e bem-estar. 
          Escolha o quarto ideal para a sua estadia!
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {rooms.map((room) => (
          <div key={room.id} className="card overflow-hidden group">
            <div className="relative h-64 overflow-hidden">
              <Image
                src={room.image}
                alt={room.name}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-4 left-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p className="font-semibold text-lg">{room.price}</p>
              </div>
            </div>
            
            <div className="p-6">
              <h3 className="font-playfair text-xl text-[var(--primary-color)] mb-2">
                {room.name}
              </h3>
              <p className="text-gray-600 mb-4">
                {room.description}
              </p>
              <button
                onClick={() => setSelectedRoom(selectedRoom === room.id ? null : room.id)}
                className="btn-primary w-full"
              >
                {selectedRoom === room.id ? 'Ocultar Detalhes' : 'Ver Detalhes'}
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
