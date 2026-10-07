import React from 'react'
import { POSTER_CONFIG } from '../../constants/posterConfig'
import { InstagramIcon, YoutubeIcon, FacebookIcon, GlobeIcon, MailIcon } from '../common/Icons'

export function PosterSocialHotspots({ isMobile }) {
  const { socialLinks } = POSTER_CONFIG

  const items = [
    {
      id: 'instagram',
      name: 'Instagram',
      handle: 'tatvaeofficial',
      url: socialLinks.instagram,
      icon: InstagramIcon,
    },
    {
      id: 'youtube',
      name: 'YouTube',
      handle: 'tatvaeofficial',
      url: socialLinks.youtube,
      icon: YoutubeIcon,
    },
    {
      id: 'facebook',
      name: 'Facebook',
      handle: 'tatvae',
      url: socialLinks.facebook,
      icon: FacebookIcon,
    },
    {
      id: 'website',
      name: 'Website',
      handle: 'www.tatvae.com',
      url: socialLinks.website,
      icon: GlobeIcon,
    },
    {
      id: 'email',
      name: 'Email',
      handle: 'hello@tatvae.com',
      url: socialLinks.email,
      icon: MailIcon,
    },
  ]

  return (
    <div 
      className={`absolute z-30 left-1/2 -translate-x-1/2 flex items-center justify-center pointer-events-auto ${
        isMobile 
          ? 'bottom-[5.8%] sm:bottom-[6.0%] w-[98%]' 
          : 'bottom-[6.3%] md:bottom-[6.4%] lg:bottom-[6.5%] xl:bottom-[6.6%] w-[92%] lg:w-[84%]'
      }`}
      style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
    >
      <div className="flex items-center justify-center gap-1 sm:gap-2 md:gap-2.5 lg:gap-4 xl:gap-5 text-[#f5eada] text-[10px] sm:text-xs md:text-xs lg:text-sm xl:text-base tracking-tight sm:tracking-normal font-medium drop-shadow-md">
        {items.map((item, index) => {
          const Icon = item.icon
          return (
            <React.Fragment key={item.id}>
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                title={`${item.name}: ${item.handle}`}
                className="flex items-center gap-0.5 sm:gap-1 md:gap-1.5 hover:text-[#ffffff] hover:scale-105 transition-all duration-200 cursor-pointer group py-0.5 px-0.5 sm:px-1 rounded hover:bg-white/10"
              >
                <Icon className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-3.5 md:h-3.5 lg:w-4 lg:h-4 xl:w-4.5 xl:h-4.5 opacity-95 group-hover:opacity-100 shrink-0" />
                <span className="whitespace-nowrap font-medium tracking-tight sm:tracking-normal drop-shadow-sm">{item.handle}</span>
              </a>

              {/* Vertical divider line between items */}
              {index < items.length - 1 && (
                <span className="w-[1px] h-3 sm:h-3.5 md:h-3.5 lg:h-4 xl:h-4.5 bg-white/45 mx-0.5 sm:mx-1 md:mx-1 shrink-0" aria-hidden="true" />
              )}
            </React.Fragment>
          )
        })}
      </div>
    </div>
  )
}
