import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lastUpdated: true,
  sitemap: {
    hostname: "https://docs.agentrouter.org",
  },

  locales: {
    // --- 中文版本 ---
    root: {
      label: "简体中文",
      lang: "zh-CN",
      title: "AgentRouter 接入说明",
      description: "AgentRouter 接入说明",
      themeConfig: {
        lastUpdated: {
          text: "上次更新",
        },
        search: {
          provider: "local",
        },
        nav: [
          { text: "首页", link: "/" },
          { text:"Discord",link:"https://discord.gg/mvjP2U3cY2"},
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
            items: [{ text: "联系我们", link: "/contact" }],
          },
        ],
        footer: {
          copyright: "AgentRouter.org",
        },
      },
    },

    // --- English Version ---
    en: {
      label: "English",
      lang: "en-US",
      title: "AgentRouter Integration Guide",
      description: "AgentRouter Integration Guide",
      themeConfig: {
        lastUpdated: {
          text: "Last Updated",
        },
        search: {
          provider: "local",
        },
        nav: [
          { text: "Home", link: "/en/" },
          {
            text: "Register AgentRouter",
            link: "https://agentrouter.org/register?aff=IPN5",
          },
           { text:"Discord",link:"https://discord.gg/mvjP2U3cY2"},
          {
            text: "Follow on X",
            link: "https://x.com/agentrouter",
          },
          { text: "Get Started", link: "/en/start" },
          {
            text: "Tool Guides",
            items: [
              { text: "Claude Code", link: "/en/start" },
              { text: "OpenAI Codex", link: "/en/codex" },
              { text: "Gemini Cli", link: "/en/gemini" },
              { text: "RooCode", link: "/en/roocode" },
              { text: "Qwen Code", link: "/en/qwencode" },
            ],
          },
        ],
        sidebar: [
          {
            text: "Get Started",
            items: [
              { text: "Use with Claude Code", link: "/en/start" },
              { text: "Use with Codex", link: "/en/codex" },
              { text: "Use with Gemini Cli", link: "/en/gemini" },
              { text: "Use with RooCode", link: "/en/roocode" },
              { text: "Use with Kilocode", link: "/en/kilocode" },
              { text: "Use with Qwen Code", link: "/en/qwencode" },
            ],
          },
          {
            text: "Contact",
            items: [{ text: "Contact Us", link: "/en/contact" }],
          },
        ],
        footer: {
          copyright: "AgentRouter.org",
        },
      },
    },

    // --- French Version ---
    fr: {
      label: "Français",
      lang: "fr",
      link: "/fr/",
      title: "Guide d'intégration AgentRouter",
      description: "Guide d'intégration AgentRouter",
      themeConfig: {
        lastUpdated: {
          text: "Dernière mise à jour",
        },
        nav: [
          { text: "Accueil", link: "/fr/" },
           { text:"Discord",link:"https://discord.gg/mvjP2U3cY2"},
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
            items: [{ text: "Contactez-nous", link: "/fr/contact" }],
          },
        ],
        footer: {
          copyright: "AgentRouter.org",
        },
      },
    },

    // --- Spanish Version (LATAM) ---
    es: {
      label: "Español",
      lang: "es-MX",
      link: "/es/",
      title: "Guía de integración de AgentRouter",
      description: "Guía de integración de AgentRouter",
      themeConfig: {
        lastUpdated: {
          text: "Última actualización",
        },
        search: {
          provider: "local",
        },
        nav: [
          { text: "Inicio", link: "/es/" },
           { text:"Discord",link:"https://discord.gg/mvjP2U3cY2"},
          {
            text: "Registrarse en AgentRouter",
            link: "https://agentrouter.org/register?aff=IPN5",
          },
          {
            text: "Síguenos en X",
            link: "https://x.com/agentrouter",
          },
          { text: "Comenzar", link: "/es/start" },
          {
            text: "Guías de herramientas",
            items: [
              { text: "Claude Code", link: "/es/start" },
              { text: "OpenAI Codex", link: "/es/codex" },
              { text: "Gemini Cli", link: "/es/gemini" },
              { text: "RooCode", link: "/es/roocode" },
              { text: "Qwen Code", link: "/es/qwencode" },
            ],
          },
        ],
        sidebar: [
          {
            text: "Comenzar",
            items: [
              { text: "Usar con Claude Code", link: "/es/start" },
              { text: "Usar con Codex", link: "/es/codex" },
              { text: "Usar con Gemini Cli", link: "/es/gemini" },
              { text: "Usar con RooCode", link: "/es/roocode" },
              { text: "Usar con Kilocode", link: "/es/kilocode" },
              { text: "Usar con Qwen Code", link: "/es/qwencode" },
            ],
          },
          {
            text: "Contacto",
            items: [{ text: "Contáctanos", link: "/es/contact" }],
          },
        ],
        footer: {
          copyright: "AgentRouter.org",
        },
      },
    },

  },
});
