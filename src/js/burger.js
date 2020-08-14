let onMobileMenu = false;
const elemMenu = document.getElementsByClassName("burger-menu__box");
function menuOn(x) {
  if(onMobileMenu === false){
    elemMenu[0].style.visibility = "visible";
    onMobileMenu = true;
  }
  else{
    elemMenu[0].style.visibility = "hidden";
    onMobileMenu = false;
  }
  x.classList.toggle("change");
}
