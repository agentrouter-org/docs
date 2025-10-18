# Usar Agent Router con Qwen Code

## Instalar Qwen Code

```bash
# Instalar usando pnpm (recomendado)
pnpm install -g @qwen-code/qwen-code

# O instalar usando npm
npm install -g @qwen-code/qwen-code
```

## Configurar Variables de Entorno

Configure las variables de entorno para usar la API de OpenAI de AgentRouter:

::: code-group

```bash [Linux/macOS]
# Establecer su clave API de AgentRouter, obténgala de https://agentrouter.org/console/token
export OPENAI_API_KEY="sk-xxx"
# Establecer la URL base de la API de AgentRouter
export OPENAI_BASE_URL="https://agentrouter.org/v1"  # Opcional
export OPENAI_MODEL="gpt-5" # Opcional, nombre del modelo
```

```powershell [Windows (PowerShell)]
# Establecer su clave API de AgentRouter, obténgala de https://agentrouter.org/console/token
$env:OPENAI_API_KEY="sk-xxx"
# Establecer la URL base de la API de AgentRouter
$env:OPENAI_BASE_URL="https://agentrouter.org/v1"  # Opcional
$env:OPENAI_MODEL="gpt-5" # Opcional, nombre del modelo
```

```cmd [Windows (CMD)]
# Establecer su clave API de AgentRouter, obténgala de https://agentrouter.org/console/token
set OPENAI_API_KEY=sk-xxx
# Establecer la URL base de la API de AgentRouter
set OPENAI_BASE_URL=https://agentrouter.org/v1
set OPENAI_MODEL=gpt-5
```

:::

> [!IMPORTANT]
> Asegúrese de reemplazar `sk-xxx` con su token real de AgentRouter. Puede obtener su clave API desde la [Consola de AgentRouter](https://agentrouter.org/console/token).

## Comenzar a Usar

Después de configurar las variables de entorno, abra el directorio de su proyecto en la terminal y ejecute el siguiente comando para iniciar Qwen Code:

```bash
# Navegar al directorio del proyecto
cd mi-proyecto

# Iniciar Qwen Code
qwen
```

::: tip
Puede agregar la configuración de variables de entorno a su perfil de shell para evitar la configuración manual cada vez:

**Linux/macOS:**
```bash
# Agregar a ~/.bashrc o ~/.zshrc
export OPENAI_API_KEY="sk-xxx"
export OPENAI_BASE_URL="https://agentrouter.org/v1"
export OPENAI_MODEL="gpt-5"
```

**Windows (PowerShell):**
Agregue a su perfil de PowerShell (`$PROFILE`):
```powershell
$env:OPENAI_API_KEY="sk-xxx"
$env:OPENAI_BASE_URL="https://agentrouter.org/v1"
$env:OPENAI_MODEL="gpt-5"
```

**Windows (Variables del Sistema Permanentes):**
Use `setx` para establecer variables de entorno permanentes:
```cmd
setx OPENAI_API_KEY "sk-xxx"
setx OPENAI_BASE_URL "https://agentrouter.org/v1"
setx OPENAI_MODEL "gpt-5"
```
Nota: Debe reiniciar su terminal después de usar `setx`.
:::
