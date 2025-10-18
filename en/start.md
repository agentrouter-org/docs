# Using Agent Router with Claude Code

## Install Claude Code

```bash
# Install using pnpm (recommended)
pnpm install -g @anthropic-ai/claude-code

# Or install using npm
npm install -g @anthropic-ai/claude-code
```

## Configure Environment Variables

Set environment variables to use AgentRouter's Anthropic API:

::: code-group

```bash [Linux/macOS]
# Set AgentRouter's API base URL
export ANTHROPIC_BASE_URL=https://agentrouter.org/

# Set your AgentRouter API key, get it from https://agentrouter.org/console/token
export ANTHROPIC_AUTH_TOKEN=sk-xxx
export ANTHROPIC_API_KEY=sk-xxx
```

```powershell [Windows (PowerShell)]
# Set AgentRouter's API base URL
$env:ANTHROPIC_BASE_URL="https://agentrouter.org/"

# Set your AgentRouter API key, get it from https://agentrouter.org/console/token
$env:ANTHROPIC_AUTH_TOKEN="sk-xxx"
$env:ANTHROPIC_API_KEY="sk-xxx"
```

```cmd [Windows (CMD)]
# Set AgentRouter's API base URL
set ANTHROPIC_BASE_URL=https://agentrouter.org/

# Set your AgentRouter API key, get it from https://agentrouter.org/console/token
set ANTHROPIC_AUTH_TOKEN=sk-xxx
set ANTHROPIC_API_KEY=sk-xxx
```

:::

> [!IMPORTANT]
> Make sure to replace `sk-xxx` with your actual AgentRouter token. You can get your API Key from the [AgentRouter Console](https://agentrouter.org/console/token).

## Start Using

After configuring the environment variables, open your project directory in the terminal and run the following command to start Claude Code:

```bash
# Navigate to project directory
cd my-project

# Start Claude Code
claude
```

::: tip
You can add the environment variable configuration to your shell profile to avoid manual setup each time:

**Linux/macOS:**
```bash
# Add to ~/.bashrc or ~/.zshrc
export ANTHROPIC_BASE_URL=https://agentrouter.org/
export ANTHROPIC_AUTH_TOKEN=sk-xxx
export ANTHROPIC_API_KEY=sk-xxx
```

**Windows (PowerShell):**
Add to your PowerShell profile (`$PROFILE`):
```powershell
$env:ANTHROPIC_BASE_URL="https://agentrouter.org/"
$env:ANTHROPIC_AUTH_TOKEN="sk-xxx"
$env:ANTHROPIC_API_KEY="sk-xxx"
```

**Windows (Permanent System Variables):**
Use `setx` to set permanent environment variables:
```cmd
setx ANTHROPIC_BASE_URL "https://agentrouter.org/"
setx ANTHROPIC_AUTH_TOKEN "sk-xxx"
setx ANTHROPIC_API_KEY "sk-xxx"
```
Note: You need to restart your terminal after using `setx`.
:::
