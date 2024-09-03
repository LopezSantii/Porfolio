import { Icons } from "@/components/icons";
import { HomeIcon } from "lucide-react";

export const DATA = {
  name: "Santiago Lopez",
  initials: "SL",
  location: "Buenos Aires,ARG",
  locationLink: "#",
  description: "Frontend Developer",
  summary: `Soy un apasionado desarrollador front end con una obsesión por el diseño limpio y funcional. Mi amor por el código 💻 es solo igualado por mi pasión por los sneakers 👟 y el skate 🛹, que me han enseñado a apreciar tanto la creatividad como la precisión en cada truco y en cada línea de código.
  `,
  avatarUrl: "/me.JPG",

  navbar: [{ href: "/", icon: HomeIcon, label: "Home" }],
  contact: {
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/LopezSantii",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/santiago-lopez-3962a4234/",
        icon: Icons.linkedin,

        navbar: true,
      },

      Email: {
        name: "Send Email",
        url: "mailto:santilopez14301@gmail.com",
        icon: Icons.email,
        navbar: true,
      },
      Tel: {
        name: "Whatsapp",
        url: "https://web.whatsapp.com/send?phone=1123895213",
        icon: Icons.whatsapp,
        navbar: true,
      },
    },
  },
  education: [
    {
      school: "Coder House",
      href: "https://www.coderhouse.com/ar/certificados/6544302f5347d0001941c8f8?lang=es",
      degree: "Desarrollo Backend",
      logoUrl: "/coderhouse.png",
      start: "06/2024",
      end: "Actualidad",
    },
    {
      school: "Coder House",
      href: "https://www.coderhouse.com/ar/certificados/6544302f5347d0001941c8f8?lang=es",
      degree: "Desarrollo Frontend",
      logoUrl: "/coderhouse.png",
      start: "03/2023",
      end: "09/2023",
    },
  ],
  skills: [
    "tailwindcss",
    "mysql",
    "sass",
    "javascript",
    "react",
    "html5",
    "css3",
    "nextdotjs",
    "firebase",
    "vercel",
    "git",
    "bootstrap",
    "github",
    "gitlab",
    "visualstudiocode",
  ],
  skills1: [
    "Tailwind",
    "Mysql",
    "Sass",
    "Javascript",
    "React.js",
    "Html",
    "Css",
    "Next.js",
    "Firebase",
    "Git",
    "Bootstrap",
    "Github",
  ],
  projects: [
    {
      title: "StockMaster",
      href: "https://control-de-stock-frontend.vercel.app/dashboard",
      dates: "Ago 2024 - Present",
      active: true,
      description:
        "Desarrolle una app que centraliza el control de stock, visualiza movimientos y ayuda a potenciar decisiones con gráficos.",
      technologies: [
        "Next.js",
        "Javascript",
        "Node.js",
        "MySQL",
        "NextUi",
        "TailwindCSS",
        "Toastify",
      ],
      links: [
        {
          type: "Sitio Web",
          href: "https://control-de-stock-frontend.vercel.app/dashboard",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Repositorio",
          href: "https://github.com/LopezSantii/ControlDeStock",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://res.cloudinary.com/djr02xjsb/video/upload/v1724377200/stock_Hecho_con_Clipchamp_m6ygbb.mp4",
    },

    {
      title: "Protec Group",
      href: "https://protecgroup.com.ar/",
      dates: "Feb 2024 - Marz 2024",
      active: true,
      description:
        "Sitio web Ecommerce para una empresa líder en productos de protección personal.",
      technologies: [
        "React.js",
        "Javascript",
        "Firebase",
        "Bootstrap",
        "Toastify",
      ],
      links: [
        {
          type: "Sitio Web",
          href: "https://protecgroup.com.ar/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Repositorio",
          href: "https://github.com/LopezSantii/protecgroup",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://res.cloudinary.com/djr02xjsb/video/upload/v1724377153/protec_Hecho_con_Clipchamp_k4n9pb.mp4",
    },
    {
      title: "Groeien",
      href: "https://groeien.vercel.app/",
      dates: "Ago 2023",
      description: "Landing Page con elementos 3D para la empresa Groeien",
      active: true,
      technologies: ["React.js", "Javascript", "NextUi", "TailwindCSS"],
      links: [
        {
          type: "Sitio Web",
          href: "https://groeien.vercel.app//",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Repositorio",
          href: "https://github.com/LopezSantii/Groeien",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/groeien.jpg",
      video:
        "https://res.cloudinary.com/djr02xjsb/video/upload/v1724777702/groeien_qra6xc.mp4",
    },
    {
      title: "TaTeTi",
      href: "https://ta-te-ti-github-io.vercel.app/",
      dates: "Dic 2023",
      description: "Videojuego de tres en linea",
      active: true,
      technologies: ["React.js", "Javascript", "Css"],
      links: [
        {
          type: "Sitio Web",
          href: "https://ta-te-ti-github-io.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Repositorio",
          href: "https://github.com/LopezSantii/TaTeTi.github.io",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/tateti.webp",
      video: "",
    },
    {
      title: "Salud Gourmet",
      href: "https://saludgourmet.com.ar/",
      dates: "Dic 2023",
      description: "Landing Page para la empresa Salud Gourmet",
      active: true,
      technologies: ["Html", "Css", "Bootstrap"],
      links: [
        {
          type: "Sitio Web",
          href: "https://saludgourmet.com.ar/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Repositorio",
          href: "https://github.com/LopezSantii/SaludGourmet.github.io/tree/master",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/saludgourmet.png",
      video: "",
    },
  ],
} as const;
