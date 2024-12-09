# Calendrier de l'Avent 2024 (Frontend)

Ce projet est le frontend de l'application *Calendrier de l'Avent 2024*, une application interactive pour célébrer les fêtes de Noël avec des films et des animations festives.

![image](https://github.com/user-attachments/assets/a6b7cfaa-d12d-43f4-ade0-cabbb16a97f4)


---

## **Technologies utilisées**

- **React.js** : Framework JavaScript pour construire des interfaces utilisateur.
- **Vite** : Outil de build rapide et moderne pour React.
- **React Router** : Gestion de la navigation entre les pages.
- **CSS3** : Animation de la neige et design responsive.
- **JavaScript ES6+** : Logique d'interaction utilisateur.
- **TMDb API** : Pour récupérer les informations des films et bandes-annonces.

---

## **Prérequis**

Avant de commencer, assurez-vous d'avoir installé les outils suivants :
- [Node.js](https://nodejs.org/) (version 14 ou supérieure)
- Un gestionnaire de packages comme **npm** ou **yarn**

---

## **Installation**

1. Clonez le dépôt :
   ```bash
   git clone https://github.com/votre-utilisateur/calendrier-avent-frontend.git
   
   ```

2. Accédez au dossier :
   ```bash
   cd calendrier-avent-frontend
 
3. Installez les dépendances :
   ```bash
   npm install
   ```
   ou
   
   ```bash
   yarn install

---

## **Démarrage du projet**

1. Lancez le projet en mode développement :


   ```bash
   npm run dev
   ```
   ou

   ```bash
   yarn dev
   ```

2. Ouvrez votre navigateur et accédez à :

   ```arduino
   http://localhost:5173

---
   
## **Fonctionnalités**

Calendrier interactif avec 24 jours activables.
Intégration de bandes-annonces via l'API TMDb.
Effets visuels comme la neige animée.
Musique de Noël avec contrôle du volume.

---

## **Configuration**

Le fichier principal de configuration se trouve dans vite.config.js.
Pour utiliser votre propre clé API TMDb, remplacez API_KEY dans les composants utilisant l'API TMDb.

---

## **Déploiement avec FileZilla et OVH**

### **Étapes de build**
Build le projet pour production :

   ```bash
   npm run build
   ```

   ou

   ```bash
   yarn build
   ```

Cela génère un dossier dist/ contenant les fichiers statiques de l'application.

### **Utilisation de FileZilla**

Connectez-vous à votre espace FTP OVH avec FileZilla :
Hôte : votre-domaine.com ou ftp.votre-domaine.com
Nom d'utilisateur et mot de passe fournis par OVH.
Accédez au dossier racine du site web (par exemple, /www).
Uploadez le contenu du dossier dist/ dans le dossier racine.

---

## **Endpoints**

### **POST /send-letter**

Description : Permet d'envoyer une lettre au Père Noël.
Exemple de requête :

   ```json
{
  "name": "Léa",
  "email": "lea@example.com",
  "letter": "Cher Père Noël..."
}
   
   ```
Réponse en cas de succès :
   
   ```json
{
  "message": "Votre lettre a été envoyée au Père Noël !"
}
   
   ```

---

## **Configuration**

Créez un fichier .env à la racine avec les variables suivantes :

   
   ```env
PORT=5000
SENDGRID_API_KEY=votre-clé-api-sendgrid
EMAIL_FROM=adresse-source@example.com
EMAIL_TO=adresse-pere-noel@example.com
   
   ```
