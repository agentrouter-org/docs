# Sử dụng Agent Router với Qwen Code

## Cài đặt Qwen Code

```bash
# Cài đặt bằng pnpm (khuyến nghị)
pnpm install -g @qwen-code/qwen-code

# Hoặc cài đặt bằng npm
npm install -g @qwen-code/qwen-code
```

## Cấu hình Biến Môi trường

Thiết lập biến môi trường để sử dụng API OpenAI của AgentRouter:

::: code-group

```bash [Linux/macOS]
# Thiết lập API key của AgentRouter, lấy từ https://agentrouter.org/console/token
export OPENAI_API_KEY="sk-xxx"
# Thiết lập URL cơ sở của API AgentRouter
export OPENAI_BASE_URL="https://agentrouter.org/v1"  # Tùy chọn
export OPENAI_MODEL="gpt-5" # Tùy chọn, tên model
```

```powershell [Windows (PowerShell)]
# Thiết lập API key của AgentRouter, lấy từ https://agentrouter.org/console/token
$env:OPENAI_API_KEY="sk-xxx"
# Thiết lập URL cơ sở của API AgentRouter
$env:OPENAI_BASE_URL="https://agentrouter.org/v1"  # Tùy chọn
$env:OPENAI_MODEL="gpt-5" # Tùy chọn, tên model
```

```cmd [Windows (CMD)]
# Thiết lập API key của AgentRouter, lấy từ https://agentrouter.org/console/token
set OPENAI_API_KEY=sk-xxx
# Thiết lập URL cơ sở của API AgentRouter
set OPENAI_BASE_URL=https://agentrouter.org/v1
set OPENAI_MODEL=gpt-5
```

:::

> [!IMPORTANT]
> Hãy đảm bảo thay thế `sk-xxx` bằng token AgentRouter thực của bạn. Bạn có thể lấy API Key từ [Bảng điều khiển AgentRouter](https://agentrouter.org/console/token).

## Bắt đầu Sử dụng

Sau khi cấu hình biến môi trường, mở thư mục dự án trong terminal và chạy lệnh sau để khởi động Qwen Code:

```bash
# Di chuyển đến thư mục dự án
cd my-project

# Khởi động Qwen Code
qwen
```

::: tip
Bạn có thể thêm cấu hình biến môi trường vào shell profile để tránh phải thiết lập thủ công mỗi lần:

**Linux/macOS:**
```bash
# Thêm vào ~/.bashrc hoặc ~/.zshrc
export OPENAI_API_KEY="sk-xxx"
export OPENAI_BASE_URL="https://agentrouter.org/v1"
export OPENAI_MODEL="gpt-5"
```

**Windows (PowerShell):**
Thêm vào PowerShell profile của bạn (`$PROFILE`):
```powershell
$env:OPENAI_API_KEY="sk-xxx"
$env:OPENAI_BASE_URL="https://agentrouter.org/v1"
$env:OPENAI_MODEL="gpt-5"
```

**Windows (Biến Hệ thống Vĩnh viễn):**
Sử dụng `setx` để thiết lập biến môi trường vĩnh viễn:
```cmd
setx OPENAI_API_KEY "sk-xxx"
setx OPENAI_BASE_URL "https://agentrouter.org/v1"
setx OPENAI_MODEL "gpt-5"
```
Lưu ý: Bạn cần khởi động lại terminal sau khi sử dụng `setx`.
:::
