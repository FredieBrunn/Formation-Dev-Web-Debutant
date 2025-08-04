---
layout: two-cols
layoutClass: gap-16
---

# 8. Design Responsive

## Principes du design responsive
- Mobile-first vs Desktop-first
- Layouts fluides et flexibles
- Unités relatives (%, em, rem, vw, vh)
- Images et médias flexibles

## Media queries
- Syntaxe et fonctionnement
- Breakpoints courants
- Ciblage de périphériques
- Feature queries (@supports)

## Techniques responsive
- Adaptation du contenu
- Patterns responsive
- Navigation responsive
- Tableaux responsives
- Images et vidéos responsives

::right::

<div >

```css
/* Exemple de media queries */
/* Mobile first */
body {
  font-size: 16px;
}

/* Tablette */
@media (min-width: 768px) {
  body {
    font-size: 18px;
  }
}

/* Desktop */
@media (min-width: 1024px) {
  body {
    font-size: 20px;
  }
}

/* Images responsives */
img {
  max-width: 100%;
  height: auto;
}

/* Grille responsive */
.grid {
  display: grid;
  grid-template-columns: repeat(
    auto-fill, 
    minmax(250px, 1fr)
  );
  gap: 20px;
}
```

</div>

<!--
Points clés sur le design responsive:
- Le responsive design est essentiel pour une expérience utilisateur optimale sur tous les appareils
- L'approche mobile-first consiste à concevoir d'abord pour les petits écrans
- Les media queries permettent d'adapter le design selon les caractéristiques de l'appareil
- Les unités relatives et les layouts flexibles sont fondamentaux pour un design fluide
-->

---
layout: default
---

# Exercice 8: Design Responsive

## Instructions
1. Créer une page HTML avec une mise en page complète (header, navigation, contenu, sidebar, footer)
2. Implémenter une approche mobile-first avec des media queries
3. Utiliser des unités relatives pour créer un layout fluide
4. Adapter la navigation pour qu'elle fonctionne sur mobile (menu hamburger)
5. Créer une grille d'images responsive
6. Gérer les tableaux de données sur petit écran


<div class="mt-4 border-t pt-4">

## Solution 

```html

```

</div>

<!--
Conseils pour l'exercice:
- Toujours inclure la balise meta viewport
- Planifier les breakpoints en fonction du contenu, pas des appareils spécifiques
- Tester régulièrement sur différentes tailles d'écran
- Penser à l'accessibilité, notamment pour la navigation mobile
-->

<!--
Points clés de cet exercice:
- Utilisation d'une approche mobile-first avec des media queries pour les écrans plus larges
- Création d'un menu hamburger responsive qui se transforme en navigation horizontale sur desktop
- Mise en œuvre d'une mise en page flexible avec CSS Grid
- Adaptation de l'affichage des tableaux pour les petits écrans
- Utilisation d'unités relatives pour une typographie fluide
- Organisation du layout pour repositionner la sidebar sur différentes tailles d'écran
-->