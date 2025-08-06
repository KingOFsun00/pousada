'use client'

import { AuthProvider } from '@/lib/simple-auth'

export function ClientAuthProvider({ children }: { children: React.ReactNode }) {
  return <AuthProvider>{children}</AuthProvider>
}
