import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Conversatorio | Autonomía Digital del Sur',
  description:
    'Conversatorio minimalista para explorar IA, soberanía tecnológica y el futuro del trabajo. Descubre fecha y lugar uniéndote al Telegram.',
  openGraph: {
    title: 'Conversatorio | Autonomía Digital del Sur',
    description:
      'Encuentro abierto sobre IA, soberanía tecnológica y futuro del trabajo. La información completa vive en Telegram.',
    type: 'website'
  },
  twitter: {
    card: 'summary',
    title: 'Conversatorio | Autonomía Digital del Sur',
    description:
      'Encuentro abierto sobre IA, soberanía tecnológica y futuro del trabajo. Únete al Telegram para obtener detalles.'
  },
  icons: {
    icon: '/Isotype_Black.svg'
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className="bg-white text-black antialiased">{children}</body>
    </html>
  );
}
