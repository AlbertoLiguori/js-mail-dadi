
//ARRAY GENERATOR
var mailArray =[];

for ( var i = 0; i < 100; i++){
  mailArray.push("alberto" + Math.floor(Math.random()*100)+ "@gmail.com");
  mailArray.push("gigi" + Math.floor(Math.random()*100)+ "@hotmail.it");
  mailArray.push("giacomo" + Math.floor(Math.random()*100)+ "@libero.net");
  document.getElementById("list").innerHTML += `<li id="email-n` +[i]+ `">` + mailArray[i] + "</li>" 
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

// copy email

var copybutton = getElementByClass("copy-email")

copybutton.addEventListener("click", function(){

  var textEmail = document.getElementById("button"+[i]);
  document.getElementById("userEmail").value =textEmail;

})
