'use client'

import { useState, useEffect } from 'react'
import { Calendar, CreditCard, User, Settings, LogOut, Bell } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useAuth } from '@/lib/simple-auth'
import { LoadingSpinner } from '@/components/loading-spinner'

export default function DashboardPage() {
  const { user, logout, isLoading } = useAuth()
  const router = useRouter()
  const [activeTab, setActiveTab] = useState('reservas')

  useEffect(() => {
    if (!isLoading && !user) {
      router.push('/login')
    }
  }, [user, isLoading, router])

  if (isLoading) {
    return <LoadingSpinner />
  }

  if (!user) {
    return null
  }

  const handleSignOut = () => {
    logout()
    router.push('/')
  }

  const mockReservations = [
    {
      id: '1',
      quarto: 'Chalé da Mata',
      checkin: '2024-02-15',
      checkout: '2024-02-18',
      status: 'confirmada',
      valor: 1050
    },
    {
      id: '2',
      quarto: 'Chalé de Adobe',
      checkin: '2024-03-10',
      checkout: '2024-03-13',
      status: 'pendente',
      valor: 1260
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <h1 className="font-playfair text-2xl font-bold text-amber-800">
                Dashboard
              </h1>
              <span className="text-gray-500">|</span>
              <span className="text-gray-600">Bem-vindo, {user.name}</span>
            </div>
            <div className="flex items-center space-x-4">
              <button className="p-2 text-gray-500 hover:text-amber-600 relative">
                <Bell size={20} />
                <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
              </button>
              <button
                onClick={handleSignOut}
                className="flex items-center space-x-2 text-gray-600 hover:text-amber-600"
              >
                <LogOut size={20} />
                <span>Sair</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="card p-6">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                  <User className="w-6 h-6 text-amber-600" />
                </div>
                <div>
                  <h3 className="font-semibold">{user.name}</h3>
                  <p className="text-sm text-gray-500">{user.email}</p>
                </div>
              </div>

              <nav className="space-y-2">
                <button
                  onClick={() => setActiveTab('reservas')}
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-colors ${
                    activeTab === 'reservas' ? 'bg-amber-100 text-amber-800' : 'hover:bg-gray-100'
                  }`}
                >
                  <Calendar size={20} />
                  <span>Minhas Reservas</span>
                </button>
                <button
                  onClick={() => setActiveTab('pagamentos')}
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-colors ${
                    activeTab === 'pagamentos' ? 'bg-amber-100 text-amber-800' : 'hover:bg-gray-100'
                  }`}
                >
                  <CreditCard size={20} />
                  <span>Pagamentos</span>
                </button>
                <button
                  onClick={() => setActiveTab('perfil')}
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-colors ${
                    activeTab === 'perfil' ? 'bg-amber-100 text-amber-800' : 'hover:bg-gray-100'
                  }`}
                >
                  <Settings size={20} />
                  <span>Meu Perfil</span>
                </button>
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {activeTab === 'reservas' && (
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <h2 className="font-playfair text-2xl font-bold text-gray-900">
                    Minhas Reservas
                  </h2>
                  <button
                    onClick={() => router.push('/reserva')}
                    className="btn-primary"
                  >
                    Nova Reserva
                  </button>
                </div>

                <div className="space-y-4">
                  {mockReservations.map((reserva) => (
                    <div key={reserva.id} className="card p-6">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-playfair text-xl font-semibold mb-2">
                            {reserva.quarto}
                          </h3>
                          <div className="space-y-1 text-gray-600">
                            <p>Check-in: {new Date(reserva.checkin).toLocaleDateString('pt-BR')}</p>
                            <p>Check-out: {new Date(reserva.checkout).toLocaleDateString('pt-BR')}</p>
                            <p className="font-semibold">Valor: R$ {reserva.valor}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                            reserva.status === 'confirmada' 
                              ? 'bg-green-100 text-green-800' 
                              : 'bg-yellow-100 text-yellow-800'
                          }`}>
                            {reserva.status === 'confirmada' ? 'Confirmada' : 'Pendente'}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'pagamentos' && (
              <div className="space-y-6">
                <h2 className="font-playfair text-2xl font-bold text-gray-900">
                  Histórico de Pagamentos
                </h2>
                <div className="card p-6 text-center text-gray-500">
                  <CreditCard size={48} className="mx-auto mb-4 opacity-50" />
                  <p>Nenhum pagamento encontrado</p>
                </div>
              </div>
            )}

            {activeTab === 'perfil' && (
              <div className="space-y-6">
                <h2 className="font-playfair text-2xl font-bold text-gray-900">
                  Meu Perfil
                </h2>
                <div className="card p-6">
                  <form className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Nome Completo
                      </label>
                      <input
                        type="text"
                        defaultValue={user.name}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        E-mail
                      </label>
                      <input
                        type="email"
                        defaultValue={user.email}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                      />
                    </div>
                    <button type="submit" className="btn-primary">
                      Salvar Alterações
                    </button>
                  </form>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
