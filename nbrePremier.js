

function nbreP() { 
  const number = document.getElementById("saisie").value;
  var affichage = document.getElementById("affichage");
  var affiche = document.getElementById("aff");
  
  let rest, table = [], t = [];
  let text = "";
  
  if(isNaN(parseInt(number))) {
     affichage.innerHTML = "Veuillez entrer un nombre.";
   }else if(number < 0){
     affichage.innerHTML = "Veuillez entrer un nombre positif.";
   }else{
     for(let i = 2; i <= (number / 2); i++){
      rest = (number % i);
      table.push(rest); 
      if (rest == 0){
        text += affichage.innerHTML = i + " divise " + number + "</br>";
      }
    }
  
    t = table.sort((a, b) => a - b);
       if (t[0] == 0) {
         affichage.innerHTML = text + "Alors " + number + " n'est pas premier.";
       }
       else{
       affichage.innerHTML = number + " est premier.";
       }
    }
   
     affiche.innerHTML = "Qu'en dites-vous alors !??"
}

function nbreE() {
  document.getElementById("saisie").value = " ";
  document.getElementById("affichage").innerHTML = " ";  
} 
  
