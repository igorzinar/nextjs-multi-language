import { useState, useEffect } from 'react';
import {getCookieFromClient} from "@/lib/getCookie";

type Translations = {
    [key: string]: string;
};

export const useTranslation = () => {
    const [language, setLanguage] = useState<string>('en');
    const [translations, setTranslations] = useState<Translations>({});

    useEffect(() => {
        const savedLanguage = getCookieFromClient('language') || 'en';
        setLanguage(savedLanguage);
        loadTranslations(savedLanguage);
    }, []);

    const loadTranslations = async (lang: string) => {
        try {
            const response = await import(`../translations/${lang}/translations.json`);
            setTranslations(response);
        } catch (error) {
            console.error(`Error loading ${lang} translations`, error);
        }
    };

    const changeLanguage = async (lang: string) => {
        await fetch('/api/set-language', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ language: lang }),
        });

        // Update the language state
        setLanguage(lang);

        // Save the new language to cookies via server-side (using API route)
        document.cookie = `language=${lang}; path=/; max-age=${30 * 24 * 60 * 60}`; // Set a cookie for 30 days

        // Reload the page to reflect the language change
        window.location.reload();
    };

    const t = (key: string): string => translations[key] || key;

    return { t, language, changeLanguage };
};
