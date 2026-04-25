import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Zap } from 'lucide-react'
import type { NavLink } from '../types'

const navLinks: NavLink[] = [
  { label: 'Início', href: '#inicio' },
  { label: 'Quem Somos', href: '#quem-somos' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Como Funciona', href: '#como-funciona' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contato', href: '#contato' },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('inicio')

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const sections = navLinks.map(l => l.href.replace('#', ''))
    const observers: IntersectionObserver[] = []

    sections.forEach(id => {
      const el = document.getElementById(id)
      if (!el) return
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id) },
        { rootMargin: '-40% 0px -55% 0px' }
      )
      obs.observe(el)
      observers.push(obs)
    })

    return () => observers.forEach(o => o.disconnect())
  }, [])

  const handleLinkClick = (href: string) => {
    setIsMobileOpen(false)
    const el = document.querySelector(href)
    el?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header
      role="banner"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass shadow-lg shadow-black/30' : 'bg-transparent'
      }`}
    >
      <nav
        role="navigation"
        aria-label="Navegação principal"
        className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16 md:h-20"
      >
        {/* Logo */}
        <a
          href="#inicio"
          onClick={() => handleLinkClick('#inicio')}
          className="flex items-center gap-2 group"
          aria-label="Coopstar Express — ir para o início"
        >
          <div
            className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
            style={{ background: 'var(--color-primary)' }}
          >
            <Zap size={16} className="text-white" />
          </div>
          <span className="font-bold text-lg text-white group-hover:opacity-80 transition-opacity">
            Coopstar<span style={{ color: 'var(--color-primary)' }}>Express</span>
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-1" role="list">
          {navLinks.map(link => {
            const id = link.href.replace('#', '')
            const isActive = activeSection === id
            return (
              <li key={link.href}>
                <button
                  onClick={() => handleLinkClick(link.href)}
                  aria-current={isActive ? 'page' : undefined}
                  className={`relative px-3 py-2 text-sm font-medium rounded-lg transition-colors duration-200 link-underline ${
                    isActive
                      ? 'text-white'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute inset-0 rounded-lg -z-10"
                      style={{ backgroundColor: 'rgba(230,48,0,0.12)' }}
                    />
                  )}
                </button>
              </li>
            )
          })}
        </ul>

        {/* Desktop CTA */}
        <a
          href="#contato"
          onClick={(e) => { e.preventDefault(); handleLinkClick('#contato') }}
          className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold text-white transition-all duration-200 hover:opacity-90 active:scale-95"
          style={{ background: 'var(--color-primary)' }}
          aria-label="Solicitar orçamento"
        >
          Solicitar Orçamento
        </a>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 rounded-lg text-gray-400 hover:text-white transition-colors"
          onClick={() => setIsMobileOpen(v => !v)}
          aria-expanded={isMobileOpen}
          aria-controls="mobile-menu"
          aria-label={isMobileOpen ? 'Fechar menu' : 'Abrir menu'}
        >
          {isMobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            id="mobile-menu"
            role="dialog"
            aria-label="Menu de navegação mobile"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="md:hidden overflow-hidden glass border-t"
            style={{ borderColor: 'var(--color-border)' }}
          >
            <ul className="flex flex-col px-4 py-4 gap-1" role="list">
              {navLinks.map(link => {
                const id = link.href.replace('#', '')
                const isActive = activeSection === id
                return (
                  <li key={link.href}>
                    <button
                      onClick={() => handleLinkClick(link.href)}
                      className={`w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                        isActive ? 'text-white bg-white/5' : 'text-gray-400 hover:text-white hover:bg-white/5'
                      }`}
                    >
                      {link.label}
                    </button>
                  </li>
                )
              })}
              <li className="pt-2">
                <a
                  href="#contato"
                  onClick={() => handleLinkClick('#contato')}
                  className="block w-full text-center px-4 py-3 rounded-lg text-sm font-semibold text-white"
                  style={{ background: 'var(--color-primary)' }}
                >
                  Solicitar Orçamento
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
