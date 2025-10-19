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
          { text: "Discord", link: "https://discord.gg/mvjP2U3cY2" },
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
          { text: "Discord", link: "https://discord.gg/mvjP2U3cY2" },
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
          { text: "Discord", link: "https://discord.gg/mvjP2U3cY2" },
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

    // --- Indonesian Version ---
    id: {
      label: "Bahasa Indonesia",
      lang: "id",
      link: "/id/",
      title: "Panduan Integrasi AgentRouter",
      description: "Panduan Integrasi AgentRouter",
      themeConfig: {
        lastUpdated: {
          text: "Terakhir diperbarui",
        },
        nav: [
          { text: "Beranda", link: "/id/" },
          { text: "Discord", link: "https://discord.gg/mvjP2U3cY2" },
          {
            text: "Daftar ke AgentRouter",
            link: "https://agentrouter.org/register?aff=IPN5",
          },
          {
            text: "Ikuti kami di X",
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
              { text: "Qwen Code", link: "/id/qwencode" },
            ],
          },
        ],
        sidebar: [
          {
            text: "Mulai Cepat",
            items: [
              { text: "Gunakan dengan Claude Code", link: "/id/start" },
              { text: "Gunakan dengan Codex", link: "/id/codex" },
              { text: "Gunakan dengan Gemini Cli", link: "/id/gemini" },
              { text: "Gunakan dengan RooCode", link: "/id/roocode" },
              { text: "Gunakan dengan Kilocode", link: "/id/kilocode" },
              { text: "Gunakan dengan Qwen Code", link: "/id/qwencode" },
            ],
          },
          {
            text: "Kontak",
            items: [{ text: "Hubungi Kami", link: "/id/contact" }],
          },
        ],
        footer: {
          copyright: "AgentRouter.org",
        },
      },
    },

    // --- Malaysian Version ---
    ms: {
      label: "Bahasa Melayu",
      lang: "ms",
      link: "/ms/",
      title: "Panduan Integrasi AgentRouter",
      description: "Panduan Integrasi AgentRouter",
      themeConfig: {
        lastUpdated: {
          text: "Kemas kini terakhir",
        },
        nav: [
          { text: "Laman Utama", link: "/ms/" },
          { text: "Discord", link: "https://discord.gg/mvjP2U3cY2" },
          {
            text: "Daftar ke AgentRouter",
            link: "https://agentrouter.org/register?aff=IPN5",
          },
          {
            text: "Ikuti kami di X",
            link: "https://x.com/agentrouter",
          },
          { text: "Mula Pantas", link: "/ms/start" },
          {
            text: "Panduan Alat",
            items: [
              { text: "Claude Code", link: "/ms/start" },
              { text: "OpenAI Codex", link: "/ms/codex" },
              { text: "Gemini Cli", link: "/ms/gemini" },
              { text: "RooCode", link: "/ms/roocode" },
              { text: "Qwen Code", link: "/ms/qwencode" },
            ],
          },
        ],
        sidebar: [
          {
            text: "Mula Pantas",
            items: [
              { text: "Guna dengan Claude Code", link: "/ms/start" },
              { text: "Guna dengan Codex", link: "/ms/codex" },
              { text: "Guna dengan Gemini Cli", link: "/ms/gemini" },
              { text: "Guna dengan RooCode", link: "/ms/roocode" },
              { text: "Guna dengan Kilocode", link: "/ms/kilocode" },
              { text: "Guna dengan Qwen Code", link: "/ms/qwencode" },
            ],
          },
          {
            text: "Hubungan",
            items: [{ text: "Hubungi Kami", link: "/ms/contact" }],
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
          { text: "Discord", link: "https://discord.gg/mvjP2U3cY2" },
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






    // --- Vietnamese Version ---
    vi: {
      label: "Tiếng Việt",
      lang: "vi-VN",
      link: "/vi/",
      title: "Hướng dẫn tích hợp AgentRouter",
      description: "Hướng dẫn tích hợp AgentRouter",
      themeConfig: {
        lastUpdated: {
          text: "Cập nhật lần cuối",
        },
        search: {
          provider: "local",
        },
        nav: [
          { text: "Trang chủ", link: "/vi/" },
          { text: "Discord", link: "https://discord.gg/mvjP2U3cY2" },
          {
            text: "Đăng ký AgentRouter",
            link: "https://agentrouter.org/register?aff=IPN5",
          },
          {
            text: "Theo dõi trên X",
            link: "https://x.com/agentrouter",
          },
          { text: "Bắt đầu", link: "/vi/start" },
          {
            text: "Các công cụ hướng dẫn",
            items: [
              { text: "Claude Code", link: "/vi/start" },
              { text: "OpenAI Codex", link: "/vi/codex" },
              { text: "Gemini Cli", link: "/vi/gemini" },
              { text: "RooCode", link: "/vi/roocode" },
              { text: "Qwen Code", link: "/vi/qwencode" },
            ],
          },
        ],
        sidebar: [
          {
            text: "Bắt đầu",
            items: [
              { text: "Sử dụng với Claude Code", link: "/vi/start" },
              { text: "Sử dụng với Codex", link: "/vi/codex" },
              { text: "Sử dụng với Gemini Cli", link: "/vi/gemini" },
              { text: "Sử dụng với RooCode", link: "/vi/roocode" },
              { text: "Sử dụng với Kilocode", link: "/vi/kilocode" },
              { text: "Sử dụng với Qwen Code", link: "/vi/qwencode" },
            ],
          },
          {
            text: "Liên hệ",
            items: [{ text: "Liên hệ chúng tôi", link: "/vi/contact" }],
          },
        ],
        footer: {
          copyright: "AgentRouter.org",
        },
      },
    },


  },
});

