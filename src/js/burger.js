document.addEventListener("DOMContentLoaded", ready);
function ready(){
  let onMobileMenu = false;
  const elemMenu = document.getElementsByClassName("burger-menu__box");
  const elemBurger = document.getElementsByClassName("burger-menu");
  elemBurger[0].addEventListener("click", function(){
    if(onMobileMenu === false){
      elemMenu[0].style.visibility = "visible";
      onMobileMenu = true;
    }
    else{
      elemMenu[0].style.visibility = "hidden";
      onMobileMenu = false;
    }
    this.classList.toggle("change");
  })
}
