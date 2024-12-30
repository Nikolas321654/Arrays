'use strict';

const removeElement = (array, item) => {
  const arrIndex = array.indexOf(item);
  if (arrIndex !== -1)array.splice(arrIndex, 1);
};

module.exports = { removeElement };
