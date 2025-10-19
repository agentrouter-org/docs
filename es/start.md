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

```cmd [Windows CMD]
# Establecer la URL base de la API de AgentRouter
set ANTHROPIC_BASE_URL="https://agentrouter.org/"

# Establecer tu clave API de AgentRouter, disponible en https://agentrouter.org/console/token
set ANTHROPIC_AUTH_TOKEN="sk-xxx"
set ANTHROPIC_API_KEY="sk-xxx"
```

:::

> [!IMPORTANT]
> Asegúrate de reemplazar sk-xxx con el Token proporcionado por AgentRouter. Puedes obtener tu clave API en la [Consola de AgentRouter](https://agentrouter.org/console/token).


## Lanzamiento Directo

Después de configurar las variables de entorno, usa tu terminal para abrir el directorio del proyecto con el que deseas trabajar, luego ejecuta el siguiente comando para iniciar Claude Code:

::: code-group

```bash [Linux/macOS]
# Navegar al directorio del proyecto
cd mi-proyecto

# Lanzar Claude Code directamente
claude
```

```powershell [Windows PowerShell]
# Navegar al directorio del proyecto
cd mi-proyecto

# Lanzar Claude Code directamente
claude
```

```cmd [Windows CMD]
# Navegar al directorio del proyecto
cd mi-proyecto

# Lanzar Claude Code directamente
claude
```

:::

## Selección de modelo

Puedes controlar la selección de modelo de Claude Code mediante variables de entorno:

| Variable | Descripción |
| -------- | ----------- |
| ANTHROPIC_MODEL | Modelo principal de Claude Code. Acepta un alias de modelo (p. ej., sonnet, haiku) o un nombre completo. |
| ANTHROPIC_SMALL_FAST_MODEL | Modelo rápido y de baja latencia para operaciones ligeras/en segundo plano. Obsoleto; mantener solo por compatibilidad retroactiva. |

Nombres de modelos recomendados para ejemplo:

`claude-sonnet-4-5-20250929` `claude-sonnet-4-5-20250514` `claude-haiku-4-5-20251001` `claude-3-5-haiku-20241022`

::: code-group

```bash [Linux/macOS]
# Modelo principal
export ANTHROPIC_MODEL=claude-sonnet-4-5-20250929
# Modelo rápido para operaciones ligeras (obsoleto; usar solo si es necesario)
export ANTHROPIC_SMALL_FAST_MODEL=claude-3-5-haiku-20241022

# Iniciar Claude Code
claude
```

```powershell [Windows PowerShell]
# Modelo principal
$env:ANTHROPIC_MODEL = "claude-sonnet-4-5-20250929"
# Modelo rápido para operaciones ligeras (obsoleto; usar solo si es necesario)
$env:ANTHROPIC_SMALL_FAST_MODEL = "claude-3-5-haiku-20241022"

# Iniciar Claude Code
claude
```

```bash [Windows CMD]
# Modelo principal
set ANTHROPIC_MODEL=claude-sonnet-4-5-20250929
# Modelo rápido para operaciones ligeras (obsoleto; usar solo si es necesario)
set ANTHROPIC_SMALL_FAST_MODEL=claude-3-5-haiku-20241022

# Iniciar Claude Code
claude
```

:::

> [!NOTE]
> ANTHROPIC_SMALL_FAST_MODEL está obsoleto. Migra cuando sea posible a los modelos Haiku recomendados. Hasta la migración, seguirá siendo respetado para operaciones rápidas/en segundo plano de legado. ANTHROPIC_MODEL sigue siendo el control principal para tareas interactivas y generales.

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

```bash [Windows CMD]
# Agregar a la sesión CMD actual o a un script por lotes
set ANTHROPIC_BASE_URL="https://agentrouter.org/"
set ANTHROPIC_AUTH_TOKEN="sk-xxx"
set ANTHROPIC_API_KEY="sk-xxx"
```

:::
