'use client'
import { useState } from 'react'
import Link from 'next/link'

export default function Home() {
  const waNumber = '628137321066' // GANTI NOMOR WA LU
  
  const layananList = [
    { id: 'cuci', nama: 'Service Rutin / Cuci AC', harga: 75000 },
    { id: 'dingin', nama: 'AC Tidak Dingin - Cek + Isi Freon', harga: 250000 },
    { id: 'bongkar', nama: 'Bongkar Pasang AC', harga: 350000 },
    { id: 'bocor', nama: 'AC Bocor Air', harga: 125000 },
    { id: 'rusak', nama: 'AC Rusak / Mati Total', harga: 150000 },
    { id: 'lainnya', nama: 'Lainnya - Konsultasi', harga: 0 },
  ]

  const [selected, setSelected] = useState([])
  
  const toggleLayanan = (id) => {
    setSelected(prev => 
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    )
  }

  const totalHarga = selected.reduce((total, id) => {
    const item = layananList.find(l => l.id === id)
    return total + (item ? item.harga : 0)
  }, 0)

  const selectedNames = selected.map(id => layananList.find(l => l.id === id)?.nama).join(', ')
  
  const waText = `Halo Sarana Multi AC Cilangkap,%0A%0ASaya mau pesan:%0A${selectedNames || 'Belum pilih layanan'}%0A%0AEstimasi: Rp ${totalHarga.toLocaleString('id-ID')}%0A%0AMohon infonya.`

  return (
    <main>
      {/* Header */}
      <header className="bg-blue-700 text-white sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Sarana Multi AC</h1>
          <Link href={`https://wa.me/${waNumber}`} className="bg-green-500 hover:bg-green-600 px-6 py-2 rounded-lg font-bold">WhatsApp</Link>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-gradient-to-b from-blue-600 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-2">Jasa Service AC Cilangkap</h2>
          <p className="text-xl mb-4 opacity-90">Jakarta Timur</p>
          <div className="flex justify-center items-center gap-2 mb-6">
            <span className="text-yellow-400">★★★★★</span>
            <span>4.8 (95.547 review)</span>
          </div>
        </div>
      </section>

      {/* Keunggulan */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="bg-gray-50 p-6 rounded-xl">
            <div className="space-y-3 text-sm">
              <p>✅ <strong>Garansi 60 Hari*</strong></p>
              <p>✅ <strong>Harga Terstandarisasi</strong></p>
              <p>✅ <strong>Teknisi Terverifikasi</strong></p>
              <p>✅ <strong>Garansi Hangus Jika Invoice Tidak Sesuai**</strong></p>
              <p className="text-xs text-gray-500 pt-2">* Hanya berlaku untuk pembayaran non-tunai<br/>** Hanya berlaku apabila invoice di lapangan berbeda</p>
            </div>
          </div>
        </div>
      </section>

      {/* Kalkulator */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="bg-white rounded-xl shadow-lg">
            <div className="p-6 border-b">
              <h3 className="text-xl font-bold">Keluhan / Masalah AC *</h3>
              <p className="text-xs text-blue-600 mt-2">*Garansi tidak berlaku untuk layanan cuci AC & jasa pengecekan</p>
            </div>
            
            {layananList.map((item) => (
              <div key={item.id} onClick={() => toggleLayanan(item.id)} className="p-6 border-b flex justify-between items-center cursor-pointer hover:bg-gray-50">
                <div>
                  <p className="font-semibold">{item.nama}</p>
                  <p className="text-sm text-gray-600">Rp {item.harga.toLocaleString('id-ID')}</p>
                </div>
                <div className={`w-6 h-6 rounded border-2 flex items-center justify-center ${selected.includes(item.id) ? 'bg-blue-600 border-blue-600' : 'border-gray-300'}`}>
                  {selected.includes(item.id) && <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>}
                </div>
              </div>
            ))}

            <div className="p-6 bg-gray-50">
              <div className="flex justify-between items-center mb-4">
                <div>
                  <p className="text-sm text-gray-600">Estimasi Harga</p>
                  <p className="text-2xl font-bold text-blue-700">Rp {totalHarga.toLocaleString('id-ID')}</p>
                </div>
                <Link 
                  href={selected.length > 0 ? `https://wa.me/${waNumber}?text=${waText}` : '#'}
                  className={`px-8 py-4 rounded-lg font-bold text-white ${selected.length > 0 ? 'bg-red-600 hover:bg-red-700' : 'bg-gray-400 cursor-not-allowed'}`}
                >
                  Selanjutnya
                </Link>
              </div>
              {selected.length === 0 && <p className="text-xs text-red-500">*Pilih minimal 1 layanan</p>}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>© 2026 Sarana Multi AC - Cilangkap, Jakarta Timur</p>
          <p className="opacity-75 mt-2">Melayani Cilangkap, Cibubur, Ciracas, Cipayung</p>
        </div>
      </footer>
    </main>
  )
}
