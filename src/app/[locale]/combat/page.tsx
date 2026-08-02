import { setRequestLocale, getTranslations } from 'next-intl/server';
import { routing, type Locale } from '@/i18n/routing';
import { SITE_URL } from '@/config/site';
import { getAllContent } from '@/lib/content';
import CategoryPage from '@/components/CategoryPage';
import type { Metadata } from 'next';

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const validLocale = routing.locales.includes(locale as Locale) ? (locale as Locale) : routing.defaultLocale;
  setRequestLocale(validLocale);
  const t = await getTranslations();
  const camel = 'combat';
  const navKey = t.has(`nav_${camel}`) ? `nav_${camel}` : 'nav_home';
  return {
    title: `${t(navKey)} | ${t('site_title')}`,
    description: t.has(`page_${camel}_description`) ? t(`page_${camel}_description`) : t('site_description'),
    alternates: {
      canonical: `${SITE_URL}/combat`,
      languages: {
        'en': `${SITE_URL}/combat`,
        'ko': `${SITE_URL}/ko/combat`,
        'ja': `${SITE_URL}/ja/combat`,
        'de': `${SITE_URL}/de/combat`,
        'x-default': `${SITE_URL}/combat`,
      },
    },
  };
}

export default async function combatPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const validLocale = routing.locales.includes(locale as Locale) ? (locale as Locale) : routing.defaultLocale;
  setRequestLocale(validLocale);

  const allContent = await getAllContent('combat', validLocale);
  const articles = allContent.map(item => ({ slug: item.slug, metadata: item.metadata }));

  return <CategoryPage catKey="combat" articles={articles} />;
}
