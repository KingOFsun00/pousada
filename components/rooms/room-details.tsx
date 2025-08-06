'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Check, Clock, Users, Bed, Bath, Wifi, Coffee } from 'lucide-react'
import Link from 'next/link'

export function RoomDetails() {
  const [activeRoom, setActiveRoom] = useState<string | null>(null)

  const roomDetails = {
    'chale-mata': {
      name: 'Chalé da Mata',
      description: 'Nosso Chalé da Mata é um refúgio íntimo cercado pela vegetação nativa da Serra do Cipó. Com arquitetura que harmoniza com o ambiente, oferece privacidade absoluta e todas as comodidades para uma estadia relaxante.',
      images: [
        '/placeholder.svg?height=400&width=600',
        '/placeholder.svg?height=400&width=600',
        '/placeholder.svg?height=400&width=600'
      ],
      amenities: [
        'Chalé privativo',
        'Cama Queen Size',
        'Banheiro privativo',
        'Aquecimento solar',
        'Varanda com rede',
        'Wi-Fi de alta velocidade',
        'Frigobar',
        'Café da manhã incluso'
      ],
      capacity: '2 pessoas',
      price: 'R$ 350',
      priceLabel: '/noite (casal)'
    },
    'chale-adobe': {
      name: 'Chalé de Adobe',
      description: 'Construído com técnicas tradicionais de adobe, nosso chalé oferece isolamento térmico natural combinado com um design contemporâneo. Perfeito para famílias que buscam conforto e contato com a natureza.',
      images: [
        '/placeholder.svg?height=400&width=600',
        '/placeholder.svg?height=400&width=600',
        '/placeholder.svg?height=400&width=600'
      ],
      amenities: [
        'Construção em adobe',
        '2 Camas Queen Size',
        'Banheiro privativo',
        'Varanda panorâmica',
        'TV de tela plana',
        'Wi-Fi de alta velocidade',
        'Frigobar',
        'Café da manhã gourmet'
      ],
      capacity: '4 pessoas',
      price: 'R$ 420',
      priceLabel: '/noite (até 4 pessoas)'
    },
    'suite-interna': {
      name: 'Suíte Interna',
      description: 'Nossa suíte interna oferece espaço amplo e funcional para grupos ou famílias. Com uma decoração aconchegante e todos os serviços da pousada à disposição, é a opção perfeita para quem valoriza praticidade.',
      images: [
        '/placeholder.svg?height=400&width=600',
        '/placeholder.svg?height=400&width=600',
        '/placeholder.svg?height=400&width=600'
      ],
      amenities: [
        'Cama King Size',
        '2 Camas de solteiro',
        'Banheiro compartilhado',
        'Área de estar',
        'Sofá-cama',
        'TV a cabo',
        'Wi-Fi de alta velocidade',
        'Café da manhã buffet'
      ],
      capacity: '4 pessoas',
      price: 'R$ 280',
      priceLabel: '/noite (até 2 pessoas)'
    }
  }

  const scheduleItems = [
    { label: 'Check-in:', time: '14h - 22h' },
    { label: 'Check-out:', time: 'até 12h' },
    { label: 'Café da manhã:', time: '7h30 - 10h' }
  ]

  return (
    <section className="space-y-8">
      {Object.entries(roomDetails).map(([roomId, room]) => (
        <div key={roomId} className="card p-8">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h2 className="font-playfair text-2xl md:text-3xl text-[var(--primary-color)] mb-2">
                {room.name}
              </h2>
              <p className="text-gray-600 text-lg">
                {room.description.split('.')[0]}.
              </p>
            </div>
            <button
              onClick={() => setActiveRoom(activeRoom === roomId ? null : roomId)}
              className="btn-secondary"
            >
              {activeRoom === roomId ? 'Ocultar' : 'Ver Detalhes'}
            </button>
          </div>

          {activeRoom === roomId && (
            <div className="animate-fade-in space-y-8">
              {/* Image Gallery */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {room.images.map((image, index) => (
                  <div key={index} className="relative h-64 rounded-lg overflow-hidden">
                    <Image
                      src={image || "/placeholder.svg"}
                      alt={`${room.name} - Imagem ${index + 1}`}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Description */}
                <div className="lg:col-span-2 space-y-6">
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <div className="flex items-center mb-4">
                      <div className="w-8 h-8 bg-[var(--primary-color)] rounded-full flex items-center justify-center mr-3">
                        <Users className="w-4 h-4 text-white" />
                      </div>
                      <h3 className="font-semibold text-lg">Descrição</h3>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      {room.description}
                    </p>
                  </div>

                  <div className="bg-gray-50 p-6 rounded-lg">
                    <div className="flex items-center mb-4">
                      <div className="w-8 h-8 bg-[var(--primary-color)] rounded-full flex items-center justify-center mr-3">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                      <h3 className="font-semibold text-lg">Comodidades</h3>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      {room.amenities.map((amenity, index) => (
                        <div key={index} className="flex items-center">
                          <Check className="w-4 h-4 text-green-600 mr-2 flex-shrink-0" />
                          <span className="text-sm">{amenity}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-gray-50 p-6 rounded-lg">
                    <div className="flex items-center mb-4">
                      <div className="w-8 h-8 bg-[var(--primary-color)] rounded-full flex items-center justify-center mr-3">
                        <Clock className="w-4 h-4 text-white" />
                      </div>
                      <h3 className="font-semibold text-lg">Horários</h3>
                    </div>
                    <div className="space-y-2">
                      {scheduleItems.map((item, index) => (
                        <div key={index} className="flex justify-between">
                          <span className="font-medium">{item.label}</span>
                          <span className="text-gray-600">{item.time}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Price Card */}
                <div className="bg-gradient-to-br from-[var(--primary-color)] to-[var(--secondary-color)] text-white p-6 rounded-lg h-fit">
                  <div className="text-center mb-6">
                    <div className="text-3xl font-bold mb-1">{room.price}</div>
                    <div className="text-sm opacity-90">{room.priceLabel}</div>
                    <div className="text-xs opacity-75 mt-2">Taxas e impostos inclusos</div>
                  </div>
                  
                  <div className="space-y-3 mb-6 text-sm">
                    <div className="flex items-center">
                      <Users className="w-4 h-4 mr-2" />
                      <span>Capacidade: {room.capacity}</span>
                    </div>
                  </div>

                  <Link
                    href={`/reserva?quarto=${roomId}`}
                    className="block w-full bg-white text-[var(--primary-color)] text-center py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                  >
                    Reservar Agora
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      ))}
    </section>
  )
}
