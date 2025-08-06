import { Phone, Mail, MessageCircle, MapPin, Hash, Clock } from 'lucide-react'

export function ContactInfo() {
  const contactMethods = [
    {
      icon: Phone,
      title: 'Telefone',
      content: '(31) 98888-0727',
      link: 'tel:+5531988880727',
      description: 'Atendimento 24 horas'
    },
    {
      icon: Mail,
      title: 'E-mail',
      content: 'contato@pousadasavacipo.com.br',
      link: 'mailto:contato@pousadasavacipo.com.br',
      description: 'Respostas em até 24h'
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      content: '(31) 98888-0727',
      link: 'https://wa.me/5531988880727',
      description: 'Reservas e informações'
    },
    {
      icon: MapPin,
      title: 'Endereço',
      content: 'Final da reta do cemitério - Av. Lapinha João Congo',
      description: 'Serra do Cipó, Jaboticatubas - MG'
    }
  ]

  const socialLinks = [
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/bistro_pousada_savacipo/',
      icon: 'fab fa-instagram'
    },
    {
      name: 'Facebook',
      url: 'https://www.facebook.com/',
      icon: 'fab fa-facebook-f'
    },
    {
      name: 'TripAdvisor',
      url: 'https://www.tripadvisor.com.br/',
      icon: 'fab fa-tripadvisor'
    }
  ]

  return (
    <div className="card p-8">
      <h1 className="font-playfair text-2xl md:text-3xl text-[var(--primary-color)] mb-4">
        Como Podemos Ajudar?
      </h1>
      <p className="text-gray-600 mb-8">
        Temos várias formas de contato para sua comodidade. Respondemos rapidamente a todas as mensagens e ligações.
      </p>

      <div className="space-y-6">
        {contactMethods.map((method, index) => (
          <div key={index} className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
            <div className="w-12 h-12 bg-[var(--light-color)] rounded-full flex items-center justify-center flex-shrink-0">
              <method.icon className="w-5 h-5 text-[var(--primary-color)]" />
            </div>
            <div className="flex-1">
              <h3 className="font-playfair text-lg text-[var(--primary-color)] mb-1">
                {method.title}
              </h3>
              {method.link ? (
                <a
                  href={method.link}
                  target={method.link.startsWith('http') ? '_blank' : undefined}
                  rel={method.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="text-gray-700 hover:text-[var(--primary-color)] transition-colors font-medium"
                >
                  {method.content}
                </a>
              ) : (
                <p className="text-gray-700 font-medium">{method.content}</p>
              )}
              <p className="text-sm text-gray-500 mt-1">{method.description}</p>
            </div>
          </div>
        ))}

        <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
          <div className="w-12 h-12 bg-[var(--light-color)] rounded-full flex items-center justify-center flex-shrink-0">
            <Hash className="w-5 h-5 text-[var(--primary-color)]" />
          </div>
          <div className="flex-1">
            <h3 className="font-playfair text-lg text-[var(--primary-color)] mb-2">
              Redes Sociais
            </h3>
            <p className="text-sm text-gray-500 mb-3">Siga-nos para novidades e promoções</p>
            <div className="flex space-x-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-[var(--light-color)] rounded-full flex items-center justify-center hover:bg-[var(--primary-color)] hover:text-white transition-all duration-300 hover:-translate-y-1"
                  title={social.name}
                >
                  <i className={social.icon}></i>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
