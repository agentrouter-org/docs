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

# (Optional) Set the main model for Claude Code - used for code generation and analysis
export ANTHROPIC_MODEL=claude-sonnet-4-5-20250929

# (Optional) Set the fast/small model for quick tasks and tool calls - replaces deprecated ANTHROPIC_SMALL_FAST_MODEL
export ANTHROPIC_DEFAULT_HAIKU_MODEL=claude-haiku-4-5-20251001
```

```powershell [Windows PowerShell]
# Set AgentRouter's API base URL
$env:ANTHROPIC_BASE_URL="https://agentrouter.org/"

# Set your AgentRouter API key, available at https://agentrouter.org/console/token
$env:ANTHROPIC_AUTH_TOKEN="sk-xxx"
$env:ANTHROPIC_API_KEY="sk-xxx"

# (Optional) Set the main model for Claude Code - used for code generation and analysis
$env:ANTHROPIC_MODEL="claude-sonnet-4-5-20250929"

# (Optional) Set the fast/small model for quick tasks and tool calls - replaces deprecated ANTHROPIC_SMALL_FAST_MODEL
$env:ANTHROPIC_DEFAULT_HAIKU_MODEL="claude-haiku-4-5-20251001"
```

:::

> [!IMPORTANT]
> Make sure to replace sk-xxx with the Token provided by AgentRouter. You can get your API Key from the [AgentRouter Console](https://agentrouter.org/console/token).

## Model Configuration

### ANTHROPIC_MODEL
The primary model used by Claude Code for code generation and comprehensive analysis tasks. This is the main workhorse model that handles the majority of Claude Code operations. It's optimized for producing high-quality code solutions.

### ANTHROPIC_DEFAULT_HAIKU_MODEL
The fast and lightweight model used for quick tasks and tool calls. This model replaces the deprecated `ANTHROPIC_SMALL_FAST_MODEL` and is optimized for rapid responses and efficient tool execution. It's ideal for tasks that don't require extensive processing, such as making API calls, executing tools, and handling simple transformations.

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
export ANTHROPIC_MODEL=claude-sonnet-4-5-20250929
export ANTHROPIC_DEFAULT_HAIKU_MODEL=claude-haiku-4-5-20251001
```

```powershell [Windows PowerShell]
# Add to PowerShell profile ($PROFILE)
$env:ANTHROPIC_BASE_URL="https://agentrouter.org/"
$env:ANTHROPIC_AUTH_TOKEN="sk-xxx"
$env:ANTHROPIC_API_KEY="sk-xxx"
$env:ANTHROPIC_MODEL="claude-sonnet-4-5-20250929"
$env:ANTHROPIC_DEFAULT_HAIKU_MODEL="claude-haiku-4-5-20251001"
```

:::

