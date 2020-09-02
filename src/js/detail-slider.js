document.querySelector(".slider__beats").addEventListener("click", function(e) {
  let parent = document.querySelector(".slider__beats_img"),
    first = parent.querySelector(".slider__item-img"),
    last = parent.querySelector(".slider__item-img:last-child");
  if (e.target.classList.contains("slider__beats_top")) {
    parent.appendChild(first);
  }
  if (e.target.classList.contains("slider__beats_bottom")) {
    parent.insertBefore(last, first);
  }
});
