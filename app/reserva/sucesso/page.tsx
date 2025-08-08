'use client'

import { useEffect, useState, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { CheckCircle, CreditCard, Home } from 'lucide-react'

function ReservaSucessoContent() {
  const searchParams = useSearchParams()
  const [paymentData, setPaymentData] = useState<any>(null)

  useEffect(() => {
    const paymentId = searchParams.get('payment_id')
    const status = searchParams.get('status')
    
    if (paymentId && status) {
      setPaymentData({
        paymentId,
        status,
        externalReference: searchParams.get('external_reference')
      })
    }
  }, [searchParams])

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-green-100 flex items-center justify-center py-12 px-4">
      <div className="max-w-md w-full">
        <div className="card p-8 text-center">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-12 h-12 text-green-600" />
          </div>
          
          <h1 className="font-playfair text-3xl font-bold text-green-800 mb-4">
            Pagamento Aprovado!
          </h1>
          
          <p className="text-gray-600 mb-6">
            Sua reserva foi confirmada com sucesso! Você receberá um e-mail com os detalhes da sua estadia.
          </p>

          {paymentData && (
            <div className="bg-green-50 rounded-lg p-4 mb-6 text-left">
              <h3 className="font-semibold text-green-800 mb-2">Detalhes do Pagamento:</h3>
              <p className="text-sm text-green-700">ID: {paymentData.paymentId}</p>
              <p className="text-sm text-green-700">Status: {paymentData.status}</p>
            </div>
          )}

          <div className="space-y-3">
            <Link href="/dashboard" className="btn-primary w-full inline-block">
              <CreditCard className="w-5 h-5 inline mr-2" />
              Ver Minhas Reservas
            </Link>
            
            <Link href="/" className="btn-secondary w-full inline-block">
              <Home className="w-5 h-5 inline mr-2" />
              Voltar ao Início
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function ReservaSucessoPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-green-100 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Carregando...</p>
        </div>
      </div>
    }>
      <ReservaSucessoContent />
    </Suspense>
  )
}
