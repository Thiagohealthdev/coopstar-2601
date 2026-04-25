import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Clock, MapPin, Users, Award } from 'lucide-react'

const highlights = [
  {
    icon: Award,
    title: '9+ Anos',
    desc: 'De experiência no mercado de entregas e coletas',
  },
  {
    icon: Users,
    title: 'Equipe Especializada',
    desc: 'Profissionais treinados para suprir toda e qualquer necessidade',
  },
  {
    icon: Clock,
    title: 'Disponível 24h',
    desc: 'De segunda a segunda, com agendamento e hora marcada',
  },
  {
    icon: MapPin,
    title: 'SP e Grande SP',
    desc: 'Cobertura completa na capital e região metropolitana',
  },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

export default function About() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      id="quem-somos"
      ref={ref}
      aria-label="Quem somos"
      className="section-padding"
      style={{ backgroundColor: 'var(--color-surface-card)' }}
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
            Nossa História
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4">
            Quem Somos
          </h2>
          <div
            className="w-16 h-1 mx-auto rounded-full"
            style={{ background: 'var(--color-primary)' }}
          />
        </motion.div>

        {/* Content grid */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <p
              className="text-base sm:text-lg leading-relaxed mb-6"
              style={{ color: 'var(--color-text-muted)' }}
            >
              A <strong className="text-white font-semibold">Coopstar Express</strong> é uma empresa
              especializada no serviço de entregas e coletas, atuando há mais de{' '}
              <strong className="text-white font-semibold">nove anos</strong> no mercado.
            </p>
            <p
              className="text-base sm:text-lg leading-relaxed mb-6"
              style={{ color: 'var(--color-text-muted)' }}
            >
              Oferecemos ótimos serviços e desempenhamos uma função essencial para nossos
              clientes: <strong className="text-white font-semibold">agilizar os mais
              diversos processos</strong>, tornando-nos uma empresa de destaque neste segmento.
            </p>
            <p
              className="text-base sm:text-lg leading-relaxed"
              style={{ color: 'var(--color-text-muted)' }}
            >
              Atendemos em <strong className="text-white">São Paulo (Capital)</strong> e{' '}
              <strong className="text-white">Grande São Paulo</strong> com uma equipe especializada
              para suprir toda a necessidade e garantir o êxito da sua empresa.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {['Cadastro gratuito', '24h disponível', 'Hora marcada', 'SP e Grande SP'].map(tag => (
                <span
                  key={tag}
                  className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-medium"
                  style={{
                    backgroundColor: 'rgba(245,166,35,0.1)',
                    color: 'var(--color-accent)',
                    border: '1px solid rgba(245,166,35,0.2)',
                  }}
                >
                  <span
                    className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                    style={{ backgroundColor: 'var(--color-accent)' }}
                  />
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Foto da equipe */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-2xl">
              <img
                src="/imagens/about-team.png"
                alt="Equipe de motoboys da Coopstar Express prontos para entrega"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              {/* Overlay gradiente */}
              <div
                className="absolute inset-0"
                aria-hidden="true"
                style={{
                  background: 'linear-gradient(to top, rgba(14,14,14,0.75) 0%, transparent 60%)',
                }}
              />
              {/* Texto sobreposto */}
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <p className="text-white font-bold text-base">Equipe Coopstar Express</p>
                <p className="text-xs mt-0.5" style={{ color: 'rgba(255,255,255,0.65)' }}>
                  Profissionais especializados em logística urbana — Moema, SP
                </p>
              </div>
              {/* Border glow */}
              <div
                className="absolute inset-0 rounded-2xl pointer-events-none"
                aria-hidden="true"
                style={{ boxShadow: 'inset 0 0 0 1px rgba(230,48,0,0.15)' }}
              />
            </div>
          </motion.div>
        </div>

        {/* Highlights grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {highlights.map(({ icon: Icon, title, desc }) => (
            <motion.div
              key={title}
              variants={itemVariants}
              className="p-6 rounded-2xl card-glow"
              style={{
                backgroundColor: 'var(--color-surface)',
                border: '1px solid var(--color-border)',
              }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                style={{ backgroundColor: 'rgba(230,48,0,0.1)' }}
              >
                <Icon size={22} style={{ color: 'var(--color-primary)' }} aria-hidden="true" />
              </div>
              <h3 className="text-base font-bold text-white mb-2">{title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-muted)' }}>
                {desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
