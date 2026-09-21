import { useEffect } from 'react';
import { useLocation, Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import WhatsAppButton from './WhatsAppButton';

export default function Layout() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Asignación directa (no window.scrollTo) para saltarse el
    // scroll-behavior: smooth del CSS y evitar el bug de Safari/iOS
    // donde window.scrollTo(0,0) no se aplica al cambiar de ruta.
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, [pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 overflow-x-hidden">
      <Header />
      <main className="flex-1 pt-16">
        <Outlet />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}