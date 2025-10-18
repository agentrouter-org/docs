# Utiliser Agent Router avec Claude Code

## Installer Claude Code

```bash
# Installation avec pnpm (recommandé)
pnpm install -g @anthropic-ai/claude-code

# Ou installation avec npm
npm install -g @anthropic-ai/claude-code
```
## Configurer les variables d'environnement

Dans le terminal, entrez les commandes suivantes pour définir les variables d'environnement afin d'utiliser l'API Anthropic d'AgentRouter :

```bash
# Définir l'URL de base de l'API AgentRouter
export ANTHROPIC_BASE_URL=https://agentrouter.org/

# Définir votre clé API AgentRouter, disponible sur https://agentrouter.org/console/token
export ANTHROPIC_AUTH_TOKEN=sk-xxx
export ANTHROPIC_API_KEY=sk-xxx
```

> [!IMPORTANT]
> Assurez-vous de remplacer sk-xxx par le Token fourni par AgentRouter. Vous pouvez obtenir votre clé API dans la [console AgentRouter](https://agentrouter.org/console/token).


## Lancement direct

Après avoir configuré les variables d'environnement, utilisez le terminal pour ouvrir le répertoire de votre projet, puis exécutez la commande suivante pour démarrer Claude Code :

```bash
# Accéder au répertoire du projet
cd mon-projet

# Lancer Claude Code directement
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