const middle = function(arr) {
  let result = [];
  if ((arr.length === 1) || (arr.length === 2)) {
    return result;
  } else if ((arr.length % 2) !== 0) {
    result.push(Math.ceil(arr.length / 2));
    
  } else if ((arr.length % 2) === 0) {
    result.push(arr.length / 2);
    result.push((arr.length / 2) + 1);
    
  }
  return result;
};



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


// console.log(middle([1])) // => []
// console.log(middle([1, 2])) // => []

// console.log(middle([1, 2, 3])) // => [2]
// console.log(middle([1, 2, 3, 4, 5])) // => [3]

// console.log(middle([1, 2, 3, 4])) // => [2, 3]
// console.log(middle([1, 2, 3, 4, 5, 6])) // => [3, 4]



const mid = middle([1,2,3]);
assertArraysEqual(mid,[2]);

const mid1 = middle([1,2,3,4,5]);
assertArraysEqual(mid1,[3]);

const mid2 = middle([1]);
assertArraysEqual(mid2,[]);

const mid3 = middle([1,2]);
assertArraysEqual(mid3,[]);

const mid4 = middle([1,2,3,4]);
assertArraysEqual(mid4,[2,3]);

const mid5 = middle([1,2,3,4,5,6]);
assertArraysEqual(mid5,[3,4]);

