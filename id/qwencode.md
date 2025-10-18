# Menggunakan Agent Router dengan Qwen Code

## Install Qwen Code

```bash
# Install menggunakan pnpm (direkomendasikan)
pnpm install -g @qwen-code/qwen-code

# Atau install menggunakan npm
npm install -g @qwen-code/qwen-code
```

## Konfigurasi Environment Variables

Masukkan perintah berikut di terminal kamu untuk mengatur environment variables ([Tutorial Setup Environment Variables](https://www.java.com/zh-CN/download/help/path.html)) untuk menggunakan API OpenAI dari AgentRouter:

```bash
# Set API key AgentRouter kamu, bisa didapat dari https://agentrouter.org/console/token
export OPENAI_API_KEY="sk-xxx"
# Set URL dasar API AgentRouter
export OPENAI_BASE_URL="https://agentrouter.org/v1"  # Opsional
export OPENAI_MODEL="gpt-5" # Opsional, nama model
```

> [!IMPORTANT]
> Pastikan ganti sk-xxx dengan Token yang diberikan AgentRouter. Kamu bisa dapatkan API Key dari [Console AgentRouter](https://agentrouter.org/console/token).

## Langsung Pakai

Setelah konfigurasi environment variables selesai, buka direktori project kamu di terminal dan jalankan perintah berikut untuk mulai Qwen Code:

```bash
# Masuk ke direktori project
cd my-project

# Langsung jalankan Qwen Code
qwen
```

::: tip
Kamu bisa tambahkan konfigurasi environment variables ke file konfigurasi shell kamu supaya nggak perlu set manual setiap kali:

```bash
# Tambahkan ke file ~/.bashrc atau ~/.zshrc
# Set API key AgentRouter kamu, bisa didapat dari https://agentrouter.org/console/token
export OPENAI_API_KEY="sk-xxx"
# Set URL dasar API AgentRouter
export OPENAI_BASE_URL="https://agentrouter.org/v1"  # Opsional
export OPENAI_MODEL="gpt-5" # Opsional, nama model
```

:::

