import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react'

interface FormState {
  nome: string
  email: string
  telefone: string
  mensagem: string
}

const initialForm: FormState = { nome: '', email: '', telefone: '', mensagem: '' }

export default function Contact() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  const [form, setForm] = useState<FormState>(initialForm)
  const [errors, setErrors] = useState<Partial<FormState>>({})
  const [submitted, setSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const validate = (): boolean => {
    const newErrors: Partial<FormState> = {}
    if (!form.nome.trim()) newErrors.nome = 'Informe seu nome'
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) newErrors.email = 'E-mail inválido'
    if (!form.telefone.trim()) newErrors.telefone = 'Informe seu telefone'
    if (!form.mensagem.trim()) newErrors.mensagem = 'Escreva sua mensagem'
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
    if (errors[name as keyof FormState]) {
      setErrors(prev => ({ ...prev, [name]: undefined }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validate()) return
    setIsLoading(true)
    await new Promise(r => setTimeout(r, 1200)) // Simula envio
    setIsLoading(false)
    setSubmitted(true)
    setForm(initialForm)
  }

  const inputClass = (field: keyof FormState) =>
    `w-full px-4 py-3 rounded-xl text-sm text-white placeholder-gray-600 transition-colors outline-none focus:ring-2 ${
      errors[field]
        ? 'ring-1 ring-red-500 focus:ring-red-500'
        : 'focus:ring-primary'
    }`

  const inputStyle = {
    backgroundColor: 'var(--color-surface)',
    border: '1px solid var(--color-border)',
  }

  return (
    <section
      id="contato"
      ref={ref}
      aria-label="Contato e localização"
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
            Fale conosco
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4">
            Contato & Localização
          </h2>
          <div className="w-16 h-1 mx-auto rounded-full" style={{ background: 'var(--color-primary)' }} />
        </motion.div>

        <div className="grid lg:grid-cols-[1fr_1.4fr] gap-10 items-start">
          {/* Info column */}
          <motion.aside
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            aria-label="Informações de contato"
          >
            {/* Contact cards */}
            <div className="flex flex-col gap-4 mb-8">
              {[
                {
                  icon: MapPin,
                  label: 'Endereço',
                  value: 'Av. Juruçê, 898',
                  sub: 'Moema — São Paulo, SP',
                  color: 'var(--color-primary)',
                },
                {
                  icon: Phone,
                  label: 'Telefones',
                  value: '(11) 5052-3563',
                  sub: '(11) 5051-4442',
                  color: 'var(--color-accent)',
                  href: 'tel:+551150523563',
                },
                {
                  icon: Mail,
                  label: 'E-mail',
                  value: 'coopstar_express@hotmail.com',
                  color: '#6C63FF',
                  href: 'mailto:coopstar_express@hotmail.com',
                },
                {
                  icon: Clock,
                  label: 'Funcionamento',
                  value: '24 horas por dia',
                  sub: 'Segunda a Segunda — Hora marcada',
                  color: '#22C55E',
                },
              ].map(({ icon: Icon, label, value, sub, color, href }) => (
                <div
                  key={label}
                  className="flex items-start gap-4 p-4 rounded-xl"
                  style={{ backgroundColor: 'var(--color-surface-elevated)', border: '1px solid var(--color-border)' }}
                >
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
                    style={{ backgroundColor: `${color}18` }}
                  >
                    <Icon size={18} style={{ color }} aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-xs font-medium mb-0.5" style={{ color: 'var(--color-text-muted)' }}>
                      {label}
                    </p>
                    {href ? (
                      <a
                        href={href}
                        className="text-sm font-semibold text-white hover:underline"
                        aria-label={`${label}: ${value}`}
                      >
                        {value}
                      </a>
                    ) : (
                      <p className="text-sm font-semibold text-white">{value}</p>
                    )}
                    {sub && <p className="text-xs mt-0.5" style={{ color: 'var(--color-text-muted)' }}>{sub}</p>}
                  </div>
                </div>
              ))}
            </div>

            {/* OpenStreetMap */}
            <div className="rounded-2xl overflow-hidden" style={{ border: '1px solid var(--color-border)' }}>
              <iframe
                title="Localização da Coopstar Express — Av. Juruçê 898, Moema, São Paulo"
                src="https://www.openstreetmap.org/export/embed.html?bbox=-46.6729%2C-23.5935%2C-46.6529%2C-23.5835&layer=mapnik&marker=-23.5885%2C-46.6629"
                width="100%"
                height="240"
                style={{ border: 0, display: 'block' }}
                loading="lazy"
                allowFullScreen
                aria-label="Mapa de localização da Coopstar Express em Moema, São Paulo"
              />
            </div>
            <p className="text-xs mt-2 text-center" style={{ color: 'var(--color-text-subtle)' }}>
              Av. Juruçê, 898 — Moema, São Paulo
            </p>
          </motion.aside>

          {/* Form column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div
              className="rounded-2xl p-6 sm:p-8"
              style={{ backgroundColor: 'var(--color-surface-elevated)', border: '1px solid var(--color-border)' }}
            >
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-12 text-center gap-4">
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: 'rgba(34,197,94,0.1)' }}
                  >
                    <CheckCircle size={32} className="text-green-500" aria-hidden="true" />
                  </div>
                  <h3 className="text-xl font-bold text-white">Mensagem enviada!</h3>
                  <p style={{ color: 'var(--color-text-muted)' }} className="text-sm">
                    Obrigado pelo contato. Retornaremos em breve.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-2 text-sm font-semibold transition-opacity hover:opacity-70"
                    style={{ color: 'var(--color-primary)' }}
                  >
                    Enviar outra mensagem
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  noValidate
                  aria-label="Formulário de contato"
                >
                  <h3 className="text-xl font-bold text-white mb-2">Solicite um orçamento</h3>
                  <p className="text-sm mb-6" style={{ color: 'var(--color-text-muted)' }}>
                    Preencha o formulário e entraremos em contato rapidamente.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 mb-4">
                    {/* Nome */}
                    <div>
                      <label htmlFor="nome" className="block text-xs font-medium mb-1.5 text-gray-400">
                        Nome completo *
                      </label>
                      <input
                        id="nome"
                        name="nome"
                        type="text"
                        autoComplete="name"
                        value={form.nome}
                        onChange={handleChange}
                        placeholder="Seu nome"
                        className={inputClass('nome')}
                        style={inputStyle}
                        aria-required="true"
                        aria-invalid={!!errors.nome}
                        aria-describedby={errors.nome ? 'nome-error' : undefined}
                      />
                      {errors.nome && (
                        <p id="nome-error" className="text-xs mt-1 text-red-400" role="alert">{errors.nome}</p>
                      )}
                    </div>

                    {/* Email */}
                    <div>
                      <label htmlFor="email" className="block text-xs font-medium mb-1.5 text-gray-400">
                        E-mail *
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="seu@email.com"
                        className={inputClass('email')}
                        style={inputStyle}
                        aria-required="true"
                        aria-invalid={!!errors.email}
                        aria-describedby={errors.email ? 'email-error' : undefined}
                      />
                      {errors.email && (
                        <p id="email-error" className="text-xs mt-1 text-red-400" role="alert">{errors.email}</p>
                      )}
                    </div>
                  </div>

                  {/* Telefone */}
                  <div className="mb-4">
                    <label htmlFor="telefone" className="block text-xs font-medium mb-1.5 text-gray-400">
                      Telefone *
                    </label>
                    <input
                      id="telefone"
                      name="telefone"
                      type="tel"
                      autoComplete="tel"
                      value={form.telefone}
                      onChange={handleChange}
                      placeholder="(11) 00000-0000"
                      className={inputClass('telefone')}
                      style={inputStyle}
                      aria-required="true"
                      aria-invalid={!!errors.telefone}
                      aria-describedby={errors.telefone ? 'telefone-error' : undefined}
                    />
                    {errors.telefone && (
                      <p id="telefone-error" className="text-xs mt-1 text-red-400" role="alert">{errors.telefone}</p>
                    )}
                  </div>

                  {/* Mensagem */}
                  <div className="mb-6">
                    <label htmlFor="mensagem" className="block text-xs font-medium mb-1.5 text-gray-400">
                      Mensagem *
                    </label>
                    <textarea
                      id="mensagem"
                      name="mensagem"
                      rows={4}
                      value={form.mensagem}
                      onChange={handleChange}
                      placeholder="Descreva o serviço que precisa..."
                      className={inputClass('mensagem')}
                      style={{ ...inputStyle, resize: 'vertical' }}
                      aria-required="true"
                      aria-invalid={!!errors.mensagem}
                      aria-describedby={errors.mensagem ? 'mensagem-error' : undefined}
                    />
                    {errors.mensagem && (
                      <p id="mensagem-error" className="text-xs mt-1 text-red-400" role="alert">{errors.mensagem}</p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-bold text-white transition-all duration-200 hover:opacity-90 active:scale-95 disabled:opacity-60 disabled:cursor-not-allowed"
                    style={{ background: 'var(--color-primary)', boxShadow: '0 4px 20px rgba(230,48,0,0.3)' }}
                    aria-label="Enviar formulário de contato"
                  >
                    {isLoading ? (
                      <>
                        <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                        </svg>
                        Enviando...
                      </>
                    ) : (
                      <>
                        <Send size={15} aria-hidden="true" />
                        Enviar Mensagem
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
