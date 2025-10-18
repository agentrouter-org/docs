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
2. Set the system environment variable with name `AGENT_ROUTER_TOKEN` and value as your token

::: code-group

```bash [Linux/macOS]
# Set environment variable
export AGENT_ROUTER_TOKEN=sk-xxx
```

```powershell [Windows (PowerShell)]
# Set environment variable (current session)
$env:AGENT_ROUTER_TOKEN="sk-xxx"

# Or set permanently
[System.Environment]::SetEnvironmentVariable('AGENT_ROUTER_TOKEN', 'sk-xxx', 'User')
```

```cmd [Windows (CMD)]
# Set permanently
setx AGENT_ROUTER_TOKEN "sk-xxx"
```

:::

3. Create the configuration file and add the following settings:

::: code-group

```toml [Linux/macOS]
# Create ~/.codex/config.toml file
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
# Create %USERPROFILE%\.codex\config.toml file
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

4. Create the authentication file:

::: code-group

```json [Linux/macOS]
// Create ~/.codex/auth.json file
{
 "OPENAI_API_KEY":"Replace with your API KEY"
}
```

```json [Windows]
// Create %USERPROFILE%\.codex\auth.json file
{
 "OPENAI_API_KEY":"Replace with your API KEY"
}
```

:::

## Start Using

After configuring the environment variables, open your project directory in the terminal and run the following command to start Codex:

```bash
# Navigate to project directory
cd my-project

# Start OpenAI Codex
codex
```

## Using Codex in VSCode

1. Follow the instructions above to install Codex and configure environment variables and configuration files.

2. Open VSCode and install the [Codex extension](https://marketplace.visualstudio.com/items?itemName=openai.chatgpt).

3. Go to Settings and click the icon in the upper right corner to switch to JSON configuration mode

![](../img/codex-config.png)

4. Add the following configuration:

```json
"chatgpt.apiBase": "https://agentrouter.org/v1",
"chatgpt.config": {
    "preferred_auth_method": "api_key",
    "model_provider": "openai-chat-completions"
}
```

![](../img/codex-config2.png)

5. Click the Codex icon to start using
