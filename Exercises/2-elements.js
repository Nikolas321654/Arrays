'use strict';

const removeElements = (array, ...items) => {
  for (const item of items) {
    const arrIndex = array.indexOf(item);
    if (arrIndex !== -1) array.splice(arrIndex, 1);
  }
};

module.exports = { removeElements };
