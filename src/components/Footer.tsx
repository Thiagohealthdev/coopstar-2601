import { Phone, Mail, MapPin, Zap } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer
      role="contentinfo"
      style={{ backgroundColor: '#0a0a0a', borderTop: '1px solid var(--color-border)' }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          {/* Brand column */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center"
                style={{ background: 'var(--color-primary)' }}
              >
                <Zap size={16} className="text-white" aria-hidden="true" />
              </div>
              <span className="font-bold text-lg text-white">
                Coopstar<span style={{ color: 'var(--color-primary)' }}>Express</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--color-text-muted)' }}>
              Mais de 9 anos entregando agilidade e confiança para empresas em São Paulo e 
              Grande SP.
            </p>
            <span
              className="inline-flex items-center gap-1 text-xs font-medium px-3 py-1 rounded-full"
              style={{
                backgroundColor: 'rgba(34,197,94,0.1)',
                color: '#22C55E',
                border: '1px solid rgba(34,197,94,0.2)',
              }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" aria-hidden="true" />
              Disponível 24h agora
            </span>
          </div>

          {/* Navigation */}
          <nav aria-label="Links do rodapé">
            <h3 className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: 'var(--color-text-muted)' }}>
              Navegação
            </h3>
            <ul className="flex flex-col gap-2" role="list">
              {[
                { label: 'Início', href: '#inicio' },
                { label: 'Quem Somos', href: '#quem-somos' },
                { label: 'Serviços', href: '#servicos' },
                { label: 'Como Funciona', href: '#como-funciona' },
                { label: 'FAQ', href: '#faq' },
                { label: 'Contato', href: '#contato' },
              ].map(link => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="text-sm transition-colors hover:text-white text-left"
                    style={{ color: 'var(--color-text-muted)' }}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          {/* Services */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: 'var(--color-text-muted)' }}>
              Serviços
            </h3>
            <ul className="flex flex-col gap-2" role="list">
              {['Moto Frete', 'Delivery Empresarial', 'Coletas', 'Fora da Capital', 'Aeroportos', 'Serviços Bancários'].map(s => (
                <li key={s} className="text-sm" style={{ color: 'var(--color-text-muted)' }}>
                  {s}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <address style={{ fontStyle: 'normal' }}>
            <h3 className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: 'var(--color-text-muted)' }}>
              Contato
            </h3>
            <ul className="flex flex-col gap-3" role="list">
              <li className="flex items-start gap-2">
                <MapPin size={14} className="mt-0.5 flex-shrink-0" style={{ color: 'var(--color-primary)' }} aria-hidden="true" />
                <span className="text-sm" style={{ color: 'var(--color-text-muted)' }}>
                  Av. Juruçê, 898<br />Moema — São Paulo, SP
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={14} className="flex-shrink-0" style={{ color: 'var(--color-accent)' }} aria-hidden="true" />
                <a
                  href="tel:+551150523563"
                  className="text-sm transition-colors hover:text-white"
                  style={{ color: 'var(--color-text-muted)' }}
                  aria-label="Ligar para (11) 5052-3563"
                >
                  (11) 5052-3563 / 5051-4442
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={14} className="flex-shrink-0" style={{ color: '#6C63FF' }} aria-hidden="true" />
                <a
                  href="mailto:coopstar_express@hotmail.com"
                  className="text-sm transition-colors hover:text-white break-all"
                  style={{ color: 'var(--color-text-muted)' }}
                  aria-label="Enviar e-mail para coopstar_express@hotmail.com"
                >
                  coopstar_express@hotmail.com
                </a>
              </li>
            </ul>
          </address>
        </div>

        {/* Bottom bar */}
        <div
          className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6"
          style={{ borderTop: '1px solid var(--color-border)' }}
        >
          <p className="text-xs" style={{ color: 'var(--color-text-subtle)' }}>
            © {currentYear} Coopstar Express. Todos os direitos reservados.
          </p>
          <p className="text-xs" style={{ color: 'var(--color-text-subtle)' }}>
            CNPJ: consulte nossos representantes
          </p>
        </div>
      </div>
    </footer>
  )
}
