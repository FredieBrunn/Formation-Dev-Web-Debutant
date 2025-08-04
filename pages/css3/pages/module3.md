---
layout: two-cols
layoutClass: gap-16
---

# 3. Le Modèle de Boîte (Box Model)

## Composants du Box Model
- Content (contenu)
- Padding (rembourrage)
- Border (bordure)
- Margin (marge)

## Propriétés associées
- `width`, `height`
- `padding`, `padding-top`, etc.
- `border`, `border-width`, etc.
- `margin`, `margin-top`, etc.

## Concepts importants
- `box-sizing`: `content-box` vs `border-box`
- Marges négatives
- Effondrement des marges (margin collapsing)


::right::

<div>

```css
/* Box-sizing par défaut */
.box-content {
  box-sizing: content-box; /* Défaut */
  width: 300px;
  padding: 20px;
  border: 10px solid #2B90B6;
  /* Largeur totale: 300 + 2*20 + 2*10 = 360px */
}

/* Box-sizing alternatif */
.box-border {
  box-sizing: border-box;
  width: 300px;
  padding: 20px;
  border: 10px solid #2B90B6;
  /* Largeur totale: 300px (inclut padding et border) */
}
```
<div class="mt-6">
  <div class="relative border-4 border-dashed border-gray-400 p-4">
    <div class="text-center">Margin</div>
    <div class="border-4 border-gray-600 p-4">
      <div class="text-center">Border</div>
      <div class="bg-gray-200 p-4">
        <div class="text-center">Padding</div>
        <div class="bg-blue-200 p-2">
          <div class="text-center">Content</div>
        </div>
      </div>
    </div>
  </div>
</div>

</div>


---
layout: default
---

# Exercice 3: Le Modèle de Boîte

## Instructions
1. Créer une page HTML avec plusieurs div colorés
2. Appliquer différentes valeurs de marges, paddings et bordures
3. Observer l'impact des différentes propriétés
4. Expérimenter avec `box-sizing: content-box` et `box-sizing: border-box`
5. Créer une mise en page simple avec des boîtes imbriquées


<div class="mt-8 border-t pt-4">

## Solution

```html

```

</div>
