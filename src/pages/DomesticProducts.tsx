import { motion } from 'framer-motion';
import { Refrigerator, WashingMachine, ShoppingCart, Wrench, Settings, Fan, ShoppingBag } from 'lucide-react';
import SEO from '@/components/SEO';

const heroServices = [
  { icon: Wrench, label: 'Reparación' },
  { icon: Fan, label: 'Instalación' },
  { icon: Settings, label: 'Mantenimiento' },
];

const fridgeTypes = [
  { name: 'Refrigeradores de una puerta', desc: 'Clásicos y eficientes, ideales para espacios reducidos y hogares pequeños.', img: '/img/refrigerador1.png' },
  { name: 'Refrigeradores Side by Side', desc: 'Amplia capacidad con dispensador de agua y hielo, perfecto para familias grandes.', img: '/img/side.png' },
  { name: 'Refrigeradores Comerciales', desc: 'Diseñados para negocios, restaurantes y comercios con alta resistencia y durabilidad.', img: '/img/comercial.png' },
];

const washerTypes = [
  { name: 'Lavadoras de Carga Superior', desc: 'Prácticas y económicas, con gran capacidad de carga y fácil acceso.', img: '/img/superior.png' },
  { name: 'Lavadoras de Carga Frontal', desc: 'Eficientes en agua y energía, con programas especializados de lavado.', img: '/img/frontal.png' },
];

const relatedServices = [
  { icon: ShoppingCart, title: 'Venta', desc: 'Asesoría y venta de equipos de las mejores marcas.' },
  { icon: Fan, title: 'Instalación', desc: 'Instalación profesional garantizando óptimo funcionamiento.' },
  { icon: Wrench, title: 'Mantenimiento', desc: 'Pólizas de mantenimiento preventivo y correctivo.' },
  { icon: Settings, title: 'Reparación', desc: 'Diagnóstico y reparación con refacciones originales.' },
];

const catalog = [
  {
    name: 'Refrigerador Mabe RMA250FYMRQ0 250L',
    desc: 'Refrigerador Mabe color Dark Silver, 250 litros de capacidad, ideal para hogares medianos.',
    img: '/img/refrigerador-mabe-250l.png',
    link: 'https://www.mercadolibre.com.mx/refrigerador-mabe-rma250fymrq0-dark-silver-250l/p/MLM25294088?pdp_filters=item_id%3AMLM4779651334&matt_tool=17030900&ua=q5s4vULTPYnSFBfbdBUvh9IXENc5yb3E4k3sz6B5nk6fMIU#origin=share&sid=share&wid=MLM4779651334',
  },
  {
    name: 'Refrigerador Mabe Automático 360L',
    desc: 'Refrigerador automático Mabe, 360 litros, acabado Black Stainless Steel color negro.',
    img: '/img/refrigerador-mabe-360l.png',
    link: 'https://www.mercadolibre.com.mx/refrigerador-automatico-360-l-black-stainless-steel-mabe-color-negro/p/MLM18724835?pdp_filters=item_id%3AMLM1393835021&matt_tool=17030900&ua=GbRgemKy4LxzFkr4_QLBd4OJ5_YX4ewR4Gs1bz5hDbxgypc#origin=share&sid=share&wid=MLM1393835021',
  },
  {
    name: 'Refrigerador LG Side by Side Inverter 637L',
    desc: 'Refrigerador con freezer Inverter LG VS22JNT, color negro mate, 637 litros de capacidad.',
    img: '/img/refrigerador-lg-side-by-side.png',
    link: 'https://www.mercadolibre.com.mx/refrigerador-con-freezer-inverter-lg-side-by-side-vs22jnt-color-negro-mate-con-capacidad-de-637l/p/MLM18639589?pdp_filters=item_id%3AMLM5999449462&matt_tool=17030900&ua=FKpoeHsjn_kr0Tt9cXqDoy-OPOe7IjwZQWyGYW-ZaKSdIoI#origin=share&sid=share&wid=MLM5999449462',
  },
  {
    name: 'LG Refrigerador 29 French Door InstaView',
    desc: 'Refrigerador LG French Door de 29 pies con tecnología InstaView.',
    img: '/img/refrigerador-lg-french-door.png',
    link: 'https://www.mercadolibre.com.mx/lg-refrigerador-29-french-door-instaview/up/MLMU3828731385?pdp_filters=item_id%3AMLM4972039162&matt_tool=17030900&ua=0tcti0OauUjvKaAzbrHtsRIQ0cbOsPcXbusioBHcW1W7PLA',
  },
  {
    name: 'Centro de Lavado a Gas Whirlpool 20 kg',
    desc: 'Centro de lavado Whirlpool 7MWGT4027HW, 20 kg, gas, color blanco.',
    img: '/img/lavado-whirlpool-gas-20kg.png',
    link: 'https://www.mercadolibre.com.mx/centro-de-lavado-gas-20-kgs-whirlpool-7mwgt4027hw-blanco/p/MLM21412247?pdp_filters=item_id%3AMLM4458340198&matt_tool=17030900&ua=BczTNgjKpkvrNPQo-p2FEwG32yHgnf5UfqYMVTkgglaVSIE#origin=share&sid=share&wid=MLM4458340198',
  },
  {
    name: 'Centro de Lavado Samsung Bespoke AI 26 kg',
    desc: 'Centro de lavado Samsung Bespoke AI, carga frontal, 26 kg, 240V, color negro.',
    img: '/img/lavado-samsung-bespoke-26kg.png',
    link: 'https://www.mercadolibre.com.mx/centro-de-lavado-samsung-bespoke-ai-26kg-frontal-240v-negra-color-negro/p/MLM50709527?pdp_filters=item_id%3AMLM5811591842&matt_tool=17030900&ua=xVyC-2jySzeEMA_kEp4O3RzlY0gOU--NaxZmMNHfo1_angk#origin=share&sid=share&wid=MLM5811591842',
  },
  {
    name: 'Lavadora Whirlpool Xpert Eco 21 kg',
    desc: 'Lavadora Whirlpool de carga superior Xpert Eco, 21 kg, color gris oscuro.',
    img: '/img/lavadora-whirlpool-xpert-eco-21kg.png',
    link: 'https://www.mercadolibre.com.mx/lavadora-21kg-carga-superior-xpert-eco-gris-oscuro-whirlpool/p/MLM76427694?pdp_filters=item_id%3AMLM6205824180&matt_tool=17030900&ua=9KtsV9Z_WIWMMQlL-ASSLkjCLxfElfHF_vbtMAP5g-UBt1U#origin=share&sid=share&wid=MLM6205824180',
  },
  {
    name: 'Lavadora Whirlpool Impeller Xpert System 20 kg',
    desc: 'Lavadora Whirlpool de carga superior con sistema Impeller Xpert System, 20 kg.',
    img: '/img/lavadora-whirlpool-impeller-20kg.png',
    link: 'https://www.mercadolibre.com.mx/lavadora-whirlpool-carga-superior-impeller-xpert-system-20-k/p/MLM35536088?pdp_filters=item_id%3AMLM2048692063&matt_tool=17030900&ua=VBh3msMCd0b3qr4V7-yI9vqlA8hK-4Du9wZIhecy798ws74#origin=share&sid=share&wid=MLM2048692063',
  },
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

      {/* Hero */}
      <section
        className="relative bg-primary-800 py-20 md:py-24 bg-cover bg-center"
        style={{ backgroundImage: "url('/img/domestic.png')" }}
      >
        <div className="absolute inset-0 bg-primary-900/70" />
        <div className="container-proreg relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            {/* Servicios: Reparación, Instalación y Mantenimiento */}
            <div className="mb-8 flex items-center gap-5">
              <span aria-hidden="true" className="hidden sm:block h-1 w-16 shrink-0 bg-accent" />
              <ul className="flex flex-wrap items-center gap-x-6 gap-y-4 xl:flex-nowrap">
                {heroServices.map(({ icon: Icon, label }, i) => (
                  <li key={label} className="flex items-center gap-x-6">
                    {i > 0 && (
                      <span aria-hidden="true" className="hidden sm:block h-8 w-px bg-white/30" />
                    )}
                    <span className="flex items-center gap-2.5 whitespace-nowrap text-accent font-bold uppercase tracking-[0.1em] text-xl sm:text-2xl xl:text-3xl">
                      <Icon className="w-6 h-6 xl:w-8 xl:h-8" aria-hidden="true" />
                      {label}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <h1 className="heading-1 text-white mb-4">Refrigeradores y Lavadoras Domésticas y Comerciales</h1>
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