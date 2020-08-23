
const middle = require('../middle');
const assertArraysEqual = require('../assertArraysEqual');

const mid = middle([1,2,3]);
assertArraysEqual(mid,[2]);

const mid1 = middle([1,2,3,4,5]);
assertArraysEqual(mid1,[3]);

const mid2 = middle([1]);
assertArraysEqual(mid2,[]);

const mid3 = middle([1,2]);
assertArraysEqual(mid3,[]);

const mid4 = middle([1,2,3,4]);
assertArraysEqual(mid4,[2,3]);

const mid5 = middle([1,2,3,4,5,6]);
assertArraysEqual(mid5,[3,4]);

