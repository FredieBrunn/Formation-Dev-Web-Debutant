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