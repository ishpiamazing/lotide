const eqObjects = function(object1, object2) {
  const key1List = Object.keys(object1);
  const key2List = Object.keys(object2);
  let flag = true;
  // if(key1List.length === key2List.length) {
  //   for(let key of key1List) {
  //     if(object1[key] !== object2[key]) {
  //       flag = false;
  //       // return flag;
  //     }
  
  //   }  
  // }
  if (key1List.length === key2List.length) {
    for(let key of key1List){
      if (object1[key].length !== object2[key].length) {
        flag = false;
      } else {
        for (let i = 0; i < object1[key].length; i++) {
          if (object1[key][i] !== object2[key][i]) {
            flag = false;
          }
        }
      }
    }
  }
  else{
    flag = false;
  }
  
  return flag;
  };

  const assertObjectsEqual = function(actual, expected) {
   const inspect = require('util').inspect;
   
 
    let result = "";
  result = eqObjects(actual, expected);
  
  if (result) {
    console.log(`✅✅✅  Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else  {
    console.log(`🔴🔴🔴  Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
    
  };

  const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertObjectsEqual(cd,dc);

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };

assertObjectsEqual(ab,ba);



