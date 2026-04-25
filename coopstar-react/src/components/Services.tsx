import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Bike, Package, Map, ExternalLink, ArrowRight } from 'lucide-react'

interface ServiceData {
  id: string
  icon: React.ElementType
  accentColor: string
  badge?: string
  title: string
  description: string
  details: string[]
  image: string
  imageAlt: string
  cta?: { label: string; href: string }
}

const services: ServiceData[] = [
  {
    id: 'moto-frete',
    icon: Bike,
    accentColor: 'var(--color-primary)',
    badge: 'Mais popular',
    title: 'Moto Frete',
    description:
      'Entregas rápidas de documentos e pequenos volumes de um ponto a outro da cidade.',
    details: [
      'Serviços bancários e cartoriais',
      'Despachos e retiradas em aeroportos',
      'Pequenos volumes e encomendas',
      'Documentos urgentes',
    ],
    image: '/imagens/service-motofrete.png',
    imageAlt: 'Entrega de documentos por motoboy em São Paulo',
  },
  {
    id: 'delivery',
    icon: Package,
    accentColor: 'var(--color-accent)',
    title: 'Delivery Empresarial',
    description:
      'Sua empresa com grande volume de documentos ou encomendas leves? Implantamos um serviço de delivery completo.',
    details: [
      'Farmácias e drogarias',
      'Pizzarias e restaurantes',
      'Auto peças e materiais',
      'Melhor custo-benefício',
    ],
    image: '/imagens/service-delivery.png',
    imageAlt: 'Motoboy de delivery saindo de restaurante com pedido',
  },
  {
    id: 'fora-capital',
    icon: Map,
    accentColor: '#6C63FF',
    title: 'Fora da Capital',
    description:
      'Atendemos regiões fora da capital com tabela de preços competitiva e equipe dedicada.',
    details: [
      'Grande São Paulo',
      'ABC Paulista',
      'Guarulhos e região',
      'Consulte outras cidades',
    ],
    image: '/imagens/hero.png',
    imageAlt: 'Vista aérea da Grande São Paulo ao entardecer',
    cta: { label: 'Ver Tabela de Preços', href: '#contato' },
  },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
}

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] } },
}

export default function Services() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  const handleCTA = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="servicos"
      ref={ref}
      aria-label="Nossos serviços"
      className="section-padding"
      style={{ backgroundColor: 'var(--color-surface)' }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span
            className="inline-block text-xs font-bold tracking-widest uppercase mb-4 px-3 py-1 rounded-full"
            style={{
              color: 'var(--color-primary)',
              backgroundColor: 'rgba(230,48,0,0.1)',
              border: '1px solid rgba(230,48,0,0.2)',
            }}
          >
            O que oferecemos
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4">
            Nossos Serviços
          </h2>
          <p className="text-base sm:text-lg max-w-xl mx-auto" style={{ color: 'var(--color-text-muted)' }}>
            Soluções completas em logística urbana para a sua empresa crescer sem preocupações.
          </p>
          <div className="w-16 h-1 mx-auto rounded-full mt-4" style={{ background: 'var(--color-primary)' }} />
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service) => {
            const Icon = service.icon
            return (
              <motion.article
                key={service.id}
                variants={cardVariants}
                className="relative rounded-2xl overflow-hidden flex flex-col group card-glow"
                style={{
                  backgroundColor: 'var(--color-surface-card)',
                  border: '1px solid var(--color-border)',
                }}
                aria-label={`Serviço: ${service.title}`}
              >
                {/* Image area */}
                <div className="relative h-44 overflow-hidden flex-shrink-0">
                  <img
                    src={service.image}
                    alt={service.imageAlt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  {/* Overlay gradient */}
                  <div
                    className="absolute inset-0"
                    aria-hidden="true"
                    style={{
                      background: `linear-gradient(to bottom, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.6) 100%)`,
                    }}
                  />
                  {/* Color accent overlay */}
                  <div
                    className="absolute inset-0 opacity-20"
                    aria-hidden="true"
                    style={{ background: `linear-gradient(135deg, ${service.accentColor} 0%, transparent 60%)` }}
                  />
                  {/* Badge */}
                  {service.badge && (
                    <span
                      className="absolute top-3 right-3 text-xs font-bold px-2 py-0.5 rounded-full"
                      style={{
                        backgroundColor: 'rgba(230,48,0,0.9)',
                        color: '#fff',
                        border: '1px solid rgba(255,255,255,0.2)',
                      }}
                    >
                      {service.badge}
                    </span>
                  )}
                  {/* Icon floating */}
                  <div
                    className="absolute bottom-3 left-4 w-11 h-11 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                    style={{
                      backgroundColor: `${service.accentColor}CC`,
                      backdropFilter: 'blur(8px)',
                    }}
                  >
                    <Icon size={22} className="text-white" aria-hidden="true" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 flex flex-col flex-1">
                  <h3 className="text-lg font-bold text-white mb-2">{service.title}</h3>

                  <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--color-text-muted)' }}>
                    {service.description}
                  </p>

                  <ul className="flex flex-col gap-1.5 mb-5 flex-1" aria-label={`Detalhes de ${service.title}`}>
                    {service.details.map((detail) => (
                      <li key={detail} className="flex items-center gap-2 text-sm" style={{ color: 'var(--color-text-muted)' }}>
                        <span
                          className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                          style={{ backgroundColor: service.accentColor }}
                          aria-hidden="true"
                        />
                        {detail}
                      </li>
                    ))}
                  </ul>

                  {service.cta ? (
                    <button
                      onClick={() => handleCTA(service.cta!.href)}
                      className="flex items-center gap-2 text-sm font-semibold transition-opacity hover:opacity-80"
                      style={{ color: service.accentColor }}
                      aria-label={service.cta.label}
                    >
                      <ExternalLink size={14} aria-hidden="true" />
                      {service.cta.label}
                    </button>
                  ) : (
                    <button
                      onClick={() => handleCTA('#contato')}
                      className="flex items-center gap-2 text-sm font-semibold transition-opacity hover:opacity-80"
                      style={{ color: service.accentColor }}
                      aria-label={`Solicitar ${service.title}`}
                    >
                      Solicitar agora
                      <ArrowRight size={14} aria-hidden="true" />
                    </button>
                  )}
                </div>
              </motion.article>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
