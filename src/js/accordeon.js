$(document).ready(function() {
  $('.class_a').on('click', f_acc);
});

function f_acc(){
  $('.class_b').not($(this).next()).slideUp(200);
  $(this).next().slideToggle(200);
}
console.log("123")
