# Usar Agent Router con Qwen Code

## Instalar Qwen Code

::: code-group

```bash [pnpm (recomendado)]
# Instalar usando pnpm (recomendado)
pnpm install -g @qwen-code/qwen-code
```

```bash [npm]
# O instalar usando npm
npm install -g @qwen-code/qwen-code
```

:::

## Configurar Variables de Entorno

Ingresa los siguientes comandos en la terminal para configurar las variables de entorno ([Tutorial de Configuración de Variables de Entorno](https://www.java.com/zh-CN/download/help/path.html)) para usar la API de OpenAI de AgentRouter:

```bash
# Configurar tu clave API de AgentRouter, que se puede obtener de https://agentrouter.org/console/token
export OPENAI_API_KEY="sk-xxx"
# Configurar la URL base de la API de AgentRouter
export OPENAI_BASE_URL="https://agentrouter.org/v1"  # Opcional
export OPENAI_MODEL="gpt-5" # Opcional, nombre del modelo
```

> [!IMPORTANT]
> Por favor asegúrate de reemplazar sk-xxx con el Token proporcionado por AgentRouter. Puedes obtener la Clave API desde la [Consola de AgentRouter](https://agentrouter.org/console/token).

## Lanzamiento Directo y Uso

Después de configurar las variables de entorno, usa la terminal para abrir el directorio del proyecto con el que quieres trabajar, luego ejecuta el siguiente comando para iniciar Qwen Code:

```bash
# Entrar al directorio del proyecto
cd my-project

# Iniciar directamente Qwen Code
qwen
```

::: tip
Puedes agregar la configuración de variables de entorno a tu archivo de configuración del shell para evitar configurarlo manualmente cada vez:

```bash
# Agregar al archivo ~/.bashrc o ~/.zshrc
# Configurar tu clave API de AgentRouter, que se puede obtener de https://agentrouter.org/console/token
export OPENAI_API_KEY="sk-xxx"
# Configurar la URL base de la API de AgentRouter
export OPENAI_BASE_URL="https://agentrouter.org/v1"  # Opcional
export OPENAI_MODEL="gpt-5" # Opcional, nombre del modelo
```

:::
