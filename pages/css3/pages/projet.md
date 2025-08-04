---
layout: default
---

# Projet Final: Portfolio Responsive

## Objectif
Mettre en pratique toutes les compétences acquises durant la formation pour créer un site web portfolio complet et responsive.

## Description
Créer un portfolio personnel ou professionnel comprenant:
- Une page d'accueil avec présentation
- Une galerie de projets/travaux
- Une page de contact avec formulaire
- Un design moderne et responsive

## Techniques à utiliser
- Structure HTML5 sémantique
- CSS3 avec toutes les fonctionnalités étudiées
- Design responsive (mobile, tablette, desktop)
- Effets visuels avec transitions et animations
- Bonnes pratiques d'accessibilité

<div class="mt-4">
  <img src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=1472&auto=format&fit=crop" class="h-60 mx-auto rounded shadow" alt="Portfolio Project Concept">
</div>

<!--
Conseils pour le projet:
- Commencer par structurer le contenu HTML avant de se lancer dans le CSS
- Planifier la mise en page et les breakpoints avant de commencer
- Créer d'abord le design mobile puis adapter pour les écrans plus larges
- Utiliser Git pour versionner le projet à mesure qu'il progresse
-->

---
layout: default
---

# Structure du Projet Final

## Organisation des fichiers
```
portfolio/
│
├── index.html           # Page d'accueil
├── projets.html         # Page de galerie de projets
├── contact.html         # Page de contact avec formulaire
│
├── css/
│   ├── style.css        # Styles principaux, animation & transitions
│
└── images/              # Dossier des images
    ├── projects/        # Images des projets
    └── bg/              # Images d'arrière-plan
```

## Chronologie suggérée
1. Création de la structure HTML pour toutes les pages
2. Mise en place des styles de base (typographie, couleurs)
3. Développement du layout responsive
4. Ajout des composants interactifs et de navigation
5. Implémentation des animations et transitions
6. Tests et optimisation


<!--
Points importants à souligner:
- Une bonne organisation des fichiers facilite la maintenance
- La séparation des préoccupations (HTML, CSS, JS) est une bonne pratique
- Commencer par les fondations avant d'ajouter les éléments visuels complexes
- Tester régulièrement sur différents appareils pendant le développement
-->

---
layout: two-cols
layoutClass: gap-16
---

# Spécifications Techniques

## HTML
- Utilisation de balises sémantiques
- Structure claire et bien organisée
- Attributs d'accessibilité (ARIA)
- Formulaire fonctionnel avec validation

## CSS
- Architecture CSS modulaire
- Variables CSS pour les couleurs et dimensions
- Media queries pour design responsive
- Utilisation appropriée de Flexbox et Grid
- Transitions pour les interactions
- Animations pour mettre en valeur le contenu

::right::

<div v-click="3">

```html
<!-- Exemple de composant de projet -->
<article class="project-card">
  <figure class="project-image">
    <img src="images/projects/project1.jpg" 
         alt="Description du projet" 
         loading="lazy">
  </figure>
  <div class="project-info">
    <h3>Titre du Projet</h3>
    <p class="project-category">Catégorie</p>
    <p class="project-desc">Description courte du projet 
    et des technologies utilisées.</p>
    <div class="project-actions">
      <a href="#" class="btn">Voir plus</a>
      <a href="#" class="btn btn-outline">
        Démo en ligne
      </a>
    </div>
  </div>
</article>
```

</div>

<div class="mt-4">

```css
/* Exemple de style pour les cartes de projet */
.project-card {
  background: white;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s, box-shadow 0.3s;
}

.project-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
}

@media (min-width: 768px) {
  .projects-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 30px;
  }
}
```

</div>

<!--
Aspects techniques importants:
- Le HTML sémantique améliore l'accessibilité et le SEO
- Une architecture CSS modulaire facilite la maintenance
- Les transitions et animations doivent avoir un but et améliorer l'UX
- La performance doit rester une préoccupation (images optimisées, lazy loading)
-->

<!-- # Critères d'Évaluation du Projet Final

## 1. Structure et organisation du code (25%)
- Qualité du HTML sémantique
- Organisation des fichiers CSS
- Commentaires et documentation
- Respect des conventions de nommage

## 2. Design visuel et interface utilisateur (25%)
- Esthétique globale
- Cohérence des couleurs et typographie
- Utilisation efficace de l'espace
- Originalité du design

## 3. Responsive design et adaptabilité (25%)
- Fonctionnement sur mobile, tablette et desktop
- Adaptation appropriée des éléments selon l'écran
- Navigation adaptée à chaque support
- Performance sur différents appareils

## 4. Fonctionnalités et interactivité (25%)
- Transitions et animations pertinentes
- Navigation intuitive
- Formulaire fonctionnel avec validation
- Attention aux détails d'interaction -->


<!--
Recommandations pour l'évaluation:
- Le projet doit démontrer la maîtrise des concepts appris pendant la formation
- L'accent est mis sur la qualité du code CSS et les bonnes pratiques
- L'originalité et la créativité sont appréciées mais ne doivent pas compromettre l'utilisabilité
- Les solutions techniques doivent être appropriées aux problèmes résolus
-->

<!--
Points supplémentaires:
- Encourager les apprenants à explorer des ressources au-delà de la formation
- Souligner l'importance des tests et de la validation
- Rappeler que la simplicité et l'efficacité sont souvent préférables à la complexité
- Mentionner que ce projet peut servir de base pour un vrai portfolio professionnel
-->


<!--
Points sur les TP:
- Les TP sont progressifs et chacun s'appuie sur les compétences des modules précédents
- Ils sont conçus pour être réalisables en 1-2 heures à la fin de chaque module
- Des solutions complètes sont fournies aux apprenants après leur réalisation
- Les formateurs doivent être disponibles pour aider en cas de difficultés
-->

---
layout: center
class: text-center
---

# Exemples de réalisations

<div grid="~ cols-3 gap-4">
  <div class="background: white;">
    <img src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=1470&auto=format&fit=crop" class="h-40 rounded shadow mx-auto">
    <p class="text-sm mt-2">Portfolio minimaliste</p>
  </div>
  <div class="background: white;">
    <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1415&auto=format&fit=crop" class="h-40 rounded shadow mx-auto">
    <p class="text-sm mt-2">Site de présentation d'agence</p>
  </div>
  <div class="background: white;">
    <img src="https://images.unsplash.com/photo-1508921340878-ba53e1f016ec?q=80&w=1470&auto=format&fit=crop" class="h-40 rounded shadow mx-auto">
    <p class="text-sm mt-2">Blog personnel</p>
  </div>
</div>

<div class="mt-8">
  <h3 class="text-lg font-bold mb-2">Votre projet est une opportunité de:</h3>
  <ul class="text-left inline-block">
    <li>✓ Démontrer vos compétences techniques</li>
    <li>✓ Exprimer votre créativité</li>
    <li>✓ Construire votre portfolio professionnel</li>
    <li>✓ Appliquer toutes les techniques apprises</li>
  </ul>
</div>

<div class="mt-8 text-blue-600">
  <p>N'hésitez pas à aller au-delà des exigences minimales!</p>
</div>

<!--
Encouragements finaux:
- Les exemples montrent différents types de projets possibles
- Encourager les apprenants à être créatifs et à s'approprier le projet
- Souligner que ce projet peut servir de base pour un vrai portfolio professionnel
- Rappeler que la qualité et la finition sont importantes
-->