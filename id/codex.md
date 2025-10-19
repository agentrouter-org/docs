# Menggunakan Agent Router dengan Codex

## Install Codex

```bash
# Install menggunakan pnpm (direkomendasikan)
pnpm install -g @openai/codex

# Atau install menggunakan npm
npm install -g @openai/codex
```

## Konfigurasi Environment Variables

1. Kunjungi https://agentrouter.org/console/token untuk dapatkan API Key kamu
2. Set environment variable sistem dengan nama `AGENT_ROUTER_TOKEN` dan value sebagai key yang baru kamu apply ([Tutorial Setup Environment Variables](https://www.java.com/zh-CN/download/help/path.html))
3. Buat file `~/.codex/config.toml` dan tambahkan konfigurasi berikut

```toml
model = "gpt-5"
model_provider = "openai-chat-completions"
preferred_auth_method = "apikey"


[model_providers.openai-chat-completions]
name = "OpenAI using Chat Completions"
base_url = "https://agentrouter.org/v1"
env_key = "AGENT_ROUTER_TOKEN"
wire_api = "chat"
query_params = {}
stream_idle_timeout_ms = 300000

```

4. Buat file `~/.codex/auth.json` dan tambahkan kode berikut

```json
{
 "OPENAI_API_KEY":"Ganti di sini dengan KEY yang kamu apply"
}
```

## Langsung Pakai

Setelah konfigurasi environment variables selesai, buka direktori project kamu di terminal dan jalankan perintah berikut untuk mulai Codex:

```bash
# Masuk ke direktori project
cd my-project

# Langsung jalankan OpenAI Codex
codex
```

## Pakai Codex di VSCode

1. Ikuti instruksi di atas untuk install Codex dan konfigurasi environment variables serta file konfigurasi.

2. Buka VSCode dan install [Codex Extension](https://marketplace.visualstudio.com/items?itemName=openai.chatgpt).

3. Pergi ke settings dan klik pojok kanan atas untuk switch ke mode konfigurasi JSON

![](./img/codex-config.png)

4. Tambahkan item konfigurasi berikut

```json
"chatgpt.apiBase": "https://agentrouter.org/v1",
"chatgpt.config": {
    "pepreferred_auth_method": "api_key",
    "model_provider": "openai-chat-completions"
}
```

![](./img/codex-config2.png)

5. Klik icon Codex untuk mulai menggunakan