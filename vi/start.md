# Sử dụng Agent Router với Claude Code

## Cài đặt Claude Code

```bash
# Cài đặt bằng pnpm (khuyến nghị)
pnpm install -g @anthropic-ai/claude-code

# Hoặc cài đặt bằng npm
npm install -g @anthropic-ai/claude-code
```

## Cấu hình Biến Môi trường

Thiết lập biến môi trường để sử dụng API Anthropic của AgentRouter:

::: code-group

```bash [Linux/macOS]
# Thiết lập URL cơ sở của API AgentRouter
export ANTHROPIC_BASE_URL=https://agentrouter.org/

# Thiết lập API key của AgentRouter, lấy từ https://agentrouter.org/console/token
export ANTHROPIC_AUTH_TOKEN=sk-xxx
export ANTHROPIC_API_KEY=sk-xxx
```

```powershell [Windows (PowerShell)]
# Thiết lập URL cơ sở của API AgentRouter
$env:ANTHROPIC_BASE_URL="https://agentrouter.org/"

# Thiết lập API key của AgentRouter, lấy từ https://agentrouter.org/console/token
$env:ANTHROPIC_AUTH_TOKEN="sk-xxx"
$env:ANTHROPIC_API_KEY="sk-xxx"
```

```cmd [Windows (CMD)]
# Thiết lập URL cơ sở của API AgentRouter
set ANTHROPIC_BASE_URL=https://agentrouter.org/

# Thiết lập API key của AgentRouter, lấy từ https://agentrouter.org/console/token
set ANTHROPIC_AUTH_TOKEN=sk-xxx
set ANTHROPIC_API_KEY=sk-xxx
```

:::

> [!IMPORTANT]
> Hãy đảm bảo thay thế `sk-xxx` bằng token AgentRouter thực của bạn. Bạn có thể lấy API Key từ [Bảng điều khiển AgentRouter](https://agentrouter.org/console/token).

## Bắt đầu Sử dụng

Sau khi cấu hình biến môi trường, mở thư mục dự án của bạn trong terminal và chạy lệnh sau để khởi động Claude Code:

```bash
# Di chuyển đến thư mục dự án
cd my-project

# Khởi động Claude Code
claude
```

::: tip
Bạn có thể thêm cấu hình biến môi trường vào shell profile để tránh phải thiết lập thủ công mỗi lần:

**Linux/macOS:**
```bash
# Thêm vào ~/.bashrc hoặc ~/.zshrc
export ANTHROPIC_BASE_URL=https://agentrouter.org/
export ANTHROPIC_AUTH_TOKEN=sk-xxx
export ANTHROPIC_API_KEY=sk-xxx
```

**Windows (PowerShell):**
Thêm vào PowerShell profile của bạn (`$PROFILE`):
```powershell
$env:ANTHROPIC_BASE_URL="https://agentrouter.org/"
$env:ANTHROPIC_AUTH_TOKEN="sk-xxx"
$env:ANTHROPIC_API_KEY="sk-xxx"
```

**Windows (Biến Hệ thống Vĩnh viễn):**
Sử dụng `setx` để thiết lập biến môi trường vĩnh viễn:
```cmd
setx ANTHROPIC_BASE_URL "https://agentrouter.org/"
setx ANTHROPIC_AUTH_TOKEN "sk-xxx"
setx ANTHROPIC_API_KEY "sk-xxx"
```
Lưu ý: Bạn cần khởi động lại terminal sau khi sử dụng `setx`.
:::
