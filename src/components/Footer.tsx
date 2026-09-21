import { Link } from 'react-router-dom';
import { Wrench, Facebook, Instagram, Phone, Mail, MapPin } from 'lucide-react';

const quickLinks = [
  { to: '/', label: 'Inicio' },
  { to: '/servicios', label: 'Servicios' },
  { to: '/productos/domesticos', label: 'Productos' },
  { to: '/blog', label: 'Blog' },
  { to: '/nosotros', label: 'Nosotros' },
  { to: '/contacto', label: 'Contacto' },
];

const serviceLinks = [
  { to: '/servicios', label: 'Venta de Equipos' },
  { to: '/servicios', label: 'Mantenimiento Preventivo' },
  { to: '/servicios', label: 'Reparación Especializada' },
  { to: '/servicios', label: 'Instalación Profesional' },
];

const FACEBOOK_URL = 'https://www.facebook.com/share/1DpZzqwnXT/?mibextid=wwXIfr';
const INSTAGRAM_URL = 'https://www.instagram.com/proreg.mx?stkn=ODR2aTBsazgxMmF3&utm_source=qr';

export default function Footer() {
  return (
    <footer className="bg-primary-900 text-white/70 pt-16 pb-8">
      <div className="container-proreg">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
                <Wrench className="w-6 h-6 text-primary-900" />
              </div>
              <span className="text-2xl font-bold text-white">
                PRO<span className="text-accent">REG</span>
              </span>
            </Link>
            <p className="text-sm leading-relaxed">
              Soluciones integrales en refrigeración, climatización y energía solar.
            </p>
            <div className="flex gap-3 mt-5">
              <SocialIcon href={FACEBOOK_URL} label="Facebook" icon={<Facebook className="w-4 h-4" />} />
              <SocialIcon href={INSTAGRAM_URL} label="Instagram" icon={<Instagram className="w-4 h-4" />} />
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className="text-sm hover:text-accent transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Nuestros Servicios</h3>
            <ul className="space-y-2.5">
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className="text-sm hover:text-accent transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Contáctanos</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5 text-sm">
                <Phone className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                <a href="tel:+523326409224" className="hover:text-accent transition-colors">
                  33 2640 9224
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-sm">
                <Mail className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                <span>contacto@proreg.com.mx</span>
              </li>
              <li className="flex items-start gap-2.5 text-sm">
                <MapPin className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                <span>Guadalajara y Zapopan, Jalisco</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Cobertura</h3>
            <ul className="space-y-2.5">
              <li className="text-sm">Guadalajara</li>
              <li className="text-sm">Zapopan</li>
              <li className="text-sm">Estado de México</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6">
          <p className="text-center text-sm text-white/50">
            © 2026 Proreg - Todos los derechos reservados
          </p>
        </div>
      </div>
    </footer>
  );
}

function SocialIcon({
  icon,
  href,
  label,
}: {
  icon: React.ReactNode;
  href: string;
  label: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="w-9 h-9 rounded-lg bg-white/10 hover:bg-accent hover:text-primary-900 flex items-center justify-center transition-all duration-300"
      aria-label={label}
    >
      {icon}
    </a>
  );
}