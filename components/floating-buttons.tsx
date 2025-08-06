'use client'

import { useState, useEffect } from 'react'
import { ArrowUp, MessageCircle, Sun, Moon } from 'lucide-react'
import { useTheme } from 'next-themes'

export function FloatingButtons() {
  const [showBackToTop, setShowBackToTop] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  return (
    <>
      {/* WhatsApp Button */}
      <a
        href="https://wa.me/5531988880727"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 w-14 h-14 bg-green-500 text-white rounded-full flex items-center justify-center shadow-lg hover:bg-green-600 hover:scale-110 transition-all duration-300 z-50"
        aria-label="Fale conosco pelo WhatsApp"
      >
        <MessageCircle size={24} />
      </a>

      {/* Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-24 right-6 w-12 h-12 bg-[var(--primary-color)] text-white rounded-full flex items-center justify-center shadow-lg hover:bg-[var(--dark-color)] hover:-translate-y-1 transition-all duration-300 z-50"
          aria-label="Voltar ao topo"
        >
          <ArrowUp size={20} />
        </button>
      )}

      {/* Theme Toggle Button */}
      <button
        onClick={toggleTheme}
        className="fixed bottom-6 left-6 w-12 h-12 bg-[var(--primary-color)] text-white rounded-full flex items-center justify-center shadow-lg hover:bg-[var(--dark-color)] hover:rotate-180 transition-all duration-300 z-50"
        aria-label="Alternar tema"
      >
        {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
      </button>
    </>
  )
}
