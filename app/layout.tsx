import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Via Equipamentos',
  description: 'Soluções em equipamentos industriais com alto desempenho e confiabilidade.',
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    title: 'Via Equipamentos',
    description: 'Soluções em equipamentos industriais.',
    url: 'https://seudominio.com',
    siteName: 'Via Equipamentos',
    locale: 'pt_BR',
    type: 'website',
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}