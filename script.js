
//ARRAY GENERATOR
var mailArray =[];

for ( var i = 0; i < 100; i++){
  mailArray.push("alberto" + Math.floor(Math.random()*100)+ "@gmail.com");
  mailArray.push("gigi" + Math.floor(Math.random()*100)+ "@hotmail.it");
  mailArray.push("giacomo" + Math.floor(Math.random()*100)+ "@libero.net");
  document.getElementById("list").innerHTML += `<li id="` +[i]+ `">` + mailArray[i] +`</li>`
}

console.log(adressArray)
console.log(mailArray)
var loginAction = document.getElementById("login")


// LOGIN ACTION
loginAction.addEventListener("click", function(){

  var verifyUser = document.getElementById("userEmail").value;
  console.log(verifyUser)

  for (var counter=0, i=0; i <= mailArray.length; i++){

    if (verifyUser == mailArray[i]){

      console.log("Ok")
      counter++

    } else{

      console.log("Denied")
    }

  }

  if (counter == 0){
      document.getElementById("mailCounter").innerHTML ="No matches. Access Denied!"


  } else {
    document.getElementById("mailCounter").innerHTML ="Sono stati trovati " + counter + " indirizzi email corrispondenti. Accesso effettutato!"
  }

})


// RESET ACTION
var resetAction = document.getElementById("reset")

resetAction.addEventListener("click", function(){
  location.reload()
  document.getElementById("userEmail").value=""
})


// DADI


// Generare un numero random da 1  a 6, sia per il giocatore sia per il computer
// Stabilire il vincitore, in base a chi fa il punteggio più alto.

var play = document.getElementById("play")
var p1Score=0;
var p2Score=0;

play.addEventListener("click", function() {
var player1 = Math.floor((Math.random()*6)+1)
var player2 = Math.floor((Math.random()*6)+1)



//console.log(player2)
//console.log(player1)
  document.getElementById("giocata-player1").innerHTML= "Il giocatore 1 ha totalizzato: "+player1
  document.getElementById("giocata-player2").innerHTML="Il giocatore 2 ha totalizzato: "+player2



if (player1 > player2){
  document.getElementById("winnerIs").innerHTML = "the winner is player1 con un punteggio di " + player1
  p1Score++
  document.getElementById("p1-score").innerHTML = "Punteggio giocatore 1: "+ p1Score
} else if (player2 > player1){
  document.getElementById("winnerIs").innerHTML = "The winner is player2 con un punteggio di " + player2
  p2Score++
  document.getElementById("p2-score").innerHTML = "Punteggio giocatore 2: "+ p2Score
} else {
  document.getElementById("winnerIs").innerHTML = "la sfida è terminata pari"
}

})
