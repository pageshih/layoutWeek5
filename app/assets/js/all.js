console.log('Hello!');

$(document).ready(() => {
  console.log('HesSchool Hello!');

});

$("#expand").click(function(){
  $(this).toggleClass("rotate");
});


$("#navItem").click(function(e){
$(".current-page").removeClass("current-page");
$(e.target).parent().addClass("current-page");
});