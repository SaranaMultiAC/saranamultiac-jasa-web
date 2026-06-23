export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-blue-900 mb-3">Sarana Multi AC</h1>
          <p className="text-lg text-gray-600">Jasa Service AC Profesional Bekasi & Sekitarnya</p>
          <a 
            href="https://wa.me/6281234567890" 
            target="_blank"
            className="inline-block mt-6 bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-full shadow-lg transition"
          >
            Chat WhatsApp Sekarang
          </a>
        </header>

        <section>
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Layanan Kami</h2>
          <div className="grid md:grid-cols-3 gap-6">
            
            <div className="bg-white p-6 rounded-xl shadow-md border border-blue-100">
              <h3 className="text-xl font-bold text-blue-800 mb-2">Cuci AC</h3>
              <p className="text-2xl font-bold text-gray-800">Mulai Rp 75.000</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md border border-blue-100">
              <h3 className="text-xl font-bold text-blue-800 mb-2">Isi Freon</h3>
              <p className="text-2xl font-bold text-gray-800">Mulai Rp 250.000</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md border border-blue-100">
              <h3 className="text-xl font-bold text-blue-800 mb-2">Bongkar Pasang</h3>
              <p className="text-2xl font-bold text-gray-800">Mulai Rp 350.000</p>
            </div>

          </div>
        </section>

        <footer className="text-center mt-16 text-gray-500">
          © 2026 Sarana Multi AC - Bekasi
        </footer>
        
      </div>
    </main>
  )
}
