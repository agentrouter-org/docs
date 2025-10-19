# Sử dụng Agent Router với Qwen Code


## Cài đặt Qwen Code

::: code-group

```bash [pnpm]
pnpm install -g @qwen-code/qwen-code
```

```bash [npm]
npm install -g @qwen-code/qwen-code
```

```bash [yarn]
yarn global add @qwen-code/qwen-code
```

:::

## Cấu hình biến môi trường

Nhập các lệnh sau vào terminal của bạn để thiết lập biến môi trường ([Hướng dẫn thiết lập biến môi trường](https://www.java.com/en/download/help/path.html)) cho việc sử dụng OpenAI API của AgentRouter:

::: code-group

```bash [Linux/macOS]
# Thiết lập API key của AgentRouter, có sẵn tại https://agentrouter.org/console/token
export OPENAI_API_KEY="sk-xxx"
# Thiết lập URL cơ sở API của AgentRouter
export OPENAI_BASE_URL="https://agentrouter.org/v1"  # Tùy chọn
export OPENAI_MODEL="gpt-5" # Tùy chọn, tên model
```

```powershell [Windows PowerShell]
# Thiết lập API key của AgentRouter, có sẵn tại https://agentrouter.org/console/token
$env:OPENAI_API_KEY="sk-xxx"
# Thiết lập URL cơ sở API của AgentRouter
$env:OPENAI_BASE_URL="https://agentrouter.org/v1"  # Tùy chọn
$env:OPENAI_MODEL="gpt-5" # Tùy chọn, tên model
```

:::

> [!IMPORTANT]
> Đảm bảo thay thế sk-xxx bằng Token được cung cấp bởi AgentRouter. Bạn có thể lấy API Key từ [AgentRouter Console](https://agentrouter.org/console/token).


## Khởi chạy trực tiếp

Sau khi cấu hình biến môi trường, sử dụng terminal để mở thư mục dự án bạn muốn làm việc, sau đó chạy lệnh sau để khởi động Qwen Code:

```bash
# Điều hướng đến thư mục dự án
cd my-project

# Khởi chạy Qwen Code trực tiếp
qwen
```

::: tip
Bạn có thể thêm cấu hình biến môi trường vào file cấu hình shell của mình để tránh thiết lập thủ công mỗi lần:

::: code-group

```bash [Linux/macOS]
# Thêm vào file ~/.bashrc hoặc ~/.zshrc
# Thiết lập API key của AgentRouter, có sẵn tại https://agentrouter.org/console/token
export OPENAI_API_KEY="sk-xxx"
# Thiết lập URL cơ sở API của AgentRouter
export OPENAI_BASE_URL="https://agentrouter.org/v1"  # Tùy chọn
export OPENAI_MODEL="gpt-5" # Tùy chọn, tên model
```

```powershell [Windows PowerShell]
# Thêm vào PowerShell profile ($PROFILE)
# Thiết lập API key của AgentRouter, có sẵn tại https://agentrouter.org/console/token
$env:OPENAI_API_KEY="sk-xxx"
# Thiết lập URL cơ sở API của AgentRouter
$env:OPENAI_BASE_URL="https://agentrouter.org/v1"  # Tùy chọn
$env:OPENAI_MODEL="gpt-5" # Tùy chọn, tên model
```

:::

