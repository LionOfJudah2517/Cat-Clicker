//JavaScript file

var catNameOne = "Catty";
var catNameTwo = "Spidey";

$(document).ready(function() {
  $("#catclickone").click(function() {
      $('#output').html(function(i, val) { return +val+1 });
  });
  $("#catclicktwo").click(function() {
      $('#output').html(function(i, val) { return +val+1 });
  });
  $("#catOne").prepend("<h1>" + catNameOne + "</h1>");
  $("#catTwo").prepend("<h1>" + catNameTwo + "</h1>");
});
