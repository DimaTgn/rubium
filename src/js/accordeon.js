const accordeonItem = document.getElementsByClassName('filter__accordeon_item')
const accordeonTitle = document.getElementsByClassName('filter_accordeon_title')
for (let i = 0; i < accordeonTitle.length; i++) {
  accordeonTitle[i].addEventListener('click', toggleItem, false)
}
function toggleItem() {
  const itemClass = this.parentNode.className
  for (let i = 0; i < accordeonItem.length; i++) {
    accordeonItem[i].className = 'filter__accordeon_item close'
  }
  if (itemClass === 'filter__accordeon_item close') {
    this.parentNode.className = 'filter__accordeon_item open'
  }
}
