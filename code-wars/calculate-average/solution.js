// Solution code for Calculate average
// https://www.codewars.com/kata/calculate-average/javascript

var _ = require('ramda');

var average = function (arr){
  return arr.reduce(function(acc, val) {
    return acc + val
  }, 0) / arr.length
}

console.log(average([20, 40, 60]))
