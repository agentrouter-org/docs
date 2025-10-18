# Utiliser Agent Router avec Codex

## Installer Codex

::: code-group

```bash [pnpm (recommandé)]
# Installer en utilisant pnpm (recommandé)
pnpm install -g @openai/codex
```

```bash [npm]
# Ou installer en utilisant npm
npm install -g @openai/codex
```

:::

## Configurer les Variables d'Environnement

1. Visitez https://agentrouter.org/console/token pour obtenir votre Clé API
2. Configurer la variable d'environnement système, nom de variable `AGENT_ROUTER_TOKEN`, valeur est la valeur que vous venez de demander ([Tutoriel de Configuration des Variables d'Environnement](https://www.java.com/zh-CN/download/help/path.html))
3. Créer le fichier `~/.codex/config.toml` et ajouter la configuration suivante

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

4. Créer le fichier `~/.codex/auth.json` et y ajouter le code suivant

```json
{
 "OPENAI_API_KEY":"Remplacer ici par votre CLAVE demandée"
}
```

## Lancement Direct et Utilisation

Après avoir configuré les variables d'environnement, utilisez le terminal pour ouvrir le répertoire du projet avec lequel vous voulez travailler, puis exécutez la commande suivante pour démarrer Codex :

```bash
# Entrer dans le répertoire du projet
cd my-project

# Démarrer directement OpenAI Codex
codex
```

## Utiliser dans VSCode avec Codex

1. Référez-vous aux instructions ci-dessus pour installer Codex et configurer les variables d'environnement et fichiers de configuration.

2. Ouvrez VSCode et installez l'[Extension Codex](https://marketplace.visualstudio.com/items?itemName=openai.chatgpt).

3. Allez dans les paramètres et cliquez sur le coin supérieur droit pour passer au mode de configuration JSON

![](../img/codex-config.png)

4. Ajouter les éléments de configuration suivants

```json
"chatgpt.apiBase": "https://agentrouter.org/v1",
"chatgpt.config": {
    "pepreferred_auth_method": "api_key",
    "model_provider": "openai-chat-completions"
}
```

![](../img/codex-config2.png)

5. Cliquez sur l'icône Codex pour commencer à utiliser
