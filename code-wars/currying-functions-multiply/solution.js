// Solution code for Currying functions: multiply all elements in an array
// https://www.codewars.com/kata/currying-functions-multiply-all-elements-in-an-array

var _ = require('ramda');

var multiplyAll = function(x) {
  return function(y){
    var multiply = function(a){
      return a * y
    }
    return x.map(multiply)
  }
}

console.log(multiplyAll([1,2,3])(2))
