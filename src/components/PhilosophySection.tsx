import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Leaf, Droplets, TreePine } from "lucide-react";

const features = [
  {
    icon: Leaf,
    title: "Pendekatan Personal",
    desc: "Setiap taman memiliki ruh yang bersenyawa dengan pemiliknya. Kami mendekati setiap klien secara mendalam.",
  },
  {
    icon: Droplets,
    title: "Micro Climate",
    desc: "Kami merekayasa iklim mikro agar taman tumbuh rimbun tanpa perawatan yang rumit.",
  },
  {
    icon: TreePine,
    title: "Sustainability",
    desc: "Semakin lama, taman Anda akan semakin rimbun, airnya semakin jernih, kupu-kupu dan capung berdatangan.",
  },
];

const PhilosophySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="tentang" ref={ref} className="section-padding botanical-bg relative overflow-hidden">
      {/* Decorative botanical sketch overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 400'%3E%3Cpath d='M200 50 Q220 100 200 150 Q180 200 200 250 Q220 300 200 350' fill='none' stroke='%23333' stroke-width='1'/%3E%3Cpath d='M200 150 Q250 130 280 150' fill='none' stroke='%23333' stroke-width='1'/%3E%3Cpath d='M200 150 Q150 130 120 150' fill='none' stroke='%23333' stroke-width='1'/%3E%3Cpath d='M200 200 Q260 180 290 200' fill='none' stroke='%23333' stroke-width='1'/%3E%3Cpath d='M200 200 Q140 180 110 200' fill='none' stroke='%23333' stroke-width='1'/%3E%3Cpath d='M200 250 Q250 230 270 250' fill='none' stroke='%23333' stroke-width='1'/%3E%3Cpath d='M200 250 Q150 230 130 250' fill='none' stroke='%23333' stroke-width='1'/%3E%3C/svg%3E")`,
          backgroundSize: "300px",
        }}
      />

      <div className="container mx-auto max-w-5xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-3">Filosofi Kami</p>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground mb-6">
            Sustainability in <span className="italic text-primary">Harmony</span>
          </h2>
          <p className="text-muted-foreground font-body text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Di Isti Anggana, kami percaya bahwa manusia terbentuk dari lingkungannya. 
            Setiap orang membutuhkan lingkungan yang personal — bukan sekedar alam, 
            tapi alam yang sesuai dengan cerita Anda.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.15 }}
              className="bg-card/60 backdrop-blur-sm rounded-2xl p-8 text-center hover-lift border border-border/50"
            >
              <div className="w-14 h-14 mx-auto mb-5 rounded-full bg-primary/10 flex items-center justify-center">
                <feature.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-foreground mb-3">{feature.title}</h3>
              <p className="text-muted-foreground font-body text-sm leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PhilosophySection;
