import { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
import SEO from '@/components/SEO';
import { localBusinessJsonLd } from '@/config/site';
import { openWhatsApp } from '@/utils/whatsapp';

const contactInfo = [
  { icon: MapPin, label: 'Ubicación', value: 'Guadalajara y Zapopan, Jalisco' },
  { icon: Phone, label: 'Teléfono', value: '33 2640 9224' },
  { icon: Mail, label: 'Email', value: 'contacto@proreg.com.mx' },
  { icon: Clock, label: 'Horario', value: 'Lunes a Sábado, 9am - 7pm' },
];

const serviceTypes = [
  'Venta de Equipos',
  'Mantenimiento',
  'Reparación',
  'Instalación',
  'Paneles Solares',
  'Otro/Consulta',
];

export default function Contact() {
  const [form, setForm] = useState({
    nombre: '',
    telefono: '',
    tipoServicio: '',
    mensaje: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Hola, mi nombre es ${form.nombre}. Teléfono: ${form.telefono}. Servicio de interés: ${form.tipoServicio}. Mensaje: ${form.mensaje}`;
    openWhatsApp(message);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <>
      <SEO
        title="Contacto | Proreg Guadalajara y Zapopan"
        description="Contáctanos para servicios de refrigeración, climatización y paneles solares en Guadalajara y Zapopan. Teléfono: 33 2640 9224, Email: contacto@proreg.com.mx"
        keywords="contacto Proreg, refrigeración Guadalajara, refrigeración Zapopan, contacto refrigeración"
        canonical="/contacto"
        jsonLd={localBusinessJsonLd}
      />

      <section className="bg-primary-800 py-20">
        <div className="container-proreg">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <h1 className="heading-1 text-white mb-4">Ponte en Contacto</h1>
            <p className="text-lg text-white/70 max-w-2xl">Estamos listos para atender tus necesidades.</p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-proreg">
          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
              <h2 className="heading-3 text-primary-800 mb-8">Información de Contacto</h2>
              <div className="space-y-6">
                {contactInfo.map((item, i) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                    className="flex items-start gap-4 p-5 bg-gray-50 rounded-xl card-hover"
                  >
                    <div className="w-12 h-12 bg-primary-800 rounded-xl flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 mb-1">{item.label}</p>
                      <p className="font-semibold text-primary-800">{item.value}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
              <h2 className="heading-3 text-primary-800 mb-8">Envíanos un mensaje</h2>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="nombre" className="block text-sm font-medium text-primary-800 mb-2">
                    Nombre
                  </label>
                  <input
                    type="text"
                    id="nombre"
                    name="nombre"
                    required
                    value={form.nombre}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all bg-gray-50"
                    placeholder="Tu nombre completo"
                  />
                </div>
                <div>
                  <label htmlFor="telefono" className="block text-sm font-medium text-primary-800 mb-2">
                    Teléfono
                  </label>
                  <input
                    type="tel"
                    id="telefono"
                    name="telefono"
                    required
                    value={form.telefono}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all bg-gray-50"
                    placeholder="Tu número de teléfono"
                  />
                </div>
                <div>
                  <label htmlFor="tipoServicio" className="block text-sm font-medium text-primary-800 mb-2">
                    Tipo de Servicio
                  </label>
                  <select
                    id="tipoServicio"
                    name="tipoServicio"
                    required
                    value={form.tipoServicio}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all bg-gray-50"
                  >
                    <option value="">Selecciona un servicio</option>
                    {serviceTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="mensaje" className="block text-sm font-medium text-primary-800 mb-2">
                    Mensaje
                  </label>
                  <textarea
                    id="mensaje"
                    name="mensaje"
                    required
                    rows={4}
                    value={form.mensaje}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all bg-gray-50 resize-none"
                    placeholder="Cuéntanos sobre tu necesidad..."
                  />
                </div>
                <button type="submit" className="btn-primary w-full">
                  <Send className="mr-2 w-5 h-5" />
                  Enviar por WhatsApp
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
