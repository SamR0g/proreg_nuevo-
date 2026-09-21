import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight, ArrowLeft } from 'lucide-react';
import SEO from '@/components/SEO';
import { blogPosts } from '@/data/blogPosts';

export default function Blog() {
  return (
    <>
      <SEO
        title="Guías Técnicas de Refrigeración y Climatización | Blog Proreg"
        description="Recursos y guías informativas para resolver problemas comunes de refrigeración, climatización y mantenimiento en Guadalajara y Zapopan."
        keywords="guías refrigeración, blog refrigeración, mantenimiento climatización, cálculo ACH, compresores scroll"
        canonical="/blog"
      />

      <section
        className="relative bg-primary-800 py-20 bg-cover bg-center"
        style={{ backgroundImage: "url('./img/blog.png')" }}
      >
        <div className="absolute inset-0 bg-primary-900/70" />
        <div className="container-proreg relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <h1 className="heading-1 text-white mb-4">Guías Técnicas</h1>
            <p className="text-lg text-white/70 max-w-2xl">Recursos y guías informativas para resolver problemas comunes de refrigeración, climatización y mantenimiento.</p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-proreg">
          <div className="grid md:grid-cols-2 gap-8">
            {blogPosts.map((post, i) => (
              <motion.article
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Link to={`/blog/${post.slug}`} className="block bg-white rounded-2xl overflow-hidden border border-gray-100 card-hover group h-full">
                  <div className="aspect-[16/9] overflow-hidden bg-gray-200">
                    <img
                      src={post.image}
                      alt={post.title}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-4 mb-3 text-sm text-gray-500">
                      <span className="inline-block text-xs font-semibold text-accent bg-accent/10 px-3 py-1 rounded-full">
                        {post.category}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" />
                        {new Date(post.date).toLocaleDateString('es-MX', { day: 'numeric', month: 'long', year: 'numeric' })}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" />
                        {post.readTime}
                      </span>
                    </div>
                    <h2 className="text-lg font-bold text-primary-800 mb-3 group-hover:text-accent transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">{post.excerpt}</p>
                    <span className="inline-flex items-center gap-1 text-accent font-medium text-sm group-hover:gap-2 transition-all">
                      Leer completa <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>

          <div className="mt-12">
            <Link to="/" className="inline-flex items-center gap-2 text-primary-800 hover:text-accent font-medium transition-colors">
              <ArrowLeft className="w-4 h-4" /> Volver al inicio
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}