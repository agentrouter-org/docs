import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "AgentRouter",
  description: "AgentRouter Documentation",
  lastUpdated: true,
  sitemap: {
    hostname: "https://docs.agentrouter.org",
  },
  themeConfig: {
    lastUpdated: {
      text: "Last updated",
    },
    search: {
      provider: "local",
    },
    nav: [
      { text: "Home", link: "/" },
      {
        text: "Register AgentRouter",
        link: "https://agentrouter.org/register?aff=IPN5",
      },
      {
        text: "Follow on X",
        link: "https://x.com/agentrouter",
      },
      { text: "Quick Start", link: "/start" },
      {
        text: "Tool Guides",
        items: [
          { text: "Claude Code", link: "/start" },
          { text: "OpenAI Codex", link: "/codex" },
          { text: "Gemini Cli", link: "/gemini" },
          { text: "RooCode", link: "/roocode" },
          { text: "Kilo Code", link: "/kilocode" },
          { text: "Qwen Code", link: "/qwencode" },
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
          { text: "Using in Claude Code", link: "/start" },
          { text: "Using in Codex", link: "/codex" },
          { text: "Using in Gemini Cli", link: "/gemini" },
          { text: "Using in RooCode", link: "/roocode" },
          { text: "Using in Kilo Code", link: "/kilocode" },
          { text: "Using in Qwen Code", link: "/qwencode" },
        ],
      },
      {
        text: "Contact",
        items: [
          { text: "Contact Us", link: "/contact" },
        ],
      },
    ],
  },
  locales: {
    root: {
      label: "English",
      lang: "en",
    },
    zh: {
      label: "中文",
      lang: "zh",
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
          { text: "首页", link: "/zh/" },
          {
            text: "注册 AgentRouter",
            link: "https://agentrouter.org/register?aff=IPN5",
          },
          {
            text: "在 X 上关注我",
            link: "https://x.com/agentrouter",
          },
          { text: "快速开始", link: "/zh/start" },
          {
            text: "工具指南",
            items: [
              { text: "Claude Code", link: "/zh/start" },
              { text: "OpenAI Codex", link: "/zh/codex" },
              { text: "Gemini Cli", link: "/zh/gemini" },
              { text: "RooCode", link: "/zh/roocode" },
              { text: "Kilo Code", link: "/zh/kilocode" },
              { text: "Qwen Code", link: "/zh/qwencode" },
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
              { text: "在 Claude Code 中使用", link: "/zh/start" },
              { text: "在 Codex 中使用", link: "/zh/codex" },
              { text: "在 Gemini Cli 中使用", link: "/zh/gemini" },
              { text: "在 RooCode 中使用", link: "/zh/roocode" },
              { text: "在 Kilocode 中使用", link: "/zh/kilocode" },
              { text: "在 Qwen Code 中使用", link: "/zh/qwencode" },
            ],
          },
          {
            text: "联系方式",
            items: [
              { text: "联系我们", link: "/zh/contact" },
            ],
          },
        ],
      },
    },
    fr: {
      label: "Français",
      lang: "fr",
      title: "Documentation AgentRouter",
      description: "Documentation AgentRouter",
      themeConfig: {
        lastUpdated: {
          text: "Dernière mise à jour",
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
          { text: "Démarrage rapide", link: "/fr/start" },
          {
            text: "Guides d'outils",
            items: [
              { text: "Claude Code", link: "/fr/start" },
              { text: "OpenAI Codex", link: "/fr/codex" },
              { text: "Gemini Cli", link: "/fr/gemini" },
              { text: "RooCode", link: "/fr/roocode" },
              { text: "Kilo Code", link: "/fr/kilocode" },
              { text: "Qwen Code", link: "/fr/qwencode" },
            ],
          },
        ],
        footer: {
          copyright: "AgentRouter.org",
        },
        sidebar: [
          {
            text: "Démarrage rapide",
            items: [
              { text: "Utiliser avec Claude Code", link: "/fr/start" },
              { text: "Utiliser avec Codex", link: "/fr/codex" },
              { text: "Utiliser avec Gemini Cli", link: "/fr/gemini" },
              { text: "Utiliser avec RooCode", link: "/fr/roocode" },
              { text: "Utiliser avec Kilo Code", link: "/fr/kilocode" },
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
    es: {
      label: "Español",
      lang: "es",
      title: "Documentación AgentRouter",
      description: "Documentación AgentRouter",
      themeConfig: {
        lastUpdated: {
          text: "Última actualización",
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
          { text: "Inicio rápido", link: "/es/start" },
          {
            text: "Guías de herramientas",
            items: [
              { text: "Claude Code", link: "/es/start" },
              { text: "OpenAI Codex", link: "/es/codex" },
              { text: "Gemini Cli", link: "/es/gemini" },
              { text: "RooCode", link: "/es/roocode" },
              { text: "Kilo Code", link: "/es/kilocode" },
              { text: "Qwen Code", link: "/es/qwencode" },
            ],
          },
        ],
        footer: {
          copyright: "AgentRouter.org",
        },
        sidebar: [
          {
            text: "Inicio rápido",
            items: [
              { text: "Usar con Claude Code", link: "/es/start" },
              { text: "Usar con Codex", link: "/es/codex" },
              { text: "Usar con Gemini Cli", link: "/es/gemini" },
              { text: "Usar con RooCode", link: "/es/roocode" },
              { text: "Usar con Kilo Code", link: "/es/kilocode" },
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
    id: {
      label: "Bahasa Indonesia",
      lang: "id",
      title: "Dokumentasi AgentRouter",
      description: "Dokumentasi AgentRouter",
      themeConfig: {
        lastUpdated: {
          text: "Terakhir diperbarui",
        },
        search: {
          provider: "local",
        },
        nav: [
          { text: "Beranda", link: "/id/" },
          {
            text: "Daftar AgentRouter",
            link: "https://agentrouter.org/register?aff=IPN5",
          },
          {
            text: "Ikuti di X",
            link: "https://x.com/agentrouter",
          },
          { text: "Mulai Cepat", link: "/id/start" },
          {
            text: "Panduan Alat",
            items: [
              { text: "Claude Code", link: "/id/start" },
              { text: "OpenAI Codex", link: "/id/codex" },
              { text: "Gemini Cli", link: "/id/gemini" },
              { text: "RooCode", link: "/id/roocode" },
              { text: "Kilo Code", link: "/id/kilocode" },
              { text: "Qwen Code", link: "/id/qwencode" },
            ],
          },
        ],
        footer: {
          copyright: "AgentRouter.org",
        },
        sidebar: [
          {
            text: "Mulai Cepat",
            items: [
              { text: "Menggunakan dengan Claude Code", link: "/id/start" },
              { text: "Menggunakan dengan Codex", link: "/id/codex" },
              { text: "Menggunakan dengan Gemini Cli", link: "/id/gemini" },
              { text: "Menggunakan dengan RooCode", link: "/id/roocode" },
              { text: "Menggunakan dengan Kilo Code", link: "/id/kilocode" },
              { text: "Menggunakan dengan Qwen Code", link: "/id/qwencode" },
            ],
          },
          {
            text: "Kontak",
            items: [
              { text: "Hubungi Kami", link: "/id/contact" },
            ],
          },
        ],
      },
    },
    my: {
      label: "Bahasa Melayu",
      lang: "my",
      title: "Dokumentasi AgentRouter",
      description: "Dokumentasi AgentRouter",
      themeConfig: {
        lastUpdated: {
          text: "Kemas kini terakhir",
        },
        search: {
          provider: "local",
        },
        nav: [
          { text: "Laman Utama", link: "/my/" },
          {
            text: "Daftar AgentRouter",
            link: "https://agentrouter.org/register?aff=IPN5",
          },
          {
            text: "Ikuti di X",
            link: "https://x.com/agentrouter",
          },
          { text: "Mula Cepat", link: "/my/start" },
          {
            text: "Panduan Alat",
            items: [
              { text: "Claude Code", link: "/my/start" },
              { text: "OpenAI Codex", link: "/my/codex" },
              { text: "Gemini Cli", link: "/my/gemini" },
              { text: "RooCode", link: "/my/roocode" },
              { text: "Kilo Code", link: "/my/kilocode" },
              { text: "Qwen Code", link: "/my/qwencode" },
            ],
          },
        ],
        footer: {
          copyright: "AgentRouter.org",
        },
        sidebar: [
          {
            text: "Mula Cepat",
            items: [
              { text: "Menggunakan dengan Claude Code", link: "/my/start" },
              { text: "Menggunakan dengan Codex", link: "/my/codex" },
              { text: "Menggunakan dengan Gemini Cli", link: "/my/gemini" },
              { text: "Menggunakan dengan RooCode", link: "/my/roocode" },
              { text: "Menggunakan dengan Kilo Code", link: "/my/kilocode" },
              { text: "Menggunakan dengan Qwen Code", link: "/my/qwencode" },
            ],
          },
          {
            text: "Hubungi",
            items: [
              { text: "Hubungi Kami", link: "/my/contact" },
            ],
          },
        ],
      },
    },
  },
});
