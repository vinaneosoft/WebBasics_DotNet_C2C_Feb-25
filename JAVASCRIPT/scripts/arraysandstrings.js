// dyanmic, no type restriction, mutable : changes to existing object
let arr=[];
let arr1=[56,78];
let arr2=[67,'sara',6788, true];
let arr3=['vina','veda'];

arr1[2]=77; // length increased
arr1[0]=34; // replace
console.log(arr1);
let length=arr1.push(89); // add new values from back
console.log(arr1);
length=arr1.unshift(11); // add new values from front
console.log(arr1);
//pop, shift
let poppedvalue=arr1.pop();

let arr4=new Array(); //length=0
let arr5=new Array(78,66,444); //length=3
let arr6=new Array(5); // length=5
let arr7=new Array('hi'); //length=1

//splice,includes,join,sort,reverse

arr5.splice(1,1); /*startIndex, deleteCount */
console.log(arr5);

console.log( arr3.includes('vina'));

let numbers = [220, 20,100, 10, 34, 344, 3];

numbers.sort((n1,n2)=>{
    console.log(n1+" "+n2);
    return n1-n2;
    }
);
numbers.sort((n1,n2)=>n1-n2);
console.log(numbers);


console.log(numbers.includes(34));

numbers.reverse(); // mutable
console.log(numbers);
// self study : implement other array API functions


let s1="";  // primitive
let s2="Hello";
console.log(typeof s2);

let s3=new String();
let s4=new String("India is my country"); // object of type String
console.log(typeof s4);
console.log(s4 instanceof String);

// string are always immutable, no change in value

let upperstring=s4.toUpperCase();
console.log(s4);
console.log(upperstring);

let city="Solapur";
city=city.concat(" Kolhapur"); // ref used same to point to new memory location
console.log(city); 
// we want avoid above

const a=89;
/* a=90;  */// error


const company="neosoft";
/* company=company+" rabale" */;
const concated=company+" rabale"
console.log(concated);
console.log(company);

















