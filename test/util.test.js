$(document).ready(function(){
  QUnit.module("Test utility functions");

  QUnit.test("isEqual", function(assert) {
    assert.deepEqual(rsolomon.util.isEqual(1, "1"), false);
    assert.deepEqual(rsolomon.util.isEqual(55, parseInt("55aa", 10)), true);
    assert.deepEqual(rsolomon.util.isEqual(undefined, null), false);
    assert.deepEqual(rsolomon.util.isEqual(0, ''), false);
  });

  QUnit.test("reverse", function(assert) {
    assert.deepEqual(rsolomon.util.reverse([1, 2, 3, 4]).length, 4);
    assert.deepEqual(rsolomon.util.reverse([]), []);
    assert.deepEqual(rsolomon.util.reverse([1, 2, 3]), [3, 2, 1]);
  });

  QUnit.test("flatten", function(assert) {
    assert.deepEqual(rsolomon.util.flatten([]), []);
    assert.deepEqual(rsolomon.util.flatten([1, 2, 3]), [1, 2, 3]);
    assert.deepEqual(rsolomon.util.flatten([[], 1, 2, 3]), [1, 2, 3]);
    assert.deepEqual(rsolomon.util.flatten([1, [2], 3]), [1, 2, 3]);
    assert.deepEqual(rsolomon.util.flatten([1, [2, [4, 3, [5]]]]), [1, 2, 4, 3, 5]);
    assert.deepEqual(rsolomon.util.flatten([1, [2, 4], 3]), [1, 2, 4, 3]);
  });

  QUnit.test("map", function(assert) {
    var test1 = rsolomon.util.map([1, 2, 3], function(arg) {
      return 2 + arg;
    });
    assert.deepEqual(test1, [3, 4, 5]);

    var test2 = rsolomon.util.map([5, 6, 7], function(arg) {
      return arg;
    });
    assert.deepEqual(test2, [5, 6, 7]);

    var test3 = rsolomon.util.map([5, "5", 5], function(arg) {
      return function(x) {
        return x + 5;
      }(arg);
    });
    assert.deepEqual(test3, [10, 55, 10]);
  });

});

