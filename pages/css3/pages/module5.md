---
layout: two-cols
layoutClass: gap-16
---

# 5. Formatage du Texte

## Propriétés de base
- `font-family`: type de police
- `font-size`: taille du texte
- `font-weight`: graisse (épaisseur)
- `font-style`: style (italique, etc.)
- `text-align`: alignement du texte
- `line-height`: hauteur de ligne
- Raccourci `font`

## Propriétés avancées
- `text-decoration`: décoration du texte
- `text-transform`: transformation du texte
- `text-shadow`: ombre du texte
- `white-space`: gestion des espaces
- `word-wrap` et `overflow-wrap`
- `text-overflow`: gestion du texte débordant

::right::

```css
/* Propriétés de base du texte */
.text-basic {
  font-family: 'Roboto', Arial, sans-serif;
  font-size: 16px;
  font-weight: 400;
  font-style: normal;
  text-align: left;
  line-height: 1.5;
  
  /* Raccourci */
  font: normal 400 16px/1.5 'Roboto', Arial, sans-serif;
}

/* Propriétés avancées */
.text-advanced {
  text-decoration: underline;
  text-transform: uppercase;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

/* Polices web */
@font-face {
  font-family: 'MaPolicePersonnalisée';
  src: url('mapolice.woff2') format('woff2'),
       url('mapolice.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}
```

---
layout: two-cols
layoutClass: gap-16
---

## Exemple

```html
<div  class="mt-4">
  <p style="font-family: serif; font-size: 18px;">Texte avec police Serif</p>
  <p style="font-family: sans-serif; font-size: 18px;">Texte avec police Sans-Serif</p>
  <p style="font-family: monospace; font-size: 18px;">Texte avec police Monospace</p>
  <p style="text-decoration: underline; font-size: 18px;">Texte souligné</p>
  <p style="text-transform: uppercase; font-size: 18px;">texte en majuscules</p>
  <p style="text-shadow: 2px 2px 4px #4EC5D4; font-size: 18px;">Texte avec ombre</p>
</div>
```
::right::

<div  class="mt-4">
  <p style="font-family: serif; font-size: 18px;">Texte avec police Serif</p>
  <p style="font-family: sans-serif; font-size: 18px;">Texte avec police Sans-Serif</p>
  <p style="font-family: monospace; font-size: 18px;">Texte avec police Monospace</p>
  <p style="text-decoration: underline; font-size: 18px;">Texte souligné</p>
  <p style="text-transform: uppercase; font-size: 18px;">texte en majuscules</p>
  <p style="text-shadow: 2px 2px 4px #4EC5D4; font-size: 18px;">Texte avec ombre</p>
</div>

<!--
Points clés sur le formatage du texte:
- Les polices web (@font-face) ont révolutionné la typographie sur le web
- La famille de police devrait toujours inclure des alternatives de secours
- Les propriétés text-shadow et les transformations sont des ajouts CSS3
- Bien gérer les textes longs avec text-overflow et word-wrap est crucial pour la responsivité
-->

---
layout: default
---

# Exercice 5: Formatage du Texte

## Instructions
1. Créer une page HTML avec plusieurs sections de texte
2. Appliquer différentes polices, tailles et styles de texte
3. Utiliser au moins une police web personnalisée (Google Fonts)
4. Créer des effets de texte avec `text-shadow`
5. Mettre en œuvre des solutions pour gérer les textes longs et les débordements


<div class="mt-4 border-t pt-4">

## Solution

```html

```

</div>

<!--
Conseils pour l'exercice:
- Explorer Google Fonts pour trouver des polices adaptées
- Tester différentes combinaisons de propriétés
- Utiliser des unités relatives (em, rem) pour une meilleure accessibilité
- Penser à l'espacement et à la lisibilité du texte -->


<!--
Points clés de cet exercice:
- Utilisation de Google Fonts pour les polices web
- Démonstration des propriétés de base du texte (taille, graisse, alignement)
- Création d'effets visuels avec text-shadow et d'autres techniques
- Gestion des débordements de texte avec text-overflow et word-wrap
- Implémentation de texte responsive avec calc(), vw, et clamp()
- Utilisation de multi-colonnes pour améliorer la lisibilité
-->