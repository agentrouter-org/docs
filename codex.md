# Using Agent Router with Codex

## Install Codex

```bash
# Install using pnpm (recommended)
pnpm install -g @openai/codex

# Or install using npm
npm install -g @openai/codex
```

## Configure Environment Variables

1. Visit https://agentrouter.org/console/token to get your API Key
2. Set system environment variable with name `AGENT_ROUTER_TOKEN` and value as the key you just applied for ([Environment Variable Setup Tutorial](https://www.java.com/zh-CN/download/help/path.html))
3. Create `~/.codex/config.toml` file and add the following configuration

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

4. Create `~/.codex/auth.json` file and add the following code

```json
{
 "OPENAI_API_KEY":"Replace here with your applied KEY"
}
```

## Direct Usage

After configuring the environment variables, open your project directory in the terminal and run the following command to start Codex:

```bash
# Navigate to project directory
cd my-project

# Start OpenAI Codex directly
codex
```

## Using Codex in VSCode

1. Follow the instructions above to install Codex and configure environment variables and configuration files.

2. Open VSCode and install the [Codex Extension](https://marketplace.visualstudio.com/items?itemName=openai.chatgpt).

3. Go to settings and click the top right corner to switch to JSON configuration mode

![](./img/codex-config.png)

4. Add the following configuration items

```json
"chatgpt.apiBase": "https://agentrouter.org/v1",
"chatgpt.config": {
    "pepreferred_auth_method": "api_key",
    "model_provider": "openai-chat-completions"
}
```

![](./img/codex-config2.png)

5. Click the Codex icon to start using