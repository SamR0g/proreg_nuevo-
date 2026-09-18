export const SITE_URL = 'https://www.proreg.com.mx';
export const SITE_NAME = 'Proreg';
export const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.jpg`;

export const localBusinessJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Proreg',
  url: SITE_URL,
  telephone: '+52 33 2640 9224',
  email: 'contacto@proreg.com.mx',
  areaServed: ['Guadalajara', 'Zapopan', 'Jalisco'],
  openingHours: 'Mo-Sa 09:00-19:00',
};
