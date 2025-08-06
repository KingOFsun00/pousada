'use client'

import { useState } from 'react'
import { Send } from 'lucide-react'

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      alert('Por favor, preencha todos os campos obrigatórios.')
      return
    }

    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 3000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
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
        <h2 className="font-playfair text-2xl text-[var(--primary-color)] mb-4">
          Mensagem Enviada!
        </h2>
        <p className="text-gray-600 mb-6">
          Recebemos sua mensagem. Entraremos em contato em breve.
        </p>
        <button
          onClick={() => setIsSubmitted(false)}
          className="btn-primary"
        >
          Nova Mensagem
        </button>
      </div>
    )
  }

  return (
    <div className="card p-8">
      <h2 className="font-playfair text-2xl text-[var(--primary-color)] mb-6">
        Envie uma Mensagem
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-[var(--primary-color)] mb-2">
            Nome Completo *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--secondary-color)] focus:border-transparent transition-colors"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-[var(--primary-color)] mb-2">
            E-mail *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--secondary-color)] focus:border-transparent transition-colors"
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-[var(--primary-color)] mb-2">
            Telefone
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--secondary-color)] focus:border-transparent transition-colors"
          />
        </div>

        <div>
          <label htmlFor="subject" className="block text-sm font-medium text-[var(--primary-color)] mb-2">
            Assunto *
          </label>
          <select
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--secondary-color)] focus:border-transparent transition-colors"
          >
            <option value="" disabled>Selecione um assunto</option>
            <option value="reserva">Reserva/Disponibilidade</option>
            <option value="duvida">Dúvida sobre acomodações</option>
            <option value="evento">Eventos/Grupos</option>
            <option value="outro">Outro assunto</option>
          </select>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-[var(--primary-color)] mb-2">
            Mensagem *
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={5}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--secondary-color)] focus:border-transparent transition-colors resize-vertical"
          />
        </div>

        <button type="submit" className="btn-primary w-full">
          <Send className="w-5 h-5 inline mr-2" />
          Enviar Mensagem
        </button>
      </form>
    </div>
  )
}
