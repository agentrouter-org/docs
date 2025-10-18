# Utiliser Agent Router avec Claude Code

## Installer Claude Code

::: code-group

```bash [pnpm (recommandé)]
# Installer en utilisant pnpm (recommandé)
pnpm install -g @anthropic-ai/claude-code
```

```bash [npm]
# Ou installer en utilisant npm
npm install -g @anthropic-ai/claude-code
```

:::

## Configurer les Variables d'Environnement

Entrez les commandes suivantes dans le terminal pour configurer les variables d'environnement pour utiliser l'API Anthropic d'AgentRouter :

```bash
# Configurer l'URL de base de l'API d'AgentRouter
export ANTHROPIC_BASE_URL=https://agentrouter.org/

# Configurer votre clé API d'AgentRouter, qui peut être obtenue depuis https://agentrouter.org/console/token
export ANTHROPIC_AUTH_TOKEN=sk-xxx
export ANTHROPIC_API_KEY=sk-xxx
```

> [!IMPORTANT]
> Veuillez vous assurer de remplacer sk-xxx par le Token fourni par AgentRouter. Vous pouvez obtenir la Clé API depuis la [Console AgentRouter](https://agentrouter.org/console/token).

## Lancement Direct et Utilisation

Après avoir configuré les variables d'environnement, utilisez le terminal pour ouvrir le répertoire du projet avec lequel vous voulez travailler, puis exécutez la commande suivante pour démarrer Claude Code :

```bash
# Entrer dans le répertoire du projet
cd my-project

# Démarrer directement Claude Code
claude
```

::: tip
Vous pouvez ajouter la configuration des variables d'environnement à votre fichier de configuration shell pour éviter de la configurer manuellement à chaque fois :

```bash
# Ajouter au fichier ~/.bashrc ou ~/.zshrc
export ANTHROPIC_BASE_URL=https://agentrouter.org/
export ANTHROPIC_AUTH_TOKEN=sk-xxx
export ANTHROPIC_API_KEY=sk-xxx
```

:::
