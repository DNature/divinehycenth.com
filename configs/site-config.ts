const baseUrl = 'https://github.com/dnature/divinehycenth.com';

const siteConfig = {
  copyright: `Copyright © ${new Date().getFullYear()} Divine Hycenth. All`,
  author: {
    name: 'Divine Hycenth',
    github: 'https://github.com/dnature',
    twitter: 'https://twitter.com/DivineHycenth',
    linkedin: 'https://linkedin.com/in/dnature',
    email: 'contact@divinehycenth.com',
    website: 'https://divinehycenth.com',
  },
  repo: {
    url: baseUrl,
    editUrl: `${baseUrl}/blog/master`,
  },
  discord: {
    url: 'https://discord.gg/ZA7NgwkeQ4',
  },
  seo: {
    title: 'Divine Hycenth',
    titleTemplate: '%s - Divine Hycenth',
    description:
      'Hi 👋,  I’m a software engineer, UI/UX Designer, and a Football lover',
    siteUrl: 'https://divinehycenth.com',
    twitter: {
      handle: '@DivineHycenth',
      site: '@divinehycenth',
      cardType: 'summary_large_image',
    },
    openGraph: {
      type: 'website',
      locale: 'en_US',
      url: 'https://divinehycenth.com',
      title: 'Divine Hycenth',
      description:
        'Modular React based component library with built in support for tailwindcss',
      site_name:
        'Divine Hycenth',
      images: [
        {
          url: 'https://res.cloudinary.com/dnature/image/upload/v1614875982/og-image_afxyyw.png',
          width: 1240,
          height: 480,
          alt:
            'Divine Hycenth',
        },
        {
          url: 'https://res.cloudinary.com/dnature/image/upload/v1614875796/twitter-og-image_zwftlq.png',
          width: 1012,
          height: 506,
          alt:
            'Divine Hycenth',
        },
      ],
    },
  },
  article: {
    title: 'Divine Hycenth',
    titleTemplate: '%s - Divine Nature',
    description:
      'Hi 👋,  I’m a software engineer, UI/UX Designer, and a Football lover',
    siteUrl: 'https://divinehycenth.com',
    twitter: {
      handle: '@DivineHycenth',
      site: '@divinehycenth',
      cardType: 'summary_large_image',
    },
    openGraph: {
      type: 'article',
      locale: 'en_US',
      images: [
        {
          url: 'https://res.cloudinary.com/dnature/image/upload/v1614875982/og-image_afxyyw.png',
          width: 1240,
          height: 480,
          alt:
            'Divine Hycenth',
        },
        {
          url: 'https://res.cloudinary.com/dnature/image/upload/v1614875796/twitter-og-image_zwftlq.png',
          width: 1012,
          height: 506,
          alt:
            'Divine Hycenth',
        },
      ],
    },
  },
};

export default siteConfig;
