// Sum of Two Numbers
function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    console.log("Los datos de entrada no son adecuados");
    return;
  }
  return a + b;
}

// Factorial of a Number
function factorial(n) {
  if (typeof n !== 'number' || n < 0 || !Number.isInteger(n)) {
    console.log("Los datos de entrada no son adecuados");
    return;
  }
  if (n === 0) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

// Find the Largest Number
function findLargest(arr) {
  if (!Array.isArray(arr) || arr.length === 0 || !arr.every(item => typeof item === 'number')) {
    console.log("Los datos de entrada no son adecuados");
    return;
  }
  let largest = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
    }
  }
  return largest;
}

// Count Vowels in a String
function countVowels(str) {
  if (typeof str !== 'string') {
    console.log("Los datos de entrada no son adecuados");
    return;
  }
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if ("aeiouAEIOU".includes(str[i])) {
      count++;
    }
  }
  return count;
}

// Check if a Number is Prime
function isPrime(n) {
  if (typeof n !== 'number' || n < 0 || !Number.isInteger(n)) {
    console.log("Los datos de entrada no son adecuados");
    return;
  }
  if (n <= 1) {
    return false;
  }
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

module.exports = {
  sum,
  factorial,
  findLargest,
  countVowels,
  isPrime,
};
