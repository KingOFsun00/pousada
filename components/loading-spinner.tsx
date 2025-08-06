export function LoadingSpinner() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-amber-50 to-amber-100">
      <div className="text-center">
        <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-amber-800 mx-auto mb-4"></div>
        <p className="text-amber-800 font-medium">Carregando...</p>
      </div>
    </div>
  )
}
