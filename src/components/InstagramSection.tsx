import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Instagram } from "lucide-react";

import p1 from "@/assets/portfolio-1.jpg";
import p2 from "@/assets/service-tropical.jpg";
import p3 from "@/assets/portfolio-3.jpg";
import p4 from "@/assets/service-pond.jpg";
import p5 from "@/assets/portfolio-5.jpg";
import p6 from "@/assets/service-rainforest.jpg";

const photos = [p1, p2, p3, p4, p5, p6];

const InstagramSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding bg-forest">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-10"
        >
          <Instagram className="w-8 h-8 text-gold mx-auto mb-3" />
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-forest-foreground">
            Follow us <span className="text-gold">@istianggana.landscape</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {photos.map((photo, i) => (
            <motion.a
              key={i}
              href="https://www.instagram.com/istianggana.landscape/"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative aspect-square rounded-lg overflow-hidden"
            >
              <img src={photo} alt="Instagram post" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 bg-forest/0 group-hover:bg-forest/50 transition-colors duration-300 flex items-center justify-center">
                <Instagram className="w-8 h-8 text-forest-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InstagramSection;
