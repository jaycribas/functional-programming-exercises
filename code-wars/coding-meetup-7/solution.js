// Solution code for Coding Meetup #7 - Higher-Order Functions Series - Find the most senior developer
// https://www.codewars.com/kata/coding-meetup-number-7-higher-order-functions-series-find-the-most-senior-developer
var _ = require('ramda');

var list1 = [
  { firstName: 'Gabriel', lastName: 'X.', country: 'Monaco', continent: 'Europe', age: 49, language: 'PHP' },
  { firstName: 'Odval', lastName: 'F.', country: 'Mongolia', continent: 'Asia', age: 38, language: 'Python' },
  { firstName: 'Emilija', lastName: 'S.', country: 'Lithuania', continent: 'Europe', age: 19, language: 'Python' },
  { firstName: 'Sou', lastName: 'B.', country: 'Japan', continent: 'Asia', age: 49, language: 'PHP' },
];

var seniorSort = _.sortBy(_.prop('age'))

// return the last object, or the last objects that match age key
// use _.last(_.prop('age')) to check other objects with same value for age

var oldestAge = _.compose(_.prop('age'), _.last, seniorSort)

// every? match?
// return objects that match the oldestAge

var mostSenior = function (list){
  var oldest = []
  list.forEach(function(dev) {
    if (dev['age'] === oldestAge(list)){
      oldest.push(dev)
    }
  })
  return oldest
}

// console.log(oldestAge(list1))
console.log(mostSenior(list1))

// function findSenior(list) {
//   // thank you for checking out the Coding Meetup kata :)
//   return list.filter(a=>a.age === list.reduce(function(a,b){return a.age > b.age ? a : b}).age);
// }
