# Using Agent Router with Qwen Code

## Install Qwen Code

```bash
# Install using pnpm (recommended)
pnpm install -g @qwen-code/qwen-code

# Or install using npm
npm install -g @qwen-code/qwen-code
```

## Configure Environment Variables

Set environment variables to use AgentRouter's OpenAI API:

::: code-group

```bash [Linux/macOS]
# Set your AgentRouter API key, get it from https://agentrouter.org/console/token
export OPENAI_API_KEY="sk-xxx"
# Set AgentRouter's API base URL
export OPENAI_BASE_URL="https://agentrouter.org/v1"  # Optional
export OPENAI_MODEL="gpt-5" # Optional, model name
```

```powershell [Windows (PowerShell)]
# Set your AgentRouter API key, get it from https://agentrouter.org/console/token
$env:OPENAI_API_KEY="sk-xxx"
# Set AgentRouter's API base URL
$env:OPENAI_BASE_URL="https://agentrouter.org/v1"  # Optional
$env:OPENAI_MODEL="gpt-5" # Optional, model name
```

```cmd [Windows (CMD)]
# Set your AgentRouter API key, get it from https://agentrouter.org/console/token
set OPENAI_API_KEY=sk-xxx
# Set AgentRouter's API base URL
set OPENAI_BASE_URL=https://agentrouter.org/v1
set OPENAI_MODEL=gpt-5
```

:::

> [!IMPORTANT]
> Make sure to replace `sk-xxx` with your actual AgentRouter token. You can get your API Key from the [AgentRouter Console](https://agentrouter.org/console/token).

## Start Using

After configuring the environment variables, open your project directory in the terminal and run the following command to start Qwen Code:

```bash
# Navigate to project directory
cd my-project

# Start Qwen Code
qwen
```

::: tip
You can add the environment variable configuration to your shell profile to avoid manual setup each time:

**Linux/macOS:**
```bash
# Add to ~/.bashrc or ~/.zshrc
export OPENAI_API_KEY="sk-xxx"
export OPENAI_BASE_URL="https://agentrouter.org/v1"
export OPENAI_MODEL="gpt-5"
```

**Windows (PowerShell):**
Add to your PowerShell profile (`$PROFILE`):
```powershell
$env:OPENAI_API_KEY="sk-xxx"
$env:OPENAI_BASE_URL="https://agentrouter.org/v1"
$env:OPENAI_MODEL="gpt-5"
```

**Windows (Permanent System Variables):**
Use `setx` to set permanent environment variables:
```cmd
setx OPENAI_API_KEY "sk-xxx"
setx OPENAI_BASE_URL "https://agentrouter.org/v1"
setx OPENAI_MODEL "gpt-5"
```
Note: You need to restart your terminal after using `setx`.
:::
