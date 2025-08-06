'use client'

import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

export function useAuth(requireAuth: boolean = true) {
  const { data: session, status } = useSession()
  const router = useRouter()
  const [isReady, setIsReady] = useState(false)

  useEffect(() => {
    if (status === 'loading') return

    setIsReady(true)

    if (requireAuth && status === 'unauthenticated') {
      router.push('/login')
    }
  }, [status, requireAuth, router])

  return {
    session,
    status,
    isLoading: status === 'loading' || !isReady,
    isAuthenticated: status === 'authenticated',
    isReady
  }
}
