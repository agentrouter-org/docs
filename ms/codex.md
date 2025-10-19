# Menggunakan Agent Router dengan Codex

## Pasang Codex

```bash
# Pasang menggunakan pnpm (disyorkan)
pnpm install -g @openai/codex

# Atau pasang menggunakan npm
npm install -g @openai/codex
```

## Konfigurasi Pembolehubah Persekitaran

1. Lawati https://agentrouter.org/console/token untuk mendapatkan Kunci API anda
2. Tetapkan pembolehubah persekitaran sistem dengan nama `AGENT_ROUTER_TOKEN` dan nilai sebagai kunci yang baru anda mohon ([Tutorial Setup Pembolehubah Persekitaran](https://www.java.com/zh-CN/download/help/path.html))
3. Cipta fail `~/.codex/config.toml` dan tambahkan konfigurasi berikut

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

4. Cipta fail `~/.codex/auth.json` dan tambahkan kod berikut

```json
{
 "OPENAI_API_KEY":"Ganti di sini dengan KUNCI yang anda mohon"
}
```

## Penggunaan Langsung

Selepas mengkonfigurasi pembolehubah persekitaran, buka direktori projek anda dalam terminal dan jalankan arahan berikut untuk memulakan Codex:

```bash
# Navigasi ke direktori projek
cd my-project

# Mulakan OpenAI Codex secara langsung
codex
```

## Menggunakan Codex dalam VSCode

1. Ikuti arahan di atas untuk memasang Codex dan mengkonfigurasi pembolehubah persekitaran dan fail konfigurasi.

2. Buka VSCode dan pasang [Sambungan Codex](https://marketplace.visualstudio.com/items?itemName=openai.chatgpt).

3. Pergi ke tetapan dan klik sudut kanan atas untuk beralih ke mod konfigurasi JSON

![](../img/codex-config.png)

4. Tambahkan item konfigurasi berikut

```json
"chatgpt.apiBase": "https://agentrouter.org/v1",
"chatgpt.config": {
    "pepreferred_auth_method": "api_key",
    "model_provider": "openai-chat-completions"
}
```

![](../img/codex-config2.png)

5. Klik ikon Codex untuk mula menggunakan