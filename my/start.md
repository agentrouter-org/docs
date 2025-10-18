# Menggunakan Agent Router dengan Claude Code

## Pasang Claude Code

```bash
# Pasang menggunakan pnpm (disyorkan)
pnpm install -g @anthropic-ai/claude-code

# Atau pasang menggunakan npm
npm install -g @anthropic-ai/claude-code
```

## Konfigurasi Pembolehubah Persekitaran

Masukkan arahan berikut dalam terminal anda untuk mengatur pembolehubah persekitaran untuk menggunakan API Anthropic AgentRouter:

```bash
# Tetapkan URL asas API AgentRouter
export ANTHROPIC_BASE_URL=https://agentrouter.org/

# Tetapkan kunci API AgentRouter anda, yang boleh diperoleh dari https://agentrouter.org/console/token
export ANTHROPIC_AUTH_TOKEN=sk-xxx
export ANTHROPIC_API_KEY=sk-xxx
```

> [!IMPORTANT]
> Pastikan menggantikan sk-xxx dengan Token yang disediakan oleh AgentRouter. Anda boleh mendapatkan Kunci API dari [Konsol AgentRouter](https://agentrouter.org/console/token).

## Penggunaan Langsung

Selepas mengkonfigurasi pembolehubah persekitaran, buka direktori projek anda dalam terminal dan jalankan arahan berikut untuk memulakan Claude Code:

```bash
# Navigasi ke direktori projek
cd my-project

# Mulakan Claude Code secara langsung
claude
```

::: tip
Anda boleh menambah konfigurasi pembolehubah persekitaran ke fail konfigurasi shell anda untuk mengelakkan menetapkannya secara manual setiap kali:

```bash
# Tambah ke fail ~/.bashrc atau ~/.zshrc
export ANTHROPIC_BASE_URL=https://agentrouter.org/
export ANTHROPIC_AUTH_TOKEN=sk-xxx
export ANTHROPIC_API_KEY=sk-xxx
```

:::
