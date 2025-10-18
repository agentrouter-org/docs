import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "AgentRouter 接入说明",
  description: "AgentRouter 接入说明",
  lastUpdated: true,
  sitemap: {
    hostname: "https://docs.agentrouter.org",
  },
  
  locales: {
    root: {
      label: '中文',
      lang: 'zh',
    },
    fr: {
      label: 'Français',
      lang: 'fr',
      link: '/fr/',
      title: "Guide d'intégration AgentRouter",
      description: "Guide d'intégration AgentRouter",
      themeConfig: {
        lastUpdated: {
          text: "Dernière mise à jour",
        },
        nav: [
          { text: "Accueil", link: "/fr/" },
          {
            text: "S'inscrire à AgentRouter",
            link: "https://agentrouter.org/register?aff=IPN5",
          },
          {
            text: "Suivez-nous sur X",
            link: "https://x.com/agentrouter",
          },
          { text: "Démarrage rapide", link: "/fr/start" },
          {
            text: "Guide des outils",
            items: [
              { text: "Claude Code", link: "/fr/start" },
              { text: "OpenAI Codex", link: "/fr/codex" },
              { text: "Gemini Cli", link: "/fr/gemini" },
              { text: "RooCode", link: "/fr/roocode" },
              { text: "Qwen Code", link: "/fr/qwencode" },
            ],
          },
        ],
        sidebar: [
          {
            text: "Démarrage rapide",
            items: [
              { text: "Utiliser avec Claude Code", link: "/fr/start" },
              { text: "Utiliser avec Codex", link: "/fr/codex" },
              { text: "Utiliser avec Gemini Cli", link: "/fr/gemini" },
              { text: "Utiliser avec RooCode", link: "/fr/roocode" },
              { text: "Utiliser avec Kilocode", link: "/fr/kilocode" },
              { text: "Utiliser avec Qwen Code", link: "/fr/qwencode" },
            ],
          },
          {
            text: "Contact",
            items: [
              { text: "Contactez-nous", link: "/fr/contact" },
            ],
          },
        ],
      },
    },
  },
  
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    lastUpdated: {
      text: "上次更新",
    },
    search: {
      provider: "local",
    },
    nav: [
      { text: "首页", link: "/" },
      {
        text: "注册 AgentRouter",
        link: "https://agentrouter.org/register?aff=IPN5",
      },
      {
        text: "在 X 上关注我",
        link: "https://x.com/agentrouter",
      },
      { text: "快速开始", link: "/start" },
      {
        text: "工具指南",
        items: [
          { text: "Claude Code", link: "/start" },
          { text: "OpenAI Codex", link: "/codex" },
          { text: "Gemini Cli", link: "/gemini" },
          { text: "RooCode", link: "/roocode" },
          { text: "Qwen Code", link: "/qwencode" },
        ],
      },
    ],
    footer: {
      copyright: "AgentRouter.org",
    },
    sidebar: [
      {
        text: "快速开始",
        items: [
          { text: "在 Claude Code 中使用", link: "/start" },
          { text: "在 Codex 中使用", link: "/codex" },
          { text: "在 Gemini Cli 中使用", link: "/gemini" },
          { text: "在 RooCode 中使用", link: "/roocode" },
          { text: "在 Kilocode 中使用", link: "/kilocode" },
          { text: "在 Qwen Code 中使用", link: "/qwencode" },
        ],
      },
      {
        text: "联系方式",
        items: [
          { text: "联系我们", link: "/contact" },
        ],
      },
    ],
  },
});