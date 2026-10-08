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
    <div className="relative h-screen w-screen m-0 p-0 flex items-center justify-center bg-[#0f0b08] overflow-hidden select-none">
      {/* Dynamic Ambient Blur Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center blur-3xl opacity-20 scale-110 pointer-events-none transition-all duration-700"
        style={{ backgroundImage: `url("${activePoster}")` }}
      />
      
      {/* Loading state indicator */}
      {isCurrentLoading && (
        <div className="absolute inset-0 z-20 flex items-center justify-center bg-[#0f0b08]">
          <LoadingSpinner label="Loading Tatvae Poster..." />
        </div>
      )}

      {/* Main Full-Size Poster Wrapper with Zero Margins */}
      <div className="relative z-10 w-screen h-screen m-0 p-0 flex items-center justify-center">
        
        {/* MOBILE POSTER WITH INTERACTIVE SOCIAL HOTSPOTS (< 768px) */}
        <div className="block md:hidden relative w-full h-full m-0 p-0 flex items-center justify-center">
          <div className="relative w-full h-full m-0 p-0 flex items-center justify-center">
            <img
              src={POSTER_CONFIG.assets.mobile}
              alt="TATVAE Jewellery - Launching Soon Mobile Poster"
              onLoad={() => setLoadingMobile(false)}
              className={`w-full h-full object-cover transition-opacity duration-300 ${
                loadingMobile ? 'opacity-0' : 'opacity-100'
              }`}
            />
            {!loadingMobile && <PosterSocialHotspots isMobile={true} />}
          </div>
        </div>

        {/* DESKTOP POSTER WITH INTERACTIVE SOCIAL HOTSPOTS (>= 768px) */}
        <div className="hidden md:flex relative w-full h-full m-0 p-0 items-center justify-center">
          <div className="relative w-full h-full m-0 p-0 flex items-center justify-center">
            <img
              src={POSTER_CONFIG.assets.desktop}
              alt="TATVAE Jewellery - Launching Soon Desktop Poster"
              onLoad={() => setLoadingDesktop(false)}
              className={`w-full h-full object-cover transition-opacity duration-300 ${
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
