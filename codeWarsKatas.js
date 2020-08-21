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


