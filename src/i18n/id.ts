export interface NavLink {
    label: string;
    href: string;
}

export interface Feature {
    title: string;
    desc: string;
}

export interface ServiceItem {
    title: string;
    desc: string;
}

export interface Translations {
    navbar: {
        links: NavLink[];
        cta: string;
        ctaMobile: string;
    };
    hero: {
        subtitle: string;
        titleLine1: string;
        titleLine2: string;
        description: string;
        ctaPrimary: string;
        ctaSecondary: string;
    };
    philosophy: {
        label: string;
        titleStart: string;
        titleHighlight: string;
        description: string;
        features: Feature[];
    };
    services: {
        label: string;
        titleStart: string;
        titleHighlight: string;
        titleEnd: string;
        description: string;
        items: ServiceItem[];
    };
    portfolio: {
        label: string;
        titleStart: string;
        titleHighlight: string;
        titleEnd: string;
        filters: {
            all: string;
            tropical: string;
            pond: string;
            vertical: string;
            rainforest: string;
        };
    };
    instagram: {
        titleStart: string;
        titleHighlight: string;
    };
    footer: {
        description: string;
        contactTitle: string;
        locationTitle: string;
        locationMapTitle: string;
        copyright: string;
    };
}

export const id: Translations = {
    navbar: {
        links: [
            { label: "Beranda", href: "#beranda" },
            { label: "Tentang Kami", href: "#tentang" },
            { label: "Layanan", href: "#layanan" },
            { label: "Portofolio", href: "#portofolio" },
            { label: "Kontak", href: "#kontak" },
        ],
        cta: "Konsultasi",
        ctaMobile: "Konsultasi Gratis",
    },

    hero: {
        subtitle: "Sustainability in Harmony",
        titleLine1: "Jual Tanaman",
        titleLine2: "Murah",
        description: "Menghadirkan alam yang bersenyawa dengan tempat Anda berada.",
        ctaPrimary: "Jelajahi Karya Kami",
        ctaSecondary: "Konsultasi Gratis",
    },

    philosophy: {
        label: "Filosofi Kami",
        titleStart: "Sustainability in ",
        titleHighlight: "Harmony",
        description:
            "Di Isti Anggana, kami percaya bahwa manusia terbentuk dari lingkungannya. Setiap orang membutuhkan lingkungan yang personal — bukan sekedar alam, tapi alam yang sesuai dengan cerita Anda.",
        features: [
            {
                title: "Pendekatan Personal",
                desc: "Setiap taman memiliki ruh yang bersenyawa dengan pemiliknya. Kami mendekati setiap klien secara mendalam.",
            },
            {
                title: "Micro Climate",
                desc: "Kami merekayasa iklim mikro agar taman tumbuh rimbun tanpa perawatan yang rumit.",
            },
            {
                title: "Sustainability",
                desc: "Semakin lama, taman Anda akan semakin rimbun, airnya semakin jernih, kupu-kupu dan capung berdatangan.",
            },
        ],
    },

    services: {
        label: "Layanan Kami",
        titleStart: "Kami Wujudkan ",
        titleHighlight: "Alam Impian",
        titleEnd: " Anda",
        description:
            "Menggabungkan inovasi teknologi arsitektur lanskap, teknik sipil, biologi dan ekologi konservasi.",
        items: [
            {
                title: "Tropical Garden",
                desc: "Taman tropis rimbun dengan beragam perdu, pohon palem, dan tanaman eksotis yang menghadirkan suasana tropis asri.",
            },
            {
                title: "Natural Pond",
                desc: "Kolam alami dengan air jernih yang dapat digunakan untuk berenang, dikelilingi bebatuan dan tanaman air.",
            },
            {
                title: "Rainforest Garden",
                desc: "Konsep hutan hujan dengan lumut, pakis, dan air terjun mini yang membawa suasana hutan ke halaman Anda.",
            },
            {
                title: "Vertical Garden",
                desc: "Taman vertikal untuk lahan terbatas — living wall yang mengubah dinding kosong menjadi kanvas hijau.",
            },
        ],
    },

    portfolio: {
        label: "Portofolio",
        titleStart: "Karya ",
        titleHighlight: "Terbaik",
        titleEnd: " Kami",
        filters: {
            all: "Semua",
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
            "Menghadirkan alam yang bersenyawa dengan tempat Anda berada. Create Your Nature.",
        contactTitle: "Hubungi Kami",
        locationTitle: "Lokasi",
        locationMapTitle: "Lokasi Isti Anggana Landscape",
        copyright: "Isti Anggana Landscape. All rights reserved.",
    },
};
