# Usar Agent Router con Codex

## Instalar Codex

```bash
# Instalar usando pnpm (recomendado)
pnpm install -g @openai/codex

# O instalar usando npm
npm install -g @openai/codex
```

## Configurar Variables de Entorno

1. Visite https://agentrouter.org/console/token para obtener su API Key
2. Establezca la variable de entorno del sistema con el nombre `AGENT_ROUTER_TOKEN` y el valor de su token

::: code-group

```bash [Linux/macOS]
# Establecer variable de entorno
export AGENT_ROUTER_TOKEN=sk-xxx
```

```powershell [Windows (PowerShell)]
# Establecer variable de entorno (sesión actual)
$env:AGENT_ROUTER_TOKEN="sk-xxx"

# O establecer permanentemente
[System.Environment]::SetEnvironmentVariable('AGENT_ROUTER_TOKEN', 'sk-xxx', 'User')
```

```cmd [Windows (CMD)]
# Establecer permanentemente
setx AGENT_ROUTER_TOKEN "sk-xxx"
```

:::

3. Cree el archivo de configuración y agregue las siguientes configuraciones:

::: code-group

```toml [Linux/macOS]
# Crear archivo ~/.codex/config.toml
model = "gpt-5"
model_provider = "openai-chat-completions"
preferred_auth_method = "apikey"

[model_providers.openai-chat-completions]
name = "OpenAI using Chat Completions"
base_url = "https://agentrouter.org/v1"
env_key = "AGENT_ROUTER_TOKEN"
wire_api = "chat"
query_params = {}
stream_idle_timeout_ms = 300000
```

```toml [Windows]
# Crear archivo %USERPROFILE%\.codex\config.toml
model = "gpt-5"
model_provider = "openai-chat-completions"
preferred_auth_method = "apikey"

[model_providers.openai-chat-completions]
name = "OpenAI using Chat Completions"
base_url = "https://agentrouter.org/v1"
env_key = "AGENT_ROUTER_TOKEN"
wire_api = "chat"
query_params = {}
stream_idle_timeout_ms = 300000
```

:::

4. Cree el archivo de autenticación:

::: code-group

```json [Linux/macOS]
// Crear archivo ~/.codex/auth.json
{
 "OPENAI_API_KEY":"Reemplace con su API KEY"
}
```

```json [Windows]
// Crear archivo %USERPROFILE%\.codex\auth.json
{
 "OPENAI_API_KEY":"Reemplace con su API KEY"
}
```

:::

## Comenzar a Usar

Después de configurar las variables de entorno, abra el directorio de su proyecto en la terminal y ejecute el siguiente comando para iniciar Codex:

```bash
# Navegar al directorio del proyecto
cd mi-proyecto

# Iniciar OpenAI Codex
codex
```

## Usar Codex en VSCode

1. Siga las instrucciones anteriores para instalar Codex y configurar las variables de entorno y archivos de configuración.

2. Abra VSCode e instale la [extensión Codex](https://marketplace.visualstudio.com/items?itemName=openai.chatgpt).

3. Vaya a Configuración y haga clic en el ícono en la esquina superior derecha para cambiar al modo de configuración JSON

![](../img/codex-config.png)

4. Agregue la siguiente configuración:

```json
"chatgpt.apiBase": "https://agentrouter.org/v1",
"chatgpt.config": {
    "preferred_auth_method": "api_key",
    "model_provider": "openai-chat-completions"
}
```

![](../img/codex-config2.png)

5. Haga clic en el ícono de Codex para comenzar a usar
