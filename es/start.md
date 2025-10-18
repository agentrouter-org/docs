# Usar Agent Router con Claude Code

## Instalar Claude Code

```bash
# Instalar usando pnpm (recomendado)
pnpm install -g @anthropic-ai/claude-code

# O instalar usando npm
npm install -g @anthropic-ai/claude-code
```

## Configurar Variables de Entorno

Configure las variables de entorno para usar la API de Anthropic de AgentRouter:

::: code-group

```bash [Linux/macOS]
# Establecer la URL base de la API de AgentRouter
export ANTHROPIC_BASE_URL=https://agentrouter.org/

# Establecer su clave API de AgentRouter, obténgala de https://agentrouter.org/console/token
export ANTHROPIC_AUTH_TOKEN=sk-xxx
export ANTHROPIC_API_KEY=sk-xxx
```

```powershell [Windows (PowerShell)]
# Establecer la URL base de la API de AgentRouter
$env:ANTHROPIC_BASE_URL="https://agentrouter.org/"

# Establecer su clave API de AgentRouter, obténgala de https://agentrouter.org/console/token
$env:ANTHROPIC_AUTH_TOKEN="sk-xxx"
$env:ANTHROPIC_API_KEY="sk-xxx"
```

```cmd [Windows (CMD)]
# Establecer la URL base de la API de AgentRouter
set ANTHROPIC_BASE_URL=https://agentrouter.org/

# Establecer su clave API de AgentRouter, obténgala de https://agentrouter.org/console/token
set ANTHROPIC_AUTH_TOKEN=sk-xxx
set ANTHROPIC_API_KEY=sk-xxx
```

:::

> [!IMPORTANT]
> Asegúrese de reemplazar `sk-xxx` con su token real de AgentRouter. Puede obtener su clave API desde la [Consola de AgentRouter](https://agentrouter.org/console/token).

## Comenzar a Usar

Después de configurar las variables de entorno, abra el directorio de su proyecto en la terminal y ejecute el siguiente comando para iniciar Claude Code:

```bash
# Navegar al directorio del proyecto
cd mi-proyecto

# Iniciar Claude Code
claude
```

::: tip
Puede agregar la configuración de variables de entorno a su perfil de shell para evitar la configuración manual cada vez:

**Linux/macOS:**
```bash
# Agregar a ~/.bashrc o ~/.zshrc
export ANTHROPIC_BASE_URL=https://agentrouter.org/
export ANTHROPIC_AUTH_TOKEN=sk-xxx
export ANTHROPIC_API_KEY=sk-xxx
```

**Windows (PowerShell):**
Agregue a su perfil de PowerShell (`$PROFILE`):
```powershell
$env:ANTHROPIC_BASE_URL="https://agentrouter.org/"
$env:ANTHROPIC_AUTH_TOKEN="sk-xxx"
$env:ANTHROPIC_API_KEY="sk-xxx"
```

**Windows (Variables del Sistema Permanentes):**
Use `setx` para establecer variables de entorno permanentes:
```cmd
setx ANTHROPIC_BASE_URL "https://agentrouter.org/"
setx ANTHROPIC_AUTH_TOKEN "sk-xxx"
setx ANTHROPIC_API_KEY "sk-xxx"
```
Nota: Debe reiniciar su terminal después de usar `setx`.
:::
