import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-surface-container-low dark:bg-inverse-surface w-full py-section-padding">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter max-w-container-max mx-auto px-margin-mobile md:px-6">
        <div className="col-span-1 md:col-span-1 flex flex-col gap-4">
          <div className="flex items-center gap-3 grayscale opacity-80">
            <div className="relative h-10 w-10 md:h-12 md:w-12 overflow-hidden flex items-center justify-center">
              <img
                alt="Bimbel Element Icon"
                className="w-full h-full object-cover object-top scale-[1.3]"
                src="/logo.png"
              />
            </div>
            <span className="font-display-lg text-lg md:text-xl font-bold text-on-surface">
              Bimbel Element
            </span>
          </div>
          <p className="font-body-md text-on-surface-variant dark:text-surface-variant">
            Bimbingan belajar terpercaya untuk persiapan Ujian Sekolah dan UTBK.
          </p>
        </div>
        
        <div className="col-span-1 flex flex-col gap-3">
          <h4 className="font-label-bold text-on-surface mb-2">Program Kami</h4>
          <Link href="#pricing" className="font-body-md text-on-surface-variant dark:text-surface-variant hover:text-primary dark:hover:text-primary-fixed-dim transition-colors opacity-80 hover:opacity-100">
            Program Offline (Serang)
          </Link>
          <Link href="#pricing" className="font-body-md text-on-surface-variant dark:text-surface-variant hover:text-primary dark:hover:text-primary-fixed-dim transition-colors opacity-80 hover:opacity-100 flex items-center gap-2">
            Program Online
            <span className="bg-secondary-container text-on-secondary-container text-[10px] px-2 py-0.5 rounded-full font-bold uppercase">Baru</span>
          </Link>
          <Link href="#pricing" className="font-body-md text-on-surface-variant dark:text-surface-variant hover:text-primary dark:hover:text-primary-fixed-dim transition-colors opacity-80 hover:opacity-100">
            Biaya Kursus
          </Link>
        </div>

        <div className="col-span-1 flex flex-col gap-3">
          <h4 className="font-label-bold text-on-surface mb-2">Hubungi Kami</h4>
          <Link href="#" className="font-body-md text-on-surface-variant dark:text-surface-variant hover:text-primary dark:hover:text-primary-fixed-dim transition-colors opacity-80 hover:opacity-100">
            Kontak Kami (WhatsApp)
          </Link>
          <p className="font-body-md text-on-surface-variant dark:text-surface-variant opacity-80 flex items-start gap-2 mt-2">
            <span className="material-symbols-outlined text-[18px] mt-0.5">location_on</span>
            Jl. Pendidikan No. 123, Kota Serang, Banten
          </p>
          <p className="font-body-md text-on-surface-variant dark:text-surface-variant opacity-80 flex items-center gap-2">
            <span className="material-symbols-outlined text-[18px]">schedule</span>
            Senin - Sabtu (09.00 - 20.00)
          </p>
        </div>

        <div className="col-span-1 flex flex-col gap-3">
          <h4 className="font-label-bold text-on-surface mb-2">Legal</h4>
          <Link href="#" className="font-body-md text-on-surface-variant dark:text-surface-variant hover:text-primary dark:hover:text-primary-fixed-dim transition-colors opacity-80 hover:opacity-100">
            Kebijakan Privasi
          </Link>
          <Link href="#" className="font-body-md text-on-surface-variant dark:text-surface-variant hover:text-primary dark:hover:text-primary-fixed-dim transition-colors opacity-80 hover:opacity-100">
            Syarat & Ketentuan
          </Link>
        </div>
      </div>

      <div className="max-w-container-max mx-auto px-margin-mobile md:px-6 mt-12 pt-8 border-t border-surface-variant/50 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="font-body-md text-center md:text-left text-on-surface-variant dark:text-surface-variant opacity-80">
          © {new Date().getFullYear()} Bimbel Element. Semua Hak Dilindungi.
        </p>
        <div className="flex gap-4">
          <a href="#" className="text-primary hover:text-primary-container">
            <span className="material-symbols-outlined">share</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
