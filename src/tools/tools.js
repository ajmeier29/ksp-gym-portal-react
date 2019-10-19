import moment from 'moment';
// Deletes an item in an array by using the function (fnMatch) to
// find the index of the item to delete.
// Example Usage:
//      removeFromArrayByIndex(array, x => x.id == 5);
const removeFromArrayByIndex = (arr, fnMatch) => {
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

const isValidDate = date => {
  return date instanceof Date && !isNaN(date);
};

const convertIfDate = value => {
  let isDate = new Date(value);
  if (
    typeof value === 'string' &&
    isValidDate(isDate) &&
    isDate > new Date(2018, 1, 1)
  ) {
    return toTwelveHourTimeShort(new Date(value));
  }
  return value;
};

export { removeFromArrayByIndex, toTwelveHourTimeShort, convertIfDate };
