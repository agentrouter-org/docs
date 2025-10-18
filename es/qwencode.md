# Usar Agent Router con Qwen Code

## Instalar Qwen Code

```bash
# Instalar usando pnpm (recomendado)
pnpm install -g @qwen-code/qwen-code

# O instalar usando npm
npm install -g @qwen-code/qwen-code
```

## Configurar Variables de Entorno

Ingresa los siguientes comandos en tu terminal para configurar las variables de entorno ([Tutorial de Configuración de Variables de Entorno](https://www.java.com/zh-CN/download/help/path.html)) para usar la API OpenAI de AgentRouter:

```bash
# Establecer tu clave API de AgentRouter, que puedes obtener de https://agentrouter.org/console/token
export OPENAI_API_KEY="sk-xxx"
# Establecer la URL base de la API de AgentRouter
export OPENAI_BASE_URL="https://agentrouter.org/v1"  # Opcional
export OPENAI_MODEL="gpt-5" # Opcional, nombre del modelo
```

> [!IMPORTANT]
> Asegúrate de reemplazar sk-xxx con el Token proporcionado por AgentRouter. Puedes obtener tu clave API desde la [Consola AgentRouter](https://agentrouter.org/console/token).

## Uso Directo

Después de configurar las variables de entorno, abre el directorio de tu proyecto en el terminal y ejecuta el siguiente comando para iniciar Qwen Code:

```bash
# Navegar al directorio del proyecto
cd my-project

# Iniciar Qwen Code directamente
qwen
```

::: tip
Puedes agregar la configuración de variables de entorno a tu archivo de configuración de shell para evitar configurarlas manualmente cada vez:

```bash
# Agregar al archivo ~/.bashrc o ~/.zshrc
# Establecer tu clave API de AgentRouter, que puedes obtener de https://agentrouter.org/console/token
export OPENAI_API_KEY="sk-xxx"
# Establecer la URL base de la API de AgentRouter
export OPENAI_BASE_URL="https://agentrouter.org/v1"  # Opcional
export OPENAI_MODEL="gpt-5" # Opcional, nombre del modelo
```

:::

