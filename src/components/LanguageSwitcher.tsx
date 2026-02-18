import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

const LanguageSwitcher = () => {
    const { locale, setLocale } = useLanguage();

    const toggle = () => setLocale(locale === "id" ? "en" : "id");

    return (
        <button
            onClick={toggle}
            className="relative flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-forest-foreground/20 hover:border-gold/50 bg-forest-foreground/5 hover:bg-gold/10 transition-all duration-300 group"
            aria-label={`Switch to ${locale === "id" ? "English" : "Indonesian"}`}
        >
            <motion.span
                key={locale}
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 8 }}
                transition={{ duration: 0.25 }}
                className="text-base leading-none"
            >
                {locale === "id" ? "🇮🇩" : "🇬🇧"}
            </motion.span>
            <motion.span
                key={`label-${locale}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.25, delay: 0.05 }}
                className="text-xs font-body font-bold uppercase tracking-wider text-forest-foreground/70 group-hover:text-gold transition-colors duration-300"
            >
                {locale === "id" ? "ID" : "EN"}
            </motion.span>
        </button>
    );
};

export default LanguageSwitcher;
