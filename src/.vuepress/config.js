const resolve = require("vuepress-theme-hope/resolve");

module.exports = resolve({
  title: "Theme Demo",
  description: "vuepress-theme-hope 的 demo",

  headOption: {
    icon: "/favicon.ico",
    pwa: {
      manifest: "/manifest.json",
      themeColor: "#46bd87",
      appleStatusBarColor: "black",
      appleIcon: "/img/icon/appleIcon152.png",
      msTileImage: "/img/icon/msIcon144.png",
      msTileColor: "#ffffff",
    },
  },
  head: [
    // pwa相关
    [
      "link",
      {
        rel: "mask-icon",
        href: "/icons/safari-pinned-tab.svg",
        color: "#46bd87",
      },
    ],
  ],

  base: "/vuepress-theme-hope-template/",
  temp: "./node_modules/.temp/test",
  dest: "./dist",

  locales: {
    "/en/": {
      title: "Theme Demo",
      description: "A demo for vuepress-theme-hope",
    },
  },

  extraWatchFiles: [
    ".vuepress/config/navBar.js",
    ".vuepress/config/sideBar.js",
    ".vuepress/config/theme.js",
  ],

  themeConfig: {
    logo: "/logo.svg",

    nav: [
      { text: "主页", link: "/", icon: "homefill" },
      {
        text: "组件",
        icon: "extension",
        link: "/component/",
      },
      {
        text: "主题文档",
        link: "https://vuepress-theme.mrhope.site",
        icon: "note",
      },
    ],
    sidebar: {
      "/": [
        "",
        "test",
        "encrypt",
        {
          title: "组件测试",
          icon: "extension",
          prefix: "component/",
          children: ["", "disable", "pageInfo"],
        },
      ],
    },

    locales: {
      "/en/": {
        nav: [
          { text: "Home", link: "/en/", icon: "homefill" },
          {
            text: "Docs",
            link: "https://vuepress-theme.mrhope.site/en/",
            icon: "note",
          },
        ],
        sidebar: [""],
      },
    },

    author: "Mr.Hope",

    blog: {
      intro: "/test.html",
      sidebarDisplay: "mobile",
      links: {
        Zhihu: "https://zhihu.com",
        Baidu: "https://baidu.com",
        Github: "https://github.com",
      },
    },

    markdown: {
      enableAll: true,
    },

    comment: {
      type: "valine",
      appId: "msnseO76haIVIGvfJ10BKnpv-gzGzoHsz",
      appKey: "9QMulKhu7EDp1va0TYXR2PrI",
    },

    footer: {
      content: "默认页脚",
    },

    encrypt: {
      global: "01311031",
      config: {
        "/en/": ["1234", "5678"],
        "/test/detail/": "1234",
        "/test/footer/default": "5678",
      },
    },

    copyright: {
      status: "global",
    },

    hostname: "https://mister-hope.github.io/vuepress-theme-hope-template",

    repo: "https://github.com/mister-hope/vuepress-theme-hope",
    repoLabel: "Github",
  },
});
