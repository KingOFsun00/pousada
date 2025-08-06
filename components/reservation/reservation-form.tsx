'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Calendar, Users, Mail, Phone, User, MessageSquare, CreditCard } from 'lucide-react'
import { useAuth } from '@/lib/simple-auth'

export function ReservationForm() {
  const { user } = useAuth()
  const router = useRouter()
  const [formData, setFormData] = useState({
    nome: user?.name || '',
    email: user?.email || '',
    telefone: '',
    checkin: '',
    checkout: '',
    adultos: 1,
    criancas: 0,
    tipoQuarto: '',
    pacote: '',
    mensagem: '',
    newsletter: true
  })

  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isProcessing, setIsProcessing] = useState(false)

  const roomPrices: { [key: string]: number } = {
    'Chalé Adobe': 420,
    'Chalé Mata': 350,
    'Suite': 280,
    'Chalé Luxo': 500
  }

  const calculateTotal = () => {
    if (!formData.checkin || !formData.checkout || !formData.tipoQuarto) return 0
    
    const checkinDate = new Date(formData.checkin)
    const checkoutDate = new Date(formData.checkout)
    const nights = Math.ceil((checkoutDate.getTime() - checkinDate.getTime()) / (1000 * 60 * 60 * 24))
    
    const basePrice = roomPrices[formData.tipoQuarto] || 0
    return basePrice * nights
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Verificar se o usuário está logado
    if (!user) {
      router.push('/login?callbackUrl=/reserva')
      return
    }

    // Validação básica
    if (!formData.nome || !formData.email || !formData.checkin || !formData.checkout || !formData.tipoQuarto) {
      alert('Por favor, preencha todos os campos obrigatórios.')
      return
    }

    if (new Date(formData.checkout) <= new Date(formData.checkin)) {
      alert('A data de check-out deve ser posterior à data de check-in.')
      return
    }

    setIsProcessing(true)

    try {
      // Simular processamento da reserva
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      // Por enquanto, apenas mostrar sucesso
      setIsSubmitted(true)
    } catch (error) {
      console.error('Erro ao processar reserva:', error)
      alert('Erro ao processar reserva. Tente novamente.')
    } finally {
      setIsProcessing(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }))
  }

  if (isSubmitted) {
    return (
      <div className="card p-8 text-center">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h2 className="font-playfair text-2xl text-amber-800 mb-4">
          Reserva Enviada!
        </h2>
        <p className="text-gray-600 mb-6">
          Sua solicitação de reserva foi enviada com sucesso. Nossa equipe entrará em contato em breve para confirmação e pagamento.
        </p>
        <button
          onClick={() => router.push('/dashboard')}
          className="btn-primary"
        >
          Ver Minhas Reservas
        </button>
      </div>
    )
  }

  const totalPrice = calculateTotal()

  return (
    <div className="card p-8">
      <h1 className="font-playfair text-2xl md:text-3xl text-amber-800 mb-4">
        Faça Sua Reserva
      </h1>
      <p className="text-gray-600 mb-8">
        Preencha os detalhes abaixo para solicitar sua reserva. Campos marcados com * são obrigatórios.
      </p>

      {!user && (
        <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-6">
          <p className="text-amber-800 text-sm">
            <strong>Atenção:</strong> Você precisa estar logado para fazer uma reserva.{' '}
            <button
              onClick={() => router.push('/login?callbackUrl=/reserva')}
              className="underline hover:no-underline"
            >
              Faça login aqui
            </button>
          </p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="nome" className="block text-sm font-medium text-amber-800 mb-2">
              <User className="w-4 h-4 inline mr-2" />
              Nome Completo *
            </label>
            <input
              type="text"
              id="nome"
              name="nome"
              value={formData.nome}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-colors"
              placeholder="Seu nome completo"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-amber-800 mb-2">
              <Mail className="w-4 h-4 inline mr-2" />
              E-mail *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-colors"
              placeholder="seu@email.com"
            />
          </div>
        </div>

        <div>
          <label htmlFor="telefone" className="block text-sm font-medium text-amber-800 mb-2">
            <Phone className="w-4 h-4 inline mr-2" />
            Telefone *
          </label>
          <input
            type="tel"
            id="telefone"
            name="telefone"
            value={formData.telefone}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-colors"
            placeholder="(XX) XXXXX-XXXX"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="checkin" className="block text-sm font-medium text-amber-800 mb-2">
              <Calendar className="w-4 h-4 inline mr-2" />
              Check-in *
            </label>
            <input
              type="date"
              id="checkin"
              name="checkin"
              value={formData.checkin}
              onChange={handleChange}
              required
              min={new Date().toISOString().split('T')[0]}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-colors"
            />
          </div>

          <div>
            <label htmlFor="checkout" className="block text-sm font-medium text-amber-800 mb-2">
              <Calendar className="w-4 h-4 inline mr-2" />
              Check-out *
            </label>
            <input
              type="date"
              id="checkout"
              name="checkout"
              value={formData.checkout}
              onChange={handleChange}
              required
              min={formData.checkin || new Date().toISOString().split('T')[0]}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-colors"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="adultos" className="block text-sm font-medium text-amber-800 mb-2">
              <Users className="w-4 h-4 inline mr-2" />
              Adultos *
            </label>
            <input
              type="number"
              id="adultos"
              name="adultos"
              value={formData.adultos}
              onChange={handleChange}
              min="1"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-colors"
            />
          </div>

          <div>
            <label htmlFor="criancas" className="block text-sm font-medium text-amber-800 mb-2">
              <Users className="w-4 h-4 inline mr-2" />
              Crianças (0-12)
            </label>
            <input
              type="number"
              id="criancas"
              name="criancas"
              value={formData.criancas}
              onChange={handleChange}
              min="0"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-colors"
            />
          </div>
        </div>

        <div>
          <label htmlFor="tipoQuarto" className="block text-sm font-medium text-amber-800 mb-2">
            Tipo de Acomodação *
          </label>
          <select
            id="tipoQuarto"
            name="tipoQuarto"
            value={formData.tipoQuarto}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-colors"
          >
            <option value="" disabled>Selecione sua acomodação</option>
            <option value="Chalé Adobe">Chalé de Adobe - R$ 420/noite</option>
            <option value="Chalé Mata">Chalé da Mata - R$ 350/noite</option>
            <option value="Suite">Suíte Premium - R$ 280/noite</option>
            <option value="Chalé Luxo">Chalé de Luxo - R$ 500/noite</option>
          </select>
        </div>

        {totalPrice > 0 && (
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
            <div className="flex justify-between items-center">
              <span className="font-semibold text-amber-800">Valor Total Estimado:</span>
              <span className="text-2xl font-bold text-amber-800">R$ {totalPrice}</span>
            </div>
            <p className="text-sm text-amber-600 mt-1">
              {Math.ceil((new Date(formData.checkout).getTime() - new Date(formData.checkin).getTime()) / (1000 * 60 * 60 * 24))} noites
            </p>
          </div>
        )}

        <div>
          <label htmlFor="mensagem" className="block text-sm font-medium text-amber-800 mb-2">
            <MessageSquare className="w-4 h-4 inline mr-2" />
            Pedidos Especiais ou Informações Adicionais
          </label>
          <textarea
            id="mensagem"
            name="mensagem"
            value={formData.mensagem}
            onChange={handleChange}
            rows={4}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-colors resize-vertical"
            placeholder="Nos conte sobre qualquer necessidade especial, restrição alimentar ou solicitação específica..."
          />
        </div>

        <button 
          type="submit" 
          className="btn-primary w-full text-lg py-4 disabled:opacity-50"
          disabled={isProcessing || !user}
        >
          <CreditCard className="w-5 h-5 inline mr-2" />
          {isProcessing ? 'Processando...' : 'Enviar Solicitação de Reserva'}
        </button>
      </form>
    </div>
  )
}
