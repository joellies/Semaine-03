// Exercice 1: affiche Hello World dans une boite de dialogue alert();

//window.alert('Hello World');

// Exercice 2: Place ton code précédent en commentaire, dans un prompt, demande son prénom à l'utilisateur, ensuite, à l'aide d'un alert() affiche "Salut" + le prénom de l'utilisateur

//let whatsYourName = prompt("Comment t'appelles tu?", 'ex: Joéllie');
//window.alert('Salut' + ' ' + whatsYourName);

// Exercice 3: Place ton code précédent en commentaire. Dans un prompt, demande son âge à l'utilisateur, ensuite, à l'aide d'un .confirm() vérifie si l'âge de l'utilisateur est bien supérieur à 18 ans, si oui, demande à l'utilisateur de confirmer son âge et affiche "Bienvenue" dans une alert()

let howOldAreYou = prompt('Quel est ton âge ?', 'ex: 30 ans');
parseInt(howOldAreYou, 10);
console.log(howOldAreYou);
if (howOldAreYou > 18) {
  window.confirm('Merci de confirmer que tu as bien plus de 18 ans');
  window.alert('Bienvenue !');
} else {
  window.alert("Tu n'as pas l'âge requis");
}
