import { useRef, useState } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import type { FAQItem } from '../types'

const faqs: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'Qual é o horário de funcionamento da Coopstar Express?',
    answer:
      'Funcionamos 24 horas por dia, de segunda a segunda (7 dias por semana). Atendemos com agendamento e hora marcada para garantir maior pontualidade e eficiência.',
  },
  {
    id: 'faq-2',
    question: 'Quais regiões de São Paulo vocês atendem?',
    answer:
      'Atendemos São Paulo Capital e toda região da Grande São Paulo, incluindo ABC Paulista, Guarulhos, Osasco e municípios próximos. Para regiões específicas, consulte nossa tabela de preços ou entre em contato.',
  },
  {
    id: 'faq-3',
    question: 'Que tipo de items vocês entregam?',
    answer:
      'Trabalhamos com documentos, correspondências, pequenos volumes, encomendas leves, materiais bancários, cartoriais e despachos em aeroportos. Para volumes maiores, consulte disponibilidade.',
  },
  {
    id: 'faq-4',
    question: 'Como faço para me cadastrar e utilizar os serviços?',
    answer:
      'O cadastro é simples e gratuito! Entre em contato conosco pelo telefone (11) 5052-3563 / 5051-4442 ou pelo e-mail coopstar_express@hotmail.com. Um representante irá orientá-lo no processo.',
  },
  {
    id: 'faq-5',
    question: 'Vocês têm serviço de delivery para empresas?',
    answer:
      'Sim! Implantamos serviços de delivery completo em restaurantes, pizzarias, farmácias, auto peças e outros negócios. Oferecemos o melhor custo-benefício para grandes volumes de entregas.',
  },
  {
    id: 'faq-6',
    question: 'Como funciona o agendamento com hora marcada?',
    answer:
      'Após o cadastro, você combina a coleta ou entrega com nossa equipe definindo horário e local. Respeitamos rigorosamente os horários agendados para garantir a satisfação dos nossos clientes.',
  },
]

export default function FAQ() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const [openId, setOpenId] = useState<string | null>(null)

  const toggle = (id: string) => setOpenId(prev => (prev === id ? null : id))

  return (
    <section
      id="faq"
      ref={ref}
      aria-label="Perguntas frequentes"
      className="section-padding"
      style={{ backgroundColor: 'var(--color-surface)' }}
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span
            className="inline-block text-xs font-bold tracking-widest uppercase mb-4 px-3 py-1 rounded-full"
            style={{
              color: 'var(--color-primary)',
              backgroundColor: 'rgba(230,48,0,0.1)',
              border: '1px solid rgba(230,48,0,0.2)',
            }}
          >
            Tire suas dúvidas
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4">
            Perguntas Frequentes
          </h2>
          <div className="w-16 h-1 mx-auto rounded-full" style={{ background: 'var(--color-primary)' }} />
        </motion.div>

        {/* Accordion */}
        <div className="flex flex-col gap-3" role="list">
          {faqs.map((faq, index) => {
            const isOpen = openId === faq.id
            return (
              <motion.div
                key={faq.id}
                role="listitem"
                initial={{ opacity: 0, y: 16 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.08, duration: 0.45 }}
                className="rounded-xl overflow-hidden"
                style={{
                  backgroundColor: 'var(--color-surface-card)',
                  border: `1px solid ${isOpen ? 'rgba(230,48,0,0.3)' : 'var(--color-border)'}`,
                  transition: 'border-color 0.25s ease',
                }}
              >
                <button
                  id={`faq-btn-${faq.id}`}
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${faq.id}`}
                  onClick={() => toggle(faq.id)}
                  className="w-full flex items-center justify-between p-5 text-left gap-4 transition-colors hover:bg-white/[0.02]"
                >
                  <span className="text-sm sm:text-base font-semibold text-white pr-2">
                    {faq.question}
                  </span>
                  <motion.span
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.25 }}
                    className="flex-shrink-0"
                    style={{ color: isOpen ? 'var(--color-primary)' : 'var(--color-text-muted)' }}
                    aria-hidden="true"
                  >
                    <ChevronDown size={18} />
                  </motion.span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`faq-panel-${faq.id}`}
                      role="region"
                      aria-labelledby={`faq-btn-${faq.id}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                    >
                      <div
                        className="px-5 pb-5 text-sm leading-relaxed"
                        style={{ color: 'var(--color-text-muted)' }}
                      >
                        <div
                          className="w-full h-px mb-4"
                          style={{ backgroundColor: 'var(--color-border)' }}
                          aria-hidden="true"
                        />
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
