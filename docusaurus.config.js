module.exports = {
  title: "雙龍體育支援中心",
  tagline: "雙龍體育支援中心",
  url: "https://help.ssangyongsports.eu.org/",
  baseUrl: "/",
  onBrokenLinks: "ignore",
  onBrokenMarkdownLinks: "ignore",
  favicon:
    "https://uploads-ssl.webflow.com/62f0c37a3d1cea75603016a9/62f3230be726d3169ad48765_62ccdcf4ce0fa3341567b2e5_%E6%9C%AA%E5%91%BD%E5%90%8D%E8%A8%AD%E8%A8%88%20(1)%20(1).jpg",
  organizationName: "ssangyongsports", // Usually your GitHub org/user name.
  projectName: "support-1", // Usually your repo name.
  themeConfig: {
    navbar: {
      // title: '雙龍體育',
      logo: {
        alt: "雙龍體育",
        src:
          "https://uploads-ssl.webflow.com/62ccd191dc4db47eff558608/62ccd1d28b3c0f4a9a2a262c_logo2.png",
        srcDark:
          "https://uploads-ssl.webflow.com/62ccd191dc4db47eff558608/62ccd1d28b3c0f4a9a2a262c_logo2.png",
      },
      items: [
        {
          href: "https://www.ssangyongsports.eu.org/",
          label: "回官網",
          position: "right",
        },
      ],
    },
    algolia: {
      apiKey: "f3d2cff14e6378c5fe13fc65e074a7a4",
      indexName: "docs",
      appId: "HZOP3IN8L1",
      // Optional: see doc section bellow
      contextualSearch: true,

      // Optional: Algolia search parameters
      searchParameters: {},

      //... other Algolia params
    },
    footer: {
      links: [
        {
          title: "與我們聯繫",
          items: [
            {
              label: "Email Us",
              href: "mailto:support@ssport.eu.org",
            },
            {
              label: "Twitter",
              href: "https://twitter.com/hashnode",
            },
            {
              label: "Discord",
              href: "https://discord.gg/qsAQfxX",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} 雙龍體育`,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: "https://github.com/ssangyongsports//edit/main",
        },

        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
