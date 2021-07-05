const lightCodeTheme = require("prism-react-renderer/themes/palenight")
const darkCodeTheme = require("prism-react-renderer/themes/dracula")

/** @type {import('@docusaurus/types').DocusaurusConfig} */

module.exports = {
  title: "Final Space API",
  tagline: `"That's Not A Cookie. And You Know That HUE, You Know That!"`,
  url: "https://finalspaceapi.com",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "lelouchB", // Usually your GitHub org/user name.
  projectName: "final-space-api", // Usually your repo name.
  themeConfig: {
    navbar: {
      title: "Final Space API",
      logo: {
        alt: "Final Space",
        src: "img/logo.png",
      },
      items: [
        {
          type: "doc",
          docId: "intro",
          label: "Docs",
          position: "right",
        },
        { to: "blog", label: "Blog", position: "right" },
        {
          href: "https://github.com/lelouchB/final-space-api",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Introduction",
              to: "/docs",
            },
            {
              label: "Character",
              to: "/docs/endpoints/character/",
            },
            {
              label: "Examples",
              to: "/docs/examples/react/",
            },
            {
              label: "About",
              to: "/docs/about/about",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Stack Overflow",
              href: "https://stackoverflow.com/questions/tagged/final-space-api",
            },
            {
              label: "Twitter",
              href: "https://twitter.com/noharashutosh",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "Blog",
              to: "/blog",
            },
            {
              label: "GitHub",
              href: "https://github.com/lelouchB/final-space-api",
            },
            {
              label: "Status",
              href: "https://status.finalspaceapi.com/",
            },
          ],
        },
      ],
      copyright: "Handcrafted with 🤍 by Me",
    },

    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
    googleAnalytics: { trackingID: "UA-179975321-1", anonymizeIP: true },
    metadatas: [
      {
        name: "title",
        content: "Hello from Final Space API | Final Space API",
      },
      { property: "og:locale", content: "en" },
      { property: "og:site_name", content: "Final Space API" },
      { property: "og:type", content: "website" },
      { property: "fb:app_id", content: "1883581578450612" },
      {
        name: "twitter:description",
        content:
          "Final Space API is a RESTful public API based on the animated television show Final Space.",
      },
      { name: "twitter:title", content: "Final Space API" },
      { name: "twitter:url", content: "https://finalspaceapi.com" },
      { name: "twitter:creator", content: "@noharashutosh" },
      { name: "twitter:site", content: "@noharashutosh" },
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "twitter:image:src",
        content: "https://finalspaceapi.com/img/wallpaper.jpg",
      },
    ],
    image: "img/wallpaper.jpg",
    twitterImage: "img/wallpaper.jpg",
    ogImage: "img/wallpaper.jpg",
    announcementBar: {
      id: "github_annoucement",
      content:
        "Let's Get Wild, How About You <span style='text-decoration:line-through;'>Buy</span> Get Me A <span style='text-decoration:line-through;'>Drink</span> <a href='https://github.com/lelouchB/final-space-api' target='_blank'>Star</a> - Gary Goodspeed 😗",
      backgroundColor: "#fff",
      textColor: "#1c1e21",
      isCloseable: true,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl:
            "https://github.com/lelouchB/final-space-api/edit/main/frontend/",
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
        },
        blog: {
          showReadingTime: true,
          editUrl:
            "https://github.com/lelouchB/final-space-api/edit/main/frontend/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
        sitemap: {
          changefreq: "weekly",
          priority: 0.5,
        },
      },
    ],
  ],
  themes: ["@docusaurus/theme-live-codeblock"],
  plugins: [
    [
      "@docusaurus/plugin-pwa",
      {
        debug: true,
        offlineModeActivationStrategies: [
          "appInstalled",
          "queryString",
          "standalone",
        ],
        pwaHead: [
          {
            tagName: "link",
            rel: "icon",
            href: "/img/pwa/chrome/chrome-extensionmanagementpage-48-48.png",
          },
          {
            tagName: "link",
            rel: "manifest",
            href: "/manifest.json", // your PWA manifest
          },
          {
            tagName: "meta",
            name: "theme-color",
            content: "rgb(37, 194, 160)",
          },
          {
            tagName: "meta",
            name: "apple-mobile-web-app-capable",
            content: "yes",
          },
          {
            tagName: "meta",
            name: "apple-mobile-web-app-status-bar-style",
            content: "#000",
          },
          {
            tagName: "link",
            rel: "apple-touch-icon",
            href: "/img/logo.png",
          },
          {
            tagName: "link",
            rel: "mask-icon",
            href: "/img/logo.svg",
            color: "rgb(37, 194, 160)",
          },
          {
            tagName: "meta",
            name: "msapplication-TileImage",
            content: "/img/logo.png",
          },
          {
            tagName: "meta",
            name: "msapplication-TileColor",
            content: "#000",
          },
        ],
      },
    ],
  ],
}
