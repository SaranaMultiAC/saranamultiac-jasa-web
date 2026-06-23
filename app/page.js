export default function Home() {
  return (
    <main className="min-h-screen bg-blue-600 text-white">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-5xl font-bold mb-4">Sarana Multi AC</h1>
        <p className="text-xl mb-8">Jasa Service AC Profesional Bekasi & Sekitarnya</p>
        
        <a href="https://wa.me/6281234567890" 
           className="bg-green-500 hover:bg-green-600 px-8 py-4 rounded-lg text-xl font-bold inline-block">
          Chat WhatsApp Sekarang
        </a>

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <div className="bg-white/10 p-6 rounded-lg">
            <h2 className="text-2xl font-bold mb-2">Cuci AC</h2>
            <p className="text-lg">Mulai Rp 75.000</p>
          </div>
          <div className="bg-white/10 p-6 rounded-lg">
            <h2 className="text-2xl font-bold mb-2">Isi Freon</h2>
            <p className="text-lg">Mulai Rp 250.000</p>
          </div>
          <div className="bg-white/10 p-6 rounded-lg">
            <h2 className="text-2xl font-bold mb-2">Bongkar Pasang</h2>
            <p className="text-lg">Mulai Rp 350.000</p>
          </div>
        </div>

        <footer className="mt-16 text-center opacity-75">
          © 2026 Sarana Multi AC - Bekasi
        </footer>
      </div>
    </main>
  )
}
