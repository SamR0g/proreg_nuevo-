export const WHATSAPP_NUMBER = '3326409224';
export const WHATSAPP_BASE_URL = `https://wa.me/${WHATSAPP_NUMBER}`;

export const DEFAULT_WHATSAPP_MESSAGE =
  'Hola, quiero información sobre sus servicios de refrigeración.';

export function buildWhatsAppUrl(message: string): string {
  return `${WHATSAPP_BASE_URL}?text=${encodeURIComponent(message)}`;
}

export function openWhatsApp(message: string): void {
  window.open(buildWhatsAppUrl(message), '_blank', 'noopener,noreferrer');
}
