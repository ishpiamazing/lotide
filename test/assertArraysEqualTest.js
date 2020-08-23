const assertArraysEqual = require('../assertArraysEqual');


assertArraysEqual([1,2,4,5],[1,2,4,5]);
assertArraysEqual([2,3,8],[2,2,8]);
assertArraysEqual([3,4,5,6,7,8],[3,4,5,6,7,9]);
assertArraysEqual(["Loopy","Lighthouse"],["Loopy","Lighthouse"]);