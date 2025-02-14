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
/* company=company+" rabale"; */
const concated=company+" rabale"
console.log(concated);
console.log(company);


let n1=67;
let n2=67;
console.log(n1==n2);

let india1=new String('india');
let india2=new String('india');
console.log(india1==india2); // mem loc comp
console.log(india1.valueOf()==india2.valueOf()); // value comp


const c1="neosoft";
const c2="neosoft";
console.log(c1==c2); // mem loc  true
console.log(c1.valueOf()==c2.valueOf()); // true

console.log("------------");

let v1=90;
let v2='90';
console.log(v1==v2); //true, loose type checking
console.log(v1===v2); // false, strict type checking

console.log("------------");

let st1=new String(56);
let st2=new String('59');
console.log(st1==st2); // ml false
console.log(st1===st2); // ml false
/* 
replace, replaceAll
charAt,
indexOf
lastIndexOf
includes
split */
// once done with above methods please put done in chat

// slice, substring : trainer     si<ei
const message="hello how r u?";

console.log(message.substring(1,4));
console.log(message.slice(1,4));

console.log(message.substring(1));
console.log(message.slice(1));

console.log(message.substring(-1)); // - to 0
console.log(message.slice(-1)); 

console.log(message.substring(-1, 5)); // - to 0, 5
console.log(message.slice(-1, 5));  // empty string

console.log(message.slice(-12, 12));  











