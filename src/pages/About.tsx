import { motion } from 'framer-motion';
import { Award, ShieldCheck, Clock, Tag, CheckCircle, MapPin, Building2 } from 'lucide-react';
import SEO from '@/components/SEO';

const bullets = [
  { icon: Award, text: 'Técnicos certificados' },
  { icon: ShieldCheck, text: 'Garantía en todos nuestros servicios' },
  { icon: Clock, text: 'Atención rápida y eficiente' },
  { icon: Tag, text: 'Precios competitivos' },
];

export default function About() {
  return (
    <>
      <SEO
        title="Sobre Proreg | Más de 10 años en Refrigeración e Ingeniería Industrial"
        description="Conoce a Proreg: más de 10 años de experiencia en refrigeración, climatización y energía solar. Técnicos certificados, servicio personalizado y de calidad en Guadalajara y Zapopan."
        keywords="sobre Proreg, empresa refrigeración Guadalajara, técnicos certificados refrigeración, distribuidores HVAC México"
        canonical="/nosotros"
      />

      <section
        className="relative bg-primary-800 py-20 bg-cover bg-center"
        style={{ backgroundImage: "url('./img/about.png')" }}
      >
        <div className="absolute inset-0 bg-primary-900/70" />
        <div className="container-proreg relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <h1 className="heading-1 text-white mb-4">Sobre Nosotros</h1>
            <p className="text-lg text-white/70 max-w-2xl">Conoce la historia y el equipo detrás de Proreg.</p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-proreg">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
              <h2 className="heading-2 text-primary-800 mb-6">Más de 10 años de experiencia</h2>
              <div className="space-y-5 text-gray-600 text-lg leading-relaxed">
                <p>
                  En Proreg contamos con más de 10 años de experiencia brindando soluciones integrales en refrigeración. Nuestro equipo está conformado por técnicos certificados y especialistas en sistemas de climatización y refrigeración.
                </p>
                <p>
                  Nos distinguimos por ofrecer un servicio personalizado, honesto y de calidad, comprometidos con la satisfacción total de nuestros clientes en Guadalajara, Zapopan y alrededores.
                </p>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="./img/refrigeracion.png"
                  alt="Equipo de técnicos certificados de Proreg trabajando en refrigeración industrial"
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-accent text-primary-900 rounded-2xl p-6 shadow-xl hidden md:block">
                <p className="text-4xl font-bold">10+</p>
                <p className="text-sm font-medium">Años de experiencia</p>
              </div>
            </motion.div>
          </div>

          <div className="mb-20">
            <h2 className="heading-2 text-primary-800 mb-8 text-center">¿Por qué elegirnos?</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {bullets.map((item, i) => (
                <motion.div key={item.text} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.1 }} className="text-center p-8 bg-gray-50 rounded-2xl card-hover">
                  <div className="w-14 h-14 bg-primary-800 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-7 h-7 text-accent" />
                  </div>
                  <p className="font-semibold text-primary-800">{item.text}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="bg-primary-50 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-4">
                <Building2 className="w-7 h-7 text-accent" />
                <h3 className="text-xl font-bold text-primary-800">Distribuidores Autorizados</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Somos distribuidores autorizados de piezas para HVAC industrial en México, lo que nos permite ofrecer refacciones originales y de calidad garantizada para todos los equipos que instalamos y reparamos.
              </p>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }} className="bg-primary-50 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-4">
                <MapPin className="w-7 h-7 text-accent" />
                <h3 className="text-xl font-bold text-primary-800">Zona de Cobertura</h3>
              </div>
              <p className="text-gray-600 leading-relaxed mb-4">
                Brindamos servicio en las siguientes zonas:
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-gray-700">
                  <CheckCircle className="w-5 h-5 text-accent" /> Guadalajara
                </li>
                <li className="flex items-center gap-2 text-gray-700">
                  <CheckCircle className="w-5 h-5 text-accent" /> Zapopan
                </li>
                <li className="flex items-center gap-2 text-gray-700">
                  <CheckCircle className="w-5 h-5 text-accent" /> Estado de México
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}