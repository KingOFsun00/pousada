import { Check, Shield, Clock, Gift, Phone, Mail } from 'lucide-react'

export function ReservationHighlights() {
  const benefits = [
    'Melhor preço garantido - sem taxas de intermediários',
    'Upgrade gratuito para categoria superior (sujeito à disponibilidade)',
    'Check-in antecipado e check-out tardio (conforme disponibilidade)',
    'Brinde de boas-vindas exclusivo para reservas diretas',
    'Atendimento personalizado desde o primeiro contato'
  ]

  return (
    <div className="space-y-6">
      <div className="card p-8 sticky top-32">
        <h2 className="font-playfair text-2xl text-[var(--primary-color)] mb-6">
          Vantagens de Reservar Direto Conosco
        </h2>
        
        <ul className="space-y-4 mb-8">
          {benefits.map((benefit, index) => (
            <li key={index} className="flex items-start space-x-3">
              <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <Check className="w-3 h-3 text-green-600" />
              </div>
              <span className="text-gray-700 leading-relaxed">{benefit}</span>
            </li>
          ))}
        </ul>

        <div className="space-y-4">
          <div className="bg-[var(--light-color)] p-6 rounded-lg text-center">
            <div className="w-12 h-12 bg-[var(--primary-color)] rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <h3 className="font-playfair text-lg text-[var(--primary-color)] mb-2">
              Política de Cancelamento Flexível
            </h3>
            <p className="text-sm text-gray-600">
              Cancelamento gratuito até 7 dias antes da chegada. Após esse período, cobramos apenas a primeira noite.
            </p>
          </div>

          <div className="bg-[var(--light-color)] p-6 rounded-lg text-center">
            <div className="w-12 h-12 bg-[var(--secondary-color)] rounded-full flex items-center justify-center mx-auto mb-4">
              <Phone className="w-6 h-6 text-white" />
            </div>
            <h3 className="font-playfair text-lg text-[var(--primary-color)] mb-3">
              Precisa de Ajuda?
            </h3>
            <p className="text-sm text-gray-600 mb-3">
              Nossa equipe está disponível para ajudar no que for necessário.
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex items-center justify-center space-x-2">
                <Phone className="w-4 h-4 text-[var(--primary-color)]" />
                <span>(31) 98888-0727</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <Mail className="w-4 h-4 text-[var(--primary-color)]" />
                <span>reservas@pousadasavacipo.com.br</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
