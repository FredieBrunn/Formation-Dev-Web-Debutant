
# Syntaxe et Règles CSS

Comprendre la structure et les règles de base du CSS.

## 📝 Anatomie d'une règle CSS

```css
/* Règle CSS complète */
h1, h2, h3 {          /* ← Sélecteurs */
    color: #2c3e50;   /* ← Déclaration */
    font-weight: bold; /* ← Propriété: valeur; */
    margin-bottom: 20px;
}                     /* ← Bloc de déclarations */
```

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

---

# 2. Les Sélecteurs CSS

## Types de sélecteurs
- **Sélecteurs simples**
  - `Le sélecteur d' Element` s'applique à tous les éléments d'un même type.
  - `Le sélecteur de Classe` cible des éléments spécifiques ayant une même classe.
  - `Le sélecteur d'ID` est unique à un seul élément.
- **Sélecteurs d'attributs** : cibler des éléments en fonction de la présence ou de la valeur d'un attribut spécifique.
- **Sélecteurs de pseudo-classes :** cibler des éléments en fonction de leur état.
- **Séleceurs de pseudo-éléments :**  cibler des parties spécifiques d'un élément.
- **Sélecteurs combinés :** cibler des éléments en fonction de leur relation avec d'autres éléments.
- **Sélecteurs multiples :** cibler plusieurs éléments en une seule déclaration.


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

# Spécificité et cascade

Comprendre comment CSS détermine quel style appliquer en cas de conflit.
<!-- - Comment la spécificité est calculée
- L'ordre de priorité des sélecteurs
- L'héritage des propriétés -->

<div class="grid grid-cols-2 gap-6">

<div>

## ⚖️ Règles de spécificité

### Ordre de priorité (du plus fort au plus faible) :
1. **Styles inline** : `style="color: red"`
2. **IDs** : `#monId`
3. **Classes, attributs, pseudo-classes** : `.maClasse`, `[type="text"]`, `:hover`
4. **Éléments et pseudo-éléments** : `div`, `::before` <br> <br>
| <b>Note : </b>  Ordre de spécificité: `style inline` > `ID` > `classe` > `élément`

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
layout: default
---

# Exercice 2: Sélecteurs CSS

## Instructions
1. Créer une page HTML contenant:
   - Un header avec un titre principal
   - Une navigation avec 4 liens
   - 3 articles avec un titre, des paragraphes et une image chacun
   - Un footer avec des liens et un copyright
2. Appliquer différents styles en utilisant:
   - Des sélecteurs simples (éléments, classes, ID)
   - Des sélecteurs d'attributs
   - Des pseudo-classes (:hover, :first-child, etc.)
   - Des sélecteurs combinés (descendants, enfants directs)


<!--
Conseils pour l'exercice:
- Commencer par structurer correctement le HTML
- Planifier les styles avant de commencer à coder
- Explorer les différents sélecteurs pour comprendre leur utilité
-->

---

# Solution Exercice 2 (HTML)

<div class="correction-actions" style="display: flex; gap: 1rem; flex-wrap: wrap; margin-bottom: 2rem;">

  <a href="/corrections/exercice2/index.html" target="_blank" rel="noopener" class="btn-view" style="padding: 0.5em 1em; background: #2563eb; color: #fff; border-radius: 6px; text-decoration: none; display: flex; align-items: center; gap: 0.5em;">
    <span>👁️</span> Visualiser la correction 
  </a>
  <a href="/corrections/exercice2/index.html" download class="btn-download-html" style="padding: 0.5em 1em; background: #059669; color: #fff; border-radius: 6px; text-decoration: none; display: flex; align-items: center; gap: 0.5em;">
    <span>📥</span> Télécharger la correction HTML
  </a>
  <!-- <a href="/corrections/exercice2.zip" download class="btn-download-zip" style="padding: 0.5em 1em; background: #f59e42; color: #fff; border-radius: 6px; text-decoration: none; display: flex; align-items: center; gap: 0.5em;">
    <span>🗜️</span> Télécharger le ZIP
  </a> -->
</div>
<!--
CSS avec utilisation de divers sélecteurs:
- Sélecteurs d'éléments, de classes et d'ID
- Sélecteurs d'attributs pour cibler des éléments spécifiques
- Pseudo-classes pour les états (hover) et la position (first-child)
- Sélecteurs combinés pour les relations parent-enfant
- Pseudo-éléments pour styliser des parties spécifiques d'un élément
-->