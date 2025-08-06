'use client'

import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

export function TestimonialsSection() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const testimonials = [
    {
      text: "A Pousada Bistrô Savacipo superou todas as nossas expectativas. A combinação perfeita entre conforto, gastronomia excepcional e a beleza natural da Serra do Cipó fez de nossa estadia uma experiência inesquecível.",
      author: "Ana Clara e Rodrigo Mendes"
    },
    {
      text: "Como viajante frequente, posso dizer que esta pousada está entre as melhores que já visitei. A atenção aos detalhes, o atendimento impecável e a localização privilegiada fazem toda a diferença. Voltarei com certeza!",
      author: "Carlos Eduardo"
    },
    {
      text: "Levei minha família para um fim de semana e foi a melhor decisão. As crianças adoraram a piscina e as trilhas próximas, enquanto nós apreciamos o spa e o jantar no bistrô. Todos saímos renovados!",
      author: "Família Souza"
    }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [testimonials.length])

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="bg-[var(--primary-color)] text-white rounded-lg p-8 md:p-12 text-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-[var(--primary-color)] to-[var(--secondary-color)] opacity-90" />
      
      <div className="relative z-10">
        <h2 className="font-playfair text-3xl md:text-4xl mb-8">
          O Que Nossos Hóspedes Dizem
        </h2>
        
        <div className="max-w-4xl mx-auto relative">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 mb-6">
            <p className="text-lg md:text-xl italic leading-relaxed mb-6">
              "{testimonials[currentTestimonial].text}"
            </p>
            <p className="font-semibold text-[var(--accent-color)]">
              - {testimonials[currentTestimonial].author}
            </p>
          </div>
          
          <div className="flex justify-center items-center space-x-4">
            <button
              onClick={prevTestimonial}
              className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
            >
              <ChevronLeft size={24} />
            </button>
            
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentTestimonial ? 'bg-[var(--accent-color)]' : 'bg-white/30'
                  }`}
                />
              ))}
            </div>
            
            <button
              onClick={nextTestimonial}
              className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
