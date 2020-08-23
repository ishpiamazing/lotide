const tail = require('../tail.js');
const assertEqual = require('../assertEqual');

const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, ["Lighthouse", "Labs"].length);

const words = ["Yo Yo", "Lighthouse", "Labs"];

assertEqual(words.length, 3);