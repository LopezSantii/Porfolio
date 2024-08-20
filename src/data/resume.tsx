import { Icons } from "@/components/icons";
import { HomeIcon } from "lucide-react";

export const DATA = {
  name: "Santiago Lopez",
  initials: "SL",
  url: "https://dillion.io",
  location: "Buenos Aires,ARG",
  locationLink: "https://www.google.com/maps/place/sanfrancisco",
  description: "Frontend Developer",
  summary: `Soy un apasionado desarrollador front end con una obsesión por el diseño limpio y funcional. Mi amor por el código 💻 es solo igualado por mi pasión por los sneakers 👟 y el skate 🛹, que me han enseñado a apreciar tanto la creatividad como la precisión en cada truco y en cada línea de código.
  `,
  avatarUrl: "/me.jpg",

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
      title: "Protec Group",
      href: "https://protecgroup.com.ar/",
      dates: "Feb 2024 - Marz 2024",
      active: true,
      description:
        "Sitio web Ecommerce para una empresa líder en productos de protección personal para el mundo empresarial.",
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
        "https://res.cloudinary.com/djr02xjsb/video/upload/v1724119325/protecGroup_Hecho_con_Clipchamp_1_xxe2e7.mp4",
    },
    {
      title: "Magic UI",
      href: "https://magicui.design",
      dates: "June 2023 - Present",
      active: true,
      description:
        "Designed, developed and sold animated UI components for developers.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://magicui.design",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/magicuidesign/magicui",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.magicui.design/bento-grid.mp4",
    },
    {
      title: "llm.report",
      href: "https://llm.report",
      dates: "April 2023 - September 2023",
      active: true,
      description:
        "Developed an open-source logging and analytics platform for OpenAI: Log your ChatGPT API requests, analyze costs, and improve your prompts.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "https://llm.report",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/dillionverma/llm.report",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.llm.report/openai-demo.mp4",
    },
    {
      title: "Automatic Chat",
      href: "https://automatic.chat",
      dates: "April 2023 - March 2024",
      active: true,
      description:
        "Developed an AI Customer Support Chatbot which automatically responds to customer support tickets using the latest GPT models.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "https://automatic.chat",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/automatic-chat.mp4",
    },
  ],
} as const;
