import { routing, type Locale } from '@/i18n/routing';

export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://dragon-sword-awakening.wiki';
export const SITE_NAME = 'DragonSword: Awakening Wiki';
export const HERO_IMAGE = '/images/hero.webp';
export const LOGO_IMAGE = '/favicon.svg';
export const TWITTER_HANDLE = 'DSAwakening';
export const GA_TRACKING_ID = 'G-E0TW3YDWR6';
export const SLUG_PREFIX = 'DragonSword-Awakening-';

export const EXTERNAL_LINKS = {
  steam: 'https://store.steampowered.com/app/4570720/DragonSword__Awakening/',
  discord: 'https://discord.gg/CzZ5ddkMVg',
  youtube: 'https://www.youtube.com/@DragonSwordAwakening',
  reddit: 'https://www.reddit.com/r/DragonSwordAwakening/',
  twitter: 'https://x.com/DSAwakening',
  website: 'https://www.hound13.com/en/',
} as const;

export function absoluteUrl(path = '/') {
  const normalized = path.startsWith('/') ? path : `/${path}`;
  return `${SITE_URL}${normalized}`;
}

export function localizedPath(locale: Locale | string, path = '/') {
  const normalized = path === '' ? '/' : path.startsWith('/') ? path : `/${path}`;
  if (locale === routing.defaultLocale) {
    return normalized === '/' ? '/' : normalized;
  }
  return normalized === '/' ? `/${locale}` : `/${locale}${normalized}`;
}
