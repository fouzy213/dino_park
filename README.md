DinoPark Tickets

DinoPark Tickets est une application web de réservation de billets pour un parc d’attractions à thème dinosaures. Les utilisateurs peuvent réserver leurs billets en ligne tandis que les administrateurs peuvent gérer les ventes et les capacités du parc.

Table des matières

Fonctionnalités

Technologies

Installation

Structure du projet

Base de données

Usage

Déploiement

Auteur

Fonctionnalités
Côté visiteur

Accueil :

Présentation des dinosaures du parc

Localisation du parc

Réservation de billets :

Sélection de la date (jour unique, égal ou ultérieur au jour actuel)

Sélection de la quantité et des types de billets (adulte, enfant, VIP)

Processus de paiement simulé

Page de confirmation avec récapitulatif de commande

Côté administrateur

Connexion sécurisée avec email et mot de passe

Tableau de bord :

Statistiques de ventes par type de billet sur la semaine courante

Affichage des capacités d’accueil journalières (max : 1500 personnes/jour)

Technologies

Front-end :

HTML, CSS, EJS

TypeScript (transpilé en JavaScript)


Back-end :

Node.js, Express

TypeScript (exécution avec tsx)

Architecture MVC

Requêtes SQL préparées pour l’accès aux données

Base de données :

PostgreSQL

Modélisation relationnelle (MCD, MLD)

Clés primaires et étrangères

Installation

Cloner le dépôt :

git clone https://github.com/ton-utilisateur/dinopark-tickets.git
cd dinopark-tickets


Installer les dépendances :

npm install


Configurer la base de données PostgreSQL :

Créer une base dinopark_db

Exécuter le script SQL de création des tables database/schema.sql

Configurer le fichier .env avec les informations de connexion à PostgreSQL :

DB_HOST=localhost
DB_PORT=5432
DB_USER=postgres
DB_PASSWORD=motdepasse
DB_NAME=dinopark_db
PORT=3000


Lancer l’application en développement :

npm run dev


Accéder à l’application :

http://localhost:3000

Structure du projet
dinopark-tickets/
│
├─ src/
│  ├─ controllers/      # Gestion des routes et logique métier
│  ├─ models/           # Accès aux données (requêtes SQL)
│  ├─ views/            # Fichiers EJS pour le rendu côté serveur
│  ├─ public/           # CSS, images, scripts front-end
│  ├─ routes/           # Définition des routes Express
│  └─ app.ts            # Point d’entrée du serveur
│
├─ database/
│  └─ schema.sql        # Script de création des tables
│
├─ package.json
├─ tsconfig.json
├─ .env
└─ README.md

Base de données
Tables principales

dinosaures : nom, régime, description

types_billet : intitulé, tarif unitaire

reservations : date, billets associés

Contraintes

Capacité maximale : 1500 personnes/jour

Au moins 1 billet par réservation

Relation entre réservations et types de billet via une table intermédiaire si nécessaire

Usage

Réserver un billet :

Choisir la date et le type de billet

Simuler le paiement

Obtenir la confirmation avec le récapitulatif

Administration :

Se connecter avec ses identifiants

Consulter les statistiques de ventes et les capacités journalières

Déploiement

L’application peut être déployée sur des services comme Render, Heroku ou Vercel.

Assurez-vous que PostgreSQL est accessible depuis le serveur distant.

Définir les variables d’environnement pour la connexion à la base de données.
