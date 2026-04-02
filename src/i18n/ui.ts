export const languages = {
  ca: 'Català',
  es: 'Español',
  en: 'English',
};

export const defaultLang = 'ca';

export const ui = {
  ca: {
    'nav.title': 'Plans per Barcelona',
    'home.title': 'Què s\'hi cou a Barcelona?',
    'home.subtitle': 'Descobreix i comparteix els millors plans de la ciutat.',
    'home.empty': 'De moment no hi ha plans. Torna aviat!',
    'plan.upvotes': 'Vots',
    'plan.author': 'per',
    'plan.source': 'Via',
  },
  es: {
    'nav.title': 'Planes por Barcelona',
    'home.title': '¿Qué se cuece en Barcelona?',
    'home.subtitle': 'Descubre y comparte los mejores planes de la ciudad.',
    'home.empty': 'Por ahora no hay planes. ¡Vuelve pronto!',
    'plan.upvotes': 'Votos',
    'plan.author': 'por',
    'plan.source': 'Vía',
  },
  en: {
    'nav.title': 'Plans for Barcelona',
    'home.title': 'What\'s cooking in Barcelona?',
    'home.subtitle': 'Discover and share the best plans in the city.',
    'home.empty': 'No plans yet. Check back soon!',
    'plan.upvotes': 'Votes',
    'plan.author': 'by',
    'plan.source': 'Via',
  },
} as const;

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split('/');
  if (lang in ui) return lang as keyof typeof ui;
  return defaultLang;
}

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: keyof typeof ui[typeof defaultLang]) {
    return ui[lang][key] || ui[defaultLang][key];
  }
}
