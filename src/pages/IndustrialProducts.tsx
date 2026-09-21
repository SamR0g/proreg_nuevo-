import { motion } from 'framer-motion';
import { Fan, AirVent, Snowflake, Wind, CheckCircle, ArrowRight, ShoppingBag } from 'lucide-react';
import SEO from '@/components/SEO';

const systems = [
  { icon: Fan, title: 'Extracción y Ventilación Industrial', desc: 'Sistemas de extracción y ventilación para naves industriales, garantizando calidad del aire y confort térmico.' },
  { icon: AirVent, title: 'Sistema de Aire Acondicionado VRF/Multi Split', desc: 'Climatización eficiente con tecnología de flujo variable de refrigerante para grandes espacios.' },
  { icon: Snowflake, title: 'Refrigeración Industrial (Cámaras Frigoríficas)', desc: 'Cámaras frigoríficas para conservación de productos perecederos con control de temperatura preciso.' },
  { icon: Wind, title: 'Simulación de Flujo de Aire (CFD)', desc: 'Análisis computacional de flujo de aire para optimizar la distribución y eficiencia del sistema.' },
];

const equipment = [
  { name: 'Extractores Axiales', desc: 'Alto caudal para extracción eficiente en grandes espacios.' },
  { name: 'Ventiladores Axiales VRF', desc: 'Control variable de flujo de refrigerante para máxima eficiencia.' },
  { name: 'Ventilador Condensador', desc: 'Disipación térmica optimizada para sistemas de refrigeración.' },
  { name: 'Evaporadora Cassette', desc: 'Climatización discreta integrada en plafones.' },
  { name: 'Chillers', desc: 'Enfriamiento de agua para climatización de grandes edificios.' },
];

const diagrams = [
  { title: 'Distribución de ductos en nave industrial', desc: 'Esquema de distribución de ductos para ventilación y extracción en nave industrial.' },
  { title: 'Sistema de A/C con condensadoras', desc: 'Diagrama de sistema de aire acondicionado con unidades condensadoras externas.' },
  { title: 'Detalle de evaporadora en plafón', desc: 'Detalle de instalación de evaporadora tipo cassette en plafón.' },
  { title: 'Esquema de ventilación cruzada', desc: 'Configuración de ventilación cruzada para renovación de aire en nave industrial.' },
];

const catalog = [
  {
    name: 'Aire Acondicionado Portátil Mirage X-One 1 Ton',
    desc: 'Aire acondicionado portátil Mirage X-One, capacidad de 1 tonelada, fácil instalación sin obra.',
    img: '/img/aire-mirage-x-one-1ton.webp',
    link: 'https://www.mercadolibre.com.mx/aire-acondicionado-portatil-mirage-x-one-1-ton/p/MLM22254631?pdp_filters=item_id%3AMLM1975266209&matt_tool=17030900&ua=URevoA-Sph3bpdcbVKHWXaWMLjV0A_mdwsS0IKwv1x-EqbE#origin=share&sid=share&wid=MLM1975266209',
  },
  {
    name: 'Minisplit Portátil Friocal Frikko 1 Ton',
    desc: 'Minisplit portátil Friocal Frikko FKPT1U131H, 1 tonelada, color blanco.',
    img: '/img/minisplit-friocal-frikko-1ton.webp',
    link: 'https://www.mercadolibre.com.mx/minisplit-portatil-friocal-frikko-fkpt1u131h-1ton-36204550-blanco/p/MLM74702299?pdp_filters=item_id%3AMLM5609675086&matt_tool=17030900&ua=hXIciL_LZtsGbjVBpWXMyORm3z1bB6LW6_gtKN_hoH_KALk#origin=share&sid=share&wid=MLM5609675086',
  },
  {
    name: 'Hisense Smart Eye Minisplit Inverter 1 Ton',
    desc: 'Minisplit Hisense Smart Eye Inverter ARU122VQW, 1 tonelada (12,000 BTU), frío/calor, gas R32, WiFi y autolimpieza.',
    img: '/img/hisense-smart-eye-1ton.webp',
    link: 'https://www.mercadolibre.com.mx/hisense-aire-acondicionado-smart-eye-minisplit-inverter-aru122vqw-1-ton-12000-btus-friocalor-220v-gas-r32-seer-225-ultra-delgado-conexion-wifi-modo-inteligente-ai-autolimpieza-temporizador/p/MLM50743742?pdp_filters=item_id%3AMLM3720905172&matt_tool=17030900&ua=j3rTql_G0ldqc6PTsXw-9BJTyVhlWhDHpnQCx3cF5VI988E#origin=share&sid=share&wid=MLM3720905172',
  },
  {
    name: 'Aire Acondicionado Portátil Inverter LG 1 Ton',
    desc: 'Aire acondicionado portátil Inverter LG LP1225IVSM, 1 tonelada, WiFi, color blanco.',
    img: '/img/aire-portatil-lg-1ton.webp',
    link: 'https://www.mercadolibre.com.mx/aire-acondicionado-portatil-inverter-wifi-1ton-lp1225ivsm-lg-blanco/p/MLM50320084?pdp_filters=item_id%3AMLM2824219927&matt_tool=17030900&ua=MjhXJUnCsM7x03vOPtBcg05hqMfJJvuXjBJHNguGejigMwM#origin=share&sid=share&wid=MLM2824219927',
  },
  {
    name: 'Minisplit Inverter Mirage X5 2 Toneladas',
    desc: 'Minisplit Inverter Mirage X5, 220V, 2 toneladas (23,000 BTU), con WiFi.',
    img: '/img/minisplit-mirage-x5-2ton.webp',
    link: 'https://www.mercadolibre.com.mx/minisplit-inverter-x5-220v-mirage-2-toneladas-23000-btu-wifi/up/MLMU912604321?pdp_filters=item_id%3AMLM2794810765&matt_tool=17030900&ua=biu_sGLXzvYlZZB7SVlueacwhwyWNlDEjFeBRuMPxxa8Qa4#origin=share&sid=share&wid=MLM2794810765',
  },
  {
    name: 'Minisplit Mirage X5 L 1 Tonelada 110V',
    desc: 'Minisplit Mirage X5 L, 110V, 1 tonelada (12,000 BTU).',
    img: '/img/minisplit-mirage-x5l-1ton.webp',
    link: 'https://www.mercadolibre.com.mx/aire-minisplit-110v-mirage-1-toneladas-12-000-bt-x5-l/up/MLMU893338607?pdp_filters=item_id%3AMLM1490323445&matt_tool=17030900&ua=tQXXnoPUn1LgsKzKM6FuUzmS0U9Ik6K5T0HY-bXnpgx7Fro#origin=share&sid=share&wid=MLM1490323445',
  },
];

export default function IndustrialProducts() {
  return (
    <>
      <SEO
        title="Cámaras de Refrigeración y Aires Acondicionados Industriales | Proreg"
        description="Soluciones de refrigeración industrial, cámaras frigoríficas, aires acondicionados VRF/Multi Split, extracción y ventilación industrial en Guadalajara y Zapopan."
        keywords="refrigeración industrial Guadalajara, cámaras frigoríficas, aires acondicionados industriales, VRF, ventilación industrial, extracción industrial"
        canonical="/productos/refrigeracion-industrial"
      />

      <section
        className="relative bg-primary-800 py-20 bg-cover bg-center"
        style={{ backgroundImage: "url('/img/industrial.png')" }}
      >
        <div className="absolute inset-0 bg-primary-900/70" />
        <div className="container-proreg relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <h1 className="heading-1 text-white mb-4">Refrigeración Industrial y Climatización</h1>
            <p className="text-lg text-white/70 max-w-2xl">Soluciones de refrigeración para industria, comercio y procesos especiales.</p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-proreg">
          <div className="grid sm:grid-cols-2 gap-6 mb-20">
            {systems.map((item, i) => (
              <motion.div key={item.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }} className="bg-gray-50 rounded-2xl p-8 card-hover">
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 bg-primary-800 rounded-xl flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-7 h-7 text-accent" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-primary-800 mb-2">{item.title}</h2>
                    <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mb-20">
            <h2 className="heading-2 text-primary-800 mb-4 text-center">Equipos</h2>
            <p className="text-gray-600 text-center mb-10 max-w-2xl mx-auto">Trabajamos con equipos de tecnología confiable para garantizar el mejor desempeño.</p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {equipment.map((item, i) => (
                <motion.div key={item.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.05 }} className="bg-gray-50 rounded-xl p-5 text-center card-hover">
                  <div className="w-12 h-12 bg-primary-800 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Fan className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="font-semibold text-primary-800 text-sm mb-1.5">{item.name}</h3>
                  <p className="text-xs text-gray-500">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="mb-20">
            <h2 className="heading-2 text-primary-800 mb-4 text-center">Diagramas Técnicos</h2>
            <p className="text-gray-600 text-center mb-10 max-w-2xl mx-auto">Ilustraciones de referencia de nuestros sistemas y configuraciones.</p>
            <div className="grid sm:grid-cols-2 gap-8">
              {diagrams.map((item, i) => (
                <motion.div key={item.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }} className="bg-gray-50 rounded-2xl overflow-hidden card-hover">
                  <div className="aspect-[16/9] bg-primary-50 flex items-center justify-center p-8">
                    <svg viewBox="0 0 300 180" className="w-full h-full" fill="none">
                      {i === 0 && (
                        <>
                          <rect x="30" y="40" width="240" height="100" stroke="#1a2332" strokeWidth="2" rx="4" />
                          <line x1="30" y1="70" x2="270" y2="70" stroke="#4a6385" strokeWidth="1.5" strokeDasharray="4 4" />
                          <line x1="30" y1="110" x2="270" y2="110" stroke="#4a6385" strokeWidth="1.5" strokeDasharray="4 4" />
                          <rect x="60" y="55" width="30" height="10" fill="#f5a623" rx="2" />
                          <rect x="120" y="95" width="30" height="10" fill="#f5a623" rx="2" />
                          <rect x="200" y="55" width="30" height="10" fill="#f5a623" rx="2" />
                          <line x1="150" y1="20" x2="150" y2="40" stroke="#4a6385" strokeWidth="1.5" />
                          <circle cx="150" cy="15" r="5" fill="#f5a623" />
                        </>
                      )}
                      {i === 1 && (
                        <>
                          <rect x="40" y="50" width="80" height="60" stroke="#1a2332" strokeWidth="2" rx="4" />
                          <rect x="180" y="50" width="80" height="60" stroke="#1a2332" strokeWidth="2" rx="4" />
                          <line x1="120" y1="80" x2="180" y2="80" stroke="#f5a623" strokeWidth="2" strokeDasharray="6 3" />
                          <line x1="120" y1="65" x2="180" y2="65" stroke="#4a6385" strokeWidth="1.5" strokeDasharray="4 4" />
                          <line x1="120" y1="95" x2="180" y2="95" stroke="#4a6385" strokeWidth="1.5" strokeDasharray="4 4" />
                          <circle cx="80" cy="80" r="15" stroke="#f5a623" strokeWidth="2" />
                          <circle cx="220" cy="80" r="15" stroke="#f5a623" strokeWidth="2" />
                        </>
                      )}
                      {i === 2 && (
                        <>
                          <rect x="20" y="20" width="260" height="140" stroke="#1a2332" strokeWidth="2" rx="4" />
                          <rect x="100" y="30" width="100" height="40" stroke="#f5a623" strokeWidth="2" rx="4" />
                          <line x1="150" y1="70" x2="150" y2="100" stroke="#4a6385" strokeWidth="1.5" />
                          <rect x="130" y="100" width="40" height="15" fill="#f5a623" rx="2" />
                          <line x1="120" y1="80" x2="120" y2="130" stroke="#4a6385" strokeWidth="1" strokeDasharray="3 3" />
                          <line x1="180" y1="80" x2="180" y2="130" stroke="#4a6385" strokeWidth="1" strokeDasharray="3 3" />
                        </>
                      )}
                      {i === 3 && (
                        <>
                          <rect x="30" y="50" width="240" height="80" stroke="#1a2332" strokeWidth="2" rx="4" />
                          <line x1="30" y1="90" x2="270" y2="90" stroke="#4a6385" strokeWidth="1" strokeDasharray="3 3" />
                          <rect x="40" y="60" width="20" height="15" fill="#f5a623" rx="2" />
                          <rect x="240" y="105" width="20" height="15" fill="#f5a623" rx="2" />
                          <path d="M60 67 Q150 50 240 112" stroke="#f5a623" strokeWidth="2" strokeDasharray="6 3" fill="none" />
                          <path d="M60 112 Q150 130 240 67" stroke="#4a6385" strokeWidth="1.5" strokeDasharray="4 4" fill="none" />
                        </>
                      )}
                    </svg>
                  </div>
                  <div className="p-5">
                    <h3 className="font-bold text-primary-800 mb-1.5">{item.title}</h3>
                    <p className="text-sm text-gray-600">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="heading-2 text-primary-800 mb-4 text-center">Catálogo de Productos</h2>
            <p className="text-gray-600 text-center mb-10 max-w-2xl mx-auto">Aires acondicionados y minisplits disponibles para venta.</p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {catalog.map((item, i) => (
                <motion.div key={item.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.3, delay: i * 0.05 }} className="bg-white rounded-xl border border-gray-100 overflow-hidden card-hover flex flex-col">
                  <div className="aspect-square overflow-hidden bg-white flex items-center justify-center p-4">
                    <img src={item.img} alt={item.name} loading="lazy" className="max-w-full max-h-full object-contain" />
                  </div>
                  <div className="p-4 flex flex-col flex-1 border-t border-gray-100">
                    <h3 className="font-semibold text-primary-800 text-sm mb-1.5">{item.name}</h3>
                    <p className="text-xs text-gray-500 mb-3 flex-1">{item.desc}</p>
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-1.5 text-sm bg-primary-50 text-primary-800 hover:bg-accent hover:text-primary-900 font-medium py-2 rounded-lg transition-all duration-300"
                    >
                      <ShoppingBag className="w-4 h-4" />
                      Comprar
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}