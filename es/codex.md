# Usar Agent Router con Codex

## Instalar Codex

::: code-group

```bash [pnpm]
pnpm install -g @openai/codex
```

```bash [npm]
npm install -g @openai/codex
```

```bash [yarn]
yarn global add @openai/codex
```

:::

## Configurar Variables de Entorno

1. Visita https://agentrouter.org/console/token para obtener tu clave API
2. Establece la variable de entorno del sistema con el nombre `AGENT_ROUTER_TOKEN` y el valor que acabas de obtener ([Tutorial de Configuración de Variables de Entorno](https://www.java.com/en/download/help/path.html))
3. Crea el archivo `~/.codex/config.toml` y añade la siguiente configuración:

```toml
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

4. Crea el archivo `~/.codex/auth.json` y añade el siguiente código:

```json
{
 "OPENAI_API_KEY":"Reemplaza esto con tu clave API"
}
```

## Lanzar Directamente

Después de configurar las variables de entorno, usa tu terminal para abrir el directorio del proyecto con el que deseas trabajar, luego ejecuta el siguiente comando para iniciar Codex:

```bash
# Navega al directorio del proyecto
cd mi-proyecto

# Lanza OpenAI Codex directamente
codex
```


## Usar Codex en VSCode


1. Sigue las instrucciones anteriores para instalar Codex y configurar las variables de entorno y archivos de configuración.

2. Abre VSCode e instala la [extensión Codex](https://marketplace.visualstudio.com/items?itemName=openai.chatgpt).

3. Ve a configuración y haz clic en el icono en la esquina superior derecha para cambiar al modo de configuración JSON

![](../img/codex-config.png)

4. Añade los siguientes elementos de configuración:


```json
"chatgpt.apiBase": "https://agentrouter.org/v1",
"chatgpt.config": {
    "pepreferred_auth_method": "api_key",
    "model_provider": "openai-chat-completions"
}
```

![](../img/codex-config2.png)


5. Haz clic en el icono de Codex para comenzar a usar...
