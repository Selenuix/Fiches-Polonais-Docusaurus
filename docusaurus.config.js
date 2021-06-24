const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Fiches-Polonais',
  tagline: 'Un moyen rapide de retrouver mes notes.',
  url: 'https://polonais.selenuix.tools',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'Selenuix', // Usually your GitHub org/user name.
  projectName: 'Fiches-Polonais-Docusaurus', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Fiches Polonais',
      logo: {
        alt: 'Fiches Polonais Logo',
        src: 'img/logo.svg',
      },
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/Selenuix',
            }
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} CISZEK Anthony. Built with Docusaurus.`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs:false,
        blog: {
          showReadingTime: true,
          path: './blog',
          routeBasePath: '/',
          blogTitle: 'Fiches-Polonais',
          blogDescription: 'Un moyen rapide de retrouver mes notes.',
          // Please change this to your repo.
          editUrl:
            'https://github.com/Selenuix/Fiches-Polonais/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
