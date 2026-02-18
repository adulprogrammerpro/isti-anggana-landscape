import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { TreePine, Droplets, Cloud, Flower } from "lucide-react";

import serviceTropical from "@/assets/service-tropical.jpg";
import servicePond from "@/assets/service-pond.jpg";
import serviceRainforest from "@/assets/service-rainforest.jpg";
import serviceVertical from "@/assets/service-vertical.jpg";

const services = [
  {
    title: "Tropical Garden",
    desc: "Taman tropis rimbun dengan beragam perdu, pohon palem, dan tanaman eksotis yang menghadirkan suasana tropis asri.",
    icon: TreePine,
    image: serviceTropical,
  },
  {
    title: "Natural Pond",
    desc: "Kolam alami dengan air jernih yang dapat digunakan untuk berenang, dikelilingi bebatuan dan tanaman air.",
    icon: Droplets,
    image: servicePond,
  },
  {
    title: "Rainforest Garden",
    desc: "Konsep hutan hujan dengan lumut, pakis, dan air terjun mini yang membawa suasana hutan ke halaman Anda.",
    icon: Cloud,
    image: serviceRainforest,
  },
  {
    title: "Vertical Garden",
    desc: "Taman vertikal untuk lahan terbatas — living wall yang mengubah dinding kosong menjadi kanvas hijau.",
    icon: Flower,
    image: serviceVertical,
  },
];

const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="layanan" ref={ref} className="section-padding bg-forest">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-gold font-body text-sm tracking-[0.3em] uppercase mb-3">Layanan Kami</p>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-forest-foreground mb-4">
            Kami Wujudkan <span className="italic text-gold">Alam Impian</span> Anda
          </h2>
          <p className="text-forest-foreground/60 font-body text-base max-w-xl mx-auto">
            Menggabungkan inovasi teknologi arsitektur lanskap, teknik sipil, biologi dan ekologi konservasi.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 * i }}
              className="group relative rounded-2xl overflow-hidden hover-lift cursor-pointer"
            >
              <div className="aspect-[3/4] relative">
                <img
                  src={service.image}
                  alt={service.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest via-forest/30 to-transparent" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="w-10 h-10 rounded-full bg-gold/20 backdrop-blur-sm flex items-center justify-center mb-3">
                  <service.icon className="w-5 h-5 text-gold" />
                </div>
                <h3 className="font-serif text-xl font-bold text-forest-foreground mb-2">{service.title}</h3>
                <p className="text-forest-foreground/70 font-body text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {service.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
