# Menggunakan Agent Router dengan Claude Code

## Install Claude Code

```bash
# Install menggunakan pnpm (direkomendasikan)
pnpm install -g @anthropic-ai/claude-code

# Atau install menggunakan npm
npm install -g @anthropic-ai/claude-code
```

## Konfigurasi Environment Variables

Masukkan perintah berikut di terminal kamu untuk mengatur environment variables agar bisa menggunakan API Anthropic dari AgentRouter:

```bash
# Set URL dasar API AgentRouter
export ANTHROPIC_BASE_URL=https://agentrouter.org/

# Set API key AgentRouter kamu, bisa didapat dari https://agentrouter.org/console/token
export ANTHROPIC_AUTH_TOKEN=sk-xxx
export ANTHROPIC_API_KEY=sk-xxx
```

> [!IMPORTANT]
> Pastikan ganti sk-xxx dengan Token yang diberikan AgentRouter. Kamu bisa dapatkan API Key dari [Console AgentRouter](https://agentrouter.org/console/token).

## Langsung Pakai

Setelah konfigurasi environment variables selesai, buka direktori project kamu di terminal dan jalankan perintah berikut untuk mulai Claude Code:

```bash
# Masuk ke direktori project
cd my-project

# Langsung jalankan Claude Code
claude
```

::: tip
Kamu bisa tambahkan konfigurasi environment variables ke file konfigurasi shell kamu supaya nggak perlu set manual setiap kali:

```bash
# Tambahkan ke file ~/.bashrc atau ~/.zshrc
export ANTHROPIC_BASE_URL=https://agentrouter.org/
export ANTHROPIC_AUTH_TOKEN=sk-xxx
export ANTHROPIC_API_KEY=sk-xxx
```

:::
