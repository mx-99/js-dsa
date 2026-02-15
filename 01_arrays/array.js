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
}
addingArrayElements();
