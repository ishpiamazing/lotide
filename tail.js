
const tail = function(arr) {
  
  const trail = [];
  for (let i = 1; i < arr.length; i++) {
   
    trail.push(arr[i]);
  }
  return trail;
};


const assertEqual = function(actual, expected) {
   
  let tailStatus = true;

  if ((actual.length) !== (expected.length)) {
   
    tailStatus = false;
   
  } else {
    for (let i = 0; i < actual.length; i++) {
      
      if (actual[i] !== expected[i]) {
        
        tailStatus = false;
        
      }
      
    }

  }
  if (tailStatus) {
    console.log(`✅✅✅  Assertion Passed: ${actual} === ${expected}`);
  } else if (!tailStatus) {
    console.log(`🔴🔴🔴  Assertion Failed: ${actual} !== ${expected}`);
  }
 
};

const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result, ["Lighthouse", "Labs"]);

const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words);
assertEqual(words.length, 3);


