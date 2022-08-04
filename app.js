// Some data we can work with
const inventors = [
  { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
  { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
  { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
  { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
  { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
  { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
  { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
  { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
  { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
  { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
  { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
  { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
];
// Array.prototype.filter()
// 1. Filter the array of inventors into a new array containing only the inventors born in the 1500's
const oldInventors = inventors.filter(i => i.year > 1499 && i.year < 1600);
console.log('• Task1 inventors born in the 1500s: ', oldInventors)

// Array.prototype.map()
// 2. Map the array of the inventors into a new array containing objects with just the first and last names as properties
const inventorsNames = inventors.map(function(i){
  return {
    first: i.first,
    last: i.last
  }
});
console.log('• Task2 return first and last names: ', inventorsNames)

// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest
const sortedByBD = inventors.sort((a, b) => a.year - b.year);
console.log('• Task3 sort by birth year: ', sortedByBD)

// 4. Sort the inventors by years lived from shortest to longest lived
const sortedByAge = inventors.sort(function(a, b){
  return (a.passed - a.year) - (b.passed - b.year)
});
console.log('• Task4 sort by age: ', sortedByAge)

// Array.prototype.reduce()
// 5. How many years did all the inventors live?
const ageSum = inventors.reduce(function(acc, num){
  return acc + (num.passed - num.year);
}, 0);

console.log('• Task5 sum of all inventors\' ages: ', ageSum)




const people = [
  'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick', 'Beecher, Henry',
  'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire', 'Bellow, Saul',
  'Benchley, Robert', 'Benenson, Peter', 'Ben-Gurion, David',
  'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester', 'Benson, Leana',
  'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar',
  'Berio, Luciano', 'Berle, Milton', 'Berlin, Irving', 'Berne, Eric',
  'Bernhard, Sandra', 'Berra, Yogi', 'Berry, Halle', 'Berry, Wendell',
  'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken', 'Biden, Joseph',
  'Bierce, Ambrose', 'Biko, Steve', 'Billings, Josh', 'Biondo, Frank',
  'Birrell, Augustine', 'Black, Elk', 'Blair, Robert', 'Blair, Tony',
  'Blake, William'
];

// Array.prototype.map()
// 6. Map the people array such that the new array consists of strings with the names formatted as "First Last", e.g., "Becker, Carl" should be mapped to "Carl Becker".

const reversedName = people.map(function(i){
  return i.split(', ').reverse().join(' ');
});
console.log('• Task6 reversing names: ', reversedName);

const data = [
  'car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van',
  'bike', 'walk', 'car', 'van', 'car', 'truck'
];

// Array.prototype.reduce()
// 7. Count the number of instances for each of the data items.
// Hint:  Return an object where the keys are 'car', 'truck', etc. and the values are the count.

// function tallyUP(obj, key) {
//   obj[key] = obj[key] ? obj[key] + 1 : 1;
//   return obj;
// };

function tallyUP(acc, item) {
  if (acc[item]){
    acc[item] = acc[item] + 1;
  } else {
    acc[item] = 1;
  }
  return acc
};

let tally = data.reduce(tallyUP, {});
console.log('• Task7 total tally: ', tally);

const devs = [
  { name: 'Wes', year: 1988 },
  { name: 'Kait', year: 1986 },
  { name: 'Irv', year: 1970 },
  { name: 'Lux', year: 2015 },
];

// Array.prototype.some()
// 8. Check if at least one person is 19 or older?
console.log('• Task8 Someone is older than 19yo?: ', devs.some(function(i){
  return 2022 - i.year > 19
}));


// Array.prototype.every()
// 9. Check if everyone is 19 or older?
console.log('• Task9 Is everyone older than 19yo?: ', devs.every(function(i){
  return 2022 - i.year > 19
}));


const comments = [
  { text: 'Love this!', id: 523423 },
  { text: 'Super good', id: 823423 },
  { text: 'You are the best', id: 2039842 },
  { text: 'Ramen is my fav food ever', id: 123523 },
  { text: 'Nice Nice Nice!', id: 542328 }
];

// Array.prototype.find()
// 10. Find the comment with the id of 823423
let theWantedComment = '';
comments.find(function(i){ 
  if (i.id == '823423') return theWantedComment += i.text;
});

console.log('• Task10 this is the comment you are looking for:', theWantedComment);

// Array.prototype.findIndex()
// 11. Find the index of the comment with an id of 123523
console.log('• Task11 the wanted index is: ', comments.findIndex(function(i){
  return i.id == '123523'  
}));

