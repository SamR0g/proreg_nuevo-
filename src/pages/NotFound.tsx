// src/pages/NotFound.tsx
import { Link } from 'react-router-dom';
import SEO from '@/components/SEO';

export default function NotFound() {
  return (
    <section className="section-padding">
      <SEO
        title="Página no encontrada | Proreg"
        description="La página que buscas no existe."
        noindex
      />
      <div className="container-proreg text-center">
        <h1 className="heading-1 text-primary-800 mb-4">Página no encontrada</h1>
        <Link to="/" className="btn-primary">Volver al inicio</Link>
      </div>
    </section>
  );
}