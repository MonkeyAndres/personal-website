export enum Locale {
  en = "en",
  es = "es",
}

export const DEFAULT_LOCALE = Locale.en;

export const buildLocalizedURL = (locale: Locale, path: string) => {
  if (locale === DEFAULT_LOCALE) {
    return path;
  }

  return `/${locale}${path}`;
};
