// Question 1
// 1.Print odd numbers in an array:
// Anonymous Function:
const printOddNumbers = function(arr) {
  arr.forEach(num => {
      if (num % 2 !== 0) {
          console.log(num);
      }
  });
};
// output 
// 1 3 5


// Print odd numbers in an array:
// IIFE :
printOddNumbers([1, 2, 3, 4, 5]);

(function(arr) {
  arr.forEach(num => {
      if (num % 2 !== 0) {
          console.log(num);
      }
  });
})([1, 2, 3, 4, 5]); 
// output 
// 1 3 5

// 2. Convert all strings to title caps in a string array:
// Anonymous Function:
  const convertToTitleCaps = function(arr) {
    return arr.map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase());
};

console.log(convertToTitleCaps(["hello", "world"]));
// output 
// ["Hello", "World"]

// IIFE:

(function(arr) {
  const result = arr.map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase());
  console.log(result);
})(["hello", "world"]); 
// output 
// ["Hello", "World"]

// 3. Sum of all numbers in an array:

// Anonymous Function:

const sumOfNumbers = function(arr) {
  return arr.reduce((acc, curr) => acc + curr, 0);
};

console.log(sumOfNumbers([1, 2, 3, 4, 5]));
// output 
// 15

// IIFE

(function(arr) {
  const sum = arr.reduce((acc, curr) => acc + curr, 0);
  console.log(sum);
})([1, 2, 3, 4, 5]);
// output 
// 15


// 4. Return all the prime numbers in an array:

// Anonymous Function

const getPrimeNumbers = function(arr) {
  return arr.filter(num => {
      if (num <= 1) return false;
      for (let i = 2; i < num; i++) {
          if (num % i === 0) return false;
      }
      return true;
  });
};

console.log(getPrimeNumbers([1, 2, 3, 4, 5, 6]));
// output
// [2, 3, 5]

// IIFE

(function(arr) {
  const primes = arr.filter(num => {
      if (num <= 1) return false;
      for (let i = 2; i < num; i++) {
          if (num % i === 0) return false;
      }
      return true;
  });
  console.log(primes);
})([1, 2, 3, 4, 5, 6]); 
// output
// [2, 3, 5]

// 5. Return all the palindromes in an array:

// Anonymous Function:

const getPalindromes = function(arr) {
  return arr.filter(word => {
      const reversed = word.split('').reverse().join('');
      return word === reversed;
  });
};

console.log(getPalindromes(["level", "hello", "noon"]));
// output
// [ 'level', 'noon' ]

// IIFE

(function(arr) {
  const palindromes = arr.filter(word => {
      const reversed = word.split('').reverse().join('');
      return word === reversed;
  });
  console.log(palindromes);
})(["level", "hello", "noon"]); 
// output
// [ 'level', 'noon' ]

// 6. Return median of two sorted arrays of the same size:

// Anonymous Function:

const findMedianSortedArrays = function(nums1, nums2) {
  const merged = nums1.concat(nums2).sort((a, b) => a - b);
  const len = merged.length;
  const mid = Math.floor(len / 2);
  if (len % 2 === 0) {
      return (merged[mid - 1] + merged[mid]) / 2;
  } else {
      return merged[mid];
  }
};
console.log(findMedianSortedArrays([1, 3], [2, 4]));
// output
// 2.5

// IIFE

(function(nums1, nums2) {
  const merged = nums1.concat(nums2).sort((a, b) => a - b);
  const len = merged.length;
  const mid = Math.floor(len / 2);
  if (len % 2 === 0) {
      console.log((merged[mid - 1] + merged[mid]) / 2);
  } else {
      console.log(merged[mid]);
  }
})([1, 3], [2, 4]);
// output
// 2.5

// 7. Remove duplicates from an array:

// Anonymous Function:
const removeDuplicates = function(arr) {
  return arr.filter((value, index, self) => {
      return self.indexOf(value) === index;
  });
};

console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));
// output
// [1, 2, 3, 4, 5]

// IIFE
(function(arr) {
  const uniqueArray = arr.filter((value, index, self) => {
      return self.indexOf(value) === index;
  });
  console.log(uniqueArray);
})([1, 2, 2, 3, 4, 4, 5]);
// output
// [1, 2, 3, 4, 5]

// 8. Rotate an array by 2 times:

// Anonymous Function:

const rotateArray = function(arr, times) {
  const rotations = times % arr.length;
  return arr.slice(rotations).concat(arr.slice(0, rotations));
};

console.log(rotateArray([1, 2, 3, 4, 5], 2));
// output
// [3, 4, 5, 1, 2]

// IIFE

(function(arr, times) {
  const rotations = times % arr.length;
  const rotatedArray = arr.slice(rotations).concat(arr.slice(0, rotations));
  console.log(rotatedArray);
})([1, 2, 3, 4, 5], 2);
// output
// [3, 4, 5, 1, 2]

//Question 2.(arrow function)

// 1. Print odd numbers in an array:
const printOddNumbers = arr => arr.forEach(num => {
  if (num % 2 !== 0) {
      console.log(num);
  }
});

printOddNumbers([1, 2, 3, 4, 5]);
// output
//  1, 3, 5

// 2. Convert all the strings to title caps in a string array:

const convertToTitleCaps = arr => arr.map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase());

console.log(convertToTitleCaps(["hello", "world"]));
// output
// ["Hello", "World"]

// 3. Sum of all numbers in an array:
const sumOfNumbers = arr => arr.reduce((acc, curr) => acc + curr, 0);

console.log(sumOfNumbers([1, 2, 3, 4, 5]));
// output
// 15

// 4. Return all the prime numbers in an array:
const getPrimeNumbers = arr => arr.filter(num => {
  if (num <= 1) return false;
  for (let i = 2; i < num; i++) {
      if (num % i === 0) return false;
  }
  return true;
});

console.log(getPrimeNumbers([1, 2, 3, 4, 5, 6, 7]));
// output
// [2, 3, 5, 7]

// 5. Return all the palindromes in an array:
const getPalindromes = arr => arr.filter(word => {
  const reversed = word.split('').reverse().join('');
  return word === reversed;
});

console.log(getPalindromes(["level", "hello", "noon"]));

// output
// ["level", "noon"]




