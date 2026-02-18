import type { Translations } from "./id";

export const en: Translations = {
    navbar: {
        links: [
            { label: "Home", href: "#beranda" },
            { label: "About Us", href: "#tentang" },
            { label: "Services", href: "#layanan" },
            { label: "Portfolio", href: "#portofolio" },
            { label: "Contact", href: "#kontak" },
        ],
        cta: "Consult",
        ctaMobile: "Free Consultation",
    },

    hero: {
        subtitle: "Sustainability in Harmony",
        titleLine1: "Affordable",
        titleLine2: "Plants",
        description: "Bringing nature that harmonizes with your surroundings.",
        ctaPrimary: "Explore Our Works",
        ctaSecondary: "Free Consultation",
    },

    philosophy: {
        label: "Our Philosophy",
        titleStart: "Sustainability in ",
        titleHighlight: "Harmony",
        description:
            "At Isti Anggana, we believe that people are shaped by their environment. Everyone needs a personal space — not just nature, but nature that aligns with your story.",
        features: [
            {
                title: "Personal Approach",
                desc: "Every garden has a soul that resonates with its owner. We approach each client with deep understanding.",
            },
            {
                title: "Micro Climate",
                desc: "We engineer micro climates so your garden flourishes lushly without complicated maintenance.",
            },
            {
                title: "Sustainability",
                desc: "Over time, your garden will grow more lush, the water clearer, and butterflies and dragonflies will come.",
            },
        ],
    },

    services: {
        label: "Our Services",
        titleStart: "We Create Your ",
        titleHighlight: "Dream Nature",
        titleEnd: "",
        description:
            "Combining landscape architecture technology innovation, civil engineering, biology, and conservation ecology.",
        items: [
            {
                title: "Tropical Garden",
                desc: "Lush tropical gardens with diverse shrubs, palm trees, and exotic plants that create a serene tropical atmosphere.",
            },
            {
                title: "Natural Pond",
                desc: "Natural ponds with crystal-clear water suitable for swimming, surrounded by rocks and aquatic plants.",
            },
            {
                title: "Rainforest Garden",
                desc: "Rainforest concepts with moss, ferns, and mini waterfalls that bring the forest atmosphere to your yard.",
            },
            {
                title: "Vertical Garden",
                desc: "Vertical gardens for limited spaces — living walls that transform blank walls into green canvases.",
            },
        ],
    },

    portfolio: {
        label: "Portfolio",
        titleStart: "Our ",
        titleHighlight: "Best",
        titleEnd: " Works",
        filters: {
            all: "All",
            tropical: "Tropical",
            pond: "Pond",
            vertical: "Vertical",
            rainforest: "Rainforest",
        },
    },

    instagram: {
        titleStart: "Follow us ",
        titleHighlight: "@istianggana.landscape",
    },

    footer: {
        description:
            "Bringing nature that harmonizes with your surroundings. Create Your Nature.",
        contactTitle: "Contact Us",
        locationTitle: "Location",
        locationMapTitle: "Isti Anggana Landscape Location",
        copyright: "Isti Anggana Landscape. All rights reserved.",
    },
};
