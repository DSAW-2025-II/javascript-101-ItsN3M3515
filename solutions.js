// Sum of Two Numbers
function sum(a, b) {
  console.log(a+b);
}

// Factorial of a Number
function factorial(n) {
  if (n === 0) {
    console.log(1);
  } else {
    console.log(n * factorial(n - 1));
  }
}

// Find the Largest Number
function findLargest(arr) {
  let largest = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
    }
  }
  console.log(largest);
}

// Count Vowels in a String
function countVowels(str) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if ("aeiouAEIOU".includes(str[i])) {
      count++;
    }
  }
  console.log(count);
}

// Check if a Number is Prime
function isPrime(n) {
  if (n <= 1) {
    console.log(false);
    return;
  }
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      console.log(false);
      return;
    }
  }
  console.log(true);
}

module.exports = {
  sum,
  factorial,
  findLargest,
  countVowels,
  isPrime,
};
