'use strict';

// Find difference of two arrays
// elements from array1 that are not includes in array2

const difference = (array1, array2) => {
  const result = array1.filter((element) => !array2.includes(element));
  return result;
};

module.exports = { difference };
