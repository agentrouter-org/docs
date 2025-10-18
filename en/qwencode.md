# Using Agent Router with Qwen Code


## Install Qwen Code

::: code-group

```bash [pnpm]
pnpm install -g @qwen-code/qwen-code
```

```bash [npm]
npm install -g @qwen-code/qwen-code
```

```bash [yarn]
yarn global add @qwen-code/qwen-code
```

:::

## Configure Environment Variables

Enter the following commands in your terminal to set environment variables ([Environment Variable Setup Tutorial](https://www.java.com/en/download/help/path.html)) for using AgentRouter's OpenAI API:

::: code-group

```bash [Linux/macOS]
# Set your AgentRouter API key, available at https://agentrouter.org/console/token
export OPENAI_API_KEY="sk-xxx"
# Set AgentRouter's API base URL
export OPENAI_BASE_URL="https://agentrouter.org/v1"  # Optional
export OPENAI_MODEL="gpt-5" # Optional, model name
```

```powershell [Windows PowerShell]
# Set your AgentRouter API key, available at https://agentrouter.org/console/token
$env:OPENAI_API_KEY="sk-xxx"
# Set AgentRouter's API base URL
$env:OPENAI_BASE_URL="https://agentrouter.org/v1"  # Optional
$env:OPENAI_MODEL="gpt-5" # Optional, model name
```

:::

> [!IMPORTANT]
> Make sure to replace sk-xxx with the Token provided by AgentRouter. You can get your API Key from the [AgentRouter Console](https://agentrouter.org/console/token).


## Launch Directly

After configuring the environment variables, use your terminal to open the project directory you want to work with, then run the following command to start Qwen Code:

```bash
# Navigate to project directory
cd my-project

# Launch Qwen Code directly
qwen
```

::: tip
You can add the environment variable configuration to your shell configuration file to avoid manual setup each time:

::: code-group

```bash [Linux/macOS]
# Add to ~/.bashrc or ~/.zshrc file
# Set your AgentRouter API key, available at https://agentrouter.org/console/token
export OPENAI_API_KEY="sk-xxx"
# Set AgentRouter's API base URL
export OPENAI_BASE_URL="https://agentrouter.org/v1"  # Optional
export OPENAI_MODEL="gpt-5" # Optional, model name
```

```powershell [Windows PowerShell]
# Add to PowerShell profile ($PROFILE)
# Set your AgentRouter API key, available at https://agentrouter.org/console/token
$env:OPENAI_API_KEY="sk-xxx"
# Set AgentRouter's API base URL
$env:OPENAI_BASE_URL="https://agentrouter.org/v1"  # Optional
$env:OPENAI_MODEL="gpt-5" # Optional, model name
```

:::
