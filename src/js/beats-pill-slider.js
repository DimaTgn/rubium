// Находим элементы кнопок
const showPrevBtn = document.getElementById('button_prev')
const showNextBtn = document.getElementById('button_next')
const slideImage = document.getElementById('m_beats-pill__img_slide')

// Создаем события
showPrevBtn.addEventListener('click', onShowPrevBtnClick)
showNextBtn.addEventListener('click', onShowNextBtnClick)

// Создаем массив картинок (временный костыль)
const imagesSrc = []
imagesSrc.push('../src/img/detail/beats_icons1.png')
imagesSrc.push('../src/img/detail/beats_icons2.png')
imagesSrc.push('../src/img/detail/beats_icons3.png')
imagesSrc.push('../src/img/detail/beats_icons4.png')
imagesSrc.push('../src/img/detail/beats_icons5.png')
imagesSrc.push('../src/img/detail/beats_icons6.png')
imagesSrc.push('../src/img/detail/beats_icons7.png')

let currentImageIndex = 0

slideImage.src = imagesSrc[currentImageIndex]
showPrevBtn.disabled = true

// Основные функции
function onShowPrevBtnClick () {
  currentImageIndex--
  slideImage.src = imagesSrc[currentImageIndex]
  showNextBtn.disabled = false

  // Кнопка влево становится неактивной при достижении первой картинки
  if (currentImageIndex === 0) {
    showPrevBtn.disabled = true
  }
}

function onShowNextBtnClick () {
  currentImageIndex++
  slideImage.src = imagesSrc[currentImageIndex]
  showPrevBtn.disabled = false

  // Кнопка вправо становится неактивной при достижении последней картинки
  if (currentImageIndex === (imagesSrc.length - 1)) {
    showNextBtn.disabled = true
  }
}
