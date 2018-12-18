# Angular 200


Ce projet est un projet généré avec [angular-cli](https://cli.angular.io/) version 7.0.6.

## Architecture du projet

Ce projet est un projet composé de deux grosses parties.

- back-end: server node js écrit à l'aide du framework Express
- front-end: app Angular

Le front-end se trouve dans le dossier steps.  
Chaque dossier dans le dossier steps est une application Angular minimal et correspond à un concept clé de la formation (ex: binding)
Pour chaque concept se trouve la solution associée (ex: binding-solution)

## Utilisation du CLI

L'utilisation du CLI, permet de générer des composants, services, ..., rapidement.
Les commandes suivantes seront utilisées tout au long de la formation.

- ng generate component `component name`, génère un component Angular
- ng generate service `service name`, génère un service Angular
- ng generate directive `directive name`, génère une directive Angular
- ng generate pipe `pipe name`, génère un pipe Angular
- ng generate class `class name`, génère une class Angular

Il est possbile d'ajouter des options à ces commandes, comme par exemple --dry-run permettant de vérifier ce qui va être généré.

## Les scripts NPM

A travers ce projet, les scripts npm vous permettront de lancer en mode développement les différentes steps, le back-end et les tests unitaires. Voici les 3 scripts nécessaires au bon déroulement de la formation:

- npm run client -- "`nom du dossier step à lancer`" (ex: npm run client -- "binding")
- npm run start
- npm run test -- "unit-tests"

## Bootstrap initial

Il est important avant d'entamer tout dévéloppement, de se placer à la racide du projet et de lancer la commande `npm install` permettant d'installer toutes les dépendances du projet.

A [SFEIR School](https://www.sfeir.com/formation/school/)

![logo](https://www.sfeir.com/img/school/formations/Angular%20200.png)

[Calendrier des formations, liste des formateurs et programme de formation](https://www.sfeir.com/formation/school/angular-200/)

## Installation

- `git clone https://github.com/Sfeir/angular-200.git`
- `cd angular-200`
- `npm install`

## Commandes

La formation se déroule step by step, chaque TP ayant deux projets associés dans le dossier [`steps/`](steps), un pour la réalisation de l'excice et un autre avec la solution pour cet exercice, toujours intitulé avec le nom du projet step suivi de `-solution`.

Chacun de ces projets étant un projet Angular CLI, vous pouvez utiliser les commande Angular CLI habituelles.
Exemple : `ng test <projet>`

Nous avons cependant mis en place différents scripts pour vous faciliter cela. Cf. (package.json)[package.json].
La majorité de ces scripts sont simplement des alias pour une commande Angular CLI. Vous pouvez donc utiliser les options de Angular CLI, mais [après l'option `--` de npm](https://docs.npmjs.com/cli/run-script.html) afin de lui indiquer qu'il s'agit d'options à passer au script et non d'options npm.

- lancer une commande Angular CLI directement via l'installation locale (recommandé): `npm run ng <commande ng>`
- lancer le server nodejs : `npm run server` (indispensable pour tous les exercices avec des appels HTTP)
- lancer la Web App : `npm run client <projet>`
  - en mode prod : ̀npm run client -- <projet> --prod`
- lancer les tests unitaires : `npm run test <projet>`

Voir la [documentation d'Angular CLI](https://angular.io/cli) pour toute autre commande.

