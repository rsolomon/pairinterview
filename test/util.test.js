$(document).ready(function(){
  module("Test utility functions");

  test("isEqual", function() {
    deepEqual(rsolomon.util.isEqual(1, "1"), false);
    deepEqual(rsolomon.util.isEqual(55, parseInt("55aa", 10)), true);
    deepEqual(rsolomon.util.isEqual(undefined, null), false);
    deepEqual(rsolomon.util.isEqual(0, ''), false);
  });

  test("reverse", function() {
    deepEqual(rsolomon.util.reverse([1, 2, 3, 4]).length, 4);
    deepEqual(rsolomon.util.reverse([]), []);
    deepEqual(rsolomon.util.reverse([1, 2, 3]), [3, 2, 1]);
  });

  test("flatten", function() {
    deepEqual(rsolomon.util.flatten([]), []);
    deepEqual(rsolomon.util.flatten([1, 2, 3]), [1, 2, 3]);
    deepEqual(rsolomon.util.flatten([[], 1, 2, 3]), [1, 2, 3]);
    deepEqual(rsolomon.util.flatten([1, [2], 3]), [1, 2, 3]);
    deepEqual(rsolomon.util.flatten([1, [2, [4, 3, [5]]]]), [1, 2, 4, 3, 5]);
    deepEqual(rsolomon.util.flatten([1, [2, 4], 3]), [1, 2, 4, 3]);
  });

  test("map", function() {
    var test1 = rsolomon.util.map([1, 2, 3], function(arg) {
      return 2 + arg;
    });
    deepEqual(test1, [3, 4, 5]);

    var test2 = rsolomon.util.map([5, 6, 7], function(arg) {
      return arg;
    });
    deepEqual(test2, [5, 6, 7]);

    var test3 = rsolomon.util.map([5, "5", 5], function(arg) {
      return function(x) {
        return x + 5;
      }(arg);
    });
    deepEqual(test3, [10, 55, 10]);
  });

});