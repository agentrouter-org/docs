# Using Agent Router with Qwen Code

## Install Qwen Code

::: code-group

```bash [pnpm (recommended)]
# Install using pnpm (recommended)
pnpm install -g @qwen-code/qwen-code
```

```bash [npm]
# Or install using npm
npm install -g @qwen-code/qwen-code
```

:::

## Configure Environment Variables

Enter the following commands in the terminal to set environment variables ([Environment Variable Setup Tutorial](https://www.java.com/zh-CN/download/help/path.html)) to use AgentRouter's OpenAI API:

::: tabs

::: tab Linux/macOS (bash/zsh)
```bash
# Set your AgentRouter API key, which can be obtained from https://agentrouter.org/console/token
export OPENAI_API_KEY="sk-xxx"
# Set AgentRouter's API base URL
export OPENAI_BASE_URL="https://agentrouter.org/v1"  # Optional
export OPENAI_MODEL="gpt-5" # Optional, model name
```
:::

::: tab Windows PowerShell
```powershell
# Set your AgentRouter API key, which can be obtained from https://agentrouter.org/console/token
$env:OPENAI_API_KEY="sk-xxx"
# Set AgentRouter's API base URL
$env:OPENAI_BASE_URL="https://agentrouter.org/v1"  # Optional
$env:OPENAI_MODEL="gpt-5" # Optional, model name
```
:::

::: tab Windows CMD
```cmd
# Set your AgentRouter API key, which can be obtained from https://agentrouter.org/console/token
set OPENAI_API_KEY=sk-xxx
# Set AgentRouter's API base URL
set OPENAI_BASE_URL=https://agentrouter.org/v1
set OPENAI_MODEL=gpt-5
```
:::

::: tab Fish Shell
```fish
# Set your AgentRouter API key, which can be obtained from https://agentrouter.org/console/token
set -gx OPENAI_API_KEY "sk-xxx"
# Set AgentRouter's API base URL
set -gx OPENAI_BASE_URL "https://agentrouter.org/v1"  # Optional
set -gx OPENAI_MODEL "gpt-5" # Optional, model name
```
:::

:::

> [!IMPORTANT]
> Please make sure to replace sk-xxx with the Token provided by AgentRouter. You can get the API Key from the [AgentRouter Console](https://agentrouter.org/console/token).

## Direct Launch and Use

After configuring the environment variables, use the terminal to open the project directory you want to work with, then run the following command to start Qwen Code:

```bash
# Enter the project directory
cd my-project

# Directly start Qwen Code
qwen
```

::: tip
You can add environment variable configuration to your shell configuration file to avoid manually setting it each time:

::: tabs

::: tab Linux/macOS (bash/zsh)
```bash
# Add to ~/.bashrc or ~/.zshrc file
# Set your AgentRouter API key, which can be obtained from https://agentrouter.org/console/token
export OPENAI_API_KEY="sk-xxx"
# Set AgentRouter's API base URL
export OPENAI_BASE_URL="https://agentrouter.org/v1"  # Optional
export OPENAI_MODEL="gpt-5" # Optional, model name
```
:::

::: tab Windows PowerShell
```powershell
# Add to PowerShell profile ($PROFILE)
# Set your AgentRouter API key, which can be obtained from https://agentrouter.org/console/token
$env:OPENAI_API_KEY="sk-xxx"
# Set AgentRouter's API base URL
$env:OPENAI_BASE_URL="https://agentrouter.org/v1"  # Optional
$env:OPENAI_MODEL="gpt-5" # Optional, model name
```
:::

::: tab Windows CMD
```cmd
# Add to batch file or system environment variables
# Set your AgentRouter API key, which can be obtained from https://agentrouter.org/console/token
set OPENAI_API_KEY=sk-xxx
# Set AgentRouter's API base URL
set OPENAI_BASE_URL=https://agentrouter.org/v1
set OPENAI_MODEL=gpt-5
```
:::

::: tab Fish Shell
```fish
# Add to ~/.config/fish/config.fish file
# Set your AgentRouter API key, which can be obtained from https://agentrouter.org/console/token
set -gx OPENAI_API_KEY "sk-xxx"
# Set AgentRouter's API base URL
set -gx OPENAI_BASE_URL "https://agentrouter.org/v1"  # Optional
set -gx OPENAI_MODEL "gpt-5" # Optional, model name
```
:::

:::

:::
