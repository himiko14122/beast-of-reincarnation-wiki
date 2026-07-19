import {
  BookOpen, Crown, Swords, Shield, Flame, Map, Sparkles, Users,
  UtensilsCrossed, ScrollText, Info, ShoppingCart,
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
    videoId: 'bvqGAuu-ZIM',
    badgeKeys: [
      'home_hero_badge_release',
      'home_hero_badge_price',
      'home_hero_badge_heroes',
      'home_hero_badge_noGacha',
      'home_hero_badge_genre',
    ],
    ctas: [
      { labelKey: 'home_hero_cta_guides', href: '/guides/beginner-guide', style: 'primary' as const },
      { labelKey: 'home_hero_cta_tierList', href: '/tier-list', style: 'secondary' as const },
      { labelKey: 'home_hero_cta_heroes', href: '/heroes', style: 'secondary' as const },
    ],
  },

  moduleCards: [
    { key: 'heroes', labelKey: 'home_module_heroes', titleKey: 'home_module_heroes_title', descKey: 'home_module_heroes_desc', href: '/heroes', stats: [{ val: '__heroCount', labelKey: 'home_module_heroes_count' }, { val: '5', labelKey: 'home_module_elements_count' }], icon: Users, ctaKey: 'home_module_heroes_cta' },
    { key: 'tier-list', labelKey: 'home_module_tierList', titleKey: 'home_module_tierList_title', descKey: 'home_module_tierList_desc', href: '/tier-list', stats: [{ val: 'S-A-B-C', labelKey: 'home_module_tier_levels' }, { val: '17', labelKey: 'home_module_rated_heroes' }], icon: Crown },
    { key: 'tag-combos', labelKey: 'home_module_tagCombos', titleKey: 'home_module_tagCombos_title', descKey: 'home_module_tagCombos_desc', href: '/tag-combos', stats: [{ val: '5', labelKey: 'home_module_ailment_types' }, { val: '3', labelKey: 'home_module_party_size' }], icon: Swords, ctaKey: 'home_module_tagCombos_cta' },
    { key: 'guides', labelKey: 'home_module_guides', titleKey: 'home_module_guides_title', descKey: 'home_module_guides_desc', href: '/guides/beginner-guide', stats: [{ val: '__guideCount', labelKey: 'home_module_starter_pages' }, { val: '2', labelKey: 'home_module_factions_count' }], icon: BookOpen, ctaKey: 'home_module_guides_cta' },
    { key: 'builds', labelKey: 'home_module_builds', titleKey: 'home_module_builds_title', descKey: 'home_module_builds_desc', href: '/builds', stats: [{ val: '4+', labelKey: 'home_module_build_types' }, { val: 'S', labelKey: 'home_module_best_build' }], icon: Flame },
    { key: 'status-ailments', labelKey: 'home_module_statusAilments', titleKey: 'home_module_statusAilments_title', descKey: 'home_module_statusAilments_desc', href: '/status-ailments', stats: [{ val: '__ailmentCount', labelKey: 'home_module_ailment_count' }, { val: '2', labelKey: 'home_module_signal_types' }], icon: Shield },
    { key: 'exploration', labelKey: 'home_module_exploration', titleKey: 'home_module_exploration_title', descKey: 'home_module_exploration_desc', href: '/exploration', stats: [{ val: '6+', labelKey: 'home_module_regions_count' }, { val: '30', labelKey: 'home_module_familiar_total' }], icon: Map },
    { key: 'familiars', labelKey: 'home_module_familiars', titleKey: 'home_module_familiars_title', descKey: 'home_module_familiars_desc', href: '/familiars', stats: [{ val: '__familiarCount', labelKey: 'home_module_familiar_count' }, { val: '20', labelKey: 'home_module_free_familiars' }], icon: Sparkles },
    { key: 'updates', labelKey: 'home_module_updates', titleKey: 'home_module_updates_title', descKey: 'home_module_updates_desc', href: '/updates', stats: [{ val: '4', labelKey: 'home_module_upcoming_heroes' }, { val: 'Q4', labelKey: 'home_module_rift_system' }], icon: Sparkles },
    { key: 'cooking-crafting', labelKey: 'home_module_cookingCrafting', titleKey: 'home_module_cookingCrafting_title', descKey: 'home_module_cookingCrafting_desc', href: '/cooking-crafting', stats: [{ val: '10+', labelKey: 'home_module_recipes_count' }, { val: 'UE5', labelKey: 'home_module_engine_type' }], icon: UtensilsCrossed },
    { key: 'story-lore', labelKey: 'home_module_storyLore', titleKey: 'home_module_storyLore_title', descKey: 'home_module_storyLore_desc', href: '/story-lore', stats: [{ val: '6', labelKey: 'home_module_hero_legends' }, { val: '2', labelKey: 'home_module_factions_count' }], icon: ScrollText },
    { key: 'system-requirements', labelKey: 'home_module_systemReq', titleKey: 'home_module_systemReq_title', descKey: 'home_module_systemReq_desc', href: '/system-requirements', stats: [{ val: '60', labelKey: 'home_module_storage_gb' }, { val: '11', labelKey: 'home_module_languages_count' }], icon: Info },
    { key: 'buying-guide', labelKey: 'home_module_buyingGuide', titleKey: 'home_module_buyingGuide_title', descKey: 'home_module_buyingGuide_desc', href: '/buying-guide', stats: [{ val: '$29.99', labelKey: 'home_module_base_price' }, { val: '0', labelKey: 'home_module_gacha_cost' }], icon: ShoppingCart },
  ] as ModuleCardConfig[],

  gameFeatures: [
    { titleKey: 'home_feature_tagCombos', descKey: 'home_feature_tagCombos_desc', icon: Swords },
    { titleKey: 'home_feature_noGacha', descKey: 'home_feature_noGacha_desc', icon: Shield },
    { titleKey: 'home_feature_nineteenHeroes', descKey: 'home_feature_nineteenHeroes_desc', icon: Users },
    { titleKey: 'home_feature_familiarSystem', descKey: 'home_feature_familiarSystem_desc', icon: Sparkles },
  ] as GameFeatureConfig[],

  startHereSteps: [
    { titleKey: 'home_start_1_title', descKey: 'home_start_1_desc', href: '/guides/beginner-guide' },
    { titleKey: 'home_start_2_title', descKey: 'home_start_2_desc', href: '/heroes' },
    { titleKey: 'home_start_3_title', descKey: 'home_start_3_desc', href: '/tag-combos' },
    { titleKey: 'home_start_4_title', descKey: 'home_start_4_desc', href: '/tier-list' },
    { titleKey: 'home_start_5_title', descKey: 'home_start_5_desc', href: '/exploration' },
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
    keys: ['isGacha', 'bestHeroes', 'tagComboHow', 'familiarFree', 'dlcContent', 'priceModel', 'legalDispute', 'howManyHeroes', 'signalSkill', 'riftSystem'],
  },

  bottomCta: {
    guideHref: '/guides/beginner-guide',
    guideLabelKey: 'home_cta_guide',
    externalLinkKey: 'steam',
    externalLabelKey: 'home_cta_steam',
  },
};
