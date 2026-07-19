import {
  BookOpen, Crown, Flame, Map, ScrollText, Home, Info,
  Swords, Shield, Sparkles, Star, Users, UtensilsCrossed,
  type LucideIcon,
} from 'lucide-react';

export const NAVIGATION_CONFIG = [
  { key: 'home', labelKey: 'nav_home', path: '/', icon: Home, showInHeader: false, showInSidebar: true, showInFooter: false, sitemap: true, priority: 1, changeFrequency: 'daily' },
  { key: 'heroes', labelKey: 'nav_heroes', path: '/heroes', icon: Star, isContentType: true, showInHeader: true, showInSidebar: true, showInFooter: true, sitemap: true, priority: 0.9, changeFrequency: 'weekly' },
  { key: 'tier-list', labelKey: 'nav_tierList', path: '/tier-list', icon: Crown, isContentType: true, showInHeader: true, showInSidebar: true, showInFooter: true, sitemap: true, priority: 0.9, changeFrequency: 'weekly' },
  { key: 'tag-combos', labelKey: 'nav_tagCombos', path: '/tag-combos', icon: Swords, isContentType: true, showInHeader: true, showInSidebar: true, showInFooter: true, sitemap: true, priority: 0.9, changeFrequency: 'weekly' },
  { key: 'guides', labelKey: 'nav_guides', path: '/guides', icon: BookOpen, isContentType: true, showInHeader: true, showInSidebar: true, showInFooter: true, sitemap: true, priority: 0.9, changeFrequency: 'weekly' },
  { key: 'builds', labelKey: 'nav_builds', path: '/builds', icon: Flame, isContentType: true, showInHeader: true, showInSidebar: true, showInFooter: true, sitemap: true, priority: 0.8, changeFrequency: 'weekly' },
  { key: 'status-ailments', labelKey: 'nav_statusAilments', path: '/status-ailments', icon: Shield, isContentType: true, showInHeader: true, showInSidebar: true, showInFooter: true, sitemap: true, priority: 0.8, changeFrequency: 'weekly' },
  { key: 'exploration', labelKey: 'nav_exploration', path: '/exploration', icon: Map, isContentType: true, showInHeader: true, showInSidebar: true, showInFooter: true, sitemap: true, priority: 0.8, changeFrequency: 'weekly' },
  { key: 'familiars', labelKey: 'nav_familiars', path: '/familiars', icon: Users, isContentType: true, showInHeader: true, showInSidebar: true, showInFooter: true, sitemap: true, priority: 0.8, changeFrequency: 'weekly' },
  { key: 'updates', labelKey: 'nav_updates', path: '/updates', icon: Sparkles, isContentType: true, showInHeader: false, showInSidebar: true, showInFooter: true, sitemap: true, priority: 0.8, changeFrequency: 'weekly' },
  { key: 'cooking-crafting', labelKey: 'nav_cookingCrafting', path: '/cooking-crafting', icon: UtensilsCrossed, isContentType: true, showInHeader: false, showInSidebar: true, showInFooter: true, sitemap: true, priority: 0.7, changeFrequency: 'weekly' },
  { key: 'story-lore', labelKey: 'nav_storyLore', path: '/story-lore', icon: ScrollText, isContentType: true, showInHeader: false, showInSidebar: true, showInFooter: true, sitemap: true, priority: 0.7, changeFrequency: 'weekly' },
  { key: 'system-requirements', labelKey: 'nav_systemRequirements', path: '/system-requirements', icon: Info, isContentType: true, showInHeader: false, showInSidebar: true, showInFooter: true, sitemap: true, priority: 0.7, changeFrequency: 'monthly' },
  { key: 'buying-guide', labelKey: 'nav_buyingGuide', path: '/buying-guide', icon: ScrollText, isContentType: true, showInHeader: false, showInSidebar: true, showInFooter: true, sitemap: true, priority: 0.7, changeFrequency: 'monthly' },
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
  heroes: 'heroes',
  'tier-list': 'tier-list',
  'tag-combos': 'tag-combos',
  guides: 'guides',
  builds: 'builds',
  'status-ailments': 'status-ailments',
  exploration: 'exploration',
  familiars: 'familiars',
  updates: 'updates',
  'cooking-crafting': 'cooking-crafting',
  'story-lore': 'story-lore',
  'system-requirements': 'system-requirements',
  'buying-guide': 'buying-guide',
} as Record<ContentType, string>;

export function getContentDir(contentType: ContentType): string {
  return CONTENT_DIR_NAMES[contentType] || contentType;
}

export const GUIDE_CATEGORIES: Record<string, { emoji: string; order: number }> = {
  general:           { emoji: '🚀', order: 1 },
  heroes:            { emoji: '⭐', order: 2 },
  'tier-list':       { emoji: '👑', order: 3 },
  'tag-combos':      { emoji: '⚔️', order: 4 },
  'status-ailments': { emoji: '🛡️', order: 5 },
  builds:            { emoji: '🔥', order: 6 },
  exploration:       { emoji: '🗺️', order: 7 },
  familiars:         { emoji: '🐾', order: 8 },
  updates:           { emoji: '✨', order: 9 },
  'cooking-crafting':{ emoji: '🍳', order: 10 },
  'story-lore':      { emoji: '📖', order: 11 },
  'system-requirements': { emoji: '💻', order: 12 },
  'buying-guide':    { emoji: '🛒', order: 13 },
};

export const CATEGORY_ORDER = Object.entries(GUIDE_CATEGORIES)
  .sort(([, a], [, b]) => a.order - b.order)
  .map(([key]) => key);

export const CATEGORY_AFFINITY: Record<string, string[]> = {
  general:            ['guides', 'heroes'],
  heroes:             ['tier-list', 'builds', 'tag-combos'],
  'tier-list':        ['heroes', 'builds', 'tag-combos'],
  'tag-combos':       ['heroes', 'status-ailments', 'builds'],
  'status-ailments':  ['tag-combos', 'heroes'],
  builds:             ['heroes', 'tier-list', 'tag-combos'],
  exploration:        ['familiars', 'cooking-crafting', 'guides'],
  familiars:          ['exploration', 'heroes'],
  updates:            ['guides', 'heroes'],
  'cooking-crafting': ['exploration', 'builds'],
  'story-lore':       ['heroes', 'guides'],
  'system-requirements': ['buying-guide'],
  'buying-guide':     ['system-requirements', 'guides'],
};
