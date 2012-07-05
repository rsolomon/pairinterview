/**
 * These functions are all written incorrectly, and therefore are failing their
 * unit tests. Without changing the unit tests, identify and fix the problems,
 * such that all of the tests pass.
 */

var rsolomon = (rsolomon || {});
rsolomon.util = (rsolomon.util || {});

_.extend(rsolomon.util, {
  /**
   * Returns equality of type and value.
   */
  isEqual: function(arg1, arg2) {
    return arg1 == arg2;
  },

  /**
   * In-place reversal of an array. Also returns a pointer to the array.
   */
  reverse: function(arr) {
    for (var i = 0; i < arr.length; i++) {
      arr[arr.length - 1 - i] = arr[i];
    }
    return arr;
  },

  /**
   * Flattens a nested array
   */
  flatten: function(arr) {
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] instanceof Array) {
        newArr = newArr.concat(rsolomon.util.flatten(arr[i]));
      } else {
        newArr[i] = arr[i];
      }
    }
    return newArr;
  },

  /**
   * Produces a new array by calling `iterator` on every argument in `arr` and
   * placing its value into the new array.
   */
  map: function(arr, iterator) {
    var ret = [];
    for (var i in arr) {
      ret.push(iterator(i));
    }
    return ret;
  }
});

