import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";
import portfolio3 from "@/assets/portfolio-3.jpg";
import portfolio4 from "@/assets/portfolio-4.jpg";
import portfolio5 from "@/assets/portfolio-5.jpg";
import portfolio6 from "@/assets/portfolio-6.jpg";

type Category = "all" | "tropical" | "pond" | "vertical" | "rainforest";

const projects = [
  { src: portfolio1, title: "Rumah Kemang", category: "tropical" as Category },
  { src: portfolio2, title: "Office Isti Anggana", category: "vertical" as Category },
  { src: portfolio3, title: "Bakoel Koffie Bintaro", category: "rainforest" as Category },
  { src: portfolio4, title: "Rumah Depok", category: "pond" as Category },
  { src: portfolio5, title: "Vertical Garden Menteng", category: "vertical" as Category },
  { src: portfolio6, title: "Rumah Kebon Jeruk", category: "rainforest" as Category },
];

const filters: { label: string; value: Category }[] = [
  { label: "Semua", value: "all" },
  { label: "Tropical", value: "tropical" },
  { label: "Pond", value: "pond" },
  { label: "Vertical", value: "vertical" },
  { label: "Rainforest", value: "rainforest" },
];

const PortfolioSection = () => {
  const [active, setActive] = useState<Category>("all");
  const [lightbox, setLightbox] = useState<number | null>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const filtered = active === "all" ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="portofolio" ref={ref} className="section-padding">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <p className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-3">Portofolio</p>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground mb-4">
            Karya <span className="italic text-primary">Terbaik</span> Kami
          </h2>
        </motion.div>

        {/* Filter buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap justify-center gap-3 mb-10"
        >
          {filters.map((f) => (
            <button
              key={f.value}
              onClick={() => setActive(f.value)}
              className={`px-5 py-2 rounded-full text-sm font-body font-bold transition-all duration-300 ${
                active === f.value
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "bg-card text-muted-foreground hover:bg-primary/10 border border-border"
              }`}
            >
              {f.label}
            </button>
          ))}
        </motion.div>

        {/* Grid */}
        <motion.div layout className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="group relative aspect-square rounded-xl overflow-hidden cursor-pointer hover-lift"
                onClick={() => setLightbox(projects.indexOf(project))}
              >
                <img
                  src={project.src}
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="font-serif text-sm md:text-base font-bold text-forest-foreground">{project.title}</p>
                  <p className="text-gold text-xs font-body uppercase tracking-wider">{project.category}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-forest/95 flex items-center justify-center p-4"
            onClick={() => setLightbox(null)}
          >
            <button
              className="absolute top-6 right-6 text-forest-foreground/80 hover:text-gold transition-colors"
              onClick={() => setLightbox(null)}
            >
              <X size={32} />
            </button>
            <motion.img
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              src={projects[lightbox].src}
              alt={projects[lightbox].title}
              className="max-w-full max-h-[85vh] object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
            <div className="absolute bottom-8 text-center">
              <p className="font-serif text-xl text-forest-foreground">{projects[lightbox].title}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default PortfolioSection;
