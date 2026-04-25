import { motion } from 'framer-motion'
import { ArrowDown, Clock, MapPin, Star, ShieldCheck } from 'lucide-react'
import type { Stat } from '../types'

const stats: Stat[] = [
  { value: '9+', label: 'Anos no mercado' },
  { value: '24h', label: 'Por dia, 7 dias' },
  { value: 'SP', label: 'Capital e Grande SP' },
]

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
}

export default function Hero() {
  const scrollToServices = () => {
    document.getElementById('servicos')?.scrollIntoView({ behavior: 'smooth' })
  }
  const scrollToContact = () => {
    document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="inicio"
      aria-label="Página inicial"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: 'linear-gradient(160deg, #0e0e0e 0%, #1a0800 60%, #0e0e0e 100%)' }}
    >
      {/* Background decorativo */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div
          className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-15 blur-3xl"
          style={{ background: 'radial-gradient(circle, var(--color-primary) 0%, transparent 70%)' }}
        />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,.15) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.15) 1px,transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      {/* Layout split */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 pt-20 pb-12 grid lg:grid-cols-2 gap-12 items-center min-h-screen">

        {/* ── LEFT: Text content ── */}
        <div className="flex flex-col items-start text-left">
          {/* Badge */}
          <motion.div
            custom={0}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold mb-8 border"
            style={{
              backgroundColor: 'rgba(230,48,0,0.1)',
              borderColor: 'rgba(230,48,0,0.3)',
              color: 'var(--color-primary-light)',
            }}
          >
            <Star size={12} fill="currentColor" aria-hidden="true" />
            Mais de 9 anos entregando confiança em São Paulo
          </motion.div>

          {/* Headline */}
          <motion.h1
            custom={1}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-white leading-tight tracking-tight mb-6"
          >
            Entregamos{' '}
            <span className="text-gradient">com agilidade</span>
            <br />
            você{' '}
            <span className="text-gradient">entrega resultados</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            custom={2}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="text-base sm:text-lg max-w-lg mb-10 leading-relaxed"
            style={{ color: 'var(--color-text-muted)' }}
          >
            Moto frete, delivery e coletas em São Paulo (Capital) e Grande SP.
            Funcionamos{' '}
            <strong className="text-white">24 horas</strong>, de segunda a segunda,
            com agendamento e hora marcada.
          </motion.p>

          {/* CTAs */}
          <motion.div
            custom={3}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
          >
            <button
              onClick={scrollToContact}
              className="px-8 py-4 rounded-xl text-base font-bold text-white transition-all duration-200 hover:opacity-90 hover:scale-105 active:scale-95"
              style={{
                background: 'var(--color-primary)',
                boxShadow: '0 4px 24px rgba(230,48,0,0.4)',
              }}
              aria-label="Solicitar orçamento grátis"
            >
              Solicitar Orçamento Grátis
            </button>
            <button
              onClick={scrollToServices}
              className="px-8 py-4 rounded-xl text-base font-semibold text-white transition-all duration-200 hover:bg-white/10 active:scale-95 border"
              style={{ borderColor: 'rgba(255,255,255,0.15)' }}
              aria-label="Ver nossos serviços"
            >
              Ver Serviços
            </button>
          </motion.div>

          {/* Stats */}
          <motion.div
            custom={4}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="mt-12 grid grid-cols-3 gap-4 w-full max-w-sm"
            role="list"
            aria-label="Destaques da empresa"
          >
            {stats.map((stat, i) => (
              <div
                key={i}
                role="listitem"
                className="flex flex-col items-center p-3 rounded-xl"
                style={{ backgroundColor: 'rgba(255,255,255,0.04)', border: '1px solid var(--color-border)' }}
              >
                <span className="text-2xl font-black" style={{ color: 'var(--color-primary)' }}>
                  {stat.value}
                </span>
                <span className="text-xs mt-1 text-center" style={{ color: 'var(--color-text-muted)' }}>
                  {stat.label}
                </span>
              </div>
            ))}
          </motion.div>

          {/* Info rápida */}
          <motion.div
            custom={5}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="mt-6 flex flex-wrap gap-4 text-sm"
            style={{ color: 'var(--color-text-subtle)' }}
          >
            <span className="flex items-center gap-1.5">
              <Clock size={13} style={{ color: 'var(--color-accent)' }} aria-hidden="true" />
              Funcionamento 24h
            </span>
            <span className="flex items-center gap-1.5">
              <MapPin size={13} style={{ color: 'var(--color-accent)' }} aria-hidden="true" />
              Av. Juruçê, 898 — Moema, SP
            </span>
          </motion.div>
        </div>

        {/* ── RIGHT: Photo ── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, x: 40 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="hidden lg:block relative"
        >
          {/* Photo frame */}
          <div className="relative rounded-3xl overflow-hidden aspect-[4/5] shadow-2xl">
            <img
              src="/imagens/hero.png"
              alt="Motoboy da Coopstar Express em entrega na cidade de São Paulo"
              className="w-full h-full object-cover"
              loading="eager"
            />
            {/* Overlay gradient bottom */}
            <div
              className="absolute inset-0"
              aria-hidden="true"
              style={{
                background: 'linear-gradient(to top, rgba(14,14,14,0.7) 0%, transparent 50%)',
              }}
            />
            {/* Border glow */}
            <div
              className="absolute inset-0 rounded-3xl pointer-events-none"
              aria-hidden="true"
              style={{ boxShadow: 'inset 0 0 0 1px rgba(230,48,0,0.2)' }}
            />
          </div>

          {/* Floating badge — disponível 24h */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.5 }}
            className="absolute -bottom-5 -left-5 flex items-center gap-3 px-5 py-3 rounded-2xl shadow-xl"
            style={{
              backgroundColor: 'var(--color-surface-elevated)',
              border: '1px solid var(--color-border)',
              backdropFilter: 'blur(12px)',
            }}
          >
            <div
              className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0"
              style={{ backgroundColor: 'rgba(34,197,94,0.15)' }}
            >
              <ShieldCheck size={18} className="text-green-400" aria-hidden="true" />
            </div>
            <div>
              <p className="text-xs font-bold text-white">Disponível agora</p>
              <p className="text-xs" style={{ color: 'var(--color-text-muted)' }}>
                24h · Seg a Seg
              </p>
            </div>
            <span
              className="w-2 h-2 rounded-full bg-green-400 flex-shrink-0 animate-pulse"
              aria-hidden="true"
            />
          </motion.div>

          {/* Floating badge — entregas */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.5 }}
            className="absolute -top-4 -right-4 px-4 py-2.5 rounded-xl shadow-xl text-center"
            style={{
              background: 'var(--color-primary)',
              boxShadow: '0 8px 32px rgba(230,48,0,0.4)',
            }}
          >
            <p className="text-lg font-black text-white leading-none">9+</p>
            <p className="text-xs text-white/80 font-medium">anos de<br />experiência</p>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={scrollToServices}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{ delay: 1.5, y: { repeat: Infinity, duration: 2 } }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 p-2 rounded-full border transition-colors hover:border-white/30"
        style={{ borderColor: 'rgba(255,255,255,0.1)', color: 'var(--color-text-muted)' }}
        aria-label="Rolar para baixo"
      >
        <ArrowDown size={18} />
      </motion.button>
    </section>
  )
}
