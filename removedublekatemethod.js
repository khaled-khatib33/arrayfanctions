/* we might need to filter falsy values like [0, undefined, null, flase]. This is a simple trick to do. */

var  mixedArray = [12, 'web development', NaN, undefined, null, false, 0];
var whatisTrue = mixedArray.filter(Boolean);
console.log(whatisTrue);