# Utiliser Agent Router avec Claude Code

## Installation de Claude Code

```bash
# Installation avec pnpm (recommandé)
pnpm install -g @anthropic-ai/claude-code

# Ou installation avec npm
npm install -g @anthropic-ai/claude-code
```

## Configuration des variables d'environnement

Entrez les commandes suivantes dans votre terminal pour configurer les variables d'environnement afin d'utiliser l'API Anthropic d'AgentRouter :

```bash
# Définir l'URL de base de l'API AgentRouter
export ANTHROPIC_BASE_URL=https://agentrouter.org/

# Définir votre clé API AgentRouter, que vous pouvez obtenir sur https://agentrouter.org/console/token
export ANTHROPIC_AUTH_TOKEN=sk-xxx
export ANTHROPIC_API_KEY=sk-xxx
```

> [!IMPORTANT]
> Assurez-vous de remplacer sk-xxx par le Token fourni par AgentRouter. Vous pouvez obtenir votre clé API depuis la [Console AgentRouter](https://agentrouter.org/console/token).

## Utilisation directe

Après avoir configuré les variables d'environnement, ouvrez le répertoire de votre projet dans le terminal et exécutez la commande suivante pour démarrer Claude Code :

```bash
# Naviguer vers le répertoire du projet
cd my-project

# Démarrer Claude Code directement
claude
```

::: tip
Vous pouvez ajouter la configuration des variables d'environnement à votre fichier de configuration shell pour éviter de les définir manuellement à chaque fois :

```bash
# Ajouter au fichier ~/.bashrc ou ~/.zshrc
export ANTHROPIC_BASE_URL=https://agentrouter.org/
export ANTHROPIC_AUTH_TOKEN=sk-xxx
export ANTHROPIC_API_KEY=sk-xxx
```

:::
