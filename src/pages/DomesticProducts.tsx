import { motion } from 'framer-motion';
import { Refrigerator, WashingMachine, ShoppingCart, Wrench, Settings, Fan, ArrowRight, CheckCircle } from 'lucide-react';
import SEO from '@/components/SEO';
import { openWhatsApp } from '@/utils/whatsapp';

const fridgeTypes = [
  { name: 'Refrigeradores de una puerta', desc: 'Clásicos y eficientes, ideales para espacios reducidos y hogares pequeños.', img: 'https://images.pexels.com/photos/4099354/pexels-photo-4099354.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { name: 'Refrigeradores Side by Side', desc: 'Amplia capacidad con dispensador de agua y hielo, perfecto para familias grandes.', img: 'https://images.pexels.com/photos/4099353/pexels-photo-4099353.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { name: 'Refrigeradores Comerciales', desc: 'Diseñados para negocios, restaurantes y comercios con alta resistencia y durabilidad.', img: 'https://images.pexels.com/photos/4099355/pexels-photo-4099355.jpeg?auto=compress&cs=tinysrgb&w=600' },
];

const washerTypes = [
  { name: 'Lavadoras de Carga Superior', desc: 'Prácticas y económicas, con gran capacidad de carga y fácil acceso.', img: 'https://images.pexels.com/photos/4498542/pexels-photo-4498542.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { name: 'Lavadoras de Carga Frontal', desc: 'Eficientes en agua y energía, con programas especializados de lavado.', img: 'https://images.pexels.com/photos/4498543/pexels-photo-4498543.jpeg?auto=compress&cs=tinysrgb&w=600' },
];

const relatedServices = [
  { icon: ShoppingCart, title: 'Venta', desc: 'Asesoría y venta de equipos de las mejores marcas.' },
  { icon: Fan, title: 'Instalación', desc: 'Instalación profesional garantizando óptimo funcionamiento.' },
  { icon: Wrench, title: 'Mantenimiento', desc: 'Pólizas de mantenimiento preventivo y correctivo.' },
  { icon: Settings, title: 'Reparación', desc: 'Diagnóstico y reparación con refacciones originales.' },
];

const catalog = [
  'Refrigerador de una puerta 12 pies',
  'Refrigerador Side by Side 22 pies',
  'Refrigerador comercial de doble puerta',
  'Lavadora de carga superior 12 kg',
  'Lavadora de carga frontal 16 kg',
  'Mini refrigerador 4 pies',
  'Congelador horizontal 7 pies',
  'Lavadora-secadora automática',
];

export default function DomesticProducts() {
  return (
    <>
      <SEO
        title="Refrigeradores y Lavadoras Domésticas | Venta e Instalación en Guadalajara | Proreg"
        description="Venta, instalación, mantenimiento y reparación de refrigeradores y lavadoras domésticas y comerciales en Guadalajara y Zapopan. Equipos de las mejores marcas."
        keywords="refrigeradores Guadalajara, lavadoras domésticas, venta refrigeradores, reparación lavadoras, instalación electrodomésticos"
        canonical="/productos/domesticos"
      />

      <section className="bg-primary-800 py-20">
        <div className="container-proreg">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <h1 className="heading-1 text-white mb-4">Refrigeradores y Lavadoras Domésticas</h1>
            <p className="text-lg text-white/70 max-w-2xl">Domésticos y comerciales de todas capacidades y características.</p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-proreg">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="max-w-3xl mb-16">
            <p className="text-lg text-gray-600 leading-relaxed">
              En Proreg ofrecemos una amplia selección de refrigeradores y lavadoras para uso doméstico y comercial. Trabajamos con marcas reconocidas y te asesoramos para encontrar el equipo ideal según tus necesidades, espacio y presupuesto. Además de la venta, contamos con servicios completos de instalación, mantenimiento y reparación.
            </p>
          </motion.div>

          <div className="mb-16">
            <h2 className="heading-3 text-primary-800 mb-8 flex items-center gap-3">
              <Refrigerator className="w-8 h-8 text-accent" />
              Tipos de Refrigeradores
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {fridgeTypes.map((item, i) => (
                <motion.div key={item.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.1 }} className="bg-gray-50 rounded-2xl overflow-hidden card-hover">
                  <div className="aspect-[4/3] overflow-hidden bg-gray-200">
                    <img src={item.img} alt={item.name} loading="lazy" className="w-full h-full object-cover" />
                  </div>
                  <div className="p-6">
                    <h3 className="font-bold text-primary-800 mb-2">{item.name}</h3>
                    <p className="text-sm text-gray-600">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="mb-16">
            <h2 className="heading-3 text-primary-800 mb-8 flex items-center gap-3">
              <WashingMachine className="w-8 h-8 text-accent" />
              Tipos de Lavadoras
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {washerTypes.map((item, i) => (
                <motion.div key={item.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.1 }} className="bg-gray-50 rounded-2xl overflow-hidden card-hover">
                  <div className="aspect-[4/3] overflow-hidden bg-gray-200">
                    <img src={item.img} alt={item.name} loading="lazy" className="w-full h-full object-cover" />
                  </div>
                  <div className="p-6">
                    <h3 className="font-bold text-primary-800 mb-2">{item.name}</h3>
                    <p className="text-sm text-gray-600">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="mb-16">
            <h2 className="heading-3 text-primary-800 mb-8">Servicios Relacionados</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedServices.map((item, i) => (
                <motion.div key={item.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.1 }} className="text-center p-6 bg-gray-50 rounded-xl card-hover">
                  <div className="w-14 h-14 bg-primary-800 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-7 h-7 text-accent" />
                  </div>
                  <h3 className="font-bold text-primary-800 mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="heading-3 text-primary-800 mb-8">Catálogo de Productos</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {catalog.map((item, i) => (
                <motion.div key={item} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.3, delay: i * 0.05 }} className="bg-white rounded-xl border border-gray-100 overflow-hidden card-hover">
                  <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                    <Refrigerator className="w-16 h-16 text-primary-300" />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-primary-800 text-sm mb-3">{item}</h3>
                    <button
                      onClick={() => openWhatsApp(`Hola, me interesa el producto: ${item}. ¿Me pueden dar más información?`)}
                      className="w-full text-sm bg-primary-50 text-primary-800 hover:bg-accent hover:text-primary-900 font-medium py-2 rounded-lg transition-all duration-300"
                    >
                      Solicitar información
                    </button>
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
