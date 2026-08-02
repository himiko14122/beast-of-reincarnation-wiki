import { routing, type Locale } from '@/i18n/routing';

export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.beast-of-reincarnation.online';
export const SITE_NAME = 'Beast of Reincarnation Wiki';
export const HERO_IMAGE = '/images/hero.webp';
export const LOGO_IMAGE = '/favicon.svg';
export const TWITTER_HANDLE = 'BeastReincarn';
export const GA_TRACKING_ID = 'G-BPC8T8Z2MK';
export const SLUG_PREFIX = 'Beast-of-Reincarnation-';

export const EXTERNAL_LINKS = {
  steam: 'https://store.steampowered.com/app/2001760/_/',
  discord: 'https://discord.gg/beastreincarnation',
  youtube: 'https://www.youtube.com/@BeastOfReincarnation',
  reddit: 'https://www.reddit.com/r/BeastOfReincarnation/',
  twitter: 'https://x.com/BeastReincarn',
  website: 'https://www.gamefreak.co.jp/',
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
