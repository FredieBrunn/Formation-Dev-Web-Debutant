---
theme: seriph
background: https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080
title: Formation Dev Web
class: "text-center"
highlighter: shiki
lineNumbers: true
info: |
  ## Cours Complet - Bases du Développement Web
  Formation complète pour débutants en développement web
  HTML5, CSS3, JavaScript ES6+, DOM et Événements
drawings:
  persist: false
transition: slide-left
mdc: true
overviewSnapshots: true
css: ['./style.css']
---

<head>
  <title>Formation Dev Web</title>
</head>


# Les Bases du Développement Web
## Formation Complète pour Débutants

<div class="pt-12">
  <span class="text-lg">
    HTML5 • CSS3 • JavaScript ES6+ • DOM & Événements
  </span>
</div>

<div class="pt-8">
  <span @click="$slidev.nav.next" class="px-4 py-2 rounded cursor-pointer bg-blue-600 text-white hover:bg-blue-700">
    Commencer le cours <carbon:arrow-right class="inline"/>
  </span>
</div>

---
layout: two-cols
---

# Plan du Cours

## 📚 Programme Détaillé

**Partie 1: HTML5 Structure et Sémantique**
- Structure de base HTML5
- Éléments sémantiques
- Formulaires et validation
- Accessibilité
- TP: Page web sémantique

**Partie 2: CSS3 et Design Responsive**
- Sélecteurs et propriétés CSS3
- Flexbox et Grid
- Design responsive
- Animations et transitions
- TP: Site responsive

::right::

**Partie 3: JavaScript ES6+ Fondamentaux**
- Variables et types de données
- Fonctions et classes ES6+
- Structures de contrôle
- Modules et imports
- TP: Application interactive

**Partie 4: DOM et Événements**
- Manipulation du DOM
- Gestion des événements
- AJAX et Fetch API
- Local Storage
- TP: Application complète

**🎯 Projet Final: Plateforme Web Responsive**

---
layout: center
---

# Partie 1
## HTML5 Structure et Sémantique

<div class="text-6xl text-orange-500 mb-8">
  <carbon-html />
</div>

Maîtriser la structure et la sémantique HTML5 pour créer des bases solides

---
src: ./pages/html5/cours.md
---

---
layout: center
class: text-center
background: https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?q=80&w=1470&auto=format&fit=crop
---

# Partie 2
## CSS3 et Design Responsive

<div class="text-6xl text-blue-500 mb-8">
  <carbon-screen />
</div>

Maîtriser CSS3 et créer des designs responsives modernes

---
src: ./pages/css3/cours.md
---

---
layout: two-cols
---

# 2.6 Exercice - Site E-commerce Responsive

## 🎯 Exercice Pratique

Créer la page d'accueil d'un site e-commerce responsive avec :

### Composants à créer :
1. **Header** : Logo, navigation, panier (Flexbox)
2. **Section Hero** : Bannière promotionnelle
3. **Grille de produits** : 4 colonnes desktop, 2 tablette, 1 mobile (CSS Grid)
4. **Cards produits** : Image, titre, prix, bouton
5. **Footer** : Liens, réseaux sociaux

::right::

### Spécifications techniques :
- ✅ Mobile First
- ✅ Breakpoints : 768px, 1024px
- ✅ Flexbox pour la navigation
- ✅ CSS Grid pour les produits
- ✅ Animations au hover
- ✅ Images responsives

### Breakpoints attendus :
- **Mobile** : < 768px (1 colonne)
- **Tablette** : 768px - 1023px (2 colonnes)
- **Desktop** : ≥ 1024px (4 colonnes)

**Temps estimé : 35 minutes**

---

# 2.8 TP Partie 2 - Dashboard Responsive

## 🛠️ Travail Pratique : Dashboard Admin Responsive

### Objectifs :
Créer un dashboard d'administration responsive avec CSS Grid et Flexbox

### Cahier des charges :
1. **Layout principal** : Sidebar + Header + Main content (CSS Grid)
2. **Sidebar** : Navigation verticale, collapsible sur mobile
3. **Header** : Titre, notifications, profil utilisateur
4. **Dashboard widgets** : Statistiques en cards responsives
5. **Tableau de données** : Responsive avec scroll horizontal
6. **Animations** : Transitions fluides, micro-interactions


### Composants requis :
- **4 widgets statistiques** (Users, Revenue, Orders, Growth)
- **Graphique en placeholder** avec responsive
- **Tableau utilisateurs** (nom, email, statut, actions)
- **Navigation mobile** avec menu hamburger

### Breakpoints :
- **Mobile** : < 768px (sidebar en overlay)
- **Tablette** : 768px - 1023px (sidebar réduite)
- **Desktop** : ≥ 1024px (sidebar complète)

**Temps alloué : 1h30**


<!-- # 2.9 Correction TP Dashboard

## 💡 Solution Dashboard Responsive

*Structure HTML et CSS complète pour un dashboard admin moderne avec toutes les fonctionnalités responsive demandées...*
le code va inclure:
- Layout CSS Grid principal
- Sidebar responsive avec menu hamburger
- Widgets de statistiques en CSS Grid
- Tableau responsive avec scroll
- Animations CSS avancées
- Media queries complètes -->

---
layout: center
class: text-center
---

# Partie 3
## JavaScript ES6+ Fondamentaux

<div class="text-6xl text-yellow-500 mb-8">
  <!-- <carbon-logo-javascript /> -->
  JavaScript
</div>

Maîtriser JavaScript moderne pour créer des applications interactives

---
src: ./pages/javaScript/cours.md
---
layout: two-cols
---

# 3.6 Exercice - Application Todo List

## 🎯 Exercice Pratique

Créer une application Todo List complète avec JavaScript ES6+

### Fonctionnalités requises :
1. **Ajouter une tâche** avec titre et description
2. **Marquer comme terminée/non terminée**
3. **Supprimer une tâche**
4. **Filtrer** : Toutes, Actives, Terminées
5. **Compteur** de tâches restantes
6. **Persistance** avec localStorage
7. **Validation** des données d'entrée

### Spécifications techniques :
- ✅ Classes ES6+ pour la structure
- ✅ Modules pour organiser le code
- ✅ Async/Await si API simulation

::right::

- ✅ Destructuring et spread operator
- ✅ Array methods (map, filter, reduce)
- ✅ Template literals pour le HTML

### Architecture suggérée :
```
js/
├── models/Task.js
├── models/TodoList.js
├── storage/LocalStorage.js
├── views/TodoView.js
├── controllers/TodoController.js
└── app.js
```

**Temps estimé : 1 heure**

---
layout: two-cols
---

# 3.8 TP Partie 3 - Gestionnaire de Contacts

## 🛠️ Travail Pratique : Application de Gestion de Contacts

### Objectifs :
Créer une application complète de gestion de contacts avec JavaScript ES6+

### Fonctionnalités avancées :
1. **CRUD complet** : Create, Read, Update, Delete
2. **Recherche et filtrage** : Par nom, email, catégorie
3. **Validation avancée** : Email, téléphone, formulaires
4. **Import/Export** : JSON, CSV
5. **Gestion des groupes** : Création et assignation
6. **Interface modale** pour l'édition
7. **Pagination** pour les grandes listes

### Spécifications techniques :
- ✅ Architecture MVC complète
- ✅ Classes ES6+ avec héritage
- ✅ Modules ES6 bien organisés
- ✅ Async/Await pour les opérations
- ✅ Gestion d'erreurs robuste
- ✅ localStorage + sessionStorage
- ✅ Animations et transitions

::right::

### Architecture :
```
js/
├── models/
│   ├── Contact.js
│   ├── Group.js
│   └── ContactManager.js
├── views/
│   ├── ContactView.js
│   ├── ModalView.js
│   └── SearchView.js
├── controllers/
│   └── AppController.js
├── services/
│   ├── StorageService.js
│   ├── ValidationService.js
│   └── ExportService.js
└── app.js
```

**Temps alloué : 3 heures**


---
layout: two-cols
---

# 4.6 Exercice - Application Web Interactive

## 🎯 Exercice Pratique

Créer une application de gestion d'inventaire interactive avec DOM et événements

### Fonctionnalités requises :
1. **CRUD complet** avec interface dynamique
2. **Recherche et filtrage** en temps réel
3. **Glisser-déposer** pour réorganiser
4. **Validation en temps réel** des formulaires
5. **Sauvegarde automatique** avec localStorage
6. **Undo/Redo** pour les actions
7. **Notifications** pour les actions utilisateur

### Spécifications techniques :
- ✅ Manipulation DOM native (pas de framework)
- ✅ Délégation d'événements
- ✅ Custom events pour la communication

::right::

- ✅ State management avec historique
- ✅ Validation de formulaires avancée
- ✅ API Fetch pour simulation serveur
- ✅ Animations CSS3 déclenchées par JS

### Interface attendue :
- **Header** : Recherche, filtres, boutons d'action
- **Liste d'items** : Cards avec drag & drop
- **Modal** : Formulaire d'ajout/édition
- **Toast notifications** : Feedback utilisateur
- **Footer** : Statistiques et boutons undo/redo

**Temps estimé : 1h30**

---

# 4.8 TP Partie 4 - Dashboard Analytics

## 🛠️ Travail Pratique : Dashboard Analytics Interactif

### Objectifs :
Créer un dashboard d'analytics interactif avec DOM manipulation avancée

### Fonctionnalités avancées :
1. **Widgets interactifs** : Graphiques, métriques, tableaux
2. **Filtres temporels** : Jour, semaine, mois, année
3. **Drag & Drop** : Réorganisation des widgets
4. **Zoom et pan** : Sur les graphiques (simulation)
5. **Export de données** : PDF, CSV, JSON
6. **Thème dynamique** : Clair/sombre avec préférences
7. **Notifications temps réel** : WebSocket simulation
8. **Responsive design** : Adaptation mobile/desktop

### Architecture technique :
- **State management** : Gestion centralisée des données
- **Event system** : Custom events pour communication
- **Storage management** : Préférences et cache
- **API simulation** : Données mock avec délais
- **Performance** : Virtual scrolling, lazy loading
- **Accessibility** : ARIA, navigation clavier

### Widgets à implémenter :
- **KPI Cards** : Revenus, utilisateurs, conversions
- **Charts** : Line, bar, pie (canvas/SVG)
- **Data Table** : Tri, pagination, recherche
- **Real-time feed** : Activité en temps réel
- **Heat map** : Données géographiques
- **Progress indicators** : Objectifs et progression

---
layout: center
class: text-center
---

# Projet Final
## Plateforme Web Responsive Complète

<div class="text-6xl text-purple-500 mb-8">
  <carbon-application-web />
</div>

Intégrer toutes les compétences acquises dans un projet complet

---

# Projet Final - Spécifications

## 🎯 Mission : Créer une Plateforme E-Learning

### Fonctionnalités Core :
1. **Authentification** : Inscription, connexion, profils
2. **Catalogue de cours** : Liste, détails, catégories
3. **Lecture de contenu** : Vidéos, articles, quiz
4. **Progression** : Suivi, certificats, statistiques
5. **Interaction** : Commentaires, notes, favoris
6. **Administration** : Gestion des cours et utilisateurs

### Technologies imposées :
- ✅ **HTML5 sémantique** : Structure accessible
- ✅ **CSS3 responsive** : Mobile-first, animations
- ✅ **JavaScript ES6+** : Classes, modules, async/await
- ✅ **DOM manipulation** : Interfaces dynamiques
- ✅ **State management** : Gestion des données
- ✅ **localStorage** : Persistance locale
- ✅ **Fetch API** : Simulation d'API REST

### Livrables attendus :
- **Code source** organisé en modules
- **Documentation** technique complète
- **Tests fonctionnels** de chaque feature
- **Présentation** de 10 minutes

---

# Architecture du Projet

## 📁 Structure de Fichiers

```
elearning-platform/
├── index.html
├── assets/
│   ├── css/
│   │   ├── main.css
│   │   ├── components.css
│   │   └── responsive.css
│   ├── js/
│   │   ├── models/
│   │   │   ├── User.js
│   │   │   ├── Course.js
│   │   │   └── Progress.js
│   │   ├── views/
│   │   │   ├── LoginView.js
│   │   │   ├── CourseView.js
│   │   │   └── ProfileView.js
│   │   ├── controllers/
│   │   │   └── AppController.js
│   │   ├── services/
│   │   │   ├── AuthService.js
│   │   │   ├── CourseService.js
│   │   │   └── StorageService.js
│   │   ├── utils/
│   │   │   ├── helpers.js
│   │   │   └── validators.js
│   │   └── app.js
│   └── images/
│       ├── avatars/
│       ├── courses/
│       └── icons/
├── pages/
│   ├── dashboard.html
│   ├── courses.html
│   ├── profile.html
│   └── admin.html
└── README.md
```

## 🏗️ Architecture MVC

- **Models** : Classes métier (User, Course, Progress)
- **Views** : Gestion de l'affichage et interactions
- **Controllers** : Logique applicative et coordination
- **Services** : API, stockage, authentification
- **Utils** : Fonctions utilitaires réutilisables


---

# Ressources et Aide

## 📚 Documentation de Référence

### HTML5 & Accessibilité
- [MDN HTML Elements](https://developer.mozilla.org/fr/docs/Web/HTML/Element)
- [WCAG Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [ARIA Authoring Practices](https://www.w3.org/WAI/ARIA/apg/)

### CSS3 & Responsive
- [CSS Grid Guide](https://css-tricks.com/snippets/css/complete-guide-grid/)
- [Flexbox Guide](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
<div class="correction-actions" style="display: flex; gap: 1rem; flex-wrap: wrap; margin-bottom: 3rem; ">

  <a href="/pages/css3/Propriétés CSS.pdf" download class="btn-download-html" style="padding: 0.5em 1em; background: #059669; color: #fff; border-radius: 6px; text-decoration: none; display: flex; align-items: center; gap: 0.5em;">
    <span>📥</span> Propiétés CSS 
  </a>
</div>

### JavaScript ES6+
- [ES6 Features](https://github.com/lukehoban/es6features)
- [JavaScript.info](https://javascript.info/) - Guide complet
<div class="correction-actions" style="display: flex; gap: 1rem; flex-wrap: wrap; margin-bottom: 3rem; ">

  <a href="/pages/javaScript/Guide des Fonctions JavaScript Essentielles.pdf" download class="btn-download-html" style="padding: 0.5em 1em; background: #059669; color: #fff; border-radius: 6px; text-decoration: none; display: flex; align-items: center; gap: 0.5em;">
    <span>📥</span> Guide des Fonctions JavaScript Essentielles 
  </a>
</div>


---
layout: center
class: text-center
---

# Félicitations ! 🎉

## Vous maîtrisez maintenant les bases du développement web moderne

<div class="grid grid-cols-4 gap-8 mt-12">
  <div class="text-center">
    <div class="text-4xl mb-2">🏗️</div>
    <div class="font-bold">HTML5</div>
    <div class="text-sm">Structure sémantique</div>
  </div>
  <div class="text-center">
    <div class="text-4xl mb-2">🎨</div>
    <div class="font-bold">CSS3</div>
    <div class="text-sm">Design responsive</div>
  </div>
  <div class="text-center">
    <div class="text-4xl mb-2">⚡</div>
    <div class="font-bold">JavaScript</div>
    <div class="text-sm">ES6+ moderne</div>
  </div>
  <div class="text-center">
    <div class="text-4xl mb-2">🎯</div>
    <div class="font-bold">DOM</div>
    <div class="text-sm">Interactivité</div>
  </div>
</div>

<br>

### Prochaines étapes recommandées :
**Frameworks Frontend** : React, Angular  
**Backend** : Spring-boot, Laravel 
**Bases de données** : MongoDB, PostgreSQL, MySQL  
**DevOps** : Git, CI/CD, déploiement

---
layout: center
class: text-center
---

# Merci pour votre attention ! 

## Questions & Discussions

<div class="pt-12">
  <span class="text-lg">
    🚀 Continuez à coder et à apprendre !
  </span>
</div>

<div class="pt-8 text-sm opacity-75">
  Formation complète - Bases du Développement Web 2025 - UNITECHS
</div>