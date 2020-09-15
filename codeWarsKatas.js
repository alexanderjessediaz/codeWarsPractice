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

function list(names){
  return names.reduce(function(prev, current, index, array){
    if (index === 0){
      return current.name;
    }
    else if (index === array.length - 1){
      return prev + ' & ' + current.name;
    } 
    else {
      return prev + ', ' + current.name;
    }
  }, '');
}

// TESTS
// Test.assertEquals(list([{name: 'Bart'},{name: 'Lisa'},{name: 'Maggie'},{name: 'Homer'},{name: 'Marge'}]), 'Bart, Lisa, Maggie, Homer & Marge',
// "Must work with many names")
// Test.assertEquals(list([{name: 'Bart'},{name: 'Lisa'},{name: 'Maggie'}]), 'Bart, Lisa & Maggie',
// "Must work with many names")
// Test.assertEquals(list([{name: 'Bart'},{name: 'Lisa'}]), 'Bart & Lisa', 
// "Must work with two names")
// Test.assertEquals(list([{name: 'Bart'}]), 'Bart', "Wrong output for a single name")
// Test.assertEquals(list([]), '', "Must work with no names")


// PROBLEM 9/4
// Given a list of numbers, determine whether the sum of its elements is odd or even.

// Give your answer as a string matching "odd" or "even".

// If the input array is empty consider it as: [0] (array with a zero).

// SOLUTION
function oddOrEven(array) {
  let sum = array.reduce(function(acc,cv){
   return cv +acc 
 }, 0)
 if (sum  %2 === 0){
   return 'even'
 } else {
   return 'odd'
 }
}

// PROBLEM 
// Write a function that takes an array of strings as an argument and returns a sorted array containing the same strings, ordered from shortest to longest.

// For example, if this array were passed as an argument:

// ["Telescopes", "Glasses", "Eyes", "Monocles"]

// Your function would return the following array:

// ["Eyes", "Glasses", "Monocles", "Telescopes"]

// All of the strings in the array passed to your function will be different lengths, so you will not have to decide how to order multiple strings of the same length.

// SOLUTION
function sortByLength (array) {
  array.sort(function(a,b){
    return a.length - b.length
  })
 return array
};

// PROBLEM
// Your team is writing a fancy new text editor and you've been tasked with implementing the line numbering.

// Write a function which takes a list of strings and returns each line prepended by the correct number.

// The numbering starts at 1. The format is n: string. Notice the colon and space in between.

// SOLUTION

var number = function(array) {
  return array.map(function (line, index) {
    return (index + 1) + ": " + line;
  });
}

// PROBLEM
// In this simple Kata your task is to create a function that turns a string into a Mexican Wave. You will be passed a string and you must return that string in an array where an uppercase letter is a person standing up. 

// SOLUTION 

function wave(str){
  let newArr = [];
  for (let i = 0; i < str.length; i++) {
    let copy = str.split('');
    if(copy[i] !== ' ') {
    copy[i] = copy[i].toUpperCase()
    newArr.push(copy.join(''))
    }
  }
  return newArr
}

// 9/8
// PROBLEM Two to One

// Take 2 strings s1 and s2 including only letters from ato z. Return a new sorted string, the longest possible, containing distinct letters,

// each taken only once - coming from s1 or s2.
// Examples:
// a = "xyaabbbccccdefww"
// b = "xxxxyyyyabklmopq"
// longest(a, b) -> "abcdefklmopqwxy"

// a = "abcdefghijklmnopqrstuvwxyz"
// longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"

// SOLUTION
function longest(s1, s2) {
  let strArr1 = s1.split("")
   let strArr2 = s2.split("")
   let strArr = strArr1.concat(strArr2)
  let sortedArr = strArr.reduce(function(acc,cv,i,arr) {
     if (acc.indexOf(cv) === -1) {
       acc.push(cv)
     }
     return acc
   }, [])
   return sortedArr.sort().join("")
 }

 // 9/9
 //PROBLEM
//  You live in the city of Cartesia where all roads are laid out in a perfect grid. You arrived ten minutes too early to an appointment, so you decided to take the opportunity to go for a short walk. The city provides its citizens with a Walk Generating App on their phones -- everytime you press the button it sends you an array of one-letter strings representing directions to walk (eg. ['n', 's', 'w', 'e']). You always walk only a single block for each letter (direction) and you know it takes you one minute to traverse one city block, so create a function that will return true if the walk the app gives you will take you exactly ten minutes (you don't want to be early or late!) and will, of course, return you to your starting point. Return false otherwise.

//  Note: you will always receive a valid array containing a random assortment of direction letters ('n', 's', 'e', or 'w' only). It will never give you an empty array (that's not a walk, that's standing still!).

// SOLUTION 
function isValidWalk(walk) {
  if (walk.length != 10) return false
       
  const directionObj = walk.reduce(function(acc,cv){
    acc[cv]++
    return acc
  },{n:0,s:0,e:0,w:0})
  
  if (directionObj.n === directionObj.s && directionObj.e === directionObj.w) return true
  return false
}

// PROBLEM
// Nathan loves cycling.

// Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water per hour of cycling.

// You get given the time in hours and you need to return the number of litres Nathan will drink, rounded to the smallest value.

// For example:

// time = 3 ----> litres = 1

// time = 6.7---> litres = 3

// time = 11.8--> litres = 5

// SOLUTION


const liter = time/2
  return Math.floor(liter)


  // TEST
  // Test.describe('Fixed tests', _ => {
  //   Test.it('Tests', _ => {
  //     Test.assertEquals(litres(2), 1, 'should return 1 litre');
  //     Test.assertEquals(litres(1.4), 0, 'should return 0 litres');
  //     Test.assertEquals(litres(12.3), 6, 'should return 6 litres');
  //     Test.assertEquals(litres(0.82), 0, 'should return 0 litres');
  //     Test.assertEquals(litres(11.8), 5, 'should return 5 litres');
  //     Test.assertEquals(litres(1787), 893, 'should return 893 litres');
  //     Test.assertEquals(litres(0), 0, 'should return 0 litres');
  //   });
  // });

  // PROBLEM return a string's even characters
//   Write a function that returns a sequence (index begins with 1) of all the even characters from a string. If the string is smaller than two characters or longer than 100 characters, the function should return "invalid string".

// For example:

// "abcdefghijklm" --> ["b", "d", "f", "h", "j", "l"]
// "a"             --> "invalid string"

// SOLUTION
function evenChars(string) {
let stringArr = string.split("").slice(1)
  if(string.length < 2)   {
   return "invalid string"
    }
  else if (string.length > 100) {
    return "invalid string"
  }  
  else {
    let strIdxArr = stringArr.reduce(function(acc,cv,i){
      if (i%2=== 0) acc = acc + cv
      return acc 
    })
    return strIdxArr.split("")
  }
}

// TESTS
// Test.assertSimilar(evenChars ("a"), "invalid string")
// Test.assertSimilar(evenChars ("abcdefghijklm"), ["b", "d", "f", "h", "j", "l"])

// 9/14
//PROBELM
// Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

// It should remove all values from list a, which are present in list b.

// arrayDiff([1,2],[1]) == [2]
// If a value is present in b, all of its occurrences must be removed from the other:

// arrayDiff([1,2,2,2,3],[2]) == [1,3]

// SOLUTION
function arrayDiff(a,b){
  if (a.length === 0) return a
 var newArr = a.filter((num) => !b.includes(num))
 return newArr
}

//TESTS
// Test.describe("Sample tests", function() {
//   Test.it("Should pass Sample tests", function() {
//     Test.assertDeepEquals(arrayDiff([], [4,5]), [], "a was [], b was [4,5]");
//     Test.assertDeepEquals(arrayDiff([3,4], [3]), [4], "a was [3,4], b was [3]");
//     Test.assertDeepEquals(arrayDiff([1,8,2], []), [1,8,2], "a was [1,8,2], b was []");
//   });
// }); 

// 9/15
// PROBELM reverseWord
// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

// Examples
// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"

// SOLUTION
function reverseWords(str) {
  const strArr = str.split(" ")
  const char = strArr.map(char => {
    const reverseChar = char.split('').reverse().join("")
    return reverseChar
  })
  
  return char.join(" ")
}

// TESTS
// Test.describe('Sample Tests', _ => {
//   Test.it('Should pass Sample tests', _ => {
//     Test.assertEquals(reverseWords('The quick brown fox jumps over the lazy dog.'), 'ehT kciuq nworb xof spmuj revo eht yzal .god');
//     Test.assertEquals(reverseWords('apple'), 'elppa');
//     Test.assertEquals(reverseWords('a b c d'), 'a b c d');
//     Test.assertEquals(reverseWords('double  spaced  words'), 'elbuod  decaps  sdrow');
//   });
// });