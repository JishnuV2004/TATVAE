import React from 'react'

export function LoadingSpinner() {
  return (
    <div className="flex flex-col items-center justify-center p-6 space-y-5 select-none">
      {/* Round Logo with Subtle Gold Glow Effect */}
      <div className="relative flex items-center justify-center">
        <div className="absolute inset-0 rounded-full bg-[#d4af37]/20 blur-xl animate-pulse" />
        <img
          src="/FAV%20ICON%20ROUND%20LOGO.png"
          alt="TATVAE Logo"
          className="relative w-20 h-20 sm:w-24 sm:h-24 object-contain rounded-full shadow-2xl border border-[#d4af37]/30 p-1 bg-[#140e0a]"
        />
      </div>

      {/* Elegant 3-Dot Blinking Loading Style (No text) */}
      <div className="flex items-center gap-2 pt-1">
        <span className="w-2.5 h-2.5 bg-[#d4af37] rounded-full animate-bounce [animation-delay:-0.3s] shadow-[0_0_8px_rgba(212,175,55,0.6)]" />
        <span className="w-2.5 h-2.5 bg-[#d4af37] rounded-full animate-bounce [animation-delay:-0.15s] shadow-[0_0_8px_rgba(212,175,55,0.6)]" />
        <span className="w-2.5 h-2.5 bg-[#d4af37] rounded-full animate-bounce shadow-[0_0_8px_rgba(212,175,55,0.6)]" />
      </div>
    </div>
  )
}
