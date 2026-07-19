import { Sword, Shield, Flame, Snowflake, Wind, Droplets, Zap, Mountain, Sparkles, Heart, type LucideIcon } from 'lucide-react';

/* ──────────────── Hero Interface ──────────────── */
export interface Hero {
  id: string;
  nameKey: string;
  tier: string;
  elementKey: string;
  ailmentKey: string;
  roleKey: string;
  factionKey: string;
  icon: LucideIcon;
}

export const heroes: Hero[] = [
  { id: 'lute', nameKey: 'hero_lute', tier: 'S', elementKey: 'hero_element_physicalLight', ailmentKey: 'hero_ailment_knockdown', roleKey: 'hero_role_dps', factionKey: 'hero_faction_redFox', icon: Sword },
  { id: 'aria', nameKey: 'hero_aria', tier: 'S', elementKey: 'hero_element_lightHoly', ailmentKey: 'hero_ailment_shock', roleKey: 'hero_role_support', factionKey: 'hero_faction_sanctum', icon: Shield },
  { id: 'castella', nameKey: 'hero_castella', tier: 'S', elementKey: 'hero_element_gale', ailmentKey: 'hero_ailment_airborne', roleKey: 'hero_role_cc', factionKey: 'hero_faction_redFox', icon: Wind },
  { id: 'dana', nameKey: 'hero_dana', tier: 'S', elementKey: 'hero_element_ice', ailmentKey: 'hero_ailment_freeze', roleKey: 'hero_role_tank', factionKey: 'hero_faction_redFox', icon: Snowflake },
  { id: 'roxy', nameKey: 'hero_roxy', tier: 'A', elementKey: 'hero_element_physical', ailmentKey: 'hero_ailment_bleed', roleKey: 'hero_role_dps', factionKey: 'hero_faction_redFox', icon: Sword },
  { id: 'johnny', nameKey: 'hero_johnny', tier: 'A', elementKey: 'hero_element_physical', ailmentKey: 'hero_ailment_knockdown', roleKey: 'hero_role_dps', factionKey: 'hero_faction_redFox', icon: Sword },
  { id: 'kalien', nameKey: 'hero_kalien', tier: 'A', elementKey: 'hero_element_fire', ailmentKey: 'hero_ailment_shock', roleKey: 'hero_role_dps', factionKey: 'hero_faction_organa', icon: Flame },
  { id: 'alex', nameKey: 'hero_alex', tier: 'A', elementKey: 'hero_element_physical', ailmentKey: 'hero_ailment_knockdown', roleKey: 'hero_role_tank', factionKey: 'hero_faction_redFox', icon: Sword },
  { id: 'theresia', nameKey: 'hero_theresia', tier: 'A', elementKey: 'hero_element_holy', ailmentKey: 'hero_ailment_shock', roleKey: 'hero_role_support', factionKey: 'hero_faction_organa', icon: Shield },
  { id: 'ornette', nameKey: 'hero_ornette', tier: 'A', elementKey: 'hero_element_ice', ailmentKey: 'hero_ailment_freeze', roleKey: 'hero_role_cc', factionKey: 'hero_faction_organa', icon: Snowflake },
  { id: 'tarte', nameKey: 'hero_tarte', tier: 'B', elementKey: 'hero_element_earth', ailmentKey: 'hero_ailment_knockdown', roleKey: 'hero_role_tank', factionKey: 'hero_faction_organa', icon: Mountain },
  { id: 'kalsion', nameKey: 'hero_kalsion', tier: 'B', elementKey: 'hero_element_fire', ailmentKey: 'hero_ailment_shock', roleKey: 'hero_role_dps', factionKey: 'hero_faction_organa', icon: Flame },
  { id: 'renia', nameKey: 'hero_renia', tier: 'B', elementKey: 'hero_element_ice', ailmentKey: 'hero_ailment_freeze', roleKey: 'hero_role_support', factionKey: 'hero_faction_organa', icon: Snowflake },
  { id: 'eileen', nameKey: 'hero_eileen', tier: 'B', elementKey: 'hero_element_gale', ailmentKey: 'hero_ailment_airborne', roleKey: 'hero_role_cc', factionKey: 'hero_faction_redFox', icon: Wind },
  { id: 'cerese', nameKey: 'hero_cerese', tier: 'B', elementKey: 'hero_element_holy', ailmentKey: 'hero_ailment_shock', roleKey: 'hero_role_support', factionKey: 'hero_faction_organa', icon: Shield },
  { id: 'othello', nameKey: 'hero_othello', tier: 'B', elementKey: 'hero_element_physical', ailmentKey: 'hero_ailment_bleed', roleKey: 'hero_role_dps', factionKey: 'hero_faction_organa', icon: Sword },
  { id: 'charlotte', nameKey: 'hero_charlotte', tier: 'C', elementKey: 'hero_element_gale', ailmentKey: 'hero_ailment_airborne', roleKey: 'hero_role_cc', factionKey: 'hero_faction_organa', icon: Wind },
];

/* ──────────────── Status Ailment Interface ──────────────── */
export interface StatusAilment {
  id: string;
  nameKey: string;
  tier: string;
  descKey: string;
  effectKey: string;
  heroesKey: string;
  icon: LucideIcon;
}

export const statusAilments: StatusAilment[] = [
  { id: 'knockdown', nameKey: 'ailment_knockdown', tier: 'S', descKey: 'ailment_knockdown_desc', effectKey: 'ailment_knockdown_effect', heroesKey: 'ailment_knockdown_heroes', icon: Sword },
  { id: 'shock', nameKey: 'ailment_shock', tier: 'S', descKey: 'ailment_shock_desc', effectKey: 'ailment_shock_effect', heroesKey: 'ailment_shock_heroes', icon: Zap },
  { id: 'freeze', nameKey: 'ailment_freeze', tier: 'A', descKey: 'ailment_freeze_desc', effectKey: 'ailment_freeze_effect', heroesKey: 'ailment_freeze_heroes', icon: Snowflake },
  { id: 'airborne', nameKey: 'ailment_airborne', tier: 'A', descKey: 'ailment_airborne_desc', effectKey: 'ailment_airborne_effect', heroesKey: 'ailment_airborne_heroes', icon: Wind },
  { id: 'bleed', nameKey: 'ailment_bleed', tier: 'B', descKey: 'ailment_bleed_desc', effectKey: 'ailment_bleed_effect', heroesKey: 'ailment_bleed_heroes', icon: Droplets },
];

/* ──────────────── Familiar Interface ──────────────── */
export interface Familiar {
  id: string;
  nameKey: string;
  sourceKey: string;
  abilityKey: string;
  badgeKey: string;
  icon: LucideIcon;
}

export const familiars: Familiar[] = [
  { id: 'abyssal-direwolf', nameKey: 'familiar_abyssalDirewolf', sourceKey: 'familiar_source_preorder', abilityKey: 'familiar_abyssalDirewolf_ability', badgeKey: 'familiar_badge_bonus', icon: Shield },
  { id: 'valiant-hatchling', nameKey: 'familiar_valiantHatchling', sourceKey: 'familiar_source_deluxe', abilityKey: 'familiar_valiantHatchling_ability', badgeKey: 'familiar_badge_dlc', icon: Sparkles },
  { id: 'chako', nameKey: 'familiar_chako', sourceKey: 'familiar_source_story', abilityKey: 'familiar_chako_ability', badgeKey: 'familiar_badge_free', icon: Snowflake },
  { id: 'red-fox-pup', nameKey: 'familiar_redFoxPup', sourceKey: 'familiar_source_exploration', abilityKey: 'familiar_redFoxPup_ability', badgeKey: 'familiar_badge_free', icon: Wind },
  { id: 'organa-owl', nameKey: 'familiar_organaOwl', sourceKey: 'familiar_source_quest', abilityKey: 'familiar_organaOwl_ability', badgeKey: 'familiar_badge_free', icon: Shield },
  { id: 'meadow-sprite', nameKey: 'familiar_meadowSprite', sourceKey: 'familiar_source_exploration', abilityKey: 'familiar_meadowSprite_ability', badgeKey: 'familiar_badge_free', icon: Sparkles },
];

/* ──────────────── Color Maps ──────────────── */
export const TIER_COLOR_MAP: Record<string, string> = {
  S: 'var(--color-tier-s)',
  A: 'var(--color-tier-a)',
  B: 'var(--color-tier-b)',
  C: 'var(--color-tier-c)',
};
export const TIER_COLOR_DEFAULT = 'var(--color-tier-c)';

export function tierColor(tier: string): string {
  return TIER_COLOR_MAP[tier] ?? TIER_COLOR_DEFAULT;
}

export const AILMENT_COLOR_MAP: Record<string, string> = {
  knockdown: 'var(--color-tier-s)',
  shock: 'var(--color-tier-a)',
  freeze: 'var(--color-tier-b)',
  airborne: 'var(--color-accent)',
  bleed: 'var(--color-accent-secondary)',
};

export function ailmentColor(ailment: string): string {
  return AILMENT_COLOR_MAP[ailment] ?? TIER_COLOR_DEFAULT;
}

export const ELEMENT_COLOR_MAP: Record<string, string> = {
  physical: 'var(--color-text-primary)',
  light: 'var(--color-tier-s)',
  holy: 'var(--color-tier-s)',
  gale: 'var(--color-accent)',
  fire: 'var(--color-accent-secondary)',
  ice: 'var(--color-tier-b)',
  earth: 'var(--color-tier-a)',
  physicalLight: 'var(--color-tier-s)',
};

export const HERO_ICONS: Record<string, LucideIcon> = {
  lute: Sword,
  aria: Shield,
  castella: Wind,
  dana: Snowflake,
  roxy: Sword,
  johnny: Sword,
  kalien: Flame,
  alex: Sword,
  theresia: Shield,
  ornette: Snowflake,
  tarte: Mountain,
  kalsion: Flame,
  renia: Snowflake,
  eileen: Wind,
  cerese: Shield,
  othello: Sword,
  charlotte: Wind,
};

export const FACTION_COLOR_MAP: Record<string, string> = {
  redFox: 'var(--color-accent-secondary)',
  sanctum: 'var(--color-tier-s)',
  organa: 'var(--color-tier-b)',
};

export function factionColor(faction: string): string {
  return FACTION_COLOR_MAP[faction] ?? 'var(--color-text-muted)';
}
