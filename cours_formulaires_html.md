---
theme: seriph
background: https://images.unsplash.com/photo-1586281380349-632531db7ed4?ixlib=rb-4.0.3
title: Formulaires HTML - Cours Complet pour Débutants
info: |
  ## Cours Complet : Formulaires HTML
  Formation détaillée sur la création de formulaires en HTML
  
  - Structure et syntaxe de base
  - Types d'inputs et leurs utilisations
  - Validation et accessibilité
  - Exercices pratiques et TP
class: text-center
drawings:
  persist: false
transition: slide-left
mdc: true
---

# Formulaires HTML
## Cours Complet pour Débutants

<div class="pt-12">
  <span @click="$slidev.nav.next" class="px-2 py-1 rounded cursor-pointer" hover:bg="white bg-white:10">
    📝 Commencer le cours <carbon:arrow-right class="inline"/>
  </span>
</div>

<div class="abs-br m-6 flex gap-2">
  <div class="text-sm opacity-75">
    Durée : 3-4 heures | Niveau : Débutant
  </div>
</div>

---
transition: fade-out
---

# Plan du Cours

<div class="grid grid-cols-2 gap-8 mt-8">

<div>

## 📚 Programme

1. **Introduction aux formulaires**
2. **Élément `<form>` et ses attributs**
3. **Champs de saisie `<input>`**
4. **Éléments de sélection**
5. **Zone de texte et boutons**
6. **Organisation et accessibilité**
7. **Validation HTML5**
8. **Projets pratiques**

</div>

<div>

## 🎯 Objectifs d'apprentissage

- Comprendre l'utilité des formulaires
- Maîtriser tous les types d'inputs
- Créer des formulaires accessibles
- Appliquer la validation HTML5
- Développer des formulaires complets
- Bonnes pratiques de structuration

</div>

</div>

<div class="mt-12 text-center">
  <div class="text-xl font-bold text-blue-400">Méthode pédagogique</div>
  <div class="text-sm opacity-75">Théorie → Exercice → Correction → TP pratique</div>
</div>

---
layout: section
---

# Chapitre 1
## Introduction aux Formulaires HTML

---

# Qu'est-ce qu'un formulaire ?

Un formulaire HTML permet de collecter des informations saisies par l'utilisateur et de les envoyer à un serveur pour traitement.

<div class="grid grid-cols-2 gap-8 mt-8">

<div>

## 🎯 Utilités des formulaires

- **Inscription/Connexion** : Créer un compte utilisateur
- **Contact** : Envoyer un message
- **Commande** : Acheter un produit
- **Recherche** : Trouver du contenu
- **Sondage** : Collecter des opinions
- **Newsletter** : S'abonner aux actualités

</div>

<div>

## 🏗️ Structure générale

```html
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <title>Mon Formulaire</title>
</head>
<body>
    <form>
        <!-- Éléments du formulaire -->
        <input type="text" name="nom">
        <button type="submit">Envoyer</button>
    </form>
</body>
</html>
```

</div>

</div>

<div class="mt-8 p-4 bg-blue-100 rounded">
  <strong>💡 À retenir :</strong> Un formulaire est un conteneur qui regroupe des éléments interactifs pour collecter des données utilisateur.
</div>

---

# Anatomie d'un Formulaire

Découvrons les composants essentiels d'un formulaire HTML.

<div class="grid grid-cols-2 gap-6">

<div>

## 🔍 Éléments principaux

```html
<form action="/traitement.php" method="post">
    <!-- 1. Étiquette -->
    <label for="nom">Votre nom :</label>
    
    <!-- 2. Champ de saisie -->
    <input type="text" id="nom" name="nom">
    
    <!-- 3. Bouton d'envoi -->
    <button type="submit">Envoyer</button>
</form>
```

### Rôles des éléments :
- **`<form>`** : Conteneur principal
- **`<label>`** : Étiquette descriptive
- **`<input>`** : Champ de saisie
- **`<button>`** : Bouton d'action

</div>

<div>

## ⚙️ Attributs importants

### Élément `<form>`
- **`action`** : URL de destination des données
- **`method`** : Méthode d'envoi (GET/POST)

### Élément `<input>`
- **`type`** : Type de champ (text, email, etc.)
- **`name`** : Nom du champ pour le serveur
- **`id`** : Identifiant unique

### Élément `<label>`
- **`for`** : Lie l'étiquette au champ (même valeur que l'`id`)

</div>

</div>

---

# Exercice 1 : Premier Formulaire

<div class="grid grid-cols-2 gap-6">

<div>

## 📝 Énoncé

Créez votre premier formulaire HTML simple :

### Objectifs :
1. Créer un fichier `exercice1.html`
2. Ajouter un formulaire avec :
   - Un champ "Prénom"
   - Un champ "Nom de famille"
   - Un bouton "Valider"
3. Utiliser les bonnes pratiques :
   - Associer les labels aux inputs
   - Définir les attributs `name` et `id`

### Structure attendue :
```html
<form>
    <label>...</label>
    <input>
    <!-- Répéter pour chaque champ -->
    <button>...</button>
</form>
```

</div>

<div>

## ✅ À faire

1. **Ouvrir** un éditeur de texte
2. **Créer** le fichier HTML avec la structure de base
3. **Ajouter** le formulaire avec les champs demandés
4. **Tester** en ouvrant le fichier dans un navigateur
5. **Vérifier** que vous pouvez saisir du texte et cliquer sur le bouton

### Points d'attention :
- Utiliser `type="text"` pour les champs texte
- Associer chaque `<label>` avec son `<input>`
- Donner des noms significatifs aux champs

</div>

</div>

---

# Correction Exercice 1

```html {all|1-7|8-12|13-23|24-30|31-35|all}
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mon Premier Formulaire</title>
</head>
<body>
    <h1>Formulaire d'Inscription</h1>
    
    <!-- Début du formulaire -->
    <form>
        
        <!-- Champ Prénom -->
        <label for="prenom">Prénom :</label>
        <input type="text" id="prenom" name="prenom">
        
        <!-- Retour à la ligne pour la lisibilité -->
        <br><br>
        
        <!-- Champ Nom de famille -->
        <label for="nom">Nom de famille :</label>
        <input type="text" id="nom" name="nom">
        
        <!-- Retour à la ligne -->
        <br><br>
        
        <!-- Bouton de validation -->
        <button type="submit">Valider</button>
        
    </form>
    
</body>
</html>
```

**Points clés :**
- Association correcte label/input avec `for` et `id`
- Attributs `name` pour identifier les champs côté serveur
- Structure HTML valide et complète

---
layout: section
---

# Chapitre 2
## L'élément `<form>` et ses Attributs

---

# L'élément `<form>` en détail

L'élément `<form>` est le conteneur principal qui définit comment les données seront envoyées.

<div class="grid grid-cols-2 gap-6">

<div>

## 🔧 Attributs principaux

### `action` - Destination des données
```html
<!-- Envoie vers un fichier PHP -->
<form action="traitement.php">

<!-- Envoie vers une URL complète -->
<form action="https://exemple.com/contact">

<!-- Envoie vers la même page (par défaut) -->
<form action="">
<form> <!-- Sans action = même page -->
```

### `method` - Méthode d'envoi
```html
<!-- GET : données visibles dans l'URL -->
<form method="get">

<!-- POST : données cachées (recommandé) -->
<form method="post">
```

</div>

<div>

## 📋 Autres attributs utiles

### `name` - Nom du formulaire
```html
<form name="contact" action="traitement.php">
```

### `target` - Fenêtre de destination
```html
<!-- Ouvre dans une nouvelle fenêtre -->
<form target="_blank">

<!-- Ouvre dans la même fenêtre (défaut) -->
<form target="_self">
```

### `enctype` - Encodage des données
```html
<!-- Pour fichiers (upload) -->
<form enctype="multipart/form-data">

<!-- Pour données normales (défaut) -->
<form enctype="application/x-www-form-urlencoded">
```

</div>

</div>

---

# Différence entre GET et POST

Comprendre les méthodes d'envoi est crucial pour bien utiliser les formulaires.

<div class="grid grid-cols-2 gap-6">

<div>

## 📤 Méthode GET

```html
<form action="recherche.php" method="get">
    <label for="motcle">Rechercher :</label>
    <input type="text" id="motcle" name="q">
    <button type="submit">Chercher</button>
</form>
```

**Résultat dans l'URL :**
```
https://exemple.com/recherche.php?q=formation
```

### ✅ Avantages :
- URL partageable
- Résultat mis en favoris
- Navigation avec boutons précédent/suivant

### ❌ Inconvénients :
- Données visibles dans l'URL
- Limite de longueur (~2000 caractères)
- Pas sécurisé pour données sensibles

</div>

<div>

## 📨 Méthode POST

```html
<form action="inscription.php" method="post">
    <label for="email">Email :</label>
    <input type="email" id="email" name="email">
    
    <label for="password">Mot de passe :</label>
    <input type="password" id="password" name="password">
    
    <button type="submit">S'inscrire</button>
</form>
```

**Les données sont envoyées de manière cachée**

### ✅ Avantages :
- Données cachées dans l'URL
- Pas de limite de taille
- Plus sécurisé
- Permet l'envoi de fichiers

### ❌ Inconvénients :
- URL non partageable
- Pas de favoris possible
- Actualisation = renvoi des données

</div>

</div>

---

# Quand utiliser GET ou POST ?

<div class="grid grid-cols-2 gap-8 mt-8">

<div>

## 🔍 Utilisez GET pour :

- **Recherche** : Moteurs de recherche
- **Filtres** : Tri de produits
- **Navigation** : Pagination
- **Consultation** : Affichage de données

```html
<!-- Formulaire de recherche -->
<form action="recherche.php" method="get">
    <input type="search" name="q" placeholder="Rechercher...">
    <button type="submit">🔍</button>
</form>

<!-- Filtre de produits -->
<form method="get">
    <select name="categorie">
        <option value="tous">Tous</option>
        <option value="vetements">Vêtements</option>
    </select>
    <button type="submit">Filtrer</button>
</form>
```

</div>

<div>

## 📝 Utilisez POST pour :

- **Inscription/Connexion** : Données sensibles
- **Contact** : Messages privés
- **Commandes** : Informations personnelles
- **Upload** : Envoi de fichiers

```html
<!-- Formulaire de contact -->
<form action="contact.php" method="post">
    <input type="email" name="email" required>
    <textarea name="message" required></textarea>
    <button type="submit">Envoyer</button>
</form>

<!-- Upload de fichier -->
<form method="post" enctype="multipart/form-data">
    <input type="file" name="photo">
    <button type="submit">Télécharger</button>
</form>
```

</div>

</div>

---

# Exercice 2 : Formulaires GET et POST

<div class="grid grid-cols-2 gap-6">

<div>

## 📝 Énoncé

Créez deux formulaires pour comprendre la différence entre GET et POST :

### Formulaire 1 - Recherche (GET)
- Champ de recherche
- Bouton "Rechercher"
- Action vers `recherche.php`
- Méthode GET

### Formulaire 2 - Contact (POST)
- Champ "Nom"
- Champ "Email"
- Zone de "Message"
- Bouton "Envoyer"
- Action vers `contact.php`
- Méthode POST

</div>

<div>

## 🎯 Objectifs

1. **Créer** `exercice2.html`
2. **Implémenter** les deux formulaires
3. **Tester** en remplissant les champs
4. **Observer** la différence dans l'URL après soumission
5. **Comprendre** quand utiliser chaque méthode

### Structure attendue :
```html
<!-- Formulaire de recherche -->
<form method="get" action="recherche.php">
    <!-- Champs de recherche -->
</form>

<!-- Formulaire de contact -->
<form method="post" action="contact.php">
    <!-- Champs de contact -->
</form>
```

</div>

</div>

---

# Correction Exercice 2

```html {all|1-8|9-20|21-42|all}
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Formulaires GET et POST</title>
</head>
<body>
    
    <h1>Démonstration GET vs POST</h1>
    
    <!-- FORMULAIRE 1 : RECHERCHE (GET) -->
    <h2>1. Formulaire de Recherche (GET)</h2>
    <form action="recherche.php" method="get">
        <label for="recherche">Que recherchez-vous ?</label>
        <input type="search" id="recherche" name="q" placeholder="Tapez votre recherche...">
        <button type="submit">🔍 Rechercher</button>
    </form>
    
    <hr>
    
    <!-- FORMULAIRE 2 : CONTACT (POST) -->
    <h2>2. Formulaire de Contact (POST)</h2>
    <form action="contact.php" method="post">
        
        <!-- Champ Nom -->
        <label for="nom">Nom complet :</label>
        <input type="text" id="nom" name="nom" placeholder="Jean Dupont">
        <br><br>
        
        <!-- Champ Email -->
        <label for="email">Adresse email :</label>
        <input type="email" id="email" name="email" placeholder="jean@exemple.com">
        <br><br>
        
        <!-- Zone de message -->
        <label for="message">Votre message :</label><br>
        <textarea id="message" name="message" rows="5" cols="50" 
                  placeholder="Écrivez votre message ici..."></textarea>
        <br><br>
        
        <!-- Bouton d'envoi -->
        <button type="submit">📧 Envoyer le message</button>
        
    </form>
    
</body>
</html>
```

**Test :** Après soumission, observez que GET affiche les données dans l'URL, POST non.

---
layout: section
---

# Chapitre 3
## Champs de Saisie `<input>`

---

# L'élément `<input>` - Vue d'ensemble

L'élément `<input>` est polyvalent et change de comportement selon son attribut `type`.

<div class="grid grid-cols-2 gap-6">

<div>

## 🎛️ Syntaxe de base

```html
<input type="type" name="nom" id="identifiant">
```

### Attributs essentiels :
- **`type`** : Définit le type de champ
- **`name`** : Nom du champ (côté serveur)
- **`id`** : Identifiant unique (pour `<label>`)

### Attributs optionnels :
- **`value`** : Valeur par défaut
- **`placeholder`** : Texte d'aide
- **`required`** : Champ obligatoire
- **`disabled`** : Champ désactivé
- **`readonly`** : Lecture seule

</div>

<div>

## 📝 Types d'input principaux

| Type | Usage |
|------|-------|
| `text` | Texte simple |
| `email` | Adresse email |
| `password` | Mot de passe |
| `number` | Nombre |
| `tel` | Téléphone |
| `url` | URL |
| `date` | Date |
| `checkbox` | Case à cocher |
| `radio` | Bouton radio |
| `file` | Fichier |
| `submit` | Bouton d'envoi |
| `button` | Bouton simple |

</div>

</div>

---

# Types de Texte

Les différents types de champs texte et leurs spécificités.

<div class="grid grid-cols-2 gap-6">

<div>

## 📝 Type `text` - Texte simple

```html
<!-- Champ texte basique -->
<label for="nom">Nom :</label>
<input type="text" id="nom" name="nom">

<!-- Avec valeur par défaut -->
<input type="text" name="ville" value="Paris">

<!-- Avec placeholder -->
<input type="text" name="prenom" 
       placeholder="Entrez votre prénom">

<!-- Avec contraintes -->
<input type="text" name="pseudo" 
       minlength="3" maxlength="20"
       placeholder="3 à 20 caractères">
```

### ✨ Attributs spécifiques :
- `minlength` / `maxlength` : Longueur min/max
- `pattern` : Expression régulière
- `autocomplete` : Autocomplétion

</div>

<div>

## 📧 Type `email` - Adresse email

```html
<!-- Email simple -->
<label for="email">Email :</label>
<input type="email" id="email" name="email">

<!-- Email obligatoire -->
<input type="email" name="email" required
       placeholder="votre@email.com">

<!-- Plusieurs emails -->
<input type="email" name="emails" multiple
       placeholder="email1@test.com, email2@test.com">
```

### 🔔 Type `tel` - Téléphone

```html
<!-- Téléphone -->
<label for="tel">Téléphone :</label>
<input type="tel" id="tel" name="telephone">

<!-- Avec pattern pour format français -->
<input type="tel" name="tel" 
       pattern="0[1-9][0-9]{8}"
       placeholder="0123456789">
```

</div>

</div>

---

# Types Spécialisés

Découvrons les types d'input plus spécifiques.

<div class="grid grid-cols-2 gap-6">

<div>

## 🔒 Type `password` - Mot de passe

```html
<!-- Mot de passe simple -->
<label for="password">Mot de passe :</label>
<input type="password" id="password" name="password">

<!-- Avec contraintes -->
<input type="password" name="password"
       minlength="8" required
       placeholder="8 caractères minimum">

<!-- Confirmation -->
<label for="confirm">Confirmer :</label>
<input type="password" id="confirm" name="confirm">
```

## 🌐 Type `url` - URL

```html
<!-- URL simple -->
<input type="url" name="site" 
       placeholder="https://monsite.com">

<!-- URL obligatoire -->
<input type="url" name="portfolio" required>
```

</div>

<div>

## 🔢 Type `number` - Nombre

```html
<!-- Nombre simple -->
<label for="age">Âge :</label>
<input type="number" id="age" name="age">

<!-- Avec limites -->
<input type="number" name="note" 
       min="0" max="20" step="0.5"
       placeholder="Note sur 20">

<!-- Quantité -->
<input type="number" name="quantite" 
       min="1" value="1">
```

## 🔍 Type `search` - Recherche

```html
<!-- Champ de recherche -->
<input type="search" name="q" 
       placeholder="Rechercher...">

<!-- Avec autocomplete -->
<input type="search" name="recherche"
       autocomplete="on">
```

</div>

</div>

---

# Types de Date et Heure

HTML5 offre plusieurs types pour gérer les dates et heures.

<div class="grid grid-cols-2 gap-6">

<div>

## 📅 Dates

```html
<!-- Date complète -->
<label for="naissance">Date de naissance :</label>
<input type="date" id="naissance" name="naissance">

<!-- Avec limites -->
<input type="date" name="reservation"
       min="2024-01-01" max="2024-12-31">

<!-- Mois uniquement -->
<label for="mois">Mois :</label>
<input type="month" id="mois" name="mois">

<!-- Semaine -->
<label for="semaine">Semaine :</label>
<input type="week" id="semaine" name="semaine">
```

</div>

<div>

## ⏰ Heures

```html
<!-- Heure -->
<label for="heure">Heure :</label>
<input type="time" id="heure" name="heure">

<!-- Avec valeur par défaut -->
<input type="time" name="rendez-vous" 
       value="14:30">

<!-- Date et heure complète -->
<label for="datetime">Date et heure :</label>
<input type="datetime-local" id="datetime" 
       name="datetime">

<!-- Avec minimum (dans 1 heure) -->
<input type="datetime-local" name="reservation"
       min="2024-12-25T10:00">
```

</div>

</div>

---

# Exercice 3 : Types d'Input

<div class="grid grid-cols-2 gap-6">

<div>

## 📝 Énoncé

Créez un formulaire d'inscription utilisant différents types d'input :

### Champs à créer :
1. **Prénom** (text, obligatoire)
2. **Email** (email, obligatoire)
3. **Mot de passe** (password, min 8 caractères)
4. **Téléphone** (tel, format french)
5. **Site web** (url, optionnel)
6. **Âge** (number, 16-99 ans)
7. **Date de naissance** (date)
8. **Heure préférée** (time)

### Contraintes :
- Tous les champs obligatoires sauf site web
- Placeholders informatifs
- Validation HTML5 appropriée

</div>

<div>

## 🎯 Objectifs d'apprentissage

1. **Utiliser** les différents types d'input
2. **Appliquer** les attributs de validation
3. **Tester** le comportement dans le navigateur
4. **Observer** les messages d'erreur automatiques

### Structure de base :
```html
<form method="post">
    <!-- Champ prénom -->
    <label for="prenom">Prénom :</label>
    <input type="text" id="prenom" name="prenom" 
           required placeholder="Votre prénom">
    
    <!-- Autres champs... -->
    
    <button type="submit">S'inscrire</button>
</form>
```

</div>

</div>

---

# Correction Exercice 3

```html {all|1-8|9-20|21-35|36-50|51-65|66-75|all}
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Formulaire d'Inscription Complet</title>
</head>
<body>
    
    <h1>Inscription</h1>
    
    <form action="inscription.php" method="post">
        
        <!-- Prénom (text, obligatoire) -->
        <label for="prenom">Prénom * :</label>
        <input type="text" id="prenom" name="prenom" 
               required placeholder="Entrez votre prénom">
        <br><br>
        
        <!-- Email (email, obligatoire) -->
        <label for="email">Adresse email * :</label>
        <input type="email" id="email" name="email" 
               required placeholder="exemple@email.com">
        <br><br>
        
        <!-- Mot de passe (password, min 8 caractères) -->
        <label for="password">Mot de passe * :</label>
        <input type="password" id="password" name="password" 
               required minlength="8" 
               placeholder="8 caractères minimum">
        <br><br>
        
        <!-- Téléphone (tel, format français) -->
        <label for="telephone">Téléphone * :</label>
        <input type="tel" id="telephone" name="telephone" 
               required pattern="0[1-9][0-9]{8}" 
               placeholder="0123456789"
               title="Format: 0123456789">
        <br><br>
        
        <!-- Site web (url, optionnel) -->
        <label for="site">Site web :</label>
        <input type="url" id="site" name="site" 
               placeholder="https://monsite.com">
        <br><br>
        
        <!-- Âge (number, 16-99 ans) -->
        <label for="age">Âge * :</label>
        <input type="number" id="age" name="age" 
               required min="16" max="99" 
               placeholder="Votre âge">
        <br><br>
        
        <!-- Date de naissance -->
        <label for="naissance">Date de naissance * :</label>
        <input type="date" id="naissance" name="naissance" 
               required max="2008-12-31">
        <br><br>
        
        <!-- Heure préférée -->
        <label for="heure">Heure de contact préférée :</label>
        <input type="time" id="heure" name="heure" 
               value="14:00">
        <br><br>
        
        <!-- Bouton de soumission -->
        <button type="submit">S'inscrire</button>
        
    </form>
    
    <p><em>* Champs obligatoires</em></p>
    
</body>
</html>
```

---
layout: section
---

# Chapitre 4
## Éléments de Sélection

---

# Cases à Cocher (`checkbox`)

Les checkboxes permettent de sélectionner une ou plusieurs options.

<div class="grid grid-cols-2 gap-6">

<div>

## ☑️ Syntaxe de base

```html
<!-- Checkbox simple -->
<input type="checkbox" id="newsletter" name="newsletter">
<label for="newsletter">S'abonner à la newsletter</label>

<!-- Checkbox cochée par défaut -->
<input type="checkbox" id="conditions" name="conditions" checked>
<label for="conditions">J'accepte les conditions</label>

<!-- Checkbox obligatoire -->
<input type="checkbox" id="rgpd" name="rgpd" required>
<label for="rgpd">J'accepte la politique de confidentialité *</label>
```

## 🎯 Valeurs et groupes

```html
<!-- Checkbox avec valeur personnalisée -->
<input type="checkbox" name="hobbies" value="lecture" id="lecture">
<label for="lecture">Lecture</label>

<input type="checkbox" name="hobbies" value="sport" id="sport">
<label for="sport">Sport</label>

<input type="checkbox" name="hobbies" value="musique" id="musique">
<label for="musique">Musique</label>
```

</div>

<div>

## 📋 Exemple complet

```html
<fieldset>
    <legend>Centres d'intérêt</legend>
    
    <input type="checkbox" id="tech" name="interets" value="technologie">
    <label for="tech">Technologie</label><br>
    
    <input type="checkbox" id="cuisine" name