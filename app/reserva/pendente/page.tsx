'use client'

import { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { Clock, Calendar, Home } from 'lucide-react'

export default function ReservaPendentePage() {
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
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-yellow-100 flex items-center justify-center py-12 px-4">
      <div className="max-w-md w-full">
        <div className="card p-8 text-center">
          <div className="w-20 h-20 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <Clock className="w-12 h-12 text-yellow-600" />
          </div>
          
          <h1 className="font-playfair text-3xl font-bold text-yellow-800 mb-4">
            Pagamento Pendente
          </h1>
          
          <p className="text-gray-600 mb-6">
            Seu pagamento está sendo processado. Você receberá uma confirmação por e-mail assim que for aprovado.
          </p>

          {paymentData && (
            <div className="bg-yellow-50 rounded-lg p-4 mb-6 text-left">
              <h3 className="font-semibold text-yellow-800 mb-2">Detalhes do Pagamento:</h3>
              <p className="text-sm text-yellow-700">ID: {paymentData.paymentId}</p>
              <p className="text-sm text-yellow-700">Status: Pendente</p>
            </div>
          )}

          <div className="space-y-3">
            <Link href="/dashboard" className="btn-primary w-full inline-block">
              <Calendar className="w-5 h-5 inline mr-2" />
              Acompanhar Status
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
