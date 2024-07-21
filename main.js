// 1-Misol
// const multiplyValues = (obj, n) => {
//     let res = {};
//     for (let key in obj) {
//       res[key] = obj[key] * n;
//     }
//     return res;
//   }

//   const n = 3;
//   const obj = {a: 2, b: 3, c: 4};
//   const res = multiplyValues(obj, n);
//   console.log(res);

// 2-Misol
// const countWordsWithA = (str) => {
//   return str
//     .split(" ")
//     .filter((word) => word.includes("a") || word.includes("A")).length;
// };

// const inputStr = "Tez jigarrang tulki dangasa itning ustiga sakraydi";
// const count = countWordsWithA(inputStr);
// console.log(count);

// 3-Misol
// const books = [
//     {
//       title: "Halqa",
//       author: "Akrom Malik",
//       read: false
//     },
//     {
//       title: "Dunyoning ishlari",
//       author: "O’tkir Hoshimov",
//       read: true
//     },
//     {
//       title: "Iymon",
//       author: "Shayx Muhammad Sodiq Muhammad Yusuf",
//       read: true
//     }
//   ];

//   books.forEach(book => {
//     if (book.read) {
//       console.log(`${book.author} ning ${book.title} kitobi o’qilgan`);
//     } else {
//       console.log(`${book.author} ning ${book.title} kitobi o’qilmagan`);
//     }
//   });

// 4-Misol
// const createLengthObject = (arr) => {
//     let result = {};
//     arr.forEach(str => {
//       result[str] = str.length;
//     });
//     return result;
//   }

//   const inputArr = ["text", "world", "laptop"];
//   const outputObj = createLengthObject(inputArr);
//   console.log(outputObj);

// 5-Misol
// const countWords = (arr) => {
//     return arr.reduce((acc, word) => {
//       acc[word] = (acc[word] || 0) + 1;
//       return acc;
//     }, {});
//   }

//   const animals = ['dog', 'chicken', 'cat', 'dog', 'chicken', 'chicken', 'rabbit'];
//   const result = countWords(animals);
//   console.log(result);

// 6-Misol
// const findAgeDifference = (arr) => {
//     arr.sort((a, b) => a.age - b.age);
//     const youngest = arr[0].age;
//     const oldest = arr[arr.length - 1].age;
//     return oldest - youngest;
//   }

//   const people = [
//     {name: 'John', age: 13},
//     {name: 'Mark', age: 56},
//     {name: 'Rachel', age: 45},
//     {name: 'Nate', age: 67},
//     {name: 'Jeniffer', age: 65}
//   ];

//   const ageDifference = findAgeDifference(people);
//   console.log(ageDifference);

// 7-Misol
// const getTruthyFalsy = (arr) => {
//     return {
//       truthy: arr.filter(element => Boolean(element)),
//       falsy: arr.filter(element => !Boolean(element))
//     };
//   }

//   const inputArr = [false, 1, 10, "", null, "sultonqul", 1.13, 0];
//   const result = getTruthyFalsy(inputArr);
//   console.log(result);

// 8-Misol
// const minMaxWord = (str) => {
//     const words = str.split(' ');
//     let minWord = words[0];
//     let maxWord = words[0];

//     words.forEach(word => {
//       if (word.length < minWord.length) {
//         minWord = word;
//       }
//       if (word.length > maxWord.length) {
//         maxWord = word;
//       }
//     });

//     return { minWord, maxWord };
//   }

//   const inputStr = "Men dasturlash kursida o’qiyman";
//   const result = minMaxWord(inputStr);
//   console.log(result);

// 9-Misol
// const createSentence = (str) => {
//     const parts = [
//       str.slice(26, 31),
//       str.slice(2, 10),
//       str.slice(40, 42),
//       str.slice(46, 49),
//       str.slice(51, 55)
//     ];
//     return parts.join(' ');
//   }

//   const inputStr = "djsta'limldjaiorwgmNAJOTasoijmomisoijdsaoidjthemoisasdoonionbest";
//   const sentence = createSentence(inputStr);
//   console.log(sentence);

// 10-Misol
// var searchMatrix = function(matrix, target) {
//     if (!matrix.length || !matrix[0].length) return false;

//     let rows = matrix.length;
//     let cols = matrix[0].length;

//     let left = 0;
//     let right = rows * cols - 1;

//     while (left <= right) {
//       let mid = Math.floor((left + right) / 2);
//       let midValue = matrix[Math.floor(mid / cols)][mid % cols];

//       if (midValue === target) {
//         return true;
//       } else if (midValue < target) {
//         left = mid + 1;
//       } else {
//         right = mid - 1;
//       }
//     }

//     return false;
//   };

//   let matrix1 = [[1,3,5,7],[10,11,16,20],[23,30,34,60]];
//   let target1 = 3;
//   console.log(searchMatrix(matrix1, target1)); // true

//   let matrix2 = [[1,3,5,7],[10,11,16,20],[23,30,34,60]];
//   let target2 = 13;
//   console.log(searchMatrix(matrix2, target2)); // false

// 11-Misol
// let rotate = function (matrix) {
//   let n = matrix.length;

//   for (let i = 0; i < n; i++) {
//     for (let j = i; j < n; j++) {
//       let temp = matrix[i][j];
//       matrix[i][j] = matrix[j][i];
//       matrix[j][i] = temp;
//     }
//   }

//   for (let i = 0; i < n; i++) {
//     for (let j = 0; j < Math.floor(n / 2); j++) {
//       let temp = matrix[i][j];
//       matrix[i][j] = matrix[i][n - j - 1];
//       matrix[i][n - j - 1] = temp;
//     }
//   }

//   return matrix;
// };

// let matrix = [
//   [5, 1, 9, 11],
//   [2, 4, 8, 10],
//   [13, 3, 6, 7],
//   [15, 14, 12, 16],
// ];
// console.log(rotate(matrix));

// 12-Misol
// let getLastWordLength = (str) => {
//   let words = str.trim().split(" ");
//   let lastWord = words[words.length - 1];
//   return lastWord.length;
// };

// let inputStr = "Bu yerda oxirgi so'zni toping";
// console.log(getLastWordLength(inputStr));

// 13-Misol
// let objectToArray = (obj) => {
//     return Object.entries(obj).map(([key, value]) => key + value);
//   }

//   let inputObj = {a: 2, b: 5, c: 7};
//   let outputArr = objectToArray(inputObj);
//   console.log(outputArr);

// 14-Misol
// let findMedianSortedArrays = function (nums1, nums2) {
//   let merged = nums1.concat(nums2);
//   merged.sort((a, b) => a - b);

//   let len = merged.length;
//   let mid = Math.floor(len / 2);

//   if (len % 2 === 0) {
//     return (merged[mid - 1] + merged[mid]) / 2;
//   } else {
//     return merged[mid];
//   }
// };

// let nums1 = [1, 2];
// let nums2 = [3, 4];
// let result = findMedianSortedArrays(nums1, nums2);
// console.log(result);

// 15-Misol
// let moveDuplicates = function(arr) {
//     let count = {};
//     let duplicates = [];

//     arr.forEach(item => {
//       count[item] = (count[item] || 0) + 1;
//     });

//     for (let item in count) {
//       if (count[item] > 1) {
//         duplicates.push(item);
//       }
//     }

//     return duplicates;
//   };

//   let array = [1, 2, 3, 2, 4, 5, 1, 6, 3];
//   let result = moveDuplicates(array);
//   console.log(result); // ['1', '2', '3']

// 16-Misol
// let removeProductById = function (products, idToRemove) {
//   return products.filter((product) => product.id !== idToRemove);
// };
// let products = [
//   { id: 6, name: "Smarthpone", price: 12000, rating: 4.5, discount: 20 },
//   { id: 2, name: "Acer", price: 12000, rating: 4.3, discount: 10 },
//   { id: 1, name: "Mac book", price: 17000, rating: 4.7, discount: 40 },
//   { id: 4, name: "HP", price: 21000, rating: 4.1, discount: 16 },
// ];

// let updatedProducts = removeProductById(products, 4);
// console.log(updatedProducts);

// 17-Misol
// let ageDifference = function(people) {
//     people.sort((a, b) => a.age - b.age);
//     let youngestAge = people[0].age;
//     let oldestAge = people[people.length - 1].age;
//     return oldestAge - youngestAge;
//   }

//   let people = [
//     {name: 'John', age: 13},
//     {name: 'Mark', age: 56},
//     {name: 'Rachel', age: 45},
//     {name: 'Nate', age: 67},
//     {name: 'Jeniffer', age: 65}
//   ];

//   let result = ageDifference(people);
//   console.log(result);
