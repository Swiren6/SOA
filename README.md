Gestion de Freelancers - API GraphQL
Ce projet est une API GraphQL construite avec NestJS pour gérer des freelancers et leurs compétences professionnelles.

🚀 Technologies Utilisées
NestJS

GraphQL

TypeORM

TypeScript

📋 Prérequis
Node.js (v16 ou supérieur recommandé)

SGBD SQL (PostgreSQL, MySQL…)
npm ou yarn

project Setup:
$ npm install
Compile and run the project

# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod

Configurer les variables d'environnement dans le fichier .env :
env
Copier
Modifier
DATABASE_HOST=localhost
DATABASE_PORT=5432
DATABASE_USERNAME=postgres
DATABASE_PASSWORD=your_password
DATABASE_NAME=freelancer_db
⚠️ Adapte les credentials selon ton moteur de base de données.

🏗️ Structure du Projet
Le projet contient actuellement 2 entités principales :

1️⃣ Freelancer
Informations personnelles :

fullName

email

phone

Compétences associées (relation OneToMany)

2️⃣ Competence
nom

niveau

Association avec Freelancer (ManyToOne)

📦 Commandes Disponibles
⚙️ En développement

$npm run start:dev
⚙️ En production

$npm run build
$npm run start:prod
🚀 Génération de ressources

$nest generate resource [nom_ressource]
$nest g module [nom_module]
$nest g resolver [nom_resolver]
$nest g service [nom_service]
