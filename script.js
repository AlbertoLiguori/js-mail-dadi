
//ARRAY GENERATOR
var mailArray =[];

for ( var i = 0; i < 100; i++){
  mailArray.push("alberto" + Math.floor(Math.random()*100)+ "@gmail.com");
  mailArray.push("gigi" + Math.floor(Math.random()*100)+ "@hotmail.it");
  mailArray.push("giacomo" + Math.floor(Math.random()*100)+ "@libero.net");
  document.getElementById("list").innerHTML += `<li id="email-n` +[i]+ `">` + mailArray[i] +`<button class="copy-email" id="button`+ [i] + `" type="button" name="button">Copy</button></li>`
}



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

// // copy email
//
// var copybutton = getElementById("button")
//
// copybutton.addEventListener("click", function(){
//
//
//
// })




// DADI


// Generare un numero random da 1  a 6, sia per il giocatore sia per il computer
// Stabilire il vincitore, in base a chi fa il punteggio più alto.

var player1 = Math.floor((Math.random()*6)+1)
var player2 = Math.floor((Math.random()*6)+1)

console.log(player1)
  document.getElementById("giocata-player1").innerHTML= "il giocatore 1 ha totalizzato: "+player1
  document.getElementById("giocata-player2").innerHTML="il giocatore 2 ha totalizzato: "+player2

console.log(player2)

if (player1 > player2){
  document.getElementById("winnerIs").innerHTML = "the winner is player1 con un punteggio di " + player1

} else if (player2 > player1){
  document.getElementById("winnerIs").innerHTML = "the winner is player2 con un punteggio di " + player2

} else {
  document.getElementById("winnerIs").innerHTML = "la sfida è terminata pari"
}
