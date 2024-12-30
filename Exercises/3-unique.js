'use strict';

// Create and return a new array without duplicate elements
// Don't modify initial array

const unique = (array) => {
  const filteredArray = [];
  for (let i = 0; i < array.length; i++) {
    if (!filteredArray.includes(array[i])) {
      filteredArray.push(array[i]);
    }
  }
  return filteredArray;
};

module.exports = { unique };
