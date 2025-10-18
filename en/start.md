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

:::

> [!IMPORTANT]
> Make sure to replace sk-xxx with the Token provided by AgentRouter. You can get your API Key from the [AgentRouter Console](https://agentrouter.org/console/token).


## Launch Directly

After configuring the environment variables, use your terminal to open the project directory you want to work with, then run the following command to start Claude Code:

```bash
# Navigate to project directory
cd my-project

# Launch Claude Code directly
claude
```

::: tip
You can add the environment variable configuration to your shell configuration file to avoid manual setup each time:

::: code-group

```bash [Linux/macOS]
# Add to ~/.bashrc or ~/.zshrc file
export ANTHROPIC_BASE_URL=https://agentrouter.org/
export ANTHROPIC_AUTH_TOKEN=sk-xxx
export ANTHROPIC_API_KEY=sk-xxx
```

```powershell [Windows PowerShell]
# Add to PowerShell profile ($PROFILE)
$env:ANTHROPIC_BASE_URL="https://agentrouter.org/"
$env:ANTHROPIC_AUTH_TOKEN="sk-xxx"
$env:ANTHROPIC_API_KEY="sk-xxx"
```

:::
