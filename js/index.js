var types = ["Boolean", "Number", "String", "Function", "Object", "Undefined", "Null"];

/**
 * 1) This should send an alert to the user with the text they entered.
 * Unfortunately, all it does is submit the form. Why?
 */
$('.form-alert').on('submit', function() {
  alert($(this).find('.txt-alert').val());
  return false;
});

$(document).ready(function() {

  /**
   * 2) This should print a list of Javascript object types when .btn-types
   * button is clicked. But it doesn't... why?
   */
  $('.btn-types').on('click', function() {
    var $typesUl = $('<ul></ul>');
    _.each(types, function(type) {
      var $li = $('li').html(type);
      $typesUl.append($li);
    });
    $(this).after($typesUl);
  });

  /**
   * 3) This takes the value from two inputs and prints their sum. But something
   * doesn't seem quite right... What's up?
   *
   * After you figure this one out, see what happens when you input a value that
   * starts with a 0.
   */
  $('.form-add').on('submit', function() {
    var total = 0;
    _.each($(this).find('.txt-add'), function(valInput) {
      total += $(valInput).val();
    });
    $('.add-answer').text(total);

    // Prevent the default submit event from continuing.
    return false;
  });

  /**
   * 4) Unexpected results abound! This -WILL- freeze your browser. Why?
   */
  var $body = $('body');
  var iteration = function() {
    for (i = 0; i < 2; i++) {
      var $image = $('<img/>').prop('src', 'img/smiley.jpeg');
      $body.append($image);
    }
  };
  $('.btn-mystery').on('click', function() {
    for (i = 0; i < 5; i++) {
      iteration();
    }
  });

  /**
   * 5) Finish problem 1 again, but without putting the call into DOM ready.
   */


});
