import { createContext, useContext, useState, useEffect, type ReactNode } from "react";
import { id, en, type Translations, type Locale } from "@/i18n";

interface LanguageContextType {
    locale: Locale;
    setLocale: (locale: Locale) => void;
    t: Translations;
}

const translations: Record<Locale, Translations> = { id, en };

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const STORAGE_KEY = "isti-anggana-lang";

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
    const [locale, setLocaleState] = useState<Locale>(() => {
        try {
            const saved = localStorage.getItem(STORAGE_KEY);
            if (saved === "id" || saved === "en") return saved;
        } catch {
            // localStorage might not be available
        }
        return "id";
    });

    const setLocale = (newLocale: Locale) => {
        setLocaleState(newLocale);
        try {
            localStorage.setItem(STORAGE_KEY, newLocale);
        } catch {
            // ignore
        }
    };

    useEffect(() => {
        document.documentElement.lang = locale;
    }, [locale]);

    return (
        <LanguageContext.Provider value={{ locale, setLocale, t: translations[locale] }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = (): LanguageContextType => {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error("useLanguage must be used within a LanguageProvider");
    }
    return context;
};
