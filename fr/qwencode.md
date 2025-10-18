# Utiliser Agent Router avec Qwen Code


## Installer Qwen Code 

::: code-group

```bash [pnpm]
pnpm install -g @qwen-code/qwen-code
```

```bash [npm]
npm install -g @qwen-code/qwen-code
```

```bash [yarn]
yarn global add @qwen-code/qwen-code
```

:::
## Configurer les variables d'environnement

Dans le terminal, entrez les commandes suivantes pour définir les variables d'environnement ([Tutoriel sur les variables d'environnement](https://www.java.com/zh-CN/download/help/path.html)) afin d'utiliser l'API OpenAI d'AgentRouter :

::: code-group

```bash [Linux/macOS]
# Définir votre clé API AgentRouter, disponible sur https://agentrouter.org/console/token
export OPENAI_API_KEY="sk-xxx"
# Définir l'URL de base de l'API AgentRouter
export OPENAI_BASE_URL="https://agentrouter.org/v1"  # Optionnel
export OPENAI_MODEL="gpt-5" # Optionnel, nom du modèle
```

```powershell [Windows PowerShell]
# Définir votre clé API AgentRouter, disponible sur https://agentrouter.org/console/token
$env:OPENAI_API_KEY="sk-xxx"
# Définir l'URL de base de l'API AgentRouter
$env:OPENAI_BASE_URL="https://agentrouter.org/v1"  # Optionnel
$env:OPENAI_MODEL="gpt-5" # Optionnel, nom du modèle
```

```bash [Windows CMD]
# Définir votre clé API AgentRouter, disponible sur https://agentrouter.org/console/token
set OPENAI_API_KEY="sk-xxx"
# Définir l'URL de base de l'API AgentRouter
set OPENAI_BASE_URL="https://agentrouter.org/v1"  # Optionnel
set OPENAI_MODEL="gpt-5" # Optionnel, nom du modèle
```

:::

> [!IMPORTANT]
> Assurez-vous de remplacer sk-xxx par le Token fourni par AgentRouter. Vous pouvez obtenir votre clé API dans la [console AgentRouter](https://agentrouter.org/console/token).


## Lancement direct

Après avoir configuré les variables d'environnement, utilisez le terminal pour ouvrir le répertoire de votre projet, puis exécutez la commande suivante pour démarrer Qwen Code :

```bash
# Accéder au répertoire du projet
cd mon-projet

# Lancer Qwen Code directement
qwen
```
::: tip
Vous pouvez ajouter la configuration des variables d'environnement à votre fichier de configuration shell pour éviter de les définir manuellement à chaque fois :

::: code-group

```bash [Linux/macOS]
# Ajouter au fichier ~/.bashrc ou ~/.zshrc
# Définir votre clé API AgentRouter, disponible sur https://agentrouter.org/console/token
export OPENAI_API_KEY="sk-xxx"
# Définir l'URL de base de l'API AgentRouter
export OPENAI_BASE_URL="https://agentrouter.org/v1"  # Optionnel
export OPENAI_MODEL="gpt-5" # Optionnel, nom du modèle
```

```powershell [Windows PowerShell]
# Ajouter au profil PowerShell ($PROFILE)
# Définir votre clé API AgentRouter, disponible sur https://agentrouter.org/console/token
$env:OPENAI_API_KEY="sk-xxx"
# Définir l'URL de base de l'API AgentRouter
$env:OPENAI_BASE_URL="https://agentrouter.org/v1"  # Optionnel
$env:OPENAI_MODEL="gpt-5" # Optionnel, nom du modèle
```

```bash [Windows CMD]
# Définir votre clé API AgentRouter, disponible sur https://agentrouter.org/console/token
set OPENAI_API_KEY="sk-xxx"
# Définir l'URL de base de l'API AgentRouter
set OPENAI_BASE_URL="https://agentrouter.org/v1"  # Optionnel
set OPENAI_MODEL="gpt-5" # Optionnel, nom du modèle
```

:::
