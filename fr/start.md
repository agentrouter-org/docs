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

```cmd [Windows CMD]
# Définir l'URL de base de l'API AgentRouter
set ANTHROPIC_BASE_URL="https://agentrouter.org/"
# Définir votre clé API AgentRouter, disponible sur https://agentrouter.org/console/token
set ANTHROPIC_AUTH_TOKEN="sk-xxx"
set ANTHROPIC_API_KEY="sk-xxx"
```

:::

> [!IMPORTANT]
> Assurez-vous de remplacer sk-xxx par le Token fourni par AgentRouter. Vous pouvez obtenir votre clé API dans la [console AgentRouter](https://agentrouter.org/console/token).


## Lancement direct

Après avoir configuré les variables d'environnement, utilisez le terminal pour ouvrir le répertoire de votre projet, puis exécutez la commande suivante pour démarrer Claude Code :

::: code-group

```bash [Linux/macOS]
# Accéder au répertoire du projet
cd mon-projet

# Lancer Claude Code directement
claude
```

```powershell [Windows PowerShell]
# Accéder au répertoire du projet
cd mon-projet

# Lancer Claude Code directement
claude
```

```cmd [Windows CMD]
# Accéder au répertoire du projet
cd mon-projet

# Lancer Claude Code directement
claude
```

:::

## Sélection du modèle

Vous pouvez contrôler le choix du modèle de Claude Code via des variables d'environnement:

| Variable | Description |
| -------- | ----------- |
| ANTHROPIC_MODEL | Modèle principal utilisé par Claude Code. Accepte un alias de modèle (p. ex., sonnet, haiku) ou un nom complet. |
| ANTHROPIC_SMALL_FAST_MODEL | Modèle rapide et à faible latence pour des opérations légères/en arrière-plan. Obsolète; conserver uniquement pour rétrocompatibilité. |

Noms de modèles recommandés pour exemple:

`claude-sonnet-4-5-20250929` `claude-sonnet-4-5-20250514` `claude-haiku-4-5-20251001` `claude-3-5-haiku-20241022`

::: code-group

```bash [Linux/macOS]
# Modèle principal
export ANTHROPIC_MODEL=claude-sonnet-4-5-20250929
# Modèle rapide pour opérations légères (obsolète; à utiliser seulement si nécessaire)
export ANTHROPIC_SMALL_FAST_MODEL=claude-3-5-haiku-20241022

# Lancer Claude Code
claude
```

```powershell [Windows PowerShell]
# Modèle principal
$env:ANTHROPIC_MODEL = "claude-sonnet-4-5-20250929"
# Modèle rapide pour opérations légères (obsolète; à utiliser seulement si nécessaire)
$env:ANTHROPIC_SMALL_FAST_MODEL = "claude-3-5-haiku-20241022"

# Lancer Claude Code
claude
```

```bash [Windows CMD]
# Modèle principal
set ANTHROPIC_MODEL=claude-sonnet-4-5-20250929
# Modèle rapide pour opérations légères (obsolète; à utiliser seulement si nécessaire)
set ANTHROPIC_SMALL_FAST_MODEL=claude-3-5-haiku-20241022

# Lancer Claude Code
claude
```

:::

> [!NOTE]
> ANTHROPIC_SMALL_FAST_MODEL est obsolète. Migrez si possible vers les modèles Haiku recommandés. En attendant, il sera toujours respecté pour les opérations rapides/en arrière-plan héritées. ANTHROPIC_MODEL reste le contrôle principal pour les tâches interactives et générales.
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

```bash [Windows CMD]
# Ajouter à la session CMD en cours ou à un script batch
set ANTHROPIC_BASE_URL="https://agentrouter.org/"
set ANTHROPIC_AUTH_TOKEN="sk-xxx"
set ANTHROPIC_API_KEY="sk-xxx"
```

:::
