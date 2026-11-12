import './globals.css';
import { Analytics } from '@vercel/analytics/next';

const siteUrl = 'https://www.wheresmygrocery.com';
const description =
  'Compare a sample grocery basket across stores and see whether a second stop is worth your time and gas. A Dallas–Fort Worth grocery trip planning demo.';

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Where’s My Grocery? | Make your grocery run count',
  description,
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Where’s My Grocery? | Make your grocery run count',
    description: 'Compare a sample grocery basket and see whether a second stop is worth your time.',
    type: 'website',
    url: '/',
    siteName: 'Where’s My Grocery?',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Where’s My Grocery? — make your grocery run count' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Where’s My Grocery? | Make your grocery run count',
    description: 'Compare a sample grocery basket and see whether a second stop is worth your time.',
    images: ['/og-image.jpg'],
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    { '@type': 'WebSite', name: 'Where’s My Grocery?', url: `${siteUrl}/`, description },
    {
      '@type': 'WebApplication',
      name: 'Where’s My Grocery?',
      url: `${siteUrl}/`,
      description,
      applicationCategory: 'LifestyleApplication',
      operatingSystem: 'Any',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
    },
  ],
};

export default function Layout({ children }) {
  return (
    <html lang="en">
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
