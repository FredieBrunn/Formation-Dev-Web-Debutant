---
layout: two-cols
layoutClass: gap-16
---

# 6. Mise en Page CSS

## Modèles de mise en page
- Positionnement normal (flux)
- Positionnement relatif
- Positionnement absolu
- Positionnement fixe
- Positionnement collant (sticky)

## Techniques de mise en page
- Tableaux (déprécié pour la mise en page)
- Flottants et clearfix
- Flexbox
- CSS Grid
- Multi-colonnes

::right::

<div>

```css
/* Positionnement */
.relative {
  position: relative;
  top: 20px;
  left: 20px;
}

.absolute {
  position: absolute;
  top: 50px;
  right: 30px;
}

.fixed {
  position: fixed;
  bottom: 20px;
  right: 20px;
}

.sticky {
  position: sticky;
  top: 0;
}

/* Flexbox */
.flex-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
}

/* Grid */
.grid-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
}
```

</div>

---
layout: default
---

# Exercice 6: Techniques de Mise en Page

## Instructions
1. Créer une page HTML avec différentes sections pour tester chaque technique de mise en page
2. Implémenter un en-tête avec positionnement fixe ou sticky
3. Créer une section avec des éléments positionnés de façon absolue par rapport à un conteneur
4. Réaliser une mise en page flexible avec Flexbox pour une navigation et des cartes
5. Construire une grille responsive avec CSS Grid
6. Adapter chaque mise en page pour qu'elle reste fonctionnelle sur différentes tailles d'écran


## Solution

```html

```

<!--
Points clés de cet exercice:
- Utilisation du positionnement sticky pour l'en-tête qui reste visible
- Démonstration des différents types de positionnement (relative, absolute, fixed)
- Création d'interfaces flexibles avec Flexbox (navigation et cartes)
- Mise en page complexe avec CSS Grid (galerie et layout de page)
- Implementation de responsive design avec media queries
- Application de techniques combinées pour des mises en page complexes
-->