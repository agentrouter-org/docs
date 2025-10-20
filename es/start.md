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

# (Opcional) Establecer el modelo principal para Claude Code - utilizado para generación de código y análisis
export ANTHROPIC_MODEL=claude-sonnet-4-5-20250929

# (Opcional) Establecer el modelo rápido/ligero para tareas rápidas y llamadas de herramientas - reemplaza el deprecated ANTHROPIC_SMALL_FAST_MODEL
export ANTHROPIC_DEFAULT_HAIKU_MODEL=claude-haiku-4-5-20251001
```

```powershell [Windows PowerShell]
# Establecer la URL base de la API de AgentRouter
$env:ANTHROPIC_BASE_URL="https://agentrouter.org/"

# Establecer tu clave API de AgentRouter, disponible en https://agentrouter.org/console/token
$env:ANTHROPIC_AUTH_TOKEN="sk-xxx"
$env:ANTHROPIC_API_KEY="sk-xxx"

# (Opcional) Establecer el modelo principal para Claude Code - utilizado para generación de código y análisis
$env:ANTHROPIC_MODEL="claude-sonnet-4-5-20250929"

# (Opcional) Establecer el modelo rápido/ligero para tareas rápidas y llamadas de herramientas - reemplaza el deprecated ANTHROPIC_SMALL_FAST_MODEL
$env:ANTHROPIC_DEFAULT_HAIKU_MODEL="claude-haiku-4-5-20251001"
```

:::

> [!IMPORTANT]
> Asegúrate de reemplazar sk-xxx con el Token proporcionado por AgentRouter. Puedes obtener tu clave API en la [Consola de AgentRouter](https://agentrouter.org/console/token).

## Configuración de Modelos

### ANTHROPIC_MODEL
El modelo principal utilizado por Claude Code para generación de código y tareas de análisis integral. Este es el modelo de trabajo principal que maneja la mayoría de las operaciones de Claude Code. Está optimizado para producir soluciones de código de alta calidad.

### ANTHROPIC_DEFAULT_HAIKU_MODEL
El modelo rápido y ligero utilizado para tareas rápidas y llamadas de herramientas. Este modelo reemplaza el deprecated `ANTHROPIC_SMALL_FAST_MODEL` y está optimizado para respuestas rápidas y ejecución eficiente de herramientas. Es ideal para tareas que no requieren procesamiento extenso, como realizar llamadas API, ejecutar herramientas y manejar transformaciones simples.

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
export ANTHROPIC_MODEL=claude-sonnet-4-5-20250929
export ANTHROPIC_DEFAULT_HAIKU_MODEL=claude-haiku-4-5-20251001
```

```powershell [Windows PowerShell]
# Agregar al perfil de PowerShell ($PROFILE)
$env:ANTHROPIC_BASE_URL="https://agentrouter.org/"
$env:ANTHROPIC_AUTH_TOKEN="sk-xxx"
$env:ANTHROPIC_API_KEY="sk-xxx"
$env:ANTHROPIC_MODEL="claude-sonnet-4-5-20250929"
$env:ANTHROPIC_DEFAULT_HAIKU_MODEL="claude-haiku-4-5-20251001"
```

:::

