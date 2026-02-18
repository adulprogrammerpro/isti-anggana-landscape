import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { TreePine, Droplets, Cloud, Flower } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

import serviceTropical from "@/assets/service-tropical.jpg";
import servicePond from "@/assets/service-pond.jpg";
import serviceRainforest from "@/assets/service-rainforest.jpg";
import serviceVertical from "@/assets/service-vertical.jpg";

const icons = [TreePine, Droplets, Cloud, Flower];
const images = [serviceTropical, servicePond, serviceRainforest, serviceVertical];

const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { t } = useLanguage();

  return (
    <section id="layanan" ref={ref} className="section-padding bg-forest">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-gold font-body text-sm tracking-[0.3em] uppercase mb-3">{t.services.label}</p>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-forest-foreground mb-4">
            {t.services.titleStart}<span className="italic text-gold">{t.services.titleHighlight}</span>{t.services.titleEnd}
          </h2>
          <p className="text-forest-foreground/60 font-body text-base max-w-xl mx-auto">
            {t.services.description}
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.services.items.map((service, i) => {
            const Icon = icons[i];
            const image = images[i];
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.15 * i }}
                className="group relative rounded-2xl overflow-hidden hover-lift cursor-pointer"
              >
                <div className="aspect-[3/4] relative">
                  <img
                    src={image}
                    alt={service.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-forest via-forest/30 to-transparent" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="w-10 h-10 rounded-full bg-gold/20 backdrop-blur-sm flex items-center justify-center mb-3">
                    <Icon className="w-5 h-5 text-gold" />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-forest-foreground mb-2">{service.title}</h3>
                  <p className="text-forest-foreground/70 font-body text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {service.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
