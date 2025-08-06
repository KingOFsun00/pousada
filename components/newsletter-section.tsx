'use client'

import { useState } from 'react'

export function NewsletterSection() {
  const [email, setEmail] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setIsSubmitted(true)
      setEmail('')
      setTimeout(() => setIsSubmitted(false), 3000)
    }
  }

  return (
    <section className="bg-[var(--light-color)] rounded-lg p-8 md:p-12 text-center">
      <h2 className="font-playfair text-3xl md:text-4xl text-[var(--primary-color)] mb-4">
        Fique Por Dentro
      </h2>
      <p className="text-lg mb-8 max-w-2xl mx-auto text-gray-600">
        Assine nossa newsletter e receba ofertas exclusivas, dicas de passeios e novidades sobre a Pousada Bistrô Savacipo.
      </p>
      
      {isSubmitted ? (
        <div className="bg-green-100 text-green-800 p-4 rounded-lg max-w-md mx-auto">
          Obrigado! Você receberá nossas novidades em breve.
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row max-w-md mx-auto gap-4">
          <input
            type="email"
            placeholder="Seu melhor e-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 px-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[var(--secondary-color)] focus:border-transparent"
            required
          />
          <button
            type="submit"
            className="btn-primary whitespace-nowrap"
          >
            Assinar
          </button>
        </form>
      )}
    </section>
  )
}
