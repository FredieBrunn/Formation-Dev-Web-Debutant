---
layout: two-cols
layoutClass: gap-16
---

# 1. Introduction au CSS3

<!--
Points importants à souligner:
- CSS signifie "Cascading Style Sheets" (Feuilles de style en cascade)
- CSS3 est la dernière évolution majeure de CSS
- CSS sépare le contenu (HTML) de la présentation
- Principes de cascade et d'héritage
-->
# Qu'est-ce que le CSS ?

CSS (Cascading Style Sheets) est le langage qui permet de styliser et mettre en forme les pages HTML.

## 🎨 Pourquoi utiliser CSS3?

- **Séparation** : Contenu (HTML) vs Présentation (CSS)
- **Style** : Couleurs, polices, espacements
- **Layout** : Positionnement des éléments
- **Responsive** : Adaptation aux écrans
- **Animations** : Effets visuels dynamiques
- **Maintenance** : Code organisé et réutilisable


## Principes fondamentaux:
  - Sélecteurs
  - Propriétés
  - Valeurs

# Méthodes d'intégration CSS

Il existe trois façons d'ajouter du CSS à une page HTML.

## 📄 CSS Externe (Recommandé)

```html
<!-- Exemple de CSS externe -->
<head>
  <link rel="stylesheet" href="styles.css">
</head>
```

```css
/* Dans styles.css */
p {
  color: blue;
  font-size: 16px;
}
```

### ✅ Avantages :
- Réutilisable sur plusieurs pages
- Code organisé
- Cache navigateur

::right::

## 📋 CSS Interne

```html
<!-- Exemple de CSS interne -->
<style>
  p {
    color: blue;
    font-size: 16px;
  }
</style>
```

### ⚖️ Usage :
- Page unique
- Styles spécifiques
- Tests rapides

## 🏷️ CSS Inline

```html
<!-- Exemple de CSS inline -->
<p style="color: blue; font-size: 16px;">
  Texte en bleu de 16px
</p>
```

### ⚠️ Inconvénients :
- Difficile à maintenir
- Code répétitif
- Priorité maximale
- À éviter en général








---
layout: default
---

# Exemple : Intégration CSS

## Instructions
1. Créer une page HTML basique
2. Appliquer un style en utilisant la méthode inline
3. Ajouter une section avec du style en utilisant la méthode interne (balise `<style>`)
4. Créer une feuille de style externe et l'intégrer à votre page

<div class="mt-8 border-t pt-4">

## Solution

```html
<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <title>Exemple : Intégration CSS</title>
  <style>
    .internal {
      color: green;
      font-family: Arial;
      padding: 10px;
      background-color: #f0f0f0;
    }
  </style>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <h1 style="color: blue; text-align: center;">Titre avec CSS inline</h1>
  <p class="internal">Paragraphe avec CSS interne</p>
  <p class="external">Paragraphe avec CSS externe</p>
</body>
</html>
```

```css
/* styles.css */
.external {
  color: red;
  font-family: 'Courier New';
  border: 1px solid #ccc;
  padding: 15px;
}
```

</div>

<!--
Conseils pour les apprenants:
- La méthode externe est généralement préférée pour la maintenance
- L'inline est pratique pour des styles spécifiques à un élément unique
- L'interne est utile pour des petits projets d'une seule page
-->