# Using Agent Router with Qwen Code

## Install Qwen Code

```bash
# Install using pnpm (recommended)
pnpm install -g @qwen-code/qwen-code

# Or install using npm
npm install -g @qwen-code/qwen-code
```

## Configure Environment Variables

Enter the following commands in your terminal to set up environment variables ([Environment Variable Setup Tutorial](https://www.java.com/zh-CN/download/help/path.html)) for using AgentRouter's OpenAI API:

```bash
# Set your AgentRouter API key, which can be obtained from https://agentrouter.org/console/token
export OPENAI_API_KEY="sk-xxx"
# Set AgentRouter's API base URL
export OPENAI_BASE_URL="https://agentrouter.org/v1"  # Optional
export OPENAI_MODEL="gpt-5" # Optional, model name
```

> [!IMPORTANT]
> Make sure to replace sk-xxx with the Token provided by AgentRouter. You can get your API Key from the [AgentRouter Console](https://agentrouter.org/console/token).

## Direct Usage

After configuring the environment variables, open your project directory in the terminal and run the following command to start Qwen Code:

```bash
# Navigate to project directory
cd my-project

# Start Qwen Code directly
qwen
```

::: tip
You can add the environment variable configuration to your shell configuration file to avoid setting them manually each time:

```bash
# Add to ~/.bashrc or ~/.zshrc file
# Set your AgentRouter API key, which can be obtained from https://agentrouter.org/console/token
export OPENAI_API_KEY="sk-xxx"
# Set AgentRouter's API base URL
export OPENAI_BASE_URL="https://agentrouter.org/v1"  # Optional
export OPENAI_MODEL="gpt-5" # Optional, model name
```

:::

