import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Sarana Multi AC - Jasa Service AC Bekasi',
  description: 'Service AC, Cuci AC, Isi Freon, Bongkar Pasang AC Bekasi.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  )
}
