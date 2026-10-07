export const POSTER_CONFIG = {
  brandName: 'TATVAE',
  tagline: 'The Essence, For You',
  subHeading: 'Jewellery for Real Life Beautiful People',
  assets: {
    mobile: '/LAUNCH%20MOBILE.png',
    desktop: '/LAUNCH%20DESKTOP.png',
  },
  socialLinks: {
    instagram: import.meta.env.VITE_INSTAGRAM_URL || '#',
    youtube: import.meta.env.VITE_YOUTUBE_URL || '#',
    facebook: import.meta.env.VITE_FACEBOOK_URL || '#',
    website: import.meta.env.VITE_WEBSITE_URL || '#',
    email: import.meta.env.VITE_EMAIL_ADDRESS || '#',
  },
  breakpointMobile: 768,
}
