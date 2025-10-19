# Usar Agent Router con Qwen Code


## Instalar Qwen Code

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

## Configurar Variables de Entorno

Ingresa los siguientes comandos en tu terminal para establecer las variables de entorno ([Tutorial de Configuración de Variables de Entorno](https://www.java.com/es/download/help/path.html)) para usar la API OpenAI de AgentRouter:

::: code-group

```bash [Linux/macOS]
# Establece tu clave API de AgentRouter, disponible en https://agentrouter.org/console/token
export OPENAI_API_KEY="sk-xxx"
# Establece la URL base de la API de AgentRouter
export OPENAI_BASE_URL="https://agentrouter.org/v1"  # Opcional
export OPENAI_MODEL="gpt-5" # Opcional, nombre del modelo
```

```powershell [Windows PowerShell]
# Establece tu clave API de AgentRouter, disponible en https://agentrouter.org/console/token
$env:OPENAI_API_KEY="sk-xxx"
# Establece la URL base de la API de AgentRouter
$env:OPENAI_BASE_URL="https://agentrouter.org/v1"  # Opcional
$env:OPENAI_MODEL="gpt-5" # Opcional, nombre del modelo
```

```bash [Windows CMD]
# Establece tu clave API de AgentRouter, disponible en https://agentrouter.org/console/token
set OPENAI_API_KEY="sk-xxx"
# Establece la URL base de la API de AgentRouter
set OPENAI_BASE_URL="https://agentrouter.org/v1"  # Opcional
set OPENAI_MODEL="gpt-5" # Opcional, nombre del modelo
```

:::

> [!IMPORTANT]
> Asegúrate de reemplazar sk-xxx con el Token proporcionado por AgentRouter. Puedes obtener tu clave API en la [Consola de AgentRouter](https://agentrouter.org/console/token).


## Lanzamiento Directo

Después de configurar las variables de entorno, usa tu terminal para abrir el directorio del proyecto con el que deseas trabajar, luego ejecuta el siguiente comando para iniciar Qwen Code:

```bash
# Navega al directorio del proyecto
cd mi-proyecto

# Lanza Qwen Code directamente
qwen
```

::: tip
Puedes agregar la configuración de variables de entorno a tu archivo de configuración del shell para evitar configurarlas manualmente cada vez:

::: code-group

```bash [Linux/macOS]
# Agregar al archivo ~/.bashrc o ~/.zshrc
# Establece tu clave API de AgentRouter, disponible en https://agentrouter.org/console/token
export OPENAI_API_KEY="sk-xxx"
# Establece la URL base de la API de AgentRouter
export OPENAI_BASE_URL="https://agentrouter.org/v1"  # Opcional
export OPENAI_MODEL="gpt-5" # Opcional, nombre del modelo
```

```powershell [Windows PowerShell]
# Agregar al perfil de PowerShell ($PROFILE)
# Establece tu clave API de AgentRouter, disponible en https://agentrouter.org/console/token
$env:OPENAI_API_KEY="sk-xxx"
# Establece la URL base de la API de AgentRouter
$env:OPENAI_BASE_URL="https://agentrouter.org/v1"  # Opcional
$env:OPENAI_MODEL="gpt-5" # Opcional, nombre del modelo
```

```bash [Windows CMD]
# Establece tu clave API de AgentRouter, disponible en https://agentrouter.org/console/token
set OPENAI_API_KEY="sk-xxx"
# Establece la URL base de la API de AgentRouter
set OPENAI_BASE_URL="https://agentrouter.org/v1"  # Opcional
set OPENAI_MODEL="gpt-5" # Opcional, nombre del modelo
```

:::
