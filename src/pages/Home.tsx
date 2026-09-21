import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Calculator,
  Ruler,
  ShieldCheck,
  ArrowRight,
  Wrench,
  Fan,
  AirVent,
  Snowflake,
  Refrigerator,
  WashingMachine,
  Sun,
  Zap,
  Award,
  Clock,
  ThumbsUp,
  Tag,
  ArrowRightCircle,
} from 'lucide-react';
import SEO from '@/components/SEO';
import { localBusinessJsonLd } from '@/config/site';
import { blogPosts } from '@/data/blogPosts';

const differentiators = [
  {
    icon: Calculator,
    title: 'Cálculo de ACH',
    text: 'Respaldamos cada proyecto con cálculo técnico de cambios de aire por hora.',
  },
  {
    icon: Ruler,
    title: 'Diseño y Ergonomía',
    text: 'Ingeniería pensada para el flujo real de tu planta u hogar.',
  },
  {
    icon: ShieldCheck,
    title: 'Mantenimiento Preventivo',
    text: 'Pólizas de mantenimiento para extender la vida útil de tus equipos.',
  },
];

const solutions = [
  {
    icon: Fan,
    title: 'Extracción y Ventilación Industrial',
    to: '/productos/refrigeracion-industrial',
    desc: 'Sistemas de extracción y ventilación para naves industriales y comercios.',
  },
  {
    icon: AirVent,
    title: 'Sistema de Aire Acondicionado VRF/Multi Split',
    to: '/productos/refrigeracion-industrial',
    desc: 'Climatización eficiente con tecnología VRF y sistemas Multi Split.',
  },
  {
    icon: Snowflake,
    title: 'Refrigeración Industrial (Cámaras Frigoríficas)',
    to: '/productos/refrigeracion-industrial',
    desc: 'Cámaras frigoríficas para conservación de productos perecederos.',
  },
  {
    icon: Refrigerator,
    title: 'Refrigeración y Lavado Doméstico',
    to: '/productos/domesticos',
    desc: 'Refrigeradores y lavadoras domésticas y comerciales de todas las capacidades.',
  },
];

const techGrid = [
  { icon: Fan, name: 'Extractores Axiales', desc: 'Alto caudal para extracción eficiente.' },
  { icon: AirVent, name: 'Ventiladores Axiales VRF', desc: 'Control variable de flujo de refrigerante.' },
  { icon: Wrench, name: 'Ventilador Condensador', desc: 'Disipación térmica optimizada.' },
  { icon: Snowflake, name: 'Evaporadora Cassette', desc: 'Climatización discreta de techos.' },
  { icon: Zap, name: 'Chillers', desc: 'Enfriamiento de agua para grandes espacios.' },
  { icon: Sun, name: 'Paneles Solares', desc: 'Energía limpia y ahorro garantizado.' },
];

const trustBullets = [
  { icon: Award, text: 'Técnicos certificados' },
  { icon: ShieldCheck, text: 'Garantía en todos nuestros servicios' },
  { icon: Clock, text: 'Atención rápida y eficiente' },
  { icon: Tag, text: 'Precios competitivos' },
];

export default function Home() {
  return (
    <>
      <SEO
        title="Proreg | Ingeniería en Refrigeración, Ventilación y Paneles Solares en Guadalajara"
        description="Refrigeración doméstica e industrial, aires acondicionados, ventilación y paneles solares en Guadalajara y Zapopan. Venta, mantenimiento, reparación e instalación."
        keywords="refrigeración Guadalajara, refrigeración industrial Zapopan, aires acondicionados, paneles solares, mantenimiento refrigeración, cámaras frigoríficas"
        canonical="/"
        jsonLd={localBusinessJsonLd}
      />

      {/* Hero */}
      <section
        className="relative bg-primary-800 overflow-hidden min-h-[600px] flex items-center bg-cover bg-center"
        style={{ backgroundImage: "url('./img/Home.webp')" }}
      >
        <div className="absolute inset-0 bg-primary-900/70" />
        <div className="container-proreg relative z-10 py-20 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="heading-1 text-white mb-6">
              Ingeniería en Refrigeración, Ventilación y Energía Solar
            </h1>
            <p className="text-lg text-white/80 mb-8 leading-relaxed max-w-xl">
              Soluciones completas en venta, mantenimiento, reparación e instalación de sistemas de refrigeración doméstica e industrial, aires acondicionados y paneles solares para hogares y negocios en Guadalajara y Zapopan.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/contacto" className="btn-primary">
                Solicitar Cotización
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link to="/servicios" className="btn-secondary">
                Ver Servicios
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Differentiators */}
      <section className="section-padding bg-white">
        <div className="container-proreg">
          <div className="grid md:grid-cols-3 gap-8">
            {differentiators.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-center p-8 rounded-2xl bg-gray-50 card-hover"
              >
                <div className="w-16 h-16 bg-primary-800 rounded-2xl flex items-center justify-center mx-auto mb-5">
                  <item.icon className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-bold text-primary-800 mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="section-padding bg-gray-50">
        <div className="container-proreg">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="heading-2 text-primary-800 mb-4">Nuestras Soluciones</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Cobertura integral en refrigeración, climatización y energía solar para hogar e industria.
            </p>
          </motion.div>
          <div className="grid sm:grid-cols-2 gap-6">
            {solutions.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Link
                  to={item.to}
                  className="block bg-white rounded-2xl p-8 card-hover border border-gray-100 group h-full"
                >
                  <div className="flex items-start gap-5">
                    <div className="w-14 h-14 bg-primary-50 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-accent/10 transition-colors">
                      <item.icon className="w-7 h-7 text-primary-800 group-hover:text-accent transition-colors" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-primary-800 mb-2">{item.title}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed mb-3">{item.desc}</p>
                      <span className="inline-flex items-center gap-1 text-accent font-medium text-sm group-hover:gap-2 transition-all">
                        Ver más <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Grid */}
      <section className="section-padding bg-white">
        <div className="container-proreg">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="heading-2 text-primary-800 mb-4">Tecnología Confiable</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Trabajamos con equipos de las mejores marcas para garantizar resultados duraderos.
            </p>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {techGrid.map((item, i) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="bg-gray-50 rounded-xl p-6 text-center card-hover"
              >
                <div className="w-12 h-12 bg-primary-800 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-semibold text-primary-800 mb-1.5">{item.name}</h3>
                <p className="text-sm text-gray-500">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Block */}
      <section className="section-padding bg-primary-800">
        <div className="container-proreg">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="heading-2 text-white mb-4">Más de 10 años de experiencia</h2>
              <p className="text-white/70 text-lg mb-8 leading-relaxed">
                En Proreg contamos con técnicos certificados y especialistas en sistemas de climatización y refrigeración, comprometidos con la satisfacción total de nuestros clientes.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {trustBullets.map((item) => (
                  <div key={item.text} className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-accent/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-accent" />
                    </div>
                    <span className="text-white/90 font-medium">{item.text}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="./img/mant.webp"
                  alt="Técnico certificado de Proreg realizando mantenimiento de refrigeración industrial"
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-accent text-white rounded-2xl p-6 shadow-xl hidden md:block">
                <p className="text-4xl font-bold">10+</p>
                <p className="text-sm font-medium">Años de experiencia</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16 bg-accent">
        <div className="container-proreg text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              ¿Problemas con tu sistema de refrigeración o climatización?
            </h2>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
              Nuestro equipo está listo para ayudarte con diagnóstico, reparación y mantenimiento profesional.
            </p>
            <Link to="/contacto" className="inline-flex items-center gap-2 px-8 py-4 bg-primary-700 text-white font-semibold rounded-lg hover:bg-primary-800 transition-all duration-300 shadow-lg">
              Solicitar Servicio
              <ArrowRightCircle className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Blog Preview */}
      <section className="section-padding bg-white">
        <div className="container-proreg">
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-12 gap-4">
            <div>
              <h2 className="heading-2 text-primary-800 mb-2">Guías Técnicas</h2>
              <p className="text-gray-600">Recursos informativos sobre refrigeración y climatización.</p>
            </div>
            <Link to="/blog" className="inline-flex items-center gap-2 text-accent font-semibold hover:gap-3 transition-all">
              Ver todas las guías <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {blogPosts.map((post, i) => (
              <motion.article
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Link to={`/blog/${post.slug}`} className="block bg-white rounded-2xl overflow-hidden card-hover border border-gray-100 group">
                  <div className="aspect-[16/9] overflow-hidden bg-gray-200">
                    <img
                      src={post.image}
                      alt={post.title}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <span className="inline-block text-xs font-semibold text-accent bg-accent/10 px-3 py-1 rounded-full mb-3">
                      {post.category}
                    </span>
                    <h3 className="text-lg font-bold text-primary-800 mb-2 group-hover:text-accent transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">{post.excerpt}</p>
                    <span className="inline-flex items-center gap-1 text-accent font-medium text-sm group-hover:gap-2 transition-all">
                      Leer completa <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}