import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowLeft, ArrowRight } from 'lucide-react';
import SEO from '@/components/SEO';
import { getPostBySlug, blogPosts } from '@/data/blogPosts';

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const post = getPostBySlug(slug || '');

  if (!post) {
    return (
      <>
        <SEO title="Artículo no encontrado | Blog Proreg" description="El artículo que buscas no existe." canonical="/blog" />
        <section className="bg-primary-800 py-20">
          <div className="container-proreg">
            <h1 className="heading-1 text-white mb-4">Artículo no encontrado</h1>
            <Link to="/blog" className="text-accent hover:text-accent-light">Volver al blog</Link>
          </div>
        </section>
      </>
    );
  }

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    author: { '@type': 'Organization', name: 'Proreg' },
    publisher: {
      '@type': 'Organization',
      name: 'Proreg',
    },
  };

  const relatedPosts = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 1);

  return (
    <>
      <SEO
        title={`${post.title} | Blog Proreg`}
        description={post.excerpt}
        keywords={`${post.category}, refrigeración, climatización, Guadalajara`}
        canonical={`/blog/${post.slug}`}
        jsonLd={articleJsonLd}
      />

      <section className="bg-primary-800 py-20">
        <div className="container-proreg max-w-3xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <Link to="/blog" className="inline-flex items-center gap-2 text-accent hover:text-accent-light mb-6 text-sm font-medium">
              <ArrowLeft className="w-4 h-4" /> Volver al blog
            </Link>
            <span className="inline-block text-xs font-semibold text-accent bg-accent/10 px-3 py-1 rounded-full mb-4">
              {post.category}
            </span>
            <h1 className="heading-2 text-white mb-4">{post.title}</h1>
            <div className="flex items-center gap-4 text-sm text-white/60">
              <span className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                {new Date(post.date).toLocaleDateString('es-MX', { day: 'numeric', month: 'long', year: 'numeric' })}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                {post.readTime} de lectura
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      <article className="section-padding bg-white">
        <div className="container-proreg max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="aspect-[16/9] rounded-2xl overflow-hidden mb-10 bg-gray-200"
          >
            <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
          </motion.div>

          <div className="prose prose-lg max-w-none">
            {post.content.map((paragraph, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="text-gray-700 leading-relaxed mb-5 text-lg"
              >
                {paragraph}
              </motion.p>
            ))}
          </div>

          {relatedPosts.length > 0 && (
            <div className="mt-16 pt-10 border-t border-gray-100">
              <h2 className="text-2xl font-bold text-primary-800 mb-6">Sigue leyendo</h2>
              {relatedPosts.map((rp) => (
                <Link
                  key={rp.slug}
                  to={`/blog/${rp.slug}`}
                  className="block bg-gray-50 rounded-xl p-6 card-hover group"
                >
                  <span className="inline-block text-xs font-semibold text-accent bg-accent/10 px-3 py-1 rounded-full mb-2">
                    {rp.category}
                  </span>
                  <h3 className="text-lg font-bold text-primary-800 group-hover:text-accent transition-colors mb-2">
                    {rp.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{rp.excerpt}</p>
                  <span className="inline-flex items-center gap-1 text-accent font-medium text-sm mt-3 group-hover:gap-2 transition-all">
                    Leer completa <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>
              ))}
            </div>
          )}
        </div>
      </article>
    </>
  );
}
