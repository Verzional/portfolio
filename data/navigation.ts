export interface MenuItem {
  id: string;
  label: string;
  desc: string;
  href: string;
  external?: boolean;
}

export const menuItems: MenuItem[] = [
  {
    id: "projects",
    label: "Projects",
    desc: "Compendium of engineered applications and repositories.",
    href: "/projects",
  },
  {
    id: "experience",
    label: "Experience",
    desc: "Confidant network of professional roles and milestones.",
    href: "/experience",
  },
  {
    id: "skills",
    label: "Skills",
    desc: "Ability wheel of core technologies and frameworks.",
    href: "/skills",
  },
  {
    id: "socials",
    label: "Socials",
    desc: "Map of digital profiles and networking channels.",
    href: "/socials",
  },
  {
    id: "resume",
    label: "Resume",
    desc: "Official PDF dossier of engineering experience and metrics.",
    href: "/Valentino-Manuel-Gunawan-Resume.pdf",
    external: true,
  },
];
