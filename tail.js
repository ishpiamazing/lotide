
const tail = function(arr) {
  
  const trail = [];
  for (let i = 1; i < arr.length; i++) {
   
    trail.push(arr[i]);
  }
  return trail;
};


const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`✅✅✅  Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴🔴🔴  Assertion Failed: ${actual} !== ${expected}`);
  }

};




module.exports = tail;








