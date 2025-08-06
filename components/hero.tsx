import Link from 'next/link'
import { getImagePath } from '@/lib/github-pages'

export function Hero() {
  return (
    <header className="relative h-screen flex items-center justify-center text-center text-white">
      <div 
        className="absolute inset-0 bg-cover bg-center hero-gradient"
        style={{
          backgroundImage: `linear-gradient(rgba(61, 39, 35, 0.9), rgba(61, 39, 35, 0.9)), url('${getImagePath('/serra-do-cipo-landscape.png')}')`
        }}
      />
      
      <div className="relative z-10 max-w-4xl mx-auto px-4">
        <h1 className="font-playfair text-4xl md:text-6xl font-bold mb-6 text-shadow animate-fade-in-up">
          Pousada Bistrô Savacipo
        </h1>
        <p className="text-xl md:text-2xl mb-8 font-light animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          Um refúgio de tranquilidade na Serra do Cipó
        </p>
        <Link 
          href="/reserva" 
          className="btn-secondary text-lg animate-fade-in-up inline-block"
          style={{ animationDelay: '0.4s' }}
        >
          Reserve Sua Estadia
        </Link>
      </div>
    </header>
  )
}
