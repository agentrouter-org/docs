# Usar Agent Router con Claude Code

## Instalar Claude Code

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

## Configurar Variables de Entorno

Ingresa los siguientes comandos en tu terminal para establecer las variables de entorno para usar la API Anthropic de AgentRouter:

::: code-group

```bash [Linux/macOS]
# Establecer la URL base de la API de AgentRouter
export ANTHROPIC_BASE_URL=https://agentrouter.org/

# Establecer tu clave API de AgentRouter, disponible en https://agentrouter.org/console/token
export ANTHROPIC_AUTH_TOKEN=sk-xxx
export ANTHROPIC_API_KEY=sk-xxx
```

```powershell [Windows PowerShell]
# Establecer la URL base de la API de AgentRouter
$env:ANTHROPIC_BASE_URL="https://agentrouter.org/"

# Establecer tu clave API de AgentRouter, disponible en https://agentrouter.org/console/token
$env:ANTHROPIC_AUTH_TOKEN="sk-xxx"
$env:ANTHROPIC_API_KEY="sk-xxx"
```

:::

> [!IMPORTANT]
> Asegúrate de reemplazar sk-xxx con el Token proporcionado por AgentRouter. Puedes obtener tu clave API en la [Consola de AgentRouter](https://agentrouter.org/console/token).


## Lanzamiento Directo

Después de configurar las variables de entorno, usa tu terminal para abrir el directorio del proyecto con el que deseas trabajar, luego ejecuta el siguiente comando para iniciar Claude Code:

```bash
# Navegar al directorio del proyecto
cd mi-proyecto

# Lanzar Claude Code directamente
claude
```

::: tip
Puedes agregar la configuración de variables de entorno a tu archivo de configuración del shell para evitar configurarlas manualmente cada vez:

::: code-group

```bash [Linux/macOS]
# Agregar al archivo ~/.bashrc o ~/.zshrc
export ANTHROPIC_BASE_URL=https://agentrouter.org/
export ANTHROPIC_AUTH_TOKEN=sk-xxx
export ANTHROPIC_API_KEY=sk-xxx
```

```powershell [Windows PowerShell]
# Agregar al perfil de PowerShell ($PROFILE)
$env:ANTHROPIC_BASE_URL="https://agentrouter.org/"
$env:ANTHROPIC_AUTH_TOKEN="sk-xxx"
$env:ANTHROPIC_API_KEY="sk-xxx"
```

:::
