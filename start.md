# Using Agent Router with Claude Code

## Install Claude Code

```bash
# Install using pnpm (recommended)
pnpm install -g @anthropic-ai/claude-code

# Or install using npm
npm install -g @anthropic-ai/claude-code
```

## Configure Environment Variables

Enter the following commands in your terminal to set up environment variables for using AgentRouter's Anthropic API:

```bash
# Set AgentRouter's API base URL
export ANTHROPIC_BASE_URL=https://agentrouter.org/

# Set your AgentRouter API key, which can be obtained from https://agentrouter.org/console/token
export ANTHROPIC_AUTH_TOKEN=sk-xxx
export ANTHROPIC_API_KEY=sk-xxx
```

> [!IMPORTANT]
> Make sure to replace sk-xxx with the Token provided by AgentRouter. You can get your API Key from the [AgentRouter Console](https://agentrouter.org/console/token).

## Direct Usage

After configuring the environment variables, open your project directory in the terminal and run the following command to start Claude Code:

```bash
# Navigate to project directory
cd my-project

# Start Claude Code directly
claude
```

::: tip
You can add the environment variable configuration to your shell configuration file to avoid setting them manually each time:

```bash
# Add to ~/.bashrc or ~/.zshrc file
export ANTHROPIC_BASE_URL=https://agentrouter.org/
export ANTHROPIC_AUTH_TOKEN=sk-xxx
export ANTHROPIC_API_KEY=sk-xxx
```

:::
