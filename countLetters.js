const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`✅✅✅  Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴🔴🔴  Assertion Failed: ${actual} !== ${expected}`);
  }

};

const countLetters = function(text) {
  text = text.replace(/\s/g,"");

  let frequencyOfLetters = {};
  for (let letter of text) {
  
    if (frequencyOfLetters[letter]) {
      frequencyOfLetters[letter] += 1;
    } else {
      frequencyOfLetters[letter] = 1;
    }

  }
  return frequencyOfLetters;
};

console.log(countLetters("lighthouse in the house"));

const result = countLetters("abcabcbcccc");


assertEqual(result["a"],2);
assertEqual(result["b"],3);
assertEqual(result["c"],6);