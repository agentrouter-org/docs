# Using Agent Router with Claude Code

## Install Claude Code

::: code-group

```bash [pnpm (recommended)]
# Install using pnpm (recommended)
pnpm install -g @anthropic-ai/claude-code
```

```bash [npm]
# Or install using npm
npm install -g @anthropic-ai/claude-code
```

:::

## Configure Environment Variables

Enter the following commands in the terminal to set environment variables to use AgentRouter's Anthropic API:

::: tabs

::: tab Linux/macOS (bash/zsh)
```bash
# Set AgentRouter's API base URL
export ANTHROPIC_BASE_URL=https://agentrouter.org/

# Set your AgentRouter API key, which can be obtained from https://agentrouter.org/console/token
export ANTHROPIC_AUTH_TOKEN=sk-xxx
export ANTHROPIC_API_KEY=sk-xxx
```
:::

::: tab Windows PowerShell
```powershell
# Set AgentRouter's API base URL
$env:ANTHROPIC_BASE_URL="https://agentrouter.org/"

# Set your AgentRouter API key, which can be obtained from https://agentrouter.org/console/token
$env:ANTHROPIC_AUTH_TOKEN="sk-xxx"
$env:ANTHROPIC_API_KEY="sk-xxx"
```
:::

::: tab Windows CMD
```cmd
# Set AgentRouter's API base URL
set ANTHROPIC_BASE_URL=https://agentrouter.org/

# Set your AgentRouter API key, which can be obtained from https://agentrouter.org/console/token
set ANTHROPIC_AUTH_TOKEN=sk-xxx
set ANTHROPIC_API_KEY=sk-xxx
```
:::

::: tab Fish Shell
```fish
# Set AgentRouter's API base URL
set -gx ANTHROPIC_BASE_URL "https://agentrouter.org/"

# Set your AgentRouter API key, which can be obtained from https://agentrouter.org/console/token
set -gx ANTHROPIC_AUTH_TOKEN "sk-xxx"
set -gx ANTHROPIC_API_KEY "sk-xxx"
```
:::

:::

> [!IMPORTANT]
> Please make sure to replace sk-xxx with the Token provided by AgentRouter. You can get the API Key from the [AgentRouter Console](https://agentrouter.org/console/token).

## Direct Launch and Use

After configuring the environment variables, use the terminal to open the project directory you want to work with, then run the following command to start Claude Code:

```bash
# Enter the project directory
cd my-project

# Directly start Claude Code
claude
```

::: tip
You can add environment variable configuration to your shell configuration file to avoid manually setting it each time:

::: tabs

::: tab Linux/macOS (bash/zsh)
```bash
# Add to ~/.bashrc or ~/.zshrc file
export ANTHROPIC_BASE_URL=https://agentrouter.org/
export ANTHROPIC_AUTH_TOKEN=sk-xxx
export ANTHROPIC_API_KEY=sk-xxx
```
:::

::: tab Windows PowerShell
```powershell
# Add to PowerShell profile ($PROFILE)
$env:ANTHROPIC_BASE_URL="https://agentrouter.org/"
$env:ANTHROPIC_AUTH_TOKEN="sk-xxx"
$env:ANTHROPIC_API_KEY="sk-xxx"
```
:::

::: tab Windows CMD
```cmd
# Add to batch file or system environment variables
set ANTHROPIC_BASE_URL=https://agentrouter.org/
set ANTHROPIC_AUTH_TOKEN=sk-xxx
set ANTHROPIC_API_KEY=sk-xxx
```
:::

::: tab Fish Shell
```fish
# Add to ~/.config/fish/config.fish file
set -gx ANTHROPIC_BASE_URL "https://agentrouter.org/"
set -gx ANTHROPIC_AUTH_TOKEN "sk-xxx"
set -gx ANTHROPIC_API_KEY "sk-xxx"
```
:::

:::

:::
