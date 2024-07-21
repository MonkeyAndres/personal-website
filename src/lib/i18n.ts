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

const engTranslations = {
  "back-to-top": "Back to top",

  "link:archive": "archive",
  "link:now": "now",
  "link:tools": "tools",

  search: "Search",
  "table-of-contents": "Table of contents",
  "back-to-archive": "Back to archive",
  "page-not-found": "Page not found",
  "back-to-home-page": "Back to home page",

  "bio:1": "Discovering what it means to be alive.",
  "bio:2": "Trying to make the world a better place.",

  "welcome-text":
    "Hello, I’m Andres! Welcome to my website! This is my little space in the internet where I share the insight of my researches and my vision of the world.",
  "about-me-text":
    "I’m a very curious person who likes to research from time to time. I experiment with different topics such as nutrition, personal finance, sports, productivity, etc. I enjoy keeping my mind busy with something to do. You can see the projects that I’m currently working on",
  "link:here": "here",

  "tools-text": "Wanna know which tools or hardware do I use?",
  "link:tools-home": "See here",

  "pinned-posts": "Pinned posts",
  "see-all-posts": "See all posts",
  "latest-posts": "Latest posts",

  "lets-connect": "Let's connect",
  "get-in-touch-text":
    "If you want to get in touch with me about something or just to say hi, reach out on social media or send me an email.",
};

export const translations: Record<Locale, typeof engTranslations> = {
  [Locale.en]: engTranslations,
  [Locale.es]: {
    "back-to-top": "Volver arriba",

    "link:archive": "archivo",
    "link:now": "ahora",
    "link:tools": "herramientas",

    search: "Buscar",
    "table-of-contents": "Tabla de contenidos",
    "back-to-archive": "Volver al archivo",
    "page-not-found": "Página no encontrada",
    "back-to-home-page": "Volver al inicio",

    "bio:1": "Descubriendo lo que significa estar vivo.",
    "bio:2": "Intentando hacer del mundo un lugar mejor.",

    "welcome-text":
      "¡Hola, soy Andrés! ¡Bienvenido a mi sitio web! Este es mi pequeño espacio en internet donde comparto la visión de mis investigaciones y mi visión del mundo.",
    "about-me-text":
      "Soy una persona muy curiosa a la que le gusta investigar de vez en cuando. Experimento con diferentes temas como nutrición, finanzas personales, deportes, productividad, etc. Disfruto manteniendo mi mente ocupada con algo que hacer. Puedes ver los proyectos en los que estoy trabajando",
    "link:here": "aquí",

    "tools-text": "¿Quieres saber qué herramientas o hardware uso?",
    "link:tools-home": "Pincha aquí",

    "pinned-posts": "Publicaciones destacadas",
    "see-all-posts": "Ver todo",
    "latest-posts": "Últimas publicaciones",

    "lets-connect": "Contacto",
    "get-in-touch-text":
      "Si quieres ponerte en contacto conmigo sobre algo o simplemente saludar, contácteme en las redes sociales o envíame un correo electrónico.",
  },
};
