$(document).ready(function() {
  if($(document).width() < 769 ){
    $('.accordeon__title').on('click', f_acc);
  }
  else{
    $('.accordeon__title').off('click', f_acc);
  }
});

function f_acc(){
  $('.accordeon__list').not($(this).next()).slideUp(200);
  $(this).next().slideToggle(200);
}
$(window).resize(function() {
  let width = 0;
  width = $(window).width();
  if (width < 769) {
    $('.accordeon__title').off('click', f_acc);
    $('.accordeon__title').on('click', f_acc);
  }
  else{
    $('.accordeon__title').off('click', f_acc);
  }
});
