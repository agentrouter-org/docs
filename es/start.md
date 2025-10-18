# Usar Agent Router con Claude Code

## Instalar Claude Code

```bash
# Instalar usando pnpm (recomendado)
pnpm install -g @anthropic-ai/claude-code

# O instalar usando npm
npm install -g @anthropic-ai/claude-code
```

## Configurar Variables de Entorno

Ingresa los siguientes comandos en tu terminal para configurar las variables de entorno para usar la API Anthropic de AgentRouter:

```bash
# Establecer la URL base de la API de AgentRouter
export ANTHROPIC_BASE_URL=https://agentrouter.org/

# Establecer tu clave API de AgentRouter, que puedes obtener de https://agentrouter.org/console/token
export ANTHROPIC_AUTH_TOKEN=sk-xxx
export ANTHROPIC_API_KEY=sk-xxx
```

> [!IMPORTANT]
> Asegúrate de reemplazar sk-xxx con el Token proporcionado por AgentRouter. Puedes obtener tu clave API desde la [Consola AgentRouter](https://agentrouter.org/console/token).

## Uso Directo

Después de configurar las variables de entorno, abre el directorio de tu proyecto en el terminal y ejecuta el siguiente comando para iniciar Claude Code:

```bash
# Navegar al directorio del proyecto
cd my-project

# Iniciar Claude Code directamente
claude
```

::: tip
Puedes agregar la configuración de variables de entorno a tu archivo de configuración de shell para evitar configurarlas manualmente cada vez:

```bash
# Agregar al archivo ~/.bashrc o ~/.zshrc
export ANTHROPIC_BASE_URL=https://agentrouter.org/
export ANTHROPIC_AUTH_TOKEN=sk-xxx
export ANTHROPIC_API_KEY=sk-xxx
```

:::
