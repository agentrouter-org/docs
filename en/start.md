# Using Agent Router with Claude Code

## Install Claude Code

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

## Configure Environment Variables

Enter the following commands in your terminal to set environment variables for using AgentRouter's Anthropic API:

::: code-group

```bash [Linux/macOS]
# Set AgentRouter's API base URL
export ANTHROPIC_BASE_URL=https://agentrouter.org/

# Set your AgentRouter API key, available at https://agentrouter.org/console/token
export ANTHROPIC_AUTH_TOKEN=sk-xxx
export ANTHROPIC_API_KEY=sk-xxx
```

```powershell [Windows PowerShell]
# Set AgentRouter's API base URL
$env:ANTHROPIC_BASE_URL="https://agentrouter.org/"

# Set your AgentRouter API key, available at https://agentrouter.org/console/token
$env:ANTHROPIC_AUTH_TOKEN="sk-xxx"
$env:ANTHROPIC_API_KEY="sk-xxx"
```

```cmd [Windows CMD]
# Set AgentRouter's API base URL
set ANTHROPIC_BASE_URL=https://agentrouter.org/

# Set your AgentRouter API key, available at https://agentrouter.org/console/token
set ANTHROPIC_AUTH_TOKEN=sk-xxx
set ANTHROPIC_API_KEY=sk-xxx
```

:::

> [!IMPORTANT]
> Make sure to replace sk-xxx with the Token provided by AgentRouter. You can get your API Key from the [AgentRouter Console](https://agentrouter.org/console/token).


## Launch Directly

After configuring the environment variables, use your terminal to open the project directory you want to work with, then run the following command to start Claude Code:

::: code-group

```bash [Linux/macOS]
# Navigate to project directory
cd my-project

# Launch Claude Code directly
claude
```

```powershell [Windows PowerShell]
# Navigate to project directory
cd my-project

# Launch Claude Code directly
claude
```

```cmd [Windows CMD]
# Navigate to project directory
cd my-project

# Launch Claude Code directly
claude
```

:::

## Model Selection

You can control Claude Code's model choice using environment variables:

| Variable | Description |
| -------- | ----------- |
| ANTHROPIC_MODEL | Primary model for Claude Code. Accepts a model alias (e.g., sonnet, haiku) or a full model name. |
| ANTHROPIC_SMALL_FAST_MODEL | Fast, low-latency model for lightweight/background operations. Deprecated and kept only for backward compatibility. |

Recommended model names for example:

`claude-sonnet-4-5-20250929` `claude-sonnet-4-5-20250514` `claude-haiku-4-5-20251001` `claude-3-5-haiku-20241022`


::: code-group

```bash [Linux/macOS]
# Primary model
export ANTHROPIC_MODEL=claude-sonnet-4-5-20250929
# Fast model for lightweight ops (deprecated; use only if needed)
export ANTHROPIC_SMALL_FAST_MODEL=claude-3-5-haiku-20241022

# Launch Claude Code
claude
```

```powershell [Windows PowerShell]
# Primary model
$env:ANTHROPIC_MODEL = "claude-sonnet-4-5-20250929"
# Fast model for lightweight ops (deprecated; use only if needed)
$env:ANTHROPIC_SMALL_FAST_MODEL = "claude-3-5-haiku-20241022"

# Launch Claude Code
claude
```

```bash [Windows CMD]
# Primary model
set ANTHROPIC_MODEL=claude-sonnet-4-5-20250929
# Fast model for lightweight ops (deprecated; use only if needed)
set ANTHROPIC_SMALL_FAST_MODEL=claude-3-5-haiku-20241022

# Launch Claude Code
claude
```

:::


> [!NOTE]
> ANTHROPIC_SMALL_FAST_MODEL is deprecated. Migrate when possible to the recommended Haiku defaults. Until migration, it will still be honored for legacy fast/background operations. ANTHROPIC_MODEL remains the primary control for interactive coding and general tasks. 

