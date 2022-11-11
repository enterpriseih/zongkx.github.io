import { path } from "@vuepress/utils";
const { getChildren } = require("vuepress-sidebar-atuo")
import {getChildren1} from './a'

module.exports = {
  title: "raynor",
  description: "raynor's messy notebook.",

  head: [
    ["link", { rel: "icon", href: "/favicon.svg" }],
    [
      "meta",
      {
        name: "viewport",
        content: "width=device-width,initial-scale=1,user-scalable=no"
      }
    ]
  ],

  theme: path.resolve(__dirname, "./theme"),

  bundler: "@vuepress/vite",

  themeConfig: {
    logo: "/favicon.svg",

    repo: "zongkx/what-if",
    docsDir: "notes",
    docsBranch: "master",

    author: "zongkx",
    authorLink: "https://zxh.io",
    displayAllHeaders: false,
    navbar: [
      {
        text: "Java",
        link: "/java/"
      },
      {
        text: "Snippets",
        link: "/snippets/"
      }
    ],
    sidebar:{
      '/java/':[
        {
          title:'11',
          collapsable: false,
          sidebarDepth: 1,
          children: getChildren('./notes/java/')
        }
      ]
    }
  },
  plugins: [["@vuepress/plugin-search"], ["@renovamen/vuepress-plugin-katex"]],

  markdown: {
    extractHeaders: {
      level: [2, 3, 4, 5]
    },
    code: {
      lineNumbers: true
    }
  }
};
