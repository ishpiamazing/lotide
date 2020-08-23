const eqArrays = function(arrOne, arrTwo) {

  let value = true;

  if (arrOne.length !== arrTwo.length) {
    value = false;
  } else {
    for (let i = 0; i < arrOne.length; i++) {
      if (arrOne[i] !== arrTwo[i]) {
        value = false;
        break;
      } else {
        value = true;
      }
    }
  }
  
  return value;
};


const assertArraysEqual = function(actual, expected) {
  let result = "";
  result = eqArrays(actual, expected);
  
  if (result) {
    console.log(`✅✅✅  Assertion Passed: ${actual} === ${expected}`);
  } else  {
    console.log(`🔴🔴🔴  Assertion Failed: ${actual} !== ${expected}`);
  }
};






const map = function(array, callback) {
  const results = [];

  for (let item of array) {
    
    results.push(callback(item));
  }
  return results;
};

const words = ["ground", "control", "to", "major", "tom"];
const result1 = map(words, word => word[0]);
console.log(result1);


const words1 = ["Ishmeet", "Amrinder", "Eakamjot", "Rabjot", "Manjot"];
const result2 = map(words1, words => words.length);
console.log(result2);


assertArraysEqual(result1,[ 'g', 'c', 't', 'm', 't' ]);

assertArraysEqual(result2,[ 7, 8, 8, 6, 6 ]);

module.exports = map;