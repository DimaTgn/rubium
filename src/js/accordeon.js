$(document).ready(function() {
  if($(document).width() < 769 ){
    $('.class_a').on('click', f_acc);
  }
  else{
    $('.class_a').off('click', f_acc);
  }
});

function f_acc(){
  $('.class_b').not($(this).next()).slideUp(200);
  $(this).next().slideToggle(200);
}
$(window).resize(function() {
  let width = 0;
  width = $(window).width();
  if (width < 769) {
    $('.class_a').off('click', f_acc);
    $('.class_a').on('click', f_acc);
  }
  else{
    $('.class_a').off('click', f_acc);
  }
});
