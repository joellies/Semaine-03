// Exercice 1: ajoute "Ted" au tableau suivant

let castArray = ['Robin', 'Barney', 'Lily', 'Marshal'];
console.log(castArray.push('Ted'));
console.log(castArray);

// Exercice 2: Affiche l'index de "Ted" dans le tableau dans la console
let tedIndex = castArray.findIndex(element => element === 'Ted');
console.log(tedIndex);

// Exercice 3: Affiche l'index de Robin dans le tableau dans la console
let robinIndex = castArray.findIndex(element => element === 'Robin');
console.log(robinIndex);

// Exercice 4: retire "Robin" du tableau
console.log(castArray.shift('Robin'));
console.log(castArray);

// Exercice 5: retire "Ted" du tableau
console.log(castArray.pop('Ted'));
console.log(castArray);

// Exercice 6: ajoute "Ted" et "Robin" au tableau
console.log(castArray.push('Ted', 'Robin'));
console.log(castArray);

// Exercice 7: Affiche le nouvel index de Ted et Robin dans le tableau dans la console
let newTedIndex = castArray.findIndex(element => element === 'Ted');
console.log(newTedIndex);
let newRobinIndex = castArray.findIndex(element => element === 'Robin');
console.log(newRobinIndex);

// Exercice 8: à l'aide d'une boucle (forEach, console.log element), affiche chaque élément du tableau dans la console
castArray.forEach(element => {
  console.log(element);
});
// Exercice 9: à l'aide de la méthode .findIndex(), trouve l'index de Lily, ensuite, affiche Lily dans la console
let indexLily = castArray.findIndex(element => element === 'Lily');
console.log(indexLily);
console.log(castArray[1]);

// Exercice 10: à l'aide d'une boucle, multiplie par 2 chaque élément du tableau suivant, crée un nouveau tableau à l'aide de la méthode .push(), affiche le nouveau tableau dans la console
//faire un forEach et push

let multiplicationArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//Déclarer le nouveau tableau avant de faire la multiplication
let multiplicationByTwoArray = [];

multiplicationArray.forEach(element => {
  let result = element * 2;
  console.log(result); // On aurait pu mettre aussi console.log(element*2)
  //Pousser le résultat dans le forEach
  multiplicationByTwoArray.push(result);
});
console.log(multiplicationByTwoArray);
