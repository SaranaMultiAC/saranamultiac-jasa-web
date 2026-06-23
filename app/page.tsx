export default function Home() {
  return (
    <main className="min-h-screen bg-blue-50 flex items-center justify-center p-8">
      <div className="bg-white p-10 rounded-2xl shadow-xl text-center max-w-2xl">
        <h1 className="text-5xl font-bold text-blue-900 mb-4">Sarana Multi AC</h1>
        <p className="text-xl text-gray-600 mb-8">Jasa Service AC Profesional Bekasi</p>
        <a 
          href="https://wa.me/6281234567890" 
          className="inline-block bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-10 rounded-full text-lg"
        >
          Chat WhatsApp
        </a>
      </div>
    </main>
  )
}
