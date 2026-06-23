export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-blue-600 text-white p-6 text-center">
        <h1 className="text-4xl font-bold">Sarana Multi AC</h1>
        <p className="mt-2">Jasa Service AC Profesional Bekasi & Sekitarnya</p>
        <a href="https://wa.me/6281234567890" className="inline-block mt-4 bg-green-500 px-6 py-3 rounded-lg font-semibold">
          Chat WhatsApp Sekarang
        </a>
      </header>

      {/* Layanan */}
      <section className="p-8 max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold text-center mb-6">Layanan Kami</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="font-bold text-lg">Cuci AC</h3>
            <p>Mulai Rp 75.000</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="font-bold text-lg">Isi Freon</h3>
            <p>Mulai Rp 250.000</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="font-bold text-lg">Bongkar Pasang</h3>
            <p>Mulai Rp 350.000</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center p-6 mt-8">
        <p>© 2026 Sarana Multi AC - Bekasi</p>
      </footer>
    </main>
  )
}
