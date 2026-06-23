'use client'
import { useState } from 'react'
import Link from 'next/link'

export default function Kalkulator({ waNumber }) {
  const MINIMUM_TARIF = 85000
  const [selected, setSelected] = useState([])

  const layananList = [
    { id: 'cuci05', nama: 'Cuci AC 0.5 - 1 PK', harga: 85000, kategori: 'Cuci AC' },
    { id: 'cuci15', nama: 'Cuci AC 1.5 - 2 PK', harga: 85000, kategori: 'Cuci AC' },
    { id: 'cuciinv', nama: 'Cuci AC Inverter 0.5 - 2 PK', harga: 130000, kategori: 'Cuci AC' },
    { id: 'overhaul', nama: 'Cuci Besar (Overhaul)', harga: 700000, kategori: 'Cuci AC' },
    { id: 'tambahR22_05', nama: 'Tambah Freon R22 0.5 - 1 PK', harga: 175000, kategori: 'Freon' },
    { id: 'tambahR22_15', nama: 'Tambah Freon R22 1.5 - 2 PK', harga: 225000, kategori: 'Freon' },
    { id: 'tambahR32_05', nama: 'Tambah Freon R32/R410 0.5 - 1 PK', harga: 225000, kategori: 'Freon' },
    { id: 'tambahR32_15', nama: 'Tambah Freon R32/R410 1.5 - 2 PK', harga: 275000, kategori: 'Freon' },
    { id: 'isiR22_05', nama: 'Isi Freon R22 0.5 - 1 PK', harga: 275000, kategori: 'Freon' },
    { id: 'isiR22_15', nama: 'Isi Freon R22 1.5 - 2 PK', harga: 325000, kategori: 'Freon' },
    { id: 'isiR32_05', nama: 'Isi Freon R32/R410 0.5 - 1 PK', harga: 350000, kategori: 'Freon' },
    { id: 'isiR32_15', nama: 'Isi Freon R32/R410 1.5 - 2 PK', harga: 450000, kategori: 'Freon' },
    { id: 'bongkar', nama: 'Bongkar AC', harga: 175000, kategori: 'Bongkar Pasang' },
    { id: 'pasang05', nama: 'Pasang AC 0.5 - 1 PK', harga: 300000, kategori: 'Bongkar Pasang' },
    { id: 'pasang15', nama: 'Pasang AC 1.5 - 2 PK', harga: 375000, kategori: 'Bongkar Pasang' },
    { id: 'bongkarpasang05', nama: 'Bongkar Pasang 0.5 - 1 PK', harga: 450000, kategori: 'Bongkar Pasang' },
    { id: 'bongkarpasang15', nama: 'Bongkar Pasang 1.5 - 2 PK', harga: 500000, kategori: 'Bongkar Pasang' },
    { id: 'bobok', nama: 'Bobok/m', harga: 50000, kategori: 'Tambahan' },
    { id: 'las', nama: 'Las Sambungan Pipa Freon/titik', harga: 125000, kategori: 'Tambahan' },
    { id: 'lasbocor', nama: 'Las Perbaikan Kebocoran + Isi Freon', harga: 550000, kategori: 'Tambahan' },
    { id: 'cek', nama: 'Pengecekan AC**', harga: 75000, kategori: 'Service' },
    { id: 'kapasitor05', nama: 'Ganti Kapasitor 0.5 - 1 PK', harga: 275000, kategori: 'Service' },
    { id: 'kapasitor15', nama: 'Ganti Kapasitor 1.5 - 2 PK', harga: 330000, kategori: 'Service' },
    { id: 'vacuumflush', nama: 'Vacuum & Flushing AC', harga: 350000, kategori: 'Service' },
    { id: 'flushevap', nama: 'Flushing Evaporator', harga: 200000, kategori: 'Service' },
    { id: 'vacuum', nama: 'Vacuum', harga: 150000, kategori: 'Service' },
  ]

  const toggleLayanan = (id) => {
    setSelected(prev => prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id])
  }

  const totalHargaRaw = selected.reduce((total, id) => {
    const item = layananList.find(l => l.id === id)
    return total + (item ? item.harga : 0)
  }, 0)

  const totalHarga = totalHargaRaw > 0 && totalHargaRaw < MINIMUM_TARIF ? MINIMUM_TARIF : totalHargaRaw
  const selectedNames = selected.map(id => layananList.find(l => l.id === id)?.nama).join('%0A- ')
  const waText = `Halo Sarana Multi AC Cilangkap,%0A%0ASaya mau pesan:%0A- ${selectedNames || 'Belum pilih layanan'}%0A%0AEstimasi: Rp ${totalHarga.toLocaleString('id-ID')}${totalHargaRaw < MINIMUM_TARIF && totalHargaRaw > 0 ? ' (Tarif Minimum)' : ''}%0A%0AMohon jadwalnya.`

  const groupedLayanan = layananList.reduce((acc, item) => {
    acc[item.kategori] = acc[item.kategori] || []
    acc[item.kategori].push(item)
    return acc
  }, {})

  return (
    <div className="bg-white rounded-xl shadow-md">
      <div className="p-6 border-b">
        <h3 className="text-xl font-bold">Pilih Layanan AC Anda</h3>
        <p className="text-xs text-red-600 mt-2 font-bold">TARIF MINIMUM SERVICE AC Rp{MINIMUM_TARIF.toLocaleString('id-ID')}*</p>
        <p className="text-xs text-gray-500">*Jika total kurang dari Rp85.000, maka dikenakan biaya minimum</p>
        <p className="text-xs text-blue-600 mt-2 bg-blue-50 p-2 rounded">**Pengecekan AC dikenakan biaya jika tidak lanjut service</p>
      </div>
      
      {Object.entries(groupedLayanan).map(([kategori, items]) => (
        <div key={kategori}>
          <div className="bg-gray-100 px-6 py-3 font-bold text-blue-700">{kategori}</div>
          {items.map((item) => (
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
        </div>
      ))}

      <div className="p-6 bg-gray-50 sticky bottom-0">
        <div className="flex justify-between items-center mb-2">
          <div>
            <p className="text-sm text-gray-600">Estimasi Harga</p>
            <p className="text-3xl font-bold text-red-600">Rp {totalHarga.toLocaleString('id-ID')}</p>
            {totalHargaRaw > 0 && totalHargaRaw < MINIMUM_TARIF && <p className="text-xs text-red-500">*Dikenakan Tarif Minimum Rp{MINIMUM_TARIF.toLocaleString('id-ID')}</p>}
          </div>
          <Link 
            href={selected.length > 0 ? `https://wa.me/${waNumber}?text=${waText}` : '#'}
            className={`px-10 py-4 rounded-lg font-bold text-white text-lg ${selected.length > 0 ? 'bg-red-600 hover:bg-red-700' : 'bg-gray-400 cursor-not-allowed'}`}
          >
            Selanjutnya
          </Link>
        </div>
        {selected.length === 0 && <p className="text-xs text-red-500">*Pilih minimal 1 layanan untuk melanjutkan</p>}
      </div>
    </div>
  )
}
