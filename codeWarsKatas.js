// codewars
// 8/19, Problem: like

// You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.

// Implement a function likes :: [String] -> String, which must take in input array, containing the names of people who like an item. It must return the display text as shown in the examples:

// likes [] // must be "no one likes this"
// likes ["Peter"] // must be "Peter likes this"
// likes ["Jacob", "Alex"] // must be "Jacob and Alex like this"
// likes ["Max", "John", "Mark"] // must be "Max, John and Mark like this"
// likes ["Alex", "Jacob", "Mark", "Max"] // must be "Alex, Jacob and 2 others like this"
// For 4 or more names, the number in and 2 others simply increases.

//MY SOLUTION


function likes(names) {
    return names.length == 0 ? 'no one likes this'
      : names.length == 1 ? `${names[0]} likes this`
      : names.length == 2 ? `${names[0]} and ${names[1]} like this`
      : names.length == 3 ? `${names[0]}, ${names[1]} and ${names[2]} like this`
      : `${names[0]}, ${names[1]} and ${names.length-2} others like this`
  }

  // TESTS
//   describe('example tests', function() {
//     it('should return correct text', function() {
//       Test.assertEquals(likes([]), 'no one likes this');
//       Test.assertEquals(likes(['Peter']), 'Peter likes this');
//       Test.assertEquals(likes(['Jacob', 'Alex']), 'Jacob and Alex like this');
//       Test.assertEquals(likes(['Max', 'John', 'Mark']), 'Max, John and Mark like this');
//       Test.assertEquals(likes(['Alex', 'Jacob', 'Mark', 'Max']), 'Alex, Jacob and 2 others like this');
//     });
//   });


// 8/19
// Problem: jaden string prototype

// Jaden Smith, the son of Will Smith, is the star of films such as The Karate Kid (2010) and After Earth (2013). Jaden is also known for some of his philosophy that he delivers via Twitter. When writing on Twitter, he is known for almost always capitalizing every word. For simplicity, you'll have to capitalize each word, check out how contractions are expected to be in the example below.

// Your task is to convert strings to how they would be written by Jaden Smith. The strings are actual quotes from Jaden Smith, but they are not capitalized in the same way he originally typed them.

// Example:

// Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
// Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes Aren't Real"


//MY FIRST ATTEMPT

// const str = "the little frog"

// String.prototype.toJadenCase = function () {
//  const wordArray = str.trim().split(" ")
//  const capSentence = wordArray.map(word => {
//   let capLetter = word[0].toUpperCase()
//   return capLetter + word.slice(1)
// })
//  const jadenWords = capSentence.join(" ") 
// };

// console.log(str.toJadenCase())

//MY SOLUTION

String.prototype.toJadenCase = function () {
  var inputString = this
  const wordArray = inputString.trim().split(" ")
   const capSentence = wordArray.map(word => {
     var capLetter = word[0].toUpperCase()
     return capLetter + word.slice(1)
   })
  const jadenWords = capSentence.join(" ") 
  return jadenWords
 };


//TESTS
// var str = "How can mirrors be real if our eyes aren't real";
// Test.assertEquals(str.toJadenCase(), "How Can Mirrors Be Real If Our Eyes Aren't Real");


// 8/20/2020
//PROBELM: 
// Trolls are attacking your comment section!

// A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

// Your task is to write a function that takes a string and return a new string with all vowels removed.

// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

// Note: for this kata y isn't considered a vowel.

//SOULTUON:


function disemvowel(str) {
  var strArray= str.split('')
  let removeA = strArray.filter(char => {
    return char !== "a"
  })
  let removeE = removeA.filter(char => {
    return char !== "e"
  })
  let removeI = removeE.filter(char => {
    return char !== "i"
  })
  let removeO = removeI.filter(char => {
    return char !== "o"
  })
  let removeU = removeO.filter(char => {
    return char !== "u"
  })
  let removeCapA = removeU.filter(char => {
    return char !== "A"
  })
  let removeCapE = removeCapA.filter(char => {
    return char !== "E"
  })
  let removeCapI = removeCapE.filter(char => {
    return char !== "I"
   })
  let removeCapO = removeCapI.filter(char => {
    return char !== "O"
  })
  let removeCapU = removeCapO.filter(char => {
    return char !== "U"
  })
  
  return removeCapU.join("")
 }

 // TESTS
//  Test.assertEquals(disemvowel("This website is for losers LOL!"),
//   "Ths wbst s fr lsrs LL!")

// 8/21

// PROBLEM: make function that takes in a string and will make an object with letters as key and the number of times each letter occurs in word


// SOLUTION

function getObjFromStr(word){
    const wordToCharArray = word.split("")
    let wordCharsCount = wordToCharArray.reduce(function (allChars, char) {
      if (char in allChars) {
        allChars[char]++
      }
      else {
        allChars[char] = 1
      }
      return allChars
    }, {})
    return wordCharsCount
}


// TEST
// Test.assertEquals(getObjFromStr('pneumonoultramicroscopicsilicovolcanoconiosis'),
// Object {
//   a: 2,
//   c: 6,
//   e: 1,
//   i: 6,
//   l: 3,
//   m: 2,
//   n: 4,
//   o: 9,
//   p: 2,
//   r: 2,
//   s: 4,
//   t: 1,
//   u: 2,
//   v: 1
// }

// PROBLEM 8/24

// This time no story, no theory. The examples below show you how to write function accum:

// Examples:

// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
// The parameter of accum is a string which includes only letters from a..z and A..Z.
// const testString = "aVeyPZmGu"
// function accum(s) {
	// takes in a string of chars
  // first char needs to be capitalized followed by a "-"
  // second char after the "-" is capitalized follwed by the second char lower case. i.e. if second char is "f" then it would be "Ff" end with another "-"
  // each follwing char from the parameter will start with the char capitalized and followed by the same char lowercase x times with x being the char's index -1 then a "-"
  
//   const stringArr = s.split("")
  
//   const multiplyArrIndex = stringArr.reduce((acc, cv, ci, arr))
//   }


// console.log(accum(testString))



// 

// PROBLEM 8/24

// Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

// Examples:
// Input: 42145 Output: 54421

// Input: 145263 Output: 654321

// Input: 123456789 Output: 987654321

// SOLUTION: 
function descendingOrder(n){
  const strArr = n.toString().split("")
  const sortedArr = strArr.sort((a,b) => b-a)
  return parseInt(sortedArr.join(""), 10)
 }

//

// TESTS:
// Test.assertEquals(descendingOrder(0), 0)
// Test.assertEquals(descendingOrder(1), 1)
// Test.assertEquals(descendingOrder(123456789), 987654321)

// PROBLEM 8/28

// Welcome.

// In this kata you are required to, given a string, replace every letter with its position in the alphabet.

// If anything in the text isn't a letter, ignore it and don't return it.

// "a" = 1, "b" = 2, etc.

// Example
// alphabetPosition("The sunset sets at twelve o' clock.")
// Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" (as a string)

// SOLUTION 
// function alphabetPosition(text) {
//   let newStr = ""
// text = text.toLowerCase()
// for (let i = 0; i < text.length; i++) {
// let num = text.charCodeAt(i) - 96
// newStr += (num < 1 || num > 26) ? "" : num + " "
// }
// if (newStr.charAt(newStr.length - 1) == ' ')
// newStr = newStr.slice(0, -1)
// return newStr
// }

// TESTS
// Test.assertEquals(alphabetPosition("The sunset sets at twelve o' clock."), "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11");
// Test.assertEquals(alphabetPosition("The narwhal bacons at midnight."), "20 8 5 14 1 18 23 8 1 12 2 1 3 15 14 19 1 20 13 9 4 14 9 7 8 20");

//8/31

//PROBLEM
// Given an array of ones and zeroes, convert the equivalent binary value to an integer.

// Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1.

// Examples:

// Testing: [0, 0, 0, 1] ==> 1
// Testing: [0, 0, 1, 0] ==> 2
// Testing: [0, 1, 0, 1] ==> 5
// Testing: [1, 0, 0, 1] ==> 9
// Testing: [0, 0, 1, 0] ==> 2
// Testing: [0, 1, 1, 0] ==> 6
// Testing: [1, 1, 1, 1] ==> 15
// Testing: [1, 0, 1, 1] ==> 11
// However, the arrays can have varying lengths, not just limited to 4.

// SOLUTION UNSOLVED CURRENTLY
// const binaryArrayToNumber = arr => {
//   // your code
  
//   const reverseArr = arr.reverse()
  
//   reverseArr.reduce(function (acc, cv, index, iv) {
//     if (index === 0) {
//       cv = 1
//      acc = cv + acc
// //       console.log(acc)
//     } else if ( index === 1 && cv === 0) {
//       cv = cv +2 
//       acc = 2

//       console.log(acc)
      
//       }
//     else if ( index ===1 && cv === 1) {
//       cv = cv +1
//       acc = cv
// //       console.log(acc)
//     }
//     else if (index === 2 && cv === 0 ) {
//       acc = cv +4
// //       console.log(acc)
//     }
//     else if ( index === 2 && cv === 1) {
//       acc = cv + 3
// //       console.log(acc)
//     }
//     else if (index === 3){
//       cv = 4 * 2
//       acc = cv
// //       console.log(cv)
//       console.log(acc)
//     }
//     else {
//       acc = index
//     }
//   }, 0)
// };


// 9/2 PROBLEM format strings

// Given: an array containing hashes of names

// Return: a string formatted as a list of names separated by commas except for the last two names, which should be separated by an ampersand.

// Example:

// list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ])
// // returns 'Bart, Lisa & Maggie'

// list([ {name: 'Bart'}, {name: 'Lisa'} ])
// // returns 'Bart & Lisa'

// list([ {name: 'Bart'} ])
// // returns 'Bart'

// list([])
// // returns ''

// SOLUTION

// function list(names){
//   return names.reduce(function(prev, current, index, array){
//     if (index === 0){
//       return current.name;
//     }
//     else if (index === array.length - 1){
//       return prev + ' & ' + current.name;
//     } 
//     else {
//       return prev + ', ' + current.name;
//     }
//   }, '');
// }

// TESTS
// Test.assertEquals(list([{name: 'Bart'},{name: 'Lisa'},{name: 'Maggie'},{name: 'Homer'},{name: 'Marge'}]), 'Bart, Lisa, Maggie, Homer & Marge',
// "Must work with many names")
// Test.assertEquals(list([{name: 'Bart'},{name: 'Lisa'},{name: 'Maggie'}]), 'Bart, Lisa & Maggie',
// "Must work with many names")
// Test.assertEquals(list([{name: 'Bart'},{name: 'Lisa'}]), 'Bart & Lisa', 
// "Must work with two names")
// Test.assertEquals(list([{name: 'Bart'}]), 'Bart', "Wrong output for a single name")
// Test.assertEquals(list([]), '', "Must work with no names")