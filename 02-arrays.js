'use script';

const people = [
  { name: 'Wes', year: 1988 },
  { name: 'Kait', year: 1986 },
  { name: 'Irv', year: 1970 },
  { name: 'Lux', year: 2015 }
];
const comments = [
  { text: 'Love this!', id: 523423 },
  { text: 'Super good', id: 823423 },
  { text: 'You are the best', id: 2039842 },
  { text: 'Ramen is my fav food ever', id: 123523 },
  { text: 'Nice Nice Nice!', id: 542328 }
];
// Some and Every Checks
// Array.prototype.some() // is at least one person 19 or older?
// At least one thing in array meets what you are looking for

// const isAdult = people.some(person => {
//   const currentYear = new Date().getFullYear();
//   return currentYear - person.year >= 19;
// });

const isAdult = people.some(
  person => new Date().getFullYear() - person.year >= 19
);

console.log({ isAdult });

// Array.prototype.every() // is everyone 19 or older?
// Do all elements in the array meet the condition (callback function in every method)

const areAllAdults = people.every(
  person => new Date().getFullYear() - person.year >= 19
);

console.log({ areAllAdults });

// Array.prototype.find()
// Find is like filter, but instead returns just the one you are looking for
// find the comment with the ID of 823423

const foundComment = comments.find(comment => comment.id === 823423);
// Arrow function with implicit return

console.log({ foundComment });

// Array.prototype.findIndex()
// find the index of the element
// Find the comment with this ID
// delete the comment with the ID of 823423

const foundIndex = comments.findIndex(comment => comment.id === 823423);

console.log(comments);
console.log({ foundIndex });
const newComments = [
  ...comments.slice(0, foundIndex),
  ...comments.slice(foundIndex + 1)
];
comments.splice(foundIndex, 1);
console.log(comments);
console.log(newComments);
