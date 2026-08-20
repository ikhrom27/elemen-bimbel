"use client";

import { useState } from "react";
import Link from "next/link";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-surface/90 dark:bg-surface-dim/90 backdrop-blur-md fixed top-0 w-full z-50 shadow-sm transition-all duration-300">
      <div className="flex justify-between items-center px-6 py-4 max-w-container-max mx-auto">
        <div className="flex items-center gap-3">
          <Link href="/" className="flex items-center gap-0.5 group">
            {/* Memotong teks bawaan dari logo dengan trik zoom (scale) dan overflow hidden */}
            <div className="relative h-10 w-10 md:h-12 md:w-12 overflow-hidden flex items-center justify-center">
              <img
                src="/logo.png"
                alt="Bimbel Element Icon"
                className="w-full h-full object-cover object-top scale-[1.4]"
              />
            </div>
            <div className="flex flex-col justify-center -ml-1.5">
              <span className="font-display-lg text-lg md:text-xl font-bold text-primary leading-none tracking-tight">
                Bimbel Element
              </span>
            </div>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-primary" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle Menu"
        >
          <span className="material-symbols-outlined text-2xl">{isMenuOpen ? "close" : "menu"}</span>
        </button>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="#programs" className="font-body-md text-on-surface-variant hover:text-primary-container transition-colors duration-200">
            Programs
          </Link>
          <Link href="#pricing" className="font-body-md text-on-surface-variant hover:text-primary-container transition-colors duration-200">
            Pricing
          </Link>
          <Link href="#testimonials" className="font-body-md text-on-surface-variant hover:text-primary-container transition-colors duration-200">
            Testimonials
          </Link>
        </div>
        
        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-4">
          <button className="flex items-center gap-2 px-4 py-2 bg-surface text-primary border border-primary rounded-full font-label-bold hover:bg-primary-container hover:text-on-primary-container transition-colors duration-200">
            <span className="material-symbols-outlined text-lg">forum</span>
            WA Konsultasi
          </button>
          <button className="px-6 py-2 bg-primary text-on-primary rounded-full font-label-bold shadow-md hover:bg-primary-container transition-colors duration-200 transform hover:scale-95 ease-in-out">
            Daftar Sekarang
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-surface shadow-md py-4 px-6 flex flex-col gap-4 border-t border-surface-variant md:hidden">
          <Link href="#programs" onClick={() => setIsMenuOpen(false)} className="text-on-surface-variant py-2 border-b border-surface-variant font-body-md">
            Programs
          </Link>
          <Link href="#pricing" onClick={() => setIsMenuOpen(false)} className="text-on-surface-variant py-2 border-b border-surface-variant font-body-md">
            Pricing
          </Link>
          <Link href="#testimonials" onClick={() => setIsMenuOpen(false)} className="text-on-surface-variant py-2 font-body-md">
            Testimonials
          </Link>
          <div className="flex flex-col gap-3 mt-2">
            <button className="w-full font-label-bold bg-primary text-on-primary px-6 py-3 rounded-full flex justify-center items-center">
              Daftar Sekarang
            </button>
            <button className="w-full font-label-bold text-primary border border-primary px-6 py-3 rounded-full flex justify-center items-center gap-2">
              <span className="material-symbols-outlined text-sm">chat</span>
              WA Konsultasi
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
