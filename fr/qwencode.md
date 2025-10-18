# Utiliser Agent Router avec Qwen Code

## Installation de Qwen Code

```bash
# Installation avec pnpm (recommandé)
pnpm install -g @qwen-code/qwen-code

# Ou installation avec npm
npm install -g @qwen-code/qwen-code
```

## Configuration des variables d'environnement

Entrez les commandes suivantes dans votre terminal pour configurer les variables d'environnement ([Tutoriel de configuration des variables d'environnement](https://www.java.com/zh-CN/download/help/path.html)) afin d'utiliser l'API OpenAI d'AgentRouter :

```bash
# Définir votre clé API AgentRouter, que vous pouvez obtenir sur https://agentrouter.org/console/token
export OPENAI_API_KEY="sk-xxx"
# Définir l'URL de base de l'API AgentRouter
export OPENAI_BASE_URL="https://agentrouter.org/v1"  # Optionnel
export OPENAI_MODEL="gpt-5" # Optionnel, nom du modèle
```

> [!IMPORTANT]
> Assurez-vous de remplacer sk-xxx par le Token fourni par AgentRouter. Vous pouvez obtenir votre clé API depuis la [Console AgentRouter](https://agentrouter.org/console/token).

## Utilisation directe

Après avoir configuré les variables d'environnement, ouvrez le répertoire de votre projet dans le terminal et exécutez la commande suivante pour démarrer Qwen Code :

```bash
# Naviguer vers le répertoire du projet
cd my-project

# Démarrer Qwen Code directement
qwen
```

::: tip
Vous pouvez ajouter la configuration des variables d'environnement à votre fichier de configuration shell pour éviter de les définir manuellement à chaque fois :

```bash
# Ajouter au fichier ~/.bashrc ou ~/.zshrc
# Définir votre clé API AgentRouter, que vous pouvez obtenir sur https://agentrouter.org/console/token
export OPENAI_API_KEY="sk-xxx"
# Définir l'URL de base de l'API AgentRouter
export OPENAI_BASE_URL="https://agentrouter.org/v1"  # Optionnel
export OPENAI_MODEL="gpt-5" # Optionnel, nom du modèle
```

:::

