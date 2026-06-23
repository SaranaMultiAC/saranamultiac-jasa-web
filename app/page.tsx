const layanan = [
  {nama: 'Cuci AC', harga: '85.000', desc: 'Cuci indoor + outdoor, cek freon gratis'},
  {nama: 'Isi Freon R32', harga: '150.000', desc: 'Freon R32/R410 original bergaransi'},
  {nama: 'Bongkar Pasang AC', harga: '350.000', desc: 'Pindah unit 0.5-2 PK rapih'},
  {nama: 'Service AC Bocor', harga: '200.000', desc: 'Perbaikan kebocoran air + netes'}
]

export default function Home() {
  const WA = '6281373210666'
  return (
    <div style={{fontFamily:'Arial, sans-serif'}}>
      <header style={{background:'#0056b3',color:'white',padding:'20px',textAlign:'center'}}>
        <h1 style={{margin:0,fontSize:'32px'}}>Sarana Multi AC</h1>
        <p style={{margin:'8px 0',fontSize:'18px'}}>Jasa Service AC Jakarta Bergaransi 30 Hari</p>
        <a href={`https://wa.me/${WA}`} style={{background:'#25d366',color:'white',padding:'15px 30px',borderRadius:'8px',textDecoration:'none',fontWeight:'bold',display:'inline-block',marginTop:'10px'}}>Chat WA: 0813-7321-0666</a>
      </header>

      <main style={{padding:'20px',maxWidth:'900px',margin:'0 auto'}}>
        <img src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=900" style={{width:'100%',borderRadius:'12px',margin:'20px 0'}} alt="Teknisi Service AC"/>
        
        <h2 style={{textAlign:'center',fontSize:'28px'}}>Layanan Kami</h2>
        <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(250px,1fr))',gap:'20px'}}>
          {layanan.map(item => (
            <div key={item.nama} style={{border:'1px solid #ddd',borderRadius:'12px',padding:'20px'}}>
              <h3 style={{margin:'0 0 10px 0'}}>{item.nama}</h3>
              <p style={{color:'#666',fontSize:'14px',margin:'0 0 15px 0'}}>{item.desc}</p>
              <p style={{fontSize:'24px',fontWeight:'bold',color:'#0056b3',margin:'0 0 15px 0'}}>Rp{item.harga}</p>
              <a href={`https://wa.me/${WA}?text=Halo, saya mau ${item.nama}`} style={{background:'#0056b3',color:'white',padding:'12px',borderRadius:'8px',textDecoration:'none',display:'block',textAlign:'center',fontWeight:'bold'}}>Pesan Sekarang</a>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}
