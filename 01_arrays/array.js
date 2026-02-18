// Array Creation & Basics

function arrayBasics() {
  const emptyArray = [];
  const numbers = [1, 2, 3, 4];
  const mixedArray = ["a", 2, true, null];
  const arrayConstructor = new Array(6, 6);

  console.log(emptyArray.length);
  console.log(numbers.length);
  console.log(mixedArray.length);
  console.log(arrayConstructor);
  console.log(Array.isArray(mixedArray));
  console.log(Array.isArray(2));
}

//arrayBasics();

// Accessing & Writing Elements

function writeArrayElements() {
  const arr = [];
  for (let i = 0; i < 10; i++) {
    arr[i] = i + 1;
  }
  console.log(arr);
}

// writeArrayElements();

function sumArrayElements() {
  const arr = [1, 2, 3];
  const sum = arr[0] + arr[1] + arr[2];
  console.log(sum);
}

// sumArrayElements();

function sumUsingLoop() {
  const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  let sum = 0;

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
  }

  console.log(sum);
}

// sumUsingLoop();

// Creating Arrays from Strings

function createArrayFromString() {
  const text = "Hello js world!";
  const words = text.split(" ");

  for (let i = 0; i < words.length; i++) {
    console.log(`Word ${i}: ${words[i]}`);
  }
}

// createArrayFromString();

// Shallow Copy

function shallowCopyExample() {
  const nums = [];
  for (let i = 0; i < 10; i++) {
    nums[i] = i + 1;
  }

  const sameNums = nums; // reference copy
  nums[0] = 99;

  console.log(nums);
  console.log(sameNums);
}

// shallowCopyExample();

// Deep Copy

function copyArray(source, target) {
  for (let i = 0; i < source.length; i++) {
    target[i] = source[i];
  }
}

function deepCopyExample() {
  const nums = [1, 3, 4, 5, 6, 7, 8, 9, 10];
  const savedNums = [];

  copyArray(nums, savedNums);
  nums[1] = 2;

  console.log("nums[1]:", nums[1]);
  console.log("savedNums[1]:", savedNums[1]);
}

// deepCopyExample();

// Searching Arrays

const readline = require("readline");

function searchArray() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  const names = ["aa", "bb", "cc", "aa"];

  rl.question("Enter a name to search: ", (input) => {
    const position = names.indexOf(input);

    if (position >= 0) {
      console.log(`Found "${input}" at index ${position}`);
    } else {
      console.log(`"${input}" not found`);
    }

    console.log("First index of 'aa':", names.indexOf("aa"));
    console.log("Last index of 'aa':", names.lastIndexOf("aa"));

    rl.close();
  });
}

// searchArray();

// String Representation of Arrays

function stringRepresentations() {
  const names = ["a", "b", "c", "d"];

  console.log(names);
  console.log(names.join());
  console.log(names.toString());
}

//stringRepresentations();

//Creating New Arrays from Existing Arrays
function concatFn() {
  let a = ["a", "b", "c"];
  let b = ["d", "e", "f"];
  let c = a.concat(b);
  console.log(c);
}

// concatFn();

function spliceFn() {
  const a = ["a", "b", "c", "d", "e"];
  let b = a.splice(1, 4);
  console.log(b);
}
//spliceFn();

//Mutator Functions

function addingArrayElements() {
  //push
  const numbers = [1, 2, 3, 4, 5];
  console.log(numbers);
  numbers.push(6);
  console.log("push", numbers);
  //length
  numbers[numbers.length] = 7;
  console.log("length", numbers);
  console.log("array Elements length", numbers.length);
  //Add Element in the beginning without using unshift
  console.log("Add Element in the beginning without using unshift");
  let nums = [2, 3, 4, 5];
  let newN = 1;
  let n = nums.length;
  for (let i = n; i >= 0; --i) {
    nums[i] = nums[i - 1];
    // console.log(nums);
  }
  nums[0] = newN;
  console.log("Adding at the beginning", nums);
  //unshift
  console.log("unshift ");
  console.log(nums);
  let n1 = 0;
  nums.unshift(n1);
  console.log(nums);
  let n2 = 8;
  nums.unshift(n2, 9, 45);
  console.log(nums);
}
//addingArrayElements();

//Removing Elements from an Arrays

function removingArrayElement() {
  const nums = [1, 2, 3, 4, 5, 6];
  //pop
  console.log(nums);
  nums.pop();
  console.log(nums);
  //without pop
  let numbers = [5, 1, 2, 3, 4];
  console.log(numbers);
  for (let i = 0; i < numbers.length; ++i) {
    numbers[i] = numbers[i + 1];
    console.log("i", i);
  }
  console.log(numbers);

  //shift
  let n = [6, 1, 2, 3, 4, 5];
  console.log(n);
  n.shift();
  console.log(n);

  //removed values
  let arr1 = [1, 2, 3, 4, 5];
  console.log(arr1);
  let val1 = arr1.pop();
  let val2 = arr1.unshift();
  console.log(`value 1 =: ${val1} value 2 =: ${val2}`);
}
//removingArrayElement();

//Adding and Removing Elements from the Middle of an Arrays
function middleOfArray() {
  //adding
  let numbers = [1, 2, 3, 4, 5];
  console.log(numbers);
  let newElem = [6, 7, 8, 9];
  numbers.splice(5, 0, newElem);
  console.log(numbers);
  numbers.splice(9, 0, 10, 11);
  console.log(numbers);
  //Removing
  let n = [1, 2, 3, 10, 20, 30, 4, 5];
  console.log(n);
  n.splice(3, 3);
  console.log(n);
}
//middleOfArray();

//Putting Array Elements in Order
//reverse
function reverseFn() {
  let arr = [1, 2, 3, 4, 5];
  console.log(arr);
  arr.reverse();
  console.log(arr);

  let a = ["abc", "b", "c"];
  console.log(a);
  a.reverse();
  console.log(a);
}
//reverseFn();

//sort
function compare(a, b) {
  return a - b;
}
function sortFn() {
  //sorting strings
  let a = ["abc", "ghj", "def", "kjhd"];
  console.log(a);
  a.sort();
  console.log(a);
  //sorting numbers
  let n = [1, 2, 100, 4, 3, 5];
  console.log(n);
  n.sort();
  console.log(n);
  let b = [1, 2, 100, 4, 3, 5];
  console.log(b);
  b.sort(compare);
  console.log(b);
}
//sortFn();

//Iterator Functions

function forEachFn() {
  let numbers = [1, 2, 3, 4, 5];
  function square(num) {
    console.log(num, num * num);
  }

  numbers.forEach(square);
}

//forEachFn();
function isEven(n) {
  return n % 2 == 0;
}
function everyFn() {
  let n = [2, 4, 6, 8];
  let n1 = [1, 3, 5, 7, 9];

  let even = n.every(isEven);
  console.log(even);
  if (even) {
    console.log("even");
  } else {
    console.log("not all numbers are even");
  }

  let odd = n1.every(isEven);
  if (odd) {
    console.log("even");
  } else {
    console.log("not all numbers are even");
  }
}

//everyFn();

//some
function somefn() {
  let n = [1, 2, 3, 4, 5, 6, 7, 8];
  if (n.some(isEven)) {
    console.log("Some are even");
  } else {
    console.log("no numbers are even");
  }
  let n1 = [1, 3, 5, 7, 9];
  if (n1.some(isEven)) {
    console.log("Some are even");
  } else {
    console.log("no numbers are even");
  }
}
//somefn();

//reduce

function reduceFn() {
  function add(total, currentV) {
    return total + currentV;
  }
  let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  let some = arr.reduce(add);
  console.log(some);
  function concat(a, b) {
    return a + b;
  }
  let a = ["a", "b", "c", "d"];
  console.log(a);
  let b = a.reduce(concat);
  console.log(b);
  let c = a.reduceRight(concat);
  console.log(c);
}
//reduceFn();

//map
function mapFn() {
  function add(a) {
    return (a += 5);
  }
  let n = [1, 2, 3, 4, 5];
  console.log(n);
  let a = n.map(add);
  console.log(a);
  function first(a) {
    return a[0];
  }
  let arr = ["for", "your", "info"];
  let b = arr.map(first);
  console.log(b.join(""));
}
mapFn();
