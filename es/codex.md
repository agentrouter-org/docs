# Usar Agent Router con Codex

## Instalar Codex

::: code-group

```bash [pnpm (recomendado)]
# Instalar usando pnpm (recomendado)
pnpm install -g @openai/codex
```

```bash [npm]
# O instalar usando npm
npm install -g @openai/codex
```

:::

## Configurar Variables de Entorno

1. Visita https://agentrouter.org/console/token para obtener tu Clave API
2. Configurar variable de entorno del sistema, nombre de variable `AGENT_ROUTER_TOKEN`, valor es el valor que acabas de solicitar ([Tutorial de Configuración de Variables de Entorno](https://www.java.com/zh-CN/download/help/path.html))
3. Crear archivo `~/.codex/config.toml` y agregar la siguiente configuración

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

4. Crear archivo `~/.codex/auth.json` y agregar el siguiente código

```json
{
 "OPENAI_API_KEY":"Reemplaza aquí con tu CLAVE solicitada"
}
```

## Lanzamiento Directo y Uso

Después de configurar las variables de entorno, usa la terminal para abrir el directorio del proyecto con el que quieres trabajar, luego ejecuta el siguiente comando para iniciar Codex:

```bash
# Entrar al directorio del proyecto
cd my-project

# Iniciar directamente OpenAI Codex
codex
```

## Usar en VSCode con Codex

1. Consulta las instrucciones anteriores para instalar Codex y configurar variables de entorno y archivos de configuración.

2. Abre VSCode e instala la [Extensión Codex](https://marketplace.visualstudio.com/items?itemName=openai.chatgpt).

3. Ve a configuración y haz clic en la esquina superior derecha para cambiar al modo de configuración JSON

![](../img/codex-config.png)

4. Agregar los siguientes elementos de configuración

```json
"chatgpt.apiBase": "https://agentrouter.org/v1",
"chatgpt.config": {
    "pepreferred_auth_method": "api_key",
    "model_provider": "openai-chat-completions"
}
```

![](../img/codex-config2.png)

5. Haz clic en el icono de Codex para comenzar a usar
