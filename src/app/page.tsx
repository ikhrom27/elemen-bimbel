export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative w-full max-w-container-max mx-auto px-margin-mobile md:px-6 py-12 md:py-section-padding flex flex-col items-center text-center">
        <div className="absolute inset-0 -z-10 pointer-events-none opacity-20">
          <svg className="w-full h-full object-cover text-primary-fixed-dim" viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg">
            <path d="M350,150 C550,50 850,250 800,550 C750,850 450,950 250,750 C50,550 150,250 350,150 Z" fill="currentColor" opacity="0.3"></path>
            <path d="M650,850 C850,750 950,450 800,250 C650,50 350,150 200,350 C50,550 450,950 650,850 Z" fill="currentColor" opacity="0.1" transform="scale(0.8) translate(100, 100)"></path>
          </svg>
        </div>
        
        <span className="inline-block py-1 px-3 mb-6 bg-secondary-fixed text-on-secondary-fixed rounded-full font-label-sm uppercase tracking-wider font-bold">
          Persiapan UTBK & Ujian Sekolah
        </span>
        
        <h1 className="font-display-lg text-headline-lg-mobile md:text-display-lg text-on-surface mb-6 max-w-3xl leading-tight">
          Raih PTN Impianmu dengan Bimbingan Terpercaya
        </h1>
        
        <p className="font-body-lg text-body-md md:text-body-lg text-on-surface-variant mb-10 max-w-2xl">
          Bimbel Element kini hadir di Serang dan <strong>Online!</strong> Persiapan UTBK dan Ujian Sekolah jadi lebih mantap dengan tutor asyik dan modul terarah.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full">
          <button className="w-full sm:w-auto px-8 py-4 bg-primary text-on-primary rounded-xl font-label-bold shadow-[0_10px_30px_rgba(0,101,101,0.2)] hover:shadow-[0_15px_40px_rgba(0,101,101,0.3)] hover:-translate-y-1 transition-all duration-300 text-lg">
            Daftar Sekarang
          </button>
          <button className="w-full sm:w-auto px-8 py-4 bg-surface text-primary border-2 border-primary rounded-xl font-label-bold flex items-center justify-center gap-2 hover:bg-surface-container-low transition-all duration-300 text-lg">
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>forum</span>
            Konsultasi WA
          </button>
        </div>

        <div className="mt-16 w-full max-w-4xl mx-auto rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-surface-container-high relative">
          <img 
            className="w-full h-auto object-cover aspect-video" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuD7hKfuKs1tEeD-jwHziwEkUNsccDfv3BtjfJCzu6FCr1kMXEjRrQFZCsLuXVaVAjQCq08-0vhTkFMWoMwEGLFWgtxKgKm5zzKlEiKgOsAoDACHsSjMIb2irYw6eVHIFLoKItMWwYqGyX6lVTiYsUw3rIKKZxnRjsxJsWe1JS11y96No8V5VWsvSxFRy900g0vabtNDcmWOUSmJRu5-oqLH2KJC0BMsP4pBW_U3blEZa_ZLBqr9ySg9jQ" 
            alt="Group of high school students studying together happily"
          />
          <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-secondary-container rounded-full mix-blend-multiply filter blur-2xl opacity-50"></div>
          <div className="absolute -top-4 -left-4 w-32 h-32 bg-primary-container rounded-full mix-blend-multiply filter blur-2xl opacity-50"></div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-section-padding px-margin-mobile md:px-6 bg-surface-container-low w-full" id="programs">
        <div className="max-w-container-max mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="font-headline-lg text-headline-md md:text-headline-lg text-on-surface mb-4">Kenapa Memilih Bimbel Element?</h2>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl mx-auto">
              Metode belajar efektif, pengajar berpengalaman, dan kini lebih mudah diakses dari mana saja.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
            <div className="bg-surface rounded-2xl p-card-padding soft-lift text-center md:text-left flex flex-col items-center md:items-start">
              <div className="w-14 h-14 bg-offline-bg text-primary rounded-full flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>school</span>
              </div>
              <h3 className="font-headline-md text-headline-md text-on-surface mb-3">Tutor Ahli & Asyik</h3>
              <p className="font-body-md text-body-md text-on-surface-variant text-center md:text-left">
                Belajar jadi nggak ngebosenin dengan metode penyampaian yang relate sama anak SMA, dijamin cepat paham materi sulit.
              </p>
            </div>

            <div className="bg-online-bg rounded-2xl p-card-padding shadow-[0_10px_30px_rgba(0,0,0,0.05)] border-t-4 border-secondary-container relative transform md:-translate-y-4 flex flex-col items-center md:items-start text-center md:text-left">
              <div className="absolute -top-4 right-6 bg-secondary-container text-on-secondary-container px-3 py-1 rounded-full font-label-bold text-xs uppercase shadow-sm flex items-center gap-1">
                <span className="material-symbols-outlined text-[14px]">stars</span> New!
              </div>
              <div className="w-14 h-14 bg-surface text-secondary-container rounded-full flex items-center justify-center mb-6 shadow-sm">
                <span className="material-symbols-outlined text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>devices</span>
              </div>
              <h3 className="font-headline-md text-headline-md text-on-surface mb-3">Kelas Online Batch 1</h3>
              <p className="font-body-md text-body-md text-on-surface-variant text-center md:text-left">
                Kabar gembira! Kini siswa di luar Serang bisa ikut belajar. Fleksibel dari rumah, modul digital lengkap, dan interaktif via Zoom. <strong>Kuota Terbatas!</strong>
              </p>
            </div>

            <div className="bg-surface rounded-2xl p-card-padding soft-lift text-center md:text-left flex flex-col items-center md:items-start">
              <div className="w-14 h-14 bg-offline-bg text-primary rounded-full flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>analytics</span>
              </div>
              <h3 className="font-headline-md text-headline-md text-on-surface mb-3">Tryout Terjadwal</h3>
              <p className="font-body-md text-body-md text-on-surface-variant text-center md:text-left">
                Evaluasi berkala dengan sistem mirip UTBK aslinya untuk melatih mental dan manajemen waktu sebelum hari H.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-section-padding px-margin-mobile md:px-6 w-full max-w-container-max mx-auto" id="pricing">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-headline-lg text-headline-md md:text-headline-lg text-on-surface mb-4">Pilih Paket Belajarmu</h2>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl mx-auto">
            Program intensif untuk maksimalkan potensi kelulusanmu, pilih sesuai gaya belajarmu.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Offline Card */}
          <div className="bg-surface rounded-[24px] shadow-[0_10px_30px_rgba(0,0,0,0.05)] border-t-[4px] border-primary flex flex-col h-full hover:-translate-y-2 transition-transform duration-300">
            <div className="p-8 pb-6 border-b border-surface-variant">
              <div className="flex justify-between items-start mb-4">
                <h3 className="font-headline-md text-headline-md text-on-surface">Paket Offline</h3>
                <span className="bg-offline-bg text-primary px-3 py-1 rounded-full font-label-bold text-xs flex items-center gap-1">
                  <span className="material-symbols-outlined text-[14px]">location_on</span> Serang
                </span>
              </div>
              <p className="font-body-md text-body-md text-on-surface-variant mb-6 md:h-12">
                Belajar tatap muka, fasilitas kelas nyaman, interaksi langsung dengan tutor.
              </p>
              <div className="flex items-baseline gap-2">
                <span className="font-body-md text-on-surface-variant">Rp</span>
                <span className="font-display-lg text-headline-lg-mobile md:text-[40px] font-bold text-on-surface">1.500k</span>
                <span className="font-body-md text-on-surface-variant">/ semester</span>
              </div>
            </div>
            <div className="p-8 flex-grow flex flex-col justify-between">
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-success-green" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                  <span className="font-body-md text-on-surface">Modul cetak eksklusif</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-success-green" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                  <span className="font-body-md text-on-surface">Tryout offline rutin</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-success-green" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                  <span className="font-body-md text-on-surface">Konsultasi PR tatap muka</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-success-green" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                  <span className="font-body-md text-on-surface">Ruang kelas ber-AC & nyaman</span>
                </li>
              </ul>
              <button className="w-full py-4 bg-primary text-on-primary rounded-xl font-label-bold hover:bg-primary-container transition-colors duration-200">
                Pilih Offline
              </button>
            </div>
          </div>

          {/* Online Card */}
          <div className="bg-surface rounded-[24px] shadow-[0_15px_40px_rgba(0,0,0,0.08)] border-t-[4px] border-secondary-container flex flex-col h-full hover:-translate-y-2 transition-transform duration-300 relative">
            <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-max bg-secondary-container text-on-secondary-container px-4 py-1.5 rounded-full font-label-bold text-sm uppercase shadow-md flex items-center gap-1 z-10 animate-pulse md:animate-none">
              <span className="material-symbols-outlined text-[16px]">local_fire_department</span> Harga Promo Perdana!
            </div>
            <div className="p-8 pb-6 border-b border-surface-variant bg-online-bg/30 rounded-t-[20px]">
              <div className="flex justify-between items-start mb-4 mt-2">
                <h3 className="font-headline-md text-headline-md text-on-surface">Paket Online</h3>
                <span className="bg-secondary-fixed text-on-secondary-fixed px-3 py-1 rounded-full font-label-bold text-xs flex items-center gap-1">
                  <span className="material-symbols-outlined text-[14px]">public</span> Seluruh ID
                </span>
              </div>
              <p className="font-body-md text-body-md text-on-surface-variant mb-6 md:h-12">
                Belajar fleksibel dari rumah via Zoom. Cocok untuk siswa di luar Serang.
              </p>
              <div className="flex flex-col">
                <span className="line-through text-on-surface-variant/60 font-body-md mb-1">Rp 1.000k</span>
                <div className="flex items-baseline gap-2">
                  <span className="font-body-md text-secondary-container font-bold">Rp</span>
                  <span className="font-display-lg text-headline-lg-mobile md:text-[40px] font-bold text-secondary-container">750k</span>
                  <span className="font-body-md text-on-surface-variant">/ semester</span>
                </div>
              </div>
            </div>
            <div className="p-8 flex-grow flex flex-col justify-between">
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-secondary-container" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                  <span className="font-body-md text-on-surface">Modul digital lengkap</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-secondary-container" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                  <span className="font-body-md text-on-surface">Rekaman kelas (bisa diulang)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-secondary-container" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                  <span className="font-body-md text-on-surface">Tryout online nasional</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-secondary-container" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                  <span className="font-body-md text-on-surface">Grup diskusi interaktif (WA/Discord)</span>
                </li>
              </ul>
              <button className="w-full py-4 bg-secondary-container text-on-secondary-container rounded-xl font-label-bold hover:bg-secondary transition-colors duration-200">
                Daftar Batch 1 Sekarang
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-section-padding px-margin-mobile md:px-6 w-full bg-offline-bg/50" id="testimonials">
        <div className="max-w-container-max mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="font-headline-lg text-headline-md md:text-headline-lg text-on-surface mb-4">Kata Mereka yang Sudah Lulus</h2>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl mx-auto">
              Ribuan siswa telah membuktikan metode Bimbel Element. Kini giliranmu!
            </p>
          </div>
          
          {/* Scrollable on mobile, grid on desktop */}
          <div className="flex flex-col md:grid md:grid-cols-3 gap-gutter overflow-x-auto md:overflow-visible pb-4 md:pb-0 snap-x snap-mandatory">
            
            <div className="bg-surface rounded-2xl p-6 shadow-sm flex flex-col relative min-w-[280px] snap-center soft-lift">
              <span className="material-symbols-outlined text-primary-fixed-dim text-5xl absolute top-4 right-4 opacity-20" style={{ fontVariationSettings: "'FILL' 1" }}>format_quote</span>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-surface-container-high overflow-hidden">
                  <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBO6d8zOH6Bd9sT-9MHXNN0t4QU_zlfsqvcza8BMPkvjbdWPs3CFOydSjFDHtERlAJR3iHltra8FOAe466U3pzkZaxGkvSGtPKLLbcNvRJjMRZmCwfdpmYSPFx-KjsW2IKxKQUs1IbA_EQ0AA5LLAAuzqhmGNQTGPsr2ud0vnZy3KIZ4zJLpdUWHAaw-C756Cy0h7baODE6bsAZeUqkFGNUJUJNxjFaayXP1qVhInXHSQIkwYqBDDMYGA" alt="Nisa S." />
                </div>
                <div>
                  <h4 className="font-label-bold text-on-surface">Nisa S.</h4>
                  <span className="text-xs bg-success-green/10 text-success-green px-2 py-0.5 rounded font-medium mt-1 inline-block">Lulus ITB 2023</span>
                </div>
              </div>
              <p className="font-body-md text-body-md text-on-surface-variant italic">
                &quot;Cara ngajar Kakak-kakaknya asyik banget, nggak kaku sama sekali. Materi Fisika yang tadinya bikin pusing jadi gampang masuk. Alhamdulillah keterima di pilihan pertama!&quot;
              </p>
            </div>

            <div className="bg-surface rounded-2xl p-6 shadow-sm flex flex-col relative min-w-[280px] snap-center soft-lift">
              <span className="material-symbols-outlined text-primary-fixed-dim text-5xl absolute top-4 right-4 opacity-20" style={{ fontVariationSettings: "'FILL' 1" }}>format_quote</span>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-surface-container-high overflow-hidden">
                  <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDkHN-TCFomiIXwU_QRdl4kK-sQYgYh1EodWob1ERT2MT2zpeWRBTy1CY4B7dOWuD6by0X2LuxvHq46DNLai68eLEuy8V1yv-l1WzB-6GLwqdc52w90Vw7AugaQLXCVyC46PIsfxlD_kWPwm_Eq3-g9sdu4WaC0xHTIhAiRuYK0pM9c_AshG-CrNrMvWTL77DlVsViQTY9KCYhYZcw_qI-8M_YLS5X2JfDkbBnJZzfuO26ZkBc32xzK1Q" alt="Rizky P." />
                </div>
                <div>
                  <h4 className="font-label-bold text-on-surface">Rizky P.</h4>
                  <span className="text-xs bg-primary-container/10 text-primary-container px-2 py-0.5 rounded font-medium mt-1 inline-block">Nilai Rapor Naik Drastis</span>
                </div>
              </div>
              <p className="font-body-md text-body-md text-on-surface-variant italic">
                &quot;Semenjak les offline di Element, grafik nilai rapor sekolahku naik terus. Latihannya ngena banget ke soal-soal ujian. Nggak sabar buat persiapan SNBT!&quot;
              </p>
            </div>

            <div className="bg-surface rounded-2xl p-6 shadow-sm flex flex-col relative min-w-[280px] snap-center soft-lift">
              <span className="material-symbols-outlined text-primary-fixed-dim text-5xl absolute top-4 right-4 opacity-20" style={{ fontVariationSettings: "'FILL' 1" }}>format_quote</span>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-surface-container-high overflow-hidden">
                  <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCctp4swdncGTeu-w7Dbe9mO0j7yNVXtm7ujdj0VBCFLXoYEJ1nhBbk7xdqBnD2Q_KHm9B_WbAiWPWWvTjwHXd6PfM9LavR-VtWMA5LVGn9ez0K6Nl1quRWsWRkI3SqkJvIgiGHh1HXfYEd5JB8_3dcdBH5HJx_D0IEve9LfdZV4VZ_ilRbu_ST_eFuTl09amQzi7E43a4mtsi8K1IDehvhVf5vEI9wIBN1GO-Kf6hwW0mg8NmJ-FsRaw" alt="Aulia M." />
                </div>
                <div>
                  <h4 className="font-label-bold text-on-surface">Aulia M.</h4>
                  <span className="text-xs bg-secondary-container/10 text-secondary-container px-2 py-0.5 rounded font-medium mt-1 inline-block">Lulus Unpad 2023</span>
                </div>
              </div>
              <p className="font-body-md text-body-md text-on-surface-variant italic">
                &quot;Tryout-nya ngebantu banget buat ngukur kemampuan. Soal-soalnya update sama model UTBK terbaru. Fasilitasnya juga nyaman buat belajar lama-lama.&quot;
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-section-padding px-margin-mobile md:px-6 w-full bg-surface" id="location">
        <div className="max-w-container-max mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="font-headline-lg text-headline-md md:text-headline-lg text-on-surface mb-4">Lokasi Kami</h2>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl mx-auto">
              Kunjungi cabang offline kami di Serang untuk konsultasi langsung dan merasakan suasana belajar yang nyaman.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter items-center border border-surface-container-high md:border-none rounded-[24px] overflow-hidden md:rounded-none md:overflow-visible soft-lift md:shadow-none bg-surface-variant md:bg-transparent">
            
            <div className="w-full h-64 md:h-[400px] md:rounded-[24px] overflow-hidden md:shadow-lg md:border border-surface-container-high bg-surface-container-low">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3967.035243214567!2d106.1548!3d-6.1149!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e41891643b26791%3A0x401576d14fed900!2sSerang%2C%20Serang%20City%2C%20Banten!5e0!3m2!1sen!2sid!4v1710000000000!5m2!1sen!2sid" 
                style={{ border: 0, width: '100%', height: '100%' }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            
            <div className="flex flex-col gap-6 p-6 md:p-2 bg-surface-variant md:bg-transparent">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-offline-bg text-primary rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="material-symbols-outlined">location_on</span>
                  </div>
                  <div>
                    <h4 className="font-label-bold text-on-surface mb-1">Alamat Lengkap</h4>
                    <p className="font-body-md text-on-surface-variant">Jl. Pendidikan No. 123, Kota Serang, Banten 42111</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-online-bg text-secondary-container rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="material-symbols-outlined">schedule</span>
                  </div>
                  <div>
                    <h4 className="font-label-bold text-on-surface mb-1">Jam Operasional</h4>
                    <p className="font-body-md text-on-surface-variant">Senin - Sabtu: 09.00 - 20.00 WIB</p>
                    <p className="font-body-md text-on-surface-variant">Minggu: Tutup</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary-container/10 text-primary rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="material-symbols-outlined">call</span>
                  </div>
                  <div>
                    <h4 className="font-label-bold text-on-surface mb-1">Hubungi Cabang</h4>
                    <p className="font-body-md text-on-surface-variant">(0254) 123-4567</p>
                  </div>
                </div>
              </div>
              <div className="mt-4">
                <a 
                  href="https://maps.google.com" 
                  target="_blank"
                  rel="noreferrer" 
                  className="w-full md:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-on-primary rounded-xl font-label-bold shadow-md hover:bg-primary-container transition-all duration-300"
                >
                  <span className="material-symbols-outlined">directions</span>
                  Petunjuk Arah
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-section-padding px-margin-mobile md:px-6 w-full max-w-container-max mx-auto text-center">
        <div className="bg-primary-container rounded-[32px] p-10 md:p-16 relative overflow-hidden shadow-lg">
          <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-10">
            <svg className="w-full h-full object-cover text-white" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              <circle cx="20" cy="20" fill="currentColor" opacity="0.5" r="40"></circle>
              <circle cx="80" cy="80" fill="currentColor" opacity="0.3" r="30"></circle>
            </svg>
          </div>
          <div className="relative z-10">
            <h2 className="font-headline-lg text-headline-md md:text-headline-lg text-on-primary-container mb-6 max-w-3xl mx-auto">
              Waktu Berjalan Cepat, Jangan Tunda Persiapanmu!
            </h2>
            <p className="font-body-lg text-body-md md:text-body-lg text-on-primary-container/90 mb-10 max-w-2xl mx-auto">
              Amankan kursimu sekarang. Kuota Kelas Online Batch 1 sangat terbatas. Mari raih PTN impian bersama Bimbel Element.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="w-full sm:w-auto px-8 py-4 bg-on-primary-container text-primary-container rounded-xl font-label-bold shadow-md hover:bg-surface transition-colors duration-200 text-lg">
                Isi Formulir Pendaftaran
              </button>
              <button className="w-full sm:w-auto px-8 py-4 bg-transparent text-on-primary-container border-2 border-on-primary-container rounded-xl font-label-bold flex items-center justify-center gap-2 hover:bg-on-primary-container/10 transition-colors duration-200 text-lg">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>forum</span>
                Masih Ragu? Konsultasi WA
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
