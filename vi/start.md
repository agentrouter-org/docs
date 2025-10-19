# Sử dụng Agent Router với Claude Code

## Cài đặt Claude Code

::: code-group

```bash [pnpm]
pnpm install -g @anthropic-ai/claude-code
```

```bash [npm]
npm install -g @anthropic-ai/claude-code
```

```bash [yarn]
yarn global add @anthropic-ai/claude-code
```

:::

## Cấu hình biến môi trường

Nhập các lệnh sau vào terminal của bạn để thiết lập biến môi trường cho việc sử dụng Anthropic API của AgentRouter:

::: code-group

```bash [Linux/macOS]
# Thiết lập URL cơ sở API của AgentRouter
export ANTHROPIC_BASE_URL=https://agentrouter.org/

# Thiết lập API key của AgentRouter, có sẵn tại https://agentrouter.org/console/token
export ANTHROPIC_AUTH_TOKEN=sk-xxx
export ANTHROPIC_API_KEY=sk-xxx
```

```powershell [Windows PowerShell]
# Thiết lập URL cơ sở API của AgentRouter
$env:ANTHROPIC_BASE_URL="https://agentrouter.org/"

# Thiết lập API key của AgentRouter, có sẵn tại https://agentrouter.org/console/token
$env:ANTHROPIC_AUTH_TOKEN="sk-xxx"
$env:ANTHROPIC_API_KEY="sk-xxx"
```

:::

> [!IMPORTANT]
> Đảm bảo thay thế sk-xxx bằng Token được cung cấp bởi AgentRouter. Bạn có thể lấy API Key từ [AgentRouter Console](https://agentrouter.org/console/token).


## Chạy trực tiếp

Sau khi cấu hình biến môi trường, sử dụng terminal để mở thư mục dự án bạn muốn làm việc, sau đó chạy lệnh sau để khởi động Claude Code:

```bash
# Điều hướng đến thư mục dự án
cd my-project

# Khởi chạy Claude Code trực tiếp
claude
```

::: tip
Bạn có thể thêm cấu hình biến môi trường vào file cấu hình shell của mình để tránh thiết lập thủ công mỗi lần:

::: code-group

```bash [Linux/macOS]
# Thêm vào file ~/.bashrc hoặc ~/.zshrc
export ANTHROPIC_BASE_URL=https://agentrouter.org/
export ANTHROPIC_AUTH_TOKEN=sk-xxx
export ANTHROPIC_API_KEY=sk-xxx
```

```powershell [Windows PowerShell]
# Thêm vào PowerShell profile ($PROFILE)
$env:ANTHROPIC_BASE_URL="https://agentrouter.org/"
$env:ANTHROPIC_AUTH_TOKEN="sk-xxx"
$env:ANTHROPIC_API_KEY="sk-xxx"
```

:::

