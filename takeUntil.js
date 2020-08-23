
const takeUntil = function(array, callback) {
  
  let result = [];
  for(let item of array) {
    
    if(callback(item)){
      break;
    }
    result.push(item);
    
  }
return result;
  
}



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



const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

assertArraysEqual(results1,[ 1, 2, 5, 7, 2 ]);

assertArraysEqual(results2,[ 'I\'ve', 'been', 'to', 'Hollywood' ]);

module.exports = takeUntil;