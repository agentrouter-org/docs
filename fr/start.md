# Utiliser Agent Router avec Claude Code

## Installer Claude Code

::: code-group

```bash [pnpm]
pnpm install -g @anthropic-ai/claude-code
```

```bash [npm]
npm install -g @anthropic-ai/claude-code
```

```bash [yarn]
yarn global add @anthropic-ai/claude-code
```

:::
## Configurer les variables d'environnement

Dans le terminal, entrez les commandes suivantes pour définir les variables d'environnement afin d'utiliser l'API Anthropic d'AgentRouter :

::: code-group

```bash [Linux/macOS]
# Définir l'URL de base de l'API AgentRouter
export ANTHROPIC_BASE_URL=https://agentrouter.org/

# Définir votre clé API AgentRouter, disponible sur https://agentrouter.org/console/token
export ANTHROPIC_AUTH_TOKEN=sk-xxx
export ANTHROPIC_API_KEY=sk-xxx
```

```powershell [Windows PowerShell]
# Définir l'URL de base de l'API AgentRouter
$env:ANTHROPIC_BASE_URL="https://agentrouter.org/"

# Définir votre clé API AgentRouter, disponible sur https://agentrouter.org/console/token
$env:ANTHROPIC_AUTH_TOKEN="sk-xxx"
$env:ANTHROPIC_API_KEY="sk-xxx"
```

:::

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

::: code-group

```bash [Linux/macOS]
# Ajouter au fichier ~/.bashrc ou ~/.zshrc
export ANTHROPIC_BASE_URL=https://agentrouter.org/
export ANTHROPIC_AUTH_TOKEN=sk-xxx
export ANTHROPIC_API_KEY=sk-xxx
```

```powershell [Windows PowerShell]
# Ajouter au profil PowerShell ($PROFILE)
$env:ANTHROPIC_BASE_URL="https://agentrouter.org/"
$env:ANTHROPIC_AUTH_TOKEN="sk-xxx"
$env:ANTHROPIC_API_KEY="sk-xxx"
```

:::
