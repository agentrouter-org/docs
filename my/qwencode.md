# Menggunakan Agent Router dengan Qwen Code

## Pasang Qwen Code

```bash
# Pasang menggunakan pnpm (disyorkan)
pnpm install -g @qwen-code/qwen-code

# Atau pasang menggunakan npm
npm install -g @qwen-code/qwen-code
```

## Konfigurasi Pembolehubah Persekitaran

Masukkan arahan berikut dalam terminal anda untuk mengatur pembolehubah persekitaran ([Tutorial Setup Pembolehubah Persekitaran](https://www.java.com/zh-CN/download/help/path.html)) untuk menggunakan API OpenAI AgentRouter:

```bash
# Tetapkan kunci API AgentRouter anda, yang boleh diperoleh dari https://agentrouter.org/console/token
export OPENAI_API_KEY="sk-xxx"
# Tetapkan URL asas API AgentRouter
export OPENAI_BASE_URL="https://agentrouter.org/v1"  # Pilihan
export OPENAI_MODEL="gpt-5" # Pilihan, nama model
```

> [!IMPORTANT]
> Pastikan menggantikan sk-xxx dengan Token yang disediakan oleh AgentRouter. Anda boleh mendapatkan Kunci API dari [Konsol AgentRouter](https://agentrouter.org/console/token).

## Penggunaan Langsung

Selepas mengkonfigurasi pembolehubah persekitaran, buka direktori projek anda dalam terminal dan jalankan arahan berikut untuk memulakan Qwen Code:

```bash
# Navigasi ke direktori projek
cd my-project

# Mulakan Qwen Code secara langsung
qwen
```

::: tip
Anda boleh menambah konfigurasi pembolehubah persekitaran ke fail konfigurasi shell anda untuk mengelakkan menetapkannya secara manual setiap kali:

```bash
# Tambah ke fail ~/.bashrc atau ~/.zshrc
# Tetapkan kunci API AgentRouter anda, yang boleh diperoleh dari https://agentrouter.org/console/token
export OPENAI_API_KEY="sk-xxx"
# Tetapkan URL asas API AgentRouter
export OPENAI_BASE_URL="https://agentrouter.org/v1"  # Pilihan
export OPENAI_MODEL="gpt-5" # Pilihan, nama model
```

:::

