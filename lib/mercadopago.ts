'use server'

interface PaymentData {
  title: string
  quantity: number
  unit_price: number
  currency_id: string
  description: string
  payer: {
    name: string
    email: string
    phone: string
  }
  back_urls: {
    success: string
    failure: string
    pending: string
  }
  auto_return: string
  external_reference: string
}

export async function createMercadoPagoPreference(reservationData: any) {
  const accessToken = process.env.MERCADOPAGO_ACCESS_TOKEN
  
  if (!accessToken) {
    throw new Error('Token do Mercado Pago não configurado')
  }

  // Calcular o valor total da reserva
  const checkinDate = new Date(reservationData.checkin)
  const checkoutDate = new Date(reservationData.checkout)
  const nights = Math.ceil((checkoutDate.getTime() - checkinDate.getTime()) / (1000 * 60 * 60 * 24))
  
  const roomPrices: { [key: string]: number } = {
    'Chalé Adobe': 420,
    'Chalé Mata': 350,
    'Suite': 280,
    'Chalé Luxo': 500
  }
  
  const basePrice = roomPrices[reservationData.tipoQuarto] || 350
  const totalPrice = basePrice * nights

  const paymentData: PaymentData = {
    title: `Reserva - ${reservationData.tipoQuarto}`,
    quantity: nights,
    unit_price: basePrice,
    currency_id: 'BRL',
    description: `Reserva na Pousada Bistrô Savacipo de ${reservationData.checkin} até ${reservationData.checkout}`,
    payer: {
      name: reservationData.nome,
      email: reservationData.email,
      phone: reservationData.telefone
    },
    back_urls: {
      success: `${process.env.NEXT_PUBLIC_BASE_URL}/reserva/sucesso`,
      failure: `${process.env.NEXT_PUBLIC_BASE_URL}/reserva/erro`,
      pending: `${process.env.NEXT_PUBLIC_BASE_URL}/reserva/pendente`
    },
    auto_return: 'approved',
    external_reference: `reserva_${Date.now()}`
  }

  try {
    const response = await fetch('https://api.mercadopago.com/checkout/preferences', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${accessToken}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(paymentData)
    })

    if (!response.ok) {
      throw new Error('Erro ao criar preferência no Mercado Pago')
    }

    const preference = await response.json()
    
    // Aqui você salvaria a reserva no banco de dados
    await saveReservation({
      ...reservationData,
      preferenceId: preference.id,
      totalPrice,
      status: 'pending'
    })

    return {
      preferenceId: preference.id,
      initPoint: preference.init_point,
      sandboxInitPoint: preference.sandbox_init_point
    }
  } catch (error) {
    console.error('Erro ao criar preferência:', error)
    throw error
  }
}

async function saveReservation(reservationData: any) {
  // Aqui você salvaria no seu banco de dados
  // Por enquanto, vamos apenas simular
  console.log('Reserva salva:', reservationData)
  return reservationData
}

export async function verifyPayment(paymentId: string) {
  const accessToken = process.env.MERCADOPAGO_ACCESS_TOKEN
  
  try {
    const response = await fetch(`https://api.mercadopago.com/v1/payments/${paymentId}`, {
      headers: {
        'Authorization': `Bearer ${accessToken}`
      }
    })

    if (!response.ok) {
      throw new Error('Erro ao verificar pagamento')
    }

    const payment = await response.json()
    return payment
  } catch (error) {
    console.error('Erro ao verificar pagamento:', error)
    throw error
  }
}
