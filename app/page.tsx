export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-100 p-6">
      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl p-8 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-3">
          Sarana Multi AC
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Jasa Service AC Profesional Bekasi & Sekitarnya
        </p>
        
        <a 
          href="https://wa.me/6281234567890" 
          target="_blank"
          className="inline-block bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-full shadow-lg transition"
        >
          Chat WhatsApp Sekarang
        </a>

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          <div className="bg-blue-50 p-6 rounded-xl">
            <h3 className="font-bold text-blue-900">Cuci AC</h3>
            <p className="text-gray-700">Mulai Rp 75.000</p>
          </div>
          <div className="bg-blue-50 p-6 rounded-xl">
            <h3 className="font-bold text-blue-900">Isi Freon</h3>
            <p className="text-gray-700">Mulai Rp 250.000</p>
          </div>
          <div className="bg-blue-50 p-6 rounded-xl">
            <h3 className="font-bold text-blue-900">Bongkar Pasang</h3>
            <p className="text-gray-700">Mulai Rp 350.000</p>
          </div>
        </div>

        <p className="mt-12 text-sm text-gray-500">
          © 2026 Sarana Multi AC - Bekasi
        </p>
      </div>
    </main>
  )
}
