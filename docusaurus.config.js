module.exports = {
  title: 'Ma Documentation',
  tagline: 'Mon site de doc',
  url: 'https://newgeko.github.io',
  baseUrl: '/ma-doc/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'newgeko',
  projectName: 'ma-doc',
  presets: [
    [
      'classic',
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/', // Le site affichera la doc directement sur la page d'accueil
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],
  themeConfig: ({
    navbar: {
      title: 'Ma Doc',
      items: [],
    },
  }),
};
