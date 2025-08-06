import Link from 'next/link'
import { Facebook, Instagram, MapPin, Phone, Mail, Clock } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-[var(--dark-color)] text-white py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="font-playfair text-xl mb-4 relative">
              Pousada Bistrô Savacipo
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-[var(--accent-color)]" />
            </h3>
            <p className="text-[var(--accent-color)] mb-4 leading-relaxed">
              Um refúgio de tranquilidade na Serra do Cipó, onde a natureza encontra o conforto moderno.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[var(--accent-color)] hover:text-[var(--dark-color)] transition-all duration-300 hover:-translate-y-1">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[var(--accent-color)] hover:text-[var(--dark-color)] transition-all duration-300 hover:-translate-y-1">
                <Facebook size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-playfair text-xl mb-4 relative">
              Links Rápidos
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-[var(--accent-color)]" />
            </h3>
            <div className="space-y-2">
              <Link href="/" className="block text-[var(--accent-color)] hover:text-white transition-colors hover:pl-1">
                Home
              </Link>
              <Link href="/quartos" className="block text-[var(--accent-color)] hover:text-white transition-colors hover:pl-1">
                Nossos Quartos
              </Link>
              <Link href="/reserva" className="block text-[var(--accent-color)] hover:text-white transition-colors hover:pl-1">
                Faça sua Reserva
              </Link>
              <Link href="/contato" className="block text-[var(--accent-color)] hover:text-white transition-colors hover:pl-1">
                Contato
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-playfair text-xl mb-4 relative">
              Contato
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-[var(--accent-color)]" />
            </h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-[var(--accent-color)]">
                <MapPin size={18} />
                <span>Serra do Cipó, MG</span>
              </div>
              <div className="flex items-center space-x-3 text-[var(--accent-color)]">
                <Phone size={18} />
                <span>(31) 98888-0727</span>
              </div>
              <div className="flex items-center space-x-3 text-[var(--accent-color)]">
                <Mail size={18} />
                <span>contato@pousadasavacipo.com.br</span>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h3 className="font-playfair text-xl mb-4 relative">
              Horários
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-[var(--accent-color)]" />
            </h3>
            <div className="space-y-2 text-[var(--accent-color)]">
              <div className="flex justify-between">
                <span className="font-semibold">Recepção:</span>
                <span>24 horas</span>
              </div>
              <div className="flex justify-between">
                <span className="font-semibold">Bistrô:</span>
                <span>7h às 22h</span>
              </div>
              <div className="flex justify-between">
                <span className="font-semibold">Spa:</span>
                <span>9h às 20h</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center">
          <p className="text-[var(--accent-color)]">
            &copy; 2024 Pousada Bistrô Savacipo. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
