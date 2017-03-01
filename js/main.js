//JavaScript file
$(document).ready(function() {
  $("#catclick").click(function() {
      $('#output').html(function(i, val) { return +val+1 });
  });

});
