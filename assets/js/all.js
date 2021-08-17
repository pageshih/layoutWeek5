"use strict";

console.log('Hello!');
$(document).ready(function () {
  console.log('HesSchool Hello!');
});
$("#expand").click(function () {
  $(this).toggleClass("rotate");
});
$("#navItem").click(function (e) {
  $(".current-page").removeClass("current-page");
  $(e.target).parent().addClass("current-page");
});
$("#reply").click(function () {
  $("#mentor,#endBtn").removeClass("d-flex");
  $("#mentor,#endBtn").addClass("d-none");
  $("#editArea").addClass("show");
  $("#cardPb0").addClass("pb-0");
});
$("#editCancel").click(function () {
  $("#editArea").removeClass("show");
  $("#mentor,#endBtn").removeClass("d-none");
  $("#mentor,#endBtn").addClass("d-flex");
  $("#cardPb0").removeClass("pb-0");
});
//# sourceMappingURL=all.js.map
