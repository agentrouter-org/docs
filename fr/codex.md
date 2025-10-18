# Utiliser Agent Router avec Codex

## Installer Codex

```bash
# Installer avec pnpm (recommandé)
pnpm install -g @openai/codex

# Ou installer avec npm
npm install -g @openai/codex
```

## Configurer les Variables d'Environnement

1. Visitez https://agentrouter.org/console/token pour obtenir votre clé API
2. Définissez la variable d'environnement système avec le nom `AGENT_ROUTER_TOKEN` et la valeur de votre token

::: code-group

```bash [Linux/macOS]
# Définir la variable d'environnement
export AGENT_ROUTER_TOKEN=sk-xxx
```

```powershell [Windows (PowerShell)]
# Définir la variable d'environnement (session actuelle)
$env:AGENT_ROUTER_TOKEN="sk-xxx"

# Ou définir de manière permanente
[System.Environment]::SetEnvironmentVariable('AGENT_ROUTER_TOKEN', 'sk-xxx', 'User')
```

```cmd [Windows (CMD)]
# Définir de manière permanente
setx AGENT_ROUTER_TOKEN "sk-xxx"
```

:::

3. Créez le fichier de configuration et ajoutez les paramètres suivants :

::: code-group

```toml [Linux/macOS]
# Créer le fichier ~/.codex/config.toml
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
# Créer le fichier %USERPROFILE%\.codex\config.toml
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

4. Créez le fichier d'authentification :

::: code-group

```json [Linux/macOS]
// Créer le fichier ~/.codex/auth.json
{
 "OPENAI_API_KEY":"Remplacez par votre clé API"
}
```

```json [Windows]
// Créer le fichier %USERPROFILE%\.codex\auth.json
{
 "OPENAI_API_KEY":"Remplacez par votre clé API"
}
```

:::

## Commencer à Utiliser

Après avoir configuré les variables d'environnement, ouvrez le répertoire de votre projet dans le terminal et exécutez la commande suivante pour démarrer Codex :

```bash
# Naviguer vers le répertoire du projet
cd mon-projet

# Démarrer OpenAI Codex
codex
```

## Utiliser Codex dans VSCode

1. Suivez les instructions ci-dessus pour installer Codex et configurer les variables d'environnement et fichiers de configuration.

2. Ouvrez VSCode et installez l'[extension Codex](https://marketplace.visualstudio.com/items?itemName=openai.chatgpt).

3. Allez dans Paramètres et cliquez sur l'icône dans le coin supérieur droit pour passer en mode de configuration JSON

![](../img/codex-config.png)

4. Ajoutez la configuration suivante :

```json
"chatgpt.apiBase": "https://agentrouter.org/v1",
"chatgpt.config": {
    "preferred_auth_method": "api_key",
    "model_provider": "openai-chat-completions"
}
```

![](../img/codex-config2.png)

5. Cliquez sur l'icône Codex pour commencer à utiliser
