import { Routes, Route } from 'react-router-dom';
import Layout from '@/components/Layout';
import Home from '@/pages/Home';
import Services from '@/pages/Services';
import DomesticProducts from '@/pages/DomesticProducts';
import IndustrialProducts from '@/pages/IndustrialProducts';
import SolarPanels from '@/pages/SolarPanels';
import Blog from '@/pages/Blog';
import BlogPost from '@/pages/BlogPost';
import About from '@/pages/About';
import Contact from '@/pages/Contact';

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/servicios" element={<Services />} />
        <Route path="/productos/domesticos" element={<DomesticProducts />} />
        <Route path="/productos/refrigeracion-industrial" element={<IndustrialProducts />} />
        <Route path="/productos/paneles-solares" element={<SolarPanels />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
        <Route path="/nosotros" element={<About />} />
        <Route path="/contacto" element={<Contact />} />
      </Route>
    </Routes>
  );
}