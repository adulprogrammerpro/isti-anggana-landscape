import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Phone, Mail, Instagram } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <footer id="kontak" ref={ref} className="bg-forest border-t border-forest-foreground/10">
      <div className="container mx-auto max-w-6xl section-padding">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-5">
              <img src={logo} alt="Logo" className="w-12 h-12 rounded-full" />
              <div>
                <span className="font-serif text-lg font-bold text-forest-foreground block leading-none">Isti Anggana</span>
                <span className="text-xs tracking-[0.3em] text-gold uppercase">Landscape</span>
              </div>
            </div>
            <p className="text-forest-foreground/60 font-body text-sm leading-relaxed mb-6">
              Menghadirkan alam yang bersenyawa dengan tempat Anda berada. Create Your Nature.
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.instagram.com/istianggana.landscape/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-forest-foreground/10 flex items-center justify-center text-forest-foreground/60 hover:text-gold hover:bg-gold/10 transition-all"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://wa.me/6285648276200"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-forest-foreground/10 flex items-center justify-center text-forest-foreground/60 hover:text-gold hover:bg-gold/10 transition-all"
              >
                <Phone size={18} />
              </a>
            </div>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <h3 className="font-serif text-lg font-bold text-forest-foreground mb-5">Hubungi Kami</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin size={18} className="text-gold mt-0.5 shrink-0" />
                <p className="text-forest-foreground/70 font-body text-sm">
                  Jl. Pedati No.46 RT04/01, Mekarjaya, Depok, Jawa Barat
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={18} className="text-gold shrink-0" />
                <a href="tel:+6285648276200" className="text-forest-foreground/70 font-body text-sm hover:text-gold transition-colors">
                  0856 4827 6200
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={18} className="text-gold shrink-0" />
                <a href="mailto:istianggana@yahoo.com" className="text-forest-foreground/70 font-body text-sm hover:text-gold transition-colors">
                  istianggana@yahoo.com
                </a>
              </div>
            </div>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-1 md:col-span-2"
          >
            <h3 className="font-serif text-lg font-bold text-forest-foreground mb-5">Lokasi</h3>
            <div className="rounded-xl overflow-hidden aspect-video">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.2!2d106.83!3d-6.4!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMjQnMDAuMCJTIDEwNsKwNDknNDguMCJF!5e0!3m2!1sid!2sid!4v1600000000000!5m2!1sid!2sid"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Lokasi Isti Anggana Landscape"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-forest-foreground/10 py-6">
        <p className="text-center text-forest-foreground/40 font-body text-xs tracking-wide">
          © {new Date().getFullYear()} Isti Anggana Landscape. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
