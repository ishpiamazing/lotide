
const without = function(source, itemsToRemove) {
let value = [];
let flag = false;

for (let i = 0 ; i < source.length ; i++) {
  for(let j = 0; j < itemsToRemove.length; j++) {
  if(source[i] === itemsToRemove[j]) {
   
    flag = true;
 
  }
}
if(!flag) {
  value.push(source[i]);
}
flag = false;
}
console.log(value)

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

without([1, 2, 3], [1]) // => [2, 3]
without(["1", "2", "3"], [1, 2, "3"]) // => ["1", "2"]

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);

const arr = [1,2,3];
without(arr, [3]);
assertArraysEqual(arr,[1,6,3])

const arr1 = ["1", "2", "3"];
without(arr1, [1, 2, "3"]);
assertArraysEqual(arr1,["1", "2", "3"])


module.exports = without;