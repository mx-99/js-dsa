// Array Creation & Basics

function arrayBasics() {
  const emptyArray = [];
  const numbers = [1, 2, 3, 4];
  const mixedArray = ["a", 2, true, null];
  const singleLengthArray = new Array(6);

  console.log(emptyArray.length);
  console.log(numbers.length);
  console.log(mixedArray.length);
  console.log(singleLengthArray.length);
  console.log(Array.isArray(mixedArray));
  console.log(Array.isArray(2));
}

// arrayBasics();

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
  const nums = [1,2,3,4,5,6,7,8,9,10];
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
