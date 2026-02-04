//Creating Arrays

let num = [];
let num1 = [1, 2, 3, 4];
let num2 = new Array();
let num3 = new Array(1, 2, 3, 4, 5);
let num4 = new Array(6);
var obj = ["a", 2, true, null];
const number = 2;
console.log(num.length);
console.log(num2.length);
console.log(num3.length);
console.log(obj.length);
console.log(Array.isArray(obj));
console.log(Array.isArray(number));

//Accessing and Writing Array Elements

let arr = [];
for (let i = 0; i < 10; ++i) {
  arr[i] = i + 1;
}
console.log(arr);

const arr = [1, 2, 3];
let sum = arr[0] + arr[1] + arr[2];
console.log(sum);

var num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var sum = 0;
for (let i = 0; i < num.length; ++i) {
  sum += num[i];
}
console.log(sum);
