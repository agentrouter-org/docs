import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lastUpdated: true,
  sitemap: {
    hostname: "https://docs.agentrouter.org",
  },
  locales: {
    root: {
      label: "简体中文",
      lang: "zh-CN",
      title: "AgentRouter 接入说明",
      description: "AgentRouter 接入说明",
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
              // { text: "商务合作", link: "/business" },
            ],
          },
        ],
      },
    },
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
        footer: {
          copyright: "AgentRouter.org",
        },
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
            items: [
              { text: "Contact Us", link: "/en/contact" },
              // { text: "Business Cooperation", link: "/en/business" },
            ],
          },
        ],
      },
    },
  },
});
