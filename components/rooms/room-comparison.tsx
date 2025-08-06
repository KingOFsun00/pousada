import { Check, X, Users, Bed, Bath, Eye } from 'lucide-react'
import Link from 'next/link'

export function RoomComparison() {
  const features = [
    {
      name: 'Capacidade',
      icon: Users,
      chaleMata: { value: '2 pessoas', highlight: true, description: 'Ideal para casais' },
      chaleAdobe: { value: '4 pessoas', highlight: true, description: '2 adultos + 2 crianças' },
      suiteInterna: { value: '4 pessoas', highlight: true, description: 'Grupos pequenos' }
    },
    {
      name: 'Cama Queen/King',
      icon: Bed,
      chaleMata: { value: '1 Queen Size', available: true, description: 'Colchão premium' },
      chaleAdobe: { value: '2 Queen Size', available: true, description: 'Extra confortáveis' },
      suiteInterna: { value: '1 King Size', available: true, description: '+ 2 solteiros' }
    },
    {
      name: 'Banheiro Privativo',
      icon: Bath,
      chaleMata: { available: true, description: 'Com aquecimento' },
      chaleAdobe: { available: true, description: 'Ducha dupla' },
      suiteInterna: { available: false, description: 'Compartilhado' }
    },
    {
      name: 'Varanda Privativa',
      icon: Eye,
      chaleMata: { available: true, description: 'Com rede e vista' },
      chaleAdobe: { available: true, description: 'Mobiliário rústico' },
      suiteInterna: { available: false, description: 'Área comum disponível' }
    },
    {
      name: 'Vista Panorâmica',
      icon: Eye,
      chaleMata: { value: 'Mata Nativa', description: 'Floresta preservada' },
      chaleAdobe: { value: 'Serra do Cipó', description: 'Pôr do sol incrível' },
      suiteInterna: { available: false, description: 'Vista interna' }
    },
    {
      name: 'Café da Manhã',
      icon: Eye,
      chaleMata: { value: 'Incluso', description: 'Produtos regionais' },
      chaleAdobe: { value: 'Gourmet', description: 'Opções especiais' },
      suiteInterna: { value: 'Buffet', description: 'Variedade completa' }
    }
  ]

  const rooms = [
    {
      id: 'chale-mata',
      name: 'Chalé da Mata',
      subtitle: 'Romântico & Privativo',
      key: 'chaleMata'
    },
    {
      id: 'chale-adobe',
      name: 'Chalé de Adobe',
      subtitle: 'Família & Conforto',
      key: 'chaleAdobe'
    },
    {
      id: 'suite-interna',
      name: 'Suíte Interna',
      subtitle: 'Prático & Econômico',
      key: 'suiteInterna'
    }
  ]

  return (
    <section className="py-16">
      <div className="text-center mb-12">
        <h2 className="font-playfair text-3xl md:text-4xl text-[var(--primary-color)] mb-4">
          Comparação Detalhada Entre Nossas Acomodações
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Confira as diferenças entre nossos espaços para escolher o ideal para sua estadia
        </p>
      </div>

      <div className="overflow-x-auto">
        <div className="min-w-full">
          {/* Header */}
          <div className="grid grid-cols-4 gap-4 mb-8">
            <div className="p-4">
              <h3 className="font-playfair text-xl font-semibold text-[var(--primary-color)]">
                Características
              </h3>
            </div>
            {rooms.map((room) => (
              <div key={room.id} className="card p-4 text-center">
                <h3 className="font-playfair text-lg font-semibold text-[var(--primary-color)] mb-1">
                  {room.name}
                </h3>
                <p className="text-sm text-gray-600">{room.subtitle}</p>
              </div>
            ))}
          </div>

          {/* Features */}
          <div className="space-y-4">
            {features.map((feature, index) => (
              <div key={index} className="grid grid-cols-4 gap-4 items-center py-4 border-b border-gray-100">
                <div className="flex items-center space-x-3 p-4">
                  <div className="w-8 h-8 bg-[var(--light-color)] rounded-full flex items-center justify-center">
                    <feature.icon className="w-4 h-4 text-[var(--primary-color)]" />
                  </div>
                  <span className="font-medium">{feature.name}</span>
                </div>

                {rooms.map((room) => {
                  const roomFeature = feature[room.key as keyof typeof feature] as any
                  
                  return (
                    <div key={room.id} className="p-4 text-center">
                      {roomFeature.available !== undefined ? (
                        <div className="space-y-1">
                          {roomFeature.available ? (
                            <Check className="w-6 h-6 text-green-600 mx-auto" />
                          ) : (
                            <X className="w-6 h-6 text-red-500 mx-auto" />
                          )}
                          <p className="text-xs text-gray-600">{roomFeature.description}</p>
                        </div>
                      ) : (
                        <div className="space-y-1">
                          <p className={`font-medium ${roomFeature.highlight ? 'text-[var(--primary-color)]' : ''}`}>
                            {roomFeature.value}
                          </p>
                          <p className="text-xs text-gray-600">{roomFeature.description}</p>
                        </div>
                      )}
                    </div>
                  )
                })}
              </div>
            ))}
          </div>

          {/* Notes */}
          <div className="mt-8 p-6 bg-[var(--light-color)] rounded-lg">
            <p className="text-sm text-gray-700 mb-4">
              <strong>Observações:</strong> Todos os quartos incluem Wi-Fi gratuito, roupa de cama premium, 
              amenities naturais e serviço de limpeza diário.
            </p>
            <div className="text-center">
              <Link href="/reserva" className="btn-primary">
                Reservar Agora
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
