import React from 'react'

export function LoadingSpinner({ label = 'Loading poster...' }) {
  return (
    <div className="flex flex-col items-center justify-center p-8 space-y-4">
      <div className="relative w-12 h-12">
        <div className="absolute inset-0 rounded-full border-2 border-[#d4af37]/20"></div>
        <div className="absolute inset-0 rounded-full border-2 border-t-[#d4af37] border-r-[#d4af37] border-b-transparent border-l-transparent animate-spin"></div>
      </div>
      <p className="text-xs uppercase tracking-widest text-[#d4af37]/80 font-medium">{label}</p>
    </div>
  )
}
