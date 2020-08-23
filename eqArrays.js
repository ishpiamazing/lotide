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





module.exports = eqArrays;