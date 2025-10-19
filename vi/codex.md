# Sử dụng Agent Router với Codex

## Cài đặt Codex

::: code-group

```bash [pnpm]
pnpm install -g @openai/codex
```

```bash [npm]
npm install -g @openai/codex
```

```bash [yarn]
yarn global add @openai/codex
```

:::

## Cấu hình biến môi trường

1. Truy cập https://agentrouter.org/console/token để lấy API Key của bạn
2. Thiết lập biến môi trường hệ thống với tên `AGENT_ROUTER_TOKEN` và giá trị bạn vừa lấy được ([Hướng dẫn thiết lập biến môi trường](https://www.java.com/en/download/help/path.html))
3. Tạo file `~/.codex/config.toml` và thêm cấu hình sau:

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

4. Tạo file `~/.codex/auth.json` và thêm đoạn code sau:

```json
{
 "OPENAI_API_KEY":"Thay thế bằng API KEY của bạn"
}
```

## Khởi chạy trực tiếp

Sau khi cấu hình biến môi trường, sử dụng terminal để mở thư mục dự án bạn muốn làm việc, sau đó chạy lệnh sau để khởi động Codex:

```bash
# Điều hướng đến thư mục dự án
cd my-project

# Khởi chạy OpenAI Codex trực tiếp
codex
```


## Sử dụng Codex trong VSCode


1. Làm theo hướng dẫn ở trên để cài đặt Codex và cấu hình biến môi trường cũng như file cấu hình.

2. Mở VSCode và cài đặt [Codex extension](https://marketplace.visualstudio.com/items?itemName=openai.chatgpt).

3. Vào settings và nhấp vào biểu tượng ở góc trên bên phải để chuyển sang chế độ cấu hình JSON

![](../img/codex-config.png)

4. Thêm các mục cấu hình sau:


```json
"chatgpt.apiBase": "https://agentrouter.org/v1",
"chatgpt.config": {
    "pepreferred_auth_method": "api_key",
    "model_provider": "openai-chat-completions"
}
```

![](../img/codex-config2.png)


5. Nhấp vào biểu tượng Codex để bắt đầu sử dụng...


