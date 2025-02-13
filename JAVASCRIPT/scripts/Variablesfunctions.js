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

//var type variables have functional scope, if in function anywhere they are declared
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

console.log("-------------------------");



//let type variables have block scope, in which block they are declared
function loop2(){
    /*   console.log(i);  */    /* error : not defined */
    for(let i=1;i<=5;i++){
        console.log(i);
    }// for end i scope end
    /*   console.log("after:"+i); */  /* error : not defined */
}
loop2();

console.log("------------------");

/* function without names */

const addfun=function(num1,num2){
    document.write(num1);
    document.write("<br>"+num2); 
    document.write("<p>"+num1+"</p>");
    document.write("<p>"+num2+"</p>"); 
    return num1+num2;
}
const result=addfun(45,67);
console.log(result);

/* arrow function */

const arrowfun=(num1,num2)=>{
    document.write(num1);
    document.write("<br>"+num2); 
    document.write("<p>"+num1+"</p>");
    document.write("<p>"+num2+"</p>"); 
    return num1+num2;
}
const res=arrowfun(67,88);
document.write(res);