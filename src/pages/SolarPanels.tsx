import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Sun, PiggyBank, Leaf, ShieldCheck, Home, Building, Wrench, ArrowRight, CheckCircle } from 'lucide-react';
import SEO from '@/components/SEO';

const benefits = [
  { icon: PiggyBank, title: 'Ahorro Garantizado', desc: 'Hasta 90% de reducción en tu recibo de luz desde el primer mes.' },
  { icon: Leaf, title: 'Energía Limpia', desc: 'Cero emisiones de CO₂, contribuyendo al cuidado del medio ambiente.' },
  { icon: ShieldCheck, title: 'Garantía Extendida', desc: '25 años en paneles y 10 años en inversores.' },
];

const services = [
  {
    icon: Home,
    title: 'Sistemas Residenciales',
    desc: 'Diseño e instalación personalizada con monitoreo inteligente para tu hogar.',
    points: ['Diseño a medida según tu consumo', 'Monitoreo desde tu smartphone', 'Instalación profesional'],
  },
  {
    icon: Building,
    title: 'Sistemas Comerciales',
    desc: 'Soluciones escalables con análisis de retorno de inversión para tu negocio.',
    points: ['Análisis de ROI', 'Sistemas escalables', 'Reducción de costos operativos'],
  },
  {
    icon: Wrench,
    title: 'Mantenimiento Premium',
    desc: 'Limpieza profesional y revisión de componentes para máximo rendimiento.',
    points: ['Limpieza profesional de paneles', 'Revisión de inversores', 'Reporte de rendimiento'],
  },
];

const projects = [
  { title: 'Residencial', desc: 'Instalación de sistema fotovoltaico para hogar con 12 paneles.', img: 'https://images.pexels.com/photos/371900/371900-720x720.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { title: 'Comercial', desc: 'Sistema solar para oficina con 30 paneles y monitoreo remoto.', img: 'https://images.pexels.com/photos/433308/pexels-photo-433308.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { title: 'Industrial', desc: 'Instalación de 200 paneles para nave industrial con alto consumo.', img: 'https://images.pexels.com/photos/9875414/pexels-photo-9875414.jpeg?auto=compress&cs=tinysrgb&w=800' },
];

export default function SolarPanels() {
  return (
    <>
      <SEO
        title="Paneles Solares Residenciales e Industriales en Guadalajara | Proreg"
        description="Sistemas fotovoltaicos premium para hogares y negocios en Guadalajara y Zapopan. Ahorro garantizado, energía limpia y garantía extendida."
        keywords="paneles solares Guadalajara, energía solar Zapopan, sistemas fotovoltaicos, paneles solares residenciales, paneles solares industriales"
        canonical="/productos/paneles-solares"
      />

      <section className="relative bg-primary-800 py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 30% 50%, #f5a623 1px, transparent 1px)',
            backgroundSize: '30px 30px',
          }} />
        </div>
        <div className="container-proreg relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="w-16 h-16 bg-accent/20 rounded-2xl flex items-center justify-center mb-6">
              <Sun className="w-9 h-9 text-accent" />
            </div>
            <h1 className="heading-1 text-white mb-4">Energía Solar Inteligente</h1>
            <p className="text-lg text-white/70 max-w-2xl">Sistemas fotovoltaicos premium para hogares y negocios en Guadalajara y Zapopan.</p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-proreg">
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {benefits.map((item, i) => (
              <motion.div key={item.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }} className="text-center p-8 rounded-2xl bg-gray-50 card-hover">
                <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-5">
                  <item.icon className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-bold text-primary-800 mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="mb-20">
            <h2 className="heading-2 text-primary-800 mb-4 text-center">Nuestros Servicios Solares</h2>
            <p className="text-gray-600 text-center mb-10 max-w-2xl mx-auto">Soluciones completas para cada tipo de instalación.</p>
            <div className="grid md:grid-cols-3 gap-8">
              {services.map((item, i) => (
                <motion.div key={item.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }} className="bg-white rounded-2xl border border-gray-100 overflow-hidden card-hover">
                  <div className="p-8">
                    <div className="w-14 h-14 bg-primary-800 rounded-xl flex items-center justify-center mb-5">
                      <item.icon className="w-7 h-7 text-accent" />
                    </div>
                    <h3 className="text-xl font-bold text-primary-800 mb-3">{item.title}</h3>
                    <p className="text-gray-600 mb-5">{item.desc}</p>
                    <ul className="space-y-2">
                      {item.points.map((point) => (
                        <li key={point} className="flex items-start gap-2.5 text-sm">
                          <CheckCircle className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="mb-20">
            <h2 className="heading-2 text-primary-800 mb-4 text-center">Proyectos Destacados</h2>
            <p className="text-gray-600 text-center mb-10 max-w-2xl mx-auto">Casos de éxito en diferentes sectores.</p>
            <div className="grid md:grid-cols-3 gap-8">
              {projects.map((item, i) => (
                <motion.div key={item.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }} className="bg-white rounded-2xl overflow-hidden border border-gray-100 card-hover group">
                  <div className="aspect-[4/3] overflow-hidden bg-gray-200">
                    <img src={item.img} alt={`Proyecto solar ${item.title.toLowerCase()} de Proreg`} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-primary-800 mb-2">{item.title}</h3>
                    <p className="text-gray-600 text-sm">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="text-center">
            <Link to="/contacto" className="btn-primary">
              Cotización Gratis <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
