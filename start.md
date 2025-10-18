# 在 Claude Code 中使用 Agent Router

## 安装 Claude Code

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
## 配置环境变量

在终端中输入如下命令，设置环境变量来使用 AgentRouter 的 Anthropic API :

::: code-group

```bash [Linux/macOS]
# 设置 AgentRouter 的 API 基础 URL
export ANTHROPIC_BASE_URL=https://agentrouter.org/

# 设置您的 AgentRouter API 密钥, 可以从 https://agentrouter.org/console/token 获取
export ANTHROPIC_AUTH_TOKEN=sk-xxx
export ANTHROPIC_API_KEY=sk-xxx
```

```powershell [Windows PowerShell]
# 设置 AgentRouter 的 API 基础 URL
$env:ANTHROPIC_BASE_URL="https://agentrouter.org/"

# 设置您的 AgentRouter API 密钥, 可以从 https://agentrouter.org/console/token 获取
$env:ANTHROPIC_AUTH_TOKEN="sk-xxx"
$env:ANTHROPIC_API_KEY="sk-xxx"
```

> [!IMPORTANT]
> 请确保将 sk-xxx 替换为 AgentRouter 提供的 Token 。您可以在 [AgentRouter 控制台](https://agentrouter.org/console/token ) 中获取 API Key。


## 直接启动使用

配置好环境变量后，使用终端打开你要操作的项目目录，然后运行如下命令启动 Claude Code

```bash
# 进入项目目录
cd my-project

# 直接启动 Claude Code
claude
```
::: tip
您可以将环境变量配置添加到您的 shell 配置文件中，避免每次手动设置：

::: code-group

```bash [Linux/macOS]
# 添加到 ~/.bashrc 或 ~/.zshrc 文件中
export ANTHROPIC_BASE_URL=https://agentrouter.org/
export ANTHROPIC_AUTH_TOKEN=sk-xxx
export ANTHROPIC_API_KEY=sk-xxx
```

```powershell [Windows PowerShell]
# 添加到 PowerShell 配置文件 ($PROFILE)
$env:ANTHROPIC_BASE_URL="https://agentrouter.org/"
$env:ANTHROPIC_AUTH_TOKEN="sk-xxx"
$env:ANTHROPIC_API_KEY="sk-xxx"
```
