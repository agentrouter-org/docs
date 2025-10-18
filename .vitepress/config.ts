import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "AgentRouter 接入说明",
  description: "AgentRouter 接入说明",
  lastUpdated: true,
  sitemap: {
    hostname: "https://docs.agentrouter.org",
  },
  vite: {
    build: {
      rollupOptions: {
        output: {
          manualChunks: undefined,
        },
      },
    },
  },
  locales: {
    root: {
      label: '简体中文',
      lang: 'zh-CN',
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
    },
    en: {
      label: 'English',
      lang: 'en-US',
      title: 'AgentRouter Documentation',
      description: 'AgentRouter Integration Guide',
      themeConfig: {
        lastUpdated: {
          text: 'Last updated',
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
          {
            text: "Follow on X",
            link: "https://x.com/agentrouter",
          },
          { text: "Quick Start", link: "/en/start" },
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
        footer: {
          copyright: "AgentRouter.org",
        },
        sidebar: [
          {
            text: "Quick Start",
            items: [
              { text: "Using with Claude Code", link: "/en/start" },
              { text: "Using with Codex", link: "/en/codex" },
              { text: "Using with Gemini Cli", link: "/en/gemini" },
              { text: "Using with RooCode", link: "/en/roocode" },
              { text: "Using with Kilocode", link: "/en/kilocode" },
              { text: "Using with Qwen Code", link: "/en/qwencode" },
            ],
          },
          {
            text: "Contact",
            items: [
              { text: "Contact Us", link: "/en/contact" },
            ],
          },
        ],
      },
    },
    es: {
      label: 'Español',
      lang: 'es-ES',
      title: 'Documentación de AgentRouter',
      description: 'Guía de Integración de AgentRouter',
      themeConfig: {
        lastUpdated: {
          text: 'Última actualización',
        },
        search: {
          provider: "local",
        },
        nav: [
          { text: "Inicio", link: "/es/" },
          {
            text: "Registrar AgentRouter",
            link: "https://agentrouter.org/register?aff=IPN5",
          },
          {
            text: "Seguir en X",
            link: "https://x.com/agentrouter",
          },
          { text: "Inicio Rápido", link: "/es/start" },
          {
            text: "Guías de Herramientas",
            items: [
              { text: "Claude Code", link: "/es/start" },
              { text: "OpenAI Codex", link: "/es/codex" },
              { text: "Gemini Cli", link: "/es/gemini" },
              { text: "RooCode", link: "/es/roocode" },
              { text: "Qwen Code", link: "/es/qwencode" },
            ],
          },
        ],
        footer: {
          copyright: "AgentRouter.org",
        },
        sidebar: [
          {
            text: "Inicio Rápido",
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
            items: [
              { text: "Contáctanos", link: "/es/contact" },
            ],
          },
        ],
      },
    },
    fr: {
      label: 'Français',
      lang: 'fr-FR',
      title: 'Documentation AgentRouter',
      description: 'Guide d\'Intégration AgentRouter',
      themeConfig: {
        lastUpdated: {
          text: 'Dernière mise à jour',
        },
        search: {
          provider: "local",
        },
        nav: [
          { text: "Accueil", link: "/fr/" },
          {
            text: "S'inscrire AgentRouter",
            link: "https://agentrouter.org/register?aff=IPN5",
          },
          {
            text: "Suivre sur X",
            link: "https://x.com/agentrouter",
          },
          { text: "Démarrage Rapide", link: "/fr/start" },
          {
            text: "Guides d'Outils",
            items: [
              { text: "Claude Code", link: "/fr/start" },
              { text: "OpenAI Codex", link: "/fr/codex" },
              { text: "Gemini Cli", link: "/fr/gemini" },
              { text: "RooCode", link: "/fr/roocode" },
              { text: "Qwen Code", link: "/fr/qwencode" },
            ],
          },
        ],
        footer: {
          copyright: "AgentRouter.org",
        },
        sidebar: [
          {
            text: "Démarrage Rapide",
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
              { text: "Nous Contacter", link: "/fr/contact" },
            ],
          },
        ],
      },
    },
  },
});