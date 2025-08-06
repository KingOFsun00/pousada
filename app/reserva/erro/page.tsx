'use client'

import { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { XCircle, RefreshCw, Home } from 'lucide-react'

export default function ReservaErroPage() {
  const searchParams = useSearchParams()
  const [errorData, setErrorData] = useState<any>(null)

  useEffect(() => {
    const paymentId = searchParams.get('payment_id')
    const status = searchParams.get('status')
    
    if (paymentId && status) {
      setErrorData({
        paymentId,
        status,
        externalReference: searchParams.get('external_reference')
      })
    }
  }, [searchParams])

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-red-100 flex items-center justify-center py-12 px-4">
      <div className="max-w-md w-full">
        <div className="card p-8 text-center">
          <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <XCircle className="w-12 h-12 text-red-600" />
          </div>
          
          <h1 className="font-playfair text-3xl font-bold text-red-800 mb-4">
            Pagamento Recusado
          </h1>
          
          <p className="text-gray-600 mb-6">
            Houve um problema com o processamento do seu pagamento. Verifique os dados do seu cartão e tente novamente.
          </p>

          {errorData && (
            <div className="bg-red-50 rounded-lg p-4 mb-6 text-left">
              <h3 className="font-semibold text-red-800 mb-2">Detalhes do Erro:</h3>
              <p className="text-sm text-red-700">ID: {errorData.paymentId}</p>
              <p className="text-sm text-red-700">Status: {errorData.status}</p>
            </div>
          )}

          <div className="space-y-3">
            <Link href="/reserva" className="btn-primary w-full inline-block">
              <RefreshCw className="w-5 h-5 inline mr-2" />
              Tentar Novamente
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
