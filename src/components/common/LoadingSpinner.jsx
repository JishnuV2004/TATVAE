import React from 'react'

export function LoadingSpinner() {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#0f0b08] p-6 select-none">
      <div className="flex flex-col items-center justify-center space-y-6">
        {/* Medium Prominent Round Logo with Subtle Gold Ambient Glow */}
        <div className="relative flex items-center justify-center">
          <div className="absolute inset-0 rounded-full bg-[#d4af37]/25 blur-2xl animate-pulse scale-125" />
          <img
            src="/FAV%20ICON%20ROUND%20LOGO.png"
            alt="TATVAE Logo"
            className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-44 md:h-44 object-contain rounded-full shadow-2xl border border-[#d4af37]/35 p-1.5 bg-[#140e0a]"
          />
        </div>

        {/* Elegant 3-Dot Blinking Loading Animation */}
        <div className="flex items-center gap-2.5 pt-2">
          <span className="w-3 h-3 sm:w-3.5 sm:h-3.5 bg-[#d4af37] rounded-full animate-bounce [animation-delay:-0.3s] shadow-[0_0_10px_rgba(212,175,55,0.7)]" />
          <span className="w-3 h-3 sm:w-3.5 sm:h-3.5 bg-[#d4af37] rounded-full animate-bounce [animation-delay:-0.15s] shadow-[0_0_10px_rgba(212,175,55,0.7)]" />
          <span className="w-3 h-3 sm:w-3.5 sm:h-3.5 bg-[#d4af37] rounded-full animate-bounce shadow-[0_0_10px_rgba(212,175,55,0.7)]" />
        </div>
      </div>
    </div>
  )
}
