document.getElementById('lastname').addEventListener('keyup',function() {
  var lastname = document.getElementById('lastname').value;
  alert(`Vous venez de presser la touche ${lastname}.`);
});

//Méthode des "vieux, mais pas trop"
// document.getElementById('lastname').onkeyup=function() {
//   var lastname = document.getElementById('lastname').value;
//   alert(`Vous venez de presser la touche ${lastname}.`);
// };

//Fonction flêchée
// document.getElementById('lastname').onkeyup=()=> alert(`Vous venez de presser la touche.`)
