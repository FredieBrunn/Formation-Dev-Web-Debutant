---
layout: two-cols
layoutClass: gap-16
---

# 7. Transformations et Animations

## Transformations CSS
- `transform: translate()` - déplacements
- `transform: rotate()` - rotations
- `transform: scale()` - redimensionnement
- `transform: skew()` - distorsion
- Transformations 3D
- Perspective et origine

## Transitions CSS
- Propriété `transition`
- Durée et délai
- Fonctions de timing
- Transitions multiples

## Animations CSS
- `@keyframes` pour définir l'animation
- Propriété `animation`
- Contrôle du déroulement
- État des animations

::right::

```css
/* Transformations de base */
.transform-demo {
  transform: translate(20px, 10px) rotate(45deg) scale(1.5);
}

/* Transition simple */
.transition-demo {
  width: 100px;
  height: 100px;
  background-color: #4EC5D4;
  transition: all 0.3s ease-in-out;
}

.transition-demo:hover {
  background-color: #146b8c;
  transform: scale(1.1) rotate(10deg);
}

/* Animation avec keyframes */
@keyframes bounce {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
}

.animation-demo {
  animation: bounce 2s ease infinite;
}
```

<div class="mt-4">
  <div style="width: 60px; height: 60px; background-color: #4EC5D4; transition: all 0.3s ease; cursor: pointer;" 
       @click="$el.style.transform = $el.style.transform ? '' : 'rotate(45deg) scale(1.25)'">
    Cliquez
  </div>
</div>

<!--
Points clés sur les transformations et animations:
- Les transformations modifient visuellement les éléments sans affecter le flux du document
- Les transitions permettent d'animer en douceur les changements de propriétés
- Les animations @keyframes offrent un contrôle plus précis sur le mouvement
- Les transformations 3D peuvent créer des effets impressionnants avec perspective
-->

---
layout: default
---

# Exercice 7: Transformations et Animations

## Instructions
1. Créer une page HTML avec plusieurs exemples de transformations, transitions et animations
2. Implémenter diverses transformations 2D et 3D
3. Créer des effets de transition pour les survols et états actifs
4. Définir des animations complexes avec @keyframes
5. Combiner ces techniques pour créer des effets visuels intéressants


<div class="mt-4 border-t pt-4">

## Solution

```html

```

</div>

<!--
Conseils pour l'exercice:
- Comprendre la différence entre les transformations, les transitions et les animations
- Expérimenter avec différentes fonctions de timing pour les transitions
- Combiner plusieurs transformations pour créer des effets complexes
- Penser à l'expérience utilisateur en concevant des animations
-->


<!--
Points clés de cet exercice:
- Démonstration des transformations 2D et 3D avec effets au survol
- Création d'un cube 3D interactif avec perspective
- Exploration des différentes fonctions de timing pour les transitions
- Utilisation de transitions multiples avec délais
- Création d'animations avec @keyframes pour divers effets
- Contrôle des animations avec les différentes propriétés
- Application pratique avec boutons animés et carte interactive
- Combinaison des transformations, transitions et animations
-->