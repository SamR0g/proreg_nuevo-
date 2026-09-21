import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ShoppingCart,
  Wrench,
  Settings,
  Fan,
  CheckCircle,
  ArrowRight,
  ArrowRightCircle,
} from 'lucide-react';
import SEO from '@/components/SEO';
import { openWhatsApp } from '@/utils/whatsapp';

const services = [
  {
    icon: ShoppingCart,
    title: 'Venta',
    text: 'Amplio catálogo de equipos de refrigeración de las mejores marcas con garantía y asesoría especializada.',
    bullets: [
      'Asesoría personalizada según tu necesidad: doméstica, comercial o industrial',
      'Equipos con garantía de fábrica',
      'Financiamiento y cotización sin costo',
      'Marcas reconocidas en refrigeración y climatización',
    ],
  },
  {
    icon: Wrench,
    title: 'Mantenimiento',
    text: 'Servicios preventivos y correctivos para extender la vida útil de tus equipos y mantenerlos funcionando eficientemente.',
    bullets: [
      'Pólizas de mantenimiento programado',
      'Limpieza y revisión de componentes críticos (compresores, evaporadoras, condensadoras)',
      'Diagnóstico de eficiencia energética',
      'Mantenimiento para naves industriales y hogares',
    ],
  },
  {
    icon: Settings,
    title: 'Reparación',
    text: 'Diagnóstico preciso y reparación profesional de todo tipo de sistemas de refrigeración con personal certificado.',
    bullets: [
      'Atención a fallas de compresores scroll y semiherméticos',
      'Reparación de fugas de gas refrigerante',
      'Tiempos de respuesta rápidos',
      'Refacciones originales',
    ],
  },
  {
    icon: Fan,
    title: 'Instalación',
    text: 'Instalación profesional de equipos de refrigeración domésticos e industriales garantizando su óptimo funcionamiento.',
    bullets: [
      'Instalación de sistemas VRF/Multi Split',
      'Cámaras frigoríficas',
      'Extracción y ventilación industrial',
      'Cálculo técnico de ACH antes de instalar',
      'Instalación de paneles solares',
    ],
  },
];

export default function Services() {
  return (
    <>
      <SEO
        title="Servicios de Refrigeración, Climatización y Mantenimiento | Proreg"
        description="Venta, mantenimiento, reparación e instalación de equipos de refrigeración doméstica e industrial, aires acondicionados y paneles solares en Guadalajara y Zapopan."
        keywords="servicios refrigeración Guadalajara, mantenimiento aires acondicionados, reparación refrigeración, instalación VRF, cámaras frigoríficas"
        canonical="/servicios"
      />

      {/* Page Header */}
      <section
        className="relative bg-primary-800 py-20 bg-cover bg-center"
        style={{ backgroundImage: "url('./img/services.png')" }}
      >
        <div className="absolute inset-0 bg-primary-900/70" />
        <div className="container-proreg relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="heading-1 text-white mb-4">Nuestros Servicios</h1>
            <p className="text-lg text-white/70 max-w-2xl">
              Ofrecemos soluciones integrales para todas tus necesidades de refrigeración, climatización y energía solar, tanto en el hogar como en la industria.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Detail */}
      <section className="section-padding bg-white">
        <div className="container-proreg">
          <div className="space-y-20">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className={`grid lg:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
              >
                <div className={i % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="flex items-center gap-4 mb-5">
                    <div className="w-16 h-16 bg-primary-800 rounded-2xl flex items-center justify-center">
                      <service.icon className="w-8 h-8 text-accent" />
                    </div>
                    <h2 className="text-3xl font-bold text-primary-800">{service.title}</h2>
                  </div>
                  <p className="text-gray-600 text-lg leading-relaxed mb-6">{service.text}</p>
                  <ul className="space-y-3">
                    {service.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={i % 2 === 1 ? 'lg:order-1' : ''}>
                  <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-gray-100">
                    <img
                      src={
                        i === 0
                          ? './img/ref1.png'
                          : i === 1
                          ? './img/serv3.png'
                          : i === 2
                          ? './img/reparacion.webp'
                          : './img/air.webp'
                      }
                      alt={`${service.title} de equipos de refrigeración en Guadalajara`}
                      loading="lazy"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-800">
        <div className="container-proreg text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="heading-2 text-white mb-4">
              Solicita tu levantamiento técnico o propuesta comercial
            </h2>
            <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">
              Contáctanos y recibe asesoría especializada sin costo.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/contacto" className="btn-primary">
                Ir a Contacto <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <button
                onClick={() => openWhatsApp('Hola, quiero solicitar un levantamiento técnico o propuesta comercial.')}
                className="btn-secondary"
              >
                <ArrowRightCircle className="mr-2 w-5 h-5" />
                Cotizar por WhatsApp
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}