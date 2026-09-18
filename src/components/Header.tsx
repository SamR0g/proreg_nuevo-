import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, Wrench } from 'lucide-react';
import { buildWhatsAppUrl, DEFAULT_WHATSAPP_MESSAGE } from '@/utils/whatsapp';

const navLinks = [
  { to: '/', label: 'Inicio' },
  { to: '/servicios', label: 'Servicios' },
  { to: '/blog', label: 'Blog' },
  { to: '/nosotros', label: 'Nosotros' },
  { to: '/contacto', label: 'Contacto' },
];

const productLinks = [
  { to: '/productos/domesticos', label: 'Refrigeradores y Lavadoras Domésticas' },
  { to: '/productos/refrigeracion-industrial', label: 'Cámaras de Refrigeración y Aires Acondicionados' },
  { to: '/productos/paneles-solares', label: 'Paneles Solares' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productsDropdown, setProductsDropdown] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMobileMenuOpen(false);
    setProductsDropdown(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-primary-800 shadow-lg py-2'
          : 'bg-primary-800 py-3'
      }`}
    >
      <nav className="container-proreg flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center transform group-hover:rotate-6 transition-transform duration-300">
            <Wrench className="w-6 h-6 text-primary-900" />
          </div>
          <span className="text-2xl font-bold text-white tracking-tight">
            PRO<span className="text-accent">REG</span>
          </span>
        </Link>

        <div className="hidden lg:flex items-center gap-1">
          <NavItem to="/" label="Inicio" />
          <NavItem to="/servicios" label="Servicios" />

          <div
            className="relative"
            onMouseEnter={() => setProductsDropdown(true)}
            onMouseLeave={() => setProductsDropdown(false)}
          >
            <button className="flex items-center gap-1 px-4 py-2 text-white/90 hover:text-accent font-medium transition-colors">
              Productos
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-300 ${
                  productsDropdown ? 'rotate-180' : ''
                }`}
              />
            </button>
            <AnimatePresence>
              {productsDropdown && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full left-0 mt-0 w-80 bg-white rounded-xl shadow-2xl overflow-hidden border border-gray-100"
                >
                  {productLinks.map((item) => (
                    <Link
                      key={item.to}
                      to={item.to}
                      className="block px-5 py-3.5 text-primary-800 hover:bg-accent/10 hover:text-accent transition-colors border-b border-gray-50 last:border-0"
                    >
                      {item.label}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <NavItem to="/blog" label="Blog" />
          <NavItem to="/nosotros" label="Nosotros" />
          <NavItem to="/contacto" label="Contacto" />
        </div>

        <div className="hidden lg:block">
          <a
            href={buildWhatsAppUrl(DEFAULT_WHATSAPP_MESSAGE)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-sm"
          >
            Cotización Rápida
          </a>
        </div>

        <button
          className="lg:hidden text-white p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-primary-900 overflow-hidden"
          >
            <div className="container-proreg py-4 space-y-1">
              {navLinks.map((link) => (
                <MobileNavItem key={link.to} {...link} />
              ))}
              <div className="pt-2">
                <p className="text-white/50 text-sm font-medium px-4 py-2">Productos</p>
                {productLinks.map((item) => (
                  <MobileNavItem key={item.to} {...item} />
                ))}
              </div>
              <div className="pt-3">
                <a
                  href={buildWhatsAppUrl(DEFAULT_WHATSAPP_MESSAGE)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary w-full"
                >
                  Cotización Rápida
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

function NavItem({ to, label }: { to: string; label: string }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `px-4 py-2 font-medium transition-colors ${
          isActive ? 'text-accent' : 'text-white/90 hover:text-accent'
        }`
      }
    >
      {label}
    </NavLink>
  );
}

function MobileNavItem({ to, label }: { to: string; label: string }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `block px-4 py-2.5 rounded-lg font-medium transition-colors ${
          isActive ? 'text-accent bg-white/5' : 'text-white/90 hover:text-accent hover:bg-white/5'
        }`
      }
    >
      {label}
    </NavLink>
  );
}
