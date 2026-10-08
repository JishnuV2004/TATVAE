import React, { useState } from 'react'
import { POSTER_CONFIG } from '../../constants/posterConfig'
import { useDeviceDetect } from '../../hooks/useDeviceDetect'
import { LoadingSpinner } from '../common/LoadingSpinner'
import { PosterSocialHotspots } from './PosterSocialHotspots'

export function PosterContainer() {
  const { isMobile, activePoster } = useDeviceDetect()
  const [loadingMobile, setLoadingMobile] = useState(true)
  const [loadingDesktop, setLoadingDesktop] = useState(true)

  const isCurrentLoading = isMobile ? loadingMobile : loadingDesktop

  return (
    <div className="relative min-h-screen h-full w-full flex items-center justify-center bg-[#0f0b08] overflow-hidden select-none">
      {/* Dynamic Ambient Blur Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center blur-3xl opacity-20 scale-110 pointer-events-none transition-all duration-700"
        style={{ backgroundImage: `url("${activePoster}")` }}
      />
      
      {/* Loading state overlay with round logo and 3-dot blinking animation */}
      {isCurrentLoading && (
        <div className="absolute inset-0 z-20 flex items-center justify-center bg-[#0f0b08]">
          <LoadingSpinner />
        </div>
      )}

      {/* Main Responsive Poster Wrapper */}
      <div className="relative z-10 flex items-center justify-center w-full h-full min-h-screen p-0 sm:p-2">
        
        {/* MOBILE POSTER WITH INTERACTIVE SOCIAL HOTSPOTS (< 768px) */}
        <div className="block md:hidden relative max-h-screen max-w-full h-full w-full flex items-center justify-center">
          <div className="relative inline-block max-h-screen max-w-full">
            <img
              src={POSTER_CONFIG.assets.mobile}
              alt="TATVAE Jewellery - Launching Soon Mobile Poster"
              onLoad={() => setLoadingMobile(false)}
              className={`w-full h-full max-h-screen max-w-full object-contain transition-opacity duration-300 ${
                loadingMobile ? 'opacity-0' : 'opacity-100'
              }`}
            />
            {!loadingMobile && <PosterSocialHotspots isMobile={true} />}
          </div>
        </div>

        {/* DESKTOP POSTER WITH INTERACTIVE SOCIAL HOTSPOTS (>= 768px) */}
        <div className="hidden md:flex relative max-h-screen max-w-full h-full w-full items-center justify-center">
          <div className="relative inline-block max-h-screen max-w-full">
            <img
              src={POSTER_CONFIG.assets.desktop}
              alt="TATVAE Jewellery - Launching Soon Desktop Poster"
              onLoad={() => setLoadingDesktop(false)}
              className={`w-auto h-auto max-h-screen max-w-full object-contain transition-opacity duration-300 ${
                loadingDesktop ? 'opacity-0' : 'opacity-100'
              }`}
            />
            {!loadingDesktop && <PosterSocialHotspots isMobile={false} />}
          </div>
        </div>

      </div>
    </div>
  )
}
