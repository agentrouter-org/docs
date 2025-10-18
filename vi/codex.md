# Sử dụng Agent Router với Codex

## Cài đặt Codex

```bash
# Cài đặt bằng pnpm (khuyến nghị)
pnpm install -g @openai/codex

# Hoặc cài đặt bằng npm
npm install -g @openai/codex
```

## Cấu hình Biến Môi trường

1. Truy cập https://agentrouter.org/console/token để lấy API Key của bạn
2. Thiết lập biến môi trường hệ thống với tên `AGENT_ROUTER_TOKEN` và giá trị là token của bạn

::: code-group

```bash [Linux/macOS]
# Thiết lập biến môi trường
export AGENT_ROUTER_TOKEN=sk-xxx
```

```powershell [Windows (PowerShell)]
# Thiết lập biến môi trường (phiên hiện tại)
$env:AGENT_ROUTER_TOKEN="sk-xxx"

# Hoặc thiết lập vĩnh viễn
[System.Environment]::SetEnvironmentVariable('AGENT_ROUTER_TOKEN', 'sk-xxx', 'User')
```

```cmd [Windows (CMD)]
# Thiết lập vĩnh viễn
setx AGENT_ROUTER_TOKEN "sk-xxx"
```

:::

3. Tạo file cấu hình và thêm các thiết lập sau:

::: code-group

```toml [Linux/macOS]
# Tạo file ~/.codex/config.toml
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

```toml [Windows]
# Tạo file %USERPROFILE%\.codex\config.toml
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

:::

4. Tạo file xác thực:

::: code-group

```json [Linux/macOS]
// Tạo file ~/.codex/auth.json
{
 "OPENAI_API_KEY":"Thay thế bằng API KEY của bạn"
}
```

```json [Windows]
// Tạo file %USERPROFILE%\.codex\auth.json
{
 "OPENAI_API_KEY":"Thay thế bằng API KEY của bạn"
}
```

:::

## Bắt đầu Sử dụng

Sau khi cấu hình biến môi trường, mở thư mục dự án trong terminal và chạy lệnh sau để khởi động Codex:

```bash
# Di chuyển đến thư mục dự án
cd my-project

# Khởi động OpenAI Codex
codex
```

## Sử dụng Codex trong VSCode

1. Làm theo hướng dẫn ở trên để cài đặt Codex và cấu hình biến môi trường cùng file cấu hình.

2. Mở VSCode và cài đặt [extension Codex](https://marketplace.visualstudio.com/items?itemName=openai.chatgpt).

3. Vào Cài đặt và nhấp vào biểu tượng ở góc trên bên phải để chuyển sang chế độ cấu hình JSON

![](../img/codex-config.png)

4. Thêm cấu hình sau:

```json
"chatgpt.apiBase": "https://agentrouter.org/v1",
"chatgpt.config": {
    "preferred_auth_method": "api_key",
    "model_provider": "openai-chat-completions"
}
```

![](../img/codex-config2.png)

5. Nhấp vào biểu tượng Codex để bắt đầu sử dụng
