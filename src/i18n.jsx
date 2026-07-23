import { createContext, useContext, useState } from 'react';

const STORAGE_KEY = 'frameo-lang';

const translations = {
  en: {
    // Common
    'common.seeAll': 'See all',
    'common.details': 'Details',
    'common.continue': 'Continue',
    'common.getMatches': 'Get matches',
    'common.login': 'Log in',
    'common.email': 'Email',
    'common.password': 'Password',

    // Tab bar
    'tab.home': 'Home',
    'tab.discover': 'Discover',
    'tab.aiMatch': 'AI Match',
    'tab.watchlist': 'Watchlist',

    // Home
    'home.titlePart1': 'What',
    'home.titlePart2': ' should we watch ',
    'home.titlePart3': 'tonight',
    'home.subtitle': 'AI-powered picks based on your mood, time, and streaming platforms.',
    'home.askFrameo': 'Ask Frameo',
    'home.quickMatch': 'Quick Match',
    'home.mood': 'Mood',
    'home.context': 'Context',
    'home.time': 'Time',
    'home.platforms': 'Platforms',
    'home.trendingNow': 'Trending now',
    'home.recommendedForYou': 'Recommended for you',

    // Discover
    'discover.title': 'Discover',
    'discover.subtitle': 'Explore movies across your platforms.',
    'discover.searchPlaceholder': 'Search movies, series, genres...',
    'discover.filter.trending': 'Trending',
    'discover.filter.thriller': 'Thriller',
    'discover.filter.scifi': 'Sci-Fi',
    'discover.filter.romance': 'Romance',
    'discover.filter.foryou': 'For You',
    'discover.trendingNow': 'Trending Now',
    'discover.becauseScifi': 'Because You Liked Sci-Fi',
    'discover.becauseRomance': 'Because You Liked Romance',
    'discover.searching': 'Searching...',
    'discover.searchError': "We couldn't search movies. Try again.",
    'discover.noResults': 'We found no movies for "{query}".',

    // AI Match - mood
    'mood.relaxed': 'Relaxed',
    'mood.romantic': 'Romantic',
    'mood.curious': 'Curious',
    'mood.focused': 'Focused',
    'mood.sad': 'Sad',
    'mood.excited': 'Excited',
    'mood.adventurous': 'Adventurous',
    'mood.stressed': 'Stressed',
    'aimatch.step1of4': 'Step 1 of 4',
    'aimatch.title': 'AI Match',
    'aimatch.moodHeading1': 'Tell FRAMEO ',
    'aimatch.moodHeading2': 'your mood',
    'aimatch.moodSubtitle': 'Choose how you feel and FRAMEO will start building your match.',

    // AI Match - context
    'context.solo': 'Solo Night',
    'context.date': 'Date Night',
    'context.family': 'Family Time',
    'context.friends': 'With Friends',
    'context.background': 'Background Watch',
    'context.marathon': 'Movie Marathon',
    'aimatch.step2of4': 'Step 2 of 4',
    'aimatch.contextHeading': 'Choose \nyour context!',
    'aimatch.contextSubtitle': 'Tell us how you’re watching so we can recommend the perfect movie.',

    // AI Match - time
    'time.short.duration': '30-60 min.',
    'time.short.label': 'Short Watch',
    'time.quick.duration': 'Under 30 min,',
    'time.quick.label': 'Quick Break',
    'time.night.duration': '1-2 hours.',
    'time.night.label': 'Movie Night',
    'time.have.duration': '2+ hours.',
    'time.have.label': 'I Have Time',
    'aimatch.step3of4': 'Step 3 of 4',
    'aimatch.timeHeading': 'How much time do you have?',
    'aimatch.timeSubtitle': 'Frameo will match you with something that fits your available time.',

    // AI Match - platforms
    'aimatch.step4of4': 'Step 4 of 4',
    'aimatch.platformsHeading': 'Which platforms do you have?',
    'aimatch.platformsSubtitle': 'Choose your streaming services so Frameo can find available matches.',
    'aimatch.platformsHint': 'You can select more than one.',

    // AI Match - results
    'results.title': 'AI Match Results',
    'results.thinking': 'Frameo is thinking...',
    'results.ready': 'We found the best picks for your night.',
    'results.empty': 'No matches found — try different answers.',
    'results.error': 'Something went wrong. Please try again.',
    'results.movie': 'Movie',
    'results.series': 'Series',
    'results.checkAvailability': 'Check availability on TMDB',

    // Watchlist
    'watchlist.title': 'Watchlist',
    'watchlist.subtitle': 'Your saved picks in one place.',
    'watchlist.filter.all': 'All',
    'watchlist.filter.movies': 'Movies',
    'watchlist.filter.series': 'Series',
    'watchlist.empty': 'Nothing saved yet — pick something from AI Match or Discover.',
    'watchlist.emptySeries': 'No series saved yet.',

    // Movie details
    'movieDetails.title': 'Movie Details',
    'movieDetails.whyMatch': 'Why this match?',
    'movieDetails.watchNow': 'Watch Now',
    'movieDetails.save': 'Save to Watchlist',
    'movieDetails.saved': '✓ Saved to Watchlist',

    // Trending / Recommended full lists
    'trendingAll.title': 'Trending Now',
    'recommendedAll.title': 'Recommended',

    // Profile
    'profile.title': 'Profile',
    'profile.subtitle': 'Manage your movie preferences.',
    'profile.tagline': 'FRAMEO Explorer',
    'profile.streamingPlatforms': 'Streaming Platforms',
    'profile.favoriteGenres': 'Favorite Genres',
    'profile.preferences': 'Preferences',
    'profile.settings': 'Settings',
    'profile.language': 'Language',
    'profile.notifications': 'Notifications',
    'profile.privacy': 'Privacy',
    'profile.logout': 'Log out',

    // Genres
    'genre.mystery': 'Mystery',
    'genre.comedy': 'Comedy',
    'genre.action': 'Action',
    'genre.adventure': 'Adventure',
    'genre.drama': 'Drama',

    // Settings
    'settings.title': 'Settings',
    'settings.subtitle': 'Manage your account preferences.',
    'settings.account': 'Account',
    'settings.changePassword': 'Change Password',
    'settings.emailPreferences': 'Email Preferences',
    'settings.preferences': 'Preferences',
    'settings.favoriteGenres': 'Favorite Genres',
    'settings.watchPreferences': 'Watch Preferences',
    'settings.app': 'App',
    'settings.appearance': 'Appearance',
    'settings.downloads': 'Downloads',
    'settings.logout': 'Log out',

    // Language screen
    'language.title': 'Language',
    'language.subtitle': "Choose the language you'd like to use in Frameo.",
    'language.english': 'English',
    'language.spanish': 'Spanish',

    // Login
    'login.welcomeBack': 'Welcome back',
    'login.subtitle': 'Log in to continue and get personalized recommendations just for you.',
    'login.forgotPassword': 'Forgot password?',
    'login.noAccount': 'Don’t have an account?',
    'login.signUp': 'Sign up',
    'login.loggingIn': 'Logging in…',
    'login.continueAsGuest': 'Continue without an account',
    'login.needAccountToSave': 'Log in to save titles to your Watchlist.',

    // Sign up
    'signup.createAccount': 'Create account',
    'signup.subtitle': 'Sign up to personalize your recommendations and start discovering what to watch.',
    'signup.fullName': 'Full name',
    'signup.agree': 'I agree to the Terms & Privacy Policy',
    'signup.signUp': 'Sign up',
    'signup.signingUp': 'Signing up…',
    'signup.haveAccount': 'Already have an account?',
    'signup.logIn': 'Log in',

    // Reset password
    'resetPassword.title': 'Set a new password',
    'resetPassword.subtitle': 'Choose a new password for your account.',
    'resetPassword.newPassword': 'New password',
    'resetPassword.confirmPassword': 'Confirm password',
    'resetPassword.mismatch': "Passwords don't match.",
    'resetPassword.saving': 'Saving…',
    'resetPassword.save': 'Save password',

    // Onboarding
    'onboarding.pressPlay': 'Press play to begin',
  },
  es: {
    'common.seeAll': 'Ver todo',
    'common.details': 'Detalles',
    'common.continue': 'Continuar',
    'common.getMatches': 'Ver coincidencias',
    'common.login': 'Iniciar sesión',
    'common.email': 'Email',
    'common.password': 'Contraseña',

    'tab.home': 'Inicio',
    'tab.discover': 'Descubrir',
    'tab.aiMatch': 'IA Match',
    'tab.watchlist': 'Mi lista',

    'home.titlePart1': '¿Qué',
    'home.titlePart2': ' vemos ',
    'home.titlePart3': 'hoy',
    'home.subtitle': 'Decinos cómo te sentís y FRAMEO encontrará la mejor película para este momento.',
    'home.askFrameo': 'Preguntale a Frameo',
    'home.quickMatch': 'Match rápido',
    'home.mood': 'Ánimo',
    'home.context': 'Contexto',
    'home.time': 'Tiempo',
    'home.platforms': 'Plataformas',
    'home.trendingNow': 'Tendencias',
    'home.recommendedForYou': 'Recomendado para vos',

    'discover.title': 'Descubrir',
    'discover.subtitle': 'Explorá películas en tus plataformas.',
    'discover.searchPlaceholder': 'Buscar películas, series, géneros...',
    'discover.filter.trending': 'Tendencias',
    'discover.filter.thriller': 'Suspenso',
    'discover.filter.scifi': 'Ciencia ficción',
    'discover.filter.romance': 'Romance',
    'discover.filter.foryou': 'Para vos',
    'discover.trendingNow': 'Tendencias',
    'discover.becauseScifi': 'Porque te gustó Ciencia ficción',
    'discover.becauseRomance': 'Porque te gustó Romance',
    'discover.searching': 'Buscando...',
    'discover.searchError': 'No pudimos buscar películas. Intentá de nuevo.',
    'discover.noResults': 'No encontramos películas para "{query}".',

    'mood.relaxed': 'Relajado',
    'mood.romantic': 'Romántico',
    'mood.curious': 'Curioso',
    'mood.focused': 'Concentrado',
    'mood.sad': 'Triste',
    'mood.excited': 'Entusiasmado',
    'mood.adventurous': 'Aventurero',
    'mood.stressed': 'Estresado',
    'aimatch.step1of4': 'Paso 1 de 4',
    'aimatch.title': 'IA Match',
    'aimatch.moodHeading1': '¿Cómo te sentís hoy?',
    'aimatch.moodHeading2': '',
    'aimatch.moodSubtitle': 'Elegí cómo te sentís para que FRAMEO arme tu match.',

    'context.solo': 'Noche solo',
    'context.date': 'Noche de pareja',
    'context.family': 'Tiempo en familia',
    'context.friends': 'Con amigos',
    'context.background': 'De fondo',
    'context.marathon': 'Maratón de películas',
    'aimatch.step2of4': 'Paso 2 de 4',
    'aimatch.contextHeading': 'Elegí \ntu contexto!',
    'aimatch.contextSubtitle': 'Contanos cómo vas a ver la peli para recomendarte el match perfecto.',

    'time.short.duration': '30-60 min.',
    'time.short.label': 'Rato corto',
    'time.quick.duration': 'Menos de 30 min,',
    'time.quick.label': 'Pausa rápida',
    'time.night.duration': '1-2 horas.',
    'time.night.label': 'Noche de película',
    'time.have.duration': '2+ horas.',
    'time.have.label': 'Tengo tiempo',
    'aimatch.step3of4': 'Paso 3 de 4',
    'aimatch.timeHeading': '¿Cuánto tiempo tenés?',
    'aimatch.timeSubtitle': 'Frameo te va a recomendar algo que se ajuste a tu tiempo disponible.',

    'aimatch.step4of4': 'Paso 4 de 4',
    'aimatch.platformsHeading': '¿Qué plataformas tenés?',
    'aimatch.platformsSubtitle': 'Elegí tus servicios de streaming para que Frameo encuentre coincidencias disponibles.',
    'aimatch.platformsHint': 'Podés elegir más de una.',

    'results.title': 'Resultados de IA Match',
    'results.thinking': 'Frameo está pensando...',
    'results.ready': 'Encontramos las mejores opciones para tu noche.',
    'results.empty': 'No encontramos coincidencias — probá con otras respuestas.',
    'results.error': 'Algo salió mal. Intentá de nuevo.',
    'results.movie': 'Película',
    'results.series': 'Serie',
    'results.checkAvailability': 'Consultá disponibilidad en TMDB',

    'watchlist.title': 'Mi lista',
    'watchlist.subtitle': 'Tus elecciones guardadas en un solo lugar.',
    'watchlist.filter.all': 'Todo',
    'watchlist.filter.movies': 'Películas',
    'watchlist.filter.series': 'Series',
    'watchlist.empty': 'Todavía no guardaste nada — elegí algo desde IA Match o Descubrir.',
    'watchlist.emptySeries': 'Todavía no guardaste series.',

    'movieDetails.title': 'Detalles de la película',
    'movieDetails.whyMatch': '¿Por qué este match?',
    'movieDetails.watchNow': 'Ver ahora',
    'movieDetails.save': 'Guardar en mi lista',
    'movieDetails.saved': '✓ Guardado en mi lista',

    'trendingAll.title': 'Tendencias',
    'recommendedAll.title': 'Recomendados',

    'profile.title': 'Perfil',
    'profile.subtitle': 'Gestioná tus preferencias de películas.',
    'profile.tagline': 'FRAMEO Explorer',
    'profile.streamingPlatforms': 'Plataformas de streaming',
    'profile.favoriteGenres': 'Géneros favoritos',
    'profile.preferences': 'Preferencias',
    'profile.settings': 'Configuración',
    'profile.language': 'Idioma',
    'profile.notifications': 'Notificaciones',
    'profile.privacy': 'Privacidad',
    'profile.logout': 'Cerrar sesión',

    'genre.mystery': 'Misterio',
    'genre.comedy': 'Comedia',
    'genre.action': 'Acción',
    'genre.adventure': 'Aventura',
    'genre.drama': 'Drama',

    'settings.title': 'Configuración',
    'settings.subtitle': 'Gestioná las preferencias de tu cuenta.',
    'settings.account': 'Cuenta',
    'settings.changePassword': 'Cambiar contraseña',
    'settings.emailPreferences': 'Preferencias de email',
    'settings.preferences': 'Preferencias',
    'settings.favoriteGenres': 'Géneros favoritos',
    'settings.watchPreferences': 'Preferencias de visualización',
    'settings.app': 'Aplicación',
    'settings.appearance': 'Apariencia',
    'settings.downloads': 'Descargas',
    'settings.logout': 'Cerrar sesión',

    'language.title': 'Idioma',
    'language.subtitle': 'Elegí el idioma que querés usar en Frameo.',
    'language.english': 'Inglés',
    'language.spanish': 'Español',

    'login.welcomeBack': 'Bienvenido de nuevo',
    'login.subtitle': 'Iniciá sesión para continuar y recibir recomendaciones personalizadas.',
    'login.forgotPassword': '¿Olvidaste tu contraseña?',
    'login.noAccount': '¿No tenés una cuenta?',
    'login.signUp': 'Registrate',
    'login.loggingIn': 'Iniciando sesión…',
    'login.continueAsGuest': 'Continuar sin una cuenta',
    'login.needAccountToSave': 'Iniciá sesión para guardar títulos en tu Watchlist.',

    'signup.createAccount': 'Crear cuenta',
    'signup.subtitle': 'Registrate para personalizar tus recomendaciones y empezar a descubrir qué ver.',
    'signup.fullName': 'Nombre completo',
    'signup.agree': 'Acepto los Términos y la Política de Privacidad',
    'signup.signUp': 'Registrarme',
    'signup.signingUp': 'Registrando…',
    'signup.haveAccount': '¿Ya tenés una cuenta?',
    'signup.logIn': 'Iniciar sesión',

    'resetPassword.title': 'Establecé una nueva contraseña',
    'resetPassword.subtitle': 'Elegí una nueva contraseña para tu cuenta.',
    'resetPassword.newPassword': 'Nueva contraseña',
    'resetPassword.confirmPassword': 'Confirmar contraseña',
    'resetPassword.mismatch': 'Las contraseñas no coinciden.',
    'resetPassword.saving': 'Guardando…',
    'resetPassword.save': 'Guardar contraseña',

    'onboarding.pressPlay': 'Tocá play para empezar',
  },
};

const LanguageContext = createContext({
  lang: 'en',
  setLang: () => {},
  t: (key, vars) => interpolate(translations.en[key] ?? key, vars),
});

function interpolate(str, vars) {
  if (!vars) return str;
  return Object.entries(vars).reduce(
    (acc, [k, v]) => acc.replaceAll(`{${k}}`, v),
    str
  );
}

export function LanguageProvider({ children }) {
  const [lang, setLangState] = useState(() => {
    if (typeof window === 'undefined') return 'en';
    return localStorage.getItem(STORAGE_KEY) === 'es' ? 'es' : 'en';
  });

  const setLang = (next) => {
    setLangState(next);
    if (typeof window !== 'undefined') localStorage.setItem(STORAGE_KEY, next);
  };

  const t = (key, vars) => {
    const dict = translations[lang] ?? translations.en;
    const value = dict[key] ?? translations.en[key] ?? key;
    return interpolate(value, vars);
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
