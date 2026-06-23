export const metadata = {
  title: 'Sarana Multi AC - Jasa Service AC Bekasi',
  description: 'Service AC, Cuci AC, Isi Freon, Bongkar Pasang AC Bekasi. Teknisi Berpengalaman.',
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
