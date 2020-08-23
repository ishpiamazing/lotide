const eqArrays = require('./eqArrays.js')


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


module.exports = middle;






