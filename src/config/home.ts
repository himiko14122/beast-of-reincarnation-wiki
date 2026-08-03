import {
  BookOpen, Swords, Flame, Users, Skull, Map, Sparkles, Crown,
  Monitor, ScrollText, ShoppingCart,
  type LucideIcon,
} from 'lucide-react';

export interface StatConfig {
  val: string;
  labelKey: string;
}

export interface ModuleCardConfig {
  key: string;
  labelKey: string;
  titleKey: string;
  descKey: string;
  href: string;
  stats: StatConfig[];
  icon: LucideIcon;
  ctaKey?: string;
}

export interface GameFeatureConfig {
  titleKey: string;
  descKey: string;
  icon: LucideIcon;
}

export interface StartHereStepConfig {
  titleKey: string;
  descKey: string;
  href: string;
}

export interface HeroCtaConfig {
  labelKey: string;
  href: string;
  style: 'primary' | 'secondary';
}

export const HOME_CONFIG = {
  hero: {
    videoId: 'H0r-Kap8kWI',
    badgeKeys: [
      'home_hero_badge_release',
      'home_hero_badge_price',
      'home_hero_badge_heroes',
      'home_hero_badge_noGacha',
      'home_hero_badge_genre',
    ],
    ctas: [
      { labelKey: 'home_hero_cta_guides', href: '/guides', style: 'primary' as const },
      { labelKey: 'home_hero_cta_combat', href: '/combat', style: 'secondary' as const },
      { labelKey: 'home_hero_cta_bosses', href: '/bosses', style: 'secondary' as const },
    ],
  },

  moduleCards: [
    { key: 'guides', labelKey: 'home_module_guides', titleKey: 'home_module_guides_title', descKey: 'home_module_guides_desc', href: '/guides', stats: [{ val: '__guideCount', labelKey: 'home_module_starter_pages' }, { val: '10+', labelKey: 'home_module_guides_count' }], icon: BookOpen, ctaKey: 'home_module_guides_cta' },
    { key: 'combat', labelKey: 'home_module_combat', titleKey: 'home_module_combat_title', descKey: 'home_module_combat_desc', href: '/combat', stats: [{ val: '5+', labelKey: 'home_module_combat_styles' }, { val: 'Koo', labelKey: 'home_module_companion_name' }], icon: Swords, ctaKey: 'home_module_combat_cta' },
    { key: 'bosses', labelKey: 'home_module_bosses', titleKey: 'home_module_bosses_title', descKey: 'home_module_bosses_desc', href: '/bosses', stats: [{ val: '7+', labelKey: 'home_module_boss_count' }, { val: 'Shadow', labelKey: 'home_module_boss_type' }], icon: Skull },
    { key: 'builds', labelKey: 'home_module_builds', titleKey: 'home_module_builds_title', descKey: 'home_module_builds_desc', href: '/builds', stats: [{ val: '4+', labelKey: 'home_module_build_types' }, { val: 'S', labelKey: 'home_module_best_build' }], icon: Flame },
    { key: 'characters', labelKey: 'home_module_characters', titleKey: 'home_module_characters_title', descKey: 'home_module_characters_desc', href: '/characters', stats: [{ val: '10+', labelKey: 'home_module_character_count' }, { val: 'Emma', labelKey: 'home_module_protagonist' }], icon: Users, ctaKey: 'home_module_characters_cta' },
    { key: 'world', labelKey: 'home_module_world', titleKey: 'home_module_world_title', descKey: 'home_module_world_desc', href: '/world', stats: [{ val: '6+', labelKey: 'home_module_regions_count' }, { val: '4026', labelKey: 'home_module_year_setting' }], icon: Map },
    { key: 'items', labelKey: 'home_module_items', titleKey: 'home_module_items_title', descKey: 'home_module_items_desc', href: '/items', stats: [{ val: '30+', labelKey: 'home_module_item_count' }, { val: 'UE5', labelKey: 'home_module_engine_type' }], icon: Crown },
    { key: 'news', labelKey: 'home_module_news', titleKey: 'home_module_news_title', descKey: 'home_module_news_desc', href: '/news', stats: [{ val: 'Q3', labelKey: 'home_module_latest_update' }, { val: '2', labelKey: 'home_module_upcoming_content' }], icon: Sparkles },
    { key: 'platforms', labelKey: 'home_module_platforms', titleKey: 'home_module_platforms_title', descKey: 'home_module_platforms_desc', href: '/platforms', stats: [{ val: '4', labelKey: 'home_module_platform_count' }, { val: '$59.99', labelKey: 'home_module_base_price' }], icon: Monitor },
    { key: 'story', labelKey: 'home_module_story', titleKey: 'home_module_story_title', descKey: 'home_module_story_desc', href: '/story', stats: [{ val: 'YBP', labelKey: 'home_module_era_label' }, { val: '10+', labelKey: 'home_module_story_chapters' }], icon: ScrollText },
  ] as ModuleCardConfig[],

  gameFeatures: [
    { titleKey: 'home_feature_combat', descKey: 'home_feature_combat_desc', icon: Swords },
    { titleKey: 'home_feature_companion', descKey: 'home_feature_companion_desc', icon: Users },
    { titleKey: 'home_feature_bossRush', descKey: 'home_feature_bossRush_desc', icon: Skull },
    { titleKey: 'home_feature_darkFantasy', descKey: 'home_feature_darkFantasy_desc', icon: Sparkles },
  ] as GameFeatureConfig[],

  startHereSteps: [
    { titleKey: 'home_start_1_title', descKey: 'home_start_1_desc', href: '/guides' },
    { titleKey: 'home_start_2_title', descKey: 'home_start_2_desc', href: '/combat' },
    { titleKey: 'home_start_3_title', descKey: 'home_start_3_desc', href: '/bosses' },
    { titleKey: 'home_start_4_title', descKey: 'home_start_4_desc', href: '/builds' },
    { titleKey: 'home_start_5_title', descKey: 'home_start_5_desc', href: '/characters' },
  ] as StartHereStepConfig[],

  gameOverview: {
    infoItems: ['developer', 'publisher', 'platform', 'genre', 'releaseDate', 'price', 'engine', 'languages'],
    cta: {
      guideLabelKey: 'home_about_cta',
      guideHref: '/guides',
      externalLabelKey: 'home_cta_steam',
      externalLinkKey: 'steam',
    },
  },

  faq: {
    keys: ['isGacha', 'bestBuilds', 'combatSystem', 'companionKoo', 'dlcContent', 'priceModel', 'storyLength', 'howManyBosses', 'platforms', 'yearSetting'],
  },

  bottomCta: {
    guideHref: '/guides',
    guideLabelKey: 'home_cta_guide',
    externalLinkKey: 'steam',
    externalLabelKey: 'home_cta_steam',
  },
};
