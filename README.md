# Angular 200
by [SFEIR School](https://www.sfeir.com/formation/school/)

Angular est devenu un acteur incontournable de l'écosystème Front. Développé par Google ce framework a su s’imposer pour devenir la référence. Mais l’annonce de la version 2 a boulversé la donne et a donné lieu à des débats “animés”. L’objectif de cette formation est de vous présenter les nouvelles orientations d’Angular 2. Pour cela nous alternons de façon équilibrée les phases d’apprentissage théorique et les exercices pratiques sur un projet réaliste.




![logo](https://www.sfeir.com/img/school/formations/Angular%20200.png)

[Calendrier des formations, liste des formateurs et programme de formation](https://www.sfeir.com/formation/school/angular-200/)

## Table des matières

  * [Support de formation](https://github.com/Sfeir/angular2-200/blob/step-01/support.pdf)
  * [Installation et lancement](#Installation-et-lancement)
  * [Déroulement de la formation](#déroulement-de-la-formation)
  * [Planning de la formation](#Planning-de-la-formation)
  * [Liste des projets](#Liste-des-projets)
  * [Stack technique](#stack-technique)

## Installation et lancement

  * `git clone https://github.com/Sfeir/angular-200.git`
  * `npm install -g @angular/cli` 
  * `cd angular-200`
  * `npm install`


  * `npm run server`


  

## Déroulement de la formation
Un TP :

  * un projet par exercice :
`npm run client step01`
  * un projet par solution :
`npm run client step01solution`

 
## Planning de la formation

### Jour 1

#### Mise en place d'Angular
* Installation
* La notion de composant
* Bootstrap d'une application

#### Le databinding
* Variable
* Propriétés
* Evénements

#### Les components
* Annotations
* Classes
* Communication entre composants

#### Le templating avancé
* NgFor
* Gestion des événements DOM

#### Les datas
* HTTP
* Observables

#### Le système de routage
* Mise en place du routeur
* Configuration
* Directives


### Jour 2

#### Les formulaires et la validation
* Différents éléments de formulaires
* Template-driven versus Model-driven
* Créer ses validators

#### Les services
* Créer un service
* Utiliser un service

#### L'injection de dépendances
* Principe
* Créer et utiliser des dépendances

#### Les Pipes
* Les pipes natifs
* Créer son propre pipe

#### Les directives
* Les directives natives
* Créer sa propre directive

#### Initiation aux tests
* La mise en place
* Tests unitaires pour un service, un pipe et un component

#### Initiation communication avancée
* Bus d'événements
* NGRX / NGXS




## Liste des projets

  * step01: Création d'un composant manuellement
  * step02: Création d'un composant avec le CLI
  * step03: Imbriquer les composants
  * step04: Afficher une personne
  * step05: Gérer un clic
  * step06: Récupérer les personnes depuis le serveur
  * step07: Configurer la navigation
  * step08: Utiliser la directive *ngFor
  * step09: Réutilisation des composants (partie 1)
  * step10: Réutilisation des composants (partie 2)
  * step11: Supprimer une personne
  * step12: Ajouter une personne
  * step13: Modifier une personne
  * step14: Valider le formulaire (Template driven form)
  * step15: Valider le formulaire (Model driven form)
  * step16: Créer un validateur de formulaire
  * step17: Créer un service
  * step18: Utiliser une Pipe
  * step19: Créer une Pipe
  * step20: Utilisation des directives
  * step21: Créer une directive
  * step22: TDD
  * step23: NGXS
  * step24: NGRX



## Stack technique

* Angular
* NGXS
* NGRX
* Angular Material
* NodeJS
* ExpressJS

## Commandes utiles

Ces commandes doivent être toutes suffixées par le nom du projet : `step01`

  * `ng build` - Compiles an Angular app into an output directory(dist)
  * `ng test` - Runs unit tests
  * `ng lint` - Runs linting tools
  * `ng e2e` - Builds and serves an Angular app, then runs end-to-end tests using Protractor