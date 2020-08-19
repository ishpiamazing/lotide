const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`✅✅✅  Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴🔴🔴  Assertion Failed: ${actual} !== ${expected}`);
  }

};

const findKeyByValue = function(tvShows, show) {
 
  let result = Object.keys(tvShows);
  for (let serial of result) {
  
    if (tvShows[serial] === show) {
      return serial;
    }
  }
};


const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
assertEqual(findKeyByValue(bestTVShowsByGenre, "Brooklyn Nine-Nine"), "comedy");
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Expanse"), "sci_fi");

// console.log(findKeyByValue(bestTVShowsByGenre, "The Wire"));
// console.log(findKeyByValue(bestTVShowsByGenre, "That '70s Show"));