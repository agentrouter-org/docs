# Usar Agent Router con Claude Code

## Instalar Claude Code

::: code-group

```bash [pnpm (recomendado)]
# Instalar usando pnpm (recomendado)
pnpm install -g @anthropic-ai/claude-code
```

```bash [npm]
# O instalar usando npm
npm install -g @anthropic-ai/claude-code
```

:::

## Configurar Variables de Entorno

Ingresa los siguientes comandos en la terminal para configurar las variables de entorno para usar la API de Anthropic de AgentRouter:

```bash
# Configurar la URL base de la API de AgentRouter
export ANTHROPIC_BASE_URL=https://agentrouter.org/

# Configurar tu clave API de AgentRouter, que se puede obtener de https://agentrouter.org/console/token
export ANTHROPIC_AUTH_TOKEN=sk-xxx
export ANTHROPIC_API_KEY=sk-xxx
```

> [!IMPORTANT]
> Por favor asegúrate de reemplazar sk-xxx con el Token proporcionado por AgentRouter. Puedes obtener la Clave API desde la [Consola de AgentRouter](https://agentrouter.org/console/token).

## Lanzamiento Directo y Uso

Después de configurar las variables de entorno, usa la terminal para abrir el directorio del proyecto con el que quieres trabajar, luego ejecuta el siguiente comando para iniciar Claude Code:

```bash
# Entrar al directorio del proyecto
cd my-project

# Iniciar directamente Claude Code
claude
```

::: tip
Puedes agregar la configuración de variables de entorno a tu archivo de configuración del shell para evitar configurarlo manualmente cada vez:

```bash
# Agregar al archivo ~/.bashrc o ~/.zshrc
export ANTHROPIC_BASE_URL=https://agentrouter.org/
export ANTHROPIC_AUTH_TOKEN=sk-xxx
export ANTHROPIC_API_KEY=sk-xxx
```

:::
