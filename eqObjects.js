const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`✅✅✅  Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴🔴🔴  Assertion Failed: ${actual} !== ${expected}`);
  }

};


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

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };

assertEqual(eqObjects(ab,ba),true)

const abc = { a: "1", b: "2", c: "3" };

assertEqual(eqObjects(ab, abc),false)

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd,dc), true);

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false);


module.exports = eqObjects;