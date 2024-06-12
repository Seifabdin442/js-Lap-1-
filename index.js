alert("Welcome To My First Site")


var x=prompt("Please Enter Your Amount of Money")
function exchangeEgyPound(x){
console.log(x/47.13);
}
exchangeEgyPound(x)

function printEven() {
for (var i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
      console.log("I AM EVEN");
    }else{
        console.log(i)
    }
  }
}




while (true){
  var Name= prompt("Please Enter Your First Name");
  if (isNaN(Name)){
    break;
  }
  alert("You Entered Unvalid Name")
}


while (true){
  var mobile= prompt("Please Enter Your Mobile Number")
if (mobile.length == 11){
  break;
}
alert("You Entered Unvalid Number")
}


while (true){
  var birthYear= prompt("Please Enter Your Birth Year")
  if(birthYear >= 1900){
    break;
  }
  alert("You Entered Unvalid Birth Year")
}



while (true){
  var color= prompt("Please Enter Your Color")
  if (color == "red" || color == 'green' || color == 'blue'){
    break;
  }
  alert("Please Enter Color From (Red, Green, Blue)")
}

// if (color = red){
//   const h2element = document.querySelector("h2");
//   h2element.style.color = "red";
// }



const currentYear = new Date().getFullYear();
var age= currentYear - birthYear;

function display(){
        document.write (`<h2 style="color: ${color}"> Welcome Dear ${Name} </h2>` );
        document.write(`<h2 style="color: ${color}"> Please Enter Your age is ${age} </h2>`);
        document.write(`<h2 style="color: ${color}"> Your Mobile is  ${mobile} </h2>`) ;

}
display()
