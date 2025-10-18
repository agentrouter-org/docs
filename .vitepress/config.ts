import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lastUpdated: true,
  sitemap: {
    hostname: "https://docs.agentrouter.org",
  },
  head: [
    [
      "style",
      {},
      `
      .VPFooter .container { display: flex; justify-content: space-between; align-items: center; }
      .VPFooter .message { font-weight: 700; font-size: 1.2rem; text-align: left; display: flex; align-items: center; }
      .VPFooter .copyright { text-align: right; }
      .footer-right { display: flex; align-items: baseline; gap: 8px; }
      .follow-label { margin-right: 6px; }
      /* Ícones uniformes, escuros com hover branco */
      .footer-social a svg { width: 20px; height: 20px; vertical-align: middle; color: #8a8a8a; transition: color .2s ease; position: relative; top: 5px; }
      .footer-social a:hover svg { color: #FFFFFF; }
      .footer-social a { display: inline-flex; align-items: center; gap: 8px; }
      /* Logo menor e deslocada mais para a direita */
      .VPHomeHero .image { max-width: 300px !important; margin-left: 120px; margin-top: 28px; }
      @media (min-width: 1024px) {
        .VPHomeHero .image { max-width: 280px !important; margin-left: 160px; margin-top: 40px; }
      }
      .VPHomeHero .image img { width: 100%; height: auto; display: block; }
      `
    ]
  ],

  locales: {
    // --- 中文版本 ---
    root: {
      label: "简体中文",
      lang: "zh-CN",
      title: "AgentRouter | Developers",
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
          {
            text: "立即注册",
            link: "https://agentrouter.org/register?aff=IPN5",
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
          message: "<span class='footer-left'>agentrouter.org</span>",
          copyright: "<div class='footer-right'><div class='follow-label'>关注：</div><div class='footer-social'><a href='https://x.com/agentrouter' target='_blank' rel='noopener' aria-label='X/Twitter'><svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 50 50' fill='currentColor' aria-hidden='true'><path d='M 6.9199219 6 L 21.136719 26.726562 L 6.2285156 44 L 9.40625 44 L 22.544922 28.777344 L 32.986328 44 L 43 44 L 28.123047 22.3125 L 42.203125 6 L 39.027344 6 L 26.716797 20.261719 L 16.933594 6 L 6.9199219 6 z'></path></svg></a> <a href='https://discord.gg/mvjP2U3cY2' target='_blank' rel='noopener' aria-label='Discord'><svg viewBox='0 0 24 24' fill='currentColor' aria-hidden='true'><path d='M20.317 4.369A19.791 19.791 0 0016.558 3c-.2.36-.43.85-.59 1.23a17.167 17.167 0 00-7.936 0 7.236 7.236 0 00-.59-1.23 19.736 19.736 0 00-3.76 1.37C.533 9.012-.32 13.525.099 18.003a19.9 19.9 0 006.044 3.03c.487-.67.92-1.377 1.29-2.117a12.86 12.86 0 01-2.03-.987c.17-.127.337-.258.498-.392 3.92 1.826 8.17 1.826 12.06 0 .162.134.329.265.498.392-.65.389-1.33.723-2.03.987.37.74.803 1.447 1.29 2.117a19.9 19.9 0 006.044-3.03c.5-5.3-.86-9.78-3.446-13.634zM8.02 15.331c-1.183 0-2.146-1.087-2.146-2.427 0-1.34.946-2.427 2.146-2.427 1.209 0 2.163 1.098 2.146 2.427 0 1.34-.946 2.427-2.146 2.427zm7.96 0c-1.183 0-2.146-1.087-2.146-2.427 0-1.34.946-2.427 2.146-2.427 1.209 0 2.163 1.098 2.146 2.427 0 1.34-.946 2.427-2.146 2.427z'/></svg></a></div></div>",
        },
      },
    },

    // --- English Version ---
    en: {
      label: "English",
      lang: "en-US",
      title: "AgentRouter | Developers",
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
          {
            text: "Register Now",
            link: "https://agentrouter.org/register?aff=IPN5",
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
          message: "<span class='footer-left'>agentrouter.org</span>",
          copyright: "<div class='footer-right'><div class='follow-label'>Follow in:</div><div class='footer-social'><a href='https://x.com/agentrouter' target='_blank' rel='noopener' aria-label='X/Twitter'><svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 50 50' fill='currentColor' aria-hidden='true'><path d='M 6.9199219 6 L 21.136719 26.726562 L 6.2285156 44 L 9.40625 44 L 22.544922 28.777344 L 32.986328 44 L 43 44 L 28.123047 22.3125 L 42.203125 6 L 39.027344 6 L 26.716797 20.261719 L 16.933594 6 L 6.9199219 6 z'></path></svg></a> <a href='https://discord.gg/mvjP2U3cY2' target='_blank' rel='noopener' aria-label='Discord'><svg viewBox='0 0 24 24' fill='currentColor' aria-hidden='true'><path d='M20.317 4.369A19.791 19.791 0 0016.558 3c-.2.36-.43.85-.59 1.23a17.167 17.167 0 00-7.936 0 7.236 7.236 0 00-.59-1.23 19.736 19.736 0 00-3.76 1.37C.533 9.012-.32 13.525.099 18.003a19.9 19.9 0 006.044 3.03c.487-.67.92-1.377 1.29-2.117a12.86 12.86 0 01-2.03-.987c.17-.127.337-.258.498-.392 3.92 1.826 8.17 1.826 12.06 0 .162.134.329.265.498.392-.65.389-1.33.723-2.03.987.37 .74 .803 1.447 1.29 2.117a19.9 19.9 0 006.044-3.03c.5-5.3-.86-9.78-3.446-13.634zM8.02 15.331c-1.183 0-2.146-1.087-2.146-2.427 0-1.34.946-2.427 2.146-2.427 1.209 0 2.163 1.098 2.146 2.427 0 1.34-.946 2.427-2.146 2.427zm7.96 0c-1.183 0-2.146-1.087-2.146-2.427 0-1.34.946-2.427 2.146-2.427 1.209 0 2.163 1.098 2.146 2.427 0 1.34-.946 2.427-2.146 2.427z'/></svg></a></div></div>",
        },
      },
    },

    // --- French Version ---
    fr: {
      label: "Français",
      lang: "fr",
      link: "/fr/",
      title: "AgentRouter | Developers",
      description: "Guide d'intégration AgentRouter",
      themeConfig: {
        lastUpdated: {
          text: "Dernière mise à jour",
        },
        nav: [
          { text: "Accueil", link: "/fr/" },
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
          {
            text: "S'inscrire maintenant",
            link: "https://agentrouter.org/register?aff=IPN5",
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
          message: "<span class='footer-left'>agentrouter.org</span>",
          copyright: "<div class='footer-right'><div class='follow-label'>Suivez-nous :</div><div class='footer-social'><a href='https://x.com/agentrouter' target='_blank' rel='noopener' aria-label='X/Twitter'><svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 50 50' fill='currentColor' aria-hidden='true'><path d='M 6.9199219 6 L 21.136719 26.726562 L 6.2285156 44 L 9.40625 44 L 22.544922 28.777344 L 32.986328 44 L 43 44 L 28.123047 22.3125 L 42.203125 6 L 39.027344 6 L 26.716797 20.261719 L 16.933594 6 L 6.9199219 6 z'></path></svg></a> <a href='https://discord.gg/mvjP2U3cY2' target='_blank' rel='noopener' aria-label='Discord'><svg viewBox='0 0 24 24' fill='currentColor' aria-hidden='true'><path d='M20.317 4.369A19.791 19.791 0 0016.558 3c-.2.36-.43.85-.59 1.23a17.167 17.167 0 00-7.936 0 7.236 7.236 0 00-.59-1.23 19.736 19.736 0 00-3.76 1.37C.533 9.012-\u0000.32 13.525.099 18.003a19.9 19.9 0 006.044 3.03c.487-.67.92-1.377 1.29-2.117a12.86 12.86 0 01-2.03-.987c.17-.127.337-.258.498-.392 3.92 1.826 8.17 1.826 12.06 0 .162.134.329.265.498.392-.65.389-1.33.723-2.03.987.37.74.803 1.447 1.29 2.117a19.9 19.9 0 006.044-3.03c.5-5.3-.86-9.78-3.446-13.634zM8.02 15.331c-1.183 0-2.146-1.087-2.146-2.427 0-1.34.946-2.427 2.146-2.427 1.209 0 2.163 1.098 2.146 2.427 0 1.34-.946 2.427-2.146 2.427zm7.96 0c-1.183 0-2.146-1.087-2.146-2.427 0-1.34.946-2.427 2.146-2.427 1.209 0 2.163 1.098 2.146 2.427 0 1.34-.946 2.427-2.146 2.427z'/></svg></a></div></div>",
        },
      },
    },

    // --- Spanish Version (LATAM) ---
    es: {
      label: "Español",
      lang: "es-MX",
      link: "/es/",
      title: "AgentRouter | Developers",
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
          {
            text: "Regístrate ahora",
            link: "https://agentrouter.org/register?aff=IPN5",
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
          message: "<span class='footer-left'>agentrouter.org</span>",
          copyright: "<div class='footer-right'><div class='follow-label'>Síguenos en:</div><div class='footer-social'><a href='https://x.com/agentrouter' target='_blank' rel='noopener' aria-label='X/Twitter'><svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 50 50' fill='currentColor' aria-hidden='true'><path d='M 6.9199219 6 L 21.136719 26.726562 L 6.2285156 44 L 9.40625 44 L 22.544922 28.777344 L 32.986328 44 L 43 44 L 28.123047 22.3125 L 42.203125 6 L 39.027344 6 L 26.716797 20.261719 L 16.933594 6 L 6.9199219 6 z'></path></svg></a> <a href='https://discord.gg/mvjP2U3cY2' target='_blank' rel='noopener' aria-label='Discord'><svg viewBox='0 0 24 24' fill='currentColor' aria-hidden='true'><path d='M20.317 4.369A19.791 19.791 0 0016.558 3c-.2.36-.43.85-.59 1.23a17.167 17.167 0 00-7.936 0 7.236 7.236 0 00-.59-1.23 19.736 19.736 0 00-3.76 1.37C.533 9.012-.32 13.525.099 18.003a19.9 19.9 0 006.044 3.03c.487-.67.92-1.377 1.29-2.117a12.86 12.86 0 01-2.03-.987c.17-.127.337-.258.498-.392 3.92 1.826 8.17 1.826 12.06 0 .162.134.329.265.498.392-.65.389-1.33.723-2.03.987.37.74.803 1.447 1.29 2.117a19.9 19.9 0 006.044-3.03c.5-5.3-.86-9.78-3.446-13.634zM8.02 15.331c-1.183 0-2.146-1.087-2.146-2.427 0-1.34.946-2.427 2.146-2.427 1.209 0 2.163 1.098 2.146 2.427 0 1.34-.946 2.427-2.146 2.427zm7.96 0c-1.183 0-2.146-1.087-2.146-2.427 0-1.34.946-2.427 2.146-2.427 1.209 0 2.163 1.098 2.146 2.427 0 1.34-.946 2.427-2.146 2.427z'/></svg></a></div></div>",
        },
      },
    },

  },
});
