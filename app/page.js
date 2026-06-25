'use client'
import { useState } from 'react'
import Link from 'next/link'
import Kalkulator from './components/Kalkulator'

export default function Home() {
  const waNumber = '628137321066' // GANTI NOMOR WA LU
  const [openFAQ, setOpenFAQ] = useState(null)

  const faqs = [
    { q: 'Tentang Layanan Service AC Sarana Multi AC', a: 'Kami melayani semua jenis service AC untuk area Cilangkap Jakarta Timur. Teknisi bersertifikat & berpengalaman 5+ tahun.' },
    { q: 'Cara Memesan Jasa', a: '1. Centang layanan yang Anda butuhkan 2. Klik Selanjutnya 3. Otomatis chat WhatsApp kami 4. Teknisi datang sesuai jadwal' },
    { q: 'Tarif Minimum Service', a: 'Jika total harga layanan yang dipilih kurang dari Rp85.000, maka akan dikenakan biaya minimum sebesar Rp85.000.' },
    { q: 'Garansi 60 Hari', a: 'Garansi 60 hari berlaku untuk pembayaran non-tunai. Garansi hangus jika ada perbaikan oleh pihak lain.' },
  ]

  const testimonials = [
    {text: '"AC sdh dingin kembali dan tidak bocor lagi, semoga awet. tks"', name: 'Iely, 07 Jun 2026'},
    {text: '"Sangat baik. Transparan, Rekomen. Terima kasih."', name: 'Rahmat Hidayat, 06 Jun 2026'},
    {text: '"Petugasnya ramah, kasih info yg jelas mengenai freon. Good job"', name: 'Merlin, 06 Jun 2026'},
  ]

  return (
    <main className="bg-gray-100 min-h-screen">
      <header className="bg-blue-700 text-white sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Sarana Multi AC</h1>
          <Link href={`https://wa.me/${waNumber}?text=Halo%20Sarana%20Multi%20AC,%20saya%20mau%20service%20AC`} className="bg-green-500 hover:bg-green-600 px-6 py-2 rounded-lg font-bold">WhatsApp</Link>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 max-w-4xl">
        
        {/* BANNER PROMO - UDAH GW KECILIN NIH */}
        <div className="mb-6">
          <Link href={`https://wa.me/${waNumber}?text=Halo,%20saya%20mau%20promo%20Cuci%20AC%20dari%20banner`}>
            <img 
              src="/banner-cuci-ac.jpg" 
              alt="Promo Cuci AC Sarana Multi AC" 
              className="w-full max-w-3xl mx-auto rounded-xl shadow-md hover:shadow-xl transition-shadow"
            />
          </Link>
        </div>

        {/* REVIEW SECTION */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-6">
          <h2 className="text-2xl font-bold text-center">Service AC Cilangkap</h2>
          <div className="flex justify-center items-center gap-2 my-3">
            <span className="text-yellow-400 text-xl">★★★★★</span>
            <span className="font-bold">4.8 (95.547 review)</span>
          </div>
          <p className="text-center text-gray-600 mb-6">Apa kata mereka tentang Sarana Multi AC?</p>
          <div className="grid md:grid-cols-3 gap-4">
            {testimonials.map((t, i) => (
              <div key={i} className="border rounded-lg p-4 text-sm">
                <p className="mb-3 text-gray-700">{t.text}</p>
                <p className="text-xs text-gray-500">{t.name}</p>
              </div>
            ))}
          </div>
        </div>

        {/* KEUNGGULAN */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-6">
          <div className="space-y-3 text-sm">
            <p>✅ <strong>Garansi 60 Hari*</strong></p>
            <p>✅ <strong>Harga Terstandarisasi</strong></p>
            <p>✅ <strong>Teknisi Terverifikasi Cilangkap</strong></p>
            <p>✅ <strong>Service Gratis Jika Invoice Tidak Sesuai**</strong></p>
            <p className="text-xs text-gray-500 pt-2">* Pembayaran non-tunai | ** Invoice lapangan berbeda</p>
          </div>
        </div>

        {/* FAQ */}
        <div className="bg-white rounded-xl shadow-md mb-6">
          {faqs.map((faq, i) => (
            <div key={i} className="border-b last:border-b-0">
              <button onClick={() => setOpenFAQ(openFAQ === i ? null : i)} className="w-full p-6 text-left font-semibold flex justify-between items-center hover:bg-gray-50">
                {faq.q}
                <span className={`transform transition-transform ${openFAQ === i ? 'rotate-180' : ''}`}>▼</span>
              </button>
              {openFAQ === i && <div className="px-6 pb-6 text-gray-600 text-sm">{faq.a}</div>}
            </div>
          ))}
        </div>

        {/* KALKULATOR */}
        <Kalkulator waNumber={waNumber} />
        
      </div>

      <footer className="bg-gray-800 text-white py-8 mt-8">
        <div className="container mx-auto px-4 text-center">
          <p>© 2026 Sarana Multi AC - Cilangkap, Jakarta Timur</p>
        </div>
      </footer>
    </main>
  )
}
