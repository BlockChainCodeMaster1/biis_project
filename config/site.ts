export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "BIIS",
  description: "BIIS",
  navItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Product",
      href: "/",
    },
    {
      label: "Tools",
      href: "/",
    },
    {
      label: "Docs",
      href: "/",
    },
  ],
  navMenuItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Product",
      href: "/product",
    },
    {
      label: "Tools",
      href: "/tools",
    },
    {
      label: "Docs",
      href: "/docs",
    },
  ],
  links: {
    github: "https://github.com/nextui-org/nextui",
    twitter: "https://twitter.com/BIIS_official",
    telegram: "https://t.me/Biis_Community",
    docs: "https://doc.biis.io",
    discord: "https://discord.gg/9b6yyZKmH4",
    sponsor: "https://patreon.com/jrgarciadev",
  },
};
