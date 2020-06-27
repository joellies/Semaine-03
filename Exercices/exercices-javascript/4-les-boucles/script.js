// Exercice 1: A l'aide d'une boucle, affiche les chiffres de 0 à 100, place les chiffres dans un tableau que tu nommeras fizzBuzzArray, à l'aide de la méthode .push()
// Boucle for de 0 à 100 qui s'auto incremente de 1 qui se pousse dans le tableau

const fizzBuzzArray = [];
for (let i = 0; i <= 100; i++) {
  console.log(i);
  fizzBuzzArray.push(i);
}
console.log(fizzBuzzArray);

// Exercice 2: Toujours à l'aide d'une boucle, passe sur chaque élément du tableau que tu viens de créer (fizzBuzzArray), si l'élément est divisible par trois affiche "fizz" dans la console, si l'élément est divisible par cinq affiche "buzz", si il est divisible par trois et par cinq affiche "fizzBuzz"
//boucle foreach

fizzBuzzArray.forEach(element => {
  if (element / 3) {
    console.log('fizz');
  }
  if (element / 5) {
    console.log('fizzBuzz');
  }
  if (element / 3 && element / 5) {
    console.log('fizzBuzz');
  }
});

// Exercice 3: A l'aide de l'objet Date (voir: https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Date) affiche tous les vendredi 13 de l'année 2020
// exercice bonus
// 1 boucle pour passer chaque mois de l'année, et une condition if else si vendredi = 13, console.log
