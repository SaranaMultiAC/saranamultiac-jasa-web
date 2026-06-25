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
    <main className="bg-gradient-to-br from-gray-50 to-blue-50 min-h-screen">
      {/* HEADER UPGRADE */}
      <header className="bg-blue-700 text-white sticky top-0 z-50 shadow-lg">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div>
            <h1 className="text-xl md:text-2xl font-bold">Sarana Multi AC</h1>
            <p className="text-xs text-blue-200">Spesialis Service AC Cilangkap</p>
          </div>
          <Link href={`https://wa.me/${waNumber}?text=Halo%20Sarana%20Multi%20AC,%20saya%20mau%20service%20AC`} className="bg-green-500 hover:bg-green-600 px-4 md:px-6 py-2 rounded-lg font-bold text-sm md:text-base shadow-md transition-all">
            💬 WhatsApp
          </Link>
        </div>
      </header>

      {/* CONTAINER GW LEBARIN JADI max-w-5xl */}
      <div className="container mx-auto px-4 py-6 md:py-8 max-w-5xl">
        
        {/* BANNER PROMO - KASIH EFEK GLOW */}
        <div className="mb-8">
          <Link href={`https://wa.me/${waNumber}?text=Halo,%20saya%20mau%20promo%20Cuci%20AC%2085rb`}>
            <img 
              src="/banner-cuci-ac.jpg" 
              alt="Promo Cuci AC Sarana Multi AC" 
              className="w-full max-w-4xl mx-auto rounded-2xl shadow-2xl hover:shadow-blue-300/50 hover:scale-[1.02] transition-all duration-300"
            />
          </Link>
        </div>

        {/* REVIEW SECTION - KASIH BORDER BIAR MEWAH */}
        <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 mb-6 border border-gray-100">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800">Service AC Cilangkap</h2>
          <div className="flex justify-center items-center gap-2 my-4">
            <span className="text-yellow-400 text-2xl">★★★★★</span>
            <span className="font-bold text-lg">4.8 <span className="text-gray-500 font-normal">(95.547 review)</span></span>
          </div>
          <p className="text-center text-gray-600 mb-6">Apa kata mereka tentang Sarana Multi AC?</p>
          <div className="grid md:grid-cols-3 gap-4">
            {testimonials.map((t, i) => (
              <div key={i} className="border border-gray-200 rounded-xl p-4 text-sm hover:shadow-md transition-shadow bg-gray-50">
                <p className="mb-3 text-gray-700">{t.text}</p>
                <p className="text-xs text-blue-600 font-semibold">{t.name}</p>
              </div>
            ))}
          </div>
        </div>

        {/* KEUNGGULAN - KASIH ICON BIAR CAKEP */}
        <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 mb-6 border border-gray-100">
          <h3 className="text-xl font-bold mb-4 text-center text-gray-800">Kenapa Pilih Kami?</h3>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div className="flex items-start gap-3">
              <span className="text-2xl">🛡️</span>
              <div><strong>Garansi 60 Hari*</strong><br/><span className="text-gray-600 text-xs">Pembayaran non-tunai</span></div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">💰</span>
              <div><strong>Harga Terstandarisasi</strong><br/><span className="text-gray-600 text-xs">Tanpa biaya tersembunyi</span></div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">👨‍🔧</span>
              <div><strong>Teknisi Terverifikasi</strong><br/><span className="text-gray-600 text-xs">Khusus area Cilangkap</span></div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">📋</span>
              <div><strong>Gratis Jika Invoice Beda**</strong><br/><span className="text-gray-600 text-xs">Harga lapangan berbeda</span></div>
            </div>
          </div>
        </div>

        {/* FAQ - UDAH CAKEP */}
        <div className="bg-white rounded-2xl shadow-lg mb-6 border border-gray-100 overflow-hidden">
          {faqs.map((faq, i) => (
            <div key={i} className="border-b last:border-b-0">
              <button onClick={() => setOpenFAQ(openFAQ === i ? null : i)} className="w-full p-5 md:p-6 text-left font-semibold flex justify-between items-center hover:bg-blue-50 transition-colors">
                {faq.q}
                <span className={`transform transition-transform text-blue-600 ${openFAQ === i ? 'rotate-180' : ''}`}>▼</span>
              </button>
              {openFAQ === i && <div className="px-6 pb-6 text-gray-600 text-sm bg-blue-50/50">{faq.a}</div>}
            </div>
          ))}
        </div>

        {/* KALKULATOR */}
        <Kalkulator waNumber={waNumber} />
        
      </div>

      {/* TOMBOL WA NGAMBANG - PALING PENTING BUAT KONVERSI */}
      <Link 
        href={`https://wa.me/${waNumber}?text=Halo%20Sarana%20Multi%20AC,%20saya%20mau%20konsultasi%20service%20AC`}
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl z-50 animate-bounce hover:animate-none transition-all"
      >
        <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
        </svg>
      </Link>

      <footer className="bg-gray-900 text-white py-8 mt-8">
        <div className="container mx-auto px-4 text-center text-sm">
          <p className="font-bold mb-2">Sarana Multi AC</p>
          <p>© 2026 Cilangkap, Jakarta Timur | WA: 0813-732-1066</p>
        </div>
      </footer>
    </main>
  )
}
