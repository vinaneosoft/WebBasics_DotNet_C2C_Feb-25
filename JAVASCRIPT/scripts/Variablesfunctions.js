/* dynamically typed lang */

var num1; // type not decided here
console.log(typeof num1);
num1=67;  // number
console.log(typeof num1);
num1="abc"; // string
console.log(typeof(num1));

num1=true; // boolean
console.log(checkType(123));

function checkType(value){
    return typeof value;
}

let num2=67;
num2="pqr";

const num3=67;
/* num3=89; */ // error

/* we can redeclare var type variables */

var companyname="Neosoft technologies";
var companyname="Nesoft";

/* we can not redeclare var type variables */
let city="Dadar";
//let city="Rabale";
city="Rabale";

//var type variables have functional scope, if function anywhere they are declared
function loop(){
console.log(i);    
    for(var i=1;i<=5;i++){
        console.log(i);
    }// for end
    console.log("after:"+i);
    function test(){
        var year=2025;
        console.log(year);
        console.log(i); // 
    } // year scope ends
    test();
   /* console.log(year);  */// error
}// i scope ends
loop();