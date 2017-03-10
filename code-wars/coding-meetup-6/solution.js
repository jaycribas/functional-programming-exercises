// Solution code for Coding Meetup #6 - Higher-Order Functions Series - Can they code in the same language?
// https://www.codewars.com/kata/coding-meetup-number-6-higher-order-functions-series-can-they-code-in-the-same-language
var _ = require('ramda');

var list1 = [
  { firstName: 'Daniel', lastName: 'J.', country: 'Aruba', continent: 'Americas', age: 42, language: 'JavaScript' },
  { firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Europe', age: 22, language: 'JavaScript' },
  { firstName: 'Hanna', lastName: 'L.', country: 'Hungary', continent: 'Europe', age: 65, language: 'JavaScript' },
];

var language = (list) => list.reduce((tally, lang) => {
  if (!tally[lang]) {
    tally[lang] = 1
  } else {
    tally[lang]++
  }
  console.log(tally)
  return tally
}, {})

var sameLanguage = function (obj) {
  console.log(Object.keys(obj).length)
  if (Object.keys(obj).length > 1){
    return "No they can't code in the same language."
  }
  return "Yes they can code in the same language."
}

var answer = _.compose(sameLanguage, language, _.map(_.prop('language')))

console.log(answer(list1))

// the elegant 3-liner:
// function isSameLanguage(list) {
//   return list.every((d, i, arr) => d.language === arr[0].language);
// }



// var myReduce = (list) => list.reduce((a, b) => {return a + b})
//
// var myCompose = _.compose(myReduce, _.map(_.prop('age')))

// console.log(myCompose(list1))
