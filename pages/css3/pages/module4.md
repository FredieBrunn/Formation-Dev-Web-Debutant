---
layout: two-cols
---

# 4. Couleurs et Arrière-plans

## Propriétés de couleurs
- `color`: couleur du texte
- `background-color`: couleur d'arrière-plan
- Notations: noms, hex, rgb, rgba, hsl, hsla

## Propriétés d'arrière-plan
- `background-image`: images d'arrière-plan
- `background-repeat`: répétition de l'image
- `background-position`: positionnement
- `background-size`: taille de l'image
- `background-attachment`: défilement
- Propriété raccourcie `background`

## Dégradés CSS
- Dégradés linéaires: `linear-gradient()`
- Dégradés radiaux: `radial-gradient()`
- Dégradés coniques: `conic-gradient()`

::right::

```css
/* Notations de couleurs */
.color-demo {
  color: red;                     /* Nom */
  color: #ff0000;                 /* Hexadécimal */
  color: rgb(255, 0, 0);          /* RGB */
  color: rgba(255, 0, 0, 0.5);    /* RGBA avec opacité */
  color: hsl(0, 100%, 50%);       /* HSL */
  color: hsla(0, 100%, 50%, 0.5); /* HSLA avec opacité */
}

/* Arrière-plans */
.bg-demo {
  background-color: #f0f0f0;
  background-image: url('/images/background/images/backgroundpattern.jpg');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
  
  /* Raccourci */
  background: #f0f0f0 url('/images/background/images/backgroundpattern.jpg') 
              no-repeat center/cover fixed;
}

/* Dégradés */
.gradient-demo {
  /* Dégradé linéaire */
  background: linear-gradient(to right, #ff6b6b, #4ec5d4);
  
  /* Dégradé radial */
  background: radial-gradient(circle, #ff6b6b, #4ec5d4);
  
  /* Dégradé conique */
  background: conic-gradient(from 0deg, #ff6b6b, #4ec5d4);
}
```

### Points clés sur les couleurs et arrière-plans:
- CSS3 a considérablement élargi les options de couleurs et d'arrière-plans
- Les notations RGBA et HSLA permettent de contrôler la transparence
- Les dégradés CSS3 éliminent souvent le besoin d'images pour les effets visuels
- Les arrière-plans multiples permettent des effets complexes


---
layout: default
---

# Exercice 4: Couleurs et Arrière-plans

## Instructions
1. Créer une page HTML avec plusieurs sections
2. Utiliser différentes notations de couleurs pour le texte et les arrière-plans
3. Appliquer des images d'arrière-plan avec différentes propriétés de répétition et positionnement
4. Créer des dégradés linéaires et radiaux comme arrière-plans
5. Superposer différentes couches d'arrière-plan pour créer des effets visuels intéressants

## Points importants dans ce CSS
- Démonstration de toutes les notations de couleur (noms, hex, rgb, rgba, hsl, hsla)
- Utilisation de différentes propriétés d'arrière-plan et valeurs
- Création de dégradés linéaires, radiaux et coniques
- Superposition d'arrière-plans pour créer des effets complexes
- Création de motifs avec des dégradés (sans images)

<div class="mt-4 border-t pt-4">

## Solution

```html

```

</div>
