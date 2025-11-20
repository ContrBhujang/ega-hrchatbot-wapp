import i18n from 'i18next';
import languageDetector from 'i18next-browser-languagedetector';  
import { initReactI18next } from 'react-i18next';

i18n
  .use(languageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    debug: true,
    lng: 'es',
    resources:{
        en: {
            translation: {
            "welcome": "Welcome",
            "how_can_i_assist_you_today": "How can I assist you Today?"
            }
        },
        es: {
            translation: {
            "welcome": "Bienvenida",
            "how_can_i_assist_you_today": "¿En qué puedo ayudarle hoy?"
            }
        }
    }
    //interpolation: {
    //  escapeValue: false
    //}
  });

export default i18n;
