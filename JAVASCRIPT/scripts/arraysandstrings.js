// dyanmic, no type restriction, mutable : changes to existing object

let arr1=[56,78];
let arr2=[67,'sara',6788, true];
let arr3=['vina','veda'];

arr1[2]=77; // length increased
arr1[0]=34; // replace
console.log(arr1);
arr1.push(89); // add new values from back
console.log(arr1);
arr1.unshift(11); // add new values from front
console.log(arr1);
//pop, shift

