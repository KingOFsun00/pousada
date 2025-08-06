import type { Metadata } from 'next'
import { Playfair_Display, Montserrat } from 'next/font/google'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { FloatingButtons } from '@/components/floating-buttons'
import { ThemeProvider } from '@/components/theme-provider'
import { ClientAuthProvider } from '@/components/providers/client-auth-provider'
import './globals.css'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Pousada Bistrô Savacipo | Refúgio Premium na Serra do Cipó',
  description: 'Pousada Bistrô Savacipo - Um refúgio de tranquilidade na Serra do Cipó com hospedagem premium e gastronomia requintada',
  keywords: 'pousada, serra do cipó, hospedagem, bistrô, ecoturismo, cachoeiras',
  authors: [{ name: 'Pousada Bistrô Savacipo' }],
  openGraph: {
    title: 'Pousada Bistrô Savacipo - Experiência Premium na Serra do Cipó',
    description: 'Descubra nosso refúgio de tranquilidade com hospedagem premium e gastronomia requintada',
    type: 'website',
    url: 'https://pousadabistrosavacipo.com.br',
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={`${playfair.variable} ${montserrat.variable} font-montserrat antialiased`}>
        <ClientAuthProvider>
          <ThemeProvider>
            <Navigation />
            {children}
            <Footer />
            <FloatingButtons />
          </ThemeProvider>
        </ClientAuthProvider>
      </body>
    </html>
  )
}
