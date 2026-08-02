import {
  BookOpen, Crown, Map, Home, Info,
  Swords, Flame, Users, ScrollText, Sparkles, Skull, Trophy, Monitor,
  type LucideIcon,
} from 'lucide-react';

export const NAVIGATION_CONFIG = [
  { key: 'home', labelKey: 'nav_home', path: '/', icon: Home, showInHeader: false, showInSidebar: true, showInFooter: false, sitemap: true, priority: 1, changeFrequency: 'daily' },
  { key: 'guides', labelKey: 'nav_guides', path: '/guides', icon: BookOpen, isContentType: true, showInHeader: true, showInSidebar: true, showInFooter: true, sitemap: true, priority: 0.9, changeFrequency: 'weekly' },
  { key: 'combat', labelKey: 'nav_combat', path: '/combat', icon: Swords, isContentType: true, showInHeader: true, showInSidebar: true, showInFooter: true, sitemap: true, priority: 0.9, changeFrequency: 'weekly' },
  { key: 'bosses', labelKey: 'nav_bosses', path: '/bosses', icon: Skull, isContentType: true, showInHeader: true, showInSidebar: true, showInFooter: true, sitemap: true, priority: 0.9, changeFrequency: 'weekly' },
  { key: 'builds', labelKey: 'nav_builds', path: '/builds', icon: Flame, isContentType: true, showInHeader: true, showInSidebar: true, showInFooter: true, sitemap: true, priority: 0.9, changeFrequency: 'weekly' },
  { key: 'characters', labelKey: 'nav_characters', path: '/characters', icon: Users, isContentType: true, showInHeader: true, showInSidebar: true, showInFooter: true, sitemap: true, priority: 0.8, changeFrequency: 'weekly' },
  { key: 'world', labelKey: 'nav_world', path: '/world', icon: Map, isContentType: true, showInHeader: true, showInSidebar: true, showInFooter: true, sitemap: true, priority: 0.8, changeFrequency: 'weekly' },
  { key: 'items', labelKey: 'nav_items', path: '/items', icon: Crown, isContentType: true, showInHeader: true, showInSidebar: true, showInFooter: true, sitemap: true, priority: 0.8, changeFrequency: 'weekly' },
  { key: 'news', labelKey: 'nav_news', path: '/news', icon: Sparkles, isContentType: true, showInHeader: false, showInSidebar: true, showInFooter: true, sitemap: true, priority: 0.8, changeFrequency: 'weekly' },
  { key: 'platforms', labelKey: 'nav_platforms', path: '/platforms', icon: Monitor, isContentType: true, showInHeader: false, showInSidebar: true, showInFooter: true, sitemap: true, priority: 0.7, changeFrequency: 'weekly' },
  { key: 'story', labelKey: 'nav_story', path: '/story', icon: ScrollText, isContentType: true, showInHeader: false, showInSidebar: true, showInFooter: true, sitemap: true, priority: 0.7, changeFrequency: 'weekly' },
  { key: 'about', labelKey: 'nav_about', path: '/about', icon: Info, showInHeader: false, showInSidebar: false, showInFooter: true, sitemap: true, priority: 0.7, changeFrequency: 'monthly' },
  { key: 'sitemap', labelKey: 'nav_sitemap', path: '/sitemap', icon: Map, showInHeader: false, showInSidebar: false, showInFooter: true, sitemap: false, priority: 0.5, changeFrequency: 'monthly' },
  { key: 'privacy-policy', labelKey: 'nav_privacyPolicy', path: '/privacy-policy', icon: ScrollText, showInHeader: false, showInSidebar: false, showInFooter: true, sitemap: true, priority: 0.4, changeFrequency: 'yearly' },
  { key: 'terms-of-service', labelKey: 'nav_termsOfService', path: '/terms-of-service', icon: ScrollText, showInHeader: false, showInSidebar: false, showInFooter: true, sitemap: true, priority: 0.4, changeFrequency: 'yearly' },
] as const;

export const CONTENT_TYPES = NAVIGATION_CONFIG.filter((item) => 'isContentType' in item && item.isContentType).map((item) => item.key);

export const CONTENT_TYPES_WITH_DEDICATED_PAGES = new Set(CONTENT_TYPES);

export type NavigationItem = (typeof NAVIGATION_CONFIG)[number];
export type ContentType = (typeof CONTENT_TYPES)[number];

export function isContentType(value: string): value is ContentType {
  return CONTENT_TYPES.includes(value as ContentType);
}

export function getNavigationItem(path: string) {
  const normalized = path === '' ? '/' : path.startsWith('/') ? path : `/${path}`;
  return NAVIGATION_CONFIG.find((item) => item.path === normalized || item.key === path);
}

export const CONTENT_DIR_NAMES: Record<ContentType | string, string> = {
  guides: 'guides',
  combat: 'combat',
  bosses: 'bosses',
  builds: 'builds',
  characters: 'characters',
  world: 'world',
  items: 'items',
  news: 'news',
  platforms: 'platforms',
  story: 'story',
} as Record<ContentType, string>;

export function getContentDir(contentType: ContentType): string {
  return CONTENT_DIR_NAMES[contentType] || contentType;
}

export const GUIDE_CATEGORIES: Record<string, { emoji: string; order: number }> = {
  guides:    { emoji: '📖', order: 1 },
  combat:    { emoji: '⚔️', order: 2 },
  bosses:    { emoji: '💀', order: 3 },
  builds:    { emoji: '🔥', order: 4 },
  characters:{ emoji: '🐾', order: 5 },
  world:     { emoji: '🗺️', order: 6 },
  items:     { emoji: '🎒', order: 7 },
  news:      { emoji: '✨', order: 8 },
  platforms: { emoji: '💻', order: 9 },
  story:     { emoji: '📜', order: 10 },
};

export const CATEGORY_ORDER = Object.entries(GUIDE_CATEGORIES)
  .sort(([, a], [, b]) => a.order - b.order)
  .map(([key]) => key);

export const CATEGORY_AFFINITY: Record<string, string[]> = {
  guides:     ['combat', 'builds', 'characters'],
  combat:     ['bosses', 'builds', 'guides'],
  bosses:     ['combat', 'builds', 'world'],
  builds:     ['combat', 'items', 'characters'],
  characters: ['combat', 'story', 'builds'],
  world:      ['story', 'items', 'guides'],
  items:      ['builds', 'combat', 'world'],
  news:       ['guides', 'platforms'],
  platforms:  ['guides', 'news'],
  story:      ['characters', 'world', 'bosses'],
};
