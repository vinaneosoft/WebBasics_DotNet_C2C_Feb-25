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


