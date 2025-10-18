# Utiliser Agent Router avec Codex

## Installation de Codex

```bash
# Installation avec pnpm (recommandé)
pnpm install -g @openai/codex

# Ou installation avec npm
npm install -g @openai/codex
```

## Configuration des variables d'environnement

1. Visitez https://agentrouter.org/console/token pour obtenir votre clé API
2. Définir la variable d'environnement système avec le nom `AGENT_ROUTER_TOKEN` et la valeur que vous venez de demander ([Tutoriel de configuration des variables d'environnement](https://www.java.com/zh-CN/download/help/path.html))
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
 "OPENAI_API_KEY":"Remplacer ici par votre clé demandée"
}
```

## Utilisation directe

Après avoir configuré les variables d'environnement, ouvrez le répertoire de votre projet dans le terminal et exécutez la commande suivante pour démarrer Codex :

```bash
# Naviguer vers le répertoire du projet
cd my-project

# Démarrer OpenAI Codex directement
codex
```

## Utilisation de Codex dans VSCode

1. Suivez les instructions ci-dessus pour installer Codex et configurer les variables d'environnement et les fichiers de configuration.

2. Ouvrez VSCode et installez l'[Extension Codex](https://marketplace.visualstudio.com/items?itemName=openai.chatgpt).

3. Allez dans les paramètres et cliquez sur le coin supérieur droit pour passer en mode configuration JSON

![](./img/codex-config.png)

4. Ajouter les éléments de configuration suivants

```json
"chatgpt.apiBase": "https://agentrouter.org/v1",
"chatgpt.config": {
    "pepreferred_auth_method": "api_key",
    "model_provider": "openai-chat-completions"
}
```

![](./img/codex-config2.png)

5. Cliquez sur l'icône Codex pour commencer à utiliser