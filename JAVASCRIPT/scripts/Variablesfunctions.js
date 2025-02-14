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

const subfun1=(num1,num2)=>{
    console.log(num1-num2) 
}
subfun1(56,23);
/* if arrow funciton body has single statement then {} are optional*/
const subfun2=(num1,num2)=>console.log(num1-num2) 
subfun2(56,23);

/* if arrow funciton body has single return statement then {} are optional, return keyword not allowed
it implicitly returns the result*/
const subfun3=(num1,num2)=> num1-num2; 

console.log(subfun3(56,23));

/* if arrow function has single format argument then () are optional */
const cubeFun=num=>num*num*num;
const cuberes=cubeFun(6);
console.log(cuberes);


let arr=[67,89,56,45,89,45];
/*normal for loop */

for(let I=0; I<=arr.length-1; I++){
    console.log(arr[I]);
}
console.log("-------------------");

/* for of loop */
for (let arrvalue of arr){
    console.log(arrvalue);
}
console.log("-------------------");
/* forEach */
arr.forEach((vl)=>console.log(vl)); // innerloop

/* <60*/
const filterarr=arr.filter((val)=>val<60);
filterarr.forEach((v)=>console.log(v));
/* function chaining */
arr
.filter((val)=>val<60)
.forEach((filtval)=>console.log(filtval))
console.log(arr);


let names=['Kiran','Amol', 'Kavita','aman','Savita','Amant'];
/* 
show names starting with 'A' /'a'  : startsWith */

const namesA = names.filter(name => name.toUpperCase().startsWith("A"));
console.log(namesA);


/* show first name from array starting with 'A' /'a'  : startsWith  */

const nameA = names.find(name => name.toUpperCase().startsWith("A"));
console.log(nameA);

/* prefix Neo- to every name of array : map*/
const newnames=names.map((name)=>'Neo-'+name);
console.log(newnames);
/*  chaining  of map and forEach*/

arr=[67,89,56,45,89,45];
/* double each number of an array and store into new array*/
arr.map((val)=>val*2).forEach((mappedvalue)=>console.log(mappedvalue))

console.log("---------------");

/* add all numbers of array : reduce*/

const summ=arr.reduce((accumulator,value)=>accumulator+value);
/* accumulator = 67, value = 89, 67+89=156
accumulator =156, value 56, 156+56=212
accmulator = 212, value= 45 212+55
...... */
console.log(summ);



const summ2=arr.reduce((accumulator,value)=>accumulator+value,0);
/* accumulator =0, value = 67, 0+67=67
 accumulator =67 ,value=89, 67+89=156
accumulator =156, value 56, 156+56=212
accmulator = 212, value= 45 212+55
...... */
console.log(summ2);

let arr1=[5,4,51,3];
let arr2=[6,2,1,4];

const sum1=arr1.reduce((acc, val)=>acc+val);
const sum2=arr2.reduce((acc,val)=>acc+val,sum1)
console.log("Addition od arr1 and arr2: "+sum2);


names=['Kiran','amol', 'Kavita','aman','Savita','Amant', 'Zinat', 'Zahar'];
/* contact first letter of every name from array */

const concatstring=names.map((name)=>name.charAt(0).toUpperCase()).reduce((acc,letter)=> acc+letter);
console.log(concatstring);

names
    .filter((name)=>name.toUpperCase().startsWith('A') || name.toUpperCase().startsWith('Z'))
    .forEach((name)=>console.log(name))