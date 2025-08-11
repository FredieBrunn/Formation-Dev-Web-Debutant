# Cours JavaScript pour Débutants
## Troisième partie - Formation Développement Web

---

## Table des Matières

1. [Introduction au JavaScript](#1-introduction-au-javascript)
2. [Variables et Types de données](#2-variables-et-types-de-données)
3. [Opérateurs](#3-opérateurs)
4. [Structures conditionnelles](#4-structures-conditionnelles)
5. [Boucles](#5-boucles)
6. [Fonctions](#6-fonctions)
7. [Tableaux](#7-tableaux)
8. [Objets](#8-objets)
9. [Manipulation du DOM](#9-manipulation-du-dom)
10. [Événements](#10-événements)
11. [Projet Final](#11-projet-final---todo-list-interactive)

---

## 1. Introduction au JavaScript

### Qu'est-ce que JavaScript ?

JavaScript est un langage de programmation qui permet de rendre vos pages web interactives. Contrairement à HTML (structure) et CSS (style), JavaScript ajoute le comportement à vos pages.

### Comment intégrer JavaScript ?

**Méthode 1 : Script inline**
```html
<script>
    alert("Bonjour le monde !");
</script>
```

**Méthode 2 : Fichier externe (recommandé)**
```html
<script src="script.js"></script>
```

**Méthode 3 : Dans les attributs HTML**
```html
<button onclick="alert('Clic!')">Cliquez-moi</button>
```

### Premiers pas
```javascript
// Afficher un message dans la console
console.log("Mon premier programme JavaScript");

// Afficher une boîte de dialogue
alert("Bienvenue sur mon site !");

// Demander une information à l'utilisateur
let nom = prompt("Quel est votre nom ?");
```

---

## 2. Variables et Types de données

### Déclaration de variables

```javascript
// Déclaration avec let (recommandé)
let age = 25;
let nom = "Marie";

// Déclaration avec const (pour les constantes)
const PI = 3.14159;
const COULEUR_PRIMAIRE = "#FF0000";

// Ancienne méthode avec var (à éviter)
var ancienneVariable = "valeur";
```

### Types de données

```javascript
// 1. Number (nombres)
let entier = 42;
let decimal = 3.14;
let negatif = -10;

// 2. String (chaînes de caractères)
let prenom = "Jean";
let message = 'Bonjour tout le monde!';
let template = `Mon nom est ${prenom}`; // Template literals

// 3. Boolean (booléens)
let estVrai = true;
let estFaux = false;

// 4. Undefined
let variableNonDefinie;
console.log(variableNonDefinie); // undefined

// 5. Null
let variableVide = null;

// 6. Array (tableaux)
let couleurs = ["rouge", "vert", "bleu"];

// 7. Object (objets)
let personne = {
    nom: "Dupont",
    age: 30
};
```

### Opérations sur les chaînes

```javascript
let prenom = "Jean";
let nom = "Dupont";

// Concaténation
let nomComplet = prenom + " " + nom;
let nomCompletTemplate = `${prenom} ${nom}`;

// Propriétés et méthodes utiles
console.log(prenom.length); // 4
console.log(prenom.toUpperCase()); // JEAN
console.log(prenom.toLowerCase()); // jean
```

### **Exercice 1 : Variables et types**
Créez un fichier HTML avec un script qui :
1. Demande le nom de l'utilisateur
2. Demande son âge
3. Affiche un message personnalisé dans la console

**Correction Exercice 1 :**
```html
<!DOCTYPE html>
<html>
<head>
    <title>Exercice 1</title>
</head>
<body>
    <script>
        // Demander les informations
        let nom = prompt("Quel est votre nom ?");
        let age = parseInt(prompt("Quel est votre âge ?"));
        
        // Afficher le message personnalisé
        console.log(`Bonjour ${nom}, vous avez ${age} ans !`);
        
        // Vérifier si la personne est majeure
        if (age >= 18) {
            console.log("Vous êtes majeur(e).");
        } else {
            console.log("Vous êtes mineur(e).");
        }
    </script>
</body>
</html>
```

---

## 3. Opérateurs

### Opérateurs arithmétiques

```javascript
let a = 10;
let b = 3;

console.log(a + b); // Addition : 13
console.log(a - b); // Soustraction : 7
console.log(a * b); // Multiplication : 30
console.log(a / b); // Division : 3.333...
console.log(a % b); // Modulo (reste) : 1
console.log(a ** b); // Puissance : 1000

// Incrémentation et décrémentation
let compteur = 5;
compteur++; // compteur = 6
compteur--; // compteur = 5
```

### Opérateurs de comparaison

```javascript
let x = 5;
let y = "5";

console.log(x == y);  // true (égalité avec conversion de type)
console.log(x === y); // false (égalité stricte)
console.log(x != y);  // false
console.log(x !== y); // true
console.log(x > 3);   // true
console.log(x >= 5);  // true
console.log(x < 10);  // true
console.log(x <= 5);  // true
```

### Opérateurs logiques

```javascript
let age = 20;
let aPermis = true;

// ET logique (&&)
if (age >= 18 && aPermis) {
    console.log("Peut conduire");
}

// OU logique (||)
if (age < 18 || !aPermis) {
    console.log("Ne peut pas conduire");
}

// NON logique (!)
let estMineur = !(age >= 18);
```

---

## 4. Structures conditionnelles

### if, else if, else

```javascript
let note = 15;

if (note >= 16) {
    console.log("Très bien !");
} else if (note >= 14) {
    console.log("Bien !");
} else if (note >= 12) {
    console.log("Assez bien !");
} else if (note >= 10) {
    console.log("Passable !");
} else {
    console.log("Insuffisant !");
}
```

### Switch

```javascript
let jour = "lundi";

switch (jour) {
    case "lundi":
        console.log("Début de semaine");
        break;
    case "mardi":
    case "mercredi":
    case "jeudi":
        console.log("Milieu de semaine");
        break;
    case "vendredi":
        console.log("Fin de semaine");
        break;
    case "samedi":
    case "dimanche":
        console.log("Week-end");
        break;
    default:
        console.log("Jour inconnu");
}
```

### Opérateur ternaire

```javascript
let age = 20;
let statut = age >= 18 ? "majeur" : "mineur";
console.log(statut); // "majeur"
```

### **Exercice 2 : Conditions**
Créez un programme qui :
1. Demande un nombre entre 1 et 12
2. Affiche le nom du mois correspondant
3. Indique la saison(1,2,12: Hiver; 3,4,5: Printemps; 6,7,8: Ete; 9,10,11: Automne)

**Correction Exercice 2 :**
```javascript
let numeroMois = parseInt(prompt("Entrez un numéro de mois (1-12) :"));
let nomMois;
let saison;

switch (numeroMois) {
    case 1: nomMois = "Janvier"; saison = "Hiver"; break;
    case 2: nomMois = "Février"; saison = "Hiver"; break;
    case 3: nomMois = "Mars"; saison = "Printemps"; break;
    case 4: nomMois = "Avril"; saison = "Printemps"; break;
    case 5: nomMois = "Mai"; saison = "Printemps"; break;
    case 6: nomMois = "Juin"; saison = "Été"; break;
    case 7: nomMois = "Juillet"; saison = "Été"; break;
    case 8: nomMois = "Août"; saison = "Été"; break;
    case 9: nomMois = "Septembre"; saison = "Automne"; break;
    case 10: nomMois = "Octobre"; saison = "Automne"; break;
    case 11: nomMois = "Novembre"; saison = "Automne"; break;
    case 12: nomMois = "Décembre"; saison = "Hiver"; break;
    default: 
        alert("Numéro de mois invalide !");
        nomMois = "Inconnu";
        saison = "Inconnue";
}

if (nomMois !== "Inconnu") {
    alert(`Le mois ${numeroMois} est ${nomMois} et c'est l'${saison}.`);
}
```

---

## 5. Boucles

### Boucle for

```javascript
// Boucle for classique
for (let i = 0; i < 5; i++) {
    console.log(`Itération ${i}`);
}

// Boucle for...of (pour les tableaux)
let fruits = ["pomme", "banane", "orange"];
for (let fruit of fruits) {
    console.log(fruit);
}

// Boucle for...in (pour les objets)
let personne = { nom: "Marie", age: 25, ville: "Paris" };
for (let propriete in personne) {
    console.log(`${propriete}: ${personne[propriete]}`);
}
```

### Boucle while

```javascript
let compteur = 0;
while (compteur < 5) {
    console.log(`Compteur: ${compteur}`);
    compteur++;
}
```

### Boucle do...while

```javascript
let nombre;
do {
    nombre = parseInt(prompt("Entrez un nombre entre 1 et 10:"));
} while (nombre < 1 || nombre > 10);

console.log("Merci, vous avez entré:", nombre);
```

### Break et continue

```javascript
// Break : sort de la boucle
for (let i = 0; i < 10; i++) {
    if (i === 5) {
        break; // Sort de la boucle quand i = 5
    }
    console.log(i);
}

// Continue : passe à l'itération suivante
for (let i = 0; i < 10; i++) {
    if (i % 2 === 0) {
        continue; // Ignore les nombres pairs
    }
    console.log(i); // Affiche seulement les nombres impairs
}
```

### **Exercice 3 : Boucles**
Créez un programme qui :
1. Affiche les tables de multiplication de 1 à 10
2. Calcule la somme des nombres de 1 à 100
3. Affiche les nombres premiers entre 1 et 50

**Correction Exercice 3 :**
```javascript
// 1. Tables de multiplication
console.log("=== Tables de multiplication ===");
for (let table = 1; table <= 10; table++) {
    console.log(`Table de ${table}:`);
    for (let multiplicateur = 1; multiplicateur <= 10; multiplicateur++) {
        let resultat = table * multiplicateur;
        console.log(`${table} x ${multiplicateur} = ${resultat}`);
    }
    console.log("---");
}

// 2. Somme des nombres de 1 à 100
let somme = 0;
for (let i = 1; i <= 100; i++) {
    somme += i;
}
console.log(`La somme des nombres de 1 à 100 est: ${somme}`);

// 3. Nombres premiers entre 1 et 50
console.log("=== Nombres premiers entre 1 et 50 ===");
for (let nombre = 2; nombre <= 50; nombre++) {
    let estPremier = true;
    
    for (let diviseur = 2; diviseur < nombre; diviseur++) {
        if (nombre % diviseur === 0) {
            estPremier = false;
            break;
        }
    }
    
    if (estPremier) {
        console.log(nombre);
    }
}
```

---

## 6. Fonctions

### Déclaration et appel de fonction

```javascript
// Déclaration de fonction
function saluer(nom) {
    return `Bonjour ${nom} !`;
}

// Appel de fonction
let message = saluer("Marie");
console.log(message); // "Bonjour Marie !"
```

### Paramètres et valeurs de retour

```javascript
// Fonction avec plusieurs paramètres
function calculerSomme(a, b) {
    return a + b;
}

// Paramètres par défaut
function saluerAvecTitre(nom, titre = "Monsieur/Madame") {
    return `Bonjour ${titre} ${nom}`;
}

console.log(saluerAvecTitre("Dupont")); // "Bonjour Monsieur/Madame Dupont"
console.log(saluerAvecTitre("Martin", "Docteur")); // "Bonjour Docteur Martin"
```

### Fonctions fléchées (Arrow functions)

```javascript
// Fonction classique
function multiplier(a, b) {
    return a * b;
}

// Fonction fléchée équivalente
const multiplierFleche = (a, b) => {
    return a * b;
};

// Version courte pour une seule expression
const multiplierCourt = (a, b) => a * b;

// Fonction fléchée avec un seul paramètre
const carre = x => x * x;
```

### Portée des variables (Scope)

```javascript
let variableGlobale = "Je suis globale";

function maFonction() {
    let variableLocale = "Je suis locale";
    console.log(variableGlobale); // Accessible
    console.log(variableLocale);  // Accessible
}

maFonction();
// console.log(variableLocale); // Erreur : non accessible ici
```

### **Exercice 4 : Fonctions**
Créez les fonctions suivantes :
1. `calculerMoyenne(notes)` : calcule la moyenne d'un tableau de notes
2. `estPalindrome(mot)` : vérifie si un mot est un palindrome
3. `genererMotDePasse(longueur)` : génère un mot de passe aléatoire

**Correction Exercice 4 :**
```javascript
// 1. Calculer la moyenne
function calculerMoyenne(notes) {
    if (notes.length === 0) return 0;
    
    let somme = 0;
    for (let note of notes) {
        somme += note;
    }
    return somme / notes.length;
}

// Test
let mesNotes = [15, 12, 18, 14, 16];
console.log(`Moyenne: ${calculerMoyenne(mesNotes)}`); // 15

// 2. Vérifier palindrome
function estPalindrome(mot) {
    let motMinuscule = mot.toLowerCase();
    let motInverse = motMinuscule.split('').reverse().join('');
    return motMinuscule === motInverse;
}

// Test
console.log(estPalindrome("radar")); // true
console.log(estPalindrome("hello")); // false

// 3. Générer mot de passe
function genererMotDePasse(longueur) {
    const caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";
    let motDePasse = "";
    
    for (let i = 0; i < longueur; i++) {
        let indexAleatoire = Math.floor(Math.random() * caracteres.length);
        motDePasse += caracteres[indexAleatoire];
    }
    
    return motDePasse;
}

// Test
console.log(genererMotDePasse(12)); // Ex: "aB3#kL9@mN2!"
```

---

## 7. Tableaux

### Création et manipulation de base

```javascript
// Création de tableaux
let fruits = ["pomme", "banane", "orange"];
let nombres = [1, 2, 3, 4, 5];
let melange = ["texte", 42, true, null];

// Accès aux éléments
console.log(fruits[0]); // "pomme"
console.log(fruits.length); // 3

// Modification d'éléments
fruits[1] = "poire";
console.log(fruits); // ["pomme", "poire", "orange"]
```

### Méthodes de tableau importantes

```javascript
let nombres = [1, 2, 3, 4, 5];

// Ajouter des éléments
nombres.push(6);        // Ajoute à la fin
nombres.unshift(0);     // Ajoute au début
console.log(nombres);   // [0, 1, 2, 3, 4, 5, 6]

// Supprimer des éléments
let dernier = nombres.pop();     // Supprime le dernier
let premier = nombres.shift();   // Supprime le premier
console.log(nombres);            // [1, 2, 3, 4, 5]

// Recherche
console.log(nombres.indexOf(3));    // 2
console.log(nombres.includes(4));   // true

// Extraire une partie
let portion = nombres.slice(1, 4);  // [2, 3, 4]

// Joindre en chaîne
let chaine = nombres.join(" - ");   // "1 - 2 - 3 - 4 - 5"
```

### Méthodes avancées

```javascript
let nombres = [1, 2, 3, 4, 5];

// map : transforme chaque élément
let doubles = nombres.map(x => x * 2);
console.log(doubles); // [2, 4, 6, 8, 10]

// filter : filtre les éléments
let pairs = nombres.filter(x => x % 2 === 0);
console.log(pairs); // [2, 4]

// reduce : réduit à une seule valeur
let somme = nombres.reduce((acc, x) => acc + x, 0);
console.log(somme); // 15

// forEach : exécute une action pour chaque élément
nombres.forEach(x => console.log(x * x));

// find : trouve le premier élément qui correspond
let premierPair = nombres.find(x => x % 2 === 0);
console.log(premierPair); // 2
```

### **Exercice 5 : Tableaux**
Créez un programme qui :
1. Gère une liste de courses (ajouter, supprimer, afficher)
2. Trie un tableau de noms par ordre alphabétique
3. Trouve les doublons dans un tableau

**Correction Exercice 5 :**
```javascript
// 1. Gestionnaire de liste de courses
let listeCourses = [];

function ajouterArticle(article) {
    if (!listeCourses.includes(article)) {
        listeCourses.push(article);
        console.log(`"${article}" ajouté à la liste.`);
    } else {
        console.log(`"${article}" est déjà dans la liste.`);
    }
}

function supprimerArticle(article) {
    let index = listeCourses.indexOf(article);
    if (index !== -1) {
        listeCourses.splice(index, 1);
        console.log(`"${article}" supprimé de la liste.`);
    } else {
        console.log(`"${article}" n'est pas dans la liste.`);
    }
}

function afficherListe() {
    console.log("=== Liste de courses ===");
    if (listeCourses.length === 0) {
        console.log("La liste est vide.");
    } else {
        listeCourses.forEach((article, index) => {
            console.log(`${index + 1}. ${article}`);
        });
    }
}

// Test
ajouterArticle("Pain");
ajouterArticle("Lait");
ajouterArticle("Œufs");
afficherListe();
supprimerArticle("Lait");
afficherListe();

// 2. Tri de noms
function trierNoms(noms) {
    return noms.slice().sort(); // slice() pour ne pas modifier l'original
}

let noms = ["Marie", "Pierre", "Alice", "Bob"];
let nomsTries = trierNoms(noms);
console.log("Noms triés:", nomsTries);

// 3. Trouver les doublons
function trouverDoublons(tableau) {
    let doublons = [];
    let vus = {};
    
    for (let element of tableau) {
        if (vus[element]) {
            if (!doublons.includes(element)) {
                doublons.push(element);
            }
        } else {
            vus[element] = true;
        }
    }
    
    return doublons;
}

let tableauAvecDoublons = [1, 2, 3, 2, 4, 3, 5, 1];
console.log("Doublons:", trouverDoublons(tableauAvecDoublons)); // [2, 3, 1]
```

---

## 8. Objets

### Création et manipulation d'objets

```javascript
// Création d'objet
let personne = {
    nom: "Dupont",
    prenom: "Marie",
    age: 30,
    email: "marie.dupont@email.com"
};

// Accès aux propriétés
console.log(personne.nom);        // "Dupont"
console.log(personne["prenom"]);  // "Marie"

// Modification des propriétés
personne.age = 31;
personne["email"] = "marie.d@email.com";

// Ajout de nouvelles propriétés
personne.ville = "Paris";
```

### Méthodes d'objets

```javascript
let calculatrice = {
    resultat: 0,
    
    additionner: function(nombre) {
        this.resultat += nombre;
        return this;
    },
    
    soustraire: function(nombre) {
        this.resultat -= nombre;
        return this;
    },
    
    multiplier: function(nombre) {
        this.resultat *= nombre;
        return this;
    },
    
    reset: function() {
        this.resultat = 0;
        return this;
    },
    
    afficher: function() {
        console.log(`Résultat: ${this.resultat}`);
        return this;
    }
};

// Utilisation avec chaînage de méthodes
calculatrice.additionner(10).multiplier(2).soustraire(5).afficher(); // Résultat: 15
```

### Constructeurs et prototypes

```javascript
// Fonction constructeur
function Voiture(marque, modele, annee) {
    this.marque = marque;
    this.modele = modele;
    this.annee = annee;
    this.kilometrage = 0;
}

// Ajout de méthodes au prototype
Voiture.prototype.rouler = function(km) {
    this.kilometrage += km;
    console.log(`La ${this.marque} ${this.modele} a roulé ${km}km.`);
};

Voiture.prototype.afficherInfo = function() {
    console.log(`${this.marque} ${this.modele} (${this.annee}) - ${this.kilometrage}km`);
};

// Création d'instances
let maVoiture = new Voiture("Toyota", "Corolla", 2020);
maVoiture.rouler(150);
maVoiture.afficherInfo();
```

### Classes (syntaxe moderne)

```javascript
class Animal {
    constructor(nom, espece) {
        this.nom = nom;
        this.espece = espece;
    }
    
    parler() {
        console.log(`${this.nom} fait du bruit.`);
    }
    
    sePresenter() {
        console.log(`Je suis ${this.nom}, un(e) ${this.espece}.`);
    }
}

class Chien extends Animal {
    constructor(nom, race) {
        super(nom, "chien");
        this.race = race;
    }
    
    parler() {
        console.log(`${this.nom} aboie : Woof!`);
    }
    
    aboyer() {
        this.parler();
    }
}

// Utilisation
let monChien = new Chien("Rex", "Golden Retriever");
monChien.sePresenter(); // "Je suis Rex, un(e) chien."
monChien.aboyer();      // "Rex aboie : Woof!"
```

### **Exercice 6 : Objets**
Créez une classe `CompteBancaire` avec :
1. Propriétés : numéro, titulaire, solde
2. Méthodes : déposer, retirer, afficherSolde, calculerInterets

**Correction Exercice 6 :**
```javascript
class CompteBancaire {
    constructor(numero, titulaire, soldeInitial = 0) {
        this.numero = numero;
        this.titulaire = titulaire;
        this.solde = soldeInitial;
        this.historique = [];
    }
    
    deposer(montant) {
        if (montant > 0) {
            this.solde += montant;
            this.historique.push({
                type: "Dépôt",
                montant: montant,
                date: new Date(),
                soldeFinal: this.solde
            });
            console.log(`Dépôt de ${montant}€ effectué.`);
        } else {
            console.log("Le montant doit être positif.");
        }
    }
    
    retirer(montant) {
        if (montant > 0) {
            if (this.solde >= montant) {
                this.solde -= montant;
                this.historique.push({
                    type: "Retrait",
                    montant: montant,
                    date: new Date(),
                    soldeFinal: this.solde
                });
                console.log(`Retrait de ${montant}€ effectué.`);
            } else {
                console.log("Solde insuffisant.");
            }
        } else {
            console.log("Le montant doit être positif.");
        }
    }
    
    afficherSolde() {
        console.log(`Solde du compte ${this.numero} (${this.titulaire}): ${this.solde}€`);
    }
    
    calculerInterets(taux) {
        let interets = this.solde * (taux / 100);
        this.deposer(interets);
        console.log(`Intérêts calculés à ${taux}% : ${interets}€`);
    }
    
    afficherHistorique() {
        console.log(`=== Historique du compte ${this.numero} ===`);
        this.historique.forEach((operation, index) => {
            console.log(`${index + 1}. ${operation.type} de ${operation.montant}€ - Solde: ${operation.soldeFinal}€`);
        });
    }
}

// Test
let monCompte = new CompteBancaire("FR001", "Jean Dupont", 1000);
monCompte.afficherSolde();
monCompte.deposer(500);
monCompte.retirer(200);
monCompte.calculerInterets(2);
monCompte.afficherHistorique();
```

---

## 9. Manipulation du DOM

### Sélection d'éléments

```javascript
// Sélection par ID
let titre = document.getElementById("monTitre");

// Sélection par classe
let elements = document.getElementsByClassName("maClasse");
let premierElement = document.querySelector(".maClasse");
let tousElements = document.querySelectorAll(".maClasse");

// Sélection par balise
let paragraphes = document.getElementsByTagName("p");

// Sélecteurs CSS avancés
let lien = document.querySelector("a[href^='https']");
let dernierLi = document.querySelector("ul li:last-child");
```

### Modification du contenu

```javascript
// Modification du texte
let titre = document.getElementById("titre");
titre.textContent = "Nouveau titre";
titre.innerHTML = "<strong>Titre en gras</strong>";

// Modification des attributs
let image = document.querySelector("img");
image.src = "nouvelle-image.jpg";
image.alt = "Description de la nouvelle image";
image.setAttribute("data-id", "123");

// Modification du style
titre.style.color = "blue";
titre.style.fontSize = "24px";
titre.style.backgroundColor = "#f0f0f0";
```

### Gestion des classes CSS

```javascript
let element = document.querySelector(".monElement");

// Ajouter une classe
element.classList.add("nouvelle-classe");

// Supprimer une classe
element.classList.remove("ancienne-classe");

// Basculer une classe
element.classList.toggle("active");

// Vérifier si une classe existe
if (element.classList.contains("active")) {
    console.log("L'élément est actif");
}
```

### Création et suppression d'éléments

```javascript
// Créer un nouvel élément
let nouveauParagraphe = document.createElement("p");
nouveauParagraphe.textContent = "Nouveau paragraphe";
nouveauParagraphe.className = "nouveau";

// Ajouter l'élément au DOM
let conteneur = document.getElementById("conteneur");
conteneur.appendChild(nouveauParagraphe);

// Insérer avant un autre élément
let premierP = conteneur.querySelector("p");
conteneur.insertBefore(nouveauParagraphe, premierP);

// Supprimer un élément
let elementASupprimer = document.querySelector(".aSupprimer");
elementASupprimer.remove(); // Méthode moderne
// ou elementASupprimer.parentNode.removeChild(elementASupprimer); // Ancienne méthode

// Remplacer un élément
let ancienElement = document.querySelector(".ancien");
let nouveauElement = document.createElement("div");
nouveauElement.textContent = "Nouvel élément";
ancienElement.parentNode.replaceChild(nouveauElement, ancienElement);
```

### Navigation dans le DOM

```javascript
let element = document.querySelector("#monElement");

// Navigation
let parent = element.parentElement;
let enfants = element.children;
let premierEnfant = element.firstElementChild;
let dernierEnfant = element.lastElementChild;
let suivant = element.nextElementSibling;
let precedent = element.previousElementSibling;

// Parcourir tous les enfants
for (let enfant of element.children) {
    console.log(enfant.tagName);
}
```

### **Exercice 7 : Manipulation DOM**
Créez une page avec :
1. Un bouton qui change la couleur de fond aléatoirement
2. Une liste où on peut ajouter des éléments
3. Un compteur qui s'incrémente au clic

**Correction Exercice 7 :**
```html
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Exercice DOM</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            padding: 20px;
            transition: background-color 0.3s;
        }
        .container {
            max-width: 600px;
            margin: 0 auto;
        }
        button {
            padding: 10px 20px;
            margin: 10px;
            cursor: pointer;
            border: none;
            border-radius: 5px;
            font-size: 16px;
        }
        .btn-couleur {
            background-color: #3498db;
            color: white;
        }
        .btn-ajouter {
            background-color: #2ecc71;
            color: white;
        }
        .compteur {
            font-size: 24px;
            font-weight: bold;
            margin: 20px 0;
        }
        ul {
            background-color: #f8f9fa;
            padding: 20px;
            border-radius: 5px;
        }
        li {
            margin: 5px 0;
            padding: 5px;
            background-color: white;
            border-radius: 3px;
        }
        input {
            padding: 8px;
            margin: 5px;
            border: 1px solid #ddd;
            border-radius: 3px;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Exercice de Manipulation DOM</h1>
        
        <!-- 1. Bouton changeur de couleur -->
        <section>
            <h2>1. Changeur de couleur de fond</h2>
            <button id="btnCouleur" class="btn-couleur">Changer la couleur de fond</button>
        </section>
        
        <!-- 2. Liste dynamique -->
        <section>
            <h2>2. Liste dynamique</h2>
            <input type="text" id="inputTexte" placeholder="Entrez un élément">
            <button id="btnAjouter" class="btn-ajouter">Ajouter à la liste</button>
            <ul id="listeDynamique">
                <li>Élément d'exemple (cliquez pour supprimer)</li>
            </ul>
        </section>
        
        <!-- 3. Compteur -->
        <section>
            <h2>3. Compteur</h2>
            <div class="compteur">
                Compteur : <span id="valeurCompteur">0</span>
            </div>
            <button id="btnIncrementer">+1</button>
            <button id="btnDecrementer">-1</button>
            <button id="btnReset">Reset</button>
        </section>
    </div>

    <script>
        // 1. Changeur de couleur de fond
        document.getElementById('btnCouleur').addEventListener('click', function() {
            // Génération d'une couleur aléatoire
            const couleurs = [
                '#ffb3ba', '#ffdfba', '#ffffba', '#baffc9', 
                '#bae1ff', '#d4baff', '#ffbaed', '#c9ffba',
                '#ffc9ba', '#bafff5'
            ];
            
            let couleurAleatoire = couleurs[Math.floor(Math.random() * couleurs.length)];
            document.body.style.backgroundColor = couleurAleatoire;
        });

        // 2. Liste dynamique
        const inputTexte = document.getElementById('inputTexte');
        const btnAjouter = document.getElementById('btnAjouter');
        const liste = document.getElementById('listeDynamique');

        function ajouterElement() {
            const texte = inputTexte.value.trim();
            if (texte === '') {
                alert('Veuillez entrer un texte !');
                return;
            }

            // Créer un nouvel élément de liste
            const nouvelLi = document.createElement('li');
            nouvelLi.textContent = texte;
            
            // Ajouter un gestionnaire pour la suppression
            nouvelLi.addEventListener('click', function() {
                if (confirm('Voulez-vous supprimer cet élément ?')) {
                    nouvelLi.remove();
                }
            });

            // Ajouter à la liste
            liste.appendChild(nouvelLi);
            
            // Vider l'input
            inputTexte.value = '';
        }

        btnAjouter.addEventListener('click', ajouterElement);

        // Permettre l'ajout avec la touche Entrée
        inputTexte.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                ajouterElement();
            }
        });

        // Ajouter la fonctionnalité de suppression à l'élément d'exemple
        liste.firstElementChild.addEventListener('click', function() {
            if (confirm('Voulez-vous supprimer cet élément ?')) {
                this.remove();
            }
        });

        // 3. Compteur
        let compteur = 0;
        const affichageCompteur = document.getElementById('valeurCompteur');
        const btnIncrementer = document.getElementById('btnIncrementer');
        const btnDecrementer = document.getElementById('btnDecrementer');
        const btnReset = document.getElementById('btnReset');

        function mettreAJourCompteur() {
            affichageCompteur.textContent = compteur;
            
            // Changer la couleur selon la valeur
            if (compteur > 0) {
                affichageCompteur.style.color = 'green';
            } else if (compteur < 0) {
                affichageCompteur.style.color = 'red';
            } else {
                affichageCompteur.style.color = 'black';
            }
        }

        btnIncrementer.addEventListener('click', function() {
            compteur++;
            mettreAJourCompteur();
        });

        btnDecrementer.addEventListener('click', function() {
            compteur--;
            mettreAJourCompteur();
        });

        btnReset.addEventListener('click', function() {
            compteur = 0;
            mettreAJourCompteur();
        });
    </script>
</body>
</html>
```

---

## 10. Événements

### Types d'événements courants

```javascript
// Événements de souris
element.addEventListener('click', function(e) {
    console.log('Clic détecté');
});

element.addEventListener('mouseover', function(e) {
    console.log('Souris sur l\'élément');
});

element.addEventListener('mouseout', function(e) {
    console.log('Souris hors de l\'élément');
});

// Événements de clavier
document.addEventListener('keydown', function(e) {
    console.log('Touche pressée:', e.key);
});

document.addEventListener('keyup', function(e) {
    console.log('Touche relâchée:', e.key);
});

// Événements de formulaire
let formulaire = document.querySelector('form');
formulaire.addEventListener('submit', function(e) {
    e.preventDefault(); // Empêche l'envoi par défaut
    console.log('Formulaire soumis');
});

let input = document.querySelector('input');
input.addEventListener('change', function(e) {
    console.log('Valeur changée:', e.target.value);
});

input.addEventListener('input', function(e) {
    console.log('Saisie en cours:', e.target.value);
});
```

### Objet Event

```javascript
button.addEventListener('click', function(event) {
    console.log('Type d\'événement:', event.type);
    console.log('Élément cible:', event.target);
    console.log('Position X:', event.clientX);
    console.log('Position Y:', event.clientY);
    
    // Empêcher le comportement par défaut
    event.preventDefault();
    
    // Arrêter la propagation
    event.stopPropagation();
});
```

### Propagation d'événements

```javascript
// HTML: <div id="parent"><button id="enfant">Cliquez</button></div>

let parent = document.getElementById('parent');
let enfant = document.getElementById('enfant');

parent.addEventListener('click', function() {
    console.log('Clic sur le parent');
});

enfant.addEventListener('click', function(e) {
    console.log('Clic sur l\'enfant');
    // e.stopPropagation(); // Décommentez pour arrêter la propagation
});
```

### Délégation d'événements

```javascript
// Au lieu d'attacher un événement à chaque élément de liste
let liste = document.querySelector('ul');

liste.addEventListener('click', function(e) {
    if (e.target.tagName === 'LI') {
        console.log('Élément de liste cliqué:', e.target.textContent);
        e.target.classList.toggle('selected');
    }
});
```

### Gestionnaires d'événements multiples

```javascript
function gestionnaireClick1() {
    console.log('Premier gestionnaire');
}

function gestionnaireClick2() {
    console.log('Deuxième gestionnaire');
}

// Ajouter plusieurs gestionnaires
button.addEventListener('click', gestionnaireClick1);
button.addEventListener('click', gestionnaireClick2);

// Supprimer un gestionnaire
button.removeEventListener('click', gestionnaireClick1);
```

### **Exercice 8 : Événements**
Créez une galerie d'images interactive avec :
1. Navigation avec les flèches du clavier
2. Clic pour agrandir/réduire
3. Affichage d'informations au survol

**Correction Exercice 8 :**
```html
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Galerie Interactive</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 20px;
            background-color: #1a1a1a;
            color: white;
        }
        .galerie-container {
            max-width: 800px;
            margin: 0 auto;
            text-align: center;
        }
        .image-principale {
            position: relative;
            margin: 20px 0;
        }
        .image-principale img {
            max-width: 100%;
            max-height: 500px;
            cursor: pointer;
            transition: transform 0.3s;
            border-radius: 10px;
            box-shadow: 0 4px 20px rgba(255,255,255,0.1);
        }
        .image-principale img.agrandie {
            transform: scale(1.5);
            z-index: 10;
            position: relative;
        }
        .info-image {
            position: absolute;
            bottom: -40px;
            left: 50%;
            transform: translateX(-50%);
            background-color: rgba(0,0,0,0.8);
            padding: 10px 20px;
            border-radius: 5px;
            opacity: 0;
            transition: opacity 0.3s;
        }
        .info-image.visible {
            opacity: 1;
        }
        .miniatures {
            display: flex;
            justify-content: center;
            gap: 10px;
            margin: 20px 0;
            flex-wrap: wrap;
        }
        .miniature {
            width: 80px;
            height: 80px;
            object-fit: cover;
            cursor: pointer;
            border: 2px solid transparent;
            border-radius: 5px;
            transition: border-color 0.3s, transform 0.2s;
        }
        .miniature:hover {
            transform: scale(1.1);
        }
        .miniature.active {
            border-color: #3498db;
        }
        .controles {
            margin: 20px 0;
        }
        .btn {
            background-color: #3498db;
            color: white;
            border: none;
            padding: 10px 20px;
            margin: 0 10px;
            border-radius: 5px;
            cursor: pointer;
            font-size: 16px;
        }
        .btn:hover {
            background-color: #2980b9;
        }
        .instructions {
            background-color: rgba(255,255,255,0.1);
            padding: 15px;
            border-radius: 5px;
            margin: 20px 0;
        }
        .compteur {
            font-size: 18px;
            margin: 10px 0;
        }
    </style>
</head>
<body>
    <div class="galerie-container">
        <h1>Galerie Interactive</h1>
        
        <div class="instructions">
            <strong>Instructions :</strong><br>
            • Utilisez les flèches ← → pour naviguer<br>
            • Cliquez sur l'image pour l'agrandir/réduire<br>
            • Survolez l'image pour voir les informations
        </div>

        <div class="compteur">
            Image <span id="numeroActuel">1</span> sur <span id="totalImages">5</span>
        </div>

        <div class="image-principale">
            <img id="imagePrincipale" src="https://picsum.photos/600/400?random=1" alt="Image 1">
            <div class="info-image" id="infoImage">
                <div id="titreImage">Image de paysage</div>
                <div id="descriptionImage">Belle vue panoramique</div>
            </div>
        </div>

        <div class="controles">
            <button class="btn" id="btnPrecedent">← Précédent</button>
            <button class="btn" id="btnSuivant">Suivant →</button>
        </div>

        <div class="miniatures" id="miniatures">
            <!-- Les miniatures seront générées par JavaScript -->
        </div>
    </div>

    <script>
        // Données des images
        const images = [
            {
                src: "https://picsum.photos/600/400?random=1",
                titre: "Paysage montagneux",
                description: "Vue panoramique sur les montagnes"
            },
            {
                src: "https://picsum.photos/600/400?random=2",
                titre: "Forêt mystérieuse",
                description: "Sentier dans une forêt dense"
            },
            {
                src: "https://picsum.photos/600/400?random=3",
                titre: "Coucher de soleil",
                description: "Magnifique coucher de soleil sur l'océan"
            },
            {
                src: "https://picsum.photos/600/400?random=4",
                titre: "Architecture moderne",
                description: "Bâtiment au design contemporain"
            },
            {
                src: "https://picsum.photos/600/400?random=5",
                titre: "Nature sauvage",
                description: "Faune et flore dans leur habitat naturel"
            }
        ];

        // Variables globales
        let indexActuel = 0;
        let imageAgrandie = false;

        // Éléments DOM
        const imagePrincipale = document.getElementById('imagePrincipale');
        const infoImage = document.getElementById('infoImage');
        const titreImage = document.getElementById('titreImage');
        const descriptionImage = document.getElementById('descriptionImage');
        const numeroActuel = document.getElementById('numeroActuel');
        const totalImages = document.getElementById('totalImages');
        const miniatures = document.getElementById('miniatures');
        const btnPrecedent = document.getElementById('btnPrecedent');
        const btnSuivant = document.getElementById('btnSuivant');

        // Initialisation
        function initialiser() {
            totalImages.textContent = images.length;
            creerMiniatures();
            afficherImage(0);
        }

        // Créer les miniatures
        function creerMiniatures() {
            miniatures.innerHTML = '';
            images.forEach((image, index) => {
                const img = document.createElement('img');
                img.src = image.src;
                img.alt = image.titre;
                img.className = 'miniature';
                img.addEventListener('click', () => afficherImage(index));
                miniatures.appendChild(img);
            });
        }

        // Afficher une image
        function afficherImage(index) {
            if (index < 0 || index >= images.length) return;
            
            indexActuel = index;
            const image = images[index];
            
            // Mettre à jour l'image principale
            imagePrincipale.src = image.src;
            imagePrincipale.alt = image.titre;
            
            // Mettre à jour les informations
            titreImage.textContent = image.titre;
            descriptionImage.textContent = image.description;
            
            // Mettre à jour le compteur
            numeroActuel.textContent = index + 1;
            
            // Mettre à jour les miniatures
            document.querySelectorAll('.miniature').forEach((mini, i) => {
                mini.classList.toggle('active', i === index);
            });
            
            // Réinitialiser l'agrandissement
            if (imageAgrandie) {
                imagePrincipale.classList.remove('agrandie');
                imageAgrandie = false;
            }
        }

        // Navigation
        function imagePrecedente() {
            const nouvelIndex = indexActuel > 0 ? indexActuel - 1 : images.length - 1;
            afficherImage(nouvelIndex);
        }

        function imageSuivante() {
            const nouvelIndex = indexActuel < images.length - 1 ? indexActuel + 1 : 0;
            afficherImage(nouvelIndex);
        }

        // Gestionnaires d'événements

        // Boutons de navigation
        btnPrecedent.addEventListener('click', imagePrecedente);
        btnSuivant.addEventListener('click', imageSuivante);

        // Navigation au clavier
        document.addEventListener('keydown', function(e) {
            switch(e.key) {
                case 'ArrowLeft':
                    e.preventDefault();
                    imagePrecedente();
                    break;
                case 'ArrowRight':
                    e.preventDefault();
                    imageSuivante();
                    break;
                case 'Escape':
                    if (imageAgrandie) {
                        imagePrincipale.classList.remove('agrandie');
                        imageAgrandie = false;
                    }
                    break;
            }
        });

        // Clic pour agrandir/réduire
        imagePrincipale.addEventListener('click', function() {
            imageAgrandie = !imageAgrandie;
            imagePrincipale.classList.toggle('agrandie', imageAgrandie);
        });

        // Survol pour afficher les informations
        imagePrincipale.addEventListener('mouseenter', function() {
            infoImage.classList.add('visible');
        });

        imagePrincipale.addEventListener('mouseleave', function() {
            infoImage.classList.remove('visible');
        });

        // Initialiser la galerie
        initialiser();
    </script>
</body>
</html>
```

---

## 11. Projet Final - Todo List Interactive

### Cahier des charges
Créez une application Todo List complète avec les fonctionnalités suivantes :
- Ajouter des tâches
- Marquer comme terminées
- Supprimer des tâches
- Filtrer par statut
- Compter les tâches
- Sauvegarde locale
- Interface responsive

### **Projet Final - Code complet :**

```html
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Todo List Interactive</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            min-height: 100vh;
            padding: 20px;
        }
        
        .container {
            max-width: 600px;
            margin: 0 auto;
            background: white;
            border-radius: 15px;
            box-shadow: 0 15px 35px rgba(0,0,0,0.2);
            overflow: hidden;
        }
        
        .header {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 30px;
            text-align: center;
        }
        
        .header h1 {
            font-size: 2.5em;
            margin-bottom: 10px;
        }
        
        .stats {
            display: flex;
            justify-content: space-around;
            margin-top: 20px;
        }
        
        .stat {
            text-align: center;
        }
        
        .stat-number {
            font-size: 1.5em;
            font-weight: bold;
        }
        
        .input-section {
            padding: 30px;
            border-bottom: 1px solid #eee;
        }
        
        .input-container {
            display: flex;
            gap: 10px;
        }
        
        .task-input {
            flex: 1;
            padding: 15px;
            border: 2px solid #ddd;
            border-radius: 10px;
            font-size: 16px;
            outline: none;
            transition: border-color 0.3s;
        }
        
        .task-input:focus {
            border-color: #667eea;
        }
        
        .add-btn {
            padding: 15px 30px;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            border: none;
            border-radius: 10px;
            cursor: pointer;
            font-size: 16px;
            font-weight: bold;
            transition: transform 0.2s;
        }
        
        .add-btn:hover {
            transform: translateY(-2px);
        }
        
        .filters {
            padding: 20px 30px;
            display: flex;
            justify-content: center;
            gap: 10px;
            border-bottom: 1px solid #eee;
        }
        
        .filter-btn {
            padding: 10px 20px;
            border: 2px solid #ddd;
            background: white;
            border-radius: 25px;
            cursor: pointer;
            transition: all 0.3s;
        }
        
        .filter-btn.active {
            background: #667eea;
            color: white;
            border-color: #667eea;
        }
        
        .tasks-section {
            max-height: 400px;
            overflow-y: auto;
        }
        
        .task-item {
            display: flex;
            align-items: center;
            padding: 20px 30px;
            border-bottom: 1px solid #eee;
            transition: background-color 0.3s;
            animation: slideIn 0.3s ease-out;
        }
        
        .task-item:hover {
            background-color: #f8f9fa;
        }
        
        .task-item.completed {
            opacity: 0.6;
        }
        
        .task-checkbox {
            margin-right: 15px;
            transform: scale(1.2);
            cursor: pointer;
        }
        
        .task-text {
            flex: 1;
            font-size: 16px;
            transition: all 0.3s;
        }
        
        .task-text.completed {
            text-decoration: line-through;
            color: #888;
        }
        
        .task-date {
            font-size: 12px;
            color: #888;
            margin-right: 15px;
        }
        
        .delete-btn {
            background: #e74c3c;
            color: white;
            border: none;
            padding: 8px 12px;
            border-radius: 5px;
            cursor: pointer;
            transition: background-color 0.3s;
        }
        
        .delete-btn:hover {
            background: #c0392b;
        }
        
        .empty-state {
            text-align: center;
            padding: 50px;
            color: #888;
        }
        
        .empty-state img {
            width: 100px;
            opacity: 0.3;
            margin-bottom: 20px;
        }
        
        @keyframes slideIn {
            from {
                opacity: 0;
                transform: translateX(-20px);
            }
            to {
                opacity: 1;
                transform: translateX(0);
            }
        }
        
        @media (max-width: 600px) {
            .input-container {
                flex-direction: column;
            }
            
            .filters {
                flex-wrap: wrap;
            }
            
            .stat {
                font-size: 0.9em;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>📝 Ma Todo List</h1>
            <div class="stats">
                <div class="stat">
                    <div class="stat-number" id="totalTasks">0</div>
                    <div>Total</div>
                </div>
                <div class="stat">
                    <div class="stat-number" id="completedTasks">0</div>
                    <div>Terminées</div>
                </div>
                <div class="stat">
                    <div class="stat-number" id="pendingTasks">0</div>
                    <div>En cours</div>
                </div>
            </div>
        </div>
        
        <div class="input-section">
            <div class="input-container">
                <input 
                    type="text" 
                    class="task-input" 
                    id="taskInput" 
                    placeholder="Ajouter une nouvelle tâche..."
                    maxlength="100"
                >
                <button class="add-btn" id="addBtn">Ajouter</button>
            </div>
        </div>
        
        <div class="filters">
            <button class="filter-btn active" data-filter="all">Toutes</button>
            <button class="filter-btn" data-filter="pending">En cours</button>
            <button class="filter-btn" data-filter="completed">Terminées</button>
        </div>
        
        <div class="tasks-section" id="tasksSection">
            <!-- Les tâches seront ajoutées ici -->
        </div>
    </div>

    <script>
        class TodoApp {
            constructor() {
                this.tasks = this.loadTasks();
                this.currentFilter = 'all';
                this.initializeElements();
                this.attachEventListeners();
                this.render();
            }
            
            initializeElements() {
                this.taskInput = document.getElementById('taskInput');
                this.addBtn = document.getElementById('addBtn');
                this.tasksSection = document.getElementById('tasksSection');
                this.totalTasks = document.getElementById('totalTasks');
                this.completedTasks = document.getElementById('completedTasks');
                this.pendingTasks = document.getElementById('pendingTasks');
                this.filterBtns = document.querySelectorAll('.filter-btn');
            }
            
            attachEventListeners() {
                // Ajouter une tâche
                this.addBtn.addEventListener('click', () => this.addTask());
                this.taskInput.addEventListener('keypress', (e) => {
                    if (e.key === 'Enter') this.addTask();
                });
                
                // Filtres
                this.filterBtns.forEach(btn => {
                    btn.addEventListener('click', (e) => {
                        this.currentFilter = e.target.dataset.filter;
                        this.updateFilterButtons();
                        this.render();
                    });
                });
            }
            
            addTask() {
                const text = this.taskInput.value.trim();
                if (!text) {
                    this.showNotification('Veuillez entrer une tâche !', 'error');
                    return;
                }
                
                const task = {
                    id: Date.now(),
                    text: text,
                    completed: false,
                    createdAt: new Date().toLocaleString('fr-FR')
                };
                
                this.tasks.unshift(task);
                this.saveTasks();
                this.taskInput.value = '';
                this.render();
                this.showNotification('Tâche ajoutée avec succès !', 'success');
            }
            
            toggleTask(id) {
                const task = this.tasks.find(t => t.id === id);
                if (task) {
                    task.completed = !task.completed;
                    this.saveTasks();
                    this.render();
                    
                    const message = task.completed ? 'Tâche terminée !' : 'Tâche remise en cours !';
                    this.showNotification(message, 'info');
                }
            }
            
            deleteTask(id) {
                if (confirm('Êtes-vous sûr de vouloir supprimer cette tâche ?')) {
                    this.tasks = this.tasks.filter(t => t.id !== id);
                    this.saveTasks();
                    this.render();
                    this.showNotification('Tâche supprimée !', 'info');
                }
            }
            
            getFilteredTasks() {
                switch (this.currentFilter) {
                    case 'completed':
                        return this.tasks.filter(task => task.completed);
                    case 'pending':
                        return this.tasks.filter(task => !task.completed);
                    default:
                        return this.tasks;
                }
            }
            
            render() {
                this.updateStats();
                this.renderTasks();
            }
            
            updateStats() {
                const total = this.tasks.length;
                const completed = this.tasks.filter(t => t.completed).length;
                const pending = total - completed;
                
                this.totalTasks.textContent = total;
                this.completedTasks.textContent = completed;
                this.pendingTasks.textContent = pending;
            }
            
            renderTasks() {
                const filteredTasks = this.getFilteredTasks();
                
                if (filteredTasks.length === 0) {
                    this.renderEmptyState();
                    return;
                }
                
                this.tasksSection.innerHTML = '';
                
                filteredTasks.forEach(task => {
                    const taskElement = this.createTaskElement(task);
                    this.tasksSection.appendChild(taskElement);
                });
            }
            
            createTaskElement(task) {
                const taskItem = document.createElement('div');
                taskItem.className = `task-item ${task.completed ? 'completed' : ''}`;
                
                taskItem.innerHTML = `
                    <input 
                        type="checkbox" 
                        class="task-checkbox" 
                        ${task.completed ? 'checked' : ''}
                        data-id="${task.id}"
                    >
                    <div class="task-text ${task.completed ? 'completed' : ''}">${task.text}</div>
                    <div class="task-date">${task.createdAt}</div>
                    <button class="delete-btn" data-id="${task.id}">🗑️</button>
                `;
                
                // Gestionnaire pour le checkbox
                const checkbox = taskItem.querySelector('.task-checkbox');
                checkbox.addEventListener('change', () => {
                    this.toggleTask(task.id);
                });
                
                // Gestionnaire pour le bouton supprimer
                const deleteBtn = taskItem.querySelector('.delete-btn');
                deleteBtn.addEventListener('click', () => {
                    this.deleteTask(task.id);
                });
                
                return taskItem;
            }
            
            renderEmptyState() {
                const emptyMessages = {
                    all: 'Aucune tâche pour le moment. Ajoutez-en une !',
                    pending: 'Aucune tâche en cours. Bien joué ! 🎉',
                    completed: 'Aucune tâche terminée pour le moment.'
                };
                
                this.tasksSection.innerHTML = `
                    <div class="empty-state">
                        <div style="font-size: 48px; margin-bottom: 20px;">📋</div>
                        <h3>${emptyMessages[this.currentFilter]}</h3>
                    </div>
                `;
            }
            
            updateFilterButtons() {
                this.filterBtns.forEach(btn => {
                    btn.classList.remove('active');
                    if (btn.dataset.filter === this.currentFilter) {
                        btn.classList.add('active');
                    }
                });
            }
            
            showNotification(message, type) {
                // Créer l'élément de notification
                const notification = document.createElement('div');
                notification.style.cssText = `
                    position: fixed;
                    top: 20px;
                    right: 20px;
                    padding: 15px 25px;
                    border-radius: 5px;
                    color: white;
                    font-weight: bold;
                    z-index: 1000;
                    animation: slideInRight 0.3s ease-out;
                    max-width: 300px;
                `;
                
                // Couleurs selon le type
                const colors = {
                    success: '#27ae60',
                    error: '#e74c3c',
                    info: '#3498db'
                };
                
                notification.style.backgroundColor = colors[type] || colors.info;
                notification.textContent = message;
                
                // Ajouter l'animation CSS
                const style = document.createElement('style');
                style.textContent = `
                    @keyframes slideInRight {
                        from {
                            transform: translateX(100%);
                            opacity: 0;
                        }
                        to {
                            transform: translateX(0);
                            opacity: 1;
                        }
                    }
                `;
                document.head.appendChild(style);
                
                document.body.appendChild(notification);
                
                // Supprimer après 3 secondes
                setTimeout(() => {
                    notification.remove();
                    style.remove();
                }, 3000);
            }
            
            saveTasks() {
                localStorage.setItem('todoTasks', JSON.stringify(this.tasks));
            }
            
            loadTasks() {
                const saved = localStorage.getItem('todoTasks');
                return saved ? JSON.parse(saved) : [];
            }
        }
        
        // Initialiser l'application
        document.addEventListener('DOMContentLoaded', () => {
            new TodoApp();
        });
    </script>
</body>
</html>
```

---

## Exercices de Révision et Tests de Compréhension

### Test 1 : Variables et Fonctions
```javascript
// Complétez ces fonctions

// 1. Fonction qui retourne le plus grand de deux nombres
function max(a, b) {
    // Votre code ici
}

// 2. Fonction qui compte les voyelles dans une chaîne
function compterVoyelles(texte) {
    // Votre code ici
}

// 3. Fonction qui inverse une chaîne
function inverserChaine(str) {
    // Votre code ici
}
```

### Test 2 : Tableaux et Objets
```javascript
// Soit le tableau d'objets suivant :
const etudiants = [
    { nom: "Alice", notes: [15, 12, 18] },
    { nom: "Bob", notes: [10, 14, 16] },
    { nom: "Charlie", notes: [18, 17, 19] }
];

// 1. Calculez la moyenne de chaque étudiant
// 2. Trouvez l'étudiant avec la meilleure moyenne
// 3. Créez un nouveau tableau avec les noms et moyennes
```

### Test 3 : DOM et Événements
Créez une page qui :
1. Change la couleur d'un texte au clic
2. Affiche la position de la souris en temps réel
3. Compte le nombre de caractères dans un textarea

---

## Corrections des Tests

### Correction Test 1 :
```javascript
// 1. Plus grand de deux nombres
function max(a, b) {
    return a > b ? a : b;
}

// 2. Compter les voyelles
function compterVoyelles(texte) {
    const voyelles = 'aeiouAEIOU';
    let compteur = 0;
    for (let char of texte) {
        if (voyelles.includes(char)) {
            compteur++;
        }
    }
    return compteur;
}

// 3. Inverser une chaîne
function inverserChaine(str) {
    return str.split('').reverse().join('');
}
```

### Correction Test 2 :
```javascript
const etudiants = [
    { nom: "Alice", notes: [15, 12, 18] },
    { nom: "Bob", notes: [10, 14, 16] },
    { nom: "Charlie", notes: [18, 17, 19] }
];

// 1. Calculer la moyenne de chaque étudiant
function calculerMoyenne(notes) {
    return notes.reduce((sum, note) => sum + note, 0) / notes.length;
}

// 2. Ajouter la moyenne à chaque étudiant
const etudiantsAvecMoyennes = etudiants.map(etudiant => ({
    ...etudiant,
    moyenne: calculerMoyenne(etudiant.notes)
}));

// 3. Trouver le meilleur étudiant
const meilleurEtudiant = etudiantsAvecMoyennes.reduce((meilleur, actuel) => 
    actuel.moyenne > meilleur.moyenne ? actuel : meilleur
);

console.log("Étudiant avec la meilleure moyenne:", meilleurEtudiant);

// 4. Tableau des noms et moyennes
const nomsEtMoyennes = etudiantsAvecMoyennes.map(etudiant => ({
    nom: etudiant.nom,
    moyenne: etudiant.moyenne.toFixed(2)
}));

console.log(nomsEtMoyennes);
```

---

## Ressources pour Aller Plus Loin

### Documentation et Références
- **MDN Web Docs** : La référence officielle pour JavaScript
- **JavaScript.info** : Tutoriel moderne et complet
- **W3Schools** : Exemples pratiques et référence rapide

### Concepts Avancés à Explorer
1. **Programmation Asynchrone** : Promises, async/await
2. **Modules ES6** : import/export
3. **Programmation Orientée Objet** : Classes avancées, héritage
4. **API Web** : Fetch, LocalStorage, Geolocation
5. **Frameworks** : React, Vue.js, Angular

### Bonnes Pratiques
1. Utilisez des noms de variables explicites
2. Commentez votre code
3. Gérez les erreurs avec try/catch
4. Validez les données utilisateur
5. Optimisez les performances
6. Respectez les standards de codage

### Exercices Pratiques Supplémentaires
1. Créez un calculateur
2. Développez un jeu de morpion
3. Implémentez un système de pagination
4. Créez une horloge digitale
5. Développez un générateur de QR codes

---

## Conclusion

Félicitations ! Vous avez maintenant une base solide en JavaScript. Ce langage vous permettra de créer des sites web interactifs et dynamiques. 

**Points clés à retenir :**
- JavaScript ajoute l'interactivité à vos pages web
- La manipulation du DOM permet de modifier la page en temps réel
- Les événements permettent de réagir aux actions de l'utilisateur
- Les fonctions permettent d'organiser et de réutiliser votre code
- Les objets et tableaux structurent vos données

**Prochaines étapes :**
1. Pratiquez régulièrement avec de petits projets
2. Explorez les API JavaScript modernes
3. Apprenez un framework JavaScript (React, Vue.js)
4. Découvrez Node.js pour le développement backend

Continuez à coder, expérimentez, et n'hésitez pas à consulter la documentation quand vous avez des questions. Le développement web est un domaine en constante évolution, restez curieux et continuez d'apprendre !