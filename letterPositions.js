const letterPositions = function(sentence) {
 
  const results = {};
  
  for (let i = 0; i < sentence.length; i++) {
    if (!results[sentence[i]]) {
      results[sentence[i]] = [];
    }
    (results[(sentence[i])]).push(i);
  }
  delete results[" "];
  return results;
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

  
  
// console.log(letterPositions("lighthouse in the house"));
//  console.log(letterPositions("hello"));

assertArraysEqual(letterPositions("hello").e, [1]);
assertArraysEqual(letterPositions("hello").l, [2,3]);
assertArraysEqual(letterPositions("lighthouse in the house").l, [0]);
assertArraysEqual(letterPositions("lighthouse in the house").h, [3,5,15,18]);

module.exports =letterPositions;