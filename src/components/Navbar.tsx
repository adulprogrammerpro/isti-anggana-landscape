import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/logo.png";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { useLanguage } from "@/contexts/LanguageContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = (href: string) => {
    setIsOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "glass-nav shadow-lg" : "bg-transparent"
        }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4 py-3 md:py-4">
        {/* Logo */}
        <a href="#beranda" className="flex items-center gap-2">
          <img src={logo} alt="Isti Anggana Landscape" className="h-10 w-10 md:h-12 md:w-12 rounded-full" />
          <div className="hidden sm:block">
            <span className="font-serif text-lg font-bold text-forest-foreground leading-none">Isti Anggana</span>
            <span className="block text-xs tracking-[0.3em] text-gold uppercase">Landscape</span>
          </div>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {t.navbar.links.map((link) => (
            <button
              key={link.href}
              onClick={() => handleClick(link.href)}
              className="text-sm font-body text-forest-foreground/80 hover:text-gold transition-colors duration-300 tracking-wide"
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* CTA + Language Switcher */}
        <div className="hidden md:flex items-center gap-3">
          <LanguageSwitcher />
          <a
            href="https://wa.me/6285648276200"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-primary hover:bg-teal-light text-primary-foreground px-5 py-2.5 rounded-full text-sm font-body font-bold transition-all duration-300 hover:shadow-lg"
          >
            {t.navbar.cta}
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-forest-foreground p-2"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass-nav overflow-hidden"
          >
            <div className="px-4 py-6 flex flex-col gap-4">
              {t.navbar.links.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleClick(link.href)}
                  className="text-left text-forest-foreground/90 hover:text-gold font-body text-base tracking-wide transition-colors"
                >
                  {link.label}
                </button>
              ))}
              <div className="flex items-center gap-3 mt-2">
                <LanguageSwitcher />
              </div>
              <a
                href="https://wa.me/6285648276200"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-primary text-primary-foreground px-5 py-3 rounded-full text-sm font-bold mt-2"
              >
                {t.navbar.ctaMobile}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
