// Deletes an item in an array by using the function (fnMatch) to
// find the index of the item to delete.
// Example Usage:
//      removeFromArrayById(array, x => x.id == 5);
const removeFromArrayById = (arr, fnMatch) => {
  const index = arr.findIndex(fnMatch);
  return arr.slice(0, index).concat(arr.slice(index + 1, arr.length));
};

// Converts time into a 12 hour time
const toTwelveHourTimeShort = date => {
  return date.toLocaleString('en-US', {
    dateStyle: 'short',
    timeStyle: 'short'
  });
};

export { removeFromArrayById, toTwelveHourTimeShort };
