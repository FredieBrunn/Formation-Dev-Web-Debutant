---

## Nouveaux Types d'Input et Validation

```html
<form action="/contact" method="post" novalidate>
    <!-- Email avec validation -->
    <div>
        <label for="email">Email *</label>
        <input type="email" id="email" name="email" required 
               pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
               placeholder="votre@email.com">
        <span class="error" id="email-error"></span>
    </div>
    
    <!-- Téléphone -->
    <div>
        <label for="telephone">Téléphone</label>
        <input type="tel" id="telephone" name="telephone" 
               pattern="[0-9]{2}[0-9]{2}[0-9]{2}[0-9]{2}[0-9]{2}"
               placeholder="01 23 45 67 89">
    </div>
    
    <!-- Date -->
    <div>
        <label for="date-reservation">Date de réservation *</label>
        <input type="date" id="date-reservation" name="date_reservation" 
               required min="2025-01-01" max="2025-12-31">
    </div>
    
    <!-- Nombre -->
    <div>
        <label for="personnes">Nombre de personnes</label>
        <input type="number" id="personnes" name="personnes" 
               min="1" max="10" value="2">
    </div>
    
    <!-- Range -->
    <div>
        <label for="budget">Budget approximatif : <span id="budget-value">50</span>€</label>
        <input type="range" id="budget" name="budget" 
               min="20" max="200" value="50" step="10">
    </div>
    
    <!-- Textarea -->
    <div>
        <label for="message">Message</label>
        <textarea id="message" name="message" rows="4" 
                  maxlength="500" placeholder="Votre message..."></textarea>
    </div>
    
    <!-- Checkbox -->
    <div>
        <input type="checkbox" id="newsletter" name="newsletter" value="oui">
        <label for="newsletter">S'abonner à la newsletter</label>
    </div>
    
    <!-- Radio buttons -->
    <fieldset>
        <legend>Repas préféré</legend>
        <input type="radio" id="dejeuner" name="repas" value="dejeuner">
        <label for="dejeuner">Déjeuner</label>
        
        <input type="radio" id="diner" name="repas" value="diner" checked>
        <label for="diner">Dîner</label>
    </fieldset>
    
    <button type="submit">Envoyer</button>
</form>
```

---

# 1.6 Accessibilité Web

## Bonnes Pratiques d'Accessibilité

### ARIA (Accessible Rich Internet Applications)

```html
<!-- Navigation avec ARIA -->
<nav role="navigation" aria-label="Navigation principale">
    <ul>
        <li><a href="#accueil" aria-current="page">Accueil</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#contact">Contact</a></li>
    </ul>
</nav>

<!-- Bouton avec état -->
<button type="button" aria-expanded="false" aria-controls="menu-mobile" 
        onclick="toggleMenu()">
    <span aria-hidden="true">☰</span>
    Menu
</button>

<!-- Contenu conditionnel -->
<div id="menu-mobile" aria-hidden="true" role="menu">
    <!-- Contenu du menu -->
</div>

<!-- Images avec alt descriptif -->
<img src="graphique-ventes.png" 
     alt="Graphique montrant une augmentation des ventes de 25% en 2024">

<!-- Liens avec contexte -->
<a href="article-complet.html" aria-describedby="article1-desc">
    Lire la suite
</a>
<div id="article1-desc" class="sr-only">
    de l'article sur les nouveautés JavaScript
</div>

<!-- Formulaire accessible -->
<div>
    <label for="search">Rechercher sur le site</label>
    <input type="search" id="search" name="search" 
           aria-describedby="search-help" required>
    <div id="search-help">
        Tapez au moins 3 caractères pour lancer la recherche
    </div>
</div>

<!-- Structure de titres logique -->
<h1>Titre principal de la page</h1>
    <h2>Section principale</h2>
        <h3>Sous-section</h3>
            <h4>Détail de la sous-section</h4>
```

### CSS pour l'accessibilité :

```css
/* Masquer visuellement mais garder pour les lecteurs d'écran */
.sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
}

/* Focus visible pour la navigation au clavier */
a:focus, button:focus, input:focus, textarea:focus, select:focus {
    outline: 2px solid #0066cc;
    outline-offset: 2px;
}

/* Contraste suffisant */
.text-primary { color: #0066cc; } /* Ratio 4.5:1 minimum */
.bg-primary { background-color: #0066cc; }
```

---






























---

# 1.8 Correction TP Partie 1

## 💡 Solution Portfolio HTML5

```html
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Portfolio de Jean Dupont - Développeur Web Frontend spécialisé en HTML5, CSS3 et JavaScript">
    <meta name="keywords" content="développeur web, frontend, HTML5, CSS3, JavaScript, portfolio">
    <title>Jean Dupont - Développeur Web Frontend</title>
</head>
<body>
    <header role="banner">
        <h1>Jean Dupont</h1>
        <p class="tagline">Développeur Web Frontend</p>
        
        <nav role="navigation" aria-label="Navigation principale">
            <ul>
                <li><a href="#accueil" aria-current="page">Accueil</a></li>
                <li><a href="#competences">Compétences</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    </header>
    
    <main role="main">
        <section id="accueil" aria-labelledby="accueil-titre">
            <h2 id="accueil-titre">À propos de moi</h2>
            <img src="images/photo-profil.jpg" 
                 alt="Jean Dupont, développeur web souriant en chemise bleue"
                 width="300" height="300">
            <p>Passionné par le développement web depuis 5 ans, je me spécialise dans la création d'interfaces utilisateur modernes et accessibles. Mon expertise couvre HTML5, CSS3, JavaScript ES6+ et les frameworks modernes.</p>
            <p>Je m'attache à créer des expériences web performantes, responsives et respectueuses des standards d'accessibilité.</p>
        </section>
        
        <section id="competences" aria-labelledby="competences-titre">
            <h2 id="competences-titre">Mes Compétences</h2>
            
            <article>
                <h3>Frontend</h3>
                <ul>
                    <li>HTML5 & Sémantique Web</li>
                    <li>CSS3 & Sass</li>
                    <li>JavaScript ES6+</li>
                    <li>React.js</li>
                    <li>Vue.js</li>
                </ul>
            </article>
            
            <article>
                <h3>Outils & Méthodes</h3>
                <ul>
                    <li>Git & GitHub</li>
                    <li>Webpack & Vite</li>
                    <li>Design Responsive</li>
                    <li>Accessibilité Web (WCAG)</li>
                    <li>Tests unitaires</li>
                </ul>
            </article>
        </section>
        
        <section id="portfolio" aria-labelledby="portfolio-titre">
            <h2 id="portfolio-titre">Mon Portfolio</h2>
            
            <article>
                <h3>E-commerce Responsive</h3>
                <img src="images/projet1.jpg" 
                     alt="Capture d'écran de la page d'accueil du site e-commerce avec navigation et produits mis en avant">
                <p>Site e-commerce complet avec panier, gestion des commandes et paiement sécurisé. Développé avec HTML5, CSS3 Grid et JavaScript vanilla.</p>
                <p><strong>Technologies :</strong> HTML5, CSS3, JavaScript, PHP, MySQL</p>
                <a href="https://github.com/jean/ecommerce-project" 
                   aria-describedby="projet1-desc">Voir le code source</a>
                <div id="projet1-desc" class="sr-only">du projet e-commerce sur GitHub</div>
            </article>
            
            <article>
                <h3>Dashboard Analytique</h3>
                <img src="images/projet2.jpg" 
                     alt="Interface du dashboard avec graphiques colorés et widgets d'information">
                <p>Tableau de bord interactif pour visualiser des données analytiques avec graphiques dynamiques et filtres en temps réel.</p>
                <p><strong>Technologies :</strong> React.js, D3.js, REST API</p>
                <a href="https://dashboard-demo.jean-dupont.com" 
                   aria-describedby="projet2-desc">Voir la démo</a>
                <div id="projet2-desc" class="sr-only">du dashboard analytique</div>
            </article>
            
            <article>
                <h3>Application Progressive Web App</h3>
                <img src="images/projet3.jpg" 
                     alt="Interface mobile de l'application PWA avec navigation bottom et design moderne">
                <p>Application web progressive pour la gestion de tâches, fonctionnant hors ligne avec synchronisation automatique.</p>
                <p><strong>Technologies :</strong> Vue.js, PWA, Service Workers, IndexedDB</p>
                <a href="https://tasks-pwa.jean-dupont.com" 
                   aria-describedby="projet3-desc">Essayer l'app</a>
                <div id="projet3-desc" class="sr-only">l'application PWA de gestion de tâches</div>
            </article>
        </section>
        
        <section id="contact" aria-labelledby="contact-titre">
            <h2 id="contact-titre">Me Contacter</h2>
            
            <form action="/contact" method="post" novalidate aria-describedby="form-instructions">
                <div id="form-instructions">
                    <p>Les champs marqués d'un astérisque (*) sont obligatoires.</p>
                </div>
                
                <div>
                    <label for="nom">Nom complet *</label>
                    <input type="text" id="nom" name="nom" required 
                           minlength="2" maxlength="100"
                           aria-describedby="nom-error">
                    <div id="nom-error" class="error" role="alert" aria-live="polite"></div>
                </div>
                
                <div>
                    <label for="email">Adresse email *</label>
                    <input type="email" id="email" name="email" required 
                           pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                           placeholder="votre@email.com"
                           aria-describedby="email-help email-error">
                    <div id="email-help">Format attendu : nom@domaine.com</div>
                    <div id="email-error" class="error" role="alert" aria-live="polite"></div>
                </div>
                
                <div>
                    <label for="sujet">Sujet *</label>
                    <select id="sujet" name="sujet" required aria-describedby="sujet-error">
                        <option value="">Choisissez un sujet</option>
                        <option value="collaboration">Proposition de collaboration</option>
                        <option value="freelance">Mission freelance</option>
                        <option value="emploi">Offre d'emploi</option>
                        <option value="question">Question technique</option>
                        <option value="autre">Autre</option>
                    </select>
                    <div id="sujet-error" class="error" role="alert" aria-live="polite"></div>
                </div>
                
                <div>
                    <label for="message">Message *</label>
                    <textarea id="message" name="message" rows="6" required 
                              minlength="10" maxlength="1000"
                              placeholder="Décrivez votre projet ou votre demande..."
                              aria-describedby="message-count message-error"></textarea>
                    <div id="message-count" aria-live="polite">0/1000 caractères</div>
                    <div id="message-error" class="error" role="alert" aria-live="polite"></div>
                </div>
                
                <div>
                    <input type="checkbox" id="confidentialite" name="confidentialite" required>
                    <label for="confidentialite">
                        J'accepte que mes données soient utilisées pour me recontacter *
                    </label>
                </div>
                
                <button type="submit" aria-describedby="submit-help">
                    Envoyer le message
                </button>
                <div id="submit-help" class="sr-only">
                    Le formulaire sera envoyé après validation de tous les champs obligatoires
                </div>
            </form>
            
            <aside>
                <h3>Autres moyens de contact</h3>
                <address>
                    <p>Email : <a href="mailto:jean.dupont@email.com">jean.dupont@email.com</a></p>
                    <p>LinkedIn : <a href="https://linkedin.com/in/jean-dupont-dev" 
                                     target="_blank" rel="noopener noreferrer">
                        Jean Dupont <span class="sr-only">(ouvre dans un nouvel onglet)</span>
                    </a></p>
                    <p>GitHub : <a href="https://github.com/jean-dupont" 
                                   target="_blank" rel="noopener noreferrer">
                        @jean-dupont <span class="sr-only">(ouvre dans un nouvel onglet)</span>
                    </a></p>
                </address>
            </aside>
        </section>
    </main>
    
    <footer role="contentinfo">
        <p>&copy; 2025 Jean Dupont. Tous droits réservés.</p>
        <p>Site développé avec les standards HTML5 et l'accessibilité en priorité.</p>
    </footer>

    <script>
        // Validation simple du formulaire
        document.querySelector('form').addEventListener('submit', function(e) {
            const requiredFields = this.querySelectorAll('[required]');
            let hasErrors = false;
            
            requiredFields.forEach(field => {
                const errorDiv = document.getElementById(field.name + '-error');
                if (!field.value.trim()) {
                    if (errorDiv) {
                        errorDiv.textContent = 'Ce champ est obligatoire';
                        errorDiv.style.display = 'block';
                    }
                    hasErrors = true;
                } else {
                    if (errorDiv) {
                        errorDiv.textContent = '';
                        errorDiv.style.display = 'none';
                    }
                }
            });
            
            if (hasErrors) {
                e.preventDefault();
            }
        });
        
        // Compteur de caractères pour le message
        const messageField = document.getElementById('message');
        const messageCount = document.getElementById('message-count');
        
        messageField.addEventListener('input', function() {
            const count = this.value.length;
            messageCount.textContent = `${count}/1000 caractères`;
            
            if (count > 1000) {
                messageCount.style.color = 'red';
            } else {
                messageCount.style.color = 'inherit';
            }
        });
    </script>
</body>
</html>
```

# 2.1 Introduction à CSS3

## Nouveautés et Améliorations CSS3

### Nouveaux Sélecteurs :
```css
/* Sélecteurs d'attribut avancés */
input[type="email"] { border-color: blue; }
div[class*="btn"] { padding: 10px; }

/* Pseudo-classes structurelles */
li:nth-child(2n+1) { background: #f0f0f0; } /* Impair */
li:nth-last-child(3) { font-weight: bold; }
p:first-of-type { margin-top: 0; }
p:last-of-type { margin-bottom: 0; }

/* Pseudo-éléments */
p::first-line { font-weight: bold; }
p::first-letter { font-size: 2em; float: left; }
.tooltip::after {
    content: attr(data-tooltip);
    position: absolute;
    background: black;
    color: white;
    padding: 5px;
}

/* Sélecteurs d'état */
input:valid { border-color: green; }
input:invalid { border-color: red; }
input:focus { outline: 2px solid blue; }
```

### Propriétés CSS3 Avancées :
```css
.modern-element {
    /* Coins arrondis */
    border-radius: 10px 20px 30px 40px;
    
    /* Ombres */
    box-shadow: 0 4px 8px rgba(0,0,0,0.1), 
                inset 0 1px 0 rgba(255,255,255,0.1);
    text-shadow: 1px 1px 2px rgba(0,0,0,0.3);
    
    /* Dégradés */
    background: linear-gradient(45deg, #ff6b6b, #4ecdc4);
    background: radial-gradient(circle at center, #fff, #000);
    
    /* Transformations */
    transform: rotate(45deg) scale(1.2) translateX(50px);
    transform-origin: center center;
    
    /* Transitions */
    transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}
```

---

# 2.2 Flexbox - Layout Flexible

## Flexbox Container (Parent)

```css
.flex-container {
    display: flex;
    
    /* Direction */
    flex-direction: row; /* row | row-reverse | column | column-reverse */
    
    /* Retour à la ligne */
    flex-wrap: wrap; /* nowrap | wrap | wrap-reverse */
    
    /* Raccourci flex-direction + flex-wrap */
    flex-flow: row wrap;
    
    /* Alignement horizontal (axe principal) */
    justify-content: space-between; 
    /* flex-start | flex-end | center | space-between | space-around | space-evenly */
    
    /* Alignement vertical (axe transversal) */
    align-items: center; 
    /* stretch | flex-start | flex-end | center | baseline */
    
    /* Alignement des lignes (si flex-wrap) */
    align-content: space-around;
    
    /* Espacement */
    gap: 20px; /* Espacement entre les éléments */
    row-gap: 10px;
    column-gap: 15px;
}
```

## Flexbox Items (Enfants)

```css
.flex-item {
    /* Facteur de croissance */
    flex-grow: 1; /* 0 par défaut */
    
    /* Facteur de rétrécissement */
    flex-shrink: 0; /* 1 par défaut */
    
    /* Taille de base */
    flex-basis: 200px; /* auto par défaut */
    
    /* Raccourci grow shrink basis */
    flex: 1 0 200px;
    
    /* Alignement individuel */
    align-self: flex-end; /* auto | flex-start | flex-end | center | baseline | stretch */
    
    /* Ordre d'affichage */
    order: 2; /* 0 par défaut */
}
```

## Exemple Pratique Flexbox

```html
<div class="navbar">
    <div class="logo">Logo</div>
    <nav class="nav-links">
        <a href="#">Accueil</a>
        <a href="#">Services</a>
        <a href="#">Contact</a>
    </nav>
    <div class="nav-actions">
        <button class="btn-login">Connexion</button>
    </div>
</div>
```

```css
.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;
    background: white;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.logo {
    font-size: 1.5rem;
    font-weight: bold;
    color: #333;
}

.nav-links {
    display: flex;
    gap: 2rem;
    list-style: none;
}

.nav-links a {
    text-decoration: none;
    color: #666;
    transition: color 0.3s;
}

.nav-links a:hover {
    color: #007bff;
}

.btn-login {
    background: #007bff;
    color: white;
    border: none;
    padding: 0.5rem 1rem;
    border-radius: 4px;
    cursor: pointer;
}
```

---

# 2.3 CSS Grid - Layout Bidimensionnel

## Grid Container

```css
.grid-container {
    display: grid;
    
    /* Définir les colonnes */
    grid-template-columns: 200px 1fr 100px; /* 3 colonnes : fixe, flexible, fixe */
    grid-template-columns: repeat(3, 1fr); /* 3 colonnes égales */
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); /* Responsive */
    
    /* Définir les lignes */
    grid-template-rows: 60px 1fr 40px; /* header, main, footer */
    grid-template-rows: repeat(3, minmax(100px, auto));
    
    /* Nommer les zones */
    grid-template-areas: 
        "header header header"
        "sidebar main aside"
        "footer footer footer";
    
    /* Espacement */
    gap: 20px;
    grid-gap: 10px 15px; /* row-gap column-gap */
    
    /* Alignement */
    justify-items: center; /* start | end | center | stretch */
    align-items: center;
    justify-content: space-around; /* pour la grille entière */
    align-content: center;
}
```

## Grid Items

```css
.grid-item {
    /* Positionnement par lignes */
    grid-column: 1 / 3; /* de la ligne 1 à 3 */
    grid-column: span 2; /* s'étendre sur 2 colonnes */
    grid-row: 2 / 4;
    
    /* Raccourcis */
    grid-area: 1 / 1 / 3 / 3; /* row-start / col-start / row-end / col-end */
    
    /* Utilisation des zones nommées */
    grid-area: header;
    
    /* Alignement individuel */
    justify-self: end;
    align-self: start;
}
```

## Exemple Layout Complet avec Grid

```html
<div class="page-layout">
    <header class="header">En-tête</header>
    <nav class="sidebar">Navigation</nav>
    <main class="main">Contenu principal</main>
    <aside class="aside">Sidebar</aside>
    <footer class="footer">Pied de page</footer>
</div>
```

```css
.page-layout {
    display: grid;
    grid-template-columns: 250px 1fr 200px;
    grid-template-rows: 60px 1fr 40px;
    grid-template-areas: 
        "header header header"
        "sidebar main aside"
        "footer footer footer";
    min-height: 100vh;
    gap: 1rem;
}

.header {
    grid-area: header;
    background: #333;
    color: white;
    display: flex;
    align-items: center;
    padding: 0 1rem;
}

.sidebar {
    grid-area: sidebar;
    background: #f8f9fa;
    padding: 1rem;
}

.main {
    grid-area: main;
    background: white;
    padding: 1rem;
    overflow-y: auto;
}

.aside {
    grid-area: aside;
    background: #e9ecef;
    padding: 1rem;
}

.footer {
    grid-area: footer;
    background: #333;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
}

/* Responsive */
@media (max-width: 768px) {
    .page-layout {
        grid-template-columns: 1fr;
        grid-template-areas: 
            "header"
            "main"
            "sidebar"
            "aside"
            "footer";
    }
}
```

---

# 2.4 Design Responsive

## Media Queries et Breakpoints

```css
/* Mobile First Approach */
.container {
    width: 100%;
    padding: 0 1rem;
}

/* Tablette */
@media (min-width: 768px) {
    .container {
        max-width: 750px;
        margin: 0 auto;
    }
}

/* Desktop */
@media (min-width: 1024px) {
    .container {
        max-width: 1200px;
        padding: 0 2rem;
    }
}

/* Large Desktop */
@media (min-width: 1200px) {
    .container {
        max-width: 1400px;
    }
}

/* Media Queries Avancées */
@media (orientation: landscape) {
    .hero { height: 100vh; }
}

@media (max-width: 768px) and (orientation: portrait) {
    .mobile-menu { display: block; }
}

@media (prefers-reduced-motion: reduce) {
    * {
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.01ms !important;
    }
}

@media (prefers-color-scheme: dark) {
    body {
        background: #121212;
        color: #ffffff;
    }
}
```

## Système de Grille Responsive

```css
/* Grille Flexible */
.row {
    display: flex;
    flex-wrap: wrap;
    margin: 0 -15px;
}

.col {
    flex: 1;
    padding: 0 15px;
}

/* Classes utilitaires */
.col-1 { flex: 0 0 8.333333%; }
.col-2 { flex: 0 0 16.666667%; }
.col-3 { flex: 0 0 25%; }
.col-4 { flex: 0 0 33.333333%; }
.col-6 { flex: 0 0 50%; }
.col-12 { flex: 0 0 100%; }

/* Responsive */
@media (max-width: 768px) {
    .col-sm-12 { flex: 0 0 100%; }
    .col-sm-6 { flex: 0 0 50%; }
}

@media (min-width: 769px) {
    .col-md-4 { flex: 0 0 33.333333%; }
    .col-md-8 { flex: 0 0 66.666667%; }
}
```

## Images et Médias Responsives

```css
/* Images responsives */
img {
    max-width: 100%;
    height: auto;
}

/* Images avec ratio fixe */
.image-container {
    position: relative;
    width: 100%;
    padding-bottom: 56.25%; /* Ratio 16:9 */
    overflow: hidden;
}

.image-container img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
}

/* Vidéos responsives */
.video-responsive {
    position: relative;
    padding-bottom: 56.25%;
    height: 0;
    overflow: hidden;
}

.video-responsive iframe,
.video-responsive video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

/* Images srcset pour différentes résolutions */
```

```html
<img src="image-400.jpg" 
     srcset="image-400.jpg 400w,
             image-800.jpg 800w,
             image-1200.jpg 1200w"
     sizes="(max-width: 768px) 100vw,
            (max-width: 1024px) 50vw,
            33vw"
     alt="Description de l'image">
```

---

# 2.5 Animations et Transitions CSS3

## Transitions

```css
.button {
    background: #007bff;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    
    /* Transition simple */
    transition: background-color 0.3s ease;
    
    /* Transitions multiples */
    transition: background-color 0.3s ease,
                transform 0.2s ease,
                box-shadow 0.3s ease;
    
    /* Ou avec all */
    transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.button:hover {
    background: #0056b3;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 123, 255, 0.3);
}

.button:active {
    transform: translateY(0);
    transition-duration: 0.1s;
}
```

## Animations Keyframes

```css
/* Définition de l'animation */
@keyframes fadeInUp {
    0% {
        opacity: 0;
        transform: translateY(30px);
    }
    100% {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes pulse {
    0%, 100% {
        transform: scale(1);
    }
    50% {
        transform: scale(1.05);
    }
}

@keyframes slideInLeft {
    from {
        transform: translateX(-100%);
    }
    to {
        transform: translateX(0);
    }
}

/* Utilisation des animations */
.fade-in-element {
    animation: fadeInUp 0.6s ease-out;
}

.pulsing-element {
    animation: pulse 2s ease-in-out infinite;
}

.slide-element {
    animation: slideInLeft 0.5s ease-out forwards;
}

/* Animation avec délai et répétition */
.delayed-animation {
    animation: fadeInUp 0.6s ease-out 0.3s both;
    /* nom durée timing-function délai fill-mode */
}

/* Animation au hover */
.card:hover {
    animation: pulse 0.3s ease-in-out;
}
```

## Animations Avancées

```css
/* Animation d'un loader */
@keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}

.loader {
    border: 4px solid #f3f3f3;
    border-top: 4px solid #3498db;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    animation: spin 1s linear infinite;
}

/* Animation de typing */
@keyframes typing {
    from { width: 0; }
    to { width: 100%; }
}

@keyframes blink-caret {
    from, to { border-color: transparent; }
    50% { border-color: orange; }
}

.typewriter {
    overflow: hidden;
    border-right: .15em solid orange;
    white-space: nowrap;
    margin: 0 auto;
    letter-spacing: .15em;
    animation: 
        typing 3.5s steps(40, end),
        blink-caret .75s step-end infinite;
}

/* Animation de particles */
.particle {
    position: absolute;
    border-radius: 50%;
    background: #007bff;
    animation: float 6s ease-in-out infinite;
}

@keyframes float {
    0%, 100% {
        transform: translateY(0px);
        opacity: 1;
    }
    50% {
        transform: translateY(-20px);
        opacity: 0.8;
    }
}

/* Performance avec transform et opacity */
.optimized-animation {
    will-change: transform, opacity;
    animation: optimizedMove 1s ease-in-out;
}

@keyframes optimizedMove {
    0% {
        transform: translateX(0) scale(1);
        opacity: 1;
    }
    50% {
        transform: translateX(50px) scale(1.1);
        opacity: 0.8;
    }
    100% {
        transform: translateX(100px) scale(1);
        opacity: 1;
    }
}
```

---

# 3.1 Variables et Types de Données ES6+

## Déclaration de Variables

```javascript
// ES6+ : let, const (éviter var)
let userName = 'Jean'; // Variable modifiable
const API_URL = 'https://api.example.com'; // Constante
const user = { name: 'Jean', age: 30 }; // Objet constant (contenu modifiable)

// Block scope vs Function scope
if (true) {
    let blockScoped = 'visible seulement dans ce bloc';
    const alsoBlockScoped = 'pareil';
    var functionScoped = 'visible dans toute la fonction';
}
// console.log(blockScoped); // ReferenceError
// console.log(functionScoped); // OK

// Hoisting avec let/const vs var
console.log(hoistedVar); // undefined
console.log(hoistedLet); // ReferenceError
var hoistedVar = 'var est hissée';
let hoistedLet = 'let n\'est pas accessible avant déclaration';
```

## Types de Données Primitifs

```javascript
// Nombres
const integer = 42;
const float = 3.14159;
const binary = 0b1010; // 10 en décimal
const octal = 0o755; // 493 en décimal
const hex = 0xFF; // 255 en décimal
const bigInt = 123456789012345678901234567890n;

// Chaînes de caractères
const singleQuote = 'Simple';
const doubleQuote = "Double";
const templateString = `Template string avec ${userName}`;
const multiline = `
    Chaîne sur
    plusieurs lignes
`;

// Booléens et valeurs falsy
const isTrue = true;
const isFalse = false;
// Valeurs falsy : false, 0, -0, 0n, "", null, undefined, NaN

// Null et undefined
let undefinedVar; // undefined par défaut
const nullVar = null; // absence intentionnelle de valeur

// Symbols (ES6)
const symbol1 = Symbol('description');
const symbol2 = Symbol('description');
console.log(symbol1 === symbol2); // false - chaque Symbol est unique
```

## Types de Données Complexes

```javascript
// Objets
const person = {
    name: 'Jean',
    age: 30,
    city: 'Paris',
    // Méthode ES6
    greet() {
        return `Bonjour, je suis ${this.name}`;
    },
    // Propriété calculée
    [`full${Name}`]: 'Jean Dupont'
};

// Destructuring d'objet
const { name, age, city = 'Non spécifié' } = person;
const { name: fullName, ...otherProps } = person;

// Arrays
const numbers = [1, 2, 3, 4, 5];
const mixed = ['string', 42, true, null, { key: 'value' }];

// Destructuring d'array
const [first, second, ...rest] = numbers;
const [, , third] = numbers; // Skip des éléments

// Spread operator
const newNumbers = [...numbers, 6, 7, 8];
const combinedArrays = [...numbers, ...mixed];

// Maps (ES6)
const userMap = new Map();
userMap.set('name', 'Jean');
userMap.set(1, 'Premier');
userMap.set(true, 'Vrai');

const userMap2 = new Map([
    ['name', 'Marie'],
    ['age', 25]
]);

// Sets (ES6)
const uniqueNumbers = new Set([1, 2, 2, 3, 3, 4]);
console.log(uniqueNumbers); // Set(4) {1, 2, 3, 4}

// WeakMap et WeakSet (références faibles)
const weakMap = new WeakMap();
const obj = {};
weakMap.set(obj, 'valeur associée');
```

---

# 3.2 Fonctions ES6+

## Fonctions Fléchées (Arrow Functions)

```javascript
// Syntaxe traditionnelle
function add(a, b) {
    return a + b;
}

// Fonction fléchée
const add = (a, b) => a + b;

// Différentes syntaxes
const square = x => x * x; // Un paramètre, pas de parenthèses
const greet = () => 'Bonjour !'; // Aucun paramètre
const multiply = (a, b) => {
    const result = a * b;
    return result;
}; // Corps de fonction avec accolades

// Retour d'objet
const createUser = (name, age) => ({ name, age });

// this dans les fonctions fléchées
const obj = {
    name: 'Jean',
    regularFunction: function() {
        return this.name; // this = obj
    },
    arrowFunction: () => {
        return this.name; // this = window/global (lexical scope)
    },
    methodWithArrow: function() {
        const arrow = () => this.name; // this = obj (hérité)
        return arrow();
    }
};
```

## Paramètres de Fonction Avancés

```javascript
// Paramètres par défaut
function greetUser(name = 'Invité', greeting = 'Bonjour') {
    return `${greeting}, ${name} !`;
}

// Rest parameters
function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}
console.log(sum(1, 2, 3, 4, 5)); // 15

// Paramètres nommés avec destructuring
function createUser({ name, age, email = 'non-renseigné' }) {
    return { name, age, email };
}
const user = createUser({ name: 'Jean', age: 30 });

// Spread dans les appels de fonction
const numbers = [1, 2, 3];
console.log(Math.max(...numbers)); // 3

// Fonctions de haut niveau
const applyOperation = (operation) => (a, b) => operation(a, b);
const add = applyOperation((x, y) => x + y);
const multiply = applyOperation((x, y) => x * y);

console.log(add(5, 3)); // 8
console.log(multiply(4, 6)); // 24
```

## Méthodes d'Array ES6+

```javascript
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// map - transformation
const squared = numbers.map(n => n * n);
const doubled = numbers.map(n => n * 2);

// filter - filtrage
const evenNumbers = numbers.filter(n => n % 2 === 0);
const bigNumbers = numbers.filter(n => n > 5);

// reduce - agrégation
const sum = numbers.reduce((acc, n) => acc + n, 0);
const product = numbers.reduce((acc, n) => acc * n, 1);
const max = numbers.reduce((max, n) => n > max ? n : max, numbers[0]);

// find et findIndex
const users = [
    { id: 1, name: 'Jean', active: true },
    { id: 2, name: 'Marie', active: false },
    { id: 3, name: 'Paul', active: true }
];

const activeUser = users.find(user => user.active);
const marieIndex = users.findIndex(user => user.name === 'Marie');

// some et every
const hasActiveUser = users.some(user => user.active); // true
const allActive = users.every(user => user.active); // false

// includes
const hasJean = users.some(user => user.name === 'Jean');
const numbersInclude5 = numbers.includes(5); // true

// forEach
numbers.forEach((num, index) => {
    console.log(`Index ${index}: ${num}`);
});

// Chaînage de méthodes
const result = numbers
    .filter(n => n % 2 === 0)
    .map(n => n * n)
    .reduce((sum, n) => sum + n, 0);

// flat et flatMap (ES2019)
const nested = [[1, 2], [3, 4], [5, 6]];
const flattened = nested.flat(); // [1, 2, 3, 4, 5, 6]

const words = ['hello world', 'foo bar'];
const allWords = words.flatMap(str => str.split(' '));
// ['hello', 'world', 'foo', 'bar']
```

---

# 3.3 Classes ES6+ et POO

## Classes de Base

```javascript
class User {
    // Constructeur
    constructor(name, email, age = 18) {
        this.name = name;
        this.email = email;
        this.age = age;
        this.createdAt = new Date();
        this._id = Math.random().toString(36).substr(2, 9); // Propriété "privée"
    }
    
    // Méthodes d'instance
    greet() {
        return `Bonjour, je suis ${this.name}`;
    }
    
    getInfo() {
        return `${this.name} (${this.age} ans) - ${this.email}`;
    }
    
    updateAge(newAge) {
        if (newAge > 0 && newAge < 150) {
            this.age = newAge;
        } else {
            throw new Error('Âge invalide');
        }
    }
    
    // Getter
    get id() {
        return this._id;
    }
    
    get isAdult() {
        return this.age >= 18;
    }
    
    // Setter
    set email(newEmail) {
        if (this.validateEmail(newEmail)) {
            this._email = newEmail;
        } else {
            throw new Error('Email invalide');
        }
    }
    
    get email() {
        return this._email;
    }
    
    // Méthode privée (convention avec _)
    validateEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
    
    // Méthode statique
    static createFromObject(obj) {
        return new User(obj.name, obj.email, obj.age);
    }
    
    static validateUser(user) {
        return user instanceof User && user.name && user.email;
    }
}

// Utilisation
const user1 = new User('Jean', 'jean@email.com', 30);
console.log(user1.greet()); // "Bonjour, je suis Jean"
console.log(user1.isAdult); // true
console.log(user1.id); // ID généré

const user2 = User.createFromObject({
    name: 'Marie',
    email: 'marie@email.com',
    age: 25
});
```

## Héritage et Polymorphisme

```javascript
// Classe parent
class Animal {
    constructor(name, species) {
        this.name = name;
        this.species = species;
        this.alive = true;
    }
    
    speak() {
        return `${this.name} fait du bruit`;
    }
    
    eat(food) {
        return `${this.name} mange ${food}`;
    }
    
    static getKingdom() {
        return 'Animalia';
    }
}

// Classe enfant
class Dog extends Animal {
    constructor(name, breed) {
        super(name, 'Canis lupus'); // Appel au constructeur parent
        this.breed = breed;
        this.tricks = [];
    }
    
    // Surcharge de méthode (polymorphisme)
    speak() {
        return `${this.name} aboie : Woof!`;
    }
    
    fetch() {
        return `${this.name} rapporte la balle`;
    }
    
    learnTrick(trick) {
        this.tricks.push(trick);
        return `${this.name} a appris : ${trick}`;
    }
    
    // Utiliser la méthode parent avec super
    eat(food) {
        const parentEat = super.eat(food);
        return `${parentEat} avec enthousiasme!`;
    }
}

class Cat extends Animal {
    constructor(name, indoor = true) {
        super(name, 'Felis catus');
        this.indoor = indoor;
        this.lives = 9;
    }
    
    speak() {
        return `${this.name} miaule : Meow!`;
    }
    
    purr() {
        return `${this.name} ronronne`;
    }
    
    hunt() {
        if (!this.indoor) {
            return `${this.name} chasse dehors`;
        }
        return `${this.name} chasse ses jouets`;
    }
}

// Utilisation
const dog = new Dog('Rex', 'Labrador');
const cat = new Cat('Whiskers', false);

console.log(dog.speak()); // "Rex aboie : Woof!"
console.log(cat.speak()); // "Whiskers miaule : Meow!"
console.log(dog.eat('croquettes')); // "Rex mange croquettes avec enthousiasme!"

// Polymorphisme
const animals = [dog, cat];
animals.forEach(animal => {
    console.log(animal.speak()); // Méthode différente selon le type
});

// instanceof
console.log(dog instanceof Dog); // true
console.log(dog instanceof Animal); // true
console.log(cat instanceof Dog); // false
```

## Classes Avancées et Propriétés Privées

```javascript
// Propriétés et méthodes privées (ES2022)
class BankAccount {
    #balance = 0; // Propriété privée
    #accountNumber;
    
    constructor(accountNumber, initialBalance = 0) {
        this.#accountNumber = accountNumber;
        this.#balance = initialBalance;
        this.transactions = [];
    }
    
    // Méthode privée
    #addTransaction(type, amount, description) {
        this.transactions.push({
            type,
            amount,
            description,
            date: new Date(),
            balance: this.#balance
        });
    }
    
    // Méthodes publiques
    deposit(amount, description = 'Dépôt') {
        if (amount <= 0) {
            throw new Error('Le montant doit être positif');
        }
        this.#balance += amount;
        this.#addTransaction('credit', amount, description);
        return this.#balance;
    }
    
    withdraw(amount, description = 'Retrait') {
        if (amount <= 0) {
            throw new Error('Le montant doit être positif');
        }
        if (amount > this.#balance) {
            throw new Error('Solde insuffisant');
        }
        this.#balance -= amount;
        this.#addTransaction('debit', amount, description);
        return this.#balance;
    }
    
    get balance() {
        return this.#balance;
    }
    
    get accountNumber() {
        return this.#accountNumber;
    }
    
    getStatement() {
        return {
            accountNumber: this.#accountNumber,
            balance: this.#balance,
            transactions: [...this.transactions]
        };
    }
}

// Utilisation
const account = new BankAccount('ACC123', 1000);
account.deposit(500, 'Salaire');
account.withdraw(200, 'Courses');
console.log(account.balance); // 1300
// console.log(account.#balance); // SyntaxError - propriété privée

// Mixin pattern
const Flyable = {
    fly() {
        return `${this.name} vole`;
    },
    land() {
        return `${this.name} atterrit`;
    }
};

class Bird extends Animal {
    constructor(name, species, canFly = true) {
        super(name, species);
        this.canFly = canFly;
    }
    
    speak() {
        return `${this.name} chante`;
    }
}

// Ajouter les capacités de vol
Object.assign(Bird.prototype, Flyable);

const eagle = new Bird('Aigle Royal', 'Aquila chrysaetos');
console.log(eagle.fly()); // "Aigle Royal vole"
```

---

# 3.4 Modules ES6+

## Export et Import

```javascript
// math.js - Différents types d'exports
export const PI = 3.14159;
export const E = 2.71828;

export function add(a, b) {
    return a + b;
}

export function multiply(a, b) {
    return a * b;
}

// Export par défaut
export default function subtract(a, b) {
    return a - b;
}

// Export groupé
const divide = (a, b) => {
    if (b === 0) throw new Error('Division par zéro');
    return a / b;
};

const power = (base, exponent) => Math.pow(base, exponent);

export { divide, power };

// Export avec alias
const sqrt = Math.sqrt;
export { sqrt as squareRoot };
```

```javascript
// calculator.js - Différents types d'imports
import subtract from './math.js'; // Import par défaut
import { add, multiply, PI } from './math.js'; // Import nommé
import { divide, power, squareRoot as sqrt } from './math.js'; // Import avec alias
import * as MathUtils from './math.js'; // Import de tout

// Utilisation
console.log(add(5, 3)); // 8
console.log(subtract(10, 4)); // 6
console.log(PI); // 3.14159
console.log(MathUtils.E); // 2.71828
console.log(sqrt(16)); // 4

// Import dynamique (ES2020)
async function loadMathModule() {
    const math = await import('./math.js');
    return math.add(2, 3);
}

// Import conditionnel
if (condition) {
    import('./conditionalModule.js')
        .then(module => {
            module.doSomething();
        });
}
```

## Classes et Modules

```javascript
// user.js
export class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
    
    greet() {
        return `Bonjour ${this.name}`;
    }
}

export class AdminUser extends User {
    constructor(name, email, permissions = []) {
        super(name, email);
        this.permissions = permissions;
    }
    
    hasPermission(permission) {
        return this.permissions.includes(permission);
    }
}

// Utilitaires
export const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
};

export const createUser = (userData) => {
    if (!validateEmail(userData.email)) {
        throw new Error('Email invalide');
    }
    return new User(userData.name, userData.email);
};
```

```javascript
// app.js
import { User, AdminUser, createUser, validateEmail } from './user.js';

const regularUser = new User('Jean', 'jean@email.com');
const admin = new AdminUser('Marie', 'marie@email.com', ['read', 'write', 'delete']);

console.log(regularUser.greet());
console.log(admin.hasPermission('write')); // true

// Utilisation des utilitaires
const userData = { name: 'Paul', email: 'paul@email.com' };
const newUser = createUser(userData);
```

---

# 3.5 Async/Await et Promises

## Promises

```javascript
// Création d'une Promise
const fetchUserData = (userId) => {
    return new Promise((resolve, reject) => {
        // Simulation d'un appel API
        setTimeout(() => {
            if (userId > 0) {
                const userData = {
                    id: userId,
                    name: 'Jean Dupont',
                    email: 'jean@email.com'
                };
                resolve(userData);
            } else {
                reject(new Error('ID utilisateur invalide'));
            }
        }, 1000);
    });
};

// Utilisation avec .then()
fetchUserData(1)
    .then(user => {
        console.log('Utilisateur récupéré:', user);
        return fetchUserPosts(user.id); // Chaînage
    })
    .then(posts => {
        console.log('Posts:', posts);
    })
    .catch(error => {
        console.error('Erreur:', error.message);
    })
    .finally(() => {
        console.log('Opération terminée');
    });

// Promise.all - Exécution en parallèle
const promises = [
    fetchUserData(1),
    fetchUserData(2),
    fetchUserData(3)
];

Promise.all(promises)
    .then(users => {
        console.log('Tous les utilisateurs:', users);
    })
    .catch(error => {
        console.error('Une des promesses a échoué:', error);
    });

// Promise.allSettled - Toutes les promesses se terminent
Promise.allSettled(promises)
    .then(results => {
        results.forEach((result, index) => {
            if (result.status === 'fulfilled') {
                console.log(`Utilisateur ${index + 1}:`, result.value);
            } else {
                console.error(`Erreur utilisateur ${index + 1}:`, result.reason);
            }
        });
    });

// Promise.race - La première qui se termine
Promise.race(promises)
    .then(firstUser => {
        console.log('Premier utilisateur récupéré:', firstUser);
    });
```

## Async/Await

```javascript
// Fonction async
async function getUserWithPosts(userId) {
    try {
        // Attendre la résolution de la promise
        const user = await fetchUserData(userId);
        console.log('Utilisateur récupéré:', user);
        
        // Autre appel async
        const posts = await fetchUserPosts(user.id);
        console.log('Posts récupérés:', posts);
        
        // Retourner un objet combiné
        return {
            user,
            posts,
            totalPosts: posts.length
        };
    } catch (error) {
        console.error('Erreur dans getUserWithPosts:', error.message);
        throw error; // Re-throw pour le appelant
    }
}

// Utilisation
async function main() {
    try {
        const result = await getUserWithPosts(1);
        console.log('Résultat complet:', result);
    } catch (error) {
        console.error('Erreur dans main:', error.message);
    }
}

main();

// Boucles avec async/await
async function processUsers(userIds) {
    const results = [];
    
    // Traitement séquentiel
    for (const id of userIds) {
        try {
            const user = await fetchUserData(id);
            results.push(user);
        } catch (error) {
            console.error(`Erreur pour l'utilisateur ${id}:`, error.message);
        }
    }
    
    return results;
}

// Traitement en parallèle avec async/await
async function processUsersParallel(userIds) {
    const promises = userIds.map(id => fetchUserData(id));
    
    try {
        const users = await Promise.all(promises);
        return users;
    } catch (error) {
        console.error('Erreur dans le traitement parallèle:', error);
        throw error;
    }
}

// Gestion d'erreurs avancée
async function robustUserFetch(userId, retries = 3) {
    for (let attempt = 1; attempt <= retries; attempt++) {
        try {
            const user = await fetchUserData(userId);
            return user;
        } catch (error) {
            console.warn(`Tentative ${attempt} échouée:`, error.message);
            
            if (attempt === retries) {
                throw new Error(`Échec après ${retries} tentatives: ${error.message}`);
            }
            
            // Attendre avant la prochaine tentative
            await new Promise(resolve => setTimeout(resolve, 1000 * attempt));
        }
    }
}
```

## Fetch API et Gestion d'Erreurs

```javascript
// Classe pour gérer les appels API
class APIClient {
    constructor(baseURL) {
        this.baseURL = baseURL;
        this.defaultHeaders = {
            'Content-Type': 'application/json',
        };
    }
    
    async request(endpoint, options = {}) {
        const url = `${this.baseURL}${endpoint}`;
        const config = {
            ...options,
            headers: {
                ...this.defaultHeaders,
                ...options.headers
            }
        };
        
        try {
            const response = await fetch(url, config);
            
            if (!response.ok) {
                throw new Error(`HTTP Error: ${response.status} ${response.statusText}`);
            }
            
            const contentType = response.headers.get('content-type');
            if (contentType && contentType.includes('application/json')) {
                return await response.json();
            }
            
            return await response.text();
        } catch (error) {
            console.error('API Request failed:', error);
            throw error;
        }
    }
    
    async get(endpoint) {
        return this.request(endpoint);
    }
    
    async post(endpoint, data) {
        return this.request(endpoint, {
            method: 'POST',
            body: JSON.stringify(data)
        });
    }
    
    async put(endpoint, data) {
        return this.request(endpoint, {
            method: 'PUT',
            body: JSON.stringify(data)
        });
    }
    
    async delete(endpoint) {
        return this.request(endpoint, {
            method: 'DELETE'
        });
    }
}

// Utilisation
const api = new APIClient('https://jsonplaceholder.typicode.com');

async function manageUsers() {
    try {
        // GET
        const users = await api.get('/users');
        console.log('Utilisateurs:', users);
        
        // POST
        const newUser = await api.post('/users', {
            name: 'Nouveau Utilisateur',
            email: 'nouveau@email.com'
        });
        console.log('Utilisateur créé:', newUser);
        
        // PUT
        const updatedUser = await api.put('/users/1', {
            name: 'Utilisateur Modifié',
            email: 'modifie@email.com'
        });
        console.log('Utilisateur modifié:', updatedUser);
        
        // DELETE
        await api.delete('/users/1');
        console.log('Utilisateur supprimé');
        
    } catch (error) {
        console.error('Erreur de gestion des utilisateurs:', error.message);
    }
}

manageUsers();

// Gestion avancée avec timeout
async function fetchWithTimeout(url, timeout = 5000) {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), timeout);
    
    try {
        const response = await fetch(url, {
            signal: controller.signal
        });
        clearTimeout(timeoutId);
        return await response.json();
    } catch (error) {
        if (error.name === 'AbortError') {
            throw new Error('Request timeout');
        }
        throw error;
    }
}
```