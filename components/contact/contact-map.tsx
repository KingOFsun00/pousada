export function ContactMap() {
  return (
    <section>
      <h2 className="font-playfair text-3xl text-[var(--primary-color)] text-center mb-8">
        Nossa Localização
      </h2>
      
      <div className="rounded-lg overflow-hidden shadow-lg h-96">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3750.715832919206!2d-43.88682292433954!3d-19.94035003817905!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa699c6e1a8a9f1%3A0x8a0b9a9d1a2b1c1d!2sSerra%20do%20Cip%C3%B3%2C%20Jaboticatubas%20-%20MG!5e0!3m2!1spt-BR!2sbr!4v1681234567890!5m2!1spt-BR!2sbr"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Localização da Pousada Bistrô Savacipo"
        />
      </div>
      
      <div className="mt-6 text-center">
        <p className="text-gray-600">
          <strong>Endereço:</strong> Final da reta do cemitério - Av. Lapinha João Congo<br />
          Serra do Cipó, Jaboticatubas - MG
        </p>
      </div>
    </section>
  )
}
