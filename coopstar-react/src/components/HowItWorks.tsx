import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ClipboardList, CalendarCheck, Rocket } from 'lucide-react'
import type { Step } from '../types'

interface StepData extends Step {
  icon: React.ElementType
  color: string
}

const steps: StepData[] = [
  {
    number: '01',
    icon: ClipboardList,
    color: 'var(--color-primary)',
    title: 'Faça seu Cadastro',
    description:
      'Solicite o cadastro ou entre em contato com um de nossos representantes. O processo é rápido e gratuito.',
  },
  {
    number: '02',
    icon: CalendarCheck,
    color: 'var(--color-accent)',
    title: 'Agende a Coleta',
    description:
      'Agendamos com hora marcada conforme a sua necessidade. Atendemos 24 horas, de segunda a segunda.',
  },
  {
    number: '03',
    icon: Rocket,
    color: '#6C63FF',
    title: 'Entrega Realizada',
    description:
      'Nossa equipe especializada realiza a entrega de forma rápida e segura, garantindo total eficiência.',
  },
]

export default function HowItWorks() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      id="como-funciona"
      ref={ref}
      aria-label="Como funciona"
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
            Simples e rápido
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4">
            Como Funciona
          </h2>
          <p className="text-base sm:text-lg max-w-xl mx-auto" style={{ color: 'var(--color-text-muted)' }}>
            Em apenas 3 passos você tem um serviço de entrega profissional para sua empresa.
          </p>
          <div className="w-16 h-1 mx-auto rounded-full mt-4" style={{ background: 'var(--color-primary)' }} />
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connection line (desktop) */}
          <div
            className="hidden lg:block absolute top-12 left-[16.5%] right-[16.5%] h-px"
            style={{ background: 'linear-gradient(90deg, var(--color-border) 0%, var(--color-primary) 50%, var(--color-border) 100%)' }}
            aria-hidden="true"
          />

          <div className="grid sm:grid-cols-3 gap-8 lg:gap-12">
            {steps.map((step, index) => {
              const Icon = step.icon
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 32 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: index * 0.2, duration: 0.55, ease: 'easeOut' }}
                  className="flex flex-col items-center text-center"
                >
                  {/* Icon circle */}
                  <div className="relative mb-6">
                    {/* Outer ring */}
                    <div
                      className="w-24 h-24 rounded-full flex items-center justify-center"
                      style={{
                        border: `2px solid ${step.color}`,
                        backgroundColor: `${step.color}10`,
                      }}
                    >
                      <div
                        className="w-16 h-16 rounded-full flex items-center justify-center"
                        style={{ backgroundColor: `${step.color}20` }}
                      >
                        <Icon size={28} style={{ color: step.color }} aria-hidden="true" />
                      </div>
                    </div>

                    {/* Step number badge */}
                    <span
                      className="absolute -top-1 -right-1 w-7 h-7 rounded-full flex items-center justify-center text-xs font-black text-white"
                      style={{ backgroundColor: step.color }}
                      aria-label={`Passo ${step.number}`}
                    >
                      {step.number}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-3">{step.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-muted)' }}>
                    {step.description}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.7, duration: 0.5 }}
          className="text-center mt-14"
        >
          <button
            onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-sm font-bold text-white transition-all duration-200 hover:opacity-90 hover:scale-105 active:scale-95"
            style={{ background: 'var(--color-primary)', boxShadow: '0 4px 24px rgba(230,48,0,0.3)' }}
            aria-label="Iniciar cadastro — ir para seção de contato"
          >
            Começar Agora — É Grátis
          </button>
        </motion.div>
      </div>
    </section>
  )
}
