interface TrustedProviderDataType {
    number: string;
    title: string;
    description: string;
    image: string;
}

export const logos = [
    { src: "/logos/1.svg", alt: "BDMS" },
    { src: "/logos/2.svg", alt: "Bangkok Hospital" },
    { src: "/logos/3.svg", alt: "Samitivej" },
    { src: "/logos/4.svg", alt: "BNH Hospital" },
    { src: "/logos/5.svg", alt: "Phyathai" },
    { src: "/logos/6.svg", alt: "Paolo" },
    { src: "/logos/7.svg", alt: "Royal Hospital" },
    { src: "/logos/8.svg", alt: "BDMS Wellness Clinic" },
]

export const values: TrustedProviderDataType[] = [
    {
        number: "01",
        title: "VALUE",
        description:
            "Access to international healthcare services with cost transparency and comparative affordability across regions.",
        image: "/carousel-1.png",
    },
    {
        number: "02",
        title: "QUALITY",
        description:
            "Care delivered across a wide range of medical specialties, supported by established clinical standards and infrastructure.",
        image: "/carousel-2.png",
    },
    {
        number: "03",
        title: "PRIORITY IS YOU",
        description: "A patient-focused approach designed to support timely access, coordination, and continuity of care.",
        image: "/carousel-3.png",
    },
]
