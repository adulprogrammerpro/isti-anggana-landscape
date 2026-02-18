import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="beranda" className="relative h-screen w-full overflow-hidden">
      {/* Background Image with overlay */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-forest/70 via-forest/40 to-forest/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full items-center justify-center px-4">
        <div className="text-center max-w-3xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-gold font-body text-sm tracking-[0.4em] uppercase mb-4"
          >
            Sustainability in Harmony
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-forest-foreground leading-tight mb-6"
          >
            Create Your
            <span className="block italic text-gold">Nature</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="text-forest-foreground/80 font-body text-base md:text-lg max-w-xl mx-auto mb-10 leading-relaxed"
          >
            Menghadirkan alam yang bersenyawa dengan tempat Anda berada.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button
              onClick={() => scrollTo("#portofolio")}
              className="bg-primary hover:bg-teal-light text-primary-foreground px-8 py-3.5 rounded-full font-body font-bold text-sm tracking-wide transition-all duration-300 hover:shadow-xl"
            >
              Jelajahi Karya Kami
            </button>
            <a
              href="https://wa.me/6285648276200"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-gold text-gold hover:bg-gold hover:text-forest px-8 py-3.5 rounded-full font-body font-bold text-sm tracking-wide transition-all duration-300"
            >
              Konsultasi Gratis
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <div className="w-6 h-10 border-2 border-forest-foreground/40 rounded-full flex justify-center pt-2">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-gold rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
