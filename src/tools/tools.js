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

// Make changes to string to replace values,
// while titleizing
const cleanAndTitle = value => {
  if (typeof value === 'string') {
    return titleize(value.replace(/_/g, ' '));
  } else {
    return value;
  }
};

const titleize = sentence => {
  if (!sentence.split) return sentence;
  var _titleizeWord = function(string) {
      return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
    },
    result = [];
  sentence.split(' ').forEach(function(w) {
    result.push(_titleizeWord(w));
  });
  return result.join(' ');
};

export {
  removeFromArrayByIndex,
  toTwelveHourTimeShort,
  convertIfDate,
  cleanAndTitle,
  titleize
};
