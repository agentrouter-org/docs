# Utiliser Agent Router avec Qwen Code

## Installer Qwen Code

```bash
# Installer avec pnpm (recommandé)
pnpm install -g @qwen-code/qwen-code

# Ou installer avec npm
npm install -g @qwen-code/qwen-code
```

## Configurer les Variables d'Environnement

Configurez les variables d'environnement pour utiliser l'API OpenAI d'AgentRouter :

::: code-group

```bash [Linux/macOS]
# Définir votre clé API AgentRouter, obtenez-la depuis https://agentrouter.org/console/token
export OPENAI_API_KEY="sk-xxx"
# Définir l'URL de base de l'API AgentRouter
export OPENAI_BASE_URL="https://agentrouter.org/v1"  # Optionnel
export OPENAI_MODEL="gpt-5" # Optionnel, nom du modèle
```

```powershell [Windows (PowerShell)]
# Définir votre clé API AgentRouter, obtenez-la depuis https://agentrouter.org/console/token
$env:OPENAI_API_KEY="sk-xxx"
# Définir l'URL de base de l'API AgentRouter
$env:OPENAI_BASE_URL="https://agentrouter.org/v1"  # Optionnel
$env:OPENAI_MODEL="gpt-5" # Optionnel, nom du modèle
```

```cmd [Windows (CMD)]
# Définir votre clé API AgentRouter, obtenez-la depuis https://agentrouter.org/console/token
set OPENAI_API_KEY=sk-xxx
# Définir l'URL de base de l'API AgentRouter
set OPENAI_BASE_URL=https://agentrouter.org/v1
set OPENAI_MODEL=gpt-5
```

:::

> [!IMPORTANT]
> Assurez-vous de remplacer `sk-xxx` par votre token AgentRouter réel. Vous pouvez obtenir votre clé API depuis la [Console AgentRouter](https://agentrouter.org/console/token).

## Commencer à Utiliser

Après avoir configuré les variables d'environnement, ouvrez le répertoire de votre projet dans le terminal et exécutez la commande suivante pour démarrer Qwen Code :

```bash
# Naviguer vers le répertoire du projet
cd mon-projet

# Démarrer Qwen Code
qwen
```

::: tip
Vous pouvez ajouter la configuration des variables d'environnement à votre profil shell pour éviter la configuration manuelle à chaque fois :

**Linux/macOS :**
```bash
# Ajouter à ~/.bashrc ou ~/.zshrc
export OPENAI_API_KEY="sk-xxx"
export OPENAI_BASE_URL="https://agentrouter.org/v1"
export OPENAI_MODEL="gpt-5"
```

**Windows (PowerShell) :**
Ajoutez à votre profil PowerShell (`$PROFILE`) :
```powershell
$env:OPENAI_API_KEY="sk-xxx"
$env:OPENAI_BASE_URL="https://agentrouter.org/v1"
$env:OPENAI_MODEL="gpt-5"
```

**Windows (Variables Système Permanentes) :**
Utilisez `setx` pour définir des variables d'environnement permanentes :
```cmd
setx OPENAI_API_KEY "sk-xxx"
setx OPENAI_BASE_URL "https://agentrouter.org/v1"
setx OPENAI_MODEL "gpt-5"
```
Note : Vous devez redémarrer votre terminal après avoir utilisé `setx`.
:::
