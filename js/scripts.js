$(document).ready(function(){
  let faveFlavors = ["chocolate", "vanilla", "strawberry"]
  faveFlavors.forEach(function(faveFlavor) {
    $("#output").append("<li>" + faveFlavor + "</li>");

  });
});