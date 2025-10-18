# Utiliser Agent Router avec Qwen Code

## Installer Qwen Code

::: code-group

```bash [pnpm (recommandé)]
# Installer en utilisant pnpm (recommandé)
pnpm install -g @qwen-code/qwen-code
```

```bash [npm]
# Ou installer en utilisant npm
npm install -g @qwen-code/qwen-code
```

:::

## Configurer les Variables d'Environnement

Entrez les commandes suivantes dans le terminal pour configurer les variables d'environnement ([Tutoriel de Configuration des Variables d'Environnement](https://www.java.com/zh-CN/download/help/path.html)) pour utiliser l'API OpenAI d'AgentRouter :

```bash
# Configurer votre clé API d'AgentRouter, qui peut être obtenue depuis https://agentrouter.org/console/token
export OPENAI_API_KEY="sk-xxx"
# Configurer l'URL de base de l'API d'AgentRouter
export OPENAI_BASE_URL="https://agentrouter.org/v1"  # Optionnel
export OPENAI_MODEL="gpt-5" # Optionnel, nom du modèle
```

> [!IMPORTANT]
> Veuillez vous assurer de remplacer sk-xxx par le Token fourni par AgentRouter. Vous pouvez obtenir la Clé API depuis la [Console AgentRouter](https://agentrouter.org/console/token).

## Lancement Direct et Utilisation

Après avoir configuré les variables d'environnement, utilisez le terminal pour ouvrir le répertoire du projet avec lequel vous voulez travailler, puis exécutez la commande suivante pour démarrer Qwen Code :

```bash
# Entrer dans le répertoire du projet
cd my-project

# Démarrer directement Qwen Code
qwen
```

::: tip
Vous pouvez ajouter la configuration des variables d'environnement à votre fichier de configuration shell pour éviter de la configurer manuellement à chaque fois :

```bash
# Ajouter au fichier ~/.bashrc ou ~/.zshrc
# Configurer votre clé API d'AgentRouter, qui peut être obtenue depuis https://agentrouter.org/console/token
export OPENAI_API_KEY="sk-xxx"
# Configurer l'URL de base de l'API d'AgentRouter
export OPENAI_BASE_URL="https://agentrouter.org/v1"  # Optionnel
export OPENAI_MODEL="gpt-5" # Optionnel, nom du modèle
```

:::
