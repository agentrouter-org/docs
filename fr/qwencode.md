# Utiliser Agent Router avec Qwen Code


## Installer Qwen Code 

```bash
# Installation avec pnpm (recommandé)
pnpm install -g @qwen-code/qwen-code

# Ou installation avec npm
npm install -g @qwen-code/qwen-code
```
## Configurer les variables d'environnement

Dans le terminal, entrez les commandes suivantes pour définir les variables d'environnement ([Tutoriel sur les variables d'environnement](https://www.java.com/zh-CN/download/help/path.html)) afin d'utiliser l'API OpenAI d'AgentRouter :

```bash
# Définir votre clé API AgentRouter, disponible sur https://agentrouter.org/console/token
export OPENAI_API_KEY="sk-xxx"
# Définir l'URL de base de l'API AgentRouter
export OPENAI_BASE_URL="https://agentrouter.org/v1"  # Optionnel
export OPENAI_MODEL="gpt-5" # Optionnel, nom du modèle
```

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

```bash
# Ajouter au fichier ~/.bashrc ou ~/.zshrc
# Définir votre clé API AgentRouter, disponible sur https://agentrouter.org/console/token
export OPENAI_API_KEY="sk-xxx"
# Définir l'URL de base de l'API AgentRouter
export OPENAI_BASE_URL="https://agentrouter.org/v1"  # Optionnel
export OPENAI_MODEL="gpt-5" # Optionnel, nom du modèle
```

:::