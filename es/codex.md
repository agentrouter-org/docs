# Usar Agent Router con Codex

## Instalar Codex

```bash
# Instalar usando pnpm (recomendado)
pnpm install -g @openai/codex

# O instalar usando npm
npm install -g @openai/codex
```

## Configurar Variables de Entorno

1. Visita https://agentrouter.org/console/token para obtener tu clave API
2. Establecer la variable de entorno del sistema con el nombre `AGENT_ROUTER_TOKEN` y el valor como la clave que acabas de solicitar ([Tutorial de Configuración de Variables de Entorno](https://www.java.com/zh-CN/download/help/path.html))
3. Crear el archivo `~/.codex/config.toml` y agregar la siguiente configuración

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

4. Crear el archivo `~/.codex/auth.json` y agregar el siguiente código

```json
{
 "OPENAI_API_KEY":"Reemplazar aquí con tu clave aplicada"
}
```

## Uso Directo

Después de configurar las variables de entorno, abre el directorio de tu proyecto en el terminal y ejecuta el siguiente comando para iniciar Codex:

```bash
# Navegar al directorio del proyecto
cd my-project

# Iniciar OpenAI Codex directamente
codex
```

## Usar Codex en VSCode

1. Sigue las instrucciones anteriores para instalar Codex y configurar las variables de entorno y archivos de configuración.

2. Abre VSCode e instala la [Extensión Codex](https://marketplace.visualstudio.com/items?itemName=openai.chatgpt).

3. Ve a configuración y haz clic en la esquina superior derecha para cambiar al modo de configuración JSON

![](./img/codex-config.png)

4. Agregar los siguientes elementos de configuración

```json
"chatgpt.apiBase": "https://agentrouter.org/v1",
"chatgpt.config": {
    "pepreferred_auth_method": "api_key",
    "model_provider": "openai-chat-completions"
}
```

![](./img/codex-config2.png)

5. Haz clic en el icono de Codex para comenzar a usar