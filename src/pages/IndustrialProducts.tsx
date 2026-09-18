import { motion } from 'framer-motion';
import { Fan, AirVent, Snowflake, Wind, CheckCircle, ArrowRight } from 'lucide-react';
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

export default function IndustrialProducts() {
  return (
    <>
      <SEO
        title="Cámaras de Refrigeración y Aires Acondicionados Industriales | Proreg"
        description="Soluciones de refrigeración industrial, cámaras frigoríficas, aires acondicionados VRF/Multi Split, extracción y ventilación industrial en Guadalajara y Zapopan."
        keywords="refrigeración industrial Guadalajara, cámaras frigoríficas, aires acondicionados industriales, VRF, ventilación industrial, extracción industrial"
        canonical="/productos/refrigeracion-industrial"
      />

      <section className="bg-primary-800 py-20">
        <div className="container-proreg">
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

          <div>
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
        </div>
      </section>
    </>
  );
}
