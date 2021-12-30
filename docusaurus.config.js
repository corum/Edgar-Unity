const versions = require('./versions.json');
const getBookmarks = require("./src/bookmarks")
const [latestVersion] = require('./versions.json');
const remarkBookmarks = require('remark-bookmarks')
const remarkHelpers = require('@ondrej-nepozitek/remark-helpers/images');
const path = require('path');

module.exports = {
  title: "Edgar - Unity",
  tagline:
    "Configurable 2D procedural level generator for Unity",
  url: "https://ondrejnepozitek.github.io",
  baseUrl: "/Edgar-Unity/",
  favicon: "img/favicon.ico",
  organizationName: "OndrejNepozitek", // Usually your GitHub org/user name.
  projectName: "Edgar-Unity", // Usually your repo name.
  onBrokenLinks: "warn",
  themeConfig: {
    googleAnalytics: {
      trackingID: 'UA-31904365-17',
    },
    algolia: {
      apiKey: 'b81526b8f4babcdebfa613315ee05014',
      indexName: 'edgar-unity',
      searchParameters: {
        facetFilters: [`version:${versions[0]}`],
      },
    },
    announcementBar: {
      id: 'support_us',
      content:
        'Check out the PRO version of the generator at <a href="https://ondrejnepozitek.itch.io/edgar-pro" target="_blank">itch.io</a>!',
      backgroundColor: '#fafbfc', // Defaults to `#fff`.
      textColor: '#091E42', // Defaults to `#000`.
    },
    navbar: {
      hideOnScroll: false,
      title: "Edgar - Unity",
      items: [
        { to: "versions", label: `v${latestVersion}`, position: "left" },
        {
          label: 'Docs',
          to: 'docs/introduction',
          position: 'right',
          activeBaseRegex: `docs/(?!next/(support|team|resources))`,
          items: [
            {
              label: versions[0],
              to: 'docs/introduction',
              activeBaseRegex: `docs/(?!${versions.join('|')}|next)`,
            },
            ...versions.slice(1, 3).map((version) => ({
              label: version,
              to: `docs/${version}/introduction`,
            })),
            {
              label: 'Master/Unreleased',
              to: 'docs/next/introduction',
              activeBaseRegex: `docs/next/(?!support|team|resources)`,
            },
          ],
        },
        {
          label: "Docs for 3D version (preview)", 
          to: 'docs/next/3d/introduction',
          position: "right"
        },
        {
          href: "https://github.com/OndrejNepozitek/Edgar-Unity/",
          label: "GitHub", 
          position: "right"
        }
      ]
    },
    prism: {
      defaultLanguage: "csharp",
      theme: require("./src/theme/prism-darcula")
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Introduction",
              to: "docs/introduction"
            },
          ]
        },
        {
          title: "Community",
          items: [
            {
              label: "Twitter",
              href: "https://twitter.com/OndrejNepozitek"
            },
          ]
        },
        {
          title: "Social",
          items: [
            {
              label: "Blog",
              href: "https://ondra.nepozitek.cz/blog/"
            },
            {
              label: "GitHub",
              href: "https://github.com/OndrejNepozitek/Edgar-Unity"
            },
          ]
        }
      ],
      copyright: "Copyright © " + new Date().getFullYear() + " Ondřej Nepožitek"
    }
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarCollapsible: false,
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: "https://github.com/OndrejNepozitek/Edgar-Unity/tree/docusaurus",
          beforeDefaultRemarkPlugins: [
            [
              remarkHelpers,
              {

              }
            ]
          ],
          remarkPlugins: [
            [
              remarkBookmarks, { 
                bookmarks: getBookmarks(),
              }
            ]
          ],
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css")
        }
      }
    ]
  ],
  plugins: [require.resolve("./src/customPLugin.js")],
};
