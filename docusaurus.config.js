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
        alt: "Hashnode Support Logo",
        src:
          "https://cdn.hashnode.com/res/hashnode/image/upload/v1611856421169/zcx6qvf_J.png?auto=compress",
        srcDark:
          "https://cdn.hashnode.com/res/hashnode/image/upload/v1611856682886/N1xqQtDit.png?auto=compress",
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
      apiKey: "32514d95362b1c59ce737741ceb25cdf",
      indexName: "d",
      appId: "ACSA4UXCDJ",
      // Optional: see doc section bellow
      contextualSearch: true,

      // Optional: Algolia search parameters
      searchParameters: {},

      //... other Algolia params
    },
    gtag: {
      trackingID: 'UA-69832919-13',
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
          editUrl: "https://github.com/ssangyongsports/support-1/edit/main",
        },

        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
