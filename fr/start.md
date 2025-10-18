# Utiliser Agent Router avec Claude Code

## Installer Claude Code

```bash
# Installer avec pnpm (recommandé)
pnpm install -g @anthropic-ai/claude-code

# Ou installer avec npm
npm install -g @anthropic-ai/claude-code
```

## Configurer les Variables d'Environnement

Configurez les variables d'environnement pour utiliser l'API Anthropic d'AgentRouter :

::: code-group

```bash [Linux/macOS]
# Définir l'URL de base de l'API AgentRouter
export ANTHROPIC_BASE_URL=https://agentrouter.org/

# Définir votre clé API AgentRouter, obtenez-la depuis https://agentrouter.org/console/token
export ANTHROPIC_AUTH_TOKEN=sk-xxx
export ANTHROPIC_API_KEY=sk-xxx
```

```powershell [Windows (PowerShell)]
# Définir l'URL de base de l'API AgentRouter
$env:ANTHROPIC_BASE_URL="https://agentrouter.org/"

# Définir votre clé API AgentRouter, obtenez-la depuis https://agentrouter.org/console/token
$env:ANTHROPIC_AUTH_TOKEN="sk-xxx"
$env:ANTHROPIC_API_KEY="sk-xxx"
```

```cmd [Windows (CMD)]
# Définir l'URL de base de l'API AgentRouter
set ANTHROPIC_BASE_URL=https://agentrouter.org/

# Définir votre clé API AgentRouter, obtenez-la depuis https://agentrouter.org/console/token
set ANTHROPIC_AUTH_TOKEN=sk-xxx
set ANTHROPIC_API_KEY=sk-xxx
```

:::

> [!IMPORTANT]
> Assurez-vous de remplacer `sk-xxx` par votre token AgentRouter réel. Vous pouvez obtenir votre clé API depuis la [Console AgentRouter](https://agentrouter.org/console/token).

## Commencer à Utiliser

Après avoir configuré les variables d'environnement, ouvrez le répertoire de votre projet dans le terminal et exécutez la commande suivante pour démarrer Claude Code :

```bash
# Naviguer vers le répertoire du projet
cd mon-projet

# Démarrer Claude Code
claude
```

::: tip
Vous pouvez ajouter la configuration des variables d'environnement à votre profil shell pour éviter la configuration manuelle à chaque fois :

**Linux/macOS :**
```bash
# Ajouter à ~/.bashrc ou ~/.zshrc
export ANTHROPIC_BASE_URL=https://agentrouter.org/
export ANTHROPIC_AUTH_TOKEN=sk-xxx
export ANTHROPIC_API_KEY=sk-xxx
```

**Windows (PowerShell) :**
Ajoutez à votre profil PowerShell (`$PROFILE`) :
```powershell
$env:ANTHROPIC_BASE_URL="https://agentrouter.org/"
$env:ANTHROPIC_AUTH_TOKEN="sk-xxx"
$env:ANTHROPIC_API_KEY="sk-xxx"
```

**Windows (Variables Système Permanentes) :**
Utilisez `setx` pour définir des variables d'environnement permanentes :
```cmd
setx ANTHROPIC_BASE_URL "https://agentrouter.org/"
setx ANTHROPIC_AUTH_TOKEN "sk-xxx"
setx ANTHROPIC_API_KEY "sk-xxx"
```
Note : Vous devez redémarrer votre terminal après avoir utilisé `setx`.
:::
