export function RoomsHero() {
  return (
    <header className="relative h-96 flex items-center justify-center text-center text-white">
      <div 
        className="absolute inset-0 bg-cover bg-center hero-gradient"
        style={{
          backgroundImage: `linear-gradient(rgba(61, 39, 35, 0.9), rgba(61, 39, 35, 0.9)), url('/luxury-rustic-hotel.png')`
        }}
      />
      
      <div className="relative z-10 max-w-4xl mx-auto px-4">
        <h1 className="font-playfair text-4xl md:text-5xl font-bold mb-4 text-shadow">
          Nossos Quartos e Chalés
        </h1>
        <p className="text-lg md:text-xl font-light">
          Cada espaço foi cuidadosamente projetado para oferecer conforto, privacidade e uma experiência única na Serra do Cipó
        </p>
      </div>
    </header>
  )
}
