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

assertArraysEqual([1,2,4,5],[1,2,4,5]);
assertArraysEqual([2,3,8],[2,2,8]);
assertArraysEqual([3,4,5,6,7,8],[3,4,5,6,7,9]);
assertArraysEqual(["Loopy","Lighthouse"],["Loopy","Lighthouse"]);