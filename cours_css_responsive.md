---
theme: seriph
background: https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3
title: CSS et Design Responsive - Cours Complet pour Débutants
info: |
  ## Cours Complet : CSS et Design Responsive
  Formation détaillée sur CSS3 et la création de sites responsives
  
  - Bases du CSS : sélecteurs, propriétés, cascade
  - Mise en page : Flexbox, Grid, positionnement
  - Design responsive : Media queries, mobile-first
  - Exercices pratiques et projets complets
class: text-center
drawings:
  persist: false
transition: slide-left
mdc: true
---

# CSS et Design Responsive
## Cours Complet pour Débutants

<div class="pt-12">
  <span @click="$slidev.nav.next" class="px-2 py-1 rounded cursor-pointer" hover:bg="white bg-white:10">
    🎨 Commencer le cours <carbon:arrow-right class="inline"/>
  </span>
</div>

<div class="abs-br m-6 flex gap-2">
  <div class="text-sm opacity-75">
    Durée : 6-8 heures | Niveau : Débutant
  </div>
</div>

---
transition: fade-out
---

# Plan du Cours

<div class="grid grid-cols-2 gap-8 mt-8">

<div>

## 📚 Programme Détaillé

1. **Introduction au CSS**
2. **Sélecteurs et spécificité**
3. **Propriétés de base**
4. **Modèle de boîte (Box Model)**
5. **Positionnement et layout**
6. **Flexbox : layout flexible**
7. **CSS Grid : grilles avancées**
8. **Design Responsive**
9. **Media Queries**
10. **Projet final complet**

</div>

<div>

## 🎯 Objectifs d'apprentissage

- **Maîtriser** la syntaxe CSS
- **Comprendre** le modèle de boîte
- **Créer** des layouts avec Flexbox/Grid
- **Développer** des sites responsives
- **Appliquer** les bonnes pratiques
- **Réaliser** des projets concrets

### 📖 Pédagogie
Chaque chapitre = Théorie → Exercice → Correction → TP

</div>

</div>

<div class="mt-12 text-center bg-blue-100 p-4 rounded">
  <div class="text-xl font-bold text-blue-600">Prérequis</div>
  <div class="text-sm opacity-75">Connaissance de base en HTML</div>
</div>

---
layout: section
---

# Chapitre 1
## Introduction au CSS

---

# Qu'est-ce que le CSS ?

CSS (Cascading Style Sheets) est le langage qui permet de styliser et mettre en forme les pages HTML.

<div class="grid grid-cols-2 gap-8 mt-8">

<div>

## 🎨 Rôle du CSS

- **Séparation** : Contenu (HTML) vs Présentation (CSS)
- **Style** : Couleurs, polices, espacements
- **Layout** : Positionnement des éléments
- **Responsive** : Adaptation aux écrans
- **Animations** : Effets visuels dynamiques
- **Maintenance** : Code organisé et réutilisable

</div>

<div>

## 🏗️ Structure CSS

```css
/* Commentaire CSS */
sélecteur {
    propriété: valeur;
    autre-propriété: autre-valeur;
}

/* Exemple concret */
h1 {
    color: blue;
    font-size: 24px;
    text-align: center;
}

p {
    color: #333;
    line-height: 1.6;
    margin: 16px 0;
}
```

</div>

</div>

<div class="mt-8 p-4 bg-green-100 rounded">
  <strong>💡 Principe clé :</strong> Le CSS applique des styles aux éléments HTML grâce à des sélecteurs.
</div>

---

# Méthodes d'intégration CSS

Il existe trois façons d'ajouter du CSS à une page HTML.

<div class="grid grid-cols-3 gap-4">

<div>

## 📄 CSS Externe (Recommandé)

**Fichier séparé `.css`**

```html
<!-- Dans le HTML -->
<head>
    <link rel="stylesheet" href="style.css">
</head>
```

```css
/* Dans style.css */
body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 20px;
}
```

### ✅ Avantages :
- Réutilisable sur plusieurs pages
- Code organisé
- Cache navigateur

</div>

<div>

## 📋 CSS Interne

**Dans la balise `<style>`**

```html
<head>
    <style>
        body {
            background-color: #f0f0f0;
            font-family: Georgia, serif;
        }
        
        h1 {
            color: navy;
            text-decoration: underline;
        }
    </style>
</head>
```

### ⚖️ Usage :
- Page unique
- Styles spécifiques
- Tests rapides

</div>

<div>

## 🏷️ CSS Inline

**Directement dans l'attribut `style`**

```html
<h1 style="color: red; font-size: 28px;">
    Titre Rouge
</h1>

<p style="background: yellow; padding: 10px;">
    Paragraphe surligné
</p>
```

### ⚠️ Inconvénients :
- Difficile à maintenir
- Code répétitif
- Priorité maximale
- À éviter en général

</div>

</div>

---

# Syntaxe et Règles CSS

Comprendre la structure et les règles de base du CSS.

<div class="grid grid-cols-2 gap-6">

<div>

## 📝 Anatomie d'une règle CSS

```css
/* Règle CSS complète */
h1, h2, h3 {          /* ← Sélecteurs */
    color: #2c3e50;   /* ← Déclaration */
    font-weight: bold; /* ← Propriété: valeur; */
    margin-bottom: 20px;
}                     /* ← Bloc de déclarations */
```

### 🔍 Éléments :
- **Sélecteur** : Cible les éléments HTML
- **Propriété** : Aspect à modifier
- **Valeur** : Comment le modifier
- **Déclaration** : Propriété + valeur
- **Règle** : Sélecteur + déclarations

</div>

<div>

## 📏 Unités de mesure CSS

### Unités absolues :
```css
.element {
    width: 300px;        /* Pixels */
    height: 2in;         /* Pouces */
    border: 1pt solid;   /* Points */
}
```

### Unités relatives :
```css
.element {
    font-size: 1.2em;    /* Relative au parent */
    width: 50%;          /* Pourcentage */
    padding: 2rem;       /* Relative à la racine */
    height: 100vh;       /* Viewport height */
    width: 80vw;         /* Viewport width */
}
```

### Unités modernes :
```css
.responsive {
    font-size: clamp(16px, 4vw, 24px);
    width: min(100%, 800px);
    gap: max(20px, 3vw);
}
```

</div>

</div>

---

# Exercice 1 : Premiers Styles

<div class="grid grid-cols-2 gap-6">

<div>

## 📝 Énoncé

Créez votre première page stylée :

### 🎯 Objectifs :
1. Créer `index.html` avec structure de base
2. Créer `style.css` et le lier
3. Styliser les éléments suivants :
   - **Body** : Police Arial, marge 20px
   - **H1** : Couleur bleue, centré, taille 32px
   - **H2** : Couleur verte, souligné
   - **P** : Couleur grise, interligne 1.6
   - **Strong** : Couleur rouge

### 📋 Contenu HTML :
```html
<h1>Mon Premier Site CSS</h1>
<h2>Introduction</h2>
<p>Ceci est mon <strong>premier paragraphe</strong> stylé avec CSS.</p>
<h2>Conclusion</h2>
<p>CSS rend les pages <strong>beaucoup plus belles</strong> !</p>
```

</div>

<div>

## ✅ À réaliser

1. **Créer** la structure HTML complète
2. **Lier** le fichier CSS externe
3. **Appliquer** les styles demandés
4. **Tester** dans le navigateur
5. **Expérimenter** avec d'autres couleurs/tailles

### 🎨 Valeurs suggérées :
- Couleur bleue : `#3498db` ou `blue`
- Couleur verte : `#27ae60` ou `green`
- Couleur grise : `#7f8c8d` ou `#666`
- Couleur rouge : `#e74c3c` ou `red`

### 📐 Structure attendue :
```
dossier-projet/
├── index.html
└── style.css
```

</div>

</div>

---

# Correction Exercice 1

<div class="grid grid-cols-2 gap-4">

<div>

### 📄 index.html
```html
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mon Premier Site CSS</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    
    <h1>Mon Premier Site CSS</h1>
    
    <h2>Introduction</h2>
    <p>Ceci est mon <strong>premier paragraphe</strong> stylé avec CSS.</p>
    
    <h2>Conclusion</h2>
    <p>CSS rend les pages <strong>beaucoup plus belles</strong> !</p>
    
</body>
</html>
```

</div>

<div>

### 🎨 style.css
```css
/* Styles généraux */
body {
    font-family: Arial, sans-serif;
    margin: 20px;
    background-color: #f9f9f9;
}

/* Titre principal */
h1 {
    color: #3498db;
    text-align: center;
    font-size: 32px;
    margin-bottom: 30px;
}

/* Sous-titres */
h2 {
    color: #27ae60;
    text-decoration: underline;
    font-size: 24px;
    margin-top: 25px;
}

/* Paragraphes */
p {
    color: #7f8c8d;
    line-height: 1.6;
    font-size: 16px;
    margin: 15px 0;
}

/* Texte en gras */
strong {
    color: #e74c3c;
    font-weight: bold;
}
```

</div>

</div>

**🎉 Résultat :** Une page avec des styles appliqués, séparés du HTML, réutilisables !

---
layout: section
---

# Chapitre 2
## Sélecteurs et Spécificité

---

# Types de Sélecteurs CSS

Les sélecteurs déterminent quels éléments HTML seront stylés.

<div class="grid grid-cols-2 gap-6">

<div>

## 🏷️ Sélecteurs de base

### Sélecteur d'élément
```css
/* Tous les paragraphes */
p {
    color: blue;
}

/* Tous les liens */
a {
    text-decoration: none;
}
```

### Sélecteur de classe
```css
/* Éléments avec class="highlight" */
.highlight {
    background-color: yellow;
}

/* Combinaison élément + classe */
p.important {
    font-weight: bold;
}
```

### Sélecteur d'ID
```css
/* Élément avec id="header" */
#header {
    background-color: navy;
    color: white;
}
```

</div>

<div>

## 🎯 Sélecteurs avancés

### Sélecteur universel
```css
/* Tous les éléments */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
```

### Sélecteurs d'attribut
```css
/* Liens externes */
a[href^="http"] {
    color: green;
}

/* Champs obligatoires */
input[required] {
    border: 2px solid red;
}

/* Images avec alt */
img[alt] {
    border: 1px solid #ccc;
}
```

### Groupement de sélecteurs
```css
/* Plusieurs éléments, même style */
h1, h2, h3, h4, h5, h6 {
    font-family: Georgia, serif;
    color: #2c3e50;
}
```

</div>

</div>

---

# Sélecteurs de Relations

CSS permet de cibler des éléments selon leur position dans le HTML.

<div class="grid grid-cols-2 gap-6">

<div>

## 👨‍👩‍👧‍👦 Relations familiales

### Sélecteur descendant (espace)
```css
/* Tous les <a> dans <nav> */
nav a {
    color: white;
    text-decoration: none;
}

/* <p> dans <article> */
article p {
    text-indent: 20px;
}
```

### Sélecteur enfant direct (>)
```css
/* <li> enfants directs de <ul> */
ul > li {
    list-style-type: disc;
}

/* Premier niveau seulement */
.menu > li {
    display: inline-block;
}
```

</div>

<div>

## 🔗 Relations de voisinage

### Sélecteur adjacent (+)
```css
/* <p> directement après <h2> */
h2 + p {
    margin-top: 0;
    font-weight: bold;
}

/* <img> après <h1> */
h1 + img {
    margin-top: 20px;
}
```

### Sélecteur général de frères (~)
```css
/* Tous les <p> après <h2> */
h2 ~ p {
    color: #666;
}

/* <div> après <header> */
header ~ div {
    margin-top: 50px;
}
```

</div>

</div>

---

# Pseudo-classes et Pseudo-éléments

Styles conditionnels et éléments virtuels pour des effets avancés.

<div class="grid grid-cols-2 gap-6">

<div>

## 🎭 Pseudo-classes

### États des liens
```css
a:link { color: blue; }        /* Non visité */
a:visited { color: purple; }   /* Visité */
a:hover { color: red; }        /* Survol */
a:active { color: orange; }    /* Cliqué */
```

### États des formulaires
```css
input:focus {
    border: 2px solid blue;
    outline: none;
}

input:valid {
    border-color: green;
}

input:invalid {
    border-color: red;
}

button:disabled {
    opacity: 0.5;
    cursor: not-allowed;
}
```

### Position dans la structure
```css
li:first-child { font-weight: bold; }
li:last-child { border-bottom: none; }
li:nth-child(odd) { background: #f0f0f0; }
li:nth-child(3n) { color: red; }
p:first-of-type { margin-top: 0; }
```

</div>

<div>

## 🎨 Pseudo-éléments

### Contenu généré
```css
/* Avant le contenu */
h2::before {
    content: "→ ";
    color: blue;
    font-weight: bold;
}

/* Après le contenu */
.external::after {
    content: " ↗";
    font-size: 12px;
}

/* Première ligne */
p::first-line {
    font-weight: bold;
    font-size: 110%;
}

/* Première lettre */
p::first-letter {
    font-size: 200%;
    float: left;
    line-height: 1;
    margin-right: 5px;
}
```

### Sélection de texte
```css
::selection {
    background-color: yellow;
    color: black;
}
```

</div>

</div>

---

# Spécificité et Cascade

Comprendre comment CSS détermine quel style appliquer en cas de conflit.

<div class="grid grid-cols-2 gap-6">

<div>

## ⚖️ Règles de spécificité

### Ordre de priorité (du plus fort au plus faible) :
1. **Styles inline** : `style="color: red"`
2. **IDs** : `#monId`
3. **Classes, attributs, pseudo-classes** : `.maClasse`, `[type="text"]`, `:hover`
4. **Éléments et pseudo-éléments** : `div`, `::before`

### Calcul de la spécificité :
```css
/* Spécificité : 0,0,0,1 */
p { color: blue; }

/* Spécificité : 0,0,1,1 */
p.highlight { color: green; }

/* Spécificité : 0,1,0,1 */
#content p { color: red; }

/* Spécificité : 0,1,1,1 */
#content p.highlight { color: purple; }
```

</div>

<div>

## 🌊 Cascade CSS

### Règles de cascade :
1. **Importance** : `!important`
2. **Spécificité** : Plus spécifique gagne
3. **Ordre source** : Dernier défini gagne

```css
/* Exemple de cascade */
p { color: blue; }           /* Appliqué en premier */
.text { color: green; }      /* Plus spécifique */
p { color: red; }           /* Dernier, mais moins spécifique */

/* Résultat : <p class="text"> sera vert */
```

### Utilisation d'!important
```css
/* À éviter autant que possible */
.urgent {
    color: red !important;
}

/* Meilleure approche : être plus spécifique */
.alert .message.urgent {
    color: red;
}
```

### Héritage
```css
body {
    font-family: Arial, sans-serif;
    color: #333;
}

/* Hérite de body automatiquement */
p { /* font-family et color hérités */ }

/* Forcer l'héritage */
.inherit-color {
    color: inherit;
}
```

</div>

</div>

---

# Exercice 2 : Sélecteurs Avancés

<div class="grid grid-cols-2 gap-6">

<div>

## 📝 Énoncé

Créez une page avec navigation et articles pour pratiquer les sélecteurs :

### 🏗️ Structure HTML à créer :
```html
<nav id="menu">
    <ul>
        <li><a href="#accueil">Accueil</a></li>
        <li><a href="#articles">Articles</a></li>
        <li><a href="http://externe.com">Externe</a></li>
    </ul>
</nav>

<main>
    <article class="featured">
        <h2>Article Principal</h2>
        <p>Premier paragraphe important.</p>
        <p>Deuxième paragraphe normal.</p>
    </article>
    
    <article>
        <h2>Article Secondaire</h2>
        <p>Contenu de l'article.</p>
    </article>
</main>
```

</div>

<div>

## 🎯 Styles à appliquer

1. **Navigation** :
   - Fond noir, liens blancs
   - Pas de puces sur les `<li>`
   - Liens en ligne horizontale

2. **Liens** :
   - Externes en vert
   - Survol en rouge
   - Supprimer soulignement

3. **Articles** :
   - Article principal (`.featured`) : fond jaune
   - Premiers paragraphes en gras
   - H2 avec numérotation automatique

4. **Spécificité** :
   - Paragraphes dans articles : couleur #666
   - Premier enfant de chaque article : marge-top 0

</div>

</div>

---

# Correction Exercice 2

<div class="grid grid-cols-2 gap-4">

<div>

### 📄 HTML (exercice2.html)
```html
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sélecteurs CSS Avancés</title>
    <link rel="stylesheet" href="exercice2.css">
</head>
<body>
    
    <nav id="menu">
        <ul>
            <li><a href="#accueil">Accueil</a></li>
            <li><a href="#articles">Articles</a></li>
            <li><a href="http://externe.com">Externe</a></li>
        </ul>
    </nav>

    <main>
        <article class="featured">
            <h2>Article Principal</h2>
            <p>Premier paragraphe important.</p>
            <p>Deuxième paragraphe normal.</p>
        </article>
        
        <article>
            <h2>Article Secondaire</h2>
            <p>Contenu de l'article.</p>
        </article>
    </main>
    
</body>
</html>
```

</div>

<div>

### 🎨 CSS (exercice2.css)
```css
/* Reset et base */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: Arial, sans-serif;
    line-height: 1.6;
}

/* Navigation */
#menu {
    background-color: black;
    padding: 15px 0;
}

#menu ul {
    list-style: none;
    display: flex;
    justify-content: center;
    gap: 30px;
}

#menu a {
    color: white;
    text-decoration: none;
    padding: 10px 15px;
    border-radius: 3px;
}

/* États des liens */
#menu a:hover {
    background-color: red;
    color: white;
}

/* Liens externes */
a[href^="http"] {
    color: green !important;
}

a[href^="http"]:hover {
    background-color: green;
    color: white !important;
}

/* Contenu principal */
main {
    max-width: 800px;
    margin: 40px auto;
    padding: 0 20px;
}

/* Articles */
article {
    margin-bottom: 40px;
    border: 1px solid #ddd;
    padding: 20px;
    border-radius: 5px;
}

/* Article en vedette */
.featured {
    background-color: #fffacd;
    border-color: #f0e68c;
}

/* Titres avec numérotation */
body {
    counter-reset: article-counter;
}

article h2::before {
    counter-increment: article-counter;
    content: counter(article-counter) ". ";
    color: #3498db;
    font-weight: bold;
}

/* Paragraphes dans articles */
article p {
    color: #666;
    margin: 15px 0;
}

/* Premier paragraphe de chaque article */
article p:first-of-type {
    font-weight: bold;
    color: #333;
}

/* Premier enfant de chaque article */
article > *:first-child {
    margin-top: 0;
}
```

</div>

</div>

---
layout: section
---

# Chapitre 3
## Propriétés de Base

---

# Typographie et Texte

Contrôler l'apparence du texte est fondamental en CSS.

<div class="grid grid-cols-2 gap-6">

<div>

## ✍️ Polices de caractères

```css
/* Police spécifique */
h1 {
    font-family: "Times New Roman", serif;
}

/* Stack de polices (fallback) */
body {
    font-family: "Helvetica Neue", Arial, sans-serif;
}

/* Polices web (Google Fonts) */
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap');

.title {
    font-family: 'Roboto', sans-serif;
}

/* Taille de police */
h1 { font-size: 32px; }
h2 { font-size: 1.5em; }
p { font-size: 1rem; }

/* Graisse */
.thin { font-weight: 300; }
.normal { font-weight: normal; } /* ou 400 */
.bold { font-weight: bold; }     /* ou 700 */
.extra-bold { font-weight: 900; }
```

</div>

<div>

## 📐 Mise en forme du texte

```css
/* Alignement */
.center { text-align: center; }
.right { text-align: right; }
.justify { text-align: justify; }

/* Décoration */
.underline { text-decoration: underline; }
.strikethrough { text-decoration: line-through; }
.no-decoration { text-decoration: none; }

/* Transformation */
.uppercase { text-transform: uppercase; }
.lowercase { text-transform: lowercase; }
.capitalize { text-transform: capitalize; }

/* Espacement */
.spaced {
    letter-spacing: 2px;    /* Entre lettres */
    word-spacing: 5px;      /* Entre mots */
    line-height: 1.8;       /* Interlignage */
}

/* Indentation */
.indent {
    text-indent: 30px;      /* Première ligne */
}
```

</div>

</div>

---

# Couleurs et Arrière-plans

CSS offre plusieurs façons de définir les couleurs et arrière-plans.

<div class="grid grid-cols-2 gap-6">

<div>

## 🎨 Définir les couleurs

```css
/* Noms de couleurs */
.red { color: red; }
.blue { background-color: blue; }

/* Hexadécimal */
.primary { color: #3498db; }
.dark { background: #2c3e50; }
.short { color: #f00; } /* Équivaut à #ff0000 */

/* RGB */
.rgb-color {
    color: rgb(52, 152, 219);
    background: rgb(255, 255, 255);
}

/* RGBA (avec transparence) */
.semi-transparent {
    background-color: rgba(0, 0, 0, 0.5); /* 50% transparent */
    color: rgba(255, 255, 255, 0.8);
}

/* HSL (Teinte, Saturation, Luminosité) */
.hsl-color {
    color: hsl(210, 70%, 53%);
    background: hsl(0, 0%, 95%);
}
```

</div>

<div>

## 🖼️ Arrière-plans avancés

```css
/* Image de fond */
.hero {
    background-image: url('hero.jpg');
    background-size: cover;      /* Couvre tout */
    background-position: center; /* Centré */
    background-repeat: no-repeat;
    height: 400px;
}

/* Dégradés */
.gradient-linear {
    background: linear-gradient(45deg, #3498db, #e74c3c);
}

.gradient-radial {
    background: radial-gradient(circle, #fff, #000);
}

/* Arrière-plans multiples */
.complex-bg {
    background: 
        linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)),
        url('background.jpg');
    background-size: cover;
}

/* Propriétés raccourcies */
.bg-shorthand {
    background: #f0f0f0 url('pattern.png') repeat-x center top;
}
```

</div>

</div>

---

# Bordures et Ombres

Créer des effets visuels avec bordures et ombres.

<div class="grid grid-cols-2 gap-6">

<div>

## 🔲 Bordures

```css
/* Bordure simple */
.simple-border {
    border: 2px solid #333;
}

/* Bordures détaillées */
.detailed-border {
    border-width: 2px;
    border-style: solid;
    border-color: #3498db;
}

/* Bordures individuelles */
.individual-borders {
    border-top: 3px solid red;
    border-right: 1px dashed blue;
    border-bottom: 2px dotted green;
    border-left: 4px double purple;
}

/* Coins arrondis */
.rounded {
    border-radius: 10px;
}

.