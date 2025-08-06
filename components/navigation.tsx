'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/quartos', label: 'Quartos' },
    { href: '/reserva', label: 'Reservas' },
    { href: '/contato', label: 'Contato' },
  ]

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-[var(--dark-color)]/98 py-2' : 'bg-[var(--primary-color)]/95 py-4'
    }`}>
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="text-[var(--accent-color)] font-playfair text-2xl font-bold">
            Pousada Bistrô Savacipo
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-white font-medium transition-all duration-300 relative group ${
                  pathname === item.href ? 'text-[var(--accent-color)]' : 'hover:text-[var(--accent-color)]'
                }`}
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[var(--accent-color)] transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
            <Link href="/reserva" className="btn-secondary">
              Reservar Agora
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-white font-medium transition-colors ${
                    pathname === item.href ? 'text-[var(--accent-color)]' : 'hover:text-[var(--accent-color)]'
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/reserva"
                className="btn-secondary inline-block text-center"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Reservar Agora
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
