// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Import translation files
import translationEN from './locales/en/translation.json';
import translationHI from './locales/hi/translation.json';
import translationMR from './locales/mr/translation.json';

// The translations
const resources = {
    en: {
        translation: translationEN
    },
    hi: {
        translation: translationHI
    },
    mr: {
        translation: translationMR
    }
};

// Function to determine the default language
const getDefaultLanguage = () => {
    // Check local storage or cookies for a saved language preference
    const savedLang = localStorage.getItem('language') || 'en'; // default to English if no saved preference

    // Optional: Check the browser's language setting
    const browserLang = navigator.language.split('-')[0]; // e.g., 'en', 'hi', 'mr'

    // Return the saved language if available, else fall back to browser language or default 'en'
    return savedLang || (resources[browserLang] ? browserLang : 'en');
};

// Initialize i18n
i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
        resources,
        lng: getDefaultLanguage(), // dynamically set the default language
        fallbackLng: 'en', // fallback language if translation is missing
        interpolation: {
            escapeValue: false // react already safes from xss
        }
    });

export default i18n;